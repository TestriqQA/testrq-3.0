/**
 * Block 10 "specific CTA" for each service page.
 *
 * WHAT THIS IS
 * The brief's spec is one line: Specific — "Get a test plan for your app", not
 * "Contact us". Every entry below therefore names a DELIVERABLE the visitor
 * receives, says what we need from them to produce it, and labels the button
 * with that same action. Before this file existed, 57 of the 63 service pages
 * closed on a generic invitation ("Ready to Ensure Digital Inclusion for
 * Everyone?") with nothing named behind it.
 *
 * WHERE THE WORDS CAME FROM
 * Each deliverable is one the page already describes — a WCAG audit on the
 * accessibility page, a gap analysis on the compliance page, a device matrix on
 * the mobile page. Nothing below promises an output the page does not already
 * say we produce, and no timeframe, price or guarantee appears anywhere,
 * because none of these pages states one.
 *
 * ABOUT THE EXISTING CTAs
 * These pages already end on a generic CTA section of their own, which this
 * does NOT remove. Those sections are scattered across a dozen dedicated
 * components and ~50 inline blocks, and rewriting all of them in place is a
 * copy decision rather than a template one. This block is the template's
 * block 10, placed last, so the specific offer is the final thing read. If the
 * generic sections are retired later, this is what should replace them.
 *
 * WHY SIX PAGES ARE ABSENT
 * The six tool pages — appium, cypress, jmeter, playwright, postman, selenium —
 * all render from ToolLandingPage, whose closing CTA button already reads "Get
 * a {tool} proposal". That names a deliverable, so block 10 is already
 * satisfied there and a second CTA would only stack on the first. An audit that
 * reads H2 headings alone misses this, because their heading is an invitation
 * ("Run your Cypress suite with people who've shipped it before") and the
 * specific part lives in the button.
 */

export interface ServiceCta {
    /** Names the deliverable. Becomes the block's h2. */
    heading: string;
    /** One sentence: what we need, and what comes back. */
    line: string;
    /** Button text. The same action as the heading, in fewer words. */
    button: string;
}

