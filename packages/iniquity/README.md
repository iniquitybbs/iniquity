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

## About Iniquity 3

**About Iniquity 3: Bridging Legacy with Modernity**

Iniquity 3, envisioned by @ispyhumanfly, is more than just a BBS software platform; it's a versatile framework designed for the tech enthusiast of today. Whether you're a seasoned sysop, a fervent modder, or a passionate developer, IQ3 caters to all. Its flexibility allows users not only to craft traditional BBS experiences but also to break boundaries by developing novel terminal-style applications. Limiting Iniquity 3 to solely traditional BBS development would undersell its vast potential.

Key Features:

- **Developer-Centric**: Built with modders and programmers in mind, offering a rich tapestry of tools to reshape and reinvent.
- **Sysop-Friendly**: Streamlined processes make it effortless for sysops to design, deploy, and manage BBS applications.
- **Seamless Networking**: Facilitates effortless communication, from file exchanges to messaging, across BBS applications.
- **Universal Experience**: Whether you're on Terminal.app, xterm, NetRunner, SyncTerm, EtherTerm, or qodem, expect consistent visuals and functionality - even extending to web browsers.
- **Customizable Interface**: While offering a consistent experience, IQ3 provides the tools to design unique interfaces and features tailored to either web or terminal environments.

**Iniquity BBS Runtime Summary**:

The Iniquity 3 (IQ3) runtime represents the next evolution in terminal applications. Powered by TypeScript, IQ3 is not only a BBS platform, but an expansive toolset for crafting versatile terminal applications, echoing the innovative spirit of systems like x84.

At its core, the IQ3 runtime is a unique fusion:

- **Node.js**: This runtime allows cross-platform applications, commonly written in JavaScript, to operate seamlessly.
- **SynchronetJS**: Enhancing the runtime with robust backend services and a plethora of command-line utilities designed for bbs, ansi, and terminal functionalities.
- **Ubuntu Linux**: Serving as the foundation, it avails a vast array of tools, with highlights like DOSemu, to the developer's arsenal.

The beauty of the IQ3 runtime is its modularity. Leveraging existing JavaScript-based modules, especially from Synchronet, it negates the need to "re-invent the wheel", maximizing efficiency. Moreover, with the backdrop of Docker containerization, the runtime ensures consistent performance, whether it's on a local machine or a cloud setup. Simply put, with an NPM installation and Docker at the ready, Iniquity's magic unfurls, making the process of deploying terminal or BBS solutions a breeze for developers and enthusiasts alike.

Thank you for sharing the Iniquity code examples. I've reviewed them and understood the main structure and functionalities you're trying to achieve with Iniquity.

### The Iniquity 3 developer framework

Here's a brief summary:

1. **Basic Interaction**:
   - Utilizes the "@iniquitybbs/core" for basic functions like `say`, `pause`, `ask`.
   - Allows developers to print messages and capture user input.

2. **Artwork and Advanced Rendering**:
   - Displays artworks with customizable speeds and screen-clearing options.
   - Offers a rich text formatting feature.

3. **Menu Creation**:
   - Can create interactive menus.
   - Menus are reactive, allowing for command-based interactions with custom responses.

4. **Class-Based Approach**:
   - Utilizes decorators like `@IQModule` and `@IQModuleRuntime` to define modules and their runtime behavior.
   - Provides support for loading artworks, handling user inputs, and interacting with the terminal in an object-oriented manner.

5. **Reactive Applications**:
   - Enables the creation of reactive applications, similar to the popular front-end frameworks (Vue, React, Angular).
   - Uses `IQReactor` to create reactive data and observe changes, allowing for dynamic and interactive UI updates based on data changes.

6. **Flexible Rendering and UI Control**:
   - Provides methods for controlling the rendering of menus, artworks, and other UI elements.
   - Offers functions for controlling the cursor, handling user input, and interacting with various terminal features.

This framework combines the nostalgic feel of BBS with the modern advantages of reactive programming, making it both an homage to the past and a tool for the future.
