"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CardSlider() {
  const [activeCard, setActiveCard] = useState(0);
  const [autoHover, setAutoHover] = useState(true);

  const headings = {
    title: "Our Step-by-Step Web QA Methodology",
    info: (<>We follow <Link href='https://www.iso.org/standard/81291.html' target='_blank' className="text-[theme(color.brand.blue)] underline">ISO 29119</Link> to prioritize testing for high-risk modules. For example, we focus heavily on functional testing for critical checkout pages. Our security risk assessment dives deep into your application’s armor.</>),
  };

  const cards = [
    {
      title: "Evaluate Requirements & DOM",
      days: "Phase 1",
      quote: "Architecture & Risk Analysis",
      content:
        (<>We assess your application&apos;s architecture to identify specific Front-end and Back-end testing requirements. Our security risk assessment identifies critical threats like SQL injection and XSS while verifying your HTTPS/SSL settings.</>),
      icon: (
        <svg
          className="w-7 h-10 md:w-10 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      ),
      colordark: "blue-500",
      colorlight: "blue-50",
      progress: "25%",
      keyTitle: "Key Activities",
      keys: [
        { key: "DOM Structure Analysis" },
        { key: "Security Risk Assessment" },
        { key: "Requirement Traceability" },
        { key: "Test Strategy Definition" },
      ],
    },
    {
      title: "Automated Regression Suite Build",
      days: "Phase 2",
      quote: "Stability & Speed",
      content:
        (<>We create stable, run in parallel test suites using Cloud-based web testing. This ensures stability during Agile sprints and prevents regressions in dynamic environments.</>),
      icon: (
        <svg
          className="w-7 h-10 md:w-10 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25z" />
        </svg>
      ),
      colordark: "green-500",
      colorlight: "green-50",
      progress: "50%",
      keyTitle: "Key Activities",
      keys: [
        { key: "Test Script Development" },
        { key: "CI/CD Pipeline Integration" },
        { key: "Parallel Execution" },
        { key: "Self-Healing Scripts" },
      ],
    },
    {
      title: "Performance & Stress Testing",
      days: "Phase 3",
      quote: "Scalability Validation",
      content:
        (<>Identifying bottlenecks by simulating thousands of concurrent users to test load and stress limits. We ensure your platform stays responsive under peak traffic conditions.</>),
      icon: (
        <svg
          className="w-7 h-10 md:w-10 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      ),
      colordark: "purple-500",
      colorlight: "purple-50",
      progress: "75%",
      keyTitle: "Key Activities",
      keys: [
        { key: "Load Simulation" },
        { key: "Stress Testing" },
        { key: "Scalability Analysis" },
        { key: "Bottleneck Identification" },
      ],
    },
    {
      title: "Real-User UAT & Sign-off",
      days: "Phase 4",
      quote: "Human-Centric Validation",
      content:
        "We conduct UAT with real users to ensure your application meets human expectations. This final step guarantees your product is ready for sign-off with confidence.",
      icon: (
        <svg
          className="w-7 h-10 md:w-10 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      ),
      colordark: "red-500",
      colorlight: "red-50",
      progress: "100%",
      keyTitle: "Key Activities",
      keys: [
        { key: "User Acceptance Testing" },
        { key: "UX Feedback Loop" },
        { key: "Final Sign-off" },
        { key: "Go-Live Support" },
      ],
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoHover) {
      interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % cards.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoHover, cards.length]);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
    setAutoHover(false);
  };

  // Split the title into parts to style "Web QA Methodology" in blue
  const renderTitle = () => {
    const titleParts = headings.title.split("Web QA Methodology");
    return (
      <>
        {titleParts[0]}
        <span className="text-[theme(color.brand.blue)]">Web QA Methodology</span>
        {titleParts[1]}
      </>
    );
  };

  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="text-center leading-8">
        <h2 className="text-4xl font-semibold">{renderTitle()}</h2>
        <p className="text-gray-500 my-8">{headings.info}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start md:p-6 min-h-screen">
        <div className="hidden md:block w-full md:w-1/2 space-y-4 relative">
          {" "}
          {/* Increased space-y from 4 to 6 */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-2 bg-gray-200">
                    <div
                        className={`absolute left-0 top-0 w-full transition-all duration-300`}
                        style={{
                            height: `${(100 / cards.length) * (activeCard + 1)}%`,
                            backgroundColor: cards[activeCard].color.replace('500', '600'),
                        }}
                    ></div>
                </div> */}
          <div className="space-y-10 ">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-md cursor-pointer  ring ring-gray-300 transition-all duration-300 ${activeCard === index
                  ? `scale-105 transition-all duration-500 ease-in-out shadow-xl border-2 border-black bg-${cards[activeCard].colorlight}`
                  : `bg-white hover:shadow-lg hover:border-${cards[activeCard].colordark}`
                  }`}
                onMouseEnter={() => setActiveCard(index)}
                onClick={() => handleCardClick(index)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p className="p-1 px-2 text-xs font-semibold bg-gray-200 rounded-xl text-gray-600">
                    {card.days}
                  </p>
                </div>

                <p
                  className={` ${activeCard === index
                    ? `text-${cards[activeCard].colordark}`
                    : `hover:border-${card.colordark}`
                    }`}
                >
                  {card.quote}
                </p>

                <p className="text-gray-700 mt-2">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div
          className={`hidden md:block w-full md:w-1/2 mt-6 md:mt-0 md:ml-15`}
        >
          <div
            className={`p-6 rounded-lg shadow-xl border bg-${cards[activeCard].colorlight}  bg-opacity-50`}
          >
            <div className="flex items-center">
              <div
                className={`p-1 md:p-3 rounded-xl bg-${cards[activeCard].colordark}`}
              >
                {cards[activeCard].icon}
              </div>
              <div className=" px-5">
                <h2 className={`text-xl md:text-3xl font-extrabold`}>
                  {cards[activeCard].title}
                </h2>
                <p
                  className={`mt-2 text-xl font-semibold text-${cards[activeCard].colordark}`}
                >
                  {cards[activeCard].quote}
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-lg mt-5">
              {cards[activeCard].content}
            </p>

            <div className="flex flex-col leading-8 mt-5">
              <h3 className="text-xl font-semibold mx-2">
                {cards[activeCard].keyTitle}
              </h3>
              <div>
                {cards[activeCard].keys.map((item, idx) => (
                  <div key={idx} className="flex flex-row items-center">
                    <span
                      className={`bg-${cards[activeCard].colordark} p-2 rounded-xl mx-2`}
                    ></span>
                    <p className="text-gray-700">{item.key}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 bg-white rounded-3xl p-4">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-600">
                  Overall Progress
                </p>
                <p
                  className={`text-md font-semibold mt-1 text-${cards[activeCard].colordark}`}
                >
                  {cards[activeCard].progress}
                </p>
              </div>
              <div className="w-full mt-2 bg-gray-200 rounded-full h-3.5">
                <div
                  className={`bg-${cards[activeCard].colordark} h-3.5 rounded-full`}
                  style={{ width: cards[activeCard].progress }}
                ></div>
              </div>
            </div>
            {/* <button
              className={`mt-4 w-full bg-${
                cards[activeCard].colordark
              } text-white py-2 rounded-lg hover:bg-${cards[
                activeCard
              ].colordark.replace("500", "600")}`}
            >
              Learn More About {cards[activeCard].title}
            </button> */}
          </div>
        </div>

        {/* mobile view */}
        <div className={`md:hidden mt-6 md:mt-0 md:ml-15 space-y-6`}>
          {cards.map((card) => {
            return (
              <div
                key={card.title}
                className={`w-full p-6 rounded-lg shadow-xl ring-${card.colordark} bg-${card.colorlight}  bg-opacity-50`}
              >
                <div className="flex items-center">
                  <div className={`p-1 md:p-3 rounded-xl bg-${card.colordark}`}>
                    {card.icon}
                  </div>
                  <div className=" px-5">
                    <h2 className={`text-xl md:text-3xl font-extrabold`}>
                      {card.title}
                    </h2>
                    <p
                      className={`mt-2 text-xl font-semibold text-${card.colordark}`}
                    >
                      {card.quote}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-lg mt-5">{card.content}</p>

                <div className="flex flex-col md:leading-8 mt-5">
                  <h3 className="text-xl font-semibold mx-2">
                    {card.keyTitle}
                  </h3>
                  <div>
                    {cards[activeCard].keys.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-row items-center mt-2"
                      >
                        <span
                          className={`bg-${card.colordark} p-2 rounded-xl mx-2`}
                        ></span>
                        <p className="text-gray-700">{item.key}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 bg-white rounded-3xl p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-gray-600">
                      Overall Progress
                    </p>
                    <p
                      className={`text-md font-semibold mt-1 text-${card.colordark}`}
                    >
                      {cards[activeCard].progress}
                    </p>
                  </div>
                  <div className="w-full mt-2 bg-gray-200 rounded-full h-3.5">
                    <div
                      className={`bg-${card.colordark} h-3.5 rounded-full`}
                      style={{ width: card.progress }}
                    ></div>
                  </div>
                </div>
                <button
                  className={`mt-4 w-full bg-${card.colordark
                    } text-white py-2 rounded-lg hover:bg-${cards[
                      activeCard
                    ].colordark.replace("500", "600")}`}
                >
                  Learn More About {card.title}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
