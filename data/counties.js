// EACHRights SRHR Portal — All Data
// Edit this file to update content. Non-developers: search for your county and change values.

window.SITE = {
  name: "EACHRights SRHR Advocacy Portal",
  tagline: "Taking on the Legal and Policy Advocacy Challenge: Promoting Synergies Among SRHR Social Movements in Kenya",
  org: "East African Centre for Human Rights (EACHRights)",
  partner: "Amplify Change",
  project_period: "2024–2027",
  last_updated: "June 2026"
};

window.NATIONAL_POLICIES = [
  { id:"np-01", name:"Constitution of Kenya — Article 43(1)(a)", year:2010, status:"Adopted", impl_pct:65, category:"Constitutional", gap:"County-level implementation inconsistent", doc_url:"" },
  { id:"np-02", name:"National Reproductive Health Policy (2022–2032)", year:2022, status:"Adopted", impl_pct:60, category:"Reproductive Health", gap:"Inadequate resource allocation; limited HCW training", doc_url:"http://guidelines.health.go.ke:8000/media/The_National_Reproductive_Health_Policy_2022_-_2032.pdf" },
  { id:"np-03", name:"National Family Planning Policy", year:2025, status:"Adopted", impl_pct:55, category:"Family Planning", gap:"Supply chain challenges; cultural/religious barriers", doc_url:"https://www.health.go.ke/sites/default/files/2026-02/Signed%20National%20Family%20Planning%20Guidelines%207th%20Edition%202025%20%281%29.pdf" },
  { id:"np-04", name:"National ASRHR Policy", year:2015, status:"Adopted", impl_pct:38, category:"Adolescent Health", gap:"Low youth-friendly facility coverage; high teen pregnancy", doc_url:"https://tciurbanhealth.org/wp-content/uploads/2018/03/Ministry-of-Health-ASRH-POLICY-2015.pdf" },
  { id:"np-05", name:"HIV Prevention and Control Act", year:2014, status:"Adopted", impl_pct:57, category:"HIV/AIDS", gap:"Stigma; limited SRHR-HIV integration", doc_url:"" },
  { id:"np-06", name:"National Gender and Development Policy", year:2019, status:"Partially Implemented", impl_pct:32, category:"Gender", gap:"Inadequate gender-responsive budgeting", doc_url:"https://gender.go.ke/sites/default/files/publications/NATIONAL-POLICY-ON-GENDER-ANDDEVELOPMENT.pdf" },
  { id:"np-07", name:"National Guidelines for Comprehensive Sexuality Education", year:2018, status:"Adopted", impl_pct:30, category:"Education", gap:"Inconsistent integration in schools", doc_url:"" },
  { id:"np-08", name:"National Policy on Prevention and Response to GBV", year:2014, status:"Adopted", impl_pct:45, category:"GBV", gap:"Fragmented SGBV response systems; under-resourced", doc_url:"" },
  { id:"np-09", name:"Menstrual Hygiene Management Policy (2019–2030)", year:2019, status:"Adopted", impl_pct:28, category:"Menstrual Health", gap:"County-level implementation very low", doc_url:"http://guidelines.health.go.ke:8000/media/Menstrual_Hygiene_Management_Policy_2019-2030-_May2020.pdf" },
  { id:"np-10", name:"National School Re-entry Guidelines (2020)", year:2020, status:"Adopted", impl_pct:35, category:"Education", gap:"Inconsistent enforcement across counties", doc_url:"https://www.education.go.ke/sites/default/files/2022-05/2020RH_NationalSchoolReEntryGuidelines.pdf" }
];

// ── ADVOCACY SCORECARD METHODOLOGY ──
// County Policy and Legislative Advocacy Scorecard: 7 stages, 15 milestones.
// Each milestone is scored 0 (Not Started) / 1 (Started/Ongoing) / 2 (Completed) per county.
// All scores start at 0 and are filled in by staff via the Advocacy Scorecard Google Sheet tab.
window.ADVOCACY_MILESTONES = [
  { id:"m01", stage:1, stage_name:"Policy Development", name:"Situation Analysis", indicator:"Evidence generated and policy need documented." },
  { id:"m02", stage:1, stage_name:"Policy Development", name:"Policy Drafted", indicator:"Draft policy developed through technical consultations." },
  { id:"m03", stage:1, stage_name:"Policy Development", name:"Policy Adopted", indicator:"Policy approved by the County Executive Committee." },
  { id:"m04", stage:2, stage_name:"Legislative Preparation", name:"Bill Developed", indicator:"Bill drafted to give legal effect to the policy." },
  { id:"m05", stage:2, stage_name:"Legislative Preparation", name:"Executive Approval", indicator:"Bill approved for submission to the County Assembly." },
  { id:"m06", stage:3, stage_name:"Political Engagement", name:"Bill Tabled", indicator:"Bill formally introduced in the County Assembly." },
  { id:"m07", stage:3, stage_name:"Political Engagement", name:"Political Support", indicator:"MCA champions secured and committee engagement undertaken." },
  { id:"m08", stage:4, stage_name:"Community Mobilization", name:"Public Participation", indicator:"Public participation forums conducted and community views submitted." },
  { id:"m09", stage:4, stage_name:"Community Mobilization", name:"Community Mobilization", indicator:"Communities, CSOs, CHPs, youth, women and faith leaders mobilized to support the Bill." },
  { id:"m10", stage:4, stage_name:"Community Mobilization", name:"Media Advocacy", indicator:"Media and social media campaigns implemented." },
  { id:"m11", stage:5, stage_name:"Legislative Action", name:"Bill Enacted", indicator:"Bill passed by the County Assembly and assented to by the Governor." },
  { id:"m12", stage:6, stage_name:"Implementation", name:"Budget Allocated", indicator:"Dedicated implementation budget approved." },
  { id:"m13", stage:6, stage_name:"Implementation", name:"Implementation Guidelines", indicator:"Guidelines, SOPs and operational plans developed." },
  { id:"m14", stage:6, stage_name:"Implementation", name:"Institutional Structures", indicator:"Committees, coordination mechanisms and technical structures established." },
  { id:"m15", stage:7, stage_name:"Accountability & Sustainability", name:"Monitoring & Reporting", indicator:"Indicators tracked, annual reports produced and oversight mechanisms functioning." }
];
window.ADVOCACY_MAX_SCORE = window.ADVOCACY_MILESTONES.length * 2; // 30

