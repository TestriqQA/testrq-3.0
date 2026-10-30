// Server Component. Block 8 of the service page template — "engagement model".
//
// The audit over all 63 service/solution pages found this block on 3 of them
// (ManagedTestingEngagementModels, QAOutsourcingEngagementModels,
// SaasTestingEngagement), each written for its own page. This is the shared
// version for the other 60.
//
// The four models are not invented tiers: each one is a live page on this site,
// and the title and blurb below are condensed from that page's own H1 and meta
// description. No prices appear here, because none of those pages publish one —
// if pricing is ever added, it belongs on those pages first, not in this block.
//
// Secondary effect, deliberate: every service page that renders this gains four
// contextual links into /dedicated-qa-team, /hire-qa-engineer,
// /qa-engineer-on-demand and /staff-augmentation, which the internal-linking
// audit found were reachable almost only from /website-map.
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaClock, FaSitemap, FaUserTie, FaUsers } from "react-icons/fa";

interface EngagementModel {
  title: string;
  href: string;
  /** One line on what the model is, then one on when it fits. */
  blurb: string;
  fit: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const MODELS: EngagementModel[] = [
  {
    title: "Dedicated QA Team",
    href: "/dedicated-qa-team",
    blurb:
      "A fully-managed QA function — QA lead, automation engineers, manual testers, plus performance and security specialists.",
    fit: "when you want the outcome owned end to end",
    Icon: FaUsers,
  },
  {
    title: "Hire a QA Engineer",
    href: "/hire-qa-engineer",
    blurb:
      "ISTQB-certified manual, automation, performance and security engineers, engaged in days rather than months.",
    fit: "when QA is a permanent part of your roadmap",
    Icon: FaUserTie,
  },
  {
    title: "QA Engineer On-Demand",
    href: "/qa-engineer-on-demand",
    blurb:
      "Flex-up and flex-down capacity against a pre-qualified bench. You pay for the hours used, not the headcount carried.",
    fit: "when the workload arrives in bursts",
    Icon: FaClock,
  },
  {
    title: "QA Staff Augmentation",
    href: "/staff-augmentation",
    blurb:
      "Engineers embedded in your existing team and working under your management, with replacement guaranteed.",
    fit: "when you own the process and need capacity",
    Icon: FaSitemap,
  },
];

interface ServiceEngagementModelsProps {
  /**
   * Names the service in the intro line, e.g. "automation testing". Omitted,
   * the intro stays generic — preferable to guessing a label that reads oddly.
   */
  serviceName?: string;
}

const ServiceEngagementModels: React.FC<ServiceEngagementModelsProps> = ({
  serviceName,
}) => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How You Can <span className="text-brand-blue">Engage Us</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            {serviceName
              ? `Four ways to bring ${serviceName} in-house or hand it over. Pick the one that matches how your team is set up.`
              : "Four ways to bring this work in-house or hand it over. Pick the one that matches how your team is set up."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODELS.map(({ title, href, blurb, fit, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-blue hover:shadow-md transition-all flex flex-col"
            >
              <Icon className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                {title}
              </h3>
              <p className="text-gray-700 text-sm mb-3">{blurb}</p>
              <p className="text-gray-600 text-sm italic flex-1">Best {fit}.</p>
              <span className="inline-flex items-center text-brand-blue text-sm font-medium mt-4">
                Read more
                <FaArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-10">
          Every model runs under the same ISO 9001 and ISO/IEC 27001 controls.{" "}
          <Link href="/contact-us" className="text-brand-blue hover:underline">
            Talk to us about which one fits
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default ServiceEngagementModels;
