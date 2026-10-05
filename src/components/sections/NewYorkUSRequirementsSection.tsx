// Server Component.
//
// Five US/NY regimes that reach a QA scope. Each entry states what Testriq
// does and, where it matters, what it does not: supply test results and
// evidence, not audits, certifications or legal opinions. That boundary is
// repeated per item on purpose — a buyer skimming one card should not come away
// thinking we certify anything.
//
// Local Law 144 is the sharpest of these: the law requires an INDEPENDENT bias
// audit, so the wording is "support the technical testing behind an audit" and
// nothing stronger.
import Link from "next/link";
import React from "react";

interface Requirement {
  title: string;
  body: React.ReactNode;
}

const REQUIREMENTS: Requirement[] = [
  {
    title: "NYDFS 23 NYCRR 500 and SOC 2",
    body: (
      <>
        Financial-services and SaaS teams often need security test results they
        can show an auditor. We supply the results and supporting evidence. We
        are not your auditor.
      </>
    ),
  },
  {
    title: "SEC and FINRA record-keeping",
    body: (
      <>
        If your product archives communications or records, we test that
        retention, retrieval and deletion locks behave as specified.
      </>
    ),
  },
  {
    title: "HIPAA and the New York SHIELD Act",
    body: (
      <>
        We check access control, audit logging and privacy behaviour against the
        requirements your compliance lead sets.
      </>
    ),
  },
  {
    title: "NYC Local Law 144",
    body: (
      <>
        The law requires an independent bias audit of automated employment
        decision tools. We can support the technical testing behind an audit, and
        the audit itself must be carried out to the law&rsquo;s own terms. See our{" "}
        <Link href="/blog/post/ai-bias-audit" className="text-brand-blue hover:underline">
          AI bias audit guide
        </Link>{" "}
        and{" "}
        <Link href="/ai-application-testing" className="text-brand-blue hover:underline">
          AI application testing
        </Link>
        .
      </>
    ),
  },
  {
    title: "ADA and WCAG 2.1 AA",
    body: (
      <>
        We test web and mobile apps against WCAG 2.1 AA, the level US teams most
        often use as their benchmark. Legal interpretation is for your counsel.
      </>
    ),
  },
];

const NewYorkUSRequirementsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          US requirements that <span className="text-brand-blue">touch QA</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REQUIREMENTS.map((req) => (
            <div
              key={req.title}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {req.title}
              </h3>
              <p className="text-gray-700 text-sm">{req.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewYorkUSRequirementsSection;
