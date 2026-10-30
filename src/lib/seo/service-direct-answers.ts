/**
 * Block 1 "direct answer" for each service page.
 *
 * WHAT THIS IS
 * A 40-60 word answer to the one question the page exists to answer, placed
 * directly under the hero so a person skimming — and an answer engine quoting —
 * reaches it before the marketing copy. The brief ranks this above any schema
 * ticket, because a page that never plainly states what the service IS cannot
 * be cited as the answer to "what is X?".
 *
 * WHERE THE WORDS CAME FROM
 * Every answer is DERIVED from the page it sits on: its H1, its opening
 * paragraphs and its section headings, read out of the built HTML. Nothing here
 * is new marketing. No figures, client counts, certifications, guarantees or
 * capabilities appear below that the page did not already claim — so adding
 * this block cannot make the site assert anything it was not asserting already.
 * If you change an answer, re-read the page first and keep that property.
 *
 * WHY SOME PAGES ARE ABSENT
 * 18 of the 63 service pages already open with a direct answer, usually beside
 * a "What is X?" heading — among them cyber-security, security-testing,
 * qa-outsourcing, managed-testing, microservices, user-acceptance-testing,
 * ad-hoc-testing, dpdp, iso-iec-42001, manufacturing, saas-platform,
 * quality-assurance and the five tool pages (appium, cypress, jmeter,
 * playwright, postman, selenium). They are deliberately not listed here:
 * a second answer under the first would read as a stutter, and the existing
 * copy is the better of the two. Check the page before adding a slug.
 *
 * TONE
 * Declarative and concrete, matching the pages that already do this well. State
 * what the service is, then what the client actually gets. No "in the
 * hyper-scale digital economy of 2026", no rhetorical questions, no adjectives
 * doing the work a noun should do.
 */

export interface ServiceDirectAnswer {
    /** The question the block answers, rendered as its heading. */
    question: string;
    /** 40-60 words. One paragraph. Derived from the page's own content. */
    answer: string;
}

