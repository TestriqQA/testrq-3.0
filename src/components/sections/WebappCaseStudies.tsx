import { FaShoppingCart, FaTrophy } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import Link from "next/link";

const caseStudies = [
  {
    industry: "E-COMMERCE",
    title: "Major Retail Platform Performance Optimization",
    icon: <FaShoppingCart className="text-white text-xl" />,
    challenge:
      "A leading e-commerce platform faced slow page load times and high cart abandonment rates during peak shopping seasons, affecting performance, user satisfaction, and conversion rates.",
    solution:
      "Implemented comprehensive performance testing, including load testing, stress testing, and optimization strategies across the entire web application to enhance speed, responsiveness, and scalability.",
    keyResults: [
      "70% improvement in page load times, enhancing performance and user experience",
      "200% increase in concurrent user capacity, boosting scalability",
      "45% reduction in cart abandonment, improving conversion rates",
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    duration: "8 weeks",
    highlightTitle: "E-commerce Success",
    highlights: [
      "70% improvement in page load times",
      "45% reduction in cart abandonment",
    ],
    color: {
      circleBg: "bg-blue-500",
      tagBg: "bg-blue-100 text-blue-600",
      tagText: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      highlightText: "text-blue-600",
    },
  },
  {
    industry: "EDUCATION",
    title: "Online Learning Platform Security Enhancement",
    icon: <MdCastForEducation className="text-white text-xl" />,
    challenge:
      "An educational institution needed to ensure their online learning platform complied with strict security standards and provided robust student data protection to meet regulatory and privacy requirements.",
    solution:
      "Conducted thorough security testing and penetration testing, and implemented comprehensive security measures across the online learning platform to ensure data protection, vulnerability mitigation, and full compliance.",
    keyResults: [
      "100% compliance with educational data standards, ensuring full regulatory adherence",
      "50% improvement in user authentication speed, enhancing login performance",
      "Zero security vulnerabilities identified post-launch, confirming strong security validation",
      "Enhanced student data protection protocols, boosting data privacy and user trust",
    ],
    technologies: ["Angular", "Java", "PostgreSQL", "Azure"],
    duration: "12 weeks",
    highlightTitle: "Education Success",
    highlights: [
      "100% compliance with educational data standards",
      "Zero security vulnerabilities identified post-launch",
    ],
    color: {
      circleBg: "bg-green-500",
      tagBg: "bg-green-100 text-green-600",
      tagText: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
      highlightText: "text-green-600",
    },
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center mb-16">
        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
          <FaTrophy />
          <span className="text-sm">Success Stories</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Real Results from <br className="hidden sm:block" />
          <span className="text-[theme(color.brand.blue)]">
            Web App Testing Projects
          </span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Discover how our comprehensive web application testing services have
          helped businesses across diverse industries achieve their quality
          assurance, performance optimization, and user experience goals.
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="grid gap-16">
        {caseStudies.map((study, idx) => {
          const isReversed = idx % 2 !== 0;
          const layoutClass = isReversed
            ? "lg:flex-row-reverse"
            : "lg:flex-row";

          return (
            <div
              key={idx}
              className={`flex flex-col ${layoutClass} gap-6 lg:gap-12 items-start`}
            >
              {/* Main Card */}
              <div className="flex-1 p-6 shadow-md rounded-xl bg-white border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${study.color.circleBg}`}>
                    {study.icon}
                  </div>
                  <div>
                    <h4
                      className={`text-xs font-semibold uppercase ${study.color.tagText}`}
                    >
                      {study.industry}
                    </h4>
                    <h3 className="text-lg font-bold text-gray-900">
                      {study.title}
                    </h3>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Challenge</h4>
                  <p className="text-sm text-gray-700">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Solution</h4>
                  <p className="text-sm text-gray-700">{study.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Results</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-800">
                    {study.keyResults.map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 bg-current rounded-full" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs text-gray-500 flex flex-wrap justify-between">
                  <div>
                    Technologies:{" "}
                    <span className="font-medium">
                      {study.technologies.join(", ")}
                    </span>
                  </div>
                  <div>
                    Duration:{" "}
                    <span className="font-medium">{study.duration}</span>
                  </div>
                </div>
              </div>

              {/* Highlight Card */}
              <div className="w-full max-w-sm p-6 bg-blue-50 rounded-xl shadow-sm">
                <div className="flex flex-col items-center text-center gap-4">
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-full ${study.color.circleBg}`}
                  >
                    {study.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {study.highlightTitle}
                  </h4>
                  {study.highlights.map((point, i) => (
                    <div
                      key={i}
                      className={`w-full py-2 px-4 text-sm font-medium rounded-md bg-white ${study.color.highlightText}`}
                    >
                      {point}
                    </div>
                  ))}
                  <Link href="/case-studies" className="inline-block">
                    <button
                      className={`mt-2 px-5 py-2 rounded-md text-white font-semibold text-sm flex items-center justify-center gap-2 ${study.color.buttonColor} cursor-pointer`}
                    >
                      View Full Case Study
                      <span className="ml-1">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
