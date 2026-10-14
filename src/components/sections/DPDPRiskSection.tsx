// "Where DPDP risk hides inside your product" — Part 5 of the source document.
// This section exists to reframe the problem as engineering rather than
// paperwork, which is the whole positioning of the page: the market is full of
// consultancies selling policies, and almost nobody sells hands-on QA of
// privacy behaviour inside the application.
import React from "react";
import {
  FaToggleOff,
  FaFileAlt,
  FaTrashAlt,
  FaUserLock,
  FaCodeBranch,
  FaNetworkWired,
} from "react-icons/fa";

const risks = [
  {
    icon: FaToggleOff,
    title: "Consent that does not behave as shown",
    body: "A user withdraws consent, but analytics or marketing tags keep firing. The Rules expect withdrawal to be as easy as giving consent (Rule 3).",
  },
  {
    icon: FaFileAlt,
    title: "Personal data in the wrong places",
    body: "Names, phone numbers or ID details appear in logs, error messages, URLs, exports or non-production databases.",
  },
  {
    icon: FaTrashAlt,
    title: "Deletion that leaves copies behind",
    body: "An account is “deleted” in the UI, but the data survives in search indexes, caches, backups or a connected CRM.",
  },
  {
    icon: FaUserLock,
    title: "Weak access control",
    body: "An API returns another user’s record when an ID is changed, or support roles can see more than they need.",
  },
  {
    icon: FaCodeBranch,
    title: "Privacy regressions",
    body: "A release quietly re-enables a tracker, breaks the rights-request form or removes a notice.",
  },
  {
    icon: FaNetworkWired,
    title: "Unknown third-party data flows",
    body: "SDKs and integrations send personal data to vendors nobody reviewed.",
  },
];

const DPDPRiskSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Where DPDP risk hides inside your product
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Most privacy failures are software defects, not policy gaps. Teams
            usually find them late, after a release or an incident. Typical
            examples:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {risks.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <Icon className="text-2xl text-brand-blue mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 mt-8 max-w-3xl">
          We describe these as technical risks. Legal consequences depend on
          your facts and should be assessed by qualified counsel.
        </p>
      </div>
    </section>
  );
};

export default DPDPRiskSection;
