// F-21.1 — Converted to Server Component. F-21 heuristic + manual audit
// confirmed zero interactive APIs (no useState/useEffect/useRef/event
// handlers/framer-motion/swiper/react-hook-form/react-select/etc.). Renders
// pure JSX from a static `techStack` data structure. Removing the
// `'use client'` directive moves ~14KB of icons (FaIcons + SiIcons) +
// component code off the client bundle for every route that imports this.

import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  FaLayerGroup,
  FaJava,
  FaPython,
  FaJsSquare,
  FaCogs,
  FaDocker,
  FaAws,
  FaDatabase,
  FaCloud,
  FaRegFileAlt,
  FaTrello,
  FaGithub,
  FaGitlab,
  FaJira,
  FaShieldAlt,
  FaPlayCircle,
  FaTerminal,
  FaSearchPlus,
  FaBox,
  FaChartLine,
  FaBug,
  FaEye,
  FaChartArea,
  FaProjectDiagram,
  FaWrench,
  FaChartBar,
} from "react-icons/fa";
import {
  SiPytorch,
  SiOpenai,
  SiPytest,
} from "react-icons/si";

const ToolsTechStackSection = () => {
  const techStack = {
    "Evaluation & Scoring Frameworks For AI Validation": [
      {
        name: "DeepEval",
        description: "Open-source unit testing framework for LLM applications.",
        usage: "95%",
        icon: <Image src="/Deeepevals_logo.png" alt="DeepEval Logo" width={32} height={32} className="w-8 h-8 object-contain" />,
      },
      {
        name: "Ragas",
        description: "Metrics-driven evaluation tailored for RAG pipelines.",
        usage: "90%",
        icon: <Image src="/RAGAS__logo.png" alt="Ragas Logo" width={32} height={32} className="w-8 h-8 object-contain" />,
      },
      {
        name: "TruLens",
        description: "Feedback-driven evaluation and performance tracking for LLMs.",
        usage: "85%",
        icon: <FaChartLine className="w-8 h-8" />,
      },
      {
        name: "Langsmith",
        description: "Unified platform for debugging, testing, and monitoring LLMs.",
        usage: "95%",
        icon: <Image src="/Langsmith_logo.png" alt="Langsmith Logo" width={32} height={32} className="w-8 h-8 object-contain" />,
      },
      {
        name: "Promptfoo",
        description: "Fast and reliable CLI tool for prompt testing and evaluation.",
        usage: "85%",
        icon: <Image src="/Promptfoo_logo.png" alt="Promptfoo Logo" width={32} height={32} className="w-8 h-8 object-contain" />,
      },
      {
        name: "Evals (OpenAI)",
        description: "Standardized framework for benchmarking AI model performance.",
        usage: "90%",
        icon: <SiOpenai aria-hidden className="w-8 h-8" />,
      },
    ],
    "Red-Teaming & Safety Testing For AI Validation": [
      {
        name: "Garak",
        description: "Automated vulnerability scanner for discovering LLM security risks.",
        usage: "85%",
        icon: <FaBug className="w-8 h-8" />,
      },
      {
        name: "Guardrails AI",
        description: "Robust safety enforcement and validation for AI outputs.",
        usage: "90%",
        icon: <FaShieldAlt className="w-8 h-8" />,
      },
    ],
    "Observability & Monitoring For AI Validation": [
      {
        name: "Langfuse",
        description: "Open-source observability and detailed analytics for LLMs.",
        usage: "90%",
        icon: <FaEye className="w-8 h-8" />,
      },
      {
        name: "WhyLabs",
        description: "Continuous health and performance monitoring for AI systems.",
        usage: "85%",
        icon: <FaChartArea className="w-8 h-8" />,
      },
    ],
    "Automation & CI/CD For AI Validation": [
      {
        name: "Pytest",
        description: "Scalable and robust testing framework for Python-based models.",
        usage: "95%",
        icon: <SiPytest aria-hidden className="w-8 h-8" />,
      },
      {
        name: "MLFlow",
        description: "Comprehensive platform for managing the machine learning lifecycle.",
        usage: "90%",
        icon: <FaProjectDiagram className="w-8 h-8" />,
      },
    ],
    "Programming Languages": [
      {
        name: "Java",
        description: "Enterprise-grade automation with robust frameworks",
        usage: "95%",
        icon: <FaJava className="w-8 h-8" />,
      },
      {
        name: "Python",
        description: "Rapid development and AI-powered testing",
        usage: "90%",
        icon: <FaPython className="w-8 h-8" />,
      },
      {
        name: "JavaScript/TypeScript",
        description: "Modern web testing and Node.js automation",
        usage: "85%",
        icon: <FaJsSquare className="w-8 h-8" />,
      },
      {
        name: "C#",
        description: "Microsoft ecosystem and .NET applications",
        usage: "80%",
        icon: <FaCogs className="w-8 h-8" />,
      },
      {
        name: "Go",
        description: "High-performance testing and microservices",
        usage: "70%",
        icon: <FaTerminal className="w-8 h-8" />,
      },
    ],
    "Test Management": [
      {
        name: "TestRail",
        description: "Comprehensive test case management",
        usage: "95%",
        icon: <FaRegFileAlt className="w-8 h-8" />,
      },
      {
        name: "Jira",
        description: "Issue tracking and project management",
        usage: "100%",
        icon: <FaJira className="w-8 h-8" />,
      },
      {
        name: (<><Link href="/blog/post/integrating-performance-testing-into-ci-cd-for-devops-success">Azure DevOps</Link></>),
        description: "End-to-End DevOps lifecycle",
        usage: "85%",
        icon: <FaGithub className="w-8 h-8" />,
      },
      {
        name: "Zephyr",
        description: "Advanced test management in Jira",
        usage: "80%",
        icon: <FaTrello className="w-8 h-8" />,
      },
      {
        name: "qTest",
        description: "Agile test management platform",
        usage: "75%",
        icon: <FaBox className="w-8 h-8" />,
      },
    ],
    "CI/CD Integration": [
      {
        name: "Jenkins",
        description: "Continuous integration and deployment",
        usage: "95%",
        icon: <FaPlayCircle className="w-8 h-8" />,
      },
      {
        name: "GitHub Actions",
        description: "Native GitHub workflow automation",
        usage: "90%",
        icon: <FaGithub className="w-8 h-8" />,
      },
      {
        name: "GitLab CI",
        description: "Integrated DevOps platform",
        usage: "85%",
        icon: <FaGitlab className="w-8 h-8" />,
      },
      {
        name: "Azure Pipelines",
        description: "Cloud-native CI/CD",
        usage: "80%",
        icon: <FaCloud className="w-8 h-8" />,
      },
      {
        name: "Docker",
        description: "Containerized testing environments",
        usage: "90%",
        icon: <FaDocker className="w-8 h-8" />,
      },
    ],
    "Cloud Platforms": [
      {
        name: "AWS",
        description: "Scalable cloud testing infrastructure",
        usage: "95%",
        icon: <FaAws className="w-8 h-8" />,
      },
      {
        name: "Azure",
        description: "Microsoft cloud services",
        usage: "85%",
        icon: <FaCloud className="w-8 h-8" />,
      },
      {
        name: "Google Cloud",
        description: "Advanced AI and ML capabilities",
        usage: "75%",
        icon: <FaCloud className="w-8 h-8" />,
      },
      {
        name: "BrowserStack",
        description: "Cross-browser testing platform",
        usage: "90%",
        icon: <FaSearchPlus className="w-8 h-8" />,
      },
      {
        name: "Sauce Labs",
        description: "Comprehensive testing cloud",
        usage: "85%",
        icon: <FaCloud className="w-8 h-8" />,
      },
    ],
    "Monitoring & Analytics": [
      {
        name: "Grafana",
        description: "Advanced metrics visualization",
        usage: "85%",
        icon: <FaSearchPlus className="w-8 h-8" />,
      },
      {
        name: "Prometheus",
        description: "Monitoring and alerting toolkit",
        usage: "80%",
        icon: <FaSearchPlus className="w-8 h-8" />,
      },
      {
        name: "ELK Stack",
        description: "Elasticsearch, Logstash, and Kibana",
        usage: "75%",
        icon: <FaDatabase className="w-8 h-8" />,
      },
      {
        name: "New Relic",
        description: "Application performance monitoring",
        usage: "70%",
        icon: <FaDatabase className="w-8 h-8" />,
      },
      {
        name: "Datadog",
        description: "Cloud monitoring and analytics",
        usage: "65%",
        icon: <FaDatabase className="w-8 h-8" />,
      },
    ],
    "Specialized Tools": [
      {
        name: (<><Link href="/blog/post/top-10-security-vulnerabilities-based-on-owasp">OWASP ZAP</Link></>),
        description: "Security testing and vulnerability scanning",
        usage: "90%",
        icon: <FaShieldAlt className="w-8 h-8" />,
      },
      {
        name: (<><Link href="/blog/post/how-is-jmeter-used-for-performance-testing">JMeter</Link></>),
        description: "Performance and load testing",
        usage: "95%",
        icon: <FaPlayCircle className="w-8 h-8" />,
      },
      {
        name: "Postman",
        description: "API development and testing",
        usage: "100%",
        icon: <FaPlayCircle className="w-8 h-8" />,
      },
      {
        name: "Wireshark",
        description: "Network protocol analysis",
        usage: "70%",
        icon: <FaDatabase className="w-8 h-8" />,
      },
      {
        name: "SonarQube",
        description: "Code quality and security analysis",
        usage: "85%",
        icon: <FaDatabase className="w-8 h-8" />,
      },
    ],
  };

  return (
    <section className="bg-[theme(color.background.gray)] px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
            <FaLayerGroup />
            <span className="text-sm">Technology Stack</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete{" "}
            <span className="text-[theme(color.brand.blue)]">
              Testing Ecosystem
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our comprehensive software testing technology stack encompasses
            every aspect of modern QA practices-from programming languages and
            automation frameworks like <Link href="/blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress">Selenium, Cypress</Link>, and Playwright, to
            <Link href="/blog/post/cloud-integration-testing-for-iot-aws-iot-azure-iot-google-iot-core"> cloud testing platforms</Link>, CI/CD tools, and specialized QA tools for
            <Link href="/performance-testing-services"> performance</Link>, <Link href="/security-testing">security</Link>, and <Link href="/api-testing">API testing</Link>.
          </p>
        </div>

        {/* Tech Stack Categories */}
        <div className="space-y-12">
          {Object.entries(techStack).map(([category, tools], categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-[theme(color.brand.blue)] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {categoryIndex + 1}
                  </span>
                </div>
                {category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="border border-gray-200 rounded-lg p-6 hover:border-[theme(color.brand.blue)] transition-colors"
                  >
                    <div className="flex items-start mb-3 gap-3">
                      <div className="flex text-brand-blue items-center mb-4">
                        {tool.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        {tool.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-sky-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Integrated Testing Excellence
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our technology stack is carefully curated and integrated to
              provide seamless testing workflows, maximum efficiency, and
              comprehensive coverage across all testing domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🔄</div>
              <h4 className="font-semibold mb-2">Seamless Integration</h4>
              <p className="text-blue-100 text-sm">
                All tools work together harmoniously
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold mb-2">High Performance</h4>
              <p className="text-blue-100 text-sm">
                Optimized for speed and efficiency
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-semibold mb-2">Enterprise Security</h4>
              <p className="text-blue-100 text-sm">
                Bank-grade security and compliance
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-semibold mb-2">Advanced Analytics</h4>
              <p className="text-blue-100 text-sm">
                Comprehensive reporting and insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsTechStackSection;
