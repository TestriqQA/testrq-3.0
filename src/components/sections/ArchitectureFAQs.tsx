"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import FaqJsonLd from "@/components/seo/FaqJsonLd";

const ArchitectureFAQs: React.FC = () => {
    const faqs = [
        {
            question: "What is an application architecture inspection?",
            answer: "An application architecture inspection is a formal, technical review of a software system's design and structure. It aims to identify potential risks, scalability bottlenecks, security flaws, and technical debt, ensuring the system is aligned with business goals and industry best practices.",
        },
        {
            question: "Why is a software architecture audit important for enterprises?",
            answer: "For enterprises, an architecture audit is critical to prevent 'architectural rot,' reduce long-term maintenance costs, and ensure that the system can scale to meet growing business demands. It provides an objective assessment of the system's health and its readiness for future innovations like AI integration.",
        },
        {
            question: "How to identify technical debt in legacy applications?",
            answer: "Technical debt is identified by analyzing code complexity, frequency of bugs in specific modules, difficulty in implementing new features, and deviations from modern architectural patterns. Tools like static code analyzers and architectural dependency mapping are often used during this process.",
        },
        {
            question: "What are the benefits of a cloud-native architecture review?",
            answer: "A cloud-native review ensures that your application fully leverages the benefits of the cloud, such as dynamic scaling, self-healing, and cost-optimization. It validates that your architecture is resilient to infrastructure failures and can be deployed rapidly through automated pipelines.",
        },
        // Added 2026-11-04. The four above define the service; these four
        // answer what a team weighing one up actually asks — how it differs
        // from a code review, what it needs from them, when to repeat it,
        // and what the two headline qualities mean in practice.
        {
            question: "How is an architecture inspection different from a code review?",
            answer: "A code review looks at correctness inside a file or a pull request. An architecture inspection looks at the system between them — service boundaries, data ownership, coupling, deployment topology and failure domains. A codebase can pass every code review it has ever had and still have an architecture that cannot scale, because those problems live in the relationships between components rather than inside any one of them.",
        },
        {
            question: "What do you need from us to begin an inspection?",
            answer: "Read access to the repositories, whatever architecture diagrams and decision records already exist, the deployment topology, and a statement of the non-functional requirements the system is meant to meet. Where documentation is thin or out of date, the inspection reconstructs the real architecture from the code and the infrastructure rather than from the diagram — and the distance between the two is often a finding in itself.",
        },
        {
            question: "How often should an architecture review be repeated?",
            answer: "Tie it to events rather than to the calendar: before a major scaling step, ahead of a platform or cloud migration, when a monolith is being split apart, or after a stretch of rapid feature delivery that outpaced design. A system that changes slowly can go a long time between reviews, while one under active expansion drifts from its intended design faster than most teams expect.",
        },
        {
            question: "What is the difference between scalability and resilience in a review?",
            answer: "Scalability asks whether the system can absorb more — more users, more data, more throughput — without being redesigned. Resilience asks what happens when part of it fails: whether the failure stays contained, whether the system recovers without manual intervention, and whether degraded operation is graceful. An architecture can be strong on one and weak on the other, so the two are assessed separately.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            {/* Built from the same `faqs` array rendered below. */}
            <FaqJsonLd faqs={faqs} />
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Architecture <span className="text-brand-blue">Expertise</span> FAQ
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Essential insights into our Application Architecture Inspection process.
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all duration-300 ${activeIndex === index
                                    ? "border-brand-blue/30 bg-brand-blue/10 shadow-sm"
                                    : "border-gray-200 bg-white hover:border-gray-300"
                                }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                            >
                                <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                                <span className="flex-shrink-0 text-brand-blue">
                                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </button>
                            <div className="p-6 pt-0 text-gray-600 leading-relaxed" hidden={activeIndex !== index}>
                                    {faq.answer}
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArchitectureFAQs;
