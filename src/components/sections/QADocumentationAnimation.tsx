"use client";

import React, { useEffect, useState } from "react";
const QADocumentationAnimation = () => {    // Corporate Color Palette
    const colors = {
        bg: "#f5f3ff",
        primary: "#3b82f6",
        secondary: "#8b5cf6",
        accent: "#22c55e",
        success: "#22c55e",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
    };

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="doc-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="doc-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>

                {/* --- DOCUMENT ICONS --- */}
                <g>
                    {[
                        { x: 60, y: 50, icon: "📋", label: "Test Plan" },
                        { x: 160, y: 50, icon: "📝", label: "Test Cases" },
                        { x: 260, y: 50, icon: "📊", label: "Reports" },
                    ].map((doc, i) => (
                        <g key={i}>
                            <animateTransform attributeName="transform" type="translate" values={`0 0; 0 -5; 0 0`} dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
                            <rect x={doc.x} y={doc.y} width="80" height="50" rx="8" fill="white" filter="url(#doc-shadow)" />
                            <text x={doc.x + 40} y={doc.y + 28} textAnchor="middle" fontSize="18">{doc.icon}</text>
                            <text x={doc.x + 40} y={doc.y + 45} textAnchor="middle" fontSize="8" fill={colors.textSecondary}>{doc.label}</text>
                        </g>
                    ))}
                </g>

                {/* --- MAIN DOCUMENT EDITOR --- */}
                <g>
                    <rect x="50" y="120" width="350" height="260" rx="12" fill="white" filter="url(#doc-shadow)" />
                    <rect x="50" y="120" width="350" height="35" rx="12" fill="url(#doc-gradient)" />
                    <rect x="50" y="140" width="350" height="15" fill="url(#doc-gradient)" />
                    <text x="225" y="143" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">📄 Test Plan Template</text>

                    {/* Document content */}
                    <g>
                        <rect x="65" y="165" width="120" height="20" rx="3" fill="#f0f9ff" />
                        <text x="75" y="179" fontSize="9" fill={colors.textPrimary}>Project: Payments v3</text>

                        <rect x="200" y="165" width="80" height="20" rx="3" fill="#f0fdf4" />
                        <text x="210" y="179" fontSize="9" fill={colors.success}>✓ Active</text>
                    </g>

                    {/* Test case rows */}
                    {[
                        { id: "TC-001", name: "Login Validation", status: "pass" },
                        { id: "TC-002", name: "Payment Flow", status: "pass" },
                        { id: "TC-003", name: "User Profile", status: "review" },
                        { id: "TC-004", name: "Dashboard Load", status: "pass" },
                    ].map((tc, i) => (
                        <g key={tc.id} opacity="0">
                            <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin={`${1 + i * 0.5}s`} fill="freeze" />
                            <rect x="65" y={200 + i * 35} width="320" height="28" rx="4" fill={i % 2 === 0 ? "#f8fafc" : "#faf5ff"} />
                            <text x="80" y={218 + i * 35} fontSize="9" fontWeight="600" fill={colors.primary}>{tc.id}</text>
                            <text x="140" y={218 + i * 35} fontSize="9" fill={colors.textPrimary}>{tc.name}</text>

                            <rect x="310" y={205 + i * 35} width="60" height="18" rx="3" fill={tc.status === "pass" ? colors.success : colors.warning} opacity="0.2" />
                            <text x="340" y={217 + i * 35} textAnchor="middle" fontSize="8" fontWeight="600" fill={tc.status === "pass" ? colors.success : colors.warning}>{tc.status === "pass" ? "PASSED" : "REVIEW"}</text>
                        </g>
                    ))}

                    {/* Version badge */}
                    <g>
                        <rect x="330" y="340" width="55" height="25" rx="5" fill={colors.secondary} />
                        <text x="357" y="357" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">v2.1</text>
                    </g>
                </g>

                {/* --- TRACEABILITY PANEL --- */}
                <g>
                    <rect x="430" y="50" width="330" height="180" rx="10" fill="white" filter="url(#doc-shadow)" />
                    <text x="450" y="78" fontSize="11" fontWeight="700" fill={colors.textPrimary}>🔗 Requirements Traceability</text>

                    {/* Requirement boxes */}
                    <rect x="450" y="95" width="100" height="35" rx="5" fill="#fef3c7" stroke={colors.warning} strokeWidth="1" />
                    <text x="500" y="108" textAnchor="middle" fontSize="8" fill={colors.warning}>REQ-001</text>
                    <text x="500" y="120" textAnchor="middle" fontSize="7" fill={colors.textSecondary}>User Login</text>

                    <rect x="450" y="140" width="100" height="35" rx="5" fill="#fef3c7" stroke={colors.warning} strokeWidth="1" />
                    <text x="500" y="153" textAnchor="middle" fontSize="8" fill={colors.warning}>REQ-002</text>
                    <text x="500" y="165" textAnchor="middle" fontSize="7" fill={colors.textSecondary}>Payment</text>

                    <rect x="450" y="185" width="100" height="35" rx="5" fill="#fef3c7" stroke={colors.warning} strokeWidth="1" />
                    <text x="500" y="198" textAnchor="middle" fontSize="8" fill={colors.warning}>REQ-003</text>
                    <text x="500" y="210" textAnchor="middle" fontSize="7" fill={colors.textSecondary}>Dashboard</text>

                    {/* Test case boxes */}
                    <rect x="640" y="95" width="100" height="35" rx="5" fill="#dbeafe" stroke={colors.primary} strokeWidth="1" />
                    <text x="690" y="108" textAnchor="middle" fontSize="8" fill={colors.primary}>TC-001</text>
                    <text x="690" y="120" textAnchor="middle" fontSize="7" fill={colors.textSecondary}>Login Test</text>

                    <rect x="640" y="140" width="100" height="35" rx="5" fill="#dbeafe" stroke={colors.primary} strokeWidth="1" />
                    <text x="690" y="153" textAnchor="middle" fontSize="8" fill={colors.primary}>TC-002</text>
                    <text x="690" y="165" textAnchor="middle" fontSize="7" fill={colors.textSecondary}>Pay Test</text>

                    <rect x="640" y="185" width="100" height="35" rx="5" fill="#dbeafe" stroke={colors.primary} strokeWidth="1" />
                    <text x="690" y="198" textAnchor="middle" fontSize="8" fill={colors.primary}>TC-004</text>
                    <text x="690" y="210" textAnchor="middle" fontSize="7" fill={colors.textSecondary}>Dashboard</text>

                    {/* Connection lines */}
                    {[0, 1, 2].map((i) => (
                        <line key={i} x1="550" y1={112 + i * 45} x2="640" y2={112 + i * 45} stroke={colors.secondary} strokeWidth="2" strokeDasharray="4 2">
                            <animate attributeName="stroke-dashoffset" values="6; 0" dur="0.5s" repeatCount="indefinite" />
                        </line>
                    ))}
                </g>

                {/* --- REPORT PANEL --- */}
                <g>
                    <rect x="430" y="250" width="330" height="130" rx="10" fill="white" filter="url(#doc-shadow)" />
                    <text x="450" y="278" fontSize="11" fontWeight="700" fill={colors.textPrimary}>📊 Documentation Report</text>

                    {[
                        { label: "Test Plans", value: "12", color: colors.primary },
                        { label: "Test Cases", value: "247", color: colors.success },
                        { label: "Requirements", value: "45", color: colors.secondary },
                    ].map((stat, i) => (
                        <g key={stat.label}>
                            <rect x={450 + i * 105} y="295" width="95" height="70" rx="6" fill="#f8fafc" stroke={stat.color} strokeWidth="2" />
                            <text x={497 + i * 105} y="330" textAnchor="middle" fontSize="18" fontWeight="700" fill={stat.color}>{stat.value}</text>
                            <text x={497 + i * 105} y="355" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>{stat.label}</text>
                        </g>
                    ))}
                </g>

                {/* --- QA PROFESSIONAL --- */}
                <g>
                    <rect x="50" y="410" width="180" height="12" rx="4" fill="#dbeafe" />
                    <ellipse cx="140" cy="403" rx="25" ry="8" fill="#1e40af" />
                    <circle cx="140" cy="387" r="15" fill="#3b82f6" />
                </g>

                {/* --- SUCCESS BADGE --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                    <rect x="280" y="420" width="240" height="50" rx="10" fill={colors.success} filter="url(#doc-shadow)" />
                    <text x="400" y="450" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ Documentation Complete</text>
                </g>

            </svg>
        </div>
    );
};

export default QADocumentationAnimation;
