// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EcommercePlatformsSection: React.FC = () => {
  const platforms = [
    { title: "Shopify", img: "/E-commerce_Testing_Img/Shopify.svg" },
    { title: "WooCommerce", img: "/E-commerce_Testing_Img/woo_commerce.png" },
    { title: "Magento", img: "/E-commerce_Testing_Img/Magento.png" },
    { title: "BigCommerce", img: "/E-commerce_Testing_Img/Big_Commerce.png" },
    {
      title: "Salesforce Commerce",
      img: "/E-commerce_Testing_Img/Salesforce_Commerce.svg",
    },
    {
      title: "Adobe Commerce",
      img: "/E-commerce_Testing_Img/Adobe_Commerce.png",
    },
    {
      title: "Squarespace",
      img: "/E-commerce_Testing_Img/Squarespace_Commerce.png",
    },
    { title: "Wix", img: "/E-commerce_Testing_Img/Wix_Commerce.png" },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            E-Commerce{" "}
            <span className="bg-gradient-to-r from-[theme(color.brand.blue)] via-sky-600 to-blue-800 bg-clip-text text-transparent">
              Platform Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We test all major e-commerce platforms with specialized knowledge of
            their framework-specific risks and requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-gray-50 space-y-3 ring-1 ring-[theme(color.brand.blue)] rounded-xl p-6 text-center hover:ring-2 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <div className="w-20 h-20 mx-auto rounded-xl flex items-center justify-center bg-gradient-to-r from-brand-blue via-sky-600 to-blue-800 hover:scale-105 transition-all duration-200 ease-in-out">
                <Image
                  title={platform.title}
                  src={platform.img}
                  alt={platform.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900">{platform.title}</h3>
            </div>
          ))}
        </div>

        {/* Tech Stack Sections */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Testriq&apos;s E-Commerce <span className="text-brand-blue">Technical Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use a specific set of e-commerce tools to ensure your entire tech stack is fast and accurate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              category: "UI Automation",
              tools: ["Selenium", "Playwright", "Test-Sigma (Codeless)"],
              icon: "🚀"
            },
            {
              category: "Performance & Load",
              tools: ["Apache JMeter", "k6", "Blaze-Meter"],
              icon: "📊"
            },
            {
              category: "Security & Pen Testing",
              tools: ["OWASP ZAP", "Burp Suite", "Astra Pentest"],
              icon: "🛡️"
            },
            {
              category: "Cloud Testing Platforms",
              tools: ["Browser-Stack", "Sauce Labs", "Lambda-Test"],
              icon: "☁️"
            },
            {
              category: "Monitoring & Analytics",
              tools: ["Datadog", "New Relic", "Google Page-Speed Insights"],
              icon: "📈"
            },
            {
              category: "A/B Testing & Optimization",
              tools: ["Optimizely", "VWO"],
              icon: "⚡"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.category}</h3>
              <ul className="space-y-2">
                {item.tools.map((tool, tIdx) => (
                  <li key={tIdx} className="text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact-us"
            title="Get Platform Assessment – Testriq QA Lab"
            className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-gradient-to-r from-brand-blue to-sky-600 text-white font-semibold rounded-xl
             hover:scale-95 transition-all duration-300 ease-in-out"
          >
            Get Platform Assessment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EcommercePlatformsSection;
