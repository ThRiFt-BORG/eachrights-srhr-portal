# Next Steps

Planning notes for continuing this project. Last updated: 2026-07-12 (commit `3dfaf7e`, local only — not pushed).

## Forms-first self-service plan — MOSTLY BUILT

Per Maureen Onyango's "Advocacy Tracking and Documentation Tool.docx" and "Advocacy section to be added to the dashboard.docx" (both received 2026-07-12), the actual brief was **2 forms total**, not the 4 originally guessed:

1. **Field Update** — already existed, working, feeds "Form Responses 1".
2. **Advocacy Tracking and Documentation Tool** — ✅ BUILT. 13-section Google Form (County → per-county document dropdown → Policy/Bill/Act type → type-specific milestones → 28-item activity checklist (5 categories) → decision-makers (4 categories) → implementation status). Fully branched and verified. Linked to "Form Responses 2" in the EACHRights SRHR Data spreadsheet (`13p_yPcxcvMsT6qkd3fNiGXZqgXGZjZtR11jGmdoAv-4`). Live form: `https://docs.google.com/forms/d/e/1FAIpQLSd6hzIDoZ5kKE86pLDAAEIc1qBDX-ulSs1JwjBfVnCY_-m6KA/viewform`
3. **Advocacy Materials — Document Upload** — ✅ BUILT. 6-section form (County → per-county policy/bill dropdown → Material Type/File Upload/Caption). Linked to "Form Responses 4". Live form: `https://docs.google.com/forms/d/e/1FAIpQLSeZOmG-eeoaEFy-MOKKGVSGZKLoUSKLtN2nxUrDornOrxy0CA/viewform`

**Apps Script** (bound to the EACHRights SRHR Data spreadsheet, Extensions > Apps Script, function `onFormSubmit` with an installable "From spreadsheet, On form submit" trigger):
- Tracking Tool submissions → looked up via a hand-verified `DOCUMENT_TO_POLICY_ID` table → writes `status`/`impl_pct` into the matching row of the **Policies** tab. Tested live and confirmed working (Homa Bay `hb-p01` → "Partially Implemented" / 50%).
- Document Upload submissions → routed via sheet-name dispatch → staged into an auto-created **"Materials Uploads"** tab with `status: "Pending Review"` (NOT auto-published — materials need client approval first per Maureen's explicit instruction).
- **Known gap**: the Tracking Tool form's per-county document dropdowns (built from Maureen's doc) don't cover every policy the site tracks — see "Document list gaps" in the follow-up email draft. Notably Migori's stalled Reproductive Health Bill (the site's own stated top priority for that county) has no way to be reported on yet.

**Update Hub** — done differently than planned: no new page. Added a "Quick Actions" card directly to the top of `admin.html` (existing staff dashboard) linking all 3 forms. Much smaller than the originally-scoped new page.

## Advocacy materials — wired in, NOT PUSHED

Sourced 52 files from the client's "COMPLETED DESIGNS" Drive folder (also mirrored locally at `data/Completed designs/` — **do not commit that folder, it's 320MB, git-ignore it or leave untracked**). Cross-referenced against every `advocacy_materials` entry in `counties.js` and wired in real Google Drive `urls[]` links for every confident match (commit `3dfaf7e`, local only).

**This commit is deliberately NOT pushed.** Maureen's instruction was explicit: wait for client review/approval before publishing material links. Push only after getting that confirmation (see follow-up email, unanswered as of last check).

Left empty on purpose (not bugs):
- Every county's flagship policy/bill — no design file exists for any of the 4 counties' lead policy yet
- Kilifi's Menstrual Hygiene Policy — the one file found is ambiguous between two different real site policies (a draft county one and an adopted national one)
- Kilifi's CIDP decision-maker slot — 2 candidate files in Drive, never opened to disambiguate
- Migori's Disability Inclusion — no matching file found
- Kwale's Menstrual Hygiene Policy — no matching file found
- Homa Bay's 3rd Re-entry social media card — exists in the local folder but never surfaced in Drive search (possible sync/permission issue, unresolved)

## Outstanding — needs Maureen/Francis, not code

A follow-up email was drafted covering (not yet sent, or sent but unanswered as of last session):
1. Francis — still wants a decision on the "Download County Specific Advocacy products" link (per-county bundle vs per-item)
2. Materials sign-off status — has client review happened yet?
3. Flagship materials — still missing across all 4 counties, still coming or launch without them?
4. Document list gaps in the Tracking Tool form (see above) — add now or hold for next review pass?
5. The Knowledge Management sentence that's cut off mid-word in her own doc

## Other cleanup items

- **Stray "Form Responses 3" tab**: an empty duplicate of the original Field Update form got created (likely by the pre-existing `createUpdatesForm()` Apps Script function running again on 2026-07-12). The duplicate Form was deleted from Drive, but the Sheet tab itself didn't fully unlink/become deletable yet — cosmetic issue only, safe to ignore or revisit.
- **New advocacy scoring model** (type-specific milestones + 28-point activity score + trend graph, from Doc1) — NOT yet reflected on the live site's display. Site still shows the old 15-milestone scorecard. Deliberately deferred until the Tracking Tool form has collected at least one real reporting period — a trend graph needs more than one data point.
- **Decision-makers engaged** — new field captured by the Tracking Tool form, not displayed anywhere on the site yet.
- Repo/Sheet ownership still under Peter's personal accounts — unchanged, still on the long-term backlog.
- cPanel migration — still on hold pending client hosting details.

## Source documents this build has been verified against

1. THE BASELINE REPORT STRENGTHENING GRANT.pdf
2. FINAL DRAFT ADVOCACY STRATEGIES.xlsx.pdf
3. Activity 1.1 - Desktop Research on the Existing SRHR Laws and Policies.docx
4. Inception Report_Lobbying and Advocacy Documents _EachRights.docx
5. Advocacy section to be added to the dashboard.docx
6. Homabay - Disability Inclusion + SRHR Policy Brief.pdf (color palette + Disability Inclusion Brief content)
7. Advocacy Tracking and Documentation Tool.docx (2026-07-12)
8. "COMPLETED DESIGNS" Drive folder / local mirror, 52 files across 4 counties (2026-07-12)