window.advocacyRatingForPct = function(pct) {
  if (pct >= 100) return "Completed";
  if (pct >= 61) return "Advanced progress";
  if (pct >= 31) return "Ongoing / Moderate progress";
  if (pct >= 1) return "Started / Early progress";
  return "Not Started";
};

window.COUNTIES = [
  {
    id: "homa-bay",
    name: "Homa Bay",
    region: "Nyanza",
    color: "#c0392b",
    population: 1419662,
    lat: -0.5167, lng: 34.4500,
    hero_stat: { label: "Teen Pregnancy Rate", value: "23%", national_avg: "15%", direction: "above" },
    key_stats: [
      { label: "Maternal Mortality", value: "516/100k", benchmark: "355 national avg", status: "above" },
      { label: "Under-5 Mortality", value: "61/1,000", benchmark: "41 national avg", status: "above" },
      { label: "HIV Prevalence", value: "~20%", benchmark: "5.6% national avg", status: "above" },
      { label: "SRHR Budget FY24/25", value: "KShs 117.4M", benchmark: "5.1% of health budget", status: "neutral" },
      { label: "Active CSOs", value: "~25", benchmark: "", status: "neutral" }
    ],
    overview: "Homa Bay County in the Nyanza region faces significant SRHR challenges, including the highest maternal mortality rate among the four target counties. With 9 sub-counties and 40 wards, the county has ~25 active CSOs working on SRHR advocacy. A dedicated county SRHR policy framework remains the top advocacy priority.",
    sub_counties: 9, wards: 40,
    women_reproductive_age: 336792,
    policies: [
      { id:"hb-p01", name:"Homa Bay County Reproductive Health Bill (2025)", year:2025, status:"In Progress", impl_pct:0, actors:["Ministry of Health / CHMT","Gender TWG","CSOs"], gap:"Delayed finalization", advocacy:"Lobby for enactment", doc_url:"https://drive.google.com/file/d/1felAZTq-0cPqNMvpHDit0cnWIffSFwD8/view?usp=sharing" },
      { id:"hb-p02", name:"County Reproductive Health Policy", year:2025, status:"In Progress", impl_pct:5, actors:["CHMT","CSOs"], gap:"Draft stage — limited stakeholder input", advocacy:"Accelerate stakeholder consultations", doc_url:"" },
      { id:"hb-p03", name:"County SGBV Bill", year:2025, status:"In Progress", impl_pct:0, actors:["County Assembly","CSOs","Gender Office"], gap:"Bill awaiting tabling", advocacy:"Engage county assembly members", doc_url:"" },
      { id:"hb-p04", name:"SGBV Policy (2023)", year:2023, status:"Adopted", impl_pct:55, actors:["Gender Office","CSOs"], gap:"Enforcement weak at sub-county level", advocacy:"Strengthen enforcement mechanisms", doc_url:"https://s3.us-east-005.backblazeb2.com/homabaycms/webadmin/downloads/files/019d5882-b4e6-71ce-bdbd-f08a88e88502-dw-nq51odce19shbdwzowpzinfp.pdf" },
      { id:"hb-p05", name:"County Health Services Act (2020)", year:2020, status:"Adopted", impl_pct:60, actors:["CDH","CHMT"], gap:"SRHR components under-resourced", advocacy:"Advocate for dedicated SRHR budget line", doc_url:"https://s3.us-east-005.backblazeb2.com/homabaycms/webadmin/downloads/files/019d5882-9ac4-70c9-a516-1b94fa876740-dw-bn9rejjmrdl1lksoip2vjot2.pdf" },
      { id:"hb-p06", name:"Homa Bay County HIV and AIDS Strategic Plan (2020–2025)", year:2020, status:"Adopted", impl_pct:58, actors:["CHMT","NSDCC","Development Partners"], gap:"SRHR-HIV integration weak", advocacy:"Strengthen SRHR-HIV service linkages", doc_url:"https://nsdcc.go.ke/wp-content/uploads/2021/08/homabay.pdf" },
      { id:"hb-p07", name:"Homa Bay County Facility Improvement Financing Act (2023)", year:2023, status:"Adopted", impl_pct:45, actors:["CDH","CHMT"], gap:"SRHR facility coverage gaps", advocacy:"Leverage Act for SRHR facility upgrades", doc_url:"https://s3.us-east-005.backblazeb2.com/homabaycms/webadmin/downloads/files/210e46f8-579a4c74-8589-ff3df4c8f0f4-the-homa-bay-county-health-facility-improvement-financing-act-2023.pdf" },
      { id:"hb-p08", name:"National School Re-entry Guidelines (2020)", year:2020, status:"Adopted", impl_pct:35, actors:["Ministry of Education","County Education Dept."], gap:"Implementation inconsistent at county level", advocacy:"Enforce re-entry policy for teen mothers", doc_url:"https://www.education.go.ke/sites/default/files/2022-05/2020RH_NationalSchoolReEntryGuidelines.pdf" }
    ],
    advocacy_materials: [
      { policy:"Homa Bay County Reproductive Health Bill & Policy (2026)", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", stage:"Legislative Action", materials:{ decision_maker:{label:"Executive Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"Social Media Cards",url:""} } },
      { policy:"Homa Bay County Sexual & Gender-Based Violence Control and Management Bill (2024)", theme:"Gender-Based Violence (SGBV)", stage:"Legislative Action", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"Social Media Cards",url:""} } },
      { policy:"Homa Bay Sexual & Gender-Based Violence Policy (2023)", theme:"Gender-Based Violence (SGBV)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"Social Media Cards",url:""} } },
      { policy:"National School Re-entry Guidelines (2020)", theme:"School Re-entry for Adolescent Mothers", stage:"County Domestication & Implementation", materials:{ decision_maker:{label:"County Brief",url:""}, community:{label:"Poster • Flyer",url:""}, media:{label:"Social Media Cards",url:""} } },
      { policy:"National ASRHR Policy", theme:"Adolescent Pregnancy & Youth-Friendly SRHR Services", stage:"County Domestication", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"Social Media Cards",url:""} } },
      { policy:"Homa Bay County HIV & AIDS Strategic Plan (2020–2025)", theme:"Contraceptive Access & HIV Integration", stage:"Implementation", materials:{ decision_maker:{label:"County Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"Social Media Cards",url:""} } },
      { policy:"Homa Bay County Health Services Act (2020)", theme:"Post-Abortion Care (PAC)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"Social Media Cards",url:""} } },
      { policy:"Homa Bay County Health Services Act (2020)", theme:"Disability Inclusion in SRHR Services", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"Social Media Cards",url:""} } },
      { policy:"County Integrated Development Plan (CIDP)", theme:"SRHR Mainstreaming in County Planning", stage:"Implementation", materials:{ decision_maker:{label:"CIDP Advocacy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"Social Media Cards",url:""} } },
      { policy:"Cross-cutting", theme:"Harmful Cultural & Religious Practices Affecting SRHR", stage:"Advocacy & Community Engagement", materials:{ decision_maker:{label:"FAQ Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"Social Media Cards",url:""} } }
    ],
    stakeholders: {
      government: ["County Department of Health","County Gender Office","CHMT","County Assembly Health Committee"],
      csos: ["GVRC","CSA","CYAN Kenya","KELIN","NAYA","HOCEN","HOYMAS"],
      development_partners: ["UNICEF","UNFPA","USAID"],
      community: ["Religious coordinating bodies","Youth advisory councils"]
    },
    budget_trend: [
      { fy:"2022/23", allocation_m:98.8 },
      { fy:"2023/24", allocation_m:109.7 },
      { fy:"2024/25", allocation_m:117.4 }
    ],
    cso_strengths: ["Community mobilization","HIV-focused networking","Local context knowledge"],
    cso_gaps: ["Policy analysis","Budget tracking","Documentation","Strategic litigation"],
    coordination: ["CHMT quarterly meetings","HIV Technical Working Group","RMNCAH committee"],
    updates: [
      { id:"hb-u01", date:"2026-06-01", title:"County SRHR Policy Technical Review Meeting", body:"Stakeholders convened to review the draft Homa Bay County Reproductive Health Bill. Technical review stage ongoing with inputs from CSOs and CHMT.", source:"EACHRights Field Team", tags:["policy","reproductive-health"] },
      { id:"hb-u02", date:"2026-04-15", title:"SGBV Awareness Campaign — Homa Bay Town", body:"A joint campaign by GVRC and NAYA reached over 2,000 community members across 5 sub-counties with SGBV prevention messaging.", source:"GVRC", tags:["sgbv","community"] }
    ]
  },
  {
    id: "migori",
    name: "Migori",
    region: "Nyanza",
    color: "#8e44ad",
    population: 1116436,
    lat: -1.0634, lng: 34.4731,
    hero_stat: { label: "Teen Pregnancy Rate", value: "24%", national_avg: "14.7%", direction: "above" },
    key_stats: [
      { label: "HIV Prevalence", value: "14.3%", benchmark: "5.6% national avg", status: "above" },
      { label: "FGM Rate (girls 15–19)", value: "28%", benchmark: "National concern", status: "above" },
      { label: "Active CSOs", value: "~18", benchmark: "", status: "neutral" },
      { label: "Teen Pregnancy Rate", value: "24%", benchmark: "14.7% national avg", status: "above" }
    ],
    overview: "Migori County has the highest teen pregnancy rate among the four counties and a notably high HIV prevalence at 14.3% against the national average of 5.6%. FGM affects 28% of girls aged 15–19. The Reproductive Health Bill remains stalled, making legislative advocacy the top priority for EACHRights and partner CSOs.",
    sub_counties: 8, wards: 40,
    women_reproductive_age: 271000,
    policies: [
      { id:"mg-p01", name:"GBV Policy (2026 Draft)", year:2026, status:"Draft", impl_pct:0, actors:["Gender Office","CSOs"], gap:"Awaiting approval", advocacy:"Push for County Executive approval", doc_url:"" },
      { id:"mg-p02", name:"SGBV Policy (2019)", year:2019, status:"Adopted", impl_pct:50, actors:["Gender Office","Police","CSOs"], gap:"Limited enforcement; low awareness", advocacy:"Strengthen enforcement & reporting", doc_url:"" },
      { id:"mg-p03", name:"Gender Policy (2021–2025)", year:2021, status:"Adopted", impl_pct:55, actors:["County Gender Office"], gap:"Budget allocation insufficient", advocacy:"Advocate for increased allocation", doc_url:"" },
      { id:"mg-p04", name:"County HIV Strategic Plan", year:2020, status:"Adopted", impl_pct:60, actors:["CHMT","Development Partners"], gap:"SRHR linkages weak", advocacy:"Integrate SRHR-HIV services", doc_url:"https://nsdcc.go.ke/wp-content/uploads/2021/08/migori.pdf" },
      { id:"mg-p05", name:"CIDP SRHR Components (2023–2027)", year:2023, status:"Adopted", impl_pct:40, actors:["County Government"], gap:"Implementation lagging", advocacy:"Quarterly monitoring reviews", doc_url:"" },
      { id:"mg-p06", name:"Reproductive Health Bill", year:2025, status:"Stalled", impl_pct:0, actors:["County Assembly","CSOs"], gap:"Political barriers; limited lobbying", advocacy:"Intensify legislator engagement", doc_url:"" },
      { id:"mg-p07", name:"Migori County Community Health Services Act (2022)", year:2022, status:"Adopted", impl_pct:45, actors:["CDH","CHMT","Community Health Volunteers"], gap:"Limited integration of SRHR in community health", advocacy:"Integrate SRHR in community health unit frameworks", doc_url:"https://migoriassembly.go.ke/wp-content/uploads/2024/10/The-Migori-County-Community-HealthServices-Act-2022.pdf" }
    ],
    advocacy_materials: [
      { policy:"Proposed Migori County Reproductive Health Policy/Bill", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", stage:"Policy Development", materials:{ decision_maker:{label:"Executive Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Migori County SGBV Policy (2019)", theme:"Gender-Based Violence (SGBV)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Draft Migori County GBV Policy (2026)", theme:"Gender-Based Violence (SGBV)", stage:"Policy Development", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"National School Re-entry Guidelines (2020)", theme:"School Re-entry for Adolescent Mothers", stage:"County Domestication", materials:{ decision_maker:{label:"County Brief",url:""}, community:{label:"Poster • Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"National ASRHR Policy", theme:"Adolescent Pregnancy & Youth-Friendly SRHR Services", stage:"County Domestication", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Migori County HIV & AIDS Strategic Plan", theme:"Contraceptive Access & HIV Integration", stage:"Implementation", materials:{ decision_maker:{label:"County Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Migori County Community Health Services Act", theme:"Post-Abortion Care (PAC)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Migori County Gender Policy (2021–2025)", theme:"Disability Inclusion in SRHR Services", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"County Integrated Development Plan (2023–2027)", theme:"SRHR Mainstreaming in County Planning", stage:"Implementation", materials:{ decision_maker:{label:"CIDP Advocacy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Cross-cutting", theme:"Harmful Cultural & Religious Practices Affecting SRHR", stage:"Advocacy & Community Engagement", materials:{ decision_maker:{label:"FAQ Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } }
    ],
    stakeholders: {
      government: ["County Department of Health Services","County Department of Youth Affairs","County Department of Gender and Social Services","Migori County Assembly Health Committee"],
      csos: ["Mikeda Youth Empowerment","Dreamt Hope","Safe Engage Foundation","Youth for a Sustainable World (YSW)"],
      development_partners: ["Plan International","PATH (Program for Appropriate Technology in Health)"],
      community: ["Religious leaders' network","Community Health Strategy Coordinating Committee","Youth Parliamentarians' forum","Women's rights networks"]
    },
    budget_trend: [
      { fy:"2022/23", allocation_m:85.2 },
      { fy:"2023/24", allocation_m:91.5 },
      { fy:"2024/25", allocation_m:99.8 }
    ],
    cso_strengths: ["Strong community networks","FGM elimination advocacy","HIV programming experience"],
    cso_gaps: ["Legislative advocacy","Budget analysis","Monitoring & evaluation","Coalition building"],
    coordination: ["County Reproductive Health Technical Working Group","Gender Technical Working Group","Informal CSO coordination meetings","County HIV Committee"],
    updates: [
      { id:"mg-u01", date:"2026-05-20", title:"Reproductive Health Bill Lobbying Campaign", body:"EACHRights and KELIN convened a legislative engagement session with 12 MCAs to push for tabling of the stalled Reproductive Health Bill.", source:"EACHRights Field Team", tags:["policy","bill","legislature"] },
      { id:"mg-u02", date:"2026-03-08", title:"International Women's Day SGBV Forum", body:"Joint forum held in Migori town on IWD, attended by 150 stakeholders, focused on operationalizing the 2019 SGBV Policy.", source:"KELIN Migori", tags:["sgbv","forum"] }
    ]
  },
  {
    id: "kilifi",
    name: "Kilifi",
    region: "Coast",
    color: "#2980b9",
    population: 1453787,
    lat: -3.5107, lng: 39.8499,
    hero_stat: { label: "Teen Pregnancy Rate", value: "21%", national_avg: "15%", direction: "above" },
    key_stats: [
      { label: "RMNCAH Act Implementation", value: "30–35%", benchmark: "Target: 80%", status: "below" },
      { label: "Youth-Friendly Facilities", value: "35%", benchmark: "Meeting standards", status: "below" },
      { label: "SGBV Policy", value: "0%", benchmark: "Not yet operational", status: "critical" },
      { label: "Active CSOs", value: "~20", benchmark: "", status: "neutral" }
    ],
    overview: "Kilifi County on the Coast region has a recently enacted RMNCAH Act (2025) but with only 30–35% implementation. Critically, an SGBV Policy (2020) exists but remains unsigned by the Governor and thus non-operational. Advocacy focuses on operationalizing existing policies and strengthening youth-friendly services.",
    sub_counties: 7, wards: 35,
    women_reproductive_age: 358000,
    policies: [
      { id:"kf-p01", name:"Kilifi County RMNCAH Act (2025)", year:2025, status:"Enacted", impl_pct:33, actors:["CDH","CHMT","CSOs"], gap:"Low implementation; funding shortfall", advocacy:"Develop county implementation plan with budget", doc_url:"https://slo-countybills.go.ke/api/v1/bill/pdf/B1KNHP7XG1_8_KILIFI%20COUNTY%20REPRODUCTIVE,MATERNAL,%20ADOLESCENT%20AND%20CHILD%20HEALTH%20BILL%202024.pdf" },
      { id:"kf-p02", name:"County SGBV Policy (2020)", year:2020, status:"Not Operational", impl_pct:0, actors:["County Executive","Gender Office"], gap:"Awaiting Governor's signature", advocacy:"Lobby Governor's office to sign immediately", doc_url:"https://fliphtml5.com/hbwww/vray/Kilifi_County_GBV_Policy_-_Draft_1.5/15/" },
      { id:"kf-p03", name:"Menstrual Health Management (MHM) Policy", year:2024, status:"Draft", impl_pct:0, actors:["CDH","Education Dept.","CSOs"], gap:"Not yet adopted", advocacy:"Fast-track adoption process", doc_url:"" },
      { id:"kf-p04", name:"Kilifi County SGBV Bill (2023)", year:2023, status:"In Progress", impl_pct:10, actors:["County Assembly","CSOs","Gender Office"], gap:"Bill awaiting enactment", advocacy:"Lobby County Assembly for passage", doc_url:"https://slo-countybills.go.ke/api/v1/bill/pdf/8BZTY32RAX_3_KIlifi%20County%20Gender%20Based%20Violance%20Bill,%202023.pdf" },
      { id:"kf-p05", name:"Kilifi County CIDP — SRHR Components (2023–2027)", year:2023, status:"Adopted", impl_pct:40, actors:["County Government"], gap:"SRHR components underfunded", advocacy:"Ensure SRHR budget lines are ring-fenced", doc_url:"https://assets.countydevelopmentplan.com/cidp/pdfs/280d3e55-e43f-4db3-b028-8e4637440be4-KILIFI-COUNTY-CIDP-III_30.05.2023.pdf" },
      { id:"kf-p06", name:"National School Re-entry Guidelines (2020)", year:2020, status:"Adopted", impl_pct:35, actors:["Ministry of Education","County Education Dept."], gap:"Inconsistent enforcement", advocacy:"County-level enforcement policy needed", doc_url:"https://www.education.go.ke/sites/default/files/2022-05/2020RH_NationalSchoolReEntryGuidelines.pdf" },
      { id:"kf-p07", name:"Menstrual Hygiene Management Policy (2019–2030)", year:2019, status:"Adopted", impl_pct:28, actors:["Ministry of Health","County Health Dept."], gap:"Implementation minimal at county level", advocacy:"Develop county MHM implementation plan", doc_url:"http://guidelines.health.go.ke:8000/media/Menstrual_Hygiene_Management_Policy_2019-2030-_May2020.pdf" }
    ],
    advocacy_materials: [
      { policy:"Kilifi RMNCAH Act (2025)", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", stage:"Implementation", materials:{ decision_maker:{label:"Executive Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Kilifi County SGBV Bill (2023)", theme:"Gender-Based Violence (SGBV)", stage:"Legislative Action", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Kilifi County SGBV Policy (2020)", theme:"Gender-Based Violence (SGBV)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"National School Re-entry Guidelines (2020)", theme:"School Re-entry for Adolescent Mothers", stage:"County Domestication", materials:{ decision_maker:{label:"County Brief",url:""}, community:{label:"Poster • Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"National ASRHR Policy", theme:"Adolescent Pregnancy & Youth-Friendly SRHR Services", stage:"County Domestication", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Menstrual Hygiene Management Policy", theme:"Menstrual Health & Hygiene Management", stage:"County Adoption & Implementation", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Persons with Disabilities Act", theme:"Disability Inclusion in SRHR Services", stage:"County Implementation", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"County Integrated Development Plan", theme:"SRHR Mainstreaming in County Planning", stage:"Implementation", materials:{ decision_maker:{label:"CIDP Advocacy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Kilifi RMNCAH Act", theme:"Post-Abortion Care (PAC)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Cross-cutting", theme:"Harmful Cultural & Religious Practices Affecting SRHR", stage:"Advocacy & Community Engagement", materials:{ decision_maker:{label:"FAQ Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } }
    ],
    stakeholders: {
      government: ["County Department of Health Services","County Department of Education","County Department of Gender and Social Services","Kilifi County Assembly","Office of the County Attorney"],
      csos: ["Kilifi CSO Network","Rising Winners Youth Empowerment Initiative","Pwani Youth Network","Youth for a Sustainable World (YSW)","KELIN"],
      development_partners: ["Planned Parenthood Global","Marie Stopes Kenya","UNFPA","UNICEF"],
      community: ["Council of Elders","Interfaith Religious Leaders Forum","Youth advisory networks","Women's rights groups"]
    },
    budget_trend: [
      { fy:"2022/23", allocation_m:101.0 },
      { fy:"2023/24", allocation_m:108.5 },
      { fy:"2024/25", allocation_m:115.2 }
    ],
    cso_strengths: ["Coastal community networks","Youth engagement","Maternal health programming"],
    cso_gaps: ["Strategic litigation","Budget advocacy","Policy documentation","Media engagement"],
    coordination: ["County Reproductive Health Technical Working Group","Gender Technical Working Group","Child Protection Network","Ad hoc CSO coordination meetings","RMNCAH Committee"],
    updates: [
      { id:"kf-u01", date:"2026-06-10", title:"Governor Signature Campaign for SGBV Policy", body:"A coalition of 8 CSOs submitted a formal petition to the Governor's office demanding signature of the 2020 SGBV Policy. Follow-up meeting scheduled for July 2026.", source:"CREAW Kilifi", tags:["sgbv","policy","governor"] },
      { id:"kf-u02", date:"2026-05-05", title:"RMNCAH Act Implementation Review Workshop", body:"County stakeholders reviewed progress on RMNCAH Act implementation. Current rate stands at 33%. Key bottleneck identified as inadequate HCW capacity.", source:"PATH Kenya", tags:["rmncah","implementation"] }
    ]
  },
  {
    id: "kwale",
    name: "Kwale",
    region: "Coast",
    color: "#27ae60",
    population: 866820,
    lat: -4.1731, lng: 39.4525,
    hero_stat: { label: "Teen Pregnancy Rate", value: "22%", national_avg: "15%", direction: "above" },
    key_stats: [
      { label: "County SRHR Policy", value: "None", benchmark: "Relies on national only", status: "critical" },
      { label: "SGBV Act Implementation", value: "30–40%", benchmark: "Target: 80%", status: "below" },
      { label: "Active CSOs", value: "~15", benchmark: "Fewest of 4 counties", status: "neutral" },
      { label: "Religious Influence", value: "High", benchmark: "Council of Imams", status: "neutral" }
    ],
    overview: "Kwale County has the fewest active CSOs (~15) and no dedicated county SRHR policy — relying solely on national frameworks. The predominantly Muslim context means the Council of Imams holds significant influence over SRHR discourse. The SGBV Act 2023/2024 shows 30–40% implementation, and a Gender & Social Inclusion Policy remains at 0% with no adoption date confirmed.",
    sub_counties: 4, wards: 20,
    women_reproductive_age: 210000,
    policies: [
      { id:"kw-p01", name:"Kwale County SGBV Act (2023/2024)", year:2023, status:"Enacted", impl_pct:35, actors:["County Government","Police","CSOs"], gap:"Enforcement weak; limited resources", advocacy:"Lobby for implementation budget", doc_url:"https://www.kwaleassembly.go.ke/wp-content/uploads/2024/03/KWALE-COUNTY-SEXUALGENDER-BASED_2023.pdf" },
      { id:"kw-p02", name:"Gender & Social Inclusion Policy", year:2025, status:"Draft", impl_pct:0, actors:["County Gender Office","CSOs"], gap:"Not yet adopted", advocacy:"Engage County Executive for fast-track adoption", doc_url:"https://kwale.go.ke/wp-content/uploads/2024/12/KWALE-GENDER-AND-SOCIAL-INCLUSIONPOLICY-2024-POPULAR-VERSION-DRAFT.pdf" }
    ],
    advocacy_materials: [
      { policy:"National Reproductive Health Policy (County Implementation)", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", stage:"County Implementation", materials:{ decision_maker:{label:"Executive Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Kwale County SGBV Act", theme:"Gender-Based Violence (SGBV)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Draft Kwale County Gender & Social Inclusion Policy", theme:"Disability Inclusion in SRHR Services", stage:"Policy Development", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"National School Re-entry Guidelines (2020)", theme:"School Re-entry for Adolescent Mothers", stage:"County Domestication", materials:{ decision_maker:{label:"County Brief",url:""}, community:{label:"Poster • Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"National ASRHR Policy", theme:"Adolescent Pregnancy & Youth-Friendly SRHR Services", stage:"County Domestication", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"National Family Planning Policy", theme:"Contraceptive Access", stage:"County Implementation", materials:{ decision_maker:{label:"County Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Kenya Health Policy (2014–2030)", theme:"Post-Abortion Care (PAC)", stage:"County Implementation", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Menstrual Hygiene Management Policy", theme:"Menstrual Health & Hygiene Management", stage:"County Implementation", materials:{ decision_maker:{label:"Policy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"County Integrated Development Plan", theme:"SRHR Mainstreaming in County Planning", stage:"Implementation", materials:{ decision_maker:{label:"CIDP Advocacy Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } },
      { policy:"Cross-cutting", theme:"Harmful Cultural & Religious Practices Affecting SRHR", stage:"Advocacy & Community Engagement", materials:{ decision_maker:{label:"FAQ Brief",url:""}, community:{label:"Community Flyer",url:""}, media:{label:"",url:""} } }
    ],
    stakeholders: {
      government: ["County Department of Health","County Department of Education","County Department of Gender, Special Group and Youth Affairs","Kwale County Assembly Health Committee","Office of the National Commissioner, Kwale County"],
      csos: ["Kwale CSOs Consortium","AN International Kwale","Kwale Youth and Governance Consortium","Maternal and Child Health Advocacy International","Teens Watch","Kwale Human Rights Network","Kenya Red Cross Kwale Branch"],
      development_partners: ["World Vision","UNICEF","Care International","UNFPA"],
      community: ["Council of Imams and Preachers of Kenya (CIPK)","Community health volunteers' network","Women's rights groups","Youth networks"]
    },
    budget_trend: [
      { fy:"2022/23", allocation_m:62.1 },
      { fy:"2023/24", allocation_m:68.4 },
      { fy:"2024/25", allocation_m:74.6 }
    ],
    cso_strengths: ["Religious leader engagement","Community trust","Local knowledge"],
    cso_gaps: ["Policy advocacy","Budget tracking","Strategic litigation","CSO networking"],
    coordination: ["County Health Management Team meetings","Maternal and Child Health Technical Working Group","Informal CSO networking platforms","Gender Technical Working Group"],
    updates: [
      { id:"kw-u01", date:"2026-06-15", title:"Interfaith SRHR Dialogue — Kwale Town", body:"First-ever interfaith dialogue on SRHR involving the Council of Imams and Christian leaders. Agreement reached to co-develop community SRHR messaging.", source:"Kwale Women Network", tags:["interfaith","sgbv","community"] },
      { id:"kw-u02", date:"2026-04-20", title:"County SRHR Policy Development Workshop", body:"Stakeholder workshop to launch the SRHR policy development process. 22 organizations participated. Technical committee formed to draft the policy by Q4 2026.", source:"EACHRights Field Team", tags:["policy","workshop"] }
    ]
  }
];

// ── OPTION A: GOOGLE SHEETS AS SINGLE SOURCE OF TRUTH ──
// Data is fetched fresh from Google Sheets on every page load.
// Stored in memory only (window.SHEET_DATA) — no localStorage conflicts.
// county.html merges sheet data over base COUNTIES data before rendering.
// Policies tab: edited directly by trusted staff (see admin.html guide).
// Updates tab: fed by a public Google Form — see FORM_URL below.

const GS_DEFAULTS = {
  policies:  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS-PmarsL1CDHiaanaytyeO1f7iCgUrKWl6TAD-Esc2ZmyRuSd8xKetPXDutVKOkwJe4ldoUyGkLw4w/pub?gid=0&single=true&output=csv",
  updates:   "https://docs.google.com/spreadsheets/d/e/2PACX-1vS-PmarsL1CDHiaanaytyeO1f7iCgUrKWl6TAD-Esc2ZmyRuSd8xKetPXDutVKOkwJe4ldoUyGkLw4w/pub?gid=1369410892&single=true&output=csv",
  advocacy:  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS-PmarsL1CDHiaanaytyeO1f7iCgUrKWl6TAD-Esc2ZmyRuSd8xKetPXDutVKOkwJe4ldoUyGkLw4w/pub?gid=1539470058&single=true&output=csv"
};

// URL of the public Google Form staff use to submit a new Update.
window.UPDATES_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc1QzUfbPAhX3j0ZWK7QJflkBdjcywsXPCtAtjLOljk0TFXeA/viewform";

const VALID_COUNTY_IDS = new Set(['homa-bay', 'migori', 'kilifi', 'kwale']);
const VALID_MILESTONE_IDS = new Set(window.ADVOCACY_MILESTONES.map(m => m.id));
// Google Forms writes the exact question text as the column header — these match
// the actual "Form Responses 1" tab headers (Timestamp column is ignored).
const UPDATES_FORM_HEADERS = {
  county: 'County',
  date: 'Date Event',
  title: 'Update Title',
  body: 'Description',
  source: 'Source/ Organization',
  tags: 'Tags( optional, separate with ;  )'
};
const COUNTY_LABEL_TO_ID = { 'Homa Bay': 'homa-bay', 'Migori': 'migori', 'Kilifi': 'kilifi', 'Kwale': 'kwale' };

// ── XSS-SAFE RENDER HELPERS — use these around every value written via innerHTML ──
window.esc = function(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
};
// Only allow http(s) URLs through to href/src attributes — blocks javascript: injection via doc_url
window.safeUrl = function(url) {
  if (typeof url !== 'string') return '';
  const trimmed = url.trim();
  return /^https?:\/\//i.test(trimmed) ? trimmed : '';
};
// One shared status→CSS-class slug, used by index.html, county.html, admin.html
window.slugStatus = function(status) {
  return 'pill-' + String(status ?? '').toLowerCase().replace(/[\s\/\-]+/g, '');
};

function clampPct(n) {
  const v = parseInt(n, 10);
  if (isNaN(v)) return 0;
  return Math.max(0, Math.min(100, v));
}

// fetch with a hard timeout so a hung network doesn't block rendering forever
async function fetchWithTimeout(url, ms) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { signal: ctrl.signal });
  } finally {
    clearTimeout(t);
  }
}

// In-memory store — reset on every page load, no stale data
window.SHEET_DATA = { policies: {}, updates: {}, advocacy: {} };
window.SHEET_STATUS = { policies: 'pending', updates: 'pending', advocacy: 'pending' }; // 'pending' | 'ok' | 'error'

window.loadGoogleSheetsData = async function() {
  // ── POLICIES ── (Papa Parse handles quoting/escaping correctly; header:true reads by column name)
  try {
    const res = await fetchWithTimeout(GS_DEFAULTS.policies, 5000);
    const text = await res.text();
    const parsed = Papa.parse(text.trim(), { header: true, skipEmptyLines: true });
    parsed.data.forEach(row => {
      const county_id = (row.county_id || '').trim();
      const policy_id = (row.policy_id || '').trim();
      if (!VALID_COUNTY_IDS.has(county_id) || !policy_id) return; // silently drop malformed/unknown rows
      if (!window.SHEET_DATA.policies[county_id]) window.SHEET_DATA.policies[county_id] = [];
      window.SHEET_DATA.policies[county_id].push({
        id: policy_id,
        status: (row.status || '').trim(),
        impl_pct: clampPct(row.impl_pct),
        gap: (row.gap || '').trim(),
        doc_url: window.safeUrl(row.doc_url || '')
      });
    });
    window.SHEET_STATUS.policies = 'ok';
  } catch (e) {
    window.SHEET_STATUS.policies = 'error';
    console.warn('⚠️ Policies sheet load failed — using base data:', e.message);
  }

  // ── UPDATES ── (fed by the public Google Form; county comes through as a label, mapped to id)
  try {
    const res2 = await fetchWithTimeout(GS_DEFAULTS.updates, 5000);
    const text2 = await res2.text();
    const parsed2 = Papa.parse(text2.trim(), { header: true, skipEmptyLines: true });
    parsed2.data.forEach(row => {
      const rawCounty = (row[UPDATES_FORM_HEADERS.county] || '').trim();
      const county_id = VALID_COUNTY_IDS.has(rawCounty) ? rawCounty : COUNTY_LABEL_TO_ID[rawCounty];
      const title = (row[UPDATES_FORM_HEADERS.title] || '').trim();
      if (!county_id || !title) return;
      const date = (row[UPDATES_FORM_HEADERS.date] || '').trim();
      const tagsRaw = (row[UPDATES_FORM_HEADERS.tags] || '').trim();
      if (!window.SHEET_DATA.updates[county_id]) window.SHEET_DATA.updates[county_id] = [];
      window.SHEET_DATA.updates[county_id].push({
        id: `gs-${county_id}-${date}-${title.slice(0, 8).replace(/\s/g, '')}`,
        date,
        title,
        body: (row[UPDATES_FORM_HEADERS.body] || '').trim(),
        source: (row[UPDATES_FORM_HEADERS.source] || '').trim(),
        tags: tagsRaw ? tagsRaw.split(';').map(t => t.trim()).filter(Boolean) : []
      });
    });
    window.SHEET_STATUS.updates = 'ok';
  } catch (e) {
    window.SHEET_STATUS.updates = 'error';
    console.warn('⚠️ Updates sheet load failed — using base data:', e.message);
  }

  // ── ADVOCACY SCORECARD ── (trusted staff edit directly, like Policies)
  if (GS_DEFAULTS.advocacy.startsWith('http')) {
    try {
      const res3 = await fetchWithTimeout(GS_DEFAULTS.advocacy, 5000);
      const text3 = await res3.text();
      const parsed3 = Papa.parse(text3.trim(), { header: true, skipEmptyLines: true });
      parsed3.data.forEach(row => {
        const county_id = (row.county_id || '').trim();
        const milestone_id = (row.milestone_id || '').trim();
        if (!VALID_COUNTY_IDS.has(county_id) || !VALID_MILESTONE_IDS.has(milestone_id)) return;
        if (!window.SHEET_DATA.advocacy[county_id]) window.SHEET_DATA.advocacy[county_id] = {};
        window.SHEET_DATA.advocacy[county_id][milestone_id] = Math.max(0, Math.min(2, parseInt(row.score, 10) || 0));
      });
      window.SHEET_STATUS.advocacy = 'ok';
    } catch (e) {
      window.SHEET_STATUS.advocacy = 'error';
      console.warn('⚠️ Advocacy scorecard sheet load failed — all milestones default to 0:', e.message);
    }
  } else {
    window.SHEET_STATUS.advocacy = 'error'; // placeholder URL not yet configured
  }

  console.log('Google Sheets sync:', window.SHEET_STATUS);
};

// Helper: get the advocacy scorecard for a county — all milestones default to 0 until a staff member scores them via the Sheet
window.getAdvocacyScorecard = function(countyId) {
  const scores = window.SHEET_DATA.advocacy[countyId] || {};
  const milestones = window.ADVOCACY_MILESTONES.map(m => ({ ...m, score: scores[m.id] ?? 0 }));
  const totalScore = milestones.reduce((sum, m) => sum + m.score, 0);
  const pct = Math.round((totalScore / window.ADVOCACY_MAX_SCORE) * 100);
  return { milestones, totalScore, maxScore: window.ADVOCACY_MAX_SCORE, pct, ratingLabel: window.advocacyRatingForPct(pct) };
};

// Helper: get a county with sheet data merged in (used by county.html and admin.html)
window.getMergedCounty = function(countyId) {
  const found = COUNTIES.find(c => c.id === countyId);
  if (!found) return null;
  const base = JSON.parse(JSON.stringify(found));

  // Merge policy overrides from sheet
  const sheetPolicies = window.SHEET_DATA.policies[countyId] || [];
  sheetPolicies.forEach(sp => {
    const p = base.policies.find(p => p.id === sp.id);
    if (p) {
      if (sp.status) p.status = sp.status;
      if (sp.impl_pct !== undefined) p.impl_pct = sp.impl_pct;
      if (sp.gap) p.gap = sp.gap;
      if (sp.doc_url) p.doc_url = sp.doc_url;
    }
  });

  // Prepend sheet updates before base updates
  const sheetUpdates = window.SHEET_DATA.updates[countyId] || [];
  base.updates = [...sheetUpdates, ...base.updates]
    .sort((a, b) => b.date.localeCompare(a.date));

  return base;
};

// Auto-load on every page — always resolves even if sheet is unreachable
window.SHEET_READY = window.loadGoogleSheetsData().catch(() => {
  console.warn('Sheet unavailable — using base data');
});