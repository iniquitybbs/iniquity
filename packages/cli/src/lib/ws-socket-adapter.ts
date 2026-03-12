/**
 * WebSocket-to-Socket adapter
 * @module lib/ws-socket-adapter
 * @summary Presents a Node net.Socket-like interface to Session over a WebSocket
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

import { EventEmitter } from "events"
import type { WebSocket } from "ws"

/**
 * Socket-like adapter for WebSocket so Session can use it without change.
 * Emits "data" (Buffer), "close", "error"; provides write() and end().
 */
export class WebSocketSocketAdapter extends EventEmitter {
    public remoteAddress: string
    /** Set so Session can skip telnet negotiation (browser doesn't speak telnet). */
    public readonly isWebSocket = true
    private ws: WebSocket
    private ended = false

    constructor(ws: WebSocket, remoteAddress?: string) {
        super()
        this.ws = ws
        this.remoteAddress = remoteAddress ?? "websocket"

        this.ws.on("message", (data: Buffer | ArrayBuffer | Buffer[]) => {
            if (this.ended) return
            const buf = Buffer.isBuffer(data) ? data : Buffer.from(data as ArrayBuffer)
            this.emit("data", buf)
        })

        this.ws.on("close", () => {
            this.ended = true
            this.emit("close")
        })

        this.ws.on("error", (err: Error) => {
            this.emit("error", err)
        })
    }

    write(data: Buffer | string, encoding?: string): boolean {
        if (this.ended || this.ws.readyState !== 1) return false
        const buf = Buffer.isBuffer(data) ? data : Buffer.from(data, (encoding as BufferEncoding) ?? "binary")
        this.ws.send(buf)
        return true
    }

    end(): void {
        if (this.ended) return
        this.ended = true
        this.ws.close()
        this.emit("close")
    }

    destroy(): void {
        this.end()
    }
}

/**
 * Create a Socket-like object from a WebSocket for use with Session.
 */
export function createSocketFromWebSocket(ws: WebSocket, remoteAddress?: string): WebSocketSocketAdapter {
    return new WebSocketSocketAdapter(ws, remoteAddress)
}
