/**
 * An example bbs written using Iniquity 3
 * @module app
 */

/** @example */
import { Iniquity } from "./iniquity"
import { Assets } from "./assets"

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

const iq = new Iniquity({ basepath: "/iniquity/core/assets/" })

const welcomeArt = iq.artwork({ filename: Assets.sm_iniq2 })
welcomeArt.render({ clearScreenBefore: true, speed: 100 })

iq.print({
    text: `You just connected to an iniquity bbs. The artwork you are seeing above is called ${welcomeArt.filename} It's still pretty new. Likely has bugs. Real talk, it's not even finished. But maybe you'll still think it's cool.`
        .newlines()
        .color("background red")
        .center()
}).pause({ colorReset: true, newlines: 2, center: true })

iq.artwork({ filename: Assets.we_iniq3 }).render({ clearScreenBefore: false })

iq.say("You've connected to a prototype of the new Iniquity BBS Development Platform.".newlines(2).color("bright red").center()).pause()

iq.artwork({ filename: Assets.d_iniq1 }).render({ speed: 100 })
const login = iq.ask("What is your login: ".newlines(1))
switch (login) {
    case "new":
    case "signup":
        iq.artwork({ filename: Assets.newuser1 }).render({ clearScreenBefore: true })

        let newUser = iq.user({
            name: iq.ask("What would you like your handle to be?".newlines(2).color("white")),
            password: iq.ask("And your password?".newlines(2).color("white"))
        })

        iq.say(`Welcome ${newUser.name}. And goodbye!`.newlines().center())
        iq.disconnect()
        break
    default:
        if (iq.user({ name: login, password: iq.ask("And your password?".newlines(2).color("white")) })) {
            alert("somethingsync")
        }

        iq.pause()

        iq.artwork({ filename: Assets.d_iniq1 }).render({ clearScreenBefore: true })
        break
}

export { iq as app }
