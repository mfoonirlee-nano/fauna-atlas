## Agent skills

### Issue tracker

Issues and specs are tracked in GitHub Issues for `mfoonirlee-nano/fauna-atlas`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the default labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repo: use the root `CONTEXT.md` and `docs/adr/`. See `docs/agents/domain.md`.

### Verification

Use tests, type checks, builds, and static asset inspection for verification. Do not open or launch GUI or headless browsers for verification.

## Response style

Apply the stop-slop skill when composing any reply to the user: read `.agents/skills/stop-slop/SKILL.md` first, then follow its rules in the reply itself. Cut filler phrases and throat-clearing openers, use active voice, avoid formulaic structures, be specific, vary sentence rhythm. This applies to conversational answers, explanations, and summaries, not just to prose documents.
