// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt, FaSearch, FaCogs, FaCheckCircle } from "react-icons/fa";

const MigrationNextStepsSection: React.FC = () => {
    const steps = [
        {
            icon: <FaSearch className="w-5 h-5" />,
            title: "Pre-Migration Assessment",
            text: "Data profiling and cleanup."
        },
        {
            icon: <FaCogs className="w-5 h-5" />,
            title: "Migration Execution",
            text: "Monitoring and transfer validation."
        },
        {
            icon: <FaCheckCircle className="w-5 h-5" />,
            title: "Post-Migration Audit",
            text: "Comprehensive reconciliation."
        }
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="bg-brand-blue rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black leading-tight">
                                Ready for a <span className="italic opacity-80">Smooth</span> Transition?
                            </h2>
                            <p className="text-blue-50 text-lg font-medium">
                                Whether Moving to Cloud or Updating Legacy Systems, We Guarantee Your Data Integrity.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link
                                    href="/contact-us"
                                    className="px-8 py-4 bg-white text-brand-blue font-black rounded-xl hover:bg-blue-50 transition-colors shadow-lg shadow-black/10 text-center"
                                >
                                    Get a Free Consultation
                                </Link>
                                <Link
                                    href="/website-map"
                                    className="px-8 py-4 bg-blue-600/30 text-white font-bold rounded-xl border border-white/20 hover:bg-blue-600/50 transition-colors text-center"
                                >
                                    Explore More Services
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {steps.map((step, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                                    <div className="w-10 h-10 rounded-full bg-white text-brand-blue flex items-center justify-center mb-4 shadow-sm">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-bold text-sm mb-1">{step.title}</h3>
                                    <p className="text-blue-100 text-[10px] leading-tight opacity-80">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MigrationNextStepsSection;
