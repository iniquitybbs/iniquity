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
load("/iniquity/lib/core.js")
const bbs = new Iniquity()

const welcomeArt = bbs.artwork({filename: "assets/sm!iniq2.ans"})
welcomeArt.render({clearScreenBefore: true, speed: 100})

bbs.print(
    `You just connected to an iniquity bbs. The artwork you are seeing above is called ${welcomeArt.filename} It's still pretty new. Likely has bugs. Real talk; it's not even finished. But maybe you'll still think it's cool.`
        .newlines()
        .color("background red")
        .center()
)   

bbs.pause({ colorReset: true, newlines: 2, center: true })

bbs.artwork({filename: "assets/artwork/we-iniq3.ans"}).render({clearScreenBefore: false})

bbs.say("You've connected to a prototype of the new Iniquity BBS Development Platform.".newlines(2).color("bright red").center())

let login = bbs.ask("What's your username?".newlines(1).color("green"))
if (login) {
    if (login === "new") {

        bbs.artwork({filename: "assets/newuser.ans"}).render()

        let newUuser = bbs.user(
            {
                name: bbs.ask("What would you like your handle to be?".newlines(2).color("white")), 
                password: bbs.ask("And your password?".newlines(2).color("white")),
            }
        )

        bbs.say(`Welcome ${newUuser.name}. And goodbye!`.newlines().center())

        
    } else {
        bbs.say(`Hey ${login} thanks for signing in, let's move on to the next menu...`.newlines().color("white").center())

        bbs.artwork({filename: "assets/artwork/we-iniq3.ans"}).render()

        bbs.say("Now that we know who you are, let's see if you can input the right password...".newlines().color("green").center())

        let password = bbs.ask("Your password".newlines().color("white"))
        if (password) bbs.say("Nice work entering a good password...".newlines().color("white"))

        bbs.artwork({filename: "assets/artwork/4d-iniq1.ans"}).render({clearScreenBefore: true})
    }
}

function signin(): void {

}
