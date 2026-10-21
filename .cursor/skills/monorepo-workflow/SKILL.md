---
name: Monorepo Workflow
description: Lerna monorepo structure and workflow for the Iniquity project. Use when working with multiple packages or understanding the build system.
---

# Iniquity Monorepo Workflow

This repository is a Lerna-based monorepo containing multiple interdependent packages.

## Monorepo Structure

```
iniquity/
├── packages/
│   ├── core/          # @iniquitybbs/core - BBS APIs and runtime
│   ├── cli/           # @iniquitybbs/cli - CLI and telnet server
│   ├── templates/     # @iniquitybbs/templates - Example BBSs
│   ├── desktop/       # @iniquitybbs/desktop - Electron app
│   ├── archive/       # Legacy code and assets
│   └── themes/        # Theme packages
├── lerna.json         # Lerna configuration
├── package.json       # Root package with workspaces
└── tsconfig.json      # Shared TypeScript config
```

## Package Relationships

- **core** → Core library (no internal dependencies)
- **cli** → Depends on `core`
- **templates** → Depends on `core` (demonstrates usage)
- **desktop** → Depends on `cli` and `core`

## Lerna Commands

### Bootstrapping

Install and link all packages (runs automatically on `npm install`):

```bash
npx lerna bootstrap
```

This:
1. Installs all package dependencies
2. Symlinks inter-package dependencies
3. Runs `npm prepare` in each package

### Building

Build all packages:

```bash
npx lerna run build
```

Build a specific package:

```bash
npx lerna run build --scope @iniquitybbs/core
npx lerna run build --scope @iniquitybbs/cli
```

Build in topological order (respecting dependencies):

```bash
npx lerna run build --stream
```

### Running Scripts

Run a script across all packages:

```bash
npx lerna run test
npx lerna run lint
```

Run a script in a specific package:

```bash
npx lerna run start --scope @iniquitybbs/cli
```

### Version Management

Lerna manages versions across all packages. The current version is defined in `lerna.json`:

```json
{
  "packages": ["packages/*"],
  "version": "3.0.86"
}
```

All packages share this version number.

## Working with Packages

### Making Changes to Core

When editing `@iniquitybbs/core`:

```bash
cd packages/core

# Make your changes
vim src/some-file.ts

# Build
npm run build

# The CLI and templates automatically use the updated core via symlink
```

### Making Changes to CLI

When editing `@iniquitybbs/cli`:

```bash
cd packages/cli

# Make your changes
vim src/index.ts

# Build
npm run build

# Test locally
node dist/src/index.js --version
```

### Testing Changes Across Packages

Since Lerna symlinks local packages, changes to `core` are immediately available to `cli` and `templates` after rebuilding:

```bash
# 1. Edit core
cd packages/core
# ... make changes ...
npm run build

# 2. Test in CLI
cd ../cli
npm run build
node dist/src/index.js server start --template eternity
```

## Development Workflow

### Full Clean Build

```bash
# From repo root
npm run build
```

This runs:
1. `lerna run build` - Builds all packages
2. `typedoc` - Generates documentation

### Incremental Development

For fast iteration:

```bash
# Build only the package you're working on
cd packages/core
npm run build

# Or use TypeScript watch mode
npx tsc -w
```

### Adding Dependencies

**Add to a specific package:**

```bash
cd packages/core
npm install --save some-package

# Dev dependency
npm install --save-dev some-package
```

**Add to root (shared dev tools):**

```bash
# From repo root
npm install --save-dev eslint prettier
```

### Adding a New Package

1. Create package directory:
   ```bash
   mkdir -p packages/my-package/src
   cd packages/my-package
   ```

2. Initialize `package.json`:
   ```json
   {
     "name": "@iniquitybbs/my-package",
     "version": "3.0.86",
     "main": "dist/index.js",
     "scripts": {
       "build": "tsc"
     }
   }
   ```

3. Add `tsconfig.json`

4. Run `lerna bootstrap` to link it

## Root Scripts

The root `package.json` defines these scripts:

- `npm install` → Runs `lerna bootstrap` automatically
- `npm run build` → Builds all packages + docs
- `npm run desktop` → Builds and runs Electron app
- `npm run lint` → Lints all TypeScript files
- `npm test` → Placeholder (no tests yet)

## Troubleshooting

**Symlinks broken:**
```bash
npx lerna clean
npx lerna bootstrap
```

**TypeScript errors across packages:**
```bash
# Clean and rebuild all
npx lerna run build --stream
```

**Package not found:**
```bash
# Re-bootstrap
npx lerna bootstrap
```

**Version mismatch:**

All packages should use the version in `lerna.json`. Check `packages/*/package.json` to ensure consistency.

## Publishing (Maintainer Only)

Publishing is handled by Lerna:

```bash
# Update version and publish all packages
npx lerna publish
```

This:
1. Prompts for new version
2. Updates all `package.json` files
3. Creates git commit and tag
4. Publishes to npm
5. Pushes to GitHub

## CI/CD

GitHub Actions workflow (`.github/workflows/release.yml`) handles:
- Building on push/PR
- Running linters
- Publishing releases
- Generating documentation

The workflow runs `npm run build` which ensures all packages build successfully.
