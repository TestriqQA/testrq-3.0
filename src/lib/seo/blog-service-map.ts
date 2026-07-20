/**
 * Blog post -> service page mapping for the Related Services module.
 *
 * WHY THIS EXISTS
 * ---------------
 * GSC (19 Apr - 19 Jul 2026) showed the blog absorbing 82% of site-wide
 * impressions (1,512,639 across 353 posts) while the commercial service pages
 * sat at positions 29-40. The blog outranks the money pages on their own
 * topics — e.g. /blog/post/ci-cd-test-automation-integration ranks at 13.3
 * while /automation-testing-services ranks at 32.7 for the same cluster.
 *
 * The mechanical cause: the blog post template linked to blog categories,
 * blog tags and other posts — and to zero service pages. Authority flowed
 * into the blog (the homepage links out to posts) and never flowed back.
 *
 * This map routes it back. Every post renders 2-3 contextual links to the
 * service pages that match its topic.
 *
 * MAPPING SOURCE
 * --------------
 * Keys are real Sanity category slugs, taken from the live sitemap's 69
 * /blog/category/* URLs — not invented. Most map 1:1 onto an existing service
 * page (e.g. `manual-testing` -> /manual-testing-services), which is why this
 * table is mostly mechanical rather than editorial.
 *
 * Every `slug` in SERVICES was verified to return HTTP 200 on 2026-07-20.
 * If you add a service page, add it here too — an unmapped topic silently
 * falls back to DEFAULT_SERVICES, which is safe but generic.
 */

export interface ServiceLink {
    /** Route path without the leading slash. */
    slug: string;
    /** Card heading. Kept close to the target page's own H1 so the anchor
     *  text reinforces the term the page is trying to rank for. */
    title: string;
    /** One line, factual. Renders under the title on the card. */
    description: string;
}

/**
 * Canonical service definitions. `slug` doubles as the lookup key.
 */
