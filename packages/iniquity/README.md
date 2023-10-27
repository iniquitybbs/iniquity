# Iniquity

The iniquity bbs command line interface.

![Alt text](https://github.com/iniquitybbs/iniquity/raw/master/packages/core/src/assets/5m-iniquity3a.png?raw=true "Iniquity 3")

## Synopsis

"Iniquity 3 is more than just a BBS platform. Designed for both traditional sysops and innovative developers, it offers a consistent experience across Terminal.app, xterm, NetRunner, and more, mirroring precisely what's seen in a web browser. Beyond standard BBS functionalities, it's a toolkit for new terminal-style creations, ensuring seamless communication between BBS applications. It's a playground for modders and a testament to pushing BBS boundaries." - @ispyhumanfly

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
iq server start --watch
```

Using SyncTerm, you can connect to your BBS at `localhost`. Or web browsers can connect to `http://localhost`.
