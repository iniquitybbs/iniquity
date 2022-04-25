# Iniquity

This is the re-imagining of the iconic Iniquity Bulletin Board Software.

![Alt text](https://github.com/iniquitybbs/iniquity/raw/master/packages/core/src/assets/5m-iniquity3a.png?raw=true "Iniquity 3")

[![Release](https://github.com/iniquitybbs/iniquity/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/iniquitybbs/iniquity/actions/workflows/release.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=alert_status)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![Discord](https://img.shields.io/discord/499484963587096597?label=discord)](https://discord.gg/UsyvrSZ)
[![GitHub license](https://img.shields.io/github/license/iniquitybbs/iniquity)](https://github.com/iniquitybbs/iniquity/blob/master/LICENSE.md)
![Docker Pulls](https://img.shields.io/docker/pulls/iniquitybbs/iniquity)
![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/iniquitybbs/iniquity)

## Synopsis

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

After that, you can connect to your locally running iniquity instance using a telnet client or web browser.

## Getting started guide

In its most simple form, Iniquity can provide you with some shortcuts to working with a terminal...

```typescript

import { say, pause, wait, ask } from "@iniquitybbs/core"

say("Hey there visitor?".color("blue")).pause()

ask("Hey can I know your name", (name) => {
    say(`Hey ${name}, nice to meet you!`)
})

```

Alright, that's kinda neat, but now let's make it a bit more useful, because Iniquity can handle some more common use cases.

```typescript

import iq from "@iniquitybbs/core"

iq.artwork({ filename: Assets.sm_iniq2 }).render({ clearScreenBefore: true, speed: 100 })

iq.say(
    `You just connected to an iniquity bbs. The artwork you are seeing above is called ${welcomeArt.filename} It's still pretty new. Likely has bugs. Real talk, it's not even finished. But maybe you'll still think it's cool.`
        .newlines(2)
        .color("background red")
        .center())
        .pause({ colorReset: true, newlines: 2, center: true })

```

How about we make a menu that users could use to help them navigate around a bit.

```typescript

import iq from "@iniquitybbs/core"

const menu = iq.menu({
    name: "Iniquity answer menu.",
    description: "Really I just get to rattle off more non-sense.",
    commands: {
        L: (description = "Sit cillum consequat qui quis dolore Lorem.") => {
            iq.say("Hey, don't touch that!")
        },
        O: () => {
            iq.say("Nothing to see here, move along...")
        },
        H: () => {
            if (ask("Are you sure you want to hangup?")) {
                iq.disconnect()
            }
        },
        default: () => {
            iq.say("That command key doesn't do anything, try again.".gotoxy(1, 1))
        }
    }
})

menu.render(
    (res: IQMenuLoopMessageResponse, cmdkey: Function) => {
        iq.artwork().render({
            clearScreenBefore: true,
            filename: IQCoreAssets.sm_iniq2,
        })

        menu.prompt({ x: 20, y: 30, text: "Feed me: " }).command(cmdkey)
    },
    {
        maxInterval: 1000000
    }
)

```

Thinking you need something a bit more advanced? Try the class based approach.

```typescript

import { IQ, IQModule, IQModuleRuntime, IQModuleACLS, IQCoreAssets, IQCoreModules } from "@iniquitybbs/core"

@IQModule({ basepath: "/iniquity/core/src/assets/", access: IQModuleACLS.low })
export class Login extends IQ {
    @IQModuleRuntime({ debug: true })
    start() {
        const art = this.artwork({ basepath: this.basepath })

        art.render({ filename: IQCoreAssets.iq3_login }).cursor(40, 25)

        const login = this.ask("Enter your handle, or type 'new' to apply".color("green"))

        /** More login logic to come **/

    }
}

```

Familiar with making event-driven, single page applications like with Vue, React or Angular? You can build fully reactive applications with iniquity 3 also.

```typescript

import { IQCoreAssets, IQFrameColorOptions, IQMenuLoopMessageResponse, IQModule, IQModuleRuntime, IQReactor, IQ } from "@iniquitybbs/core"

@IQModule({
    basepath: "/iniquity/core/src/assets",
    data: IQReactor({
        message: "Umm, yeah this needs to change",
        number: 1,
        time: time(),
        system: system.stats
    })
})
export class Answer extends IQ {
    @IQModuleRuntime({
        debug: true
    })
    start() {
        this.data.observe("message", () => {
            this.artwork({ filename: IQCoreAssets.iq3_apply }).render({ speed: 1, clearScreenBefore: true }).colorReset()
            this.say(this.data.model.message).wait(1000)
            this.pause()
        })
        this.data.observe("number", () => {
            this.say(this.data.model.number).wait(1000)
        })

        while (this.terminfo.x < 132 || this.terminfo.y < 37) {
            const menu = this.menu({
                name: "Unsupported",
                description: "A simple menu for letting the user know their terminal settings are not supported.",
                commands: {
                    /**
                     * Unsupported.R
                     * @param description
                     * @returns
                     */
                    R: (description = "Sit cillum consequat qui quis dolore Lorem.") => {
                        return {
                            description
                        }
                    },
                    G: () => {
                        this.data.model.number + 1
                    },
                    H: () => {
                        this.data.model.message = this.ask("What should I change the message to?")
                    },
                    default: () => {
                        // this.say("please try again.".gotoxy(1, 1))
                    }
                }
            })

            menu.render(
                (res: IQMenuLoopMessageResponse, cmdkey: Function) => {
                    this.artwork({ filename: IQCoreAssets.sm_iniq2 }).render({
                        clearScreenBefore: true,
                        speed: 1,
                        data: this.data.model
                    })
                    menu.prompt({ text: "Enter your command: ".color("bright cyan"), x: 20, y: 20 }).command(cmdkey)
                },
                {
                    maxInterval: 3000,
                    data: this.data.model
                }
            )

            this.wait(100)
        }

        alert(this.data.model.message)

        alert(this.basepath)

        this.data.model.message = this.ask("So what's the new message?")

        this.artwork({ filename: IQCoreAssets.iq3_welcome })
            .render({
                speed: 100,
                data: this.data,
                mode: "@-codes"
            })
            .pause()

        const frame = this.frame({
            x: 10,
            y: 10,
            width: 30,
            height: 15,
            color: IQFrameColorOptions.blue
        })

        const menu = this.menu({
            name: "Iniquity answer menu.",
            description: "Really I just get to rattle off more non-sense.",
            commands: {
                L: (help = "Sit cillum consequat qui quis dolore Lorem.") => {
                    this.gotoxy(23, 63)
                    this.data.model.message = this.ask("Oh so you wanna change it?")
                    this.data.model.number++
                },
                O: () => {
                    frame.open()

                    while (true) {
                        frame.say(JSON.stringify(this.data.model))
                        frame.cycle()

                        this.data.model.number++

                        if (this.data.model.number > 20) break

                        this.wait(10)
                    }

                    frame.close()
                },
                H: () => {
                    this.cursor().down().left(22)
                    this.data.model.number++
                },
                default: () => {
                    this.say("please try again.".gotoxy(1, 1))
                }
            },
            data: this.data.model
        })

        menu.render(
            (res: IQMenuLoopMessageResponse, cmdkey: Function, data?: any) => {
                this.artwork().render({
                    clearScreenBefore: true,
                    filename: IQCoreAssets.sm_iniq2,
                    data: this.data.model
                })

                this.data.model.number++

                menu.prompt({ x: 20, y: 30, text: "Feed me: " }).command(cmdkey)
            },
            {
                maxInterval: 1000000
            }
        )
    }
}

```

[Want to learn more? Read the docs!](https://iniquitybbs.com/modules/Core.html)

## More details about iniquity 3

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

Alpha... — 03/16/2022
The more I read about IQ3, the more I dig that this isn't just a BBS platform, it's a tool that can be used to create/script just about any kind of terminal application... Seems to share that piece of DNA with x84, yeah?

//rubs hands in maniacal anticipation//

ispyhumanfly — 03/17/2022
Yup, that's basically it @Alpha... . When in a more finished state, the @iniquitybbs/templates package is going to have a few different kinds of examples, and BBS setups for people to get started with. But they exist as examples. Iniquity 3 itself is an SDK and platform for creating terminal applications that can be accessed from terminal/web/maybe mobile. Absolutely x84 is the genesis of the idea here. I liked what those guys had done, but, wanted to hopefully be able to take it a bit further. So with that in mind, I originally started this project as a ruby project, and started working on the CLI portion... after sometime decided to switch to the TypeScript/JS version that exists now, with the runtime as I've explained previously.

grymmjack — 04/08/2022
wow
@ispyhumanfly iq is node?

ispyhumanfly — 04/11/2022
Hey @grymmjack , I’d say it like this… Iniquity 3 itself is written in TypeScript. And, for anyone wanting to develop an iniquity bbs or application or whatever, you would also be writing this in TypeScript. Iniquity has a few elements to its runtime; NodeJS, SynchronetJS, Browser JS and Ubuntu Linux with all the system tools a sysop may need. All of this is contained within the “Iniquity Runtime”, which is basically everything I just mentioned wrapped tightly in a Docker container.
As someone wanting to use Iniquity it’s as simple as installing it from NPM, making sure Docker is running, and the rest is handled in the background for you.

grymmjack — 04/12/2022
that is rad @ispyhumanfly

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

Inside of the VS Code Integrated Terminal, fire up the development server.

```bash
npm start
```

### Docker

You could just pull the latest version of the runtime directly from docker.

```bash
docker pull iniquitybbs/iniquity
```

Or even just run it directly

```bash
docker run -d -P --name iniquity -it iniquitybbs/iniquity 

```

## Discord

[Join us on Discord.](https://discord.gg/UsyvrSZ)

## Issues

[Share your ideas, feedback and bug reports.](https://github.com/iniquitybbs/iniquity/issues)

## Documentation

[Read the Iniquity documentation.](https://iniquitybbs.org/modules.html)
