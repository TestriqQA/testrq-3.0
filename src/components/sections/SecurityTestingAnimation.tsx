"use client";

import React, { useEffect, useState } from "react";
const SecurityTestingAnimation = () => {    // Corporate Color Palette
    const colors = {
        bg: "#fef2f2",
        primary: "#ef4444",
        secondary: "#ec4899",
        accent: "#8b5cf6",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
    };

    // Threat types
    const threats = [
        { name: "SQL Injection", severity: "Critical", blocked: true },
        { name: "XSS Attack", severity: "High", blocked: true },
        { name: "CSRF Token", severity: "Medium", blocked: false },
        { name: "Auth Bypass", severity: "Critical", blocked: true },
    ];

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 overflow-hidden relative shadow-xl border border-red-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="sec-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="red-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                </defs>

                {/* --- PROTECTED SYSTEM --- */}
                <g>
                    <rect x="300" y="80" width="200" height="160" rx="12" fill="white" filter="url(#sec-shadow)" />
                    <rect x="300" y="80" width="200" height="35" rx="12" fill="url(#red-gradient)" />
                    <rect x="300" y="100" width="200" height="15" fill="url(#red-gradient)" />
                    <text x="400" y="103" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">🔒 Protected System</text>

                    {/* System components */}
                    <rect x="315" y="130" width="80" height="45" rx="5" fill="#fef2f2" stroke={colors.primary} strokeWidth="1" />
                    <text x="355" y="150" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>Database</text>
                    <text x="355" y="165" textAnchor="middle" fontSize="10" fill={colors.primary}>🗄️</text>

                    <rect x="405" y="130" width="80" height="45" rx="5" fill="#fef2f2" stroke={colors.primary} strokeWidth="1" />
                    <text x="445" y="150" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>API Layer</text>
                    <text x="445" y="165" textAnchor="middle" fontSize="10" fill={colors.primary}>🔗</text>

                    <rect x="315" y="185" width="170" height="40" rx="5" fill="#fef2f2" stroke={colors.primary} strokeWidth="1" />
                    <text x="400" y="205" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>Application Core</text>
                    <text x="400" y="218" textAnchor="middle" fontSize="10" fill={colors.primary}>⚙️</text>
                </g>

                {/* --- SHIELD --- */}
                <g>
                    <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur="2s" repeatCount="indefinite" />
                    <path d="M400 50 L440 65 L440 100 C440 130 420 150 400 160 C380 150 360 130 360 100 L360 65 Z" fill="url(#red-gradient)" stroke="white" strokeWidth="2" filter="url(#sec-shadow)" />
                    <text x="400" y="115" textAnchor="middle" fontSize="20" fill="white">🛡️</text>
                </g>

                {/* --- INCOMING THREATS --- */}
                <g>
                    {[
                        { x: 50, y: 100, delay: 0 },
                        { x: 80, y: 150, delay: 0.2 },
                        { x: 50, y: 200, delay: 0.4 },
                    ].map((threat, i) => (
                        <g key={i}>
                            <animateTransform attributeName="transform" type="translate" values="0 0; 20 0; 0 0" dur="2s" begin={`${threat.delay}s`} repeatCount="indefinite" />
                            <circle cx={threat.x} cy={threat.y} r="15" fill={colors.error} opacity="0.8" />
                            <text x={threat.x} y={threat.y + 4} textAnchor="middle" fontSize="12" fill="white">⚡</text>
                            <line x1={threat.x + 15} y1={threat.y} x2={threat.x + 100} y2={threat.y} stroke={colors.error} strokeWidth="2" strokeDasharray="4 2">
                                <animate attributeName="stroke-dashoffset" values="10; 0" dur="0.5s" repeatCount="indefinite" />
                            </line>
                        </g>
                    ))}
                    <text x="80" y="250" textAnchor="middle" fontSize="10" fill={colors.error}>Threat Vectors</text>
                </g>

                {/* --- SCANNER GRID --- */}
                <g>
                    <animate attributeName="opacity" values="0.1; 0.5; 0.1" dur="2s" repeatCount="indefinite" />
                    <rect x="300" y="80" width="10" height="160" fill={colors.primary} opacity="0.3">
                        <animate attributeName="x" values="300; 490; 300" dur="3s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* --- THREAT PANEL --- */}
                <g>
                    <rect x="550" y="80" width="210" height="180" rx="10" fill="white" filter="url(#sec-shadow)" />
                    <text x="570" y="105" fontSize="11" fontWeight="700" fill={colors.textPrimary}>🔍 Threat Detection</text>

                    {threats.map((threat, i) => (
                        <g key={threat.name} opacity="0">
                            <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin={`${1 + i * 0.5}s`} fill="freeze" />
                            <rect x="560" y={118 + i * 35} width="190" height="28" rx="4" fill={i % 2 === 0 ? "#fef2f2" : "#fdf2f8"} />
                            <text x="575" y={136 + i * 35} fontSize="9" fontWeight="500" fill={colors.textPrimary}>{threat.name}</text>

                            <rect x="680" y={123 + i * 35} width="55" height="18" rx="3" fill={threat.blocked ? colors.success : colors.warning} opacity="0.2" />
                            <text x="707" y={135 + i * 35} textAnchor="middle" fontSize="7" fontWeight="600" fill={threat.blocked ? colors.success : colors.warning}>
                                {!threat.blocked ? (
                                    <>
                                        <animate attributeName="opacity" values="1; 1; 0; 0" dur="8s" repeatCount="indefinite" />
                                        DETECTED
                                    </>
                                ) : "BLOCKED"}
                            </text>
                            
                            {!threat.blocked && (
                                <text x="707" y={135 + i * 35} textAnchor="middle" fontSize="7" fontWeight="600" fill={colors.success} opacity="0">
                                    <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                                    BLOCKED
                                </text>
                            )}
                        </g>
                    ))}
                </g>

                {/* --- SECURITY METRICS --- */}
                <g>
                    <rect x="50" y="300" width="710" height="160" rx="12" fill="white" filter="url(#sec-shadow)" />
                    <text x="70" y="328" fontSize="12" fontWeight="700" fill={colors.textPrimary}>📊 Security Assessment</text>

                    {/* Risk meter */}
                    <rect x="70" y="350" width="200" height="80" rx="8" fill="#f8fafc" stroke={colors.primary} strokeWidth="1" />
                    <text x="170" y="375" textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textPrimary}>Risk Score</text>
                    
                    <text x="170" y="410" textAnchor="middle" fontSize="28" fontWeight="700" fill={colors.error}>
                        <animate attributeName="opacity" values="1; 1; 0; 0" dur="8s" repeatCount="indefinite" />
                        7.8
                    </text>
                    <text x="170" y="410" textAnchor="middle" fontSize="28" fontWeight="700" fill={colors.success} opacity="0">
                        <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                        2.1
                    </text>
                    
                    <text x="170" y="425" textAnchor="middle" fontSize="9" fill={colors.textSecondary}>/10</text>

                    {/* Stats */}
                    {[
                        { label: "Vulnerabilities", value: "23", color: colors.error, x: 300, finalValue: "0", finalColor: colors.success },
                        { label: "Threats Blocked", value: "847", color: colors.success, x: 450, finalValue: "851", finalColor: colors.success },
                        { label: "Coverage", value: "96%", color: colors.accent, x: 600, finalValue: "99%", finalColor: colors.accent },
                    ].map((stat) => (
                        <g key={stat.label}>
                            <rect x={stat.x} y="350" width="130" height="80" rx="8" fill="#f8fafc" stroke={stat.color} strokeWidth="2" />
                            
                            <text x={stat.x + 65} y="390" textAnchor="middle" fontSize="20" fontWeight="700" fill={stat.color}>
                                <animate attributeName="opacity" values="1; 1; 0; 0" dur="8s" repeatCount="indefinite" />
                                {stat.value}
                            </text>
                            <text x={stat.x + 65} y="390" textAnchor="middle" fontSize="20" fontWeight="700" fill={stat.finalColor} opacity="0">
                                <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                                {stat.finalValue}
                            </text>
                            
                            <text x={stat.x + 65} y="420" textAnchor="middle" fontSize="9" fill={colors.textSecondary}>{stat.label}</text>
                        </g>
                    ))}
                </g>

                {/* --- SECURITY ENGINEER --- */}
                <g>
                    <rect x="600" y="280" width="150" height="12" rx="4" fill="#fecaca" />
                    <ellipse cx="675" cy="273" rx="20" ry="6" fill="#991b1b" />
                    <circle cx="675" cy="260" r="12" fill="#ef4444" />
                </g>

                {/* --- VULNERABILITY ALERT --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="8s" repeatCount="indefinite" />
                    <rect x="520" y="270" width="200" height="45" rx="8" fill={colors.error} />
                    <text x="620" y="290" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">⚠ Vulnerability Detected</text>
                    <text x="620" y="305" textAnchor="middle" fontSize="9" fill="white" opacity="0.9">CSRF Token Missing</text>
                </g>

                {/* --- SUCCESS BADGE --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                    <rect x="520" y="270" width="200" height="45" rx="10" fill={colors.success} filter="url(#sec-shadow)" />
                    <text x="620" y="298" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ System Secured</text>
                </g>

            </svg>
        </div>
    );
};

export default SecurityTestingAnimation;
