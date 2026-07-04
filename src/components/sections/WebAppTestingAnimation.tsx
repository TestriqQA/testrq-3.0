"use client";

import React, { useEffect, useState } from "react";
const WebAppTestingAnimation = () => {    // Corporate Color Palette (Web/Browser theme - Blue/Teal/Gray)
    const colors = {
        bg: "#f0f9ff",
        primary: "#2563eb",
        secondary: "#3b82f6",
        accent: "#06b6d4",
        chrome: "#4285f4",
        firefox: "#ff7139",
        safari: "#0fb5ee",
        edge: "#0078d4",
        success: "#10b981",
        error: "#ef4444",
        textPrimary: "#1e3a8a",
        textSecondary: "#64748b",
    };

    // Browser icons positions
    const browsers = [
        { id: "chrome", x: 320, y: 120, color: colors.chrome, label: "Chrome" },
        { id: "firefox", x: 420, y: 120, color: colors.firefox, label: "Firefox" },
        { id: "safari", x: 520, y: 120, color: colors.safari, label: "Safari" },
        { id: "edge", x: 420, y: 190, color: colors.edge, label: "Edge" },
    ];

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 640 480" className="w-full h-full relative z-10">
                <defs>
                    <filter id="web-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="web-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="web-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={colors.primary} />
                        <stop offset="100%" stopColor={colors.secondary} />
                    </linearGradient>
                </defs>

                {/* --- MAIN BROWSER WINDOW --- */}
                <g>
                    {/* Browser chrome */}
                    <rect x="50" y="30" width="240" height="200" rx="10" fill="white" filter="url(#web-shadow)" />
                    <rect x="50" y="30" width="240" height="30" rx="10" fill="url(#web-gradient)" />
                    {/* Traffic lights */}
                    <circle cx="70" cy="45" r="6" fill="#ff6b6b" />
                    <circle cx="90" cy="45" r="6" fill="#ffd93d" />
                    <circle cx="110" cy="45" r="6" fill="#6bcb77" />
                    {/* URL bar */}
                    <rect x="130" y="38" width="140" height="16" rx="4" fill="white" opacity="0.9" />
                    <text x="200" y="50" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>🔒 webapp.test</text>

                    {/* Page content mockup */}
                    <rect x="65" y="75" width="80" height="12" rx="2" fill="#e2e8f0" />
                    <rect x="65" y="95" width="200" height="8" rx="2" fill="#f1f5f9" />
                    <rect x="65" y="110" width="180" height="8" rx="2" fill="#f1f5f9" />
                    <rect x="65" y="125" width="200" height="8" rx="2" fill="#f1f5f9" />
                    {/* Button */}
                    <rect x="65" y="145" width="70" height="22" rx="4" fill={colors.primary} />
                    <text x="100" y="160" textAnchor="middle" fontSize="8" fill="white">Submit</text>
                    {/* Form field */}
                    <rect x="150" y="145" width="100" height="22" rx="4" fill="#f1f5f9" stroke="#e2e8f0" />
                    <text x="200" y="159" textAnchor="middle" fontSize="7" fill={colors.textSecondary}>Email input</text>
                </g>

                {/* --- CROSS-BROWSER VIEW --- */}
                {browsers.map((browser, i) => (
                    <g key={browser.id}>
                        <circle cx={browser.x} cy={browser.y} r="28" fill="white" filter="url(#web-shadow)" />
                        <circle cx={browser.x} cy={browser.y} r="20" fill={browser.color} />
                        <text x={browser.x} y={browser.y + 4} textAnchor="middle" fontSize="14" fill="white">
                            {browser.id === "chrome" ? "G" : browser.id === "firefox" ? "🦊" : browser.id === "safari" ? "◎" : "E"}
                        </text>
                        <text x={browser.x} y={browser.y + 45} textAnchor="middle" fontSize="9" fontWeight="500" fill={colors.textPrimary}>{browser.label}</text>

                        {/* Check marks appear on browsers */}
                        <g opacity="0">
                            <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin={`${1 + i * 0.5}s`} fill="freeze" />
                            {browser.id === "safari" ? (
                                <>
                                    <circle cx={browser.x + 20} cy={browser.y - 20} r="10" fill={colors.error}>
                                        <animate attributeName="fill" values={`${colors.error}; ${colors.error}; ${colors.success}; ${colors.success}`} dur="8s" repeatCount="indefinite" />
                                    </circle>
                                    <text x={browser.x + 20} y={browser.y - 16} textAnchor="middle" fontSize="10" fill="white">
                                        <animate attributeName="opacity" values="1; 1; 0; 0" dur="8s" repeatCount="indefinite" />
                                        !
                                    </text>
                                    <text x={browser.x + 20} y={browser.y - 16} textAnchor="middle" fontSize="10" fill="white" opacity="0">
                                        <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                                        ✓
                                    </text>
                                </>
                            ) : (
                                <>
                                    <circle cx={browser.x + 20} cy={browser.y - 20} r="10" fill={colors.success} />
                                    <text x={browser.x + 20} y={browser.y - 16} textAnchor="middle" fontSize="10" fill="white">✓</text>
                                </>
                            )}
                        </g>
                    </g>
                ))}

                {/* --- FUNCTIONAL FLOW INDICATORS --- */}
                <g>
                    {/* Click indicator on button */}
                    <circle cx="100" cy="156" r="15" fill="none" stroke={colors.accent} strokeWidth="2">
                        <animate attributeName="r" values="15; 25; 15" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1; 0; 1" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <text x="170" y="180" fontSize="9" fill={colors.accent}>🖱️ Click Flow Testing</text>
                </g>

                {/* --- PERFORMANCE METER --- */}
                <g>
                    <rect x="320" y="260" width="160" height="80" rx="10" fill="white" filter="url(#web-shadow)" />
                    <text x="400" y="285" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>⚡ Performance</text>

                    {/* Speed meter arc */}
                    <path d="M 360 330 A 40 40 0 0 1 440 330" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 360 330 A 40 40 0 0 1 440 330" fill="none" stroke={colors.success} strokeWidth="8" strokeLinecap="round" strokeDasharray="125" strokeDashoffset="125">
                        <animate attributeName="stroke-dashoffset" values="125; 20" dur="2s" begin="2s" fill="freeze" />
                    </path>
                    <text x="400" y="325" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.success}>
                        <animate attributeName="opacity" values="0; 1" dur="0.5s" begin="4s" fill="freeze" />
                        85ms
                    </text>
                </g>

                {/* --- DEFECT INDICATOR --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="8s" repeatCount="indefinite" />
                    <circle cx="520" cy="120" r="12" fill={colors.error} />
                    <text x="520" y="125" textAnchor="middle" fontSize="12" fill="white">!</text>
                    <rect x="490" y="140" width="80" height="24" rx="4" fill={colors.error} />
                    <text x="530" y="156" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">Safari Issue</text>
                </g>

                {/* --- RETEST SUCCESS --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                    <circle cx="520" cy="120" r="12" fill={colors.success} />
                    <text x="520" y="125" textAnchor="middle" fontSize="10" fill="white">✓</text>
                    <rect x="485" y="140" width="90" height="24" rx="4" fill={colors.success} />
                    <text x="530" y="156" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">Fixed & Verified</text>
                </g>

                {/* --- QA ENGINEER --- */}
                <g>
                    {/* Desk */}
                    <rect x="30" y="420" width="580" height="12" rx="4" fill="#dbeafe" />
                    {/* Engineer Body */}
                    <ellipse cx="100" cy="410" rx="25" ry="8" fill={colors.primary} />
                    <circle cx="100" cy="390" r="16" fill={colors.secondary} />
                    {/* Laptop */}
                    <rect x="75" y="395" width="50" height="30" rx="4" fill="#334155" />
                    <rect x="78" y="398" width="44" height="24" rx="2" fill={colors.accent} opacity="0.3" />
                </g>

                {/* --- TEST RESULTS PANEL --- */}
                <g>
                    <rect x="50" y="255" width="140" height="100" rx="8" fill="white" filter="url(#web-shadow)" />
                    <text x="120" y="280" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Test Coverage</text>

                    {[
                        { y: 295, label: "Functional", w: 110, color: colors.primary },
                        { y: 315, label: "UI/UX", w: 100, color: colors.accent },
                        { y: 335, label: "Security", w: 95, color: colors.success },
                    ].map((bar, i) => (
                        <React.Fragment key={`bar-${i}`}>
                            <text x="60" y={bar.y + 4} fontSize="8" fill={colors.textSecondary}>{bar.label}</text>
                            <rect x="60" y={bar.y + 8} width="115" height="6" rx="3" fill="#e2e8f0" />
                            <rect x="60" y={bar.y + 8} width="0" height="6" rx="3" fill={bar.color}>
                                <animate attributeName="width" values={`0; ${bar.w}`} dur="1.5s" begin={`${1 + i * 0.4}s`} fill="freeze" />
                            </rect>
                        </React.Fragment>
                    ))}
                </g>

                {/* --- UI CONSISTENCY BADGE --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin="3.5s" fill="freeze" />
                    <rect x="50" y="185" width="110" height="28" rx="6" fill={colors.accent} />
                    <text x="105" y="204" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">✓ UI Consistent</text>
                </g>

                {/* --- SUCCESS BANNER --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                    <rect x="200" y="370" width="240" height="40" rx="10" fill={colors.success} filter="url(#web-shadow)" />
                    <text x="320" y="396" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">✓ Web App Fully Validated</text>
                </g>

                {/* --- LIVE INDICATOR --- */}
                <g>
                    <rect x="510" y="260" width="90" height="24" rx="12" fill={colors.primary} />
                    <circle cx="525" cy="272" r="5" fill="white">
                        <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x="565" y="277" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">TESTING</text>
                </g>

            </svg>
        </div>
    );
};

export default WebAppTestingAnimation;
