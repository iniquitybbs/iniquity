# Iniquity

The iniquity bbs command line interface.

![Alt text](https://github.com/iniquitybbs/iniquity/raw/master/packages/core/src/assets/5m-iniquity3a.png?raw=true "Iniquity 3")

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
