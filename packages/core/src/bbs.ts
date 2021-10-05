import { BBS } from "./iniquity"
import { Directory as files } from "./assets"

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

const bbs = new BBS({ basepath: "/iniquity/core/assets/" })

const welcomeArt = bbs.artwork({ filename: files.sm_iniq2 })
welcomeArt.render({ clearScreenBefore: true, speed: 100 })

bbs.print({
    text: `You just connected to an iniquity bbs. The artwork you are seeing above is called ${welcomeArt.filename} It's still pretty new. Likely has bugs. Real talk, it's not even finished. But maybe you'll still think it's cool.`
        .newlines()
        .color("background red")
        .center()
}).pause({ colorReset: true, newlines: 2, center: true })

bbs.artwork({ filename: files.we_iniq3 }).render({ clearScreenBefore: false })

bbs.say("You've connected to a prototype of the new iniquity BBS Development Platform.".newlines(2).color("bright red").center()).pause()

bbs.artwork({ filename: files.d_iniq1 }).render({ speed: 100 })
const login = bbs.ask("What is your login: ".newlines(1))
switch (login) {
    case "new":
    case "signup":
        bbs.artwork({ filename: files.newuser1 }).render({ clearScreenBefore: true })

        let newUser = bbs.user({
            name: bbs.ask("What would you like your handle to be?".newlines(2).color("white")),
            password: bbs.ask("And your password?".newlines(2).color("white"))
        })

        bbs.say(`Welcome ${newUser.name}. And goodbye!`.newlines().center())
        bbs.disconnect()
        break
    default:
        if (bbs.user({ name: login, password: bbs.ask("And your password?".newlines(2).color("white")) })) {
            alert("somethingsync")
        }

        bbs.pause()

        bbs.artwork({ filename: files.d_iniq1 }).render({ clearScreenBefore: true })
        break
}