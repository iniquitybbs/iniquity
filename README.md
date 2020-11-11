# Iniquity

This is the re-imagining of the iconic Iniquity Bulletin Board Software.

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=alert_status)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=security_rating)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=sqale_index)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=code_smells)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)

```text
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
```

## Introduction

### Some guidng thoughts surrounding the idea of a new Iniquity BBS

-   A BBS software that is geared more towards developers and modders.
-   Make it easy for sysops to develop and deploy BBS applications.
-   Easily network files, messages and other forms of communication between other BBS applications.
-   What you see in xterm, NetRunner, SyncTerm, EtherTerm or qodem is what you see in a web browser.
    -   Though the ability to do interesting things specific to terminal/web should exist.

## Getting started

### Your development environment should contain something like this, or similar

-   macOS / Windows / Linux _required_
    -   These modern operating systems are currently supported.
-   Docker Desktop for macOS / Windows or Docker Machine _required_
    -   The Iniquity BBS runtime is executed inside of a Docker container for portability.
-   Node.js & NPM _required_
    -   The Node community tools are used for TypeScript transpiling and Iniquity package management.
-   Visual Studio Code _recommended_
    -   This repository is specifically tuned to take full advantage of this IDE.
-   Moebius _recommended_
    -   The ideal choice for working with ANSI/ASCII/PETSCII/AMIGA artwork.

### Install Iniquity using npm

```bash
npm install https://github.com/iniquitybbs/iniquity.git
```

## Initialize your current working directory as a new Iniquity system

```bash
iniquity init
```

## Start the system

```bash
iniquity start
```

## Using your favorite terminal client or web browser, connect to localhost using standard ports

```bash
iniquity term localhost
```

or...

```text
Go to http://localhost in your favorite web browser
```

### Developing an Iniquity application

#### A welcome experience for connecting users

```typescript
const bbs = new Iniquity()

const welcomeArt = bbs.artwork({ filename: "assets/sm!iniq2.ans" })
welcomeArt.render({ clearScreenBefore: true, speed: 100 })

bbs.print(
    `You just connected to an iniquity bbs. The artwork you are seeing above is called ${welcomeArt.filename} It's still pretty new. Likely has bugs. Real talk; it's not even finished. But maybe you'll still think it's cool.`
        .newlines()
        .color("background red")
        .center()
)

bbs.pause({ colorReset: true, newlines: 2, center: true })
```

<img src="app/assets/artwork/screenshot-1.png">

#### Have it present some larger artwork, and end with prompting the user to pause

```typescript
bbs.artwork({ filename: "assets/artwork/we-iniq3.ans" }).render({ clearScreenBefore: false }).pause({ newlines: 2, center: true })
```

<img src="app/assets/artwork/screenshot-2.png">

#### Begin to describe a simple login or new user application process

```typescript
function loginMenu(): void {
    bbs.artwork({ filename: "assets/artwork/4d-iniq1.ans" }).render({ speed: 100 })
    const login = bbs.ask("What is your login: ")
    switch (login) {
        case "new":
        case "signup":
            bbs.artwork({ filename: "assets/newuser.ans" }).render({ clearScreenBefore: true })

            let newUser = bbs.user({
                name: bbs.ask("What would you like your handle to be?".newlines(2).color("white")),
                password: bbs.ask("And your password?".newlines(2).color("white"))
            })

            bbs.say(`Welcome ${newUser.name}. And goodbye!`.newlines().center())
            loginMenu()
            break
        default:
            if (bbs.user({ name: login, password: bbs.ask("And your password?".newlines(2).color("white")) })) {
                bbs.say("You exist in the system!")
            }

            bbs.artwork({ filename: "assets/artwork/4d-iniq1.ans" }).render({ clearScreenBefore: true })
            break
    }
}
```

<img src="app/assets/artwork/screenshot-3.png">

#### You get the idea. Additionally, you can extend your own BBS using Iniquity's packaging system

```bash
iniquity install @iniquitybbs/messaging @euphoriabbs/spylister
```

## Discord

[Iniquity Discord Server](https://discord.gg/UsyvrSZ)

## Issues

[Iniquity Feedback, Ideas, Bugs](https://github.com/iniquitybbs/iniquity/issues)
