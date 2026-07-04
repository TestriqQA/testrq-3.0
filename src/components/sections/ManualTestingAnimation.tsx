"use client";

import React, { useEffect, useState } from "react";
const ManualTestingAnimation = () => {    // Corporate Color Palette
    const colors = {
        bg: "#f8fafc",
        primary: "#3b82f6",
        secondary: "#8b5cf6",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        cursor: "#3b82f6",
        formField: "#e2e8f0",
    };

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="manual-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="header-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>

                {/* --- APPLICATION WINDOW --- */}
                <g>
                    {/* Window Frame */}
                    <rect x="100" y="50" width="450" height="360" rx="12" fill="white" filter="url(#manual-shadow)" />

                    {/* Window Header */}
                    <rect x="100" y="50" width="450" height="40" rx="12" fill="url(#header-gradient)" />
                    <rect x="100" y="70" width="450" height="20" fill="url(#header-gradient)" />

                    {/* Window Controls */}
                    <circle cx="125" cy="70" r="6" fill="#ef4444" />
                    <circle cx="145" cy="70" r="6" fill="#f59e0b" />
                    <circle cx="165" cy="70" r="6" fill="#22c55e" />
                    <text x="325" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Application Under Test</text>

                    {/* Sidebar */}
                    <rect x="100" y="90" width="100" height="320" fill="#f1f5f9" />

                    {/* Sidebar Menu Items */}
                    {["Dashboard", "Users", "Settings", "Reports"].map((item, i) => (
                        <g key={item}>
                            <rect x="110" y={110 + i * 40} width="80" height="30" rx="5" fill={i === 0 ? colors.primary : "white"} />
                            <text x="150" y={130 + i * 40} textAnchor="middle" fontSize="9" fontWeight="500" fill={i === 0 ? "white" : colors.textSecondary}>{item}</text>
                        </g>
                    ))}

                    {/* Main Content Area */}
                    <rect x="210" y="100" width="330" height="200" rx="8" fill="#f8fafc" />

                    {/* Form Title */}
                    <text x="230" y="125" fontSize="14" fontWeight="700" fill={colors.textPrimary}>User Registration Form</text>

                    {/* Form Fields */}
                    {/* Username Field */}
                    <text x="230" y="155" fontSize="10" fill={colors.textSecondary}>Username</text>
                    <rect x="230" y="160" width="180" height="28" rx="4" fill="white" stroke={colors.formField} strokeWidth="2" />
                    <text x="240" y="178" fontSize="10" fill={colors.textPrimary}>john_doe</text>

                    {/* Email Field */}
                    <text x="230" y="210" fontSize="10" fill={colors.textSecondary}>Email</text>
                    <rect x="230" y="215" width="180" height="28" rx="4" fill="white" stroke={colors.formField} strokeWidth="2" />
                    <text x="240" y="233" fontSize="10" fill={colors.textPrimary}>
                        <animate attributeName="opacity" values="1; 1; 0; 0" dur="8s" repeatCount="indefinite" />
                        invalid@email
                    </text>
                    <text x="240" y="233" fontSize="10" fill={colors.textPrimary} opacity="0">
                        <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                        valid@email.com
                    </text>

                    {/* Submit Button */}
                    <rect x="230" y="260" width="100" height="32" rx="6" fill={colors.primary} />
                    <text x="280" y="280" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">Submit</text>

                    {/* Validation Checkmarks */}
                    <g opacity="0">
                        <animate attributeName="opacity" values="0; 1; 1; 1" dur="8s" repeatCount="indefinite" />
                        <circle cx="425" cy="174" r="10" fill={colors.success} />
                        <text x="425" y="178" textAnchor="middle" fontSize="10" fill="white">✓</text>
                    </g>

                    <g opacity="0">
                        <animate attributeName="opacity" values="0; 1; 0; 0" dur="8s" repeatCount="indefinite" />
                        <circle cx="425" cy="229" r="10" fill={colors.error} />
                        <text x="425" y="233" textAnchor="middle" fontSize="10" fill="white">✗</text>
                    </g>

                    <g opacity="0">
                        <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                        <circle cx="425" cy="229" r="10" fill={colors.success} />
                        <text x="425" y="233" textAnchor="middle" fontSize="10" fill="white">✓</text>
                    </g>
                </g>

                {/* --- CURSOR --- */}
                <g>
                    <animateTransform attributeName="transform" type="translate" values="400 300; 280 270; 280 270; 635 242; 635 242; 280 270; 280 270" dur="8s" repeatCount="indefinite" />
                    <polygon points="0,0 0,16 5,12 8,20 12,18 9,10 16,10" fill={colors.cursor} stroke="white" strokeWidth="1" />
                </g>

                {/* --- QA ENGINEER --- */}
                <g>
                    <rect x="100" y="430" width="500" height="15" rx="4" fill="#ddd6fe" />
                    <ellipse cx="350" cy="420" rx="30" ry="10" fill="#7c3aed" />
                    <circle cx="350" cy="400" r="18" fill="#8b5cf6" />
                </g>

                {/* --- DEFECT LOG PANEL --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 1" dur="8s" repeatCount="indefinite" />
                    <rect x="580" y="100" width="190" height="200" rx="10" fill="white" filter="url(#manual-shadow)" />
                    <rect x="580" y="100" width="190" height="35" rx="10" fill={colors.error} />
                    <rect x="580" y="120" width="190" height="15" fill={colors.error} />
                    <text x="675" y="123" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">🐛 Defect Log</text>

                    <text x="595" y="155" fontSize="10" fontWeight="600" fill={colors.textPrimary}>ID: DEF-001</text>
                    <text x="595" y="175" fontSize="9" fill={colors.textSecondary}>Email validation error</text>
                    <text x="595" y="195" fontSize="9" fill={colors.textSecondary}>Severity: High</text>
                    
                    <g>
                        <animate attributeName="opacity" values="1; 1; 0; 0" dur="8s" repeatCount="indefinite" />
                        <text x="595" y="215" fontSize="9" fill={colors.textSecondary}>Status: Open</text>
                    </g>
                    <g opacity="0">
                        <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                        <text x="595" y="215" fontSize="9" fill={colors.success}>Status: Fixed</text>
                    </g>

                    <g>
                        <animate attributeName="opacity" values="1; 1; 0; 0" dur="8s" repeatCount="indefinite" />
                        <rect x="595" y="235" width="80" height="25" rx="5" fill={colors.primary} />
                        <text x="635" y="252" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">Mark Fixed</text>
                    </g>

                    <g opacity="0">
                        <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                        <rect x="595" y="270" width="160" height="20" rx="4" fill={colors.success} opacity="0.2" />
                        <text x="675" y="284" textAnchor="middle" fontSize="9" fontWeight="600" fill={colors.success}>✓ Verified Fixed</text>
                    </g>
                </g>

                {/* --- SUCCESS BADGE --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 0; 0; 1" dur="8s" repeatCount="indefinite" />
                    <rect x="220" y="330" width="220" height="45" rx="10" fill={colors.success} filter="url(#manual-shadow)" />
                    <text x="330" y="358" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ All Tests Passed</text>
                </g>

            </svg>
        </div>
    );
};

export default ManualTestingAnimation;