export const SERVICES: Record<string, ServiceLink> = {
    'automation-testing-services': {
        slug: 'automation-testing-services',
        title: 'Test Automation Services',
        description: 'Framework design, CI/CD integration and suite maintenance across web, mobile and API layers.',
    },
    'manual-testing-services': {
        slug: 'manual-testing-services',
        title: 'Manual Testing Services',
        description: 'ISTQB-certified engineers for exploratory, functional and user-acceptance coverage.',
    },
    'performance-testing-services': {
        slug: 'performance-testing-services',
        title: 'Performance Testing Services',
        description: 'Load, stress, soak and scalability testing with capacity findings before production.',
    },
    'api-testing': {
        slug: 'api-testing',
        title: 'API Testing Services',
        description: 'Contract, integration and security validation for REST, GraphQL and microservices.',
    },
    'security-testing': {
        slug: 'security-testing',
        title: 'Security Testing Services',
        description: 'VAPT, OWASP Top 10 coverage and compliance-aligned application security testing.',
    },
    'mobile-application-testing': {
        slug: 'mobile-application-testing',
        title: 'Mobile App Testing Services',
        description: 'Real-device coverage across iOS and Android, including automation and performance.',
    },
    'web-application-testing-services': {
        slug: 'web-application-testing-services',
        title: 'Web Application Testing Services',
        description: 'Functional, cross-browser, responsive and security validation for web platforms.',
    },
    'ai-application-testing': {
        slug: 'ai-application-testing',
        title: 'AI Application Testing',
        description: 'Model validation, bias and fairness auditing, and testing for non-deterministic outputs.',
    },
    'iot-device-testing-services': {
        slug: 'iot-device-testing-services',
        title: 'IoT Device Testing Services',
        description: 'Firmware, connectivity, telemetry and edge-to-cloud validation for connected devices.',
    },
    'etl-testing-services': {
        slug: 'etl-testing-services',
        title: 'ETL Testing Services',
        description: 'Data completeness, transformation accuracy and reconciliation across pipelines.',
    },
    'regression-testing': {
        slug: 'regression-testing',
        title: 'Regression Testing Services',
        description: 'Risk-based regression suites that keep release cycles fast without losing coverage.',
    },
    'exploratory-testing': {
        slug: 'exploratory-testing',
        title: 'Exploratory Testing Services',
        description: 'Session-based testing that finds the defects scripted suites are built to miss.',
    },
    'robotics-testing-services': {
        slug: 'robotics-testing-services',
        title: 'Robotics Testing Services',
        description: 'Hardware-in-the-loop validation, motion accuracy and safety-condition testing.',
    },
    'desktop-application-testing-services': {
        slug: 'desktop-application-testing-services',
        title: 'Desktop Application Testing',
        description: 'Installer, compatibility and performance testing across Windows and macOS builds.',
    },
    'smart-device-testing-services': {
        slug: 'smart-device-testing-services',
        title: 'Smart Device Testing Services',
        description: 'Interoperability, provisioning and OTA-update validation for smart hardware.',
    },
    'usability-testing-services': {
        slug: 'usability-testing-services',
        title: 'Usability Testing Services',
        description: 'Moderated and unmoderated studies that surface friction before it costs conversions.',
    },
    'accessibility-testing-services': {
        slug: 'accessibility-testing-services',
        title: 'Accessibility Testing Services',
        description: 'WCAG 2.1 AA audits with screen-reader, keyboard and contrast validation.',
    },
    'functional-testing-services': {
        slug: 'functional-testing-services',
        title: 'Functional Testing Services',
        description: 'End-to-end verification that every user-facing workflow behaves as specified.',
    },
    'user-acceptance-testing': {
        slug: 'user-acceptance-testing',
        title: 'User Acceptance Testing',
        description: 'Business-scenario validation and UAT facilitation ahead of go-live sign-off.',
    },
    'compatibility-testing-services': {
        slug: 'compatibility-testing-services',
        title: 'Compatibility Testing Services',
        description: 'Browser, OS, device and screen-size matrix coverage for consistent behaviour.',
    },
    'qa-documentation-services': {
        slug: 'qa-documentation-services',
        title: 'QA Documentation Services',
        description: 'Test plans, strategy documents, traceability matrices and audit-ready evidence.',
    },
    'qa-outsourcing-services': {
        slug: 'qa-outsourcing-services',
        title: 'QA Outsourcing Services',
        description: 'Dedicated and managed QA teams that integrate directly with your delivery pipeline.',
    },
    'saas-testing-services': {
        slug: 'saas-testing-services',
        title: 'SaaS Testing Services',
        description: 'Multi-tenant isolation, subscription billing logic and role-based access validation.',
    },
    'e-commerce-testing-services': {
        slug: 'e-commerce-testing-services',
        title: 'E-Commerce Testing Services',
        description: 'Catalog, cart, checkout, payment gateway and order-tracking validation.',
    },
    'healthcare-testing-services': {
        slug: 'healthcare-testing-services',
        title: 'Healthcare Testing Services',
        description: 'HIPAA-aligned testing for EHR, EMR and regulated clinical workflows.',
    },
    'gaming-app-testing-services': {
        slug: 'gaming-app-testing-services',
        title: 'Gaming App Testing Services',
        description: 'Gameplay, load, device-matrix and live-ops testing for game releases.',
    },
    'e-learning-testing-services': {
        slug: 'e-learning-testing-services',
        title: 'E-Learning Testing Services',
        description: 'LMS scalability, SCORM compliance and cross-device learner-experience testing.',
    },
    'iot-appliances-and-apps-testing-services': {
        slug: 'iot-appliances-and-apps-testing-services',
        title: 'IoT Appliances & Apps Testing',
        description: 'Companion-app, appliance firmware and cloud-sync validation for connected products.',
    },
};

/**
 * Sanity category slug -> service slugs, in priority order.
 *
 * Keys come from the live /blog/category/* set. Several categories are
 * synonyms of one another (`automation-testing`, `test-automation`,
 * `qa-automation`, `software-testing-automation`) and deliberately resolve to
 * the same primary service — that concentration is the whole point.
 */
