"use client";

import React, { useEffect, useState } from "react";
const MobileTestingAnimation = () => {
    // Corporate Color Palette
    const colors = {
        bg: "#f8fafc",
        phoneBg: "#1e293b",
        screenBg: "#0f172a",
        accent: "#0891b2",
        accentLight: "#22d3ee",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        ios: "#007aff",
        android: "#3ddc84",
    };

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden relative shadow-xl border border-slate-200">
            <svg viewBox="0 0 800 600" className="w-full h-full relative z-10">
                <defs>
                    <filter id="mobile-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="ios-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#667eea" />
                        <stop offset="100%" stopColor="#764ba2" />
                    </linearGradient>
                    <linearGradient id="android-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#11998e" />
                        <stop offset="100%" stopColor="#38ef7d" />
                    </linearGradient>
                </defs>

                {/* --- iOS DEVICE (Left) --- */}
                <g>
                    {/* Phone Frame */}
                    <rect x="180" y="100" width="180" height="380" rx="24" fill={colors.phoneBg} filter="url(#mobile-shadow)" />
                    {/* Notch */}
                    <rect x="245" y="108" width="50" height="20" rx="10" fill={colors.screenBg} />
                    {/* Screen */}
                    <rect x="192" y="130" width="156" height="330" rx="4" fill={colors.screenBg} />

                    {/* iOS Label */}
                    <circle cx="350" cy="115" r="18" fill="white" filter="url(#mobile-shadow)" />
                    <text x="350" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill={colors.ios}></text>

                    {/* App UI Elements */}
                    <g>
                        {/* Header Bar */}
                        <rect x="192" y="130" width="156" height="40" fill="url(#ios-gradient)" />
                        <text x="270" y="155" textAnchor="middle" fontSize="12" fill="white" fontWeight="600">MyApp</text>

                        {/* List Items */}
                        {[0, 1, 2, 3].map((i) => (
                            <g key={`ios-item-${i}`}>
                                <rect x="200" y={185 + i * 55} width="140" height="45" rx="8" fill="#1e293b" />
                                <rect x="210" y={195 + i * 55} width="80" height="8" rx="4" fill={colors.textSecondary} />
                                <rect x="210" y={210 + i * 55} width="50" height="6" rx="3" fill={colors.textSecondary} opacity="0.5" />

                                {/* Checkmarks for validated items */}
                                <g opacity="0">
                                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin={`${2 + i * 0.5}s`} fill="freeze" />
                                    <circle cx="325" cy={207 + i * 55} r="10" fill={i === 2 ? colors.error : colors.success} />
                                </g>
                            </g>
                        ))}
                    </g>
                </g>

                {/* --- ANDROID DEVICE (Right) --- */}
                <g>
                    {/* Phone Frame */}
                    <rect x="440" y="100" width="180" height="380" rx="20" fill="#374151" filter="url(#mobile-shadow)" />
                    {/* Screen */}
                    <rect x="450" y="115" width="160" height="350" rx="4" fill={colors.screenBg} />

                    {/* Android Label */}
                    <circle cx="610" cy="115" r="18" fill="white" filter="url(#mobile-shadow)" />
                    <text x="610" y="121" textAnchor="middle" fontSize="16">🤖</text>

                    {/* App UI Elements */}
                    <g>
                        {/* Header Bar */}
                        <rect x="450" y="115" width="160" height="45" fill="url(#android-gradient)" />
                        <text x="530" y="143" textAnchor="middle" fontSize="12" fill="white" fontWeight="600">TestApp</text>

                        {/* Cards */}
                        {[0, 1, 2].map((i) => (
                            <g key={`android-card-${i}`}>
                                <rect x="458" y={175 + i * 75} width="144" height="60" rx="8" fill="#1e293b" />
                                <rect x="468" y={185 + i * 75} width="90" height="8" rx="4" fill={colors.textSecondary} />
                                <rect x="468" y={200 + i * 75} width="60" height="6" rx="3" fill={colors.textSecondary} opacity="0.5" />
                                <rect x="468" y={215 + i * 75} width="40" height="6" rx="3" fill={colors.textSecondary} opacity="0.3" />

                                {/* Status indicator */}
                                <rect x="580" y={190 + i * 75} width="14" height="14" rx="3" fill={colors.success} opacity="0">
                                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin={`${3 + i * 0.5}s`} fill="freeze" />
                                </rect>
                            </g>
                        ))}
                    </g>
                </g>

                {/* --- TOUCH GESTURE INDICATOR --- */}
                <g>
                    {/* Tap Ripple on iOS */}
                    <g>
                        <circle cx="270" cy="300" r="20" fill={colors.accentLight} opacity="0">
                            <animate attributeName="r" values="8; 25" dur="1.5s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.6; 0" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="270" cy="300" r="8" fill={colors.accentLight} />
                    </g>

                    {/* Swipe Gesture on Android */}
                    <path d="M 530 250 L 530 350" stroke={colors.accentLight} strokeWidth="3" strokeLinecap="round" strokeDasharray="10 5">
                        <animate attributeName="stroke-dashoffset" values="15; 0" dur="1s" repeatCount="indefinite" />
                    </path>
                </g>

                {/* --- QA ENGINEER SILHOUETTE --- */}
                <g>
                    {/* Desk */}
                    <rect x="100" y="520" width="600" height="15" rx="4" fill="#cbd5e1" />
                    {/* Chair */}
                    <ellipse cx="400" cy="555" rx="50" ry="25" fill="#475569" />
                    {/* Person */}
                    <ellipse cx="400" cy="510" rx="35" ry="12" fill="#334155" />
                    <circle cx="400" cy="485" r="22" fill="#475569" />
                </g>

                {/* --- STATUS PANEL --- */}
                <g>
                    <rect x="300" y="30" width="200" height="50" rx="8" fill="white" filter="url(#mobile-shadow)" />
                    <text x="400" y="60" textAnchor="middle" fontSize="14" fontWeight="600">
                        <animate attributeName="opacity" values="1; 1; 0; 0" dur="8s" repeatCount="indefinite" />
                        Testing UI Gestures...
                    </text>
                    <text x="400" y="60" textAnchor="middle" fontSize="14" fontWeight="600" fill={colors.success} opacity="0">
                        <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                        ✓ Cross-Platform Ready
                    </text>
                </g>

            </svg>
        </div>
    );
};

export default MobileTestingAnimation;
