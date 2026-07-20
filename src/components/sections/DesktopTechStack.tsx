// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import {
    FaLaptopCode,
    FaEye,
    FaTachometerAlt,
    FaBoxOpen,
    FaServer,
    FaCloud,
} from "react-icons/fa";
import {
    SiVmware,
    SiVirtualbox,
    SiIntel,
} from "react-icons/si";

const DesktopTechStack: React.FC = () => {
    const techStack = [
        {
            category: "Automation Frameworks",
            tools: [
                {
                    name: "TestComplete",
                    icon: (
                        <Image
                            src="/TestComplete_Logo.png"
                            alt="TestComplete Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    )
                },
                {
                    name: "Appium (Windows Driver)",
                    icon: (
                        <Image
                            src="/Appium_Logo.svg"
                            alt="Appium Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    )
                },
                {
                    name: "Winium",
                    icon: (
                        <Image
                            src="/Winium_Logo.png"
                            alt="Winium Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    )
                },
                {
                    name: "SikuliX",
                    icon: (
                        <Image
                            src="/SikuliX_Logo.png"
                            alt="SikuliX Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    )
                },
            ],
            icon: <FaLaptopCode className="text-3xl text-brand-blue" />,
        },
        {
            category: <Link href="/ai-application-testing" className="text-[theme(color.brand.blue)] underline">Visual AI Testing</Link>,
            tools: [
                {
                    name: "Applitools",
                    icon: (
                        <Image
                            src="/Applitools_Logo.png"
                            alt="Applitools Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    )
                },
            ],
            description: "(Visual AI for UI consistency across OS versions)",
            icon: <FaEye className="text-3xl text-purple-500" />,
        },
        {
            category: <Link href="/performance-testing-services" className="text-[theme(color.brand.blue)] underline">Performance Tools</Link>,
            tools: [
                {
                    name: "JMeter",
                    icon: (
                        <Image
                            src="/JMeter_Logo.svg"
                            alt="JMeter Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    )
                },
                { name: "Intel VTune Profiler", icon: <SiIntel className="text-[#0071C5]" size={24} /> },
            ],
            description: "(for memory leak detection)",
            icon: <FaTachometerAlt className="text-3xl text-orange-500" />,
        },
        {
            category: "Package & Install Testing",
            tools: [
                {
                    name: "InstallShield",
                    icon: (
                        <Image
                            src="/InstallShield_Logo.png"
                            alt="InstallShield Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    )
                },
                {
                    name: "WiX Toolset",
                    icon: (
                        <Image
                            src="/WiX_Logo.png"
                            alt="WiX Toolset Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    )
                },
            ],
            description: "Compliance testing for .EXE and .MSI packages",
            icon: <FaBoxOpen className="text-3xl text-red-500" />,
        },
        {
            category: "Virtual Environments",
            tools: [
                { name: "VMware", icon: <SiVmware className="text-[#607078]" size={24} /> },
                { name: "VirtualBox", icon: <SiVirtualbox className="text-[#183A61]" size={24} /> },
                { name: "Cloud-based farms", icon: <FaCloud className="text-gray-500" size={24} /> },
            ],
            description: "For Windows, macOS, and Linux testing",
            icon: <FaServer className="text-3xl text-green-500" />,
        },
    ];

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Testriq&rsquo;s Desktop QA <span className="text-brand-blue">Tech Stack</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We utilize the most advanced desktop <Link href="/technology-stack" className="text-[theme(color.brand.blue)] underline">automation and diagnostic tools</Link> to ensure your software is &quot;Market-Ready&quot; (2026 Trends):
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
                            <div className="flex flex-wrap gap-3 mb-2">
                                {stack.tools.map((tool, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors"
                                        title={tool.name}
                                    >
                                        <div className="w-6 h-6 flex items-center justify-center child-svg:w-full child-svg:h-full">
                                            {tool.icon}
                                        </div>
                                        <span>{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                            {stack.description && (
                                <p className="text-sm text-gray-500 italic mt-2">
                                    {stack.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesktopTechStack;
