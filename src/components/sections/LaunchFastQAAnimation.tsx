"use client";

import React, { useEffect, useState } from "react";
const LaunchFastQAAnimation = () => {    // Corporate Color Palette (Speed/Launch theme - Blue/Teal/Orange accents)
    const colors = {
        bg: "#f0fdfa",
        primary: "#0891b2",
        secondary: "#06b6d4",
        accent: "#f97316",
        pipeline: "#14b8a6",
        manual: "#8b5cf6",
        auto: "#3b82f6",
        success: "#10b981",
        error: "#ef4444",
        textPrimary: "#0c4a6e",
        textSecondary: "#64748b",
    };

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-100 overflow-hidden relative shadow-xl border border-cyan-200">
            <svg viewBox="0 0 640 480" className="w-full h-full relative z-10">
                <defs>
                    <filter id="launch-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="launch-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="launch-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={colors.primary} />
                        <stop offset="100%" stopColor={colors.secondary} />
                    </linearGradient>
                    <linearGradient id="rocket-gradient" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor={colors.accent} />
                        <stop offset="100%" stopColor="#fb923c" />
                    </linearGradient>
                </defs>

                {/* --- APP BUILD HEADER --- */}
                <g>
                    {/* App window */}
                    <rect x="50" y="30" width="180" height="120" rx="10" fill="white" filter="url(#launch-shadow)" />
                    <rect x="50" y="30" width="180" height="25" rx="10" fill="url(#launch-gradient)" />
                    <circle cx="68" cy="42" r="5" fill="#ff6b6b" />
                    <circle cx="85" cy="42" r="5" fill="#ffd93d" />
                    <circle cx="102" cy="42" r="5" fill="#6bcb77" />
                    <text x="140" y="47" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">MVP Build v1.0</text>
                    {/* App content lines */}
                    <rect x="65" y="65" width="100" height="8" rx="2" fill="#e2e8f0" />
                    <rect x="65" y="80" width="80" height="8" rx="2" fill="#e2e8f0" />
                    <rect x="65" y="95" width="120" height="8" rx="2" fill="#e2e8f0" />
                    <rect x="65" y="110" width="60" height="8" rx="2" fill="#e2e8f0" />
                </g>

                {/* --- QA PIPELINE --- */}
                <g>
                    {/* Pipeline container */}
                    <rect x="50" y="170" width="400" height="140" rx="12" fill="white" filter="url(#launch-shadow)" />
                    <text x="250" y="195" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.textPrimary}>⚡ LaunchFast QA Pipeline</text>

                    {/* Manual Testing Lane */}
                    <rect x="70" y="210" width="360" height="35" rx="8" fill={colors.manual} opacity="0.15" />
                    <text x="85" y="232" fontSize="10" fontWeight="600" fill={colors.manual}>👨‍💻 Manual Testing</text>

                    {/* Automation Testing Lane */}
                    <rect x="70" y="255" width="360" height="35" rx="8" fill={colors.auto} opacity="0.15" />
                    <text x="85" y="277" fontSize="10" fontWeight="600" fill={colors.auto}>🤖 Automation Testing</text>
                </g>

                {/* --- PARALLEL TEST DOTS (Manual) --- */}
                {[0, 1, 2, 3, 4].map((i) => (
                    <circle key={`manual-${i}`} cx={120 + i * 30} cy="227" r="8" fill={colors.manual}>
                        <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                    </circle>
                ))}

                {/* --- PARALLEL TEST DOTS (Automation) --- */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <circle key={`auto-${i}`} cx={120 + i * 30} cy="272" r="8" fill={colors.auto}>
                        <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
                    </circle>
                ))}

                {/* --- DEFECT INDICATOR --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" begin="2s" fill="freeze" />
                    <circle cx="350" cy="227" r="12" fill={colors.error} />
                    <text x="350" y="232" textAnchor="middle" fontSize="14" fill="white">!</text>
                    <rect x="290" y="240" width="120" height="20" rx="4" fill={colors.error} />
                    <text x="350" y="254" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">⚠️ Bug Detected</text>
                </g>

                {/* --- FIX INDICATOR --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin="6s" fill="freeze" />
                    <circle cx="350" cy="227" r="12" fill={colors.success} />
                    <text x="350" y="232" textAnchor="middle" fontSize="12" fill="white">✓</text>
                    <rect x="300" y="240" width="100" height="20" rx="4" fill={colors.success} />
                    <text x="350" y="254" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">Fixed & Retested</text>
                </g>

                {/* --- RELEASE GATE CHECKLIST --- */}
                <g>
                    <rect x="470" y="140" width="140" height="130" rx="10" fill="white" filter="url(#launch-shadow)" />
                    <text x="540" y="165" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>Release Gate</text>

                    {[
                        { y: 185, label: "Functional ✓", color: colors.success },
                        { y: 205, label: "Performance ✓", color: colors.success },
                        { y: 225, label: "Security ✓", color: colors.success },
                        { y: 245, label: "Regression ✓", color: colors.success },
                    ].map((item, i) => (
                        <g key={`gate-${i}`} opacity="0">
                            <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin={`${2 + i * 0.5}s`} fill="freeze" />
                            <rect x="485" y={item.y - 10} width="110" height="18" rx="4" fill={item.color} opacity="0.15" />
                            <text x="540" y={item.y + 2} textAnchor="middle" fontSize="9" fontWeight="500" fill={item.color}>{item.label}</text>
                        </g>
                    ))}
                </g>

                {/* --- ROCKET LAUNCH --- */}
                <g>
                    <animateTransform attributeName="transform" type="translate" values="0 0; 0 -400" dur="2s" begin="7s" fill="freeze" />
                    {/* Rocket body */}
                    <ellipse cx="540" cy="380" rx="25" ry="40" fill="url(#rocket-gradient)" filter="url(#launch-glow)" />
                    <ellipse cx="540" cy="360" rx="15" ry="20" fill="white" />
                    <circle cx="540" cy="365" r="8" fill={colors.primary} />

                    {/* Rocket fins */}
                    <polygon points="515,400 505,420 520,405" fill={colors.accent} />
                    <polygon points="565,400 575,420 560,405" fill={colors.accent} />

                    {/* Flame */}
                    <g>
                        <animate attributeName="opacity" values="0.6; 1; 0.6" dur="0.5s" repeatCount="indefinite" />
                        <ellipse cx="540" cy="430" rx="12" ry="20" fill="#fbbf24" />
                        <ellipse cx="540" cy="435" rx="8" ry="15" fill="#f97316" />
                    </g>

                    <text x="540" y="460" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.accent}>🚀 LAUNCH READY</text>
                </g>

                {/* --- SUCCESS BANNER --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin="8s" fill="freeze" />
                    <rect x="250" y="15" width="200" height="40" rx="10" fill={colors.success} filter="url(#launch-shadow)" />
                    <text x="350" y="41" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">✓ MVP Launch Successful</text>
                </g>

                {/* --- SPEED INDICATOR --- */}
                <g>
                    <rect x="500" y="30" width="100" height="28" rx="14" fill={colors.accent} />
                    <text x="550" y="49" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">
                        ⚡ FAST MODE
                    </text>
                </g>

                {/* --- QA ENGINEER (small) --- */}
                <g>
                    {/* Desk area */}
                    <rect x="50" y="335" width="180" height="90" rx="8" fill="white" filter="url(#launch-shadow)" />
                    <text x="140" y="358" textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textPrimary}>QA Dashboard</text>

                    {/* Progress bars */}
                    {[
                        { y: 370, label: "Tests", w: 130, color: colors.success },
                        { y: 390, label: "Coverage", w: 110, color: colors.pipeline },
                        { y: 410, label: "Speed", w: 140, color: colors.accent },
                    ].map((bar, i) => (
                        <React.Fragment key={`progress-${i}`}>
                            <text x="60" y={bar.y + 4} fontSize="8" fill={colors.textSecondary}>{bar.label}</text>
                            <rect x="60" y={bar.y + 8} width="150" height="6" rx="3" fill="#e2e8f0" />
                            <rect x="60" y={bar.y + 8} width="0" height="6" rx="3" fill={bar.color}>
                                <animate attributeName="width" values={`0; ${bar.w}`} dur="1.5s" begin={`${i * 0.5 + 1}s`} fill="freeze" />
                            </rect>
                        </React.Fragment>
                    ))}
                </g>

            </svg>
        </div>
    );
};

export default LaunchFastQAAnimation;
