// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const AdHocTestingReadyToStart: React.FC = () => {
    const steps = [
        "Reach out with your urgent QA requirement",
        "We mobilize an expert squad within 6-12 hours",
        "Testing begins immediately with real-time feedback",
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] -z-10 translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 text-white shadow-2xl relative">
                    <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-[1.2] sm:leading-[1.1]">
                                Ready to Deploy <span className="text-brand-blue">On-Demand QA</span> Today?
                            </h2>
                            <p className="text-blue-100 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
                                Don&#39;t let unplanned scenarios or critical hotfixes slow you down.
                                Get the rapid, intuitive feedback you need to release with confidence.
                            </p>

                            <div className="space-y-4 mb-8 sm:mb-12">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4">
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 mt-0.5 sm:mt-0 rounded-xl bg-brand-blue/20 flex items-center justify-center border border-brand-blue/30 flex-shrink-0">
                                            <FaCheckCircle className="text-brand-blue text-xs sm:text-base" />
                                        </div>
                                        <span className="text-sm font-medium text-blue-50 leading-snug">{step}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="cursor-pointer w-full px-6 py-4 sm:px-10 sm:py-5 bg-white text-brand-blue rounded-full font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-900/40">
                                        Initiate Rapid Testing
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                                <Link href="https://calendar.app.google/uUHn8prcXbdqcvVb6" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                    <button className="cursor-pointer w-full px-6 py-4 sm:px-10 sm:py-5 border-2 border-white/20 hover:border-white text-white rounded-full font-bold transition-all flex items-center justify-center gap-2">
                                        <FaCalendarAlt />
                                        Schedule an Intro
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Contact Quick-Card */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-10 rounded-2xl overflow-hidden w-full max-w-full">
                            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Contact Testriq Now</h3>
                            <div className="space-y-6 sm:space-y-8">
                                <Link href="mailto:contact@testriq.com" className="group flex items-center gap-4 sm:gap-6 w-full">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl flex items-center justify-center text-xl sm:text-2xl group-hover:bg-brand-blue transition-colors flex-shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="text-xs text-brand-blue font-bold uppercase tracking-wider mb-1">Email Support</div>
                                        <div className="text-base sm:text-xl font-bold truncate">contact@testriq.com</div>
                                    </div>
                                </Link>

                                <Link href="tel:+919152929343" className="group flex items-center gap-4 sm:gap-6 w-full">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl flex items-center justify-center text-xl sm:text-2xl group-hover:bg-green-500 transition-colors flex-shrink-0">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="text-xs text-brand-blue font-bold uppercase tracking-wider mb-1">24/7 Hotline</div>
                                        <div className="text-base sm:text-xl font-bold truncate">(+91) 915-2929-343</div>
                                    </div>
                                </Link>

                                <div className="pt-6 sm:pt-8 border-t border-white/10 mt-6 sm:mt-8">
                                    <div className="flex -space-x-3 sm:-space-x-4 mb-4">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-indigo-900 bg-brand-blue flex items-center justify-center text-[10px] sm:text-xs font-bold`}>
                                                QA 0{i}
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-indigo-900 bg-indigo-600 flex items-center justify-center text-[10px] sm:text-xs font-bold">+12</div>
                                    </div>
                                    <p className="text-xs sm:text-sm text-blue-200">Our senior test lead team is currently online and ready.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdHocTestingReadyToStart;
