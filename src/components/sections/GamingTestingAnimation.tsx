"use client";

import React, { useEffect, useState } from "react";
const GamingTestingAnimation = () => {    // Corporate Color Palette - Testriq Brand
    const colors = {
        bg: "#f0f9ff",
        primary: "#25A8E0", // Testriq Brand Blue
        secondary: "#6366f1",
        accent: "#8b5cf6",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        gameBg: "#0f172a",
        deviceBg: "#1e293b",
    };

    // Animation Sequence

    return (
        <div
            className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 overflow-hidden relative shadow-xl border border-sky-200"
            role="img"
            aria-label="Animated illustration showing the gaming app testing process"
        >
            <svg
                viewBox="0 0 800 600"
                className="w-full h-full relative z-10"
                aria-hidden="true"
            >
                <defs>
                    <filter id="gaming-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="gaming-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#25A8E0" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                    <linearGradient id="screen-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                </defs>

                {/* === MAIN GAME SCREEN === */}
                <g>
                    {/* Game Screen Frame */}
                    <rect
                        x="180"
                        y="40"
                        width="440"
                        height="280"
                        rx="12"
                        fill="url(#screen-gradient)"
                        filter="url(#gaming-shadow)"
                    />

                    {/* Screen Header */}
                    <rect x="180" y="40" width="440" height="30" rx="12" fill="#334155" />
                    <rect x="180" y="55" width="440" height="15" fill="#334155" />
                    <circle cx="200" cy="55" r="5" fill={colors.error} />
                    <circle cx="218" cy="55" r="5" fill={colors.warning} />
                    <circle cx="236" cy="55" r="5" fill={colors.success} />
                    <text
                        x="400"
                        y="60"
                        textAnchor="middle"
                        fontSize="10"
                        fill="white"
                        opacity="0.7"
                    >
                        🎮 Game Preview - v2.4.1
                    </text>

                    {/* Game Environment - Simple Platform */}
                    <rect x="200" y="280" width="400" height="20" rx="4" fill="#475569" />
                    <rect x="250" y="240" width="80" height="40" rx="4" fill="#64748b" />
                    <rect x="400" y="220" width="100" height="60" rx="4" fill="#64748b" />

                    {/* Game Character - Simple Player */}
                    <g>
                        <animateTransform attributeName="transform" type="translate" values="0 0; 90 0; 170 -20; 230 0; 0 0" dur="4s" repeatCount="indefinite" />
                        {/* Player Body */}
                        <rect x="220" y="230" width="25" height="35" rx="6" fill={colors.primary} />
                        {/* Player Head */}
                        <circle cx="232" cy="218" r="12" fill={colors.primary} />
                        {/* Player Eyes */}
                        <circle cx="228" cy="216" r="2" fill="white" />
                        <circle cx="236" cy="216" r="2" fill="white" />
                    </g>

                    {/* Collectible Items */}
                    <g>
                        <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" repeatCount="indefinite" />
                        <circle cx="320" cy="200" r="8" fill={colors.warning} />
                        <circle cx="380" cy="180" r="8" fill={colors.warning} />
                        <circle cx="440" cy="200" r="8" fill={colors.warning} />
                    </g>

                    {/* Score Display */}
                    <rect x="540" y="85" width="70" height="25" rx="5" fill="#1e293b" />
                    <text x="575" y="102" textAnchor="middle" fontSize="12" fill={colors.warning} fontWeight="bold">
                        ⭐ 2450
                    </text>
                </g>

                {/* === QA ENGINEER WORKSTATION === */}
                <g>
                    {/* Desk */}
                    <rect x="30" y="260" width="120" height="8" rx="2" fill="#cbd5e1" />
                    {/* Monitor */}
                    <rect x="50" y="200" width="80" height="55" rx="4" fill="#1e293b" />
                    <rect x="55" y="205" width="70" height="40" rx="2" fill="#0f172a" />
                    {/* Monitor Stand */}
                    <rect x="82" y="255" width="16" height="8" fill="#64748b" />
                    {/* Engineer Silhouette */}
                    <ellipse cx="90" cy="290" rx="25" ry="8" fill="#94a3b8" />
                    <rect x="75" y="265" width="30" height="25" rx="8" fill={colors.primary} />
                    <circle cx="90" cy="252" r="14" fill={colors.primary} />
                    {/* Headset */}
                    <path
                        d="M 78 248 Q 90 235 102 248"
                        stroke={colors.secondary}
                        strokeWidth="3"
                        fill="none"
                    />
                </g>

                {/* === GAME CONTROLLER === */}
                <g>
                    {/* Controller Body */}
                    <rect x="650" y="80" width="120" height="70" rx="20" fill="#334155" filter="url(#gaming-shadow)" />
                    {/* D-Pad */}
                    <rect x="665" y="105" width="20" height="8" rx="2" fill="#475569" />
                    <rect x="671" y="99" width="8" height="20" rx="2" fill="#475569" />

                    {/* Action Buttons */}
                    <g>
                        <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" begin="1s" repeatCount="indefinite" />
                        <circle cx="740" cy="100" r="8" fill={colors.success} />
                        <circle cx="755" cy="115" r="8" fill={colors.error} />
                        <circle cx="725" cy="115" r="8" fill={colors.warning} />
                        <circle cx="740" cy="130" r="8" fill={colors.secondary} />
                    </g>

                    {/* Label */}
                    <text x="710" y="165" textAnchor="middle" fontSize="9" fill={colors.textSecondary}>
                        Input Testing
                    </text>
                </g>

                {/* === FPS PERFORMANCE METER === */}
                <g>
                    {/* Meter Background */}
                    <rect x="650" y="200" width="120" height="80" rx="10" fill="white" filter="url(#gaming-shadow)" />
                    <text x="710" y="220" textAnchor="middle" fontSize="10" fontWeight="bold" fill={colors.textPrimary}>
                        Performance
                    </text>

                    {/* FPS Bar */}
                    <rect x="665" y="235" width="90" height="12" rx="4" fill="#e2e8f0" />
                    <rect x="665" y="235" width="0" height="12" rx="4" fill={colors.success}>
                        <animate attributeName="width" values="0; 90" dur="1.5s" begin="2s" fill="freeze" />
                    </rect>

                    {/* FPS Value */}
                    <text x="710" y="263" textAnchor="middle" fontSize="14" fontWeight="bold" fill={colors.success}>
                        60 FPS ✓
                    </text>
                </g>

                {/* === CROSS-DEVICE VIEW === */}
                <g>
                    {/* Mobile Device */}
                    <rect x="120" y="360" width="100" height="180" rx="12" fill="#1e293b" filter="url(#gaming-shadow)" />
                    <rect x="128" y="375" width="84" height="145" rx="4" fill="#0f172a" />
                    <rect x="135" y="385" width="70" height="50" rx="3" fill="#334155" />
                    <text x="170" y="450" textAnchor="middle" fontSize="8" fill="#94a3b8">
                        Mobile
                    </text>

                    {/* Tablet Device */}
                    <rect x="260" y="350" width="180" height="200" rx="14" fill="#1e293b" filter="url(#gaming-shadow)" />
                    <rect x="270" y="362" width="160" height="170" rx="6" fill="#0f172a" />
                    <rect x="280" y="375" width="140" height="80" rx="4" fill="#334155" />
                    <text x="350" y="480" textAnchor="middle" fontSize="9" fill="#94a3b8">
                        Tablet
                    </text>

                    {/* Desktop Device */}
                    <rect x="480" y="340" width="220" height="150" rx="10" fill="#1e293b" filter="url(#gaming-shadow)" />
                    <rect x="488" y="350" width="204" height="125" rx="6" fill="#0f172a" />
                    <rect x="498" y="360" width="184" height="100" rx="4" fill="#334155" />
                    <rect x="560" y="490" width="60" height="15" rx="3" fill="#475569" />
                    <rect x="530" y="505" width="120" height="8" rx="2" fill="#64748b" />
                    <text x="590" y="530" textAnchor="middle" fontSize="9" fill="#94a3b8">
                        Desktop
                    </text>

                    {/* Bug Indicator on Tablet */}
                    <g opacity="0">
                        <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" begin="2s" repeatCount="indefinite" />
                        <circle cx="410" cy="400" r="18" fill={colors.error} opacity="0.2" />
                        <circle cx="410" cy="400" r="12" fill={colors.error} />
                        <text x="410" y="405" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">
                            !
                        </text>
                        <rect x="350" y="425" width="120" height="20" rx="5" fill={colors.error} />
                        <text x="410" y="439" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">
                            ⚠ UI Glitch Found
                        </text>
                    </g>

                    {/* Success Indicators */}
                    <g opacity="0">
                        <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin="5s" fill="freeze" />
                        {/* Mobile Success */}
                        <circle cx="170" cy="420" r="15" fill={colors.success} />
                        <text x="170" y="425" textAnchor="middle" fontSize="14" fill="white">
                            ✓
                        </text>
                        {/* Tablet Success */}
                        <circle cx="350" cy="420" r="15" fill={colors.success} />
                        <text x="350" y="425" textAnchor="middle" fontSize="14" fill="white">
                            ✓
                        </text>
                        {/* Desktop Success */}
                        <circle cx="590" cy="420" r="15" fill={colors.success} />
                        <text x="590" y="425" textAnchor="middle" fontSize="14" fill="white">
                            ✓
                        </text>
                    </g>
                </g>

                {/* === SUCCESS COMPLETION BADGE === */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin="6s" fill="freeze" />
                    <rect
                        x="250"
                        y="560"
                        width="300"
                        height="35"
                        rx="10"
                        fill={colors.success}
                        filter="url(#gaming-shadow)"
                    />
                    <text
                        x="400"
                        y="583"
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="bold"
                        fill="white"
                    >
                        ✓ All Platforms Verified - Ready for Launch!
                    </text>
                </g>

                {/* === TESTING PHASES INDICATOR === */}
                <g>
                    <rect x="30" y="40" width="120" height="140" rx="10" fill="white" filter="url(#gaming-shadow)" />
                    <text x="90" y="60" textAnchor="middle" fontSize="10" fontWeight="bold" fill={colors.textPrimary}>
                        Testing Phase
                    </text>

                    {/* Phase Indicators */}
                    {[
                        { label: "Gameplay", phase: "gameplay" },
                        { label: "Controls", phase: "controlTest" },
                        { label: "Performance", phase: "perfMonitor" },
                        { label: "Cross-Device", phase: "deviceView" },
                    ].map((item, i) => (
                        <g key={item.phase}>
                            <circle cx="50" cy={82 + i * 25} r="6" fill="#e2e8f0">
                                <animate attributeName="fill" values={`#e2e8f0; ${colors.success}`} dur="0.5s" begin={`${i * 1.5 + 1}s`} fill="freeze" />
                            </circle>
                            <text x="62" y={86 + i * 25} fontSize="9" fill={colors.textSecondary}>
                                {item.label}
                            </text>
                        </g>
                    ))}
                </g>
            </svg>
        </div>
    );
};

export default GamingTestingAnimation;
