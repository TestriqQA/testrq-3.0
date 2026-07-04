"use client";

import React, { useEffect, useState } from "react";
const RegressionTestingAnimation = () => {    // Corporate Color Palette
    const colors = {
        bg: "#f0fdf4",
        primary: "#22c55e",
        secondary: "#14b8a6",
        accent: "#3b82f6",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
    };

    // Test modules
    const testModules = [
        { name: "Login Module", tests: 45, status: "pass" },
        { name: "User Profile", tests: 32, status: "pass" },
        { name: "Payment Flow", tests: 28, status: "fail" },
        { name: "Dashboard", tests: 56, status: "pass" },
        { name: "Reports", tests: 41, status: "pass" },
    ];

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 overflow-hidden relative shadow-xl border border-green-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="reg-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="green-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                </defs>

                {/* --- APPLICATION BASELINE --- */}
                <g>
                    <rect x="50" y="40" width="320" height="200" rx="12" fill="white" filter="url(#reg-shadow)" />
                    <rect x="50" y="40" width="320" height="35" rx="12" fill="url(#green-gradient)" />
                    <rect x="50" y="60" width="320" height="15" fill="url(#green-gradient)" />
                    <text x="210" y="63" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">📱 Application v2.4.1</text>

                    {/* App components */}
                    <rect x="65" y="90" width="90" height="60" rx="6" fill="#f0fdf4" stroke={colors.primary} strokeWidth="1" />
                    <text x="110" y="125" textAnchor="middle" fontSize="9" fill={colors.textPrimary}>Header</text>

                    <rect x="165" y="90" width="90" height="60" rx="6" fill="#f0fdf4" stroke={colors.primary} strokeWidth="1" />
                    <text x="210" y="125" textAnchor="middle" fontSize="9" fill={colors.textPrimary}>Navigation</text>

                    <rect x="265" y="90" width="90" height="60" rx="6" fill="#f0fdf4" stroke={colors.primary} strokeWidth="1" />
                    <text x="310" y="125" textAnchor="middle" fontSize="9" fill={colors.textPrimary}>Content</text>

                    <rect x="65" y="160" width="140" height="60" rx="6" fill="#f0fdf4" stroke={colors.primary} strokeWidth="1" />
                    <text x="135" y="195" textAnchor="middle" fontSize="9" fill={colors.textPrimary}>Data Grid</text>

                    <rect x="215" y="160" width="140" height="60" rx="6" fill="#f0fdf4" stroke={colors.primary} strokeWidth="1" />
                    <text x="285" y="195" textAnchor="middle" fontSize="9" fill={colors.textPrimary}>Actions</text>
                </g>

                {/* --- NEW CHANGE INDICATOR --- */}
                <g>
                    <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" repeatCount="indefinite" />
                    <rect x="265" y="160" width="90" height="60" rx="6" fill="#fef9c3" stroke={colors.warning} strokeWidth="2" />
                    <text x="310" y="185" textAnchor="middle" fontSize="9" fontWeight="600" fill={colors.warning}>NEW</text>
                    <text x="310" y="200" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>Feature</text>

                    <circle cx="355" cy="160" r="12" fill={colors.warning} />
                    <text x="355" y="164" textAnchor="middle" fontSize="8" fontWeight="700" fill="white">!</text>
                </g>

                {/* --- TEST MODULES PANEL --- */}
                <g>
                    <rect x="430" y="40" width="330" height="270" rx="12" fill="white" filter="url(#reg-shadow)" />
                    <rect x="430" y="40" width="330" height="35" rx="12" fill="#0f172a" />
                    <rect x="430" y="60" width="330" height="15" fill="#0f172a" />
                    <text x="595" y="63" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">🔄 Regression Suite</text>

                    {testModules.map((mod, i) => (
                        <g key={mod.name}>
                            <rect x="445" y={90 + i * 42} width="300" height="35" rx="5" fill={i % 2 === 0 ? "#f0fdf4" : "#f0fdfa"} />
                            <text x="460" y={112 + i * 42} fontSize="11" fontWeight="500" fill={colors.textPrimary}>{mod.name}</text>
                            <text x="580" y={112 + i * 42} fontSize="9" fill={colors.textSecondary}>{mod.tests} tests</text>

                            {/* Progress bar */}
                            <rect x="630" y={98 + i * 42} width="60" height="8" rx="2" fill="#e2e8f0" />
                            <rect x="630" y={98 + i * 42} width="0" height="8" rx="2" fill={mod.status === "pass" ? colors.success : colors.error}>
                                <animate attributeName="width" values={mod.status === "pass" ? "0; 60" : "0; 30; 30; 60"} dur={mod.status === "pass" ? "1.5s" : "8s"} begin={`${1 + i * 0.3}s`} repeatCount={mod.status === "pass" ? "1" : "indefinite"} fill="freeze" />
                                {mod.status === "fail" && (
                                    <animate attributeName="fill" values={`${colors.error}; ${colors.error}; ${colors.success}; ${colors.success}`} dur="8s" repeatCount="indefinite" />
                                )}
                            </rect>

                            {/* Status indicator */}
                            <g opacity="0">
                                {mod.status === "pass" ? (
                                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin={`${2.5 + i * 0.3}s`} fill="freeze" />
                                ) : (
                                    <animate attributeName="opacity" values="0; 1; 1; 1; 1" dur="8s" repeatCount="indefinite" />
                                )}
                                
                                {mod.status === "pass" ? (
                                    <>
                                        <circle cx="720" cy={107 + i * 42} r="10" fill={colors.success} />
                                        <text x="720" y={111 + i * 42} textAnchor="middle" fontSize="9" fill="white">✓</text>
                                    </>
                                ) : (
                                    <>
                                        <circle cx="720" cy={107 + i * 42} r="10" fill={colors.error}>
                                            <animate attributeName="fill" values={`${colors.error}; ${colors.error}; ${colors.success}; ${colors.success}`} dur="8s" repeatCount="indefinite" />
                                        </circle>
                                        <text x="720" y="111 + i * 42" textAnchor="middle" fontSize="9" fill="white">
                                            <animate attributeName="opacity" values="1; 1; 0; 0" dur="8s" repeatCount="indefinite" />
                                            ✗
                                        </text>
                                        <text x="720" y="111 + i * 42" textAnchor="middle" fontSize="9" fill="white" opacity="0">
                                            <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                                            ✓
                                        </text>
                                    </>
                                )}
                            </g>
                        </g>
                    ))}
                </g>

                {/* --- STATUS SUMMARY --- */}
                <g>
                    <rect x="50" y="330" width="710" height="130" rx="12" fill="white" filter="url(#reg-shadow)" />
                    <text x="70" y="358" fontSize="12" fontWeight="700" fill={colors.textPrimary}>Regression Summary</text>

                    {/* Stats boxes */}
                    {[
                        { label: "Total Tests", value: "1,247", color: colors.primary },
                        { label: "Passed", value: "1,231", color: colors.success },
                        { label: "Failed", value: "16", color: colors.error },
                        { label: "Coverage", value: "91%", color: colors.accent },
                    ].map((stat, i) => (
                        <g key={stat.label}>
                            <rect x={80 + i * 175} y="375" width="150" height="65" rx="8" fill="#f8fafc" stroke={stat.color} strokeWidth="2" />
                            
                            {stat.label === "Failed" ? (
                                <>
                                    <text x={155 + i * 175} y="415" textAnchor="middle" fontSize="18" fontWeight="700" fill={stat.color}>
                                        <animate attributeName="opacity" values="1; 1; 0; 0" dur="8s" repeatCount="indefinite" />
                                        16
                                    </text>
                                    <text x={155 + i * 175} y="415" textAnchor="middle" fontSize="18" fontWeight="700" fill={colors.success} opacity="0">
                                        <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                                        0
                                    </text>
                                </>
                            ) : stat.label === "Passed" ? (
                                <>
                                    <text x={155 + i * 175} y="415" textAnchor="middle" fontSize="18" fontWeight="700" fill={stat.color}>
                                        <animate attributeName="opacity" values="1; 1; 0; 0" dur="8s" repeatCount="indefinite" />
                                        1,231
                                    </text>
                                    <text x={155 + i * 175} y="415" textAnchor="middle" fontSize="18" fontWeight="700" fill={stat.color} opacity="0">
                                        <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                                        1,247
                                    </text>
                                </>
                            ) : (
                                <text x={155 + i * 175} y="415" textAnchor="middle" fontSize="18" fontWeight="700" fill={stat.color}>{stat.value}</text>
                            )}
                            
                            <text x={155 + i * 175} y="432" textAnchor="middle" fontSize="10" fill={colors.textSecondary}>{stat.label}</text>
                        </g>
                    ))}
                </g>

                {/* --- QA ENGINEER --- */}
                <g>
                    <rect x="50" y="275" width="180" height="12" rx="4" fill="#dcfce7" />
                    <ellipse cx="140" cy="268" rx="25" ry="8" fill="#15803d" />
                    <circle cx="140" cy="252" r="15" fill="#22c55e" />
                </g>

                {/* --- REGRESSION FAILURE ALERT --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="8s" repeatCount="indefinite" />
                    <rect x="250" y="255" width="200" height="45" rx="8" fill={colors.error} />
                    <text x="350" y="275" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">⚠ Regression Detected</text>
                    <text x="350" y="290" textAnchor="middle" fontSize="9" fill="white" opacity="0.9">Payment Flow: 16 failures</text>
                </g>

                {/* --- SUCCESS BADGE --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                    <rect x="270" y="255" width="260" height="50" rx="10" fill={colors.success} filter="url(#reg-shadow)" />
                    <text x="400" y="285" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ All Regressions Resolved</text>
                </g>

            </svg>
        </div>
    );
};

export default RegressionTestingAnimation;
