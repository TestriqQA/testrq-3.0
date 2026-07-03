"use client";

import React, { useState } from "react";
import { FaUserFriends, FaUsersCog, FaGamepad, FaBrain, FaStethoscope, FaWind, FaCheck, FaExclamationTriangle } from "react-icons/fa";

const AdHocTestingMethodologies: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const methods = [
        {
            icon: <FaUserFriends />,
            title: "Buddy Testing",
            subtitle: "Collaborative Informal Testing",
            description: "A developer and a tester collaborate in real-time to probe functionality. The developer explains logic while the tester asks 'What if?' questions.",
            how: "Developer and tester work together synchronously. Developer explains code paths; tester identifies edge cases and assumptions immediately.",
            bestFor: "New features where developer context is valuable; rapid feedback during dev.",
            pros: ["Rapid bug ID", "Knowledge transfer", "Developer learns testing perspective"],
            cons: ["Requires dev time", "Limited by dev availability"]
        },
        {
            icon: <FaUserFriends size={18} />, // Using same icon but slightly diff for pair
            title: "Pair Testing",
            subtitle: "Structured Buddy Testing",
            description: "Two testers work together on one system. One executes (drives) while the other observes and suggests (navigates).",
            how: "One tester drives the application; the other navigates, suggests scenarios, and takes notes. Roles switch periodically.",
            bestFor: "Complex apps requiring multiple perspectives; high-risk functionality.",
            pros: ["Better bug detection", "Multi-perspective", "Knowledge sharing"],
            cons: ["Higher cost (2 testers)", "Requires good collaboration dynamics"]
        },
        {
            icon: <FaGamepad />,
            title: "Monkey Testing",
            subtitle: "Random Input & Stress Testing",
            description: "Randomly inputting data and interacting with the app without any plan. Goal is to find crashes and hangs.",
            how: "Testers randomly click, type, and navigate. Often automated to generate thousands of random inputs per minute.",
            bestFor: "Stability validation under random user behavior; finding edge-case crashes.",
            pros: ["Finds unexpected crashes", "Simulates chaotic users", "Automatable"],
            cons: ["Ineffective for logic bugs", "Difficult to reproduce findings"]
        },
        {
            icon: <FaBrain />,
            title: "Error Guessing",
            subtitle: "Intuitive Bug Prediction",
            description: "Experienced testers use domain knowledge to predict where bugs commonly occur based on patterns and past failures.",
            how: "Tester identifies high-risk areas based on experience and focuses the effort there, probing for common bug patterns.",
            bestFor: "Rapid bug ID in high-risk areas; apps where formal testing is too slow.",
            pros: ["Highly focused effort", "Extremely fast", "Cost-effective"],
            cons: ["Dependent on tester expertise", "Difficult to measure coverage"]
        },
        {
            icon: <FaStethoscope />,
            title: "Sanity Testing",
            subtitle: "Quick Functional Validation",
            description: "Quick validation that basic functionality works after a bug fix or minor change.",
            how: "Focused execution on core paths to ensure the application still works as expected after targeted modifications.",
            bestFor: "Validation after hotfixes; regression check after minor updates.",
            pros: ["Ultra-rapid execution", "Identifies obvious bugs"],
            cons: ["Very limited coverage", "Misses subtle regressions"]
        },
        {
            icon: <FaWind />,
            title: "Smoke Testing",
            subtitle: "Preliminary Stability Check",
            description: "Confirms if the application is stable enough for deeper testing. If it fails, testing stops immediately.",
            how: "Executing the most critical paths (login, basic CRUD) to ensure the build isn't 'broken' at the start.",
            bestFor: "First check after deployment; preliminary check before formal QA.",
            pros: ["Identifies critical build issues", "Saves time on broken builds"],
            cons: ["Does not find non-critical bugs", "Very shallow depth"]
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-primary">
                        Types of <span className="text-brand-blue">Ad-Hoc Testing</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We apply specific methodologies based on your immediate needs—from random stability probes to collaborative developer-tester sessions.
                    </p>
                </div>

                {/* Tab Selector for Mobile/Desktop */}
                <div className="flex overflow-x-auto pb-4 mb-8 md:mb-12 md:flex-wrap md:justify-center gap-3 snap-x snap-mandatory 
                                [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {methods.map((method, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`whitespace-nowrap cursor-pointer px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 snap-center shrink-0
                                ${activeTab === index
                                    ? "bg-brand-blue text-white shadow-lg shadow-blue-500/30"
                                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"}`}
                        >
                            <span className={activeTab === index ? "text-white" : "text-brand-blue"}>{method.icon}</span>
                            {method.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -z-10 -mr-32 -mt-32"></div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-1.5 rounded-lg bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-4">
                                {methods[activeTab].subtitle}
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">{methods[activeTab].title}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {methods[activeTab].description}
                            </p>

                            <div className="bg-gray-50 p-6 rounded-2xl mb-8">
                                <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                                    How It Works
                                </h4>
                                <p className="text-sm text-gray-600 italic leading-relaxed">
                                    {methods[activeTab].how}
                                </p>
                            </div>

                            <div className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-lg whitespace-nowrap">BEST FOR:</span>
                                <span>{methods[activeTab].bestFor}</span>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-green-50/50 border border-green-100 p-6 rounded-2xl">
                                <h4 className="text-green-700 font-bold mb-4 flex items-center gap-2">
                                    <FaCheck />
                                    <span>Advantages</span>
                                </h4>
                                <ul className="space-y-3">
                                    {methods[activeTab].pros.map((pro, i) => (
                                        <li key={i} className="text-sm text-green-800 flex items-start gap-2">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-green-500 flex-shrink-0"></span>
                                            {pro}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-red-50/50 border border-red-100 p-6 rounded-2xl">
                                <h4 className="text-red-700 font-bold mb-4 flex items-center gap-2">
                                    <FaExclamationTriangle />
                                    <span>Disadvantages</span>
                                </h4>
                                <ul className="space-y-3">
                                    {methods[activeTab].cons.map((con, i) => (
                                        <li key={i} className="text-sm text-red-800 flex items-start gap-2">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-red-500 flex-shrink-0"></span>
                                            {con}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdHocTestingMethodologies;
