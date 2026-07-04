"use client";

import React, { useEffect, useState } from "react";
const BankingTestingAnimation = () => {    // Corporate Color Palette (Banking - Navy/Blue/Green for trust and security)
    const colors = {
        bg: "#eff6ff",
        navy: "#1e3a5f",
        primary: "#0369a1",
        secondary: "#0284c7",
        accent: "#38bdf8",
        gold: "#f59e0b",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#0c4a6e",
        textSecondary: "#64748b",
        security: "#0891b2",
    };

    // Bank accounts for transaction flow
    const accounts = [
        { id: "a1", x: 120, y: 180, label: "Account A", balance: "$50,000" },
        { id: "a2", x: 520, y: 180, label: "Account B", balance: "$25,000" },
    ];

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-blue-100 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 640 480" className="w-full h-full relative z-10">
                <defs>
                    <filter id="bank-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="bank-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="bank-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={colors.navy} />
                        <stop offset="100%" stopColor={colors.primary} />
                    </linearGradient>
                </defs>

                {/* --- DASHBOARD HEADER --- */}
                <g>
                    {/* Header bar */}
                    <rect x="50" y="25" width="540" height="45" rx="8" fill="url(#bank-gradient)" filter="url(#bank-shadow)" />
                    <text x="80" y="53" fontSize="14" fontWeight="700" fill="white">🏦 Core Banking System</text>

                    {/* Status indicator */}
                    <circle cx="530" cy="47" r="8" fill={colors.success}>
                        <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x="545" y="52" fontSize="10" fill="white">Online</text>
                </g>

                {/* --- ACCOUNT CARDS --- */}
                {accounts.map((account, i) => (
                    <g key={account.id}>
                        <rect
                            x={account.x - 60}
                            y={account.y - 45}
                            width="120"
                            height="90"
                            rx="12"
                            fill="white"
                            stroke={colors.primary}
                            strokeWidth="2"
                            filter="url(#bank-shadow)"
                        />
                        <text x={account.x} y={account.y - 20} textAnchor="middle" fontSize="11" fontWeight="600" fill={colors.textPrimary}>{account.label}</text>
                        <text x={account.x} y={account.y + 5} textAnchor="middle" fontSize="16" fontWeight="700" fill={colors.navy}>{account.balance}</text>
                        <text x={account.x} y={account.y + 25} textAnchor="middle" fontSize="9" fill={colors.textSecondary}>Active • Verified</text>
                    </g>
                ))}

                {/* --- TRANSACTION ARROW --- */}
                <g>
                    <line x1="190" y1="180" x2="450" y2="180" stroke={colors.accent} strokeWidth="3" strokeDasharray="8 4" />
                    <polygon points="450,175 465,180 450,185" fill={colors.accent} />
                    <text x="320" y="170" textAnchor="middle" fontSize="11" fontWeight="600" fill={colors.primary}>Transfer: $5,000</text>
                </g>

                {/* --- MONEY PACKET ANIMATION --- */}
                <g>
                    <animateTransform attributeName="transform" type="translate" values="210 180; 430 180; 210 180" dur="2.5s" repeatCount="indefinite" />
                    <circle r="15" fill={colors.gold} filter="url(#bank-glow)" />
                    <text fontSize="12" fill="white" fontWeight="700" textAnchor="middle" dy="4">
                        $
                    </text>
                </g>

                {/* --- VALIDATION CHECKMARKS --- */}
                {accounts.map((account, i) => (
                    <g key={`check-${account.id}`} opacity="0">
                        <animate attributeName="opacity" values="0; 1; 1" dur="2s" begin={`${1 + i * 0.5}s`} repeatCount="indefinite" />
                        <circle
                            cx={account.x + 45}
                            cy={account.y - 35}
                            r="12"
                            fill={colors.success}
                            stroke="white"
                            strokeWidth="2"
                        />
                        <text x={account.x + 45} y={account.y - 31} textAnchor="middle" fontSize="12" fill="white">✓</text>
                    </g>
                ))}

                {/* --- SECURITY SHIELD SCAN --- */}
                <g>
                    <animate attributeName="opacity" values="0.6; 1; 0.6" dur="2s" repeatCount="indefinite" />
                    <rect x="260" y="260" width="120" height="50" rx="8" fill={colors.security} filter="url(#bank-shadow)" />
                    <text x="320" y="290" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">🛡️ Security Scan</text>
                </g>

                {/* --- FRAUD ALERT --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" begin="3s" repeatCount="indefinite" />
                    <rect x="400" y="260" width="160" height="40" rx="8" fill={colors.error} />
                    <text x="480" y="285" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">⚠️ Suspicious Activity</text>
                </g>

                {/* --- DEFECT LOG PANEL --- */}
                <g>
                    <rect x="450" y="330" width="150" height="90" rx="8" fill="white" filter="url(#bank-shadow)" />
                    <text x="525" y="355" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Issue Log</text>
                    <text x="460" y="375" fontSize="9" fill={colors.error}>• Unauthorized attempt</text>
                    <text x="460" y="390" fontSize="9" fill={colors.textSecondary}>IP: 192.168.x.x</text>
                    <text x="460" y="405" fontSize="9" fill={colors.warning}>Status: Investigating</text>
                </g>

                {/* --- QA ENGINEER --- */}
                <g>
                    {/* Desk */}
                    <rect x="30" y="420" width="580" height="12" rx="4" fill="#dbeafe" />
                    {/* Engineer Body */}
                    <ellipse cx="100" cy="410" rx="25" ry="8" fill={colors.navy} />
                    <circle cx="100" cy="390" r="16" fill={colors.primary} />
                    {/* Laptop */}
                    <rect x="75" y="395" width="50" height="30" rx="4" fill="#334155" />
                    <rect x="78" y="398" width="44" height="24" rx="2" fill={colors.accent} opacity="0.3" />
                </g>

                {/* --- TEST RESULTS PANEL --- */}
                <g>
                    <rect x="50" y="320" width="140" height="95" rx="8" fill="white" filter="url(#bank-shadow)" />
                    <text x="120" y="345" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Compliance Check</text>

                    {[
                        { y: 360, label: "PCI DSS", w: 100, color: colors.success },
                        { y: 380, label: "SOX", w: 95, color: colors.success },
                        { y: 400, label: "GDPR", w: 90, color: colors.success },
                    ].map((bar, i) => (
                        <React.Fragment key={`bar-${i}`}>
                            <text x="60" y={bar.y + 4} fontSize="8" fill={colors.textSecondary}>{bar.label}</text>
                            <rect x="60" y={bar.y + 8} width="115" height="6" rx="3" fill="#e2e8f0" />
                            <rect x="60" y={bar.y + 8} width="0" height="6" rx="3" fill={bar.color}>
                                <animate attributeName="width" values={`0; ${bar.w}`} dur="1s" begin={`${i * 0.3}s`} fill="freeze" />
                            </rect>
                        </React.Fragment>
                    ))}
                </g>

                {/* --- SUCCESS BANNER --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1" dur="1.5s" begin="2s" fill="freeze" />
                    <rect x="170" y="85" width="300" height="40" rx="10" fill={colors.success} filter="url(#bank-shadow)" />
                    <text x="320" y="111" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">✓ Banking System Secured</text>
                </g>

                {/* --- LIVE INDICATOR --- */}
                <g>
                    <rect x="500" y="85" width="90" height="24" rx="12" fill={colors.navy} />
                    <circle cx="515" cy="97" r="5" fill={colors.success}>
                        <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x="555" y="102" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">MONITORING</text>
                </g>

            </svg>
        </div>
    );
};

export default BankingTestingAnimation;