const CATEGORY_MAP: Record<string, string[]> = {
    // --- Automation cluster (the largest cannibalisation source) ---
    'automation-testing': ['automation-testing-services', 'regression-testing', 'api-testing'],
    'automation-testing-services': ['automation-testing-services', 'regression-testing', 'api-testing'],
    'test-automation': ['automation-testing-services', 'regression-testing', 'web-application-testing-services'],
    'qa-automation': ['automation-testing-services', 'qa-outsourcing-services', 'regression-testing'],
    'qa-automation-roi': ['automation-testing-services', 'qa-outsourcing-services', 'regression-testing'],
    'software-testing-automation': ['automation-testing-services', 'regression-testing', 'functional-testing-services'],
    'devops-and-ci-cd': ['automation-testing-services', 'performance-testing-services', 'regression-testing'],

    // --- Manual / functional ---
    'manual-testing': ['manual-testing-services', 'exploratory-testing', 'user-acceptance-testing'],
    'exploratory-testing': ['exploratory-testing', 'manual-testing-services', 'usability-testing-services'],
    'static-testing-techniques': ['manual-testing-services', 'qa-documentation-services', 'functional-testing-services'],
    'regression-testing': ['regression-testing', 'automation-testing-services', 'functional-testing-services'],
    'testing-methodologies': ['manual-testing-services', 'automation-testing-services', 'qa-documentation-services'],
    'agile-methodology': ['qa-outsourcing-services', 'automation-testing-services', 'regression-testing'],

    // --- Performance ---
    'performance-testing-services': ['performance-testing-services', 'automation-testing-services', 'web-application-testing-services'],
    'performance-engineering': ['performance-testing-services', 'automation-testing-services', 'api-testing'],
    'scalability-and-optimization': ['performance-testing-services', 'saas-testing-services', 'web-application-testing-services'],
    'monitoring-vs-observability': ['performance-testing-services', 'automation-testing-services', 'api-testing'],
    'digital-resilience': ['performance-testing-services', 'security-testing', 'web-application-testing-services'],

    // --- API ---
    'api-testing': ['api-testing', 'automation-testing-services', 'security-testing'],

    // --- Security ---
    'security-testing': ['security-testing', 'api-testing', 'web-application-testing-services'],
    'cybersecurity-and-security-testing': ['security-testing', 'api-testing', 'mobile-application-testing'],
    'data-security-and-privacy': ['security-testing', 'etl-testing-services', 'healthcare-testing-services'],
    'iot-security-testing': ['security-testing', 'iot-device-testing-services', 'smart-device-testing-services'],

    // --- Mobile ---
    'mobile-application-testing': ['mobile-application-testing', 'automation-testing-services', 'usability-testing-services'],
    'mobile-testing': ['mobile-application-testing', 'automation-testing-services', 'compatibility-testing-services'],
    'mobile-automation': ['mobile-application-testing', 'automation-testing-services', 'regression-testing'],
    'mobile-quality-assurance': ['mobile-application-testing', 'manual-testing-services', 'usability-testing-services'],
    'mobile-quality-engineering': ['mobile-application-testing', 'performance-testing-services', 'automation-testing-services'],
    'ios-app-testing': ['mobile-application-testing', 'compatibility-testing-services', 'automation-testing-services'],
    'appium-framework': ['mobile-application-testing', 'automation-testing-services', 'regression-testing'],

    // --- Web ---
    'web-app-testing': ['web-application-testing-services', 'compatibility-testing-services', 'performance-testing-services'],
    'web-quality-engineering': ['web-application-testing-services', 'performance-testing-services', 'accessibility-testing-services'],
    'web-development': ['web-application-testing-services', 'functional-testing-services', 'compatibility-testing-services'],
    'sxo-performance': ['web-application-testing-services', 'performance-testing-services', 'usability-testing-services'],
    'cross-linking': ['web-application-testing-services', 'functional-testing-services', 'qa-outsourcing-services'],

    // --- AI / ML ---
    'ai-and-ml-testing': ['ai-application-testing', 'automation-testing-services', 'security-testing'],
    'ai-application-testing': ['ai-application-testing', 'automation-testing-services', 'api-testing'],
    'ai-driven-quality-engineering': ['ai-application-testing', 'automation-testing-services', 'qa-outsourcing-services'],
    'ai-model-testing': ['ai-application-testing', 'etl-testing-services', 'performance-testing-services'],
    'ai-quality-assurance': ['ai-application-testing', 'qa-outsourcing-services', 'automation-testing-services'],
    'ai-testing-and-compliance': ['ai-application-testing', 'security-testing', 'qa-documentation-services'],

    // --- Data / ETL ---
    'etl-testing-methodologies': ['etl-testing-services', 'automation-testing-services', 'qa-documentation-services'],
    'big-data-quality-assurance': ['etl-testing-services', 'performance-testing-services', 'ai-application-testing'],

    // --- IoT / devices / robotics ---
    'iot-and-smart-devices': ['iot-device-testing-services', 'smart-device-testing-services', 'security-testing'],
    'iot-device-testing': ['iot-device-testing-services', 'smart-device-testing-services', 'performance-testing-services'],
    'iot-appliances-app-testing-service': ['iot-appliances-and-apps-testing-services', 'iot-device-testing-services', 'mobile-application-testing'],
    'smart-device-testing': ['smart-device-testing-services', 'iot-device-testing-services', 'compatibility-testing-services'],
    'robotics-testing': ['robotics-testing-services', 'automation-testing-services', 'performance-testing-services'],
    'desktop-application-testing': ['desktop-application-testing-services', 'compatibility-testing-services', 'automation-testing-services'],

    // --- Industry verticals ---
    'ecommerce-testing-service': ['e-commerce-testing-services', 'performance-testing-services', 'security-testing'],
    'healthcare-testing-service': ['healthcare-testing-services', 'security-testing', 'qa-documentation-services'],
    'gaming-app-testing-service': ['gaming-app-testing-services', 'performance-testing-services', 'mobile-application-testing'],
    'e-learning-testing-service': ['e-learning-testing-services', 'performance-testing-services', 'accessibility-testing-services'],
    'financial-quality-engineering': ['security-testing', 'performance-testing-services', 'api-testing'],
    'saas-testing': ['saas-testing-services', 'performance-testing-services', 'api-testing'],

    // --- QA practice / strategy / outsourcing ---
    'qa-outsourcing': ['qa-outsourcing-services', 'automation-testing-services', 'manual-testing-services'],
    'qa-management': ['qa-outsourcing-services', 'qa-documentation-services', 'automation-testing-services'],
    'qa-management-and-strategy': ['qa-outsourcing-services', 'qa-documentation-services', 'automation-testing-services'],
    'qa-testing': ['qa-outsourcing-services', 'manual-testing-services', 'automation-testing-services'],
    'quality-assurance': ['qa-outsourcing-services', 'manual-testing-services', 'automation-testing-services'],
    'quality-assurance-strategy': ['qa-outsourcing-services', 'qa-documentation-services', 'regression-testing'],
    'software-quality-assurance': ['qa-outsourcing-services', 'manual-testing-services', 'automation-testing-services'],
    'software-testing': ['qa-outsourcing-services', 'manual-testing-services', 'automation-testing-services'],
    'software-testing-and-qa': ['qa-outsourcing-services', 'manual-testing-services', 'automation-testing-services'],
    'software-testing-tools': ['automation-testing-services', 'performance-testing-services', 'api-testing'],
    'best-practices': ['qa-outsourcing-services', 'automation-testing-services', 'manual-testing-services'],
    'career-advice-in-software-testing': ['qa-outsourcing-services', 'manual-testing-services', 'automation-testing-services'],
    'shift-left-monitoring': ['automation-testing-services', 'performance-testing-services', 'security-testing'],
    'usability-and-ux-testing': ['usability-testing-services', 'accessibility-testing-services', 'manual-testing-services'],
};

