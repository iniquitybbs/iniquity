# Cursor Agents Guide for Iniquity BBS

This document provides guidance for Cursor agents working on the Iniquity BBS project.

## Git Commit Requirements

**CRITICAL:** All commits in this repository must follow strict authorship requirements. See `.cursor/rules/git-conventions.mdc` and `.cursor/skills/git-commit-conventions/SKILL.md` for full details.

### Required Git Identity

Every commit MUST be authored as:

```bash
git config user.name "Dan Stephenson"
git config user.email "ispyhumanfly@gmail.com"
```

### Prohibited Content in Commits

**NEVER include:**
- `Co-authored-by:` trailers
- "Generated with Cursor" or AI attribution
- Any AI/agent attribution in author, committer, or message fields

### Verification Before Push

Always verify commit metadata:

```bash
git log --format='%an <%ae> | %cn <%ce>%n%B' -n 5
```

## Project Structure

This is a Lerna-based TypeScript monorepo:

```
packages/
├── core/       - @iniquitybbs/core (BBS APIs)
├── cli/        - @iniquitybbs/cli (CLI and server)
├── templates/  - Example BBSs (Eternity, Euphoria)
└── desktop/    - Electron application
```

## Available Skills

Skills are located in `.cursor/skills/`:

1. **git-commit-conventions** - Git authorship and message requirements (ALWAYS follow)
2. **building-and-running** - How to build and run the BBS locally
3. **monorepo-workflow** - Lerna workflow and package management
4. **writing-iniquity-programs** - How to write iniquity.ts BBS programs with core APIs

Read the relevant skill file before working in that area.

## Common Workflows

### Building from Source

```bash
npm install      # Bootstraps all packages
npm run build    # Builds everything
```

### Running a BBS Locally

```bash
# Install CLI globally
npm install -g @iniquitybbs/cli

# Run Eternity template
cd packages/templates/src/eternity
iq server start --watch

# Connect
iq term
# or telnet localhost:2023
```

### Making Changes to Core

```bash
cd packages/core
# Edit files
npm run build
# Changes automatically available to CLI via symlink
```

## Testing

Connect to the running BBS using:
- **SyncTERM** (recommended): `localhost:2023`
- **Built-in terminal**: `iq term`
- **Telnet**: `telnet localhost 2023`

Test with the Eternity template for a full-featured BBS example.

## Code Style

- **Language:** TypeScript
- **Formatter:** Prettier
- **Linter:** ESLint
- **Build:** TypeScript compiler (`tsc`)

Run linting:

```bash
npm run lint
```

## Documentation

- **API docs:** https://iniquitybbs.com/modules.html
- **GitHub:** https://github.com/iniquitybbs/iniquity
- **Discord:** https://discord.gg/UsyvrSZ

## Key Files

- `lerna.json` - Monorepo version and package config
- `tsconfig.json` - Shared TypeScript config
- `packages/core/src/bbs.ts` - Main BBS API
- `packages/core/src/screen.ts` - Screen API
- `packages/core/src/menu.ts` - Menu system
- `packages/templates/src/eternity/iniquity.ts` - Full BBS example

## Important Notes

- This project maintains the classic BBS experience with modern TypeScript
- The Eternity template faithfully recreates the original Iniquity BBS from the 1990s
- Support for both CP437 (classic) and UTF-8 (modern) terminal encoding
- All BBS programs use `@iniquitybbs/core` APIs and run via `@iniquitybbs/cli`
