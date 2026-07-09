# Next Steps

Planning notes for continuing this project. Last updated: 2026-07-09 (commit `c71198f`).

## Forms-first self-service plan (not yet built)

Goal: zero-code-knowledge EACHRights staff should never need to open the raw Google Sheet. Everything goes through a Google Form instead.

### Forms needed

1. **Field Update** — already exists and working (feeds the Updates tab via the public Form, wired into every county page's "+ Add Update" button).
2. **Policy Status Update** (new) — County dropdown branches, via Google Forms' native "go to section based on answer," to that county's own policy dropdown, then Status / Implementation % / Key Gap / Document link fields. Feeds the existing Policies Sheet tab.
3. **New Policy Submission** (new) — County, Policy Name, Year, Theme, Status, Implementation %, Key Gap, Advocacy Opportunity, Document link. Closes the current "adding a brand-new policy requires editing code" gap.
4. **Milestone Scoring** (new) — County dropdown → flat 15-milestone dropdown (same 15 milestones regardless of county, no branching needed) → plain-language score (Not Started / Started-Ongoing / Completed). Feeds the Advocacy Scorecard Sheet tab.

### Update Hub page

One page (likely a redesigned `admin.html`, or a new landing page) with plain-language task buttons, one per Form above, with zero spreadsheet vocabulary anywhere. Something like:

- 📋 Report a Field Update
- 📊 Update a Policy's Status
- ➕ Add a New Policy
- ✅ Score an Advocacy Milestone

### Known tradeoff to revisit

The Policy Status Form's per-county policy dropdown needs manual maintenance: whenever a new policy is added via Form #3, someone has to add that option to the right county's section in Form #2 (a couple minutes in the Form editor, still no code). The alternative was a free-text policy name field (zero maintenance, but relies on staff typing an exact match) — the dropdown was preferred for a foolproof selection experience.

### Deferred

WhatsApp-based intake (field staff type an update straight into WhatsApp instead of filling a Form) was floated as a bigger, higher-effort future upgrade — EACHRights' own Baseline Report notes WhatsApp is already the real communication channel for field teams. Explicitly shelved for now; positioned as a possible future negotiation/upsell item, not part of the current build.

## Other open items (as of commit `c71198f`)

- **Advocacy Materials Tracker links**: all 40 entries still have empty document `url` fields — need real files/links from EACHRights.
- **Migori/Kilifi/Kwale budget trend figures**: removed entirely — untraceable to any of the 5 source documents provided this round. Worth checking whether a 6th document with real numbers exists.
- **Advocacy Scorecard**: all 60 milestone rows start at 0 by design — the Sheet is pre-seeded and ready for the first real staff assessment pass.
- **Print one-pager**: non-essential sections are hidden for print via `.no-print`, but true single-page output hasn't been confirmed with an actual print render — do a manual Ctrl+P check before relying on it for a client deliverable.
- **cPanel migration**: on hold pending the client's hosting details and whether Git Version Control is available on their hosting plan.
- **Repo/Sheet ownership**: currently under Peter's personal GitHub/Google accounts, not an EACHRights-owned account — worth transferring for a genuine long-term handoff (so EACHRights isn't dependent on one person's account access).
- **Theme classifications**: all 45 policies were tagged with a theme this session as best-judgment classification, not sourced from a document — worth a quick client sanity-check.

## Source documents this build has been verified against

1. THE BASELINE REPORT STRENGTHENING GRANT.pdf
2. FINAL DRAFT ADVOCACY STRATEGIES.xlsx.pdf
3. Activity 1.1 - Desktop Research on the Existing SRHR Laws and Policies.docx
4. Inception Report_Lobbying and Advocacy Documents _EachRights.docx
5. Advocacy section to be added to the dashboard.docx
6. Homabay - Disability Inclusion + SRHR Policy Brief.pdf (color palette + Disability Inclusion Brief content)
