"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calendar, Briefcase, Users, Globe } from "lucide-react";

interface StatItem {
    icon: React.ReactNode;
    value: number;
    suffix: string;
    label: string;
}

const stats: StatItem[] = [
    {
        icon: <Calendar className="w-6 h-6" />,
        value: 16,
        suffix: "+",
        label: "Years Experience",
    },
    {
        icon: <Briefcase className="w-6 h-6" />,
        value: 500,
        suffix: "+",
        label: "Projects Delivered",
    },
    {
        icon: <Users className="w-6 h-6" />,
        value: 200,
        suffix: "+",
        label: "QA Experts",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        value: 30,
        suffix: "+",
        label: "Global Clients",
    },
];

const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, shouldStart]);

    return count;
};

const StatCard: React.FC<{ stat: StatItem; index: number; shouldAnimate: boolean }> = ({
    stat,
    index,
    shouldAnimate,
}) => {
    const count = useCountUp(stat.value, 2000, shouldAnimate);

    return (
        <div
      className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300 group"
    >
            <div className="flex items-center justify-center w-12 h-12 bg-sky-50 border border-sky-100 rounded-xl text-[theme(color.brand.blue)] group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
            </div>
            <div>
                <div className="text-3xl font-bold text-[theme(color.brand.blue)]">
                    {count}
                    <span className="text-[theme(color.brand.blue)]">{stat.suffix}</span>
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
        </div>
    );
};

const CategoriesTrustStrip: React.FC = () => {
    const ref = useRef(null);    return (
        <section
            ref={ref}
            className="relative py-8 bg-[theme(color.background.gray)] border-y border-gray-200"
        >
            {/* Restyled to the light theme to match the rest of the site: light
                gray band, white stat cards, brand-blue numbers. The dark gradient
                and dot-pattern overlay are gone; the stats are unchanged. */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={stat.label}
                            stat={stat}
                            index={index}
                            shouldAnimate={true}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesTrustStrip;
