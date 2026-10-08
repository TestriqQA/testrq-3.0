"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaCheck, FaClock, FaBookOpen, FaChartLine, FaTools, FaLightbulb, FaBriefcase, FaRocket } from "react-icons/fa";

interface Section {
    id: string;
    title: string;
    icon: React.ReactNode;
    time: string;
    thumbnail?: string;
}

interface Heading {
    title: string;
    slug: string;
    level: number;
}

interface VisualTableOfContentsProps {
    headings?: Heading[];
    sections?: Section[];
}

const VisualTableOfContents: React.FC<VisualTableOfContentsProps> = ({ headings = [], sections: propSections }) => {
    const [activeSection, setActiveSection] = useState(0);
    const navRef = useRef<HTMLDivElement>(null);
    const activeItemRef = useRef<HTMLButtonElement>(null);

    // Map headings to sections if not provided directly
    const sections: Section[] = propSections || headings.map((h, i) => ({
        id: h.slug,
        title: h.title,
        icon: i === 0 ? <FaBookOpen className="w-4 h-4" /> : <FaCheck className="w-4 h-4" />,
        time: `${Math.max(2, Math.round(h.title.length / 10))} min`,
    }));



    // Auto-scroll TOC to keep active section in view
    useEffect(() => {
        if (activeItemRef.current && navRef.current) {
            const container = navRef.current;
            const activeItem = activeItemRef.current;

            const containerRect = container.getBoundingClientRect();
            const activeItemRect = activeItem.getBoundingClientRect();

            const relativeTop = activeItemRect.top - containerRect.top;
            const relativeBottom = activeItemRect.bottom - containerRect.top;

            // Check if active item is outside visible area
            if (relativeTop < 20) {
                // Scroll up
                container.scrollTop += relativeTop - 20;
            } else if (relativeBottom > containerRect.height - 20) {
                // Scroll down
                container.scrollTop += relativeBottom - containerRect.height + 20;
            }
        }
    }, [activeSection]);

    useEffect(() => {
        const handleScroll = () => {
            // Offset to trigger earlier, adjusted for card spacing
            const scrollPosition = window.scrollY + 250;

            // Find valid headings on the page
            const headingElements = sections.map(s => document.getElementById(s.id));

            let current = 0;
            for (let i = 0; i < headingElements.length; i++) {
                const element = headingElements[i];
                if (element && element.getBoundingClientRect().top + window.scrollY <= scrollPosition) {
                    current = i;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);


    const scrollToSection = (id: string, index: number) => {
        const element = document.getElementById(id);
        if (element) {
            setActiveSection(index); // Optimistic update

            const offset = 140; // Adjust for sticky header + card padding
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <aside className="hidden xl:block sticky top-24 h-[calc(100vh-6rem)] overflow-hidden">
            {sections.length > 0 ? (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col h-full max-h-full">
                    <h3 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-6 flex items-center gap-2 flex-shrink-0">
                        <FaChartLine />
                        In this article
                    </h3>

                    <div
                        className="relative flex-1 overflow-y-auto pr-2 custom-scrollbar"
                        ref={navRef}
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {/* Connecting Line - Fixed to container */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100" />

                        {/* Active Line Segment - Animated */}
                        <div
                            className="absolute left-6 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-300 ease-out z-10"
                            style={{
                                top: `${activeSection * 64}px`, // Adjusted for list flow
                                height: '48px',
                                transform: 'translateY(8px)' // Initial offset
                            }}
                        />

                        <div className="space-y-4 pt-2 pb-6">
                            {sections.map((section, index) => {
                                const isActive = activeSection === index;
                                const isPast = activeSection > index;

                                return (
                                    <button
                                        key={`${section.id}-${index}`}
                                        ref={isActive ? activeItemRef : null}
                                        onClick={() => scrollToSection(section.id, index)}
                                        className={`group relative w-full flex items-center gap-4 p-2 rounded-xl transition-all duration-300 text-left shrink-0 cursor-pointer`}
                                    >
                                        {/* Node Indicator */}
                                        <div className={`relative z-20 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white ${isActive
                                            ? 'border-blue-600 text-blue-600 shadow-lg shadow-blue-200 scale-110'
                                            : isPast
                                                ? 'border-blue-200 text-blue-600'
                                                : 'border-slate-200 text-slate-300 group-hover:border-slate-300'
                                            }`}>
                                            {/* Inner Icon */}
                                            <span className="text-xs">
                                                {isPast ? <FaCheck /> : section.icon}
                                            </span>
                                        </div>

                                        {/* Text Content */}
                                        <div className={`flex-1 transition-all duration-300 ${isActive ? 'opacity-100' : 'group-hover:opacity-80'
                                            }`}>
                                            <p className={`text-sm font-bold leading-tight mb-0.5 transition-colors line-clamp-2 ${isActive ? 'text-blue-600' : 'text-slate-800'
                                                }`}>
                                                {section.title}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                                                <FaClock className="w-3 h-3" />
                                                <span>{section.time}</span>
                                            </div>
                                        </div>

                                        {/* Active Glow Effect */}
                                        {isActive && (
                                            <div className="absolute inset-0 bg-blue-50/80 rounded-xl -z-10 opacity-100" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : null}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #e2e8f0;
                    border-radius: 20px;
                }
            `}</style>
        </aside>
    );
};

export default VisualTableOfContents;

// Default icons for sections
export const sectionIcons = {
    intro: <FaBookOpen />,
    definition: <FaLightbulb />,
    types: <FaChartLine />,
    tools: <FaTools />,
    practices: <FaCheck />,
    caseStudy: <FaBriefcase />,
    roadmap: <FaRocket />,
    conclusion: <FaCheck />,
};
