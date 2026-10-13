import Link from "next/link";
import React from "react";
import {
  FaRobot,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaCode,
} from "react-icons/fa";

const ToolsAutomationSection = () => {
  const automationCapabilities = [
    {
      icon: FaRobot,
      title: (<><Link href="/blog/post/ai-model-accuracy-testing-step-by-step-guide">AI-Powered Test Generation</Link></>),
      description:
        "We prioritize client privacy by ensuring that AI models are only used with exclusive permission, safeguarding proprietary information and algorithms at all times.",
      features: [
        "Machine learning test case generation",
        "Natural language processing for requirements",
        "Intelligent test data creation",
        "Predictive test coverage analysis",
      ],
      tools: ["Testim", "Applitools", "Mabl", "Functionize"],
      benefits: "75% reduction in test creation time",
    },
    {
      icon: FaCogs,
      title: <><Link href="/blog/post/system-integration-testing-for-robotic-systems-ensuring-seamless-operation">Continuous Integration</Link></>,
      description:
        "Seamless integration with CI/CD pipelines for automated testing at every stage",
      features: [
        "Pipeline integration",
        "Automated test execution",
        "Real-time feedback",
        "Deployment gating",
      ],
      tools: ["Jenkins", "GitHub Actions", "Azure DevOps", "GitLab CI"],
      benefits: "90% faster deployment cycles",
    },
    {
      icon: FaChartLine,
      title: "Intelligent Reporting",
      description:
        "Advanced analytics and reporting with actionable insights and trend analysis",
      features: [
        "Real-time dashboards",
        "Trend analysis",
        "Failure pattern recognition",
        "Performance metrics",
      ],
      tools: ["Allure", "ExtentReports", "ReportPortal", "TestRail"],
      benefits: "60% faster issue resolution",
    },
    {
      icon: FaShieldAlt,
      title: "Security Automation",
      description:
        "Automated security testing integrated into the development lifecycle",
      features: [
        "Vulnerability scanning",
        "Penetration testing automation",
        "Compliance checking",
        "Security regression testing",
      ],
      tools: [(<><Link href="/blog/post/top-10-security-vulnerabilities-based-on-owasp">OWASP ZAP</Link></>), "Burp Suite", "Veracode", "Checkmarx"],
      benefits: "95% security coverage",
    },
    {
      icon: FaClock,
      title: "Scheduled Testing",
      description:
        "Automated test execution based on schedules, triggers, and environmental conditions",
      features: [
        "Time-based execution",
        "Event-driven testing",
        "Environment monitoring",
        "Resource optimization",
      ],
      tools: ["Cron", "Kubernetes Jobs", "AWS Lambda", "Azure Functions"],
      benefits: "24/7 continuous validation",
    },
    {
      icon: FaCode,
      title: "Code Quality Automation",
      description:
        "Automated code analysis, review, and quality assurance processes",
      features: [
        "Static code analysis",
        "Code coverage tracking",
        "Quality gate enforcement",
        "Technical debt monitoring",
      ],
      tools: ["SonarQube", "CodeClimate", "ESLint", "PMD"],
      benefits: "40% reduction in bugs",
    },
  ];

  const automationWorkflow = [
    {
      step: "1",
      title: "Code Commit",
      description: "Developer commits code to repository",
      automation: "Automatic trigger activation",
    },
    {
      step: "2",
      title: "Build & Deploy",
      description: "Automated build and deployment to test environment",
      automation: (<><Link href="/blog/post/devsecops-integrating-security-in-your-ci-cd-pipeline-2">CI/CD pipeline execution</Link></>),
    },
    {
      step: "3",
      title: "Test Execution",
      description: "Comprehensive automated test suite execution",
      automation: "Multi-level testing (Unit, Integration, E2E)",
    },
    {
      step: "4",
      title: "Analysis & Reporting",
      description: "Intelligent analysis and detailed reporting",
      automation: "AI-powered result analysis",
    },
    {
      step: "5",
      title: "Feedback & Action",
      description: "Immediate feedback and automated actions",
      automation: "Slack/Email notifications, JIRA tickets",
    },
  ];

  return (
    <section className="bg-[theme(color.background.gray)] px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
            <FaRobot />
            <span className="text-sm">Test Automation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced{" "}
            <span className="text-[theme(color.brand.blue)]">
              Automation Solutions
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our cutting-edge automation testing tools and frameworks enable
            continuous testing, intelligent test analysis, and seamless{" "}
            <Link href="/blog/post/ci-cd-test-automation-integration-deliver-faster-with-confidence">
              CI/CD integration
            </Link>{" "}
            with your development workflow-leveraging technologies like{" "}
            <Link href="/blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress">
              Selenium, Cypress
            </Link>
            ,{" "}
            <Link href="/blog/post/top-mobile-testing-frameworks-compared-appium-espresso-xcuitest">
              Appium
            </Link>
            , and GitLab CI for faster, more reliable software delivery.
          </p>
        </div>

        {/* Automation Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {automationCapabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg ring-1 ring-gray-300 hover:ring-brand-blue hover:ring-3 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[theme(color.brand.blue)] rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {capability.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {capability.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[theme(color.brand.blue)] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Tools Used:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {capability.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="bg-blue-50 text-[theme(color.brand.blue)] text-xs px-2 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 text-green-700 text-xs px-3 py-2 rounded-lg font-medium">
                  {capability.benefits}
                </div>
              </div>
            );
          })}
        </div>

        {/* Automation Workflow */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Automated Testing Workflow
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined automation workflow ensures continuous quality
              assurance from code commit to production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {automationWorkflow.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="w-12 h-12 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>

                {/* Arrow (except for last item) */}
                {index < automationWorkflow.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full">
                    <div className="w-full h-0.5 bg-gray-300 relative">
                      <div className="absolute right-0 top-0 w-2 h-2 bg-gray-300 transform rotate-45 -translate-y-0.5"></div>
                    </div>
                  </div>
                )}

                <h4 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                <div className="bg-blue-50 text-[theme(color.brand.blue)] text-xs px-3 py-1 rounded-full">
                  {step.automation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Automation Benefits */}
        <div className="bg-gradient-to-r from-brand-blue to-sky-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Automation Impact</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our advanced automation solutions deliver measurable improvements
              in quality, speed, and efficiency across your entire software
              development lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">85%</div>
              <p className="text-blue-100 text-sm">Faster Testing</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">70%</div>
              <p className="text-blue-100 text-sm">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <p className="text-blue-100 text-sm">Test Coverage</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99%</div>
              <p className="text-blue-100 text-sm">Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsAutomationSection;
