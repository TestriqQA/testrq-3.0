// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaCheckCircle, FaLaptopCode, FaMicrochip, FaShieldAlt, FaCar, FaHospital, FaPlane, FaLink, FaDatabase, FaBolt } from "react-icons/fa";

const EmbeddedServiceOfferings: React.FC = () => {
    const services = [
        { icon: <FaLaptopCode />, title: "Embedded software verification and validation", desc: "V&V activities ensuring software meets all specified requirements and performs reliably." },
        { icon: <FaDatabase />, title: "Model-in-the-loop (MIL) testing", desc: "Early validation of control algorithms and system models to detect design flaws early." },
        { icon: <FaBolt />, title: "Software-in-the-loop (SIL) testing", desc: "Testing actual production code in a simulated environment for software logic validation." },
        { icon: <FaShieldAlt />, title: "Embedded system security testing", desc: "Proactive identification and mitigation of security vulnerabilities in software and firmware." },
        { icon: <FaCar />, title: "Automotive embedded testing (ISO 26262)", desc: "Specialized testing to meet rigorous functional safety requirements of the automotive industry." },
        { icon: <FaHospital />, title: "Medical device embedded software testing", desc: "Ensuring compliance with strict regulatory standards and life-saving reliability." },
        { icon: <FaPlane />, title: "Aerospace embedded testing (DO-178C)", desc: "Expert verification and validation services for airborne software guidelines." },
        { icon: <FaLink />, title: "IoT device embedded testing", desc: "Comprehensive testing for functionality, connectivity, security, and performance." },
        { icon: <FaMicrochip />, title: "Real-time operating system (RTOS) testing", desc: "Specialized testing for reliability, determinism, and performance of RTOS applications." },
        { icon: <FaDatabase />, title: "Embedded firmware testing services", desc: "Thorough validation of firmware to ensure proper hardware initialization and stability." }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                        Testriq’s Comprehensive <br />
                        <span className="text-brand-blue">Embedded Testing Services</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Your expert partner for complex systems. We leverage cutting-edge methodologies and tools to ensure every component performs optimally.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div key={i} className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-blue/50 transition-all duration-300">
                            <div className="text-brand-blue text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-brand-blue transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                            {/* F-38: removed the hover-revealed "Learn More" affordance —
                                it was a non-link <span> that visually implied navigation
                                but did nothing on click. Misleading + a11y issue (no link
                                semantics, no destination, no keyboard target). The card
                                itself is informational; section-level CTAs live elsewhere
                                on the page. */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmbeddedServiceOfferings;
