# Iniquity

This is the re-imagining of the iconic Iniquity Bulletin Board Software.

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=alert_status)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=security_rating)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=sqale_index)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=code_smells)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)

```js
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
```

## Synopsis

### What is this

-   Draws inspiration from Iniquity and x84.
-   Easily deploy to AWS/Azure/GCP

-

```typescript
const bbs = new BBS()

bbs.renderText({
    file: "assets/welcome.ans",
    clearScreenBefore: true
})

bbs.say("You've connected to a prototype of the new Iniquity BBS Platform.".color("bright red").center())

let login = bbs.ask("What's your username?".newline().color("green"))
if (login) {
    switch (login) {
        case "new":
            bbs.renderText({
                file: "assets/newuser.ans",
                clearScreenBefore: false
            })

            bbs.ask("What would you like your handle to be?".newline().color("white"))
            break
        default:
            bbs.say(
                `Hey ${login} thanks for signing in, let's move on to the next menu...`
                    .newline()
                    .color("white")
                    .center()
            )

            bbs.renderText({
                file: "assets/welcome2.ans",
                clearScreenBefore: false
            })

            bbs.say(
                "Now that we know who you are, let's see if you can input the right password..."
                    .newline()
                    .color("green")
                    .center()
            )

            let password = bbs.ask("Your password".newline().color("white"))
            if (password) {
                bbs.say("Nice work entering a good password...".newline().color("white"))
            }

            break
    }
}
```

## Setup

### Requirements

-   macOS / Windows / Linux
-   Docker Desktop for macOS / Windows or Docker Machine _required_
-   Node.js & NPM _required_
-   Visual Studio Code _recommended_

### Git

```bash
git clone https://github.com/iniquitybbs/iniquity.git
```

## Install

```bash
npm install
```

## Run

```bash
npm start
```

## Discord

[Iniquity Community Discord Server](https://discord.gg/UsyvrSZ)

## Copyright

(c) 1991 - 2020 The Iniquity BBS Community
