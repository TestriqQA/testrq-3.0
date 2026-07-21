// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaCheck, FaCogs, FaTools } from "react-icons/fa";

const MicroservicesToolsSection: React.FC = () => {
    const tools = [
        {
            name: "Pact / Spring Cloud",
            type: "Contract Testing",
            utility: "Validates agreements between services without requiring integrated environments.",
            pros: ["Safe Deployments", "Producer Isolation"]
        },
        {
            name: "WireMock / Hoverfly",
            type: "Service Virtualization",
            utility: "Mocks dependent APIs to test isolated services under various response scenarios.",
            pros: ["Zero Latency", "Deterministic Tests"]
        },
        {
            name: "Gremlin / Chaos Mesh",
            type: "Chaos Engineering",
            utility: "Injects failures (CPU, Network, Pod) to validate system resilience and recovery.",
            pros: ["Resilient Architecture", "Disaster Recovery"]
        },
        {
            name: "Jaeger / OpenTelemetry",
            type: "Distributed Tracing",
            utility: "Traces requests across the entire mesh to find bottlenecks and hidden logical errors.",
            pros: ["High Observability", "Root Cause Analysis"]
        },
        {
            name: "Helm / ArgoCD",
            type: "K8s Orchestration",
            utility: "Validates deployment manifests and automated rollbacks within Kubernetes clusters.",
            pros: ["GitOps Compliance", "Stable Releases"]
        }
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-blue-50 text-blue-600 gap-2 px-4 py-2 rounded-full mb-4">
                        <FaTools className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Enterprise Tooling</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Advanced Tools for <span className="text-brand-blue">Microservices QA</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        We utilize a specialized stack of industry-standard tools to automate, monitor, and stress-test your distributed environment.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                    <table className="w-full text-left bg-white">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Tool / Framework</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Testing Type</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest hidden md:table-cell">Primary Utility</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Key Benefits</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {tools.map((tool, index) => (
                                <tr key={index} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="px-6 py-6 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <FaCogs className="w-4 h-4" />
                                        </div>
                                        <span className="font-bold text-gray-900">{tool.name}</span>
                                    </td>
                                    <td className="px-6 py-6">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold uppercase">
                                            {tool.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-6 text-gray-600 text-sm italic hidden md:table-cell">
                                        {tool.utility}
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex flex-col gap-1">
                                            {tool.pros.map((pro, pIdx) => (
                                                <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-emerald-700">
                                                    <FaCheck className="w-2.5 h-2.5" />
                                                    <span>{pro}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="mt-8 text-center text-gray-500 text-sm">
                    Need a custom tooling audit? <Link href="/contact-us" className="text-brand-blue font-bold underline">Talk to our architects today.</Link>
                </p>
            </div>
        </section>
    );
};

export default MicroservicesToolsSection;
