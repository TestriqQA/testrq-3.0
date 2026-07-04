"use client";

import React, { useEffect, useState } from "react";
const AutomationTestingAnimation = () => {    // Corporate Color Palette
    const colors = {
        bg: "#f5f3ff",
        primary: "#7c3aed",
        secondary: "#6366f1",
        accent: "#4f46e5",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        codeBg: "#1e1b4b",
    };

    // Test cases
    const testCases = [
        { id: 1, name: "Login Flow", status: "pass" },
        { id: 2, name: "User Profile", status: "pass" },
        { id: 3, name: "Checkout", status: "fail" },
        { id: 4, name: "Payment", status: "pass" },
        { id: 5, name: "Dashboard", status: "pass" },
    ];

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 overflow-hidden relative shadow-xl border border-purple-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="auto-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="purple-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                </defs>

                {/* --- CODE EDITOR --- */}
                <g>
                    <rect x="50" y="50" width="300" height="280" rx="10" fill={colors.codeBg} filter="url(#auto-shadow)" />

                    {/* Editor Header */}
                    <rect x="50" y="50" width="300" height="30" rx="10" fill="#312e81" />
                    <rect x="50" y="65" width="300" height="15" fill="#312e81" />
                    <circle cx="70" cy="65" r="5" fill="#ef4444" />
                    <circle cx="88" cy="65" r="5" fill="#f59e0b" />
                    <circle cx="106" cy="65" r="5" fill="#22c55e" />
                    <text x="200" y="70" textAnchor="middle" fontSize="10" fill="white" opacity="0.7">test_automation.js</text>

                    {/* Code Lines */}
                    {[
                        { text: "describe('Login Tests', () => {", color: "#c084fc" },
                        { text: "  it('should login', () => {", color: "#60a5fa" },
                        { text: "    cy.visit('/login');", color: "#4ade80" },
                        { text: "    cy.get('#email').type(..);", color: "#4ade80" },
                        { text: "    cy.get('#submit').click();", color: "#4ade80" },
                        { text: "    expect(result).toBe(true);", color: "#fbbf24" },
                        { text: "  });", color: "#60a5fa" },
                        { text: "});", color: "#c084fc" },
                    ].map((line, i) => (
                        <text key={`code-${i}`} x="65" y={105 + i * 25} fontSize="11" fontFamily="monospace" fill={line.color} opacity="0">
                            {line.text}
                            <animate attributeName="opacity" values="0; 1" dur="0.1s" begin={`${i * 0.3}s`} fill="freeze" />
                        </text>
                    ))}

                    {/* Play Button */}
                    <g>
                        <circle cx="320" cy="310" r="15" fill={colors.success} />
                        <polygon points="315,303 315,317 328,310" fill="white" />
                    </g>
                </g>

                {/* --- TEST RUNNER PANEL --- */}
                <g>
                    <rect x="380" y="50" width="380" height="280" rx="10" fill="white" filter="url(#auto-shadow)" />

                    {/* Panel Header */}
                    <rect x="380" y="50" width="380" height="35" rx="10" fill="url(#purple-gradient)" />
                    <rect x="380" y="70" width="380" height="15" fill="url(#purple-gradient)" />
                    <text x="570" y="73" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">🚀 Test Runner</text>

                    {/* Test Cases */}
                    {testCases.map((test, i) => (
                        <g key={test.id}>
                            <rect x="395" y={100 + i * 40} width="350" height="32" rx="5" fill={i % 2 === 0 ? "#f5f3ff" : "#faf5ff"} />
                            <text x="420" y={120 + i * 40} fontSize="11" fontWeight="500" fill={colors.textPrimary}>{test.name}</text>

                            {/* Status Indicator */}
                            <circle cx="720" cy={116 + i * 40} r="10" fill={test.status === "pass" ? colors.success : colors.error} opacity="0">
                                <animate attributeName="opacity" values="0; 1" dur="0.2s" begin={`${3 + i * 0.5}s`} fill="freeze" />
                            </circle>
                            <text x="720" y={120 + i * 40} textAnchor="middle" fontSize="10" fill="white" opacity="0">
                                {test.status === "pass" ? "✓" : "✗"}
                                <animate attributeName="opacity" values="0; 1" dur="0.2s" begin={`${3 + i * 0.5}s`} fill="freeze" />
                            </text>

                            {/* Progress bar for each test */}
                            <rect x="520" y={110 + i * 40} width="0" height="12" rx="3" fill={test.status === "pass" ? colors.success : colors.error} opacity="0.6">
                                <animate attributeName="width" values="0; 150" dur="0.5s" begin={`${2.5 + i * 0.5}s`} fill="freeze" />
                            </rect>
                        </g>
                    ))}

                    {/* Summary */}
                    <g>
                        <text x="400" y="315" fontSize="10" fill={colors.textSecondary}>Tests: 5 | Passed: 4 | Failed: 1</text>
                    </g>
                </g>

                {/* --- CI/CD PIPELINE --- */}
                <g>
                    <rect x="50" y="360" width="710" height="90" rx="10" fill="white" filter="url(#auto-shadow)" />
                    <text x="70" y="385" fontSize="12" fontWeight="700" fill={colors.textPrimary}>CI/CD Pipeline</text>

                    {/* Pipeline Stages */}
                    {["Build", "Test", "Deploy"].map((stage, i) => (
                        <g key={stage}>
                            <rect x={90 + i * 240} y="400" width="180" height="35" rx="6" fill={colors.primary} opacity="0.2" />
                            <text x={180 + i * 240} y={422} textAnchor="middle" fontSize="11" fontWeight="600" fill={colors.primary}>{stage}</text>

                            {/* Arrow between stages */}
                            {i < 2 && (
                                <path d={`M ${275 + i * 240} 418 L ${290 + i * 240} 418`} stroke={colors.primary} strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                            )}
                        </g>
                    ))}
                </g>

                {/* --- QA ENGINEER --- */}
                <g>
                    <rect x="50" y="470" width="200" height="12" rx="4" fill="#ddd6fe" />
                    <ellipse cx="150" cy="462" rx="25" ry="8" fill="#7c3aed" />
                    <circle cx="150" cy="445" r="15" fill="#8b5cf6" />
                </g>

                {/* --- FAILURE ALERT --- */}
                <g opacity="0">
                    <rect x="450" y="340" width="160" height="35" rx="8" fill={colors.error} />
                    <text x="530" y="362" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ Checkout Failed</text>
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="2s" begin="4.5s" repeatCount="indefinite" />
                </g>

                {/* --- SUCCESS BADGE --- */}
                <g opacity="0">
                    <rect x="500" y="340" width="240" height="50" rx="10" fill={colors.success} filter="url(#auto-shadow)" />
                    <text x="620" y="370" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ All Tests Passing</text>
                    <animate attributeName="opacity" values="0; 1" dur="0.5s" begin="6s" fill="freeze" />
                </g>

            </svg>
        </div>
    );
};

export default AutomationTestingAnimation;
