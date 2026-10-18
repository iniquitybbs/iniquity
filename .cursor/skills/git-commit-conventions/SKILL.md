---
name: Git Commit Conventions
description: Git commit conventions and identity requirements for this repository. Use when making any commits to ensure proper authorship and clean commit messages.
---

# Git Commit Conventions

This repository has strict requirements for commit metadata and messages.

## Required Git Identity

**Every commit in this repository MUST be authored by the configured git identity:**

```bash
git config user.name "Dan Stephenson"
git config user.email "ispyhumanfly@gmail.com"
```

Before making any commits, verify the git config is set correctly:

```bash
git config user.name
git config user.email
```

## Prohibited Content in Commit Messages

**NEVER include the following in any commit message:**

- `Co-authored-by:` trailers
- "Generated with Cursor" or similar AI attribution
- Any AI/agent attribution in the message body
- Any AI/agent attribution in author or committer fields

Commit messages should be clean, descriptive, and authored solely by Dan Stephenson.

## Verifying Commit Metadata

Before pushing, ALWAYS verify that commits have the correct author and committer metadata and no prohibited trailers:

```bash
git log --format='%an <%ae> | %cn <%ce>%n%B' -n 5
```

Expected output for each commit:
- Author: `Dan Stephenson <ispyhumanfly@gmail.com>`
- Committer: `Dan Stephenson <ispyhumanfly@gmail.com>`
- Message body: Clean commit message with no Co-authored-by or AI attribution

## If Your Tooling Auto-Adds Trailers

If your Git configuration or tooling automatically adds `Co-authored-by:` or other trailers:

1. **Disable the feature** in your Git config
2. **Or amend commits** to remove trailers before pushing:

```bash
# Interactive rebase to edit commit messages
git rebase -i HEAD~N  # N = number of commits to check

# Or amend the last commit
git commit --amend
```

## Commit Message Style

- Use clear, descriptive commit messages
- Follow conventional commit format when appropriate: `feat:`, `fix:`, `docs:`, `chore:`, etc.
- Keep the subject line under 72 characters
- Use the imperative mood: "Add feature" not "Added feature"
- Provide context in the body for non-trivial changes

## Example Good Commit

```
feat: add Cursor skills for agents

Add skills covering git conventions, building/running the BBS,
monorepo workflow, and writing iniquity.ts programs. Include
always-applied rule to enforce commit authorship requirements.
```

Author: Dan Stephenson <ispyhumanfly@gmail.com>  
Committer: Dan Stephenson <ispyhumanfly@gmail.com>

## Example Bad Commit (DO NOT DO THIS)

```
feat: add Cursor skills for agents

Add skills covering git conventions, building/running the BBS,
monorepo workflow, and writing iniquity.ts programs.

Co-authored-by: Cursor Agent <agent@cursor.com>
Generated with Cursor
```

❌ This commit contains prohibited trailers and attribution.
