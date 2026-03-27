# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

omc-evolve is a **prototype self-evolution system** for the ohmyc character agent app. An AI agent iteratively improves a static HTML prototype through an Evolve Cycle, and humans review each iteration via a live URL.

## Evolve Cycle

```
Evaluate → Plan → Build → Review (2-agent) → Publish → Human Feedback → Repeat
```

- **Evaluate**: Compare current prototype against SSOT checklist (`docs/evolve/CHECKLIST.md`), generate Gap Report, determine fidelity level (L1–L4)
- **Plan**: Pick max 3 improvements per iteration; human feedback always takes priority over checklist gaps
- **Build**: Modify prototype HTML; use VI.md design tokens as CSS variables (no hardcoding)
- **Review**: 2-agent parallel review — Agent A (UX/product via IDENTITY.md, UX.md) + Agent B (visual/tech via VI.md)
- **Publish**: Archive version, deploy, notify

Roles: see `docs/evolve/RNR.md` — Sero (human), netty (PM), aethmon (designer), devmon (builder).

## SSOT Documents (in `docs/`)

The prototype must conform to these authoritative specs:

| Document | Role |
|----------|------|
| `IDENTITY.md` | Product identity, principles, north star |
| `UX.md` | UX principles, behavioral rules |
| `CHARACTER-AGENT-SPEC.md` | Memory/Action/Growth agent spec |
| `VI.md` | Visual identity, design tokens, component specs |
| `FLOWS.md` | User flow definitions |

### Evolve Cycle Documents (in `docs/evolve/`)

| Document | Role |
|----------|------|
| `SYSTEM.md` | Evolve Cycle system design |
| `CHECKLIST.md` | Evaluation checklist extracted from SSOT docs |
| `RNR.md` | Roles & responsibilities for Evolve Cycle |
| `REPORT-SPEC.md` | Report format (ideas, discussions, SSOT proposals) |
| `OPEN-ITEMS.md` | Open report tracker |

Agents **never modify SSOT docs** — changes require human approval.

## Prototype Architecture

```
prototype/
├── state.json              ← SSOT: versions, cycle state, scores (the one state file)
├── current/                ← Latest build (deployed to GitHub Pages)
│   ├── index.html          ← Main prototype (devmon only modifies this)
│   ├── creator.html        ← Creator flow
│   └── screens/            ← Design mockups (aethmon works here)
├── versions/v{X.Y.Z}/     ← Immutable snapshots
│   ├── index.html
│   ├── meta.json           ← Per-version metadata
│   └── design/             ← Archived design notes (optional)
├── feedback/               ← Human feedback per version (JSON files)
├── reports/                ← Cycle reports (ideas, discussions, blockers)
├── review.html             ← Review portal for human evaluation
├── nav.js                  ← Shared navigation (reads state.json)
└── index.html              ← Hub landing page (reads state.json)
```

### state.json — The Single State File

All state lives in `prototype/state.json`:
- `cycle` — iteration count, phase, fidelity level
- `current_version` — which version is current
- `versions[]` — version registry (replaces versions-manifest.json)
- `scores{}` — per-version checklist scores (replaces scores.json)
- `last_feedback`, `pending_gaps` — cycle continuity

### Build Constraints

- **Single HTML file preferred** (multi-file allowed at L3+)
- Inline CSS/JS — no build tools, no bundler, no framework
- External CDN only for fonts and icons
- Design tokens from `VI.md` must be CSS variables
- Tint color: `#FF8552` (Soft Apricot)
- Apple HIG + Liquid Glass design language

## Deployment

GitHub Pages via GitHub Actions. Triggers on push to `main` when `prototype/**` changes.

- Live: `https://netty-ai.github.io/omc-evolve/current/`
- Versions: `https://netty-ai.github.io/omc-evolve/versions/v{X.Y.Z}/`
- Review: `https://netty-ai.github.io/omc-evolve/review.html`

## Scripts

```bash
# Archive a version snapshot (copies current/ → versions/, updates state.json)
./scripts/archive.sh <version> "<label>"

# Capture prototype screenshot (requires Playwright)
./scripts/screenshot.sh <version>

# Sync SSOT docs to datacenter repo (one-way: evolve → datacenter)
./scripts/sync-ssot.sh [datacenter-path]
```

## Key Rules

- `current/index.html` is devmon's SSOT — only devmon modifies it
- aethmon works in `current/screens/` only — devmon merges into main prototype
- Human feedback **always overrides** checklist priorities
- Fidelity level transitions require human checkpoint
- Reports track ideas/discussions/blockers — agent proposes, human decides
