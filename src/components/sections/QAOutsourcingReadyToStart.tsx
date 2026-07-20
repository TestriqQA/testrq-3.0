import Link from "next/link";
import React from "react";
import { FaArrowRight, FaPhone } from "react-icons/fa";

const QAOutsourcingReadyToStart: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-brand-blue to-indigo-700">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Outsource Your QA?
                    </h2>
                    <p className="text-lg text-blue-100 mb-8">
                        Book a free consultation and get a tailored QA outsourcing plan for
                        your product.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="https://calendar.app.google/uUHn8prcXbdqcvVb6"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-white cursor-pointer text-brand-blue px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                Book a Free Consultation
                                <FaArrowRight className="ml-2" />
                            </button>
                        </Link>

                        <Link href="/contact-us">
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                                Contact Us
                            </button>
                        </Link>

                        <Link href="tel:+919152929343">
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                                <FaPhone className="mr-2" />
                                (+91) 915-2929-343
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QAOutsourcingReadyToStart;