/**
 * Keyword fallback, applied to tags when the category is unknown or absent.
 * Order matters — the first hit wins, so put narrower terms above broader
 * ones ('accessibility' before 'web').
 */
const TAG_KEYWORD_MAP: ReadonlyArray<readonly [RegExp, string]> = [
    [/accessib|wcag|screen.?reader/i, 'accessibility-testing-services'],
    [/etl|data.?warehouse|data.?pipeline|migration/i, 'etl-testing-services'],
    [/robot|rpa/i, 'robotics-testing-services'],
    [/iot|firmware|telemetry|embedded|sensor/i, 'iot-device-testing-services'],
    [/security|owasp|vapt|penetration|vulnerab/i, 'security-testing'],
    [/performance|load|stress|soak|latency|scalab/i, 'performance-testing-services'],
    [/\bapi\b|rest|graphql|postman|microservice/i, 'api-testing'],
    [/mobile|android|ios|appium/i, 'mobile-application-testing'],
    [/\bai\b|machine.?learning|\bml\b|llm|model.?valid|bias|fairness/i, 'ai-application-testing'],
    [/automation|selenium|cypress|playwright|ci.?cd/i, 'automation-testing-services'],
    [/regression/i, 'regression-testing'],
    [/exploratory|ad.?hoc/i, 'exploratory-testing'],
    [/usability|\bux\b|user.?experience/i, 'usability-testing-services'],
    [/manual/i, 'manual-testing-services'],
    [/outsourc|dedicated.?team|managed.?qa|staff.?aug/i, 'qa-outsourcing-services'],
    [/ecommerce|e-commerce|checkout|payment/i, 'e-commerce-testing-services'],
    [/healthcare|hipaa|ehr|emr|clinical/i, 'healthcare-testing-services'],
    [/gaming|game/i, 'gaming-app-testing-services'],
    [/saas|multi.?tenant/i, 'saas-testing-services'],
    [/desktop|windows|macos/i, 'desktop-application-testing-services'],
    [/documentation|test.?plan|traceab/i, 'qa-documentation-services'],
    [/\buat\b|acceptance/i, 'user-acceptance-testing'],
    [/compatib|cross.?browser/i, 'compatibility-testing-services'],
    [/web|browser/i, 'web-application-testing-services'],
];

/**
 * Shown when neither the category nor any tag resolves. These three carry the
 * broadest commercial intent, so a generic post still routes somewhere useful.
 */
const DEFAULT_SERVICES = [
    'qa-outsourcing-services',
    'automation-testing-services',
    'manual-testing-services',
] as const;

/**
 * Resolve the service links for a post.
 *
 * Precedence: category map -> tag keyword map -> defaults. Results are
 * de-duplicated and padded to `limit` so the row never renders half-empty.
 *
 * @param categorySlugs Slugs from `post.categories`.
 * @param tags          Raw strings from `post.tags`.
 * @param limit         Maximum cards to return. Default 3.
 */
export function getRelatedServices(
    categorySlugs: readonly string[] = [],
    tags: readonly string[] = [],
    limit = 3,
): ServiceLink[] {
    const picked: string[] = [];

    const add = (slug: string) => {
        if (slug && SERVICES[slug] && !picked.includes(slug) && picked.length < limit) {
            picked.push(slug);
        }
    };

    // 1. Category match — the strongest signal.
    for (const cat of categorySlugs) {
        for (const slug of CATEGORY_MAP[cat?.toLowerCase()?.trim()] ?? []) {
            add(slug);
        }
    }

    // 2. Tag keywords, if we still have room.
    if (picked.length < limit) {
        const haystack = tags.join(' ');
        for (const [pattern, slug] of TAG_KEYWORD_MAP) {
            if (picked.length >= limit) break;
            if (pattern.test(haystack)) add(slug);
        }
    }

    // 3. Pad with defaults so the row is always complete.
    for (const slug of DEFAULT_SERVICES) {
        if (picked.length >= limit) break;
        add(slug);
    }

    return picked.map((slug) => SERVICES[slug]);
}