export const SERVICE_DIRECT_ANSWERS: Readonly<Record<string, ServiceDirectAnswer>> = {
    "accessibility-testing-services": {
        question: "What is accessibility testing?",
        answer:
            "Accessibility testing checks whether people with disabilities can actually use your website, mobile app or software. Testriq tests against WCAG across web and mobile platforms, and reports every point where a screen reader, keyboard or assistive device cannot complete a task — so you fix the barrier rather than guess at it.",
    },
    "agile-testing-services": {
        question: "What is agile testing?",
        answer:
            "Agile testing runs quality work inside your sprints rather than after them, so each iteration ships stable. Testriq embeds testers at your development pace, covering test design, execution and regression within the sprint itself, which is what lets a team iterate rapidly without trading away stability.",
    },
    "ai-application-testing": {
        question: "What is AI application testing?",
        answer:
            "AI application testing validates systems whose behaviour is learned rather than written. Because a model is a black box, Testriq replaces simple bug-hunting with risk-based validation — covering machine-learning behaviour, model performance and the global AI standards now being applied — so you know how your system responds to inputs nobody scripted.",
    },
    "api-testing": {
        question: "What is API testing?",
        answer:
            "API testing validates the layer your users never see: the requests, responses, contracts and failure modes behind the interface. Testriq tests REST and GraphQL APIs for correctness, security and scale under the ISO 29119 framework, and embeds the suite into your CI/CD pipeline so regressions surface before release.",
    },
    "application-architecture-inspection-services": {
        question: "What is an application architecture inspection?",
        answer:
            "An architecture inspection reviews how your system is put together, rather than whether a feature works. Testriq examines cloud-native and legacy designs for the structural weaknesses behind rising maintenance costs and performance bottlenecks, then reports what to change so the system can scale and keep evolving.",
    },
    "automation-testing-services": {
        question: "What is automation testing?",
        answer:
            "Automation testing replaces repeated manual checks with scripted suites that run on every build. Testriq builds frameworks aligned to ISO 29119-5:2024 — maintainable, self-healing and sized for micro-service estates — so a suite stays trustworthy as the product changes instead of decaying into flaky tests nobody believes.",
    },
    "azure-testing-services": {
        question: "What is Azure testing?",
        answer:
            "Azure testing validates an application together with the Azure services it runs on, not the code alone. Testriq covers environment consistency, quality gates in Azure DevOps pipelines, identity and network configuration, and behaviour under scale — mapping the work to the standards your customers ask about, such as SOC 2 and ISO 27001.",
    },
    "banking-finance-industry-testing-services": {
        question: "What is BFSI testing?",
        answer:
            "BFSI testing is quality assurance built for banking and financial platforms, where a defect becomes a security or compliance event rather than an inconvenience. Testriq tests transaction flows, security controls and regulatory requirements across banking systems, and produces the audit evidence your regulators and your customers ask to see.",
    },
    "blockchain-app-testing-services": {
        question: "What is blockchain app testing?",
        answer:
            "Blockchain app testing verifies smart contracts, dApps and decentralised protocols before deployment makes them permanent. Testriq tests for resilience, scale and security across the cryptography and consensus mechanisms a Web3 stack depends on — because once a contract is on-chain, a defect cannot simply be patched out.",
    },
    "compatibility-testing-services": {
        question: "What is compatibility testing?",
        answer:
            "Compatibility testing checks that your software behaves correctly on every device, browser and operating system your users actually have. Testriq covers both function and visual rendering across that matrix, so a feature or layout that breaks on one platform is found in test rather than by the customers who leave over it.",
    },
    "continuous-testing-services-cicd-pipeline": {
        question: "What is continuous testing?",
        answer:
            "Continuous testing runs quality checks automatically inside your CI/CD pipeline, so each commit is validated as it lands instead of being batched into a test phase. Testriq integrates the suites into your existing DevOps toolchain and shifts checks earlier, giving every release a verdict rather than a backlog.",
    },
    "corporate-qa-training": {
        question: "What is corporate QA training?",
        answer:
            "Corporate QA training upskills an existing testing team rather than replacing it. Testriq builds the curriculum around your goals — from manual testing fundamentals through advanced quality engineering to AI and hyper-automation — and delivers it to your people, so the capability stays in-house after the programme ends.",
    },
    "data-analysis-services": {
        question: "What do data analysis services cover?",
        answer:
            "Data analysis turns scattered datasets into decisions you can defend. Testriq's analysts work across the range from descriptive trends to prescriptive recommendations under an ISO-aligned framework that keeps results accurate and compliant, bridging the gap between data sitting in silos and the business goals it is supposed to serve.",
    },
    "dating-app-certification": {
        question: "What is dating app certification?",
        answer:
            "Dating app certification is an independent review of your platform against six pillars of trust and safety: data privacy and security, user verification, content moderation, fraud prevention, legal compliance, and transparency. Testriq certifies only when all six are met, and issues documentation and a badge you can display.",
    },
    "desktop-application-testing-services": {
        question: "What is desktop application testing?",
        answer:
            "Desktop application testing covers what web testing cannot reach: local hardware interaction, operating-system dependencies and offline behaviour. Testriq tests across Windows, macOS and Linux — installation, registry and environment validation, GUI automation, and memory and performance profiling — so enterprise software stays stable on the machines it actually runs on.",
    },
    "e-commerce-testing-services": {
        question: "What is e-commerce testing?",
        answer:
            "E-commerce testing protects the path from browse to paid order. Testriq tests checkout and payment flows, the usability problems behind cart abandonment, and load behaviour under peak events such as Black Friday — alongside the privacy requirements, GDPR among them, that selling across regions brings with it.",
    },
    "e-learning-testing-services": {
        question: "What is e-learning testing?",
        answer:
            "E-learning testing validates the platforms teaching runs on: LMS products, online learning systems and educational applications. Testriq covers WCAG accessibility so every learner can take part, performance and scalability for peak enrolment periods, and the security expected of any platform holding student records.",
    },
    "embedded-testing-services": {
        question: "What is embedded testing?",
        answer:
            "Embedded testing validates software running inside physical devices, where a defect reaches the real world rather than a screen. Testriq provides verification and validation across automotive, medical, IoT and aerospace systems, testing for the safety, security and performance mission-critical hardware has to hold once it is deployed.",
    },
    "etl-testing-services": {
        question: "What is ETL testing?",
        answer:
            "ETL testing verifies that data arrives complete and correct after extraction, transformation and loading. Testriq goes past record counts to validate the business logic inside the transformation itself, covering pipeline accuracy, scale and cloud migrations such as Snowflake, and leaves behind the evidence an audit will ask for.",
    },
    "exploratory-testing": {
        question: "What is exploratory testing?",
        answer:
            "Exploratory testing combines learning, test design and execution into a single activity, instead of following a script written in advance. Testriq uses it to reach the defects scripted coverage misses — the real-world sequences nobody anticipated — and runs it alongside scripted suites rather than in place of them.",
    },
    "functional-testing-services": {
        question: "What is functional testing?",
        answer:
            "Functional testing checks that software does what it was specified to do. Testriq validates each user journey against your business requirements under ISO 29119, across web, mobile and enterprise applications — confirming not just that a feature runs, but that it produces the result the requirement actually promised.",
    },
    "gaming-app-testing-services": {
        question: "What is game testing?",
        answer:
            "Game testing covers what generic QA misses: gameplay mechanics, frame-rate and load performance, and the differences between the platforms players use. Testriq tests mobile games through to AAA titles, including security-focused QA, so a launch holds up once real player volume arrives rather than after it.",
    },
    "healthcare-testing-services": {
        question: "What is healthcare software testing?",
        answer:
            "Healthcare software testing treats patient safety and data protection as the acceptance criteria. Testriq tests EHR systems and medical software for clinical correctness, the security of patient records, and the regulatory requirements that apply — HIPAA and FDA expectations among them — producing evidence suitable for audit.",
    },
    "iot-appliances-and-apps-testing-services": {
        question: "What is IoT appliance and app testing?",
        answer:
            "IoT testing validates the whole chain rather than one device: the appliance, its companion app, and every connection between edge and cloud. Testriq tests connectivity, security and performance across consumer smart devices and industrial IoT systems, because a failure anywhere along that path still reaches the user.",
    },
    "iot-device-testing-services": {
        question: "What is IoT device testing?",
        answer:
            "IoT device testing validates connected hardware from the firmware upward. Testriq tests firmware and communication protocols, cloud APIs and edge-computing behaviour, across consumer wearables through to industrial systems — targeting the device failures, network lag and security weaknesses that only appear once a device is live on a network.",
    },
    "launchfast-qa": {
        question: "What is Launch-Fast QA?",
        answer:
            "Launch-Fast QA is testing sized for an early-stage startup getting an MVP out of the door. Testriq works in short, affordable sprints that keep pace with feature pivots, so you ship quickly without accumulating the technical debt that resurfaces later as instability, or as questions during a funding round.",
    },
    "manual-testing-services": {
        question: "What is manual testing?",
        answer:
            "Manual testing puts a human tester against the product, judging behaviour no assertion captures. Testriq runs it under ISO 29119 across micro-service estates and rapid CI/CD releases, as the counterweight to automation rather than a fallback from it — covering the questions a script cannot think to ask.",
    },
    "matrimonial-apps-certification": {
        question: "What is matrimonial app certification?",
        answer:
            "Matrimonial app certification is an independent review of your platform against six pillars covering security, privacy and platform safety. Testriq verifies each one before certifying, concentrating on how sensitive personal data is handled and on the global compliance standards users and app stores expect such a platform to meet.",
    },
    "migration-testing": {
        question: "What is migration testing?",
        answer:
            "Migration testing proves that data, applications and systems still work after moving to a new platform. Testriq verifies completeness and correctness on the far side of the move, targeting the two failure modes that matter: data lost quietly in transit, and functionality that worked before and no longer does.",
    },
    "mobile-application-testing": {
        question: "What is mobile application testing?",
        answer:
            "Mobile application testing covers the fragmentation a single device can never reveal — tens of thousands of Android combinations alongside current iOS releases. Testriq tests function, performance and security across that matrix, including mobile penetration testing, because a crash in the first days costs most of the installs.",
    },
    "performance-testing-services": {
        question: "What is performance testing?",
        answer:
            "Performance testing measures how a system behaves under load, rather than whether it works at rest. Testriq runs load, stress, scalability and latency scenarios under ISO 29119, moving teams from reactive tuning after an incident to performance engineering that establishes the limits before customers find them.",
    },
    "qa-documentation-services": {
        question: "What are QA documentation services?",
        answer:
            "QA documentation turns testing activity into evidence someone else can audit. Testriq produces test plans, cases and reports aligned to ISO/IEC/IEEE 29119-3 — which in regulated sectors such as healthcare, finance and automotive is not paperwork but the record that lets you keep operating.",
    },
    "regression-testing": {
        question: "What is regression testing?",
        answer:
            "Regression testing confirms that new code has not broken what already worked. Testriq replaces the run-everything approach with risk-based selection under ISO 29119, analysing which areas a change actually touches — which keeps the suite trustworthy while cutting the time it adds to every release.",
    },
    "robotics-testing-services": {
        question: "What is robotics testing?",
        answer:
            "Robotics testing validates autonomous systems that act in the physical world, where a fault becomes a safety event. Testriq tests industrial co-bots through to service humanoids, bridging simulation and physical deployment, against the international safety standards such systems must satisfy before they operate anywhere near people.",
    },
    "saas-testing-services": {
        question: "What is SaaS testing?",
        answer:
            "SaaS testing addresses constraints on-premise software never has: multi-tenant architecture, continuous deployment and distributed infrastructure. Testriq tests for the failures those create — tenant isolation, release-time regressions, behaviour across the estate — using methodologies proven in healthcare, fintech, e-commerce and enterprise software.",
    },
    "sap-testing-services": {
        question: "What is SAP testing?",
        answer:
            "SAP testing validates an ERP estate through change, most often the move from ECC to S/4HANA before support ends. Testriq tests end-to-end business processes across the implementation using a risk-based approach and an SAP-specific automation framework, so the transition does not disrupt the operations depending on it.",
    },
    "shift-left-testing": {
        question: "What is shift-left testing?",
        answer:
            "Shift-left testing moves quality work to the start of the lifecycle, into design and development, instead of leaving it until the end. Testriq embeds testing from the earliest stages so defects and vulnerabilities are removed while they are still cheap, rather than becoming the delay before a release.",
    },
    "shopping-apps-certification": {
        question: "What is shopping app certification?",
        answer:
            "Shopping app certification is an independent review against six pillars covering security, performance and user experience. Testriq verifies payment gateways against encryption and fraud-prevention standards, and certifies only once all six are met — so shoppers have something more than your own word on how the app handles their money.",
    },
    "smart-device-testing-services": {
        question: "What is smart device testing?",
        answer:
            "Smart device testing validates connected hardware from the sensor and chip upward, not only the software layered on top. Testriq tests health wearables through to industrial IoT sensors for reliability and user experience, and against the global certifications a device has to hold before it can enter a market.",
    },
    "telecommunications-testing-services": {
        question: "What is telecom software testing?",
        answer:
            "Telecom software testing covers the stack a carrier runs on, from customer-facing apps down to mission-critical OSS and BSS systems. Testriq tests performance, security and reliability across that estate, so faults are found in test rather than in the service your subscribers and your revenue depend on.",
    },
    "test-data-management-services": {
        question: "What is test data management?",
        answer:
            "Test data management supplies testing with data realistic enough to be useful and safe enough to use. Testriq provisions high-fidelity test data under a secure lifecycle, holding the balance between the realism a meaningful test needs and the protection regulated personal data requires.",
    },
    "timezone-testing-services": {
        question: "What is timezone-aligned testing?",
        answer:
            "Timezone-aligned testing puts your testers inside your working hours rather than on the other side of a handover. Testriq staffs QA to overlap your team's day, so questions are answered and defects triaged in real time, keeping testing in step with development instead of a day behind it.",
    },
    "trading-apps-certification": {
        question: "What is trading app certification?",
        answer:
            "Trading app certification is an independent review against six pillars covering security, regulatory compliance and performance. Testriq does not build trading apps — it evaluates them, verifies compliance, and issues certification only once the standards are met, which is precisely what makes the result worth showing to users.",
    },
    "usability-testing-services": {
        question: "What is usability testing?",
        answer:
            "Usability testing observes whether real people can complete the tasks your product exists for, rather than whether a feature technically works. Testriq runs UX audits, mobile app usability sessions and user research, then reports the points where users hesitate, misread the interface or abandon the journey altogether.",
    },
    "web-application-testing-services": {
        question: "What is web application testing?",
        answer:
            "Web application testing combines manual specialists with automated frameworks to keep a platform secure, fast and resilient as it changes. Testriq covers requirements and DOM review, automated regression suites, performance and stress testing, and real-user acceptance — run continuously rather than as one phase before launch.",
    },
};

/** The answer for a slug, or null where the page already opens with one. */
export function directAnswerFor(slug: string): ServiceDirectAnswer | null {
    return SERVICE_DIRECT_ANSWERS[slug] ?? null;
}
