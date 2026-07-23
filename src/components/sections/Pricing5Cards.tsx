"use client";

import React, { useState, useCallback } from "react";
import { FaCheckCircle, FaArrowRight, FaChevronDown } from "react-icons/fa";
import { pricingPackages, type PricingPackage } from "@/data/pricingPackages";
import PricingFormModal from "@/components/sections/PricingFormModal";

const colorMap: Record<string, {
    text: string;
    gradient: string;
    dot: string;
    badgeBg: string;
    ring: string;
    button: string;
}> = {
    blue: { text: "text-brand-blue", gradient: "from-brand-blue to-blue-600", dot: "bg-brand-blue", badgeBg: "bg-blue-50 text-brand-blue border-blue-100", ring: "ring-brand-blue/20", button: "bg-brand-blue hover:bg-blue-600" },
    indigo: { text: "text-indigo-600", gradient: "from-indigo-600 to-indigo-700", dot: "bg-indigo-600", badgeBg: "bg-indigo-50 text-indigo-600 border-indigo-100", ring: "ring-indigo-600/20", button: "bg-indigo-600 hover:bg-indigo-700" },
    emerald: { text: "text-emerald-600", gradient: "from-emerald-600 to-teal-600", dot: "bg-emerald-600", badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-100", ring: "ring-emerald-600/20", button: "bg-emerald-600 hover:bg-emerald-700" },
    rose: { text: "text-rose-600", gradient: "from-rose-600 to-pink-600", dot: "bg-rose-600", badgeBg: "bg-rose-50 text-rose-600 border-rose-100", ring: "ring-rose-600/20", button: "bg-rose-600 hover:bg-rose-700" },
};

interface AccordionSectionProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, isOpen, onToggle, children }) => (
    <div className="border-t border-neutral-200">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between py-3 px-1 text-left group/acc"
            aria-expanded={isOpen}
        >
            <span className="text-[11px] font-semibold text-neutral-600 uppercase tracking-widest">{title}</span>
            <FaChevronDown className={`w-2.5 h-2.5 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>
        <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0"}`}
        >
            <div className="pt-2">{children}</div>
        </div>
    </div>
);

