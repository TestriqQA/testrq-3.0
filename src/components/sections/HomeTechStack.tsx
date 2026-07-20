import React from "react";
import Image from "next/image";
import { FaArrowRight, FaApple, FaAndroid, FaMicrosoft } from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiJenkins,
  SiGitlab,
  SiDocker,
  SiSaucelabs
} from "react-icons/si";
import { TbScale, TbUserCheck, TbCircleCheck, TbLockCheck, TbDeviceMobileSearch, TbWorld } from "react-icons/tb";
import Link from "next/link";

const renderTitle = () => {
  const titleParts = techStack.title.split("Technology");
  return (
    <>
      {titleParts[0]}
      <span className="text-[theme(color.brand.blue)]">Technology</span>
      {titleParts[1]}
    </>
  );
};

const techStack = {
  title: "The Testriq Tech Stack: Engineering Excellence Technology",
  subtitle: (
    <>
      We don’t just use tools; we build <Link href="/automation-testing-services" className="text-[theme(color.brand.blue)] hover:underline">Test Automation Frameworks</Link> that scale. From AI-driven validation to DevSecOps integration, we ensure your global infrastructure is robust.
    </>
  ),
  categories: [
    {
      title: "Automation Tools",
      action: "/automation-testing-services",
      items: [
        {
          name: "Selenium WebDriver",
          icon: (
            <Image
              title="Selenium Automation"
              src="/Selenium_Logo.png"
              alt="Selenium"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Cypress",
          icon: (
            <Image
              title="Cypress Testing"
              src="/Cypress_Logo.png"
              alt="Cypress"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Playwright",
          icon: (
            <Image
              title="Playwright Automation"
              src="/Playwright_Logo.svg"
              alt="Playwright"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Appium",
          icon: (
            <Image
              title="Appium Mobile Automation"
              src="/Appium_Logo.svg"
              alt="Appium"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "TestComplete",
          icon: (
            <Image
              title="TestComplete Automation"
              src="/TestComplete_Logo.png"
              alt="TestComplete"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
      ],
    },
    {
      title: "Performance Testing",
      action: "/performance-testing-services",
      items: [
        {
          name: "JMeter",
          icon: (
            <Image
              title="Apache JMeter"
              src="/JMeter_Logo.svg"
              alt="JMeter"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "LoadRunner",
          icon: (
            <Image
              title="LoadRunner"
              src="/Loadrunner_Logo.png"
              alt="LoadRunner"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "K6",
          icon: (
            <Image
              title="K6"
              src="/K6_Logo.png"
              alt="K6"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Gatling",
          icon: (
            <Image
              title="Gatling"
              src="/Gatling_Logo.png"
              alt="Gatling"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "BlazeMeter",
          icon: (
            <Image
              title="BlazeMeter"
              src="/BlazeMeter_Logo.png"
              alt="BlazeMeter"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
      ],
    },
    {
      title: "API Testing",
      action: "/api-testing",
      items: [
        {
          name: "Postman",
          icon: (
            <Image
              title="Postman"
              src="/Postman_Logo.png"
              alt="Postman"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "REST Assured",
          icon: (
            <Image
              title="REST Assured"
              src="/RestAssured_Logo.png"
              alt="REST Assured"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "SoapUI",
          icon: (
            <Image
              title="SoapUI"
              src="/SoapUI_Logo.png"
              alt="SoapUI"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Insomnia",
          icon: (
            <Image
              title="Insomnia"
              src="/Insomnia_Logo.png"
              alt="Insomnia"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Newman",
          icon: (
            <Image
              title="Newman"
              src="/Newman_Logo.png"
              alt="Newman"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
      ],
    },
    {
      title: "Security Testing",
      action: "/security-testing",
      items: [
        {
          name: "OWASP ZAP",
          icon: (
            <Image
              title="OWASP ZAP"
              src="/Owasp_Zap_Logo.png"
              alt="OWASP ZAP"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Burp Suite",
          icon: (
            <Image
              title="Burp Suite"
              src="/BurpSuite_Logo.png"
              alt="Burp Suite"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Nessus",
          icon: (
            <Image
              title="Nessus"
              src="/Nessus_Logo.png"
              alt="Nessus"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Veracode",
          icon: (
            <Image
              title="Veracode"
              src="/VeraCode_Logo.png"
              alt="Veracode"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Checkmarx",
          icon: (
            <Image
              title="Checkmarx"
              src="/Checkmarx_Logo.png"
              alt="Checkmarx"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
      ],
    },
    {
      title: "AI & Machine Learning",
      action: "/ai-application-testing",
      items: [
        { name: "TensorFlow", icon: <SiTensorflow size={20} color="#FF6F00" /> },
        { name: "Py-Torch", icon: <SiPytorch size={20} color="#EE4C2C" /> },
        { name: "Bias Auditing", icon: <TbScale size={20} color="#6366F1" /> },
        { name: "Fairness Testing", icon: <TbUserCheck size={20} color="#10B981" /> },
        { name: "Model Validation", icon: <TbCircleCheck size={20} color="#3B82F6" /> },
      ],
    },
    {
      title: "CI/CD & DevOps",
      action: "/automation-testing-services",
      items: [
        { name: "Jenkins", icon: <SiJenkins size={20} color="#D24939" /> },
        { name: "GitLab CI", icon: <SiGitlab size={20} color="#FC6D26" /> },
        { name: "Azure DevOps", icon: <FaMicrosoft size={20} color="#0078D4" /> },
        { name: "DevSecOps", icon: <TbLockCheck size={20} color="#F59E0B" /> },
        { name: "Docker", icon: <SiDocker size={20} color="#2496ED" /> },
      ],
    },
    {
      title: "Mobile QA",
      action: "/mobile-application-testing",
      items: [
        { name: "Browser-Stack", icon: <TbWorld size={20} color="#0059B2" /> },
        { name: "Sauce Labs", icon: <SiSaucelabs size={20} color="#E31B23" /> },
        { name: "Real-Device Labs", icon: <TbDeviceMobileSearch size={20} color="#8B5CF6" /> },
        { name: "iOS Testing", icon: <FaApple size={20} color="#555555" /> },
        { name: "Android QA", icon: <FaAndroid size={20} color="#3DDC84" /> },
      ],
    },
  ],
};



const HeroTechStack = () => {
  return (
    <section className="py-16 px-8 sm:px-8 md:px-12 lg:px-24 bg-[theme(color.background.gray)] text-center">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{renderTitle()}</h2>
        <p className="mt-4 text-gray-500 text-base sm:text-lg">
          {techStack.subtitle}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {techStack.categories.map((category, idx) => (
          <Link href={category.action}
            key={idx}
            className="bg-white ring-sky-200 ring-1 rounded-lg shadow-sm p-6 text-left transition duration-300 transform hover:shadow-sky-200 hover:shadow-xl cursor-pointer hover:-translate-y-2"
          >
            <h3 className="text-xl text-[theme(color.brand.blue)] mb-4 text-center">
              {category.title}
            </h3>
            <ul className="space-y-4 px-4 py-4">
              {category.items.map((tool, toolIdx) => (
                <li
                  key={toolIdx}
                  className="flex items-center gap-2 text-gray-700 text-sm"
                >
                  {/* Decorative only — the tool name is rendered as visible text
                      alongside it. react-icons' Si* (simple-icons) set role="img"
                      with no <title>, which fails axe svg-img-alt and Lighthouse's
                      agent-accessibility-tree audit. aria-hidden drops the icon from
                      the a11y tree so screen readers announce the name once, not
                      "image" followed by the name. */}
                  <span className="text-2xl flex-shrink-0" aria-hidden="true">
                    {tool.icon}
                  </span>
                  <span className="text-base px-2">{tool.name}</span>
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
      {/* Button */}
      <div className="mt-10 text-center">
        <Link href="/technology-stack">
          <button className="inline-flex items-center gap-2  px-5 py-2.5 rounded-md text-sm font-medium ring-sky-00 ring-2 hover:bg-[theme(color.brand.blue)] transition duration-300 cursor-pointer text-[theme(color.brand.blue)] hover:text-white">
            View All Tools
            <FaArrowRight className="text-xs" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroTechStack;
