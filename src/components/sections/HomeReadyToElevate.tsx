import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const renderTitle = () => {
  const titleParts = ctaSection[0].title.split('Software Quality?');
  return (
    <>
      {titleParts[0]}
      <span className="text-[theme(color.brand.blue)]">Software Quality?</span>
      {titleParts[1]}
    </>
  );
};

const ctaSection: {
  title: string;
  subtitle: React.ReactNode;
  primaryButton: {
    label: string;
    href: string;
  }
  secondaryButton: {
    label: string;
    href: string;
  }
}[] = [
    {
      title: "Ready to Elevate Your Software Quality?",
      subtitle:
        (
          <>
            With 15+ years of QA excellence, Testriq has earned the trust of companies across industries by delivering expert-led software testing and free QA consultations that help teams build reliable, <Link title="Cloud-Based Performance Testing: Scaling for Modern Architectures" href="blog/post/cloud-based-performance-testing-scaling-for-modern-architectures-2" className="text-[theme(color.brand.blue)] hover:underline">high-performing products</Link>.
          </>
        ),
      primaryButton: {
        label: "Start Free Consultation",
        href: "/contact-us",
      },
      secondaryButton: {
        label: "View Our Work",
        href: "/case-studies",
      },
    }
  ];

const HomeReadyToElevate = () => {
  return (
    <section className="py-16 px-8 sm:px-8 md:px-12 lg:px-24 text-center bg-[theme(color.background.gray)]">
      <h2 className="text-4xl font-semibold">{renderTitle()}</h2>
      {/* gray-600: on the #F5F5F5 section background gray-500 is 4.43:1, under AA. */}
      <p className="mt-4 text-gray-600 text-base sm:text-lg">
        {ctaSection[0].subtitle}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Primary Button */}
        <Link
          title={ctaSection[0].title}
          href={ctaSection[0].primaryButton.href}
          className="inline-flex items-center gap-2 px-6 py-3 text-white bg-[theme(color.brand.blue)] transition rounded-md text-sm font-medium"
          aria-label={ctaSection[0].primaryButton.label}
        >
          {ctaSection[0].primaryButton.label}
          <FaArrowRight className="text-xs" />
        </Link>

        {/* Secondary Button */}
        <Link
          title={ctaSection[0].title}
          href={ctaSection[0].secondaryButton.href}
          className="inline-flex items-center px-6 py-3 rounded-md ring-sky-300 ring-2 hover:bg-[theme(color.brand.blue)] transition duration-300 cursor-pointer text-[theme(color.brand.blue)] hover:text-white text-sm font-medium"
          aria-label={ctaSection[0].secondaryButton.label}
        >
          {ctaSection[0].secondaryButton.label}
        </Link>
      </div>
    </section>
  );
};

export default HomeReadyToElevate;
