import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const renderTitle = () => {
  const titleParts = impactSection[0].title.split("Real-World Successes");
  return (
    <>
      {titleParts[0]}
      <span className="text-[theme(color.brand.blue)]">
        Real-World Successes
      </span>
      {titleParts[1]}
    </>
  );
};

const impactSection: {
  title: string;
  subtitle: React.ReactNode;
  caseStudies: {
    title: string;
    badge: string;
    description: string;
    action: string;
  }[];
}[] = [
    {
      title: "Our Impact: Real-World Successes",
      subtitle:
        (
          <>
            Testriq’s enterprise <Link href="blog/post/a-complete-guide-to-compatibility-testing-in-manual-software-qa" className="text-[theme(color.brand.blue)] underline">QA solutions</Link> deliver real-world success-accelerating performance, securing <Link href="banking-finance-industry-testing-services" className="text-[theme(color.brand.blue)] underline">fintech apps</Link>, and ensuring compatibility across <Link href="/web-application-testing-services" className="text-[theme(color.brand.blue)] underline">web</Link>, <Link href="/mobile-application-testing" className="text-[theme(color.brand.blue)] underline">mobile</Link>, and <Link href="iot-device-testing-services" className="text-[theme(color.brand.blue)] underline">IoT</Link> through proven software testing <Link href="case-studies" className="text-[theme(color.brand.blue)] underline">case studies</Link>.
          </>
        ),
      caseStudies: [
        {
          title: "Testing Canva’s Design Platform",
          badge: "Graphic design Success Story",
          description:
            "Ensured smooth UI updates and feature rollouts with a complete testing strategy across all devices and platforms.",
          action: "/canva-case-study",
        },
        {
          title: "Milton Smart Stainless Steel Water Bottle Case Study",
          badge: "Homewares Success Story",
          description:
            "Tested key aspects like connectivity, functionality, measurement accuracy, and sample validation across the smart bottle and its app.",
          action: "/milton-case-study",
        },
        {
          title: "Brandify QA for Digital Marketing Case Study",
          badge: "Digital Marketing Success Story",
          description:
            "Applied industry QA standards tailored to Brandify’s needs, writing and tracking test cases in TestRail while ensuring smooth integration of technologies like voice assist.",
          action: "/brandify-case-study",
        },
      ],
    }
  ]

const HomeOurImpact = () => {
  return (
    <section className="py-12 px-8 sm:px-8 md:px-12 lg:px-24 bg-[theme(color.background.gray)]">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-semibold">{renderTitle()}</h2>
        {/* gray-600: this sits on the #F5F5F5 section background (4.43:1 at gray-500).
            The card copy further down stays gray-500 — it is on white and passes. */}
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          {impactSection[0].subtitle}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {impactSection[0].caseStudies.map((study, idx) => (
          <Link
            key={idx}
            href={study.action}
            className="bg-white ring-sky-200 ring-2 rounded-lg shadow-sm p-6 transition duration-300 transform hover:shadow-sky-200 hover:shadow-xl hover:-translate-y-2"
          >
            <h3 className="text-xl mb-2">{study.title}</h3>
            <span className="inline-block text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-full mb-3">
              {study.badge}
            </span>
            <p className="text-gray-500 text-sm py-2">{study.description}</p>
          </Link>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10 text-center">
        <Link href={"/case-studies"}>
          <button className="inline-flex items-center gap-2  px-5 py-2.5 rounded-md text-sm font-medium ring-sky-00 ring-2 hover:bg-[theme(color.brand.blue)] transition duration-300 cursor-pointer text-[theme(color.brand.blue)] hover:text-white">
            View All Case Studies
            <FaArrowRight className="text-xs" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeOurImpact;
