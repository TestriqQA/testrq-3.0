"use client";

import React from "react";
import { FaCheckDouble } from "react-icons/fa";

interface CategoryQuickNavProps {
    categories: { id: string; name: string; icon: string; color: string }[];
    activeCategory: string;
    onSelectCategory: (id: string) => void;
}

const CategoryQuickNav: React.FC<CategoryQuickNavProps> = ({ categories, activeCategory, onSelectCategory }) => {
    return (
        <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex items-center gap-3 min-w-max px-1">
                <button
                    onClick={() => onSelectCategory('all')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === 'all'
                        ? 'bg-slate-900 text-white shadow-lg scale-105'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        } cursor-pointer`}
                >
                    <FaCheckDouble className={activeCategory === 'all' ? 'text-blue-400' : 'text-slate-400'} />
                    All Categories
                </button>

                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => onSelectCategory(category.id)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 group ${activeCategory === category.id
                            ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                            : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                            } cursor-pointer`}
                    >
                        <span className={`text-lg ${activeCategory === category.id ? 'text-white' : 'grayscale group-hover:grayscale-0 transition-all'}`}>
                            {category.icon}
                        </span>
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryQuickNav;
