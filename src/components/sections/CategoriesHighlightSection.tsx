"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Category } from "@/lib/sanity-data-adapter";
import { getCategoryIcon } from "@/lib/category-icons";

interface CategoriesHighlightSectionProps {
    categories: Category[];
}

// Map category names to benefits - you can customize these
const categoryBenefits: Record<string, string[]> = {
    default: [
        "Comprehensive test coverage",
        "Expert QA engineers",
        "Detailed reporting",
        "Fast turnaround time",
    ],
};

const CategoriesHighlightSection: React.FC<CategoriesHighlightSectionProps> = ({
    categories,
}) => {
    const ref = useRef(null);    // Take top 4 categories for highlights
    const highlightCategories = categories.slice(0, 4);

    const getBenefits = (categoryName: string): string[] => {
        return categoryBenefits[categoryName.toLowerCase()] || categoryBenefits.default;
    };

    // Restyled to the light theme to match the rest of the site: white band,
    // brand-blue pill badge and accent word, sky icon tiles and a light sky
    // panel in place of the per-category gradient squares.
    return (
        <section ref={ref} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
      className="text-center mb-16"
    >
                    <span className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm">Featured Expertise</span>
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Specialized Testing{" "}
                        <span className="text-[theme(color.brand.blue)]">
                            Categories
                        </span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Deep expertise across key testing domains to ensure comprehensive
                        quality assurance
                    </p>
                </div>

                {/* Highlight Cards */}
                <div className="space-y-16">
                    {highlightCategories.map((category, index) => (
                        <div
      key={category.id}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
    >
                            {/* Content Side */}
                            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                {/* Category Icon */}
                                {(() => {
                                    const IconComponent = getCategoryIcon(category.name);
                                    return (
                                        <div
                                            className="inline-flex items-center justify-center w-16 h-16 bg-sky-50 border border-sky-100 rounded-xl text-[theme(color.brand.blue)] mb-6"
                                        >
                                            <IconComponent className="w-8 h-8" />
                                        </div>
                                    );
                                })()}

                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    {category.name}
                                </h3>

                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    {category.description.replace(/<[^>]*>?/gm, "")}
                                </p>

                                {/* Benefits List */}
                                <ul className="space-y-3 mb-8">
                                    {getBenefits(category.name).map((benefit, benefitIndex) => (
                                        <li
                                            key={benefitIndex}
                                            className="flex items-center gap-3 text-gray-700"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <Link
                                    href={`/blog/category/${category.id}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-md hover:shadow-xl transition-all group"
                                >
                                    Explore {category.name}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Visual Side - Illustration Placeholder */}
                            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                <div
                                    className="relative aspect-square max-w-md mx-auto bg-sky-50 border border-sky-100 rounded-3xl overflow-hidden shadow-sm"
                                >
                                    {/* Large Icon */}
                                    {(() => {
                                        const IconComponent = getCategoryIcon(category.name);
                                        return (
                                            <div className="absolute inset-0 flex items-center justify-center text-sky-200">
                                                <IconComponent className="w-32 h-32" />
                                            </div>
                                        );
                                    })()}

                                    {/* Stats Badge */}
                                    <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                                                    {category.postCount}
                                                </div>
                                                <div className="text-sm text-gray-600">Articles</div>
                                            </div>
                                            <div className="w-px h-10 bg-gray-200" />
                                            <div>
                                                <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                                                    {category.subscribers.toLocaleString()}
                                                </div>
                                                <div className="text-sm text-gray-600">Readers</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesHighlightSection;
