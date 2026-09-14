# Project guidance

## Task context

- **Issues and specs:** When working from or managing a GitHub issue in `mfoonirlee-nano/fauna-atlas`, read [issue-tracker.md](docs/agents/issue-tracker.md). For triage or label changes, use the label mapping in [triage-labels.md](docs/agents/triage-labels.md).
- **Domain and architecture:** For domain terminology, behavior, or architectural changes, read the root [CONTEXT.md](CONTEXT.md) and relevant ADRs under `docs/adr/`. When maintaining these documents, follow the single-context conventions in [domain.md](docs/agents/domain.md).
- **Visual assets:** Before changing a species image set, regenerating a cover, or adjusting carousel image framing, read the [species image and cover rules](src/assets/source/README.md#species-image-set-rule).

## Verification and completion

Choose tests, type checks, builds, or static asset inspection to match the change; use `package.json` for available commands. Do not open or launch GUI or headless browsers for verification.

Complete the requested change and relevant verification, fixing failures caused by the change before handing it back. Report what changed, what you checked, and any unresolved blocker.

## Response style

Read the [stop-slop skill](.agents/skills/stop-slop/SKILL.md) before your first reply and apply it to all user-facing replies, including progress updates and summaries.
