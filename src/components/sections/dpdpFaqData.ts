// FAQ content for /dpdp-compliance-testing-services, in its own module so the
// rendered accordion and the FAQPage JSON-LD read from one array.
//
// The established pattern on sibling pages (F-44.1) is to hand-maintain a
// "plain-text mirror" of the FAQ copy inside page.tsx for the schema. That
// works until someone edits one copy, and Google treats a FAQPage whose markup
// does not match the visible answer as a violation — the exact failure mode a
// duplicated array invites. A shared module removes the possibility: the
// accordion is a client component, this is plain data, and both import it.
//
// Source: Part 5 of the DPDP SEO strategy document (14 Oct 2026).
export interface DPDPFaq {
  question: string;
  answer: string;
}

export const dpdpFaqs: DPDPFaq[] = [
  {
    question: "What is DPDP compliance testing?",
    answer:
      "It is technical testing of an application's privacy-related behaviour, such as consent, rights requests, deletion, access control and breach workflows, against requirements your organisation has identified under the DPDP Act and Rules.",
  },
  {
    question: "What does a DPDP readiness assessment include?",
    answer:
      "A scoped review of data flows, a prioritised set of test scenarios, execution with evidence, a findings report and a retest. The exact content depends on your product and agreed scope.",
  },
  {
    question: "Can Testriq certify that we are DPDP compliant?",
    answer:
      "No. There is no official DPDP certificate for ordinary businesses, and we do not issue legal determinations. We provide a technical test report on defined behaviours and controls.",
  },
  {
    question: "What applications can be tested?",
    answer:
      "Web applications, mobile apps, APIs and the supporting back-end systems, plus test environments that may hold personal data.",
  },
  {
    question: "How do you test consent management?",
    answer:
      "We check that consent options are specific, that declining or withdrawing actually stops the related processing (including third-party calls), and that consent records are created and updated correctly.",
  },
  {
    question: "How are data deletion workflows verified?",
    answer:
      "We trigger deletion and erasure requests and then check every connected store and integration. We also test retention behaviour, because some data and logs may need to be kept for a defined period under the Rules or other laws.",
  },
  {
    question: "Does DPDP testing include penetration testing?",
    answer:
      "It can. Security safeguards testing may include API security and application penetration testing within the agreed scope.",
  },
  {
    question: "What deliverables do we receive?",
    answer:
      "Findings with evidence, a prioritised defect list, remediation recommendations, retest results and a statement of scope and limits.",
  },
  {
    question: "How long does it take, and what does it cost?",
    answer:
      "Both depend on scope, complexity, integrations and the deliverables agreed. We confirm them after a scoping conversation.",
  },
  {
    question: "Does technical testing replace legal advice?",
    answer:
      "No. It complements legal and privacy advice. Please consult qualified professionals about your full obligations.",
  },
];
