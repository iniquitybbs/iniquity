# Iniquity

This is the re-imagining of the iconic Iniquity Bulletin Board Software.

![Alt text](https://github.com/iniquitybbs/iniquity/raw/master/packages/core/src/assets/5m-iniquity3a.png?raw=true "Iniquity 3")

[![Release](https://github.com/iniquitybbs/iniquity/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/iniquitybbs/iniquity/actions/workflows/release.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=alert_status)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![Discord](https://img.shields.io/discord/499484963587096597?label=discord)](https://discord.gg/UsyvrSZ)
[![GitHub license](https://img.shields.io/github/license/iniquitybbs/iniquity)](https://github.com/iniquitybbs/iniquity/blob/master/LICENSE.md)

## Synopsis

```shell
npm install -g @iniquitybbs/cli
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

Connect with SyncTERM or any telnet client to `localhost` on port **23** (default).

## Getting started guide

You build your BBS with the **bbs** and **screen** API from `@iniquitybbs/core`. Here’s a minimal example:

```typescript
import { bbs, screen } from "@iniquitybbs/core"

screen.setResolution(80, 25)

bbs.menu("main", {
    prompt: "Command: ",
    layout: "single",
    items: [
        { key: "M", label: "Messages", action: () => bbs.popup("Messages", "Coming soon!") },
        { key: "F", label: "Files", action: () => bbs.popup("Files", "Coming soon!") },
        { key: "Q", label: "Quit", action: "quit" }
    ]
})

bbs.start(async () => {
    bbs.say("Welcome to my BBS!")
    await bbs.pause()
    await bbs.showMenu("main")
})
```

Add a welcome screen and menu artwork:

```typescript
import { bbs, screen } from "@iniquitybbs/core"

screen.setResolution(132, 37)

bbs.menu("main", {
    art: "main_menu.ans",
    layout: "two-column",
    items: [
        { key: "M", label: "Message bases", goto: "messages" },
        { key: "F", label: "File areas", goto: "files" },
        { key: "G", label: "Goodbye", action: "quit" }
    ]
})

bbs.start(async () => {
    await bbs.art("welcome.ans", { clearScreen: true, pauseAfter: true })
    await bbs.showMenu("main")
})
```

[Learn more in the documentation](https://iniquitybbs.com/modules.html).

# Iniquity 3

Iniquity 3 is the modern reimagining of the Iniquity BBS software. It strives to embody many of the ideas of that era — a classic BBS experience with a clean Node.js and TypeScript stack for sysops, modders, and developers.

## The journey

As of today, Iniquity 3 is a thoughtful fusion of **Iniquity**, **Synchronet**, **EniGMA**, **x84**, and other BBS softwares that have inspired the project along the way. You get a **Node.js and TypeScript** runtime: install, write your BBS in TypeScript, and run it with Node.

## Development environment

- **Node.js** (v18+) and **npm** — required. Iniquity runs on Node.
- **macOS / Windows / Linux** — supported.
- **Visual Studio Code** (recommended) — the repo works well with VS Code.
- **Moebius** (recommended) — for editing ANSI/ASCII/PETSCII/AMIGA artwork.

## Guiding principles

1. **Flexibility for sysops** — Easy to develop and deploy BBS applications.
2. **Empowerment for developers and modders** — A solid framework for custom terminal apps, not only legacy BBS setups.
3. **Interoperability** — Networking, messages, and communication between BBS applications.
4. **Unified experience** — Consistent behavior across terminals (e.g. SyncTERM, xterm, EtherTerm).

## About the runtime

Iniquity 3 runs on **Node.js** and **TypeScript** only. Your BBS is a TypeScript program that uses `@iniquitybbs/core` (menus, artwork, users, MCI) and is executed by `@iniquitybbs/cli` (CLI and telnet server).

## Developer focus

Iniquity 3 is both a BBS platform and an SDK for terminal applications. You can target:

- Classic terminals (SyncTERM, xterm, qodem).
- Any ANSI-capable client connecting over telnet.

### Templates

The `@iniquitybbs/templates` package includes full example BBSs: **Euphoria** (modern layout, event bus, data-driven artwork) and **Eternity** (classic Iniquity-style flow, CP437/UTF-8 encoding choice). Use them as a starting point or reference.

## Why TypeScript?

Iniquity 3 is written in TypeScript so you get:

- Static typing and a clear API.
- Integration with modern JavaScript tooling.
- Full use of the Node.js ecosystem.

Install from npm, run `iq init` and `iq server start`, and build your BBS in TypeScript.

---

Whether you’re a sysop modernizing a BBS or a developer building a terminal application, Iniquity 3 is built to help. Join the community and start building.

## Development (from source)

Clone the repository and install dependencies (this bootstraps and builds all packages):

```shell
git clone https://github.com/iniquitybbs/iniquity.git
cd iniquity
npm install
```

Build all packages (if needed):

```shell
npm run build
```

To run the BBS server from source, see [packages/cli/README.md](packages/cli/README.md). In short: from a directory that has been initialized with `iq init` (or using a template path), run the CLI package’s server. Alternatively, install the CLI globally and use it from any directory:

```shell
npm install -g @iniquitybbs/cli
iq init
iq server start
```

Connect with SyncTERM or `iq term` to `localhost:23`.

## Discord

[Join us on Discord.](https://discord.gg/UsyvrSZ)

## Issues

[Share your ideas, feedback and bug reports.](https://github.com/iniquitybbs/iniquity/issues)

## Documentation

[Read the Iniquity documentation.](https://iniquitybbs.com/modules.html)
