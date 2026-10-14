// "DPDP testing services offered by Testriq" — Part 5 of the source document.
//
// Each card keeps the source's four-part shape (what we do / example scenarios
// / what it can reveal / what you get) because that shape is the page's main
// competitive gap: the four competitors audited (TechVed, Certbar, SISA,
// Securis360) list service names without concrete scenarios or a defined
// deliverable.
//
// CONFIRM BEFORE PUBLISHING — the source marks these [INTERNAL CONFIRMATION
// REQUIRED] and they are written to claim only what is already evidenced
// elsewhere on the site, but they still need a sign-off:
//   - Service 1: service packaging.
//   - Services 2, 3, 7: scenario lists and the breach-workflow offer.
//   - Service 4: the deletion/retention evidence-matrix approach.
//   - Service 6: the homepage mentions synthetic data; confirm scope.
//   - Service 8: CI/CD tooling and experience.
// Service 5 is the one the source calls most strongly supported by existing
// capability, since security and API testing already ship as services.
import React from "react";
import Link from "next/link";
import {
  FaSearchPlus,
  FaCheckSquare,
  FaUserShield,
  FaTrashAlt,
  FaLock,
  FaMask,
  FaBell,
  FaSyncAlt,
} from "react-icons/fa";

const services = [
  {
    icon: FaSearchPlus,
    title: "DPDP technical readiness gap assessment",
    body: "We map where personal data enters, moves and is stored in your product, then test a prioritised set of controls against the obligations you define.",
    scenarios:
      "Data inventory walkthrough, trace of a sign-up record across services, review of what each role can see.",
    reveals: "Undocumented data stores, over-collection, unclear ownership of data.",
    outcome: "A risk-ranked list of technical gaps with evidence.",
  },
  {
    icon: FaCheckSquare,
    title: "Consent and privacy notice testing",
    body: "The Rules expect notices to be clear and independently understandable, itemise the personal data and purposes, and explain how to withdraw consent and exercise rights (Rule 3).",
    scenarios:
      "Purpose-wise consent options, no pre-ticked boxes, withdrawal path versus giving path, behaviour after withdrawal, notice display on web and mobile, consent record created and updated.",
    reveals:
      "Trackers firing before consent, withdrawal that only hides a banner, missing notice elements.",
    outcome: "Pass/fail results per scenario with screenshots, network traces and logs.",
  },
  {
    icon: FaUserShield,
    title: "Data Principal rights workflow testing",
    body: "Users need published ways to exercise their rights, and organisations must publish a grievance mechanism with a response period that does not exceed ninety days (Rule 14).",
    scenarios:
      "Access, correction and erasure requests end to end; nominee flow; identity checks; request status tracking; grievance form and acknowledgement; contact details of the responsible person (Rule 9).",
    reveals: "Requests that go nowhere, partial fulfilment, missing audit trail.",
    outcome: "Workflow test report and defect log.",
  },
  {
    icon: FaTrashAlt,
    title: "Data deletion and retention behaviour verification",
    body: "Deletion is not simply “delete everything”. For defined purposes the Rules require erasure after set periods with prior notice (Rule 8), and also require certain personal data and logs to be kept for a minimum of one year for specified purposes (Rule 8(3)), unless other law requires otherwise. Your tests must reflect your retention rules.",
    scenarios:
      "Account deletion across primary DB, replicas, caches, search indexes, file stores, analytics and third-party tools; scheduled-erasure jobs; the 48-hour advance notice where applicable; retained-data access restrictions.",
    reveals:
      "Orphaned records, deletion that skips connected systems, retention rules implemented inconsistently.",
    outcome: "Evidence matrix of what was deleted, what was retained and why.",
  },
  {
    icon: FaLock,
    title: "Security safeguards verification (API and application)",
    body: "Rule 6 lists minimum safeguards: encryption, obfuscation, masking or tokens; access control; logging and monitoring; backups for continuity; one-year log retention; and safeguard clauses in processor contracts.",
    scenarios:
      "Broken access control on APIs, personal data in responses and logs, encryption in transit, role-based access checks, log completeness for access to personal data.",
    reveals: "Exposure of personal data, missing audit logs, weak authorisation.",
    outcome: "Security findings with severity and remediation advice.",
  },
  {
    icon: FaMask,
    title: "Test data masking and synthetic data validation",
    body: "Many exposures start in QA and staging environments that contain copied production data. We check that test environments use masked or synthetic data and that masking is irreversible where required.",
    scenarios:
      "Scan staging databases, fixtures and logs for real personal data; verify masking cannot be reversed.",
    reveals: "Production data sitting in non-production systems.",
    outcome: "A non-production data exposure report.",
  },
  {
    icon: FaBell,
    title: "Breach detection and notification workflow testing",
    body: "Under Rule 7, affected Data Principals must be informed without delay and the Board must be notified without delay, with detailed information within seventy-two hours. We test whether your technical workflow can support this.",
    scenarios:
      "Alert triggers, escalation paths, templated notices, and whether the required facts can be pulled from logs quickly.",
    reveals: "Missing owners, delays, incomplete information.",
    outcome:
      "A tabletop-style technical test and gap list. We do not decide what counts as a reportable breach.",
  },
  {
    icon: FaSyncAlt,
    title: "Privacy regression testing in CI/CD",
    body: "We automate the checks that matter — consent behaviour, rights-request flows, personal data in logs and APIs — so every release is tested before it ships.",
    scenarios: "Privacy test suite re-run on each build, with failures blocking the pipeline.",
    reveals: "Regressions after updates.",
    outcome: "An automated privacy suite running in your pipeline.",
  },
];

const DPDPServicesSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            DPDP testing services offered by Testriq
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Each engagement is scoped to your product. These are the areas we
            test, what a typical scenario looks like, and what you receive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, body, scenarios, reveals, outcome }, i) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Icon className="text-xl text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 pt-1">
                  {i + 1}. {title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{body}</p>
              <dl className="space-y-2 text-sm mt-auto">
                <div>
                  <dt className="font-semibold text-gray-900 inline">Example scenarios: </dt>
                  <dd className="text-gray-700 inline">{scenarios}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 inline">Can reveal: </dt>
                  <dd className="text-gray-700 inline">{reveals}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 inline">Outcome: </dt>
                  <dd className="text-gray-700 inline">{outcome}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Also available where applicable
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              Age gate and verifiable parental consent testing for products used
              by children (Rule 10).
            </li>
            <li>
              Third-party SDK and API data-flow testing, to see which vendors
              receive personal data and when.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Security safeguards testing builds directly on our{" "}
            <Link href="/cyber-security-testing-services" className="text-brand-blue hover:underline">
              security testing and penetration testing
            </Link>{" "}
            and{" "}
            <Link href="/api-testing" className="text-brand-blue hover:underline">
              API testing services
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default DPDPServicesSection;
