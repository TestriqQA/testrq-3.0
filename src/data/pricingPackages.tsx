import React from "react";
import { FaGlobe, FaMobileAlt, FaServer, FaShieldAlt } from "react-icons/fa";

export interface PricingPackage {
    id: string;
    name: string;
    badge?: string;
    icon: React.ReactElement;
    color: string;
    price: string;
    delivery: string;
    /**
     * Shown in the hover/focus tooltip next to the delivery chip on each pricing
     * card. Explains what the turnaround actually covers, so the bare
     * "5 - 10 Business Days" is not read as a hard commitment.
     */
    deliveryNote: string;
    /**
     * Shown in the hover/focus tooltip next to the price subtitle, defining what
     * "mid size project" means. Only set on packages whose price is quoted per
     * mid-size project (web, mobile) — the API and VAPT packs are scoped by
     * endpoint count and per audit respectively, so the term does not apply.
     */
    sizeNote?: string;
    suitableFor: string[];
    whatWeTest: string[];
    whatsIncluded: string[];
    whatYouGet: string;
    addOn: string;
    description?: string;
}

export const pricingPackages: PricingPackage[] = [
    {
        id: "web",
        name: "Web App Testing bundle",
        badge: "Popular Setup",
        icon: <FaGlobe className="w-8 h-8" />,
        color: "blue",
        price: "Starting from 400 USD per mid size project",
        delivery: "5 - 10 Business Days",
        deliveryNote: "Typical turnaround for a mid-size web app once we have access to a stable build and test credentials. Larger scopes are quoted separately.",
        sizeNote: "Mid-size project: A single-role application with 10–20 dynamic screens, standard user flows, and typical CRUD functionality. Suitable for most business apps with moderate complexity.",
        suitableFor: [
            "SaaS tools",
            "Portals",
            "Online Stores",
            "Custom websites"
        ],
        whatWeTest: [
            "Functional Testing",
            "Integration Tests",
            "Cross-Browser & Device Compatibility",
            "Usability (UX)",
            "Basic Performance",
            "Basic Security"
        ],
        whatsIncluded: [
            "Testing on most popular browsers: Windows, MAC, Android Phone & Tablets, and Apple Phone & Tablets",
            "2 bug verification cycles free of cost."
        ],
        whatYouGet: "A clear \"Bug List\" (Video/Screenshot + Steps), Vulnerability Report, and a performance scorecard.",
        addOn: "Add Test Automation: 400 USD with CI / CD integration"
    },
    {
        id: "mobile",
        name: "Mobile App Testing bundle",
        badge: "Most Popular",
        icon: <FaMobileAlt className="w-8 h-8" />,
        color: "indigo",
        price: "Starting from 500 USD per mid size App, iOS + Android",
        delivery: "5 - 10 Business Days",
        deliveryNote: "Covers both iOS and Android for a mid-size app, on real devices across current and older OS versions. Starts once builds are available on TestFlight or Play Console.",
        sizeNote: "Mid-size project: A single-role application with 10–20 dynamic screens, standard user flows, and typical CRUD functionality. Suitable for most business apps with moderate complexity.",
        suitableFor: [
            "Startups ready for the App Store / Play Store.",
            "Looking to improve App / Play store ratings."
        ],
        whatWeTest: [
            "Functional Testing",
            "UI responsiveness on small screens",
            "Touch gestures",
            "App behavior on 4G/5G vs. Wi-Fi.",
            "API Integration Tests",
            "Basic Performance",
            "Basic Security"
        ],
        whatsIncluded: [
            "Testing on real iOS & Android devices.",
            "Latest to lowest OS versions",
            "Real world test scenarios & Network conditions",
            "Battery drain & heat check",
            "Push notification delivery",
            "2 bug verification cycles free of cost"
        ],
        whatYouGet: "A clear \"Bug List\" (Video/Screenshot + Steps). A crash-report log and a \"UX Friction\" report showing where users get stuck.",
        addOn: "Add Test Automation: 300 USD with CI / CD integration"
    },
    {
        id: "api",
        name: "API Testing Pack",
        icon: <FaServer className="w-8 h-8" />,
        color: "emerald",
        price: "Starting from 350 USD per project (up to 20 endpoints)",
        delivery: "5 - 10 Business Days",
        deliveryNote: "Based on up to 20 endpoints with documentation or a Postman collection supplied. Additional endpoints extend the timeline proportionally.",
        suitableFor: [
            "Microservices-based architectures.",
            "Third-party integrations (Payment/SMS).",
            "Headless CMS & Backend-heavy apps."
        ],
        whatWeTest: [
            "Functional Validation: Endpoint logic & CRUD operations.",
            "Schema Validation: JSON/XML structure & data types.",
            "Negative Testing: Error codes (4xx, 5xx) & edge cases.",
            "Auth & Headers: Token validation (JWT/OAuth) & API Keys.",
            "Performance: Latency, throughput, and rate limiting.",
            "Data Integrity: Database consistency after API calls."
        ],
        whatsIncluded: [
            "Testing on REST, GraphQL, or SOAP architectures.",
            "Environment support: Dev, Staging, and Production.",
            "Postman / Insomnia collections for easy re-running.",
            "Detailed Request/Response logs for every failure.",
            "2 bug verification cycles free of cost."
        ],
        whatYouGet: "Full API Audit Report: Success/Failure rates per endpoint. Performance Benchmarks: Response time & Latency stats. Postman Collection: Ready-to-use scripts for your developers.",
        addOn: "Add Test Automation: 300 USD (CI/CD integration)"
    },
    {
        id: "vapt",
        name: "VAPT (Security) Pack",
        icon: <FaShieldAlt className="w-8 h-8" />,
        color: "rose",
        description: "\"Just the URL, Not the Strings.\" No access to source code or servers required. We attack your app exactly like a real-world predator would.",
        price: "Starting from 800 USD per audit (Web or Mobile)",
        delivery: "7 - 12 Business Days",
        deliveryNote: "Longer than the functional bundles because exploitation and verification are manual. Needs only a URL - no source code or server access required.",
        suitableFor: [
            "Fintech, Healthcare, and Enterprise apps.",
            "Compliance-ready products (ISO/SOC2/GDPR).",
            "Apps handling sensitive PII or financial data."
        ],
        whatWeTest: [
            "Vulnerability Assessment: Automated scanning for known flaws.",
            "Manual Pentesting: Human-led exploitation of logic flaws.",
            "OWASP Top 10: Injection, XSS, Broken Auth, etc.",
            "Sensitive Data Exposure: Data leaks in transit/at rest.",
            "Server Configuration: SSL/TLS checks & open port audits.",
            "Privilege Escalation: Vertical and horizontal access checks."
        ],
        whatsIncluded: [
            "Hybrid approach: Automated Tools + Manual Expert Review.",
            "Business Logic Audit: Testing beyond automated scans.",
            "Detailed Proof of Concept (PoC) for every vulnerability.",
            "Executive Summary for management + Tech details for devs.",
            "1 Complimentary Re-scan after you fix the vulnerabilities."
        ],
        whatYouGet: "VAPT Audit Report: Categorized by Critical, High, Medium, Low. Remediation Roadmap: Step-by-step guide to fixing each flaw. Security Certificate: Seal of testing for your stakeholders.",
        addOn: "Continuous Security Monitoring available on request."
    }
];
