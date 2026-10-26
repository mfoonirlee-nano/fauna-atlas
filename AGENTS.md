# Project guidance

## Task context

- **Issues and specs:** When working from or managing a GitHub issue in `mfoonirlee-nano/fauna-atlas`, read [issue-tracker.md](docs/agents/issue-tracker.md). For triage or label changes, use the label mapping in [triage-labels.md](docs/agents/triage-labels.md).
- **Domain and architecture:** For domain terminology, behavior, or architectural changes, read the root [CONTEXT.md](CONTEXT.md) and relevant ADRs under `docs/adr/`. When maintaining these documents, follow the single-context conventions in [domain.md](docs/agents/domain.md).
- **Species and covers:** Before adding an animal, changing its image set or cover metadata, adjusting carousel framing, or changing how cover data loads, read the [species image and cover rules](src/assets/source/README.md#species-image-set-rule). Follow the [completion checks](src/assets/source/README.md#completion-checks) before reporting the work complete.

## Verification and completion

Choose tests, type checks, builds, or static asset inspection to match the change; use `package.json` for available commands. Do not open or launch GUI or headless browsers for verification.

Complete the requested change and relevant verification, fixing failures caused by the change before handing it back. Report what changed, what you checked, and any unresolved blocker.

## Response style

每次向用户发送回复前（包括进度说明和最终答复），按 [humanizer-zh](.agents/skills/humanizer-zh/SKILL.md) 检查草稿。首次使用时读取该技能，后续按已读取的规则执行；修改空话、重复和模板化表达，并核对事实、限定条件、归因和完成状态。只发送检查后的文本，无需展示检查过程；已通顺的文字可以保留。
