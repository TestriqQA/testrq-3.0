// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import {
    FaLaptopCode,
    FaTachometerAlt,
    FaShieldAlt,
    FaNetworkWired,
    FaCloud,
} from "react-icons/fa";
import {
    SiSelenium,
    SiCypress,
    SiPuppeteer,
    SiApachejmeter,
    SiK6,
    SiBurpsuite,
    SiMetasploit,
    SiPostman,
    SiSaucelabs,
} from "react-icons/si";


const WebappTechStack: React.FC = () => {
    const techStack = [
        {
            category: "UI Automation",
            tools: [
                { name: "Selenium", icon: <SiSelenium aria-hidden className="text-[#43B02A]" size={30} /> },
                { name: "Cypress", icon: <SiCypress aria-hidden className="text-[#17202C]" size={30} /> },
                {
                    name: "Playwright",
                    icon: (
                        <Image
                            src="/Playwright_Logo.svg"
                            alt="Playwright Logo"
                            width={30}
                            height={30}
                            className="object-contain"
                        />
                    )
                },
                { name: "Puppeteer", icon: <SiPuppeteer aria-hidden className="text-[#40B5A4]" size={30} /> },
            ],
            icon: <FaLaptopCode className="text-3xl text-brand-blue" size={30} />,
        },
        {
            category: "Performance & Load",
            tools: [
                { name: "Apache JMeter", icon: <SiApachejmeter aria-hidden className="text-[#D22128]" size={30} /> },
                { name: "K6", icon: <SiK6 aria-hidden className="text-[#7D64FF]" size={30} /> },
                {
                    name: "BlazeMeter",
                    icon: (
                        <Image
                            src="/BlazeMeter_Logo_New.png"
                            alt="BlazeMeter Logo"
                            width={30}
                            height={30}
                            className="object-contain rounded-full"
                        />
                    )
                },
            ],
            icon: <FaTachometerAlt className="text-3xl text-orange-500" size={30} />,
        },
        {
            category: <Link href="/security-testing" className="text-[theme(color.brand.blue)] underline">Security & Pen Testing</Link>,
            tools: [
                { name: "Burp Suite", icon: <SiBurpsuite aria-hidden className="text-[#FF6633]" size={30} /> },
                {
                    name: "OWASP ZAP",
                    icon: (
                        <Image
                            src="/Owasp_Zap_Logo.png"
                            alt="OWASP ZAP Logo"
                            width={30}
                            height={30}
                            className="object-contain"
                        />
                    )
                },
                { name: "Metasploit", icon: <SiMetasploit aria-hidden className="text-[#1B6AC6]" size={30} /> },
            ],
            icon: <FaShieldAlt className="text-3xl text-red-500" size={30} />,
        },
        {
            category: <Link href="/api-testing" className="text-[theme(color.brand.blue)] underline">API Testing</Link>,
            tools: [
                { name: "Postman", icon: <SiPostman aria-hidden className="text-[#FF6C37]" size={30} /> },
                {
                    name: "SoapUI",
                    icon: (
                        <Image
                            src="/SoapUI_Logo.png"
                            alt="SoapUI Logo"
                            width={30}
                            height={30}
                            className="object-contain"
                        />
                    )
                },
                {
                    name: "Rest-Assured",
                    icon: (
                        <Image
                            src="/RestAssured_Logo.png"
                            alt="Rest-Assured Logo"
                            width={30}
                            height={30}
                            className="object-contain"
                        />
                    )
                },
            ],
            icon: <FaNetworkWired className="text-3xl text-purple-500" size={30} />,
        },
        {
            category: "Cloud-Based Web Testing",
            tools: [
                { name: "Sauce Labs", icon: <SiSaucelabs aria-hidden className="text-[#3DDC91]" size={30} /> },
                {
                    name: "BrowserStack",
                    icon: (
                        <Image
                            src="/BrowserStack_Logo.png"
                            alt="BrowserStack Logo"
                            width={30}
                            height={30}
                            className="object-contain"
                        />
                    ),
                },
                {
                    name: "LambdaTest",
                    icon: (
                        <Image
                            src="/LambdaTest_Logo_New.png"
                            alt="LambdaTest Logo"
                            width={30}
                            height={30}
                            className="object-contain rounded-full"
                        />
                    )
                },
            ],
            icon: <FaCloud className="text-3xl text-cyan-500" size={30} />,
        },
    ];

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Testriq’s Web QA <span className="text-brand-blue">Tech Stack</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        To provide the best web application <Link href="/performance-testing-services" className="text-[theme(color.brand.blue)] underline">performance testing services</Link>, we utilize a cutting-edge, multi-tool stack:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {techStack.map((stack, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gray-50 rounded-xl">
                                    {stack.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    {stack.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {stack.tools.map((tool, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors"
                                        title={tool.name}
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center child-svg:w-full child-svg:h-full">
                                            {tool.icon}
                                        </div>
                                        <span>{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebappTechStack;
