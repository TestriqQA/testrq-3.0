"use client";

import React, { memo } from "react";
import {
    FaMapMarkerAlt,
    FaClock,
    FaUsers,
    FaChevronDown,
    FaChevronUp,
    FaBug,
    FaCode,
} from "react-icons/fa";
import { SanityJobOpening } from "@/lib/sanity-data-adapter";
import { PortableText } from '@portabletext/react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IconType } from "react-icons";

// Map icon string identifiers to React icon components
const iconMap: Record<string, IconType> = {
    bug: FaBug,
    code: FaCode,
};

interface JobCardItemProps {
    position: SanityJobOpening;
    isExpanded: boolean;
    onToggle: (id: number) => void;
    onApply: (position: SanityJobOpening, e: React.MouseEvent<HTMLButtonElement>) => void;
}

const JobCardItem: React.FC<JobCardItemProps> = memo(({ position, isExpanded, onToggle, onApply }) => {
    const getBadgeStyle = (badge: string) => {
        switch (badge) {
            case "Urgent":
                return "bg-red-100 text-red-700 border-red-200";
            case "Leadership":
                return "bg-purple-100 text-purple-700 border-purple-200";
            default:
                return "bg-gray-100 text-gray-700 border-gray-200";
        }
    };

    return (
        <div
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
        >
            <div
                onClick={() => onToggle(position.id)}
                className="p-4 sm:p-6 lg:p-8 relative cursor-pointer"
            >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
                    {/* Left Side - Job Info */}
                    <div className="flex-1">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div
                                className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${position.color} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}
                            >
                                {(() => {
                                    const IconComponent = iconMap[position.icon || 'bug'] || FaBug;
                                    return <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
                                })()}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 mb-2">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                                        {position.title}
                                    </h3>
                                    {position.badges?.map((badge, index) => (
                                        <span
                                            key={index}
                                            className={`px-2 py-1 text-xs font-semibold rounded-full border ${getBadgeStyle(
                                                badge
                                            )} whitespace-nowrap`}
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3">
                                    <div className="flex items-center gap-1">
                                        <FaMapMarkerAlt className="w-3 h-3" />
                                        <span>{position.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaClock className="w-3 h-3" />
                                        <span>{position.type}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaUsers className="w-3 h-3" />
                                        <span>{position.experience}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {position.skills
                                        .slice(
                                            0,
                                            isExpanded ? position.skills.length : 4
                                        )
                                        .map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-2 sm:px-3 py-1 bg-[theme(color.brand.blue)] bg-opacity-10 text-white text-xs rounded-full font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    {!isExpanded && position.skills.length > 4 && (
                                        <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                                            +{position.skills.length - 4} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Expand / Collapse Arrow */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8">
                    {isExpanded ? (
                        <FaChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    ) : (
                        <FaChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    )}
                </div>
            </div>

            {/* Expanded Content - Mobile optimized */}
            {isExpanded && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8 border-t border-gray-100">
                    <div className="pt-4 sm:pt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                            {/* Job Description */}
                            <div className="lg:col-span-2 order-2 lg:order-1">
                                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Job Description</h4>
                                <div className="job-description prose prose-gray max-w-none text-sm sm:text-base">
                                    <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 sm:text-gray-700">
                                        {typeof position.description === 'string' ? (
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {position.description}
                                            </ReactMarkdown>
                                        ) : (
                                            <PortableText value={position.description} />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                                {/* Apply Button */}
                                <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-600 rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
                                    <h5 className="font-semibold mb-2 text-sm sm:text-base">Ready to Apply?</h5>
                                    <p className="text-xs sm:text-sm text-blue-100 mb-3 sm:mb-4">
                                        Join our team and make an impact in quality assurance.
                                    </p>
                                    <button
                                        onClick={(e) => onApply(position, e)}
                                        className="w-full bg-white text-[theme(color.brand.blue)] font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation cursor-pointer"
                                    >
                                        Apply Now
                                    </button>
                                </div>

                                {/* Job Details */}
                                <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                                    <h5 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                                        Job Details
                                    </h5>
                                    <div className="space-y-2 sm:space-y-3">
                                        <div className="flex justify-between text-xs sm:text-sm">
                                            <span className="text-gray-600">Location:</span>
                                            <span className="font-medium">{position.location}</span>
                                        </div>
                                        <div className="flex justify-between text-xs sm:text-sm">
                                            <span className="text-gray-600">Type:</span>
                                            <span className="font-medium">{position.type}</span>
                                        </div>
                                        <div className="flex justify-between text-xs sm:text-sm">
                                            <span className="text-gray-600">Experience:</span>
                                            <span className="font-medium">{position.experience}</span>
                                        </div>
                                        {position.salary && (
                                            <div className="flex justify-between text-xs sm:text-sm">
                                                <span className="text-gray-600">Salary:</span>
                                                <span className="font-medium">{position.salary}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Skills Required */}
                                <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                                    <h5 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                                        Skills Required
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                        {position.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-2 sm:px-3 py-1 bg-white text-gray-700 text-xs sm:text-sm rounded-full border border-gray-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});

JobCardItem.displayName = "JobCardItem";

export default JobCardItem;
