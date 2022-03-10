# Iniquity

This is the re-imagining of the iconic Iniquity Bulletin Board Software.

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

[![Release](https://github.com/iniquitybbs/iniquity/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/iniquitybbs/iniquity/actions/workflows/release.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=alert_status)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![Discord](https://img.shields.io/discord/499484963587096597?label=discord)](https://discord.gg/UsyvrSZ)

To get started.

```bash
npm install -g @iniquitybbs/cli
```

Then...

```bash
iniquity init --name MyBBS --template eternity --theme iq3
```

...and finally.

```bash
iniquity start
```

## Introduction

### Some guiding thoughts surrounding the idea of iniquity 3

I want this to be something a typical sysop can use, yes, I also want it to be something a modder/programmer will love. But also, someone should be able to create an entirely new terminal style application with it if they wanted. To only use iniquity 3 for the development of a legacy style bbs would be a real waste of its potential. @ispyhumanfly

- A BBS software framework that is geared towards developers and modders .
- Make it easy for sysops to develop and deploy BBS applications.
- Easily network files, messages and other forms of communication between other BBS applications.
- What you see in Terminal.app, xterm, NetRunner, SyncTerm, EtherTerm or qodem is what you see in a web browser.
  - Though the ability to do interesting things specific to web/terminal should exist.

#### About iniquity's runtime

Alpha... — Today at 11:29 AM
@ispyhumanfly curious about that last commit, "Now with Synchronet under the hood" 🙂

Many cross-platform applications today are executed on a runtime environment known as Node.js. Node.js makes it possible for these applications to be written in JavaScript. Well, iniquity aims also to be a cross-platform software, and is largely executing inside of a custom runtime environment that is a fusion of Node.js, Synchronet JavaScript and Ubuntu all wrapped into a Docker container.  Anytime you run iniquity on your computer or on some cloud computing environment somewhere, this containerized runtime is quietly running in the background, making iniquity’s magic possible.

Alpha... — Today at 12:28 PM
so, that allows iniquity to leverage existing javascript-based modules, like parts of Synchronet, without having to re-invent the wheel?

ispyhumanfly — Today at 1:39 PM

That's basically the primary reason for using it. In addition to the wealth of command line utilities centered around the subject of bbs/ansi/terminal/etc made possible by the people behind Synchronet. Also, there are many utilities available within the Ubuntu ecosystem. DOSemu being one of them, which is integrated into this runtime container as well.
Iniquity itself is written in TypeScript and requires Node.js and Docker on your computer to make this all work.

## Getting started

### Your development environment should contain something like this, or similar

- macOS / Windows / Linux _required_
  - These modern operating systems are currently supported.
- Docker Desktop for macOS / Windows or Docker Machine _required_
  - The Iniquity BBS runtime is executed inside of a Docker container for portability.
- Node.js & NPM _required_
  - The Node community tools are used for TypeScript transpiling and Iniquity package management.
- Visual Studio Code _recommended_
  - This repository is specifically tuned to take full advantage of this IDE.
- Moebius _recommended_
  - The ideal choice for working with ANSI/ASCII/PETSCII/AMIGA artwork.

### Developing your own iniquity bbs

```bash
npm install -g @iniquitybbs/cli
```

Then...

```bash
iniquity init --name MyBBS --template eternity --theme iq3
```

Then start iniquity

```bash
iniquity start
```

For further development and customization of your iniquity bbs, it's recommended that you use VS Code. Open up your bbs directory in VSC to take advantage of the development tooling made available by this project.

### An example script representing a simple iniquity bbs

```typescript
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
```

[Want to learn more? Read the docs!](https://iniquitybbs.com/modules/Core.html)

### Development of this project

This is a monorepo project. It uses lerna for management of its packages.

#### First, clone this repository somewhere on your system

```bash
git clone https://github.com/iniquitybbs/iniquity.git
```

#### Inside of the iniquity directory, install the project dependencies

Will install all dependencies and bootstrap and build all packages.

```bash
npm install
```

#### Start iniquity

Inside of VS Code, fire up the development server.

```bash
npm start
```

## Discord

[Join us on Discord.](https://discord.gg/UsyvrSZ)

## Issues

[Share your ideas, feedback and bug reports.](https://github.com/iniquitybbs/iniquity/issues)

## Documentation

[Read the Iniquity documentation.](https://iniquitybbs.org/modules.html)