export const SERVICE_CTAS: Readonly<Record<string, ServiceCta>> = {
    "accessibility-testing-services": { heading: "Get a WCAG audit of your product", line: "Send us a URL or a build. You get a prioritised list of the barriers blocking users, mapped to the WCAG criteria each one fails.", button: "Request a WCAG audit" },
    "ad-hoc-testing": { heading: "Get a rapid QA pass on your hotfix", line: "Send the build and what changed. Experienced testers probe it straight away, without waiting for test cases to be written first.", button: "Book a rapid pass" },
    "agile-testing-services": { heading: "Get testers inside your next sprint", line: "Tell us your sprint length and your stack. We scope the testers who join your ceremonies and own quality within the iteration.", button: "Plan your sprint QA" },
    "ai-application-testing": { heading: "Get a risk assessment for your AI model", line: "Share what your model does and where it is deployed. You get a validation plan covering behaviour, performance and the standards that apply.", button: "Request an AI risk assessment" },
    "api-testing": { heading: "Get a test plan for your API suite", line: "Send your OpenAPI spec or a collection. You get a plan covering contract, security and load coverage, with CI integration mapped out.", button: "Request an API test plan" },
    "application-architecture-inspection-services": { heading: "Get an architecture inspection report", line: "Share your system diagrams and repo access. You get a written assessment of structural risk, with the changes ranked by what they cost to defer.", button: "Request an inspection" },
    "automation-testing-services": { heading: "Get an automation ROI assessment", line: "Tell us what your team runs manually today. You get a framework proposal, a coverage plan, and the numbers behind the business case.", button: "Request an assessment" },
    "azure-testing-services": { heading: "Get an Azure environment assessment", line: "Share your Azure setup. You get a test plan covering pipeline quality gates, identity and network configuration, and behaviour under scale.", button: "Request an Azure assessment" },
    "banking-finance-industry-testing-services": { heading: "Get a BFSI compliance test plan", line: "Tell us which systems are in scope and which regulators you answer to. You get a plan covering transaction flows, security controls and audit evidence.", button: "Request a test plan" },
    "blockchain-app-testing-services": { heading: "Get a smart contract audit plan", line: "Share your contracts or dApp repo. You get a scope covering security, consensus behaviour and scale — before deployment makes any of it permanent.", button: "Request an audit plan" },
    "compatibility-testing-services": { heading: "Get a device and browser coverage matrix", line: "Tell us who your users are. You get the matrix we would test against, and the gaps your current coverage leaves open.", button: "Request a coverage matrix" },
    "continuous-testing-services-cicd-pipeline": { heading: "Get a pipeline quality-gate plan", line: "Share your CI setup. You get a plan for which checks run at which stage, and what each one should be allowed to block.", button: "Request a pipeline plan" },
    "corporate-qa-training": { heading: "Get a training curriculum for your team", line: "Tell us your team's current level and where you need them to be. You get a curriculum proposal with modules, duration and target outcomes.", button: "Request a curriculum" },
    "cyber-security-testing-services": { heading: "Get a compliance gap analysis", line: "Name the framework — GDPR, HIPAA, PCI DSS, SOC 2 or ISO 27001. You get a gap analysis per control, with evidence and a remediation order.", button: "Request a gap analysis" },
    "data-analysis-services": { heading: "Get an analysis proposal for your data", line: "Tell us what you hold and what you need to decide. You get a proposal covering method, outputs, and how the results will be validated.", button: "Request a proposal" },
    "dating-app-certification": { heading: "Start your six-pillar certification review", line: "Submit your app. You get an assessment against all six pillars, with the specific changes required wherever one falls short.", button: "Begin certification" },
    "desktop-application-testing-services": { heading: "Get a desktop test plan", line: "Tell us your target platforms and installer. You get a plan covering installation, OS dependencies, offline behaviour and performance profiling.", button: "Request a test plan" },
    "dpdp-compliance-testing-services": { heading: "Get a DPDP readiness assessment", line: "Share your product. You get test evidence of how it actually handles consent, notices, data rights and breach response.", button: "Request a readiness assessment" },
    "e-commerce-testing-services": { heading: "Get a checkout and payment test plan", line: "Tell us your platform and payment providers. You get a plan covering the checkout path, peak-load behaviour, and the privacy requirements that apply.", button: "Request a test plan" },
    "e-learning-testing-services": { heading: "Get an LMS test plan", line: "Tell us your platform and when enrolment peaks. You get a plan covering WCAG accessibility, performance at scale, and the security of learner records.", button: "Request a test plan" },
    "embedded-testing-services": { heading: "Get a V&V plan for your device", line: "Tell us the hardware and the standards you answer to. You get a verification and validation plan scoped to your safety and security requirements.", button: "Request a V&V plan" },
    "etl-testing-services": { heading: "Get a pipeline validation plan", line: "Share your source and target schemas. You get a plan covering transformation logic, reconciliation, and the audit evidence your pipeline has to produce.", button: "Request a validation plan" },
    "exploratory-testing": { heading: "Book an exploratory testing charter", line: "Give us a build and an area you are uneasy about. Testers run time-boxed charters and report what your scripted coverage has been missing.", button: "Book a charter" },
    "functional-testing-services": { heading: "Get a functional test plan", line: "Share your requirements or user stories. You get a plan mapping each journey to the coverage that proves it does what the requirement promised.", button: "Request a test plan" },
    "gaming-app-testing-services": { heading: "Get a pre-launch game test plan", line: "Tell us the title and the platforms. You get a plan covering gameplay mechanics, frame-rate and load performance, and the device matrix.", button: "Request a test plan" },
    "healthcare-testing-services": { heading: "Get a HIPAA-aligned test plan", line: "Tell us your system and the regulations in scope. You get a plan covering clinical correctness, patient-data security, and audit-ready evidence.", button: "Request a test plan" },
    "iot-appliances-and-apps-testing-services": { heading: "Get an edge-to-cloud test plan", line: "Describe your appliance and its companion app. You get a plan covering connectivity, security and performance across the whole path between them.", button: "Request a test plan" },
    "iot-device-testing-services": { heading: "Get a device test plan", line: "Tell us the hardware and the protocols. You get a plan covering firmware, communications, cloud APIs and edge behaviour under real network conditions.", button: "Request a test plan" },
    "iso-iec-42001-compliance-testing-services": { heading: "Get an ISO 42001 readiness assessment", line: "Tell us where your AI systems sit. You get a clause-by-clause readiness view and the evidence each one will need at audit.", button: "Request a readiness assessment" },
    "launchfast-qa": { heading: "Get a QA sprint for your MVP", line: "Tell us your launch date. You get a short, scoped sprint covering the paths a first user — or an investor — will actually take.", button: "Book a QA sprint" },
    "managed-testing-services": { heading: "Get a managed QA proposal", line: "Tell us what your QA function costs and delivers today. You get a proposal covering scope, KPIs, and how the transition would run.", button: "Request a proposal" },
    "manual-testing-services": { heading: "Get a manual test plan", line: "Share your product and release cadence. You get a plan covering the exploratory and scripted work automation cannot do for you.", button: "Request a test plan" },
    "manufacturing-industry-testing-services": { heading: "Get an OT and MES test plan", line: "Tell us your systems and the standards in scope. You get a plan covering protocol conformance, functional safety and shopfloor integration, with auditor-ready evidence.", button: "Request a test plan" },
    "matrimonial-apps-certification": { heading: "Start your six-pillar certification review", line: "Submit your platform. You get an assessment against all six pillars, concentrating on how sensitive personal data is handled.", button: "Begin certification" },
    "microservices-testing": { heading: "Get a distributed test strategy", line: "Share your service map. You get a strategy covering contract testing, resilience, and the failure modes that only appear between services.", button: "Request a strategy" },
    "migration-testing": { heading: "Get a migration test plan", line: "Tell us what is moving and where to. You get a plan that proves completeness and correctness on the far side, before you cut over.", button: "Request a test plan" },
    "mobile-application-testing": { heading: "Get a device coverage plan for your app", line: "Tell us your minimum OS versions and target markets. You get the device matrix we would test against, and the gaps in your current coverage.", button: "Request a coverage plan" },
    "performance-testing-services": { heading: "Get a load and scalability test plan", line: "Tell us your peak traffic and the SLAs you hold. You get a scenario design and the thresholds your system must hold before customers find the limit.", button: "Request a test plan" },
    "qa-documentation-services": { heading: "Get an audit-ready documentation set", line: "Tell us your regulator and your current state. You get test plans, cases and reports aligned to ISO/IEC/IEEE 29119-3.", button: "Request a documentation set" },
    "qa-outsourcing-services": { heading: "Get a QA outsourcing proposal", line: "Tell us your product and team size. You get a proposal covering engagement model, team composition, and cost set against your current spend.", button: "Request a proposal" },
    "quality-assurance-services": { heading: "Get a QA proposal for your product", line: "Tell us what you are shipping and when. You get a scoped proposal covering the testing that release actually needs.", button: "Request a proposal" },
    "regression-testing": { heading: "Get a risk-based regression plan", line: "Share your release cadence and recent changes. You get a plan that selects coverage by risk, instead of running everything every time.", button: "Request a regression plan" },
    "robotics-testing-services": { heading: "Get a robotics safety test plan", line: "Tell us your system and the environment it operates in. You get a plan bridging simulation and physical deployment, against the safety standards that apply.", button: "Request a test plan" },
    "saas-platform-testing-services": { heading: "Get a multi-tenant test plan", line: "Tell us your architecture and compliance targets. You get a plan covering tenant isolation, billing correctness, and zero-downtime release verification.", button: "Request a test plan" },
    "saas-testing-services": { heading: "Get a SaaS test plan", line: "Tell us your architecture and release cadence. You get a plan covering tenant isolation, continuous deployment risk, and behaviour across the estate.", button: "Request a test plan" },
    "sap-testing-services": { heading: "Get an S/4HANA transition test plan", line: "Tell us your modules and your timeline. You get a risk-based plan covering end-to-end business processes, and the automation to support repeat cycles.", button: "Request a test plan" },
    "security-testing": { heading: "Book a penetration test", line: "Tell us the scope — applications, APIs, mobile, network or cloud. You get a prioritised report of what we reached and exactly how to close it.", button: "Book a penetration test" },
    "shift-left-testing": { heading: "Get a shift-left adoption plan", line: "Tell us how your lifecycle runs today. You get a plan for moving checks into design and development, and what each stage should catch.", button: "Request an adoption plan" },
    "shopping-apps-certification": { heading: "Start your six-pillar certification review", line: "Submit your app. You get an assessment against all six pillars, including payment gateway encryption and fraud prevention.", button: "Begin certification" },
    "smart-device-testing-services": { heading: "Get a device certification test plan", line: "Tell us the hardware and your target markets. You get a plan covering reliability, user experience, and the certifications required for market entry.", button: "Request a test plan" },
    "telecommunications-testing-services": { heading: "Get an OSS/BSS test plan", line: "Tell us which systems are in scope. You get a plan covering performance, security and reliability across customer-facing and core telecom platforms.", button: "Request a test plan" },
    "test-data-management-services": { heading: "Get a test data strategy", line: "Tell us your environments and how sensitive the data is. You get a strategy covering provisioning, masking and refresh, under a secure lifecycle.", button: "Request a strategy" },
    "timezone-testing-services": { heading: "Get QA inside your working hours", line: "Tell us your team's timezone and working day. We staff testers to overlap it, so triage happens in real time rather than overnight.", button: "Check availability" },
    "trading-apps-certification": { heading: "Start your six-pillar certification review", line: "Submit your platform. You get an assessment against all six pillars, covering security, regulatory compliance and performance.", button: "Begin certification" },
    "usability-testing-services": { heading: "Get a UX audit of your product", line: "Send a URL or a build. You get the specific points where users hesitate, misread the interface or abandon the journey, with the evidence behind each.", button: "Request a UX audit" },
    "user-acceptance-testing": { heading: "Get a UAT plan for your release", line: "Tell us your business processes and sign-off criteria. You get a plan that puts real users against real tasks before you go live.", button: "Request a UAT plan" },
    "web-application-testing-services": { heading: "Get a web application test plan", line: "Share your platform and release cadence. You get a plan covering functional, regression, performance and security coverage, run continuously.", button: "Request a test plan" },
};

/** The CTA for a slug, or null if the page has no entry. */
export function ctaFor(slug: string): ServiceCta | null {
    return SERVICE_CTAS[slug] ?? null;
}
