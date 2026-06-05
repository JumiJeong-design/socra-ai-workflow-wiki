# Agent Handoff Playbook

## When To Use

Use this when work may continue in another AI tool or another session, especially between Codex and Claude Code.

This playbook is not for recording every chat detail. It is for making sure the next agent can start from the right source document without repeating finished work or moving tasks to the wrong date.

## Core Rule

Handoff is complete only when the next agent can answer three questions from repo documents:

1. What was already completed?
2. What should be done next?
3. Which tasks require Jumi's review instead of agent execution?

If any answer exists only in chat, the handoff is not complete.

## Entry Documents

| Surface | Role |
| --- | --- |
| Product repo `CLAUDE.md` or `AGENTS.md` | First file an AI agent reads in the working repo |
| Product plan / follow-up doc | Current source for the next technical action |
| `jumi-worklog/CONTEXT.md` | Cross-repo session snapshot and next-work split |
| `jumi-worklog/logs/YYYY/MM/YYYY-MM-DD.md` | Date-specific work record and checklist state |
| Public `site/worklog.html` | What Jumi can verify in the browser |

## Required Split

Every handoff should separate:

| Type | Meaning |
| --- | --- |
| Agent work | Tasks Codex or Claude Code can continue from documented evidence |
| Jumi review | Visual judgment, logged-in QA, product direction, or approval decisions |
| Deferred work | Tasks intentionally moved to a future date or later scope |

Do not put next-day tasks under a completed work section. Put them in that date's `Next` block or in the future date's worklog.

## Workflow

1. Read the latest worklog and current product plan.
2. Find any completed work that is still unchecked and check it immediately.
3. If work was completed but not in the checklist, add a new checklist item and mark it `[x]`.
4. Update the product repo entry document so the next agent starts from the right doc and section.
5. Update the product follow-up doc so it says what to do next, not what was already done.
6. Update `CONTEXT.md` with current status and a split between agent work and Jumi review.
7. Update public `site/worklog.html` with the same worklog content.
8. Fetch the public URL and verify the visible page, not only local files.

## Public Verification

For worklog changes, local markdown is not enough.

Required checks:

- The original `jumi-worklog` markdown is updated.
- Public `site/worklog.html` is updated.
- Both repos are committed and pushed.
- The public URL shows the new content.
- The month-level worklog verification passes.

Use month-level verification because stale `plan-*` blocks or old unchecked items can remain even when today's entry looks correct.

## What Not To Do

- Do not create a new H2 just to record a commit, retrospective, or next action.
- Do not create a separate tab when a `###` note inside the date is enough.
- Do not leave completed work unchecked because it was not in the original plan.
- Do not repeat an audit table that already exists; link to the table and continue from the next action.
- Do not say "deployed" until the public page has been fetched and checked.

## Done Criteria

- The next agent entry file points to the right current document.
- The current product plan has an explicit next-action handoff.
- Worklog checkboxes reflect the real state.
- Agent tasks and Jumi review tasks are separated.
- Public worklog URL contains the same content.
- Month-level public worklog verification passes.

## Source Worklog

- `jumi-worklog/logs/2026/06/2026-06-06.md`
