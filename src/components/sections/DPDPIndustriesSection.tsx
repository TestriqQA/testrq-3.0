// "Industries we support" — Part 5 of the source document.
//
// Deliberately framed as how testing differs by product type, not as a claim of
// delivered DPDP projects. The source is explicit: "We do not claim
// industry-specific DPDP projects unless we can show them." Add named examples
// here only once there is a verified case study to point at.
//
// The healthcare, edtech and e-commerce entries each defer a legal question to
// counsel rather than resolving it, because each involves a provision whose
// applicability depends on facts this page cannot know.
import React from "react";
import {
  FaCloud,
  FaUniversity,
  FaHeartbeat,
  FaGraduationCap,
  FaShoppingCart,
  FaMobileAlt,
} from "react-icons/fa";

const industries = [
  {
    icon: FaCloud,
    name: "SaaS and technology",
    body: "Multi-tenant data separation, admin and support access, API access control, data export and deletion across tenants.",
  },
  {
    icon: FaUniversity,
    name: "Fintech",
    body: "KYC data handling, masking in logs and statements, consent for data sharing, audit trails for access to personal data.",
  },
  {
    icon: FaHeartbeat,
    name: "Healthcare technology",
    body: "Sensitive patient-record access control, role-based views, retention and deletion behaviour. The Rules contain specific provisions for health-related processing of children’s data, so your counsel should confirm which apply.",
  },
  {
    icon: FaGraduationCap,
    name: "EdTech",
    body: "Child-user flows, age gates, parental consent steps (Rule 10), and tracking or monitoring features. Certain exemptions exist for educational institutions; qualified counsel should decide whether they apply.",
  },
  {
    icon: FaShoppingCart,
    name: "E-commerce",
    body: "Consent for marketing and profiling, order and account deletion, and retention of transaction logs. Some classes of large platforms have defined erasure periods under the Third Schedule, which your legal team can assess.",
  },
  {
    icon: FaMobileAlt,
    name: "Digital platforms and apps",
    body: "Notification and consent on web and mobile, third-party SDKs, and in-app rights requests.",
  },
];

const DPDPIndustriesSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries we support
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Testing needs differ by product type. These are the areas we
            prioritise in each.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ icon: Icon, name, body }) => (
            <div
              key={name}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="text-xl text-brand-blue" />
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DPDPIndustriesSection;