interface PricingCardProps {
    pkg: PricingPackage;
    index: number;
    onGetStarted: (pkg: PricingPackage) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ pkg, index, onGetStarted }) => {
    const theme = colorMap[pkg.color];
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        whatWeTest: false,
        whatsIncluded: false,
        deliverables: false,
        suitableFor: false,
    });

    const toggleSection = (key: string) => {
        setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div
      className={`flex flex-col h-full bg-white rounded-2xl border border-gray-200 hover:border-brand-blue/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 min-w-[280px] lg:min-w-0 snap-start ${pkg.badge ? "ring-2 " + theme.ring : ""}`}
    >
            {/* Card Header */}
            <div className="p-6 pb-5">
                {pkg.badge && (
                    <div className="mb-4">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase border ${theme.badgeBg}`}>
                            {pkg.badge}
                        </span>
                    </div>
                )}

                <div className="flex items-center gap-3 mb-5">
                    <div className={`${theme.text}`}>
                        {React.cloneElement(pkg.icon as React.ReactElement<Record<string, unknown>>, { className: "w-6 h-6" })}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight">{pkg.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <div className="flex items-start gap-0.5">
                        <span className="text-gray-500 font-bold text-[10px] mt-2 uppercase tracking-widest">From</span>
                        <span className="text-xl font-bold text-gray-900 mt-0.5 ml-1.5">$</span>
                        <span className="text-5xl font-black text-gray-900 tracking-tighter leading-none">
                            {pkg.price.match(/\d+/) ? pkg.price.match(/\d+/)?.[0] : "Custom"}
                        </span>
                    </div>
                    <p className="text-gray-500 text-xs font-semibold mt-1">{pkg.price.replace(/Starting from \d+ USD /, '')}</p>
                </div>

                {/* Delivery */}
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1.5 bg-neutral-50 text-neutral-600 rounded-md border border-neutral-200">
                    ⏱ {pkg.delivery}
                </div>

                {pkg.description && (
                    <p className="mt-4 p-3 bg-neutral-50 rounded-md text-xs text-neutral-600 border border-neutral-200 leading-relaxed">
                        {pkg.description}
                    </p>
                )}
            </div>

            {/* Accordion Sections */}
            <div className="px-6 flex-grow">
                <AccordionSection
                    title="What We Test"
                    isOpen={openSections.whatWeTest}
                    onToggle={() => toggleSection("whatWeTest")}
                >
                    <ul className="space-y-2 px-1">
                        {pkg.whatWeTest.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <FaCheckCircle className={`w-3 h-3 mt-[2px] ${theme.text} shrink-0 opacity-70`} />
                                <span className="text-xs text-neutral-600 leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </AccordionSection>

                <AccordionSection
                    title="What's Included"
                    isOpen={openSections.whatsIncluded}
                    onToggle={() => toggleSection("whatsIncluded")}
                >
                    <ul className="space-y-2 px-1">
                        {pkg.whatsIncluded.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${theme.dot} shrink-0 opacity-50`} />
                                <span className="text-xs text-neutral-600 leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </AccordionSection>

                <AccordionSection
                    title="Deliverables"
                    isOpen={openSections.deliverables}
                    onToggle={() => toggleSection("deliverables")}
                >
                    <p className="text-xs text-neutral-600 leading-relaxed px-1">{pkg.whatYouGet}</p>
                </AccordionSection>

                <AccordionSection
                    title="Suitable For"
                    isOpen={openSections.suitableFor}
                    onToggle={() => toggleSection("suitableFor")}
                >
                    <div className="flex flex-wrap gap-1.5 px-1">
                        {pkg.suitableFor.map((item, i) => (
                            <span key={i} className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 text-[10px] font-medium rounded-full">
                                {item}
                            </span>
                        ))}
                    </div>
                </AccordionSection>
            </div>

            {/* Footer */}
            <div className="p-7 pt-4 mt-auto border-t border-neutral-100 rounded-b-3xl flex flex-col gap-3">
                <div className={`text-[10px] font-bold text-neutral-500 bg-neutral-50 px-3 py-2 rounded-lg border border-neutral-100 text-center tracking-wide`}>
                    ✨ {pkg.addOn.replace(/(\d+)\s*USD/, "$$$1")}
                </div>
                <button
                    onClick={() => onGetStarted(pkg)}
                    className={`w-full flex items-center justify-center gap-2 ${theme.button} text-white px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 group/btn shadow-lg shadow-blue-500/10 cursor-pointer`}
                >
                    Get Started
                    <FaArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

const Pricing5Cards: React.FC = () => {
    const [selectedPkg, setSelectedPkg] = useState<PricingPackage | null>(null);

    const handleGetStarted = useCallback((pkg: PricingPackage) => {
        setSelectedPkg(pkg);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedPkg(null);
    }, []);

    // Format the price for display in modal
    const formatPrice = (price: string) => {
        const match = price.match(/\d+/);
        const amount = match ? `$${match[0]}` : "Custom";
        const detail = price.replace(/Starting from \d+ USD /, '');
        return `Starting from ${amount} - ${detail}`;
    };

    return (
        <section className="bg-white py-2 px-4 md:px-8 lg:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Horizontal scrollable on mobile, 4-col grid on lg */}
                <div className="flex lg:grid lg:grid-cols-4 gap-4 items-stretch overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide lg:overflow-visible">
                    {pricingPackages.map((pkg, idx) => (
                        <div key={pkg.id} className="h-full">
                            <PricingCard pkg={pkg} index={idx} onGetStarted={handleGetStarted} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pricing Form Popup Modal */}
            <PricingFormModal
                isOpen={!!selectedPkg}
                onClose={handleCloseModal}
                packageName={selectedPkg?.name || ""}
                packagePrice={selectedPkg ? formatPrice(selectedPkg.price) : ""}
                accentColor={selectedPkg?.color || "blue"}
            />
        </section>
    );
};

export default Pricing5Cards;
