# Next Steps

Planning notes for continuing this project. Last updated: 2026-08-21 — **project effectively closed out**, pending Maureen's final sign-off email/invoice. This file is the up-to-date source of truth; earlier sections describing July 2026 state have been superseded and removed.

## Status: closed out, awaiting client sign-off

Maureen's 2026-08-21 email listed 6 items after a client debrief call, requesting a closeout email + invoice once addressed. All are resolved except one that's now in her hands:

1. Org-wide dashboard scale-up — future/funding-dependent, no action needed now.
2. MEL tool alignment — client will reach out once their own tool is approved.
3. **Homepage county navigation** — ✅ done. "County Profiles" cards moved above the map section (were easy to miss below it); commit `9c8ef66`.
4. **"Implementation" → "Progress" column rename** — ✅ done, on both the county Policy & Legal Environment tables and the homepage National Policies table; commit `9c8ef66`.
5. **Revised advocacy materials** — ✅ done, see below.
6. **Tracking Tool form changes** — ✅ done in the Form/Apps Script (not this repo, see below) — **except one open question sent back to Maureen**: adding the evidence-upload field made the whole form require Google sign-in to submit anything (a Google Forms platform behavior, not something we can turn off while keeping file uploads). Peter is confirming with her whether that's acceptable for field staff before this is fully closed.

## Advocacy materials — full sweep complete, all 4 counties live

Client approved materials in full (per the 2026-08-21 debrief) — no longer scoped to Homa Bay only. The "Revised EachRights Products" Drive folder was swept in three passes as the client kept adding files to it over ~a week; final state, all pushed and live:

- **Homa Bay**: full set — 12 flyers/briefs + 17 SM cards across all themes, including a new Menstrual Hygiene Management row.
- **Migori**: 10 flyers/briefs + 18 SM cards across all themes, including a new Menstrual Hygiene Management row.
- **Kilifi**: 11 flyers/briefs (including a newly-found Disability Inclusion brief) + 15 SM cards, including a new Contraceptive Access row.
- **Kwale**: went from zero content to a full set — 13 flyers/briefs + 14 SM cards across all themes it has content for.

Duplicates were screened out at every pass (byte-size matching + manual content comparison for ambiguous cases) rather than guessed at — see commit history (`2de3ff9` through `3735a76`, `ecb7df7`) for the specific judgment calls made.

**Francis's per-county download request — resolved.** Decided in-house rather than waiting further: a "⬇ Download All [County] Advocacy Products" button on every county board, linking directly to that county's Drive folder (Drive zips it natively — no custom bundling to maintain). Sits alongside the existing per-item links. Commit `5cdede7`. All 4 Drive folder links verified publicly accessible.

Left empty on purpose (not bugs, client is aware and okay with it per the 2026-08-21 debrief):
- Every county's flagship policy/bill — no design file exists for any of the 4 counties' lead policy.

## Broken links found and fixed

Checked all 22 policy document links shown on Resources — 6 were dead (mostly typo'd URLs: missing hyphens like `GENDER-ANDDEVELOPMENT` vs `GENDER-AND-DEVELOPMENT`, one full domain change for a link whose original host removed the file). All fixed and re-verified returning HTTP 200. Commits `a9a241d`, `e29c68a`. Note: `kwale.go.ke` sits behind a Cloudflare bot-check that blocks automated verification entirely — its one fix was manually confirmed by Peter, not curl/browser-verified here.

## Tracking Tool form + Apps Script — improved (lives in Google's systems, not this repo)

- **Migori's Reproductive Health Bill dropdown gap — fixed.** Added as a real dropdown option (not just relying on free-text "Other"), plus the matching `DOCUMENT_TO_POLICY_ID` entry (`mg-p06`) in the Apps Script. Verified end-to-end with a real test submission (written, confirmed reflected in the Policies sheet, later reverted by Peter since it used placeholder "Not Started" status).
- **Document-name matching made more resilient** — the lookup now trims whitespace and ignores case, so a near-miss text won't silently fail the way Migori's did before it was caught.
- **`last_updated` timestamp added** — Policies tab now gets a timestamp written on every `onFormSubmit` write-back (new `last_updated` column, added manually by Peter first). Answers "when was this policy's status last confirmed?" without digging through Form Responses 2.
- **Evidence upload + "None of the above" added** per Maureen's request — see the one open sign-in-requirement question above.

## Other cleanup items — unchanged, still low priority

- **Stray "Form Responses 3" tab**: empty duplicate sheet, cosmetic only, safe to ignore.
- **Decision-makers engaged** — field captured by the Tracking Tool form, not displayed anywhere on the site yet. Not requested by client.
- Repo/Sheet ownership still under Peter's personal accounts — long-term backlog, not urgent.
- ~~cPanel migration~~ — **closed, not happening.** Confirmed by Peter 2026-08-21.
- **Advocacy Progress Scorecard** — permanently resolved (not a placeholder): the full 7-stage/15-milestone section is gone from all county boards; the sidebar "Advocacy Status" mini-card is the intended permanent summary, live and pulling real scores from the Advocacy Scorecard sheet as staff use the Tracking Tool.
- **Disability Inclusion in SRHR brief** — was removed from Homa Bay per Maureen's 2026-07-13 screenshot; the HTML/JS template still exists in `county.html` if it's ever needed again for any county. No word on whether it's permanently gone.

## Guidance manual — delivered

A full user & admin guide (overview, public dashboard navigation, Admin Panel, all 3 forms, step-by-step data-update instructions, roles/contacts, quick reference links) was written and sent to Peter as Markdown on 2026-08-21, ahead of the client orientation Maureen said she'd schedule. Not part of this repo — lives wherever Peter/Maureen store client deliverables.

## Deployment

Live at https://thrift-borg.github.io/srhr-dashboard/, deploying automatically via GitHub Pages on every push to `main`. Repo is clean and fully pushed as of this update — nothing pending.
