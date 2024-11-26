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

```shell
npm install -g @iniquitybbs/iniquity
```

You will find a `iniquity` and `iq` command in your path. Both commands do the same thing. Use whichever you prefer.

```shell
iq --version
```

Initialize the current directory as an Iniquity BBS.

```shell
iq init
```

Once the current directory has been initialized you quickly start the BBS with the `start` command.

```shell
iq server start
```

While you are developing, you can use the `--watch` flag to automatically restart the server when you make changes.

```shell
iq server --watch
```

Using SyncTerm, you can connect to your BBS at `localhost`. Or web browsers can connect to `http://localhost`.

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
        .center()
).pause({ colorReset: true, newlines: 2, center: true })
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
            filename: IQCoreAssets.sm_iniq2
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

# Iniquity 3

Iniquity 3 is a modern BBS (Bulletin Board System) framework designed for sysops, modders, and developers. While it provides all the tools necessary to run a legacy-style BBS, it also allows the creation of entirely new terminal-style applications, bridging the gap between the classic and the contemporary.

## Development Environment Requirements

To get started with Iniquity 3, ensure your development environment includes the following:

### Operating Systems
- **macOS / Windows / Linux** (required): Modern operating systems are supported.

### Software Requirements
- **Docker Desktop** (for macOS/Windows) or **Docker Machine** (required): The Iniquity BBS runtime operates inside a Docker container for portability.
- **Node.js** & **NPM** (required): Node.js powers TypeScript transpiling and package management for Iniquity.
- **Visual Studio Code** (recommended): This repository is tuned to maximize the capabilities of VS Code.
- **Moebius** (recommended): Ideal for working with ANSI/ASCII/PETSCII/AMIGA artwork.

## Guiding Principles

Iniquity 3 is built with the following objectives in mind:

1. **Flexibility for Sysops**: Make it easy to develop and deploy BBS applications.
2. **Empowerment for Developers and Modders**: Provide a robust framework for creating custom terminal applications, not just legacy BBS setups.
3. **Interoperability**: Facilitate networking files, messages, and other forms of communication between different BBS applications.
4. **Unified Experience**: Ensure consistent behavior between terminal and web environments (e.g., Terminal.app, xterm, SyncTerm, EtherTerm).

## About the Iniquity Runtime

Iniquity 3 operates inside a custom runtime environment that combines:
- **Node.js**: Leverages JavaScript-based modules.
- **Synchronet JavaScript**: Incorporates tools from Synchronet’s ecosystem, streamlining BBS-related functionalities.
- **Ubuntu Linux**: Provides access to system tools like DOSemu and other utilities.

All of these components are packaged into a Docker container for seamless cross-platform compatibility. This setup allows Iniquity to:
- Use existing JavaScript-based modules, including those from Synchronet.
- Integrate with utilities like DOSemu for legacy support.
- Provide a rich development and runtime environment, requiring only Docker and Node.js on your system.

## Developer Focus

Iniquity 3 is more than a BBS platform; it’s a powerful SDK and runtime for creating terminal-based applications that can be accessed from:
- Terminal environments (e.g., xterm, SyncTerm, qodem).
- Web browsers.
- (Potentially) mobile devices.

### Example Templates
The upcoming `@iniquitybbs/templates` package will include example setups to help users get started quickly. These templates showcase both traditional BBS setups and innovative terminal applications.

## Why TypeScript?
Iniquity 3 is written in TypeScript, providing:
- A robust development experience with static typing.
- Seamless integration with modern JavaScript tooling.
- Compatibility with the Node.js ecosystem.

As a user, you’ll write TypeScript to build your BBS or terminal application. Installation is straightforward:
1. Install Iniquity from NPM.
2. Ensure Docker is running.
3. Let the runtime handle the rest!

---

Whether you’re a sysop looking to modernize your BBS or a developer seeking to create a cutting-edge terminal application, Iniquity 3 has the tools and flexibility to bring your ideas to life. Join the community and start building today!

#### First, clone this repository somewhere on your system

```shell
git clone https://github.com/iniquitybbs/iniquity.git
```

#### Inside of the iniquity directory, install the project dependencies

Will install all dependencies and bootstrap and build all packages.

```shell
npm install
```

#### Start iniquity

Inside of the VS Code Integrated Terminal, fire up the development server.

```shell
npm start
```

### Docker

You could just pull the latest version of the runtime directly from docker.

```shell
docker pull iniquitybbs/iniquity
```

Or even just run it directly

```shell
docker run -d -P --name iniquity -it iniquitybbs/iniquity

```

## Discord

[Join us on Discord.](https://discord.gg/UsyvrSZ)

## Issues

[Share your ideas, feedback and bug reports.](https://github.com/iniquitybbs/iniquity/issues)

## Documentation

[Read the Iniquity documentation.](https://iniquitybbs.com/modules.html)
