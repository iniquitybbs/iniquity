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

const bbs = new BBS()

bbs.renderArtwork({
    file: "assets/sm!iniq2.ans",
    clearScreenBefore: true
})

bbs.print(
    "You just connected to an iniquity bbs. It's still pretty new. Likely has bugs. Real talk; it's not even finished. But maybe you'll still think it's cool."
        .newlines()
        .color("background red")
        .center()
)

bbs.print("".color("reset")) // Need to be able to reset colors in a more intuitive way...

bbs.pause({ newlines: 2, center: true })

bbs.renderArtwork({
    file: "assets/zv_iniq.ans",
    clearScreenBefore: true,
    speed: 60
})

bbs.say("Let's play with colors!!!".newlines(2).center())
bbs.say("8 colors...".newlines(2).center())
bbs.say("The quick brown sysop jumps over the lazy user.".color("black").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("red").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("green").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("yellow").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("blue").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("magenta").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("cyan").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("white").newlines(1))

bbs.say("16 colors...".newlines(2).center())
bbs.say("The quick brown sysop jumps over the lazy user.".color("bright black").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("bright red").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("bright green").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("bright yellow").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("bright blue").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("bright magenta").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("bright cyan").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("bright white").newlines(1))

bbs.say("background colors...".newlines(2).center())
bbs.say("The quick brown sysop jumps over the lazy user.".color("background black").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background red").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background green").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background yellow").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background blue").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background magenta").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background cyan").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background white").newlines(1))

bbs.say("background BRIGHT colors...".newlines(2).center())
bbs.say("The quick brown sysop jumps over the lazy user.".color("background bright black").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background bright red").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background bright green").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background bright yellow").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background bright blue").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background bright magenta").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background bright cyan").newlines(1))
bbs.say("The quick brown sysop jumps over the lazy user.".color("background bright white").newlines(1))

bbs.pause({ newlines: 2, center: true })

bbs.renderArtwork({
    file: "assets/artwork/we-iniq3.ans",
    clearScreenBefore: false
})

bbs.say("You've connected to a prototype of the new Iniquity BBS Development Platform.".newlines(2).color("bright red").center())

let login = bbs.ask("What's your username?".newlines(1).color("green"))
if (login) {
    if (login === "new") {
        bbs.renderArtwork({
            file: "assets/artwork/newuser.ans",
            clearScreenBefore: false
        })

        bbs.ask("What would you like your handle to be?".newlines(2).color("white"))
    } else {
        bbs.say(`Hey ${login} thanks for signing in, let's move on to the next menu...`.newlines().color("white").center())

        bbs.renderArtwork({
            file: "assets/artwork/we-iniq3.ans",
            clearScreenBefore: false
        })

        bbs.say("Now that we know who you are, let's see if you can input the right password...".newlines().color("green").center())

        let password = bbs.ask("Your password".newlines().color("white"))
        if (password) {
            bbs.say("Nice work entering a good password...".newlines().color("white"))
        }

        bbs.renderArtwork({
            file: "assets/artwork/4d-iniq1.ans",
            clearScreenBefore: true
        })
    }
}
