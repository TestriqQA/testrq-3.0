"use client";

import React, { useEffect, useState } from "react";
const DesktopTestingAnimation = () => {    // Corporate Color Palette
    const colors = {
        bg: "#f8fafc", // Slate 50 (Light)
        windowBg: "#ffffff",
        windowBorder: "#e2e8f0", // Slate 200
        windowHeader: "#1e3a5f", // Deep Blue
        accent: "#0891b2", // Cyan 600
        success: "#10b981", // Emerald 500
        error: "#ef4444", // Red 500
        warning: "#f59e0b", // Amber 500
        textPrimary: "#1e293b", // Slate 800
        textSecondary: "#64748b", // Slate 500
        cursorGlow: "rgba(8, 145, 178, 0.5)",
    };

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden relative shadow-xl border border-slate-200">
            {/* Main SVG Scene */}
            <svg viewBox="0 0 800 600" className="w-full h-full relative z-10">
                <defs>
                    <filter id="desktop-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1" />
                    </filter>
                    <linearGradient id="header-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#1e3a5f" />
                        <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                </defs>

                {/* --- MAIN APPLICATION WINDOW --- */}
                <g>
                    {/* Window Frame */}
                    <rect x="100" y="80" width="600" height="420" rx="12" fill={colors.windowBg} stroke={colors.windowBorder} strokeWidth="2" filter="url(#desktop-shadow)" />

                    {/* Window Header */}
                    <rect x="100" y="80" width="600" height="40" rx="12" fill="url(#header-gradient)" />
                    <rect x="100" y="108" width="600" height="12" fill="url(#header-gradient)" />

                    {/* Window Controls */}
                    <circle cx="130" cy="100" r="6" fill="#ef4444" />
                    <circle cx="150" cy="100" r="6" fill="#f59e0b" />
                    <circle cx="170" cy="100" r="6" fill="#10b981" />

                    {/* Window Title */}
                    <text x="400" y="105" textAnchor="middle" fill="white" fontSize="14" fontFamily="system-ui" fontWeight="600">
                        Enterprise Application v3.2.1
                    </text>
                </g>

                {/* --- SIDEBAR --- */}
                <g>
                    <rect x="100" y="120" width="150" height="380" fill="#f1f5f9" />
                    {/* Menu Items */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <g key={`menu-${i}`} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                            <rect x="115" y={140 + i * 50} width="120" height="35" rx="6" fill={i === 2 ? colors.accent : "#e2e8f0"} fillOpacity={i === 2 ? 0.2 : 1} />
                            <rect x="125" y={150 + i * 50} width="60" height="8" rx="4" fill={i === 2 ? colors.accent : colors.textSecondary} />
                            <rect x="125" y={162 + i * 50} width="40" height="6" rx="3" fill={colors.textSecondary} opacity="0.5" />
                        </g>
                    ))}
                </g>

                {/* --- MAIN CONTENT AREA --- */}
                <g>
                    {/* Form Fields */}
                    {[0, 1, 2].map((i) => (
                        <g key={`field-${i}`}>
                            {/* Label */}
                            <rect x="280" y={150 + i * 80} width="80" height="10" rx="5" fill={colors.textSecondary} />

                            {/* Input Field */}
                            <rect x="280" y={170 + i * 80} width="380" height="40" rx="8" fill={colors.windowBg} stroke={colors.windowBorder} strokeWidth="2" />

                            {/* Input Text Placeholder */}
                            <rect x="295" y={185 + i * 80} width="0" height="10" rx="5" fill={colors.textSecondary} opacity="0.4">
                                <animate attributeName="width" values={`0; ${120 + i * 30}`} dur="1s" begin={`${i * 0.5 + 1}s`} fill="freeze" />
                            </rect>
                        </g>
                    ))}

                    {/* Submit Button */}
                    <g>
                        <animate attributeName="opacity" values="0.6; 1; 0.6" dur="2s" begin="3s" repeatCount="indefinite" />
                        <rect x="280" y="420" width="150" height="45" rx="8" fill={colors.accent} />
                        <text x="355" y="448" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" fontFamily="system-ui">Submit</text>
                    </g>
                </g>

                {/* --- CHECKMARKS FOR VALIDATION --- */}
                {[0, 2].map((i) => (
                    <g key={`check-${i}`} opacity="0">
                        <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin={`${i * 0.5 + 1.5}s`} fill="freeze" />
                        <circle cx="675" cy={190 + i * 80} r="12" fill={colors.success} />
                        <path d={`M ${668} ${190 + i * 80} L ${673} ${195 + i * 80} L ${682} ${185 + i * 80}`} stroke="white" strokeWidth="2.5" fill="none" />
                    </g>
                ))}

                {/* --- BUG INDICATOR (X mark) --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="3s" begin="2s" fill="freeze" />
                    <circle cx="675" cy="270" r="12" fill={colors.error} />
                    <path d="M 670 265 L 680 275 M 680 265 L 670 275" stroke="white" strokeWidth="2.5" />
                </g>

                {/* --- RESOLVED CHECKMARK (replaces bug) --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin="5s" fill="freeze" />
                    <circle cx="675" cy="270" r="12" fill={colors.success} />
                    <path d="M 668 270 L 673 275 L 682 265" stroke="white" strokeWidth="2.5" fill="none" />
                </g>

                {/* --- CURSOR --- */}
                <g>
                    <animateTransform attributeName="transform" type="translate" values="400 300; 300 200; 320 260; 340 340; 350 440; 400 300" dur="5s" repeatCount="indefinite" />
                    <path d="M 0 0 L 0 18 L 5 14 L 9 22 L 12 20 L 8 12 L 14 12 Z" fill={colors.textPrimary} stroke="white" strokeWidth="1" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))" />
                </g>

                {/* --- QA ENGINEER SILHOUETTE --- */}
                <g>
                    {/* Desk */}
                    <rect x="50" y="530" width="700" height="20" rx="4" fill="#cbd5e1" />

                    {/* Chair Back */}
                    <ellipse cx="400" cy="560" rx="60" ry="30" fill="#475569" />

                    {/* Person (stylized) */}
                    <ellipse cx="400" cy="520" rx="40" ry="15" fill="#334155" /> {/* Shoulders */}
                    <circle cx="400" cy="490" r="25" fill="#475569" /> {/* Head */}
                </g>

                {/* --- STATUS BADGE --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin="6s" fill="freeze" />
                    <rect x="550" y="420" width="130" height="45" rx="8" fill={colors.success} filter="url(#desktop-shadow)" />
                    <text x="615" y="448" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" fontFamily="system-ui">All Tests Passed</text>
                </g>

            </svg>
        </div>
    );
};

export default DesktopTestingAnimation;
