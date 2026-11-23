"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { Category } from "@/lib/sanity-data-adapter";
import { getCategoryIcon } from "@/lib/category-icons";

interface FeaturedCategoriesSectionProps {
    categories: Category[];
}

const FeaturedCategoriesSection: React.FC<FeaturedCategoriesSectionProps> = ({
    categories,
}) => {
    const ref = useRef(null);    // Take top 3 categories
    const featured = categories.slice(0, 3);

    return (
        <section ref={ref} className="py-10 bg-white">
            {/* Restyled to the light theme to match the rest of the site: white
                cards with a brand-blue icon tile instead of full-bleed per-category
                gradients. Copy, links and the card layout are unchanged. */}
            {/* Section Header */}
            <div
      className="flex items-center gap-3 mb-8"
    >
                <div className="flex items-center justify-center w-10 h-10 bg-sky-50 border border-sky-100 rounded-xl text-[theme(color.brand.blue)]">
                    <Star className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Featured Categories
                    </h2>
                    <p className="text-sm text-gray-600">
                        Most popular testing topics
                    </p>
                </div>
            </div>

            {/* Featured Cards Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
                {featured.map((category, index) => (
                    <div
      key={category.id}
      className="group relative"
    >
                        <Link
                            href={`/blog/category/${category.id}`}
                            className={`relative block h-[320px] rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300`}
                        >
                            {/* Decorative Large Icon */}
                            {(() => {
                                const IconComponent = getCategoryIcon(category.name);
                                return (
                                    <div className="absolute -bottom-8 -right-8 text-[theme(color.brand.blue)] opacity-[0.06] transform rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 select-none">
                                        <IconComponent className="w-40 h-40" />
                                    </div>
                                );
                            })()}

                            {/* Content */}
                            <div className="relative h-full p-7 flex flex-col justify-between z-10">
                                <div>
                                    {/* Trending badge */}
                                    {index === 0 && (
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 rounded-full text-[theme(color.brand.blue)] text-xs font-semibold mb-4 border border-sky-100">
                                            <TrendingUp className="w-3 h-3" />
                                            Trending
                                        </div>
                                    )}

                                    {/* Icon */}
                                    {(() => {
                                        const IconComponent = getCategoryIcon(category.name);
                                        return (
                                            <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-[theme(color.brand.blue)] mb-5 border border-sky-100 group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-7 h-7" />
                                            </div>
                                        );
                                    })()}

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[theme(color.brand.blue)] group-hover:translate-x-1 transition-all">
                                        {category.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 font-medium line-clamp-2 leading-relaxed">
                                        {category.description.replace(/<[^>]*>?/gm, "")}
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    <span className="text-[theme(color.brand.blue)] font-bold bg-sky-50 px-4 py-2 rounded-full text-sm border border-sky-100">
                                        {category.postCount} Articles
                                    </span>

                                    <div className="w-12 h-12 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center text-white shadow-sm group-hover:shadow-xl group-hover:scale-110 transition-transform duration-300">
                                        <ArrowRight className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCategoriesSection;
