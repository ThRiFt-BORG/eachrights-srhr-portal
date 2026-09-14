# EACHRights SRHR Advocacy Portal

Public dashboard tracking SRHR policy and legal advocacy progress across Homa Bay, Migori, Kilifi and Kwale,
for the Amplify Change funded project "Taking on the Legal and Policy Advocacy Challenge" (2024 to 2027).

**Live site:** https://thrift-borg.github.io/eachrights-srhr-portal/

## Staff: how to update the portal

**Do not edit any file in this repository to update content.** Day to day updating happens in Google Sheets
and Google Forms, not in code.

| To do this | Use | Access needed |
|---|---|---|
| Report an activity, meeting or news item | Field Update Form (linked from any county page and from Admin) | None |
| Record quarterly milestones and implementation | Quarterly Advocacy Tracking Form | Google sign-in |
| Submit a finished flyer, brief or social card | Materials Upload Form | Google sign-in |
| Change a policy status, progress, gap or document link | Google Sheet, **Policies** tab | Sheet edit permission |
| Score advocacy milestones | Google Sheet, **Advocacy Scorecard** tab | Sheet edit permission |
| Add a new policy, county or county statistic | Ask the developer | Code change required |

Full written instructions live on the site itself at **Admin → How-To Guide**, and in the
*System Description* and *User Training Module* documents held with the project records.

## How it works

Static site, no backend, no database, no authentication. Pages read live data from a published Google Sheet
at load time and merge it over the baseline data compiled into `data/counties.js`.

```
Google Forms ──▶ Google Sheet (Apps Script sorts each submission into the right tab)
                      │
                      ├── Policies tab            ──┐
                      ├── Updates tab              ──┼─▶ published CSV ──▶ site reads on page load
                      └── Advocacy Scorecard tab  ──┘
Google Drive ──▶ policy PDFs and advocacy materials, linked by share URL
```

Deployed by GitHub Pages from `main`. Every push republishes automatically.

## Files

```
index.html        Home: county cards, map, national policy table
county.html       Per-county board (?id=homa-bay|migori|kilifi|kwale)
resources.html    All policy documents, grouped by county
admin.html        Read-only staff monitor + how-to guide (NOT a login, no edit powers)
data/counties.js  Baseline data, Sheet URLs, form URLs, all parsing/merge logic
data/counties.geojson  County boundaries for the maps
css/base.css      Shared styling
docs/             Local copies of policy PDFs (most documents live in Drive instead)
```

## Data the site reads from the Sheet

| Tab | Columns | Notes |
|---|---|---|
| Policies | `county_id`, `policy_id`, `status`, `impl_pct`, `gap`, `doc_url`, `last_updated` | `county_id` and `policy_id` join Sheet rows to `counties.js`. Never change them. `last_updated` is written automatically. |
| Updates | `Timestamp`, `County`, `Date Event`, `Update Title`, `Description`, `Source/ Organization`, `Tags` | Written by Apps Script from the Field Update Form. Headers are matched case and whitespace insensitively. |
| Advocacy Scorecard | `county_id`, `milestone_id`, `score` | Score is 0, 1 or 2 against each of the 15 milestones. |

Valid `status` values: `Adopted`, `Enacted`, `In Progress`, `Draft`, `Stalled`, `Not Operational`.

All three tabs must stay published via **File → Share → Publish to web**. If publishing is revoked the site
still loads but silently falls back to the baseline figures in `counties.js`.

## Developer notes

- Advocacy materials are deliberately **not** auto-published. The Materials Upload Form stages submissions in
  a `Materials Uploads` tab marked *Pending Review*; publishing an approved item means adding its link to
  `advocacy_materials` in `counties.js`.
- The Apps Script lives in the bound Sheet (Extensions → Apps Script), not in this repo.
- Status colours: green = adopted/enacted, amber = in progress, red = stalled, grey = draft.
