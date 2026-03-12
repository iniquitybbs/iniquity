/**
 * WebSocket BBS server attachment
 * @module lib/ws-bbs-server
 * @summary Attach WebSocket endpoint to HTTP server and run BBS sessions over WS
 */

/*
-$a. ------------------ .a$ ---------------------------- %$!, ----------------%
 `$¸   .%$$^¸$$aa.     .¸$`        .        .a$a$$.      `¸$%  $a$.        .
-.aaa$ $$$$'- $$$$$.- $aaa. -.a%$^"$$aa -- .$$$$$'- $$a. $aaa. `$,$ ----------%
;$$$$',a$a$  d$%$$$$$,'$$$$;$$$$$  $$$$$., $$%$$"  d$a$$ '$$$$; $$$   .a%$  $$a
:$$$$;$$$$%; Z$$$$$$$$;$$$$:$$$$$. $$$$^$,;$$&$$   Z$$$$,;$$$$.a$$$a..$$$   $$$
.$$$$ `$$$$.  $$$%$$$' $$$$.`$$$$  $$%$$$$ `$$$$.   $%$$$ $$$$""$$$" $$$$:  a$$
 `$$$a.$$%$   $$$$$$';a$$$`  `¸$$aa$$$$&$': `$$$$a. $$$$'a$$$`.$$'$  $$$$;  $$$
%-----.------ $$$$'--------------- $$%$$' -- `¸$$$$$%$¸' ---- $$¸$a. `"$&$$//$%$
dz      .   .:'¸'     .        .   $$$$'     .        .       `¸$$$$y.     `$$&
%--------- a`-----------.--------- $$¸' -----.------------.---------------- $$$
   .      !a    . .    .      .   .:'   .  .                  .        .:.a$$$¸
.      .  '$a,          .        a` .   'a          .   .             s` .  . .
      .    ¸$Aa         .       !a       a!      .    .         ..   %s      .s
   .         ¸¸'     . .        '$$Aa.aA$$'        . .               `!$%a.a%//$
==============================================================================
   t h e    i n i q u i t y    b u l l e t i n   b o a r d   s y s t e m
==============================================================================
*/

import * as http from "http"
import { WebSocketServer } from "ws"
import type { TelnetServer } from "./telnet"

const WS_PATH = "/ws"

/**
 * Attach a WebSocket server to the existing HTTP server.
 * When a client connects to path /ws, a BBS session is created via the TelnetServer.
 * Call after TelnetServer.start() so snack:push and server info are already registered.
 */
export function attachWebSocketServer(httpServer: http.Server, telnetServer: TelnetServer): void {
    const wss = new WebSocketServer({ noServer: true })

    httpServer.on("upgrade", (request, socket, head) => {
        const pathname = request.url?.split("?")[0]
        if (pathname !== WS_PATH) {
            socket.destroy()
            return
        }

        wss.handleUpgrade(request, socket, head, (ws) => {
            wss.emit("connection", ws, request)
        })
    })

    wss.on("connection", (ws, request) => {
        const remoteAddress = request.socket?.remoteAddress ?? "websocket"
        telnetServer.handleWebSocketConnection(ws, remoteAddress)
    })

    console.log(`[iniquity] WebSocket BBS endpoint: ws://<host>:<api-port>${WS_PATH}`)
}
