import React from 'react';
import { ShieldCheck, FileCheck, Lock, Activity } from 'lucide-react';

const HomeComplianceSection = () => {
    const standards = [
        {
            icon: FileCheck,
            title: 'ISO/IEC/IEEE 29119',
            description: 'The backbone of our software testing services, ensuring structured, risk-based documentation and execution worldwide.'
        },
        {
            icon: ShieldCheck,
            title: 'SOC2 Type II & GDPR',
            description: 'We follow global privacy laws to keep your data safe. Our validation process meets the highest security standards.'
        },
        {
            icon: Activity,
            title: 'HIPAA & Healthcare',
            description: 'Specialized testing for medical-grade software requiring rigorous Quality Control Testing and data protection.'
        },
        {
            icon: Lock,
            title: 'OWASP Top 10',
            description: 'Our Security Audits are mapped to the latest OWASP standards to mitigate global cyber-security risks effectively.'
        }
    ];

    return (
        <section className="w-full py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 underline decoration-[theme(color.brand.blue)] decoration-4 underline-offset-8">
                            Our Global <span className="text-[theme(color.brand.blue)]">Standards & Compliance</span> Framework
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We follow international standards to guarantee your data stays secure and your processes remain accurate worldwide. From data privacy to industry-specific regulations, Testriq is your compliant QA partner.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {standards.map((s, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-[theme(color.background.gray)] border border-transparent hover:border-sky-200 transition-all">
                                    <div className="flex-shrink-0">
                                        <s.icon className="w-6 h-6 text-[theme(color.brand.blue)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                                        {/* gray-600 not gray-500: on the #F5F5F5 card this text
                                            measured 4.43:1, just under the 4.5:1 AA threshold. */}
                                        <p className="text-xs text-gray-600 leading-tight">{s.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10 p-8 rounded-3xl bg-gradient-to-br from-white to-sky-50 shadow-2xl border border-sky-100">
                            {/* Decorative graphics or can be an image */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-sky-50">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">100%</div>
                                    <div className="text-sm font-medium text-gray-800">GDPR & Privacy Compliance Verified</div>
                                </div>
                                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-sky-50 ml-8">
                                    {/* blue-700: blue-600 (#155dfc) on bg-blue-100 (#dbeafe) is
                                        4.29:1, under AA. The green and purple badges beside it
                                        are not in the measured failure set — left alone. */}
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">ISO</div>
                                    <div className="text-sm font-medium text-gray-800">29119 Testing Methodology Applied</div>
                                </div>
                                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-sky-50">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">SOC</div>
                                    <div className="text-sm font-medium text-gray-800">SOC2 Type II Security Standard</div>
                                </div>
                            </div>
                            {/* Abstract decoration */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-200 rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[theme(color.brand.blue)] rounded-full opacity-10 blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeComplianceSection;
