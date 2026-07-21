// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaTools, FaCode, FaRocket, FaShieldAlt, FaPlayCircle, FaLock, FaFileAlt, FaNetworkWired } from "react-icons/fa";

const ApiToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      category: "Frameworks & Tools",
      icon: <FaTools className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "Frameworks", description: "Rest-Assured, Karate, PyTest, Cypress", icon: <FaCode className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Core Tools", description: "Postman, SoapUI, Swagger (OpenAPI)", icon: <FaPlayCircle className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
      ],
    },
    {
      category: "Protocols & Formats",
      icon: <FaNetworkWired className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "Protocols", description: "REST, SOAP, GraphQL, gRPC", icon: <FaCode className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Data Formats", description: "JSON, XML, Protocol Buffers", icon: <FaFileAlt className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
      ],
    },
    {
      category: "Infrastructure & Security",
      icon: <FaShieldAlt className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: (<Link href="/automation-testing-services" className="hover:underline hover:text-blue-700">CI/CD Pipelines</Link>), description: "Jenkins, GitLab CI, Azure DevOps", icon: <FaRocket className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: (<Link href="/security-testing" className="hover:underline hover:text-blue-700">Security Testing</Link>), description: "OWASP ZAP, Burp Suite, 42Crunch", icon: <FaLock className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
      ],
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="text-[theme(color.brand.blue)]">Tech Stack</span>: Instruments of Precision
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            To deliver <Link href="/automation-testing-services" className="text-brand-blue underline">automated API testing</Link> at scale, we utilize a multi-layered stack tailored to your infrastructure. Our instruments are selected for technical precision and global compatibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold text-gray-900 ml-3">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {tool.icon}
                      <h4 className="font-semibold text-gray-900 ml-3">{tool.name}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[theme(color.brand.blue)]/10 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Custom Tool Integration
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
            We can integrate with your existing tools and frameworks, or
            recommend the best combination for your specific API testing
            requirements.
          </p>
          <Link href="/contact-us">
            <button className="bg-[theme(color.brand.blue)] cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-colors duration-300">
              Discuss Your Requirements
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApiToolsFramework;
