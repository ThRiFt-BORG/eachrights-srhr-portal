# Next Steps

Planning notes for continuing this project. Last updated: 2026-07-13 (commit `b4a313e`, pushed and live).

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

## Advocacy materials — PUSHED, scoped to Homa Bay only

Maureen reviewed on 2026-07-13 (email + 2 marked-up screenshots) ahead of sending the full deliverable package to the client/funder at 4pm the same day. Her instructions, all applied and pushed live same-day (commits `f40ab79`, `52180fa`, `b4a313e`):

1. **Advocacy material links scoped to Homa Bay only** — Migori/Kilifi/Kwale entries in `counties.js` kept their labels but had `urls[]` emptied back out; only Homa Bay's links (the ones she'd shared as demos) are live. The other 3 counties' confidently-matched links from the 2026-07-12 Drive sourcing pass are **not deleted, just stripped from the data** — restore them once client + funder approve (git history has the full set, see commit `3dfaf7e`).
2. **Advocacy Progress Scorecard section removed** from all 4 county boards (main section + sidebar mini card) — was showing an all-zero baseline, not ready for client eyes.
3. **Disability Inclusion in SRHR brief removed** from the Homa Bay board per her marked-up screenshot (the `disability_inclusion_brief` object was deleted from Homa Bay's entry in `counties.js`; the HTML/JS template that renders it is still in `county.html`, just currently unused by any county).
4. **Resources page restructured** — grouped by county instead of theme, policy/legislative documents only, no advocacy materials listed.

Also fixed same session (not from her review, found during QA):
- **Download button labels made consistent** — every doc link across the policy table, materials tracker, and admin document viewer now reads "⬇ Download", matching the homepage/Resources style.
- **Mobile nav overflow bug** — the top nav (Counties/National Policies/Resources/Admin) overflowed off-screen below ~600px, cutting off the Admin link. Fixed with a responsive breakpoint; verified clean on all 4 county pages + homepage + resources + admin at 375px width.

Left empty on purpose (not bugs, from the 2026-07-12 sourcing pass — still true, now moot until re-enabled):
- Every county's flagship policy/bill — no design file exists for any of the 4 counties' lead policy yet
- Kilifi's Menstrual Hygiene Policy — the one file found is ambiguous between two different real site policies (a draft county one and an adopted national one)
- Kilifi's CIDP decision-maker slot — 2 candidate files in Drive, never opened to disambiguate
- Migori's Disability Inclusion — no matching file found
- Kwale's Menstrual Hygiene Policy — no matching file found
- Homa Bay's 3rd Re-entry social media card — exists in the local folder but never surfaced in Drive search (possible sync/permission issue, unresolved)

## Outstanding — needs Maureen/Francis, not code

1. Francis — still wants a decision on the "Download County Specific Advocacy products" link (per-county bundle vs per-item)
2. **When client + funder approve the materials**, restore Migori/Kilifi/Kwale advocacy links in `counties.js` (currently stripped, see above)
3. Flagship materials — still missing across all 4 counties, still coming or launch without them?
4. Document list gaps in the Tracking Tool form (Migori's stalled Reproductive Health Bill has no way to be reported on) — add now or hold for next review pass?
5. The Knowledge Management sentence that's cut off mid-word in her own doc
6. Whether the removed Disability Inclusion brief and Advocacy Progress Scorecard come back in some form, and when — no word yet on whether these are gone for good or pending a redo

## Other cleanup items

- **Stray "Form Responses 3" tab**: an empty duplicate of the original Field Update form got created (likely by the pre-existing `createUpdatesForm()` Apps Script function running again on 2026-07-12). The duplicate Form was deleted from Drive, but the Sheet tab itself didn't fully unlink/become deletable yet — cosmetic issue only, safe to ignore or revisit.
- **New advocacy scoring model** (type-specific milestones + 28-point activity score + trend graph, from Doc1) — the old all-zero scorecard display was removed entirely on 2026-07-13 (see above), not just deferred. Once the Tracking Tool form has collected at least one real reporting period, this needs to be rebuilt with real data rather than simply un-hidden.
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
9. Maureen's review email + 2 marked-up screenshots (2026-07-13), applied same-day ahead of her 4pm client/funder deliverable send
