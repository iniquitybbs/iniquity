---
name: Building and Running Iniquity BBS
description: How to build the Iniquity monorepo and run a BBS locally. Use when setting up development environment or testing BBS applications.
---

# Building and Running Iniquity BBS

This skill covers building the Iniquity monorepo from source and running a BBS locally for development and testing.

## Initial Setup

Clone and install dependencies (this bootstraps all packages with Lerna):

```bash
git clone https://github.com/iniquitybbs/iniquity.git
cd iniquity
npm install
```

The `postinstall` script automatically runs `lerna bootstrap` to link all packages.

## Building from Source

Build all packages in the monorepo:

```bash
npm run build
```

This runs `lerna run build` across all packages and generates TypeDoc documentation.

Individual package builds:

```bash
cd packages/core && npm run build
cd packages/cli && npm run build
cd packages/templates && npm run build
cd packages/desktop && npm run build
```

## Running a BBS Locally

### Option 1: Using the CLI from Source

After building, you can run a BBS using the `@iniquitybbs/cli` package:

1. **Navigate to a template or BBS directory:**

```bash
cd packages/templates/src/eternity
# or
cd packages/templates/src/euphoria
```

2. **Start the server with the CLI:**

```bash
# From the template directory
node /workspace/packages/cli/dist/src/index.js server start

# With hot reload (auto-restart on changes)
node /workspace/packages/cli/dist/src/index.js server start --watch
```

### Option 2: Install CLI Globally

Install the CLI globally and use it from any directory:

```bash
npm install -g @iniquitybbs/cli

# Initialize a new BBS project
iq init

# Start the BBS
iq server start

# Start with hot reload
iq server start --watch
```

### Option 3: Run Against a Template Directly

Run a BBS server pointing to a template:

```bash
# From repo root
iq server start --path packages/templates/src/eternity

# Or with the eternity template
iq server start --template eternity
```

## Connecting to Your BBS

Once the server is running, connect using:

**SyncTERM (recommended):**
- Host: `localhost`
- Port: `2023` (or `23`, depending on config)
- Protocol: Telnet

**Built-in terminal client:**

```bash
iq term
```

**Standard telnet:**

```bash
telnet localhost 2023
```

## Default Server Settings

- **Default port:** 2023 (configurable in `iniquity.json`)
- **Encoding:** CP437 or UTF-8 (user selects on login)
- **Resolution:** Configurable per BBS (default 80x25)

## BBS Configuration

Each BBS has an `iniquity.json` configuration file:

```json
{
  "server": {
    "name": "My BBS",
    "port": 2023,
    "newUserAccess": 10,
    "requireRealName": true
  },
  "security": {
    "passwordMinLength": 4
  }
}
```

## Development Workflow

1. **Make changes** to your BBS code (`iniquity.ts`)
2. **Run with `--watch`** to auto-reload on save:
   ```bash
   iq server start --watch
   ```
3. **Connect** with SyncTERM or `iq term`
4. **Test** your changes in the terminal
5. **Iterate**

## Testing the Eternity Template

The Eternity template is a full-featured BBS demonstrating all core APIs:

```bash
# From repo root
cd packages/templates/src/eternity

# Start the server
iq server start --watch
```

Connect to `localhost:2023` and you'll see:
- Terminal encoding selection (CP437 or UTF-8)
- Welcome banner
- Login/new user application flow
- Main menu with message bases, file areas, user functions, etc.

## Troubleshooting

**Port already in use:**
```bash
# Kill existing BBS server
lsof -ti:2023 | xargs kill -9
```

**CLI not found after global install:**
```bash
# Reinstall globally
npm install -g @iniquitybbs/cli

# Check PATH
echo $PATH
```

**TypeScript errors:**
```bash
# Rebuild all packages
npm run build
```

## Desktop Application

To run the Electron desktop version:

```bash
npm run desktop
```

This builds and starts the desktop app from `packages/desktop`.
