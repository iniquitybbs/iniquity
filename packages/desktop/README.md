# IQ Desktop

**IQ Desktop** is the desktop companion for [Iniquity BBS](https://iniquitybbs.com). Think GitHub Desktop, but for Iniquity: one app to administer your boards and to connect as a terminal client.

Today it focuses on the **terminal client**: a window that connects to an Iniquity BBS over WebSocket (same experience as the web term page). The plan is to add **board administration**—managing boards, users, and settings from the desktop—so sysops and users can do everything from one place. Terminal client and admin features will coexist in IQ Desktop.

---

## Current: Terminal client

Run IQ Desktop to get a window that loads the BBS term page. If the server isn’t running, the app can start it for you, then open the term.

### Prerequisites

- Node 18+
- Iniquity CLI and server (same repo). From repo root: `npx lerna run build`.

### Run from repo root

```bash
npm run desktop
```

Or from the desktop package:

```bash
cd packages/desktop && npm install && npm run build && npm run start
```

Or via the CLI (after building the CLI):

```bash
iq desktop
```

The app checks `http://localhost:8383/api/v1/health`. If the server isn’t running, it can spawn `iq server start`, wait for it to be healthy, then open the term at `http://localhost:8383/term`.

### Environment

- **`IQ_TERM_BASE_URL`** — Base URL for the API and term page (default `http://localhost:8383`). Set to e.g. `https://mybbs.example.com` to connect to a remote BBS.

### Packaging

Use Electron Builder or similar to produce a standalone app for macOS/Windows/Linux. This package currently supports development and `npm run desktop` / `iq desktop` only.
