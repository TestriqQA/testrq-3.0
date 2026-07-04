"use client";

import React from "react";

const MigrationAnimation = () => {
    // Migration Theme Colors
    const colors = {
        bg: "#f8fafc",
        legacy: "#94a3b8",
        legacyDark: "#64748b",
        cloud: "#3b82f6",
        cloudLight: "#eff6ff",
        success: "#22c55e",
        data: "#0ea5e9",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        path: "#cbd5e1"
    };

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden relative shadow-xl border border-blue-100">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="migration-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
                    </filter>
                    <filter id="migration-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* --- LEGACY SYSTEM (On-Prem) --- */}
                <g>
                    {/* Server Rack */}
                    <rect x="100" y="150" width="140" height="200" rx="10" fill="white" filter="url(#migration-shadow)" stroke={colors.legacy} strokeWidth="2" />
                    
                    {/* Servers */}
                    {[0, 1, 2].map(i => (
                        <g key={`server-${i}`}>
                            <rect x="110" y={170 + i * 50} width="120" height="30" rx="4" fill={colors.legacy} opacity="0.2" />
                            <rect x="110" y={170 + i * 50} width="10" height="30" fill={colors.legacyDark} />
                            {/* Blinking lights */}
                            <circle cx="210" cy={185 + i * 50} r="3" fill={colors.success}>
                                <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                            </circle>
                            <circle cx="220" cy={185 + i * 50} r="3" fill={colors.success}>
                                <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                            </circle>
                        </g>
                    ))}
                    <text x="170" y="380" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.textPrimary}>Legacy / On-Prem</text>
                </g>

                {/* --- MIGRATION PATH --- */}
                <g>
                    {/* Data Pipe */}
                    <path d="M 240 250 Q 400 250 560 250" stroke={colors.path} strokeWidth="2" strokeDasharray="6 6" fill="none" />
                    
                    {/* Data Packets Moving */}
                    {[0, 1, 2, 3].map(i => (
                        <g key={`data-${i}`}>
                            <animateTransform attributeName="transform" type="translate" values="240 250; 560 250" dur="2.5s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                            <rect x="-15" y="-12" width="30" height="24" rx="4" fill={colors.data} filter="url(#migration-glow)" />
                            <text x="0" y="3" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">101</text>
                        </g>
                    ))}
                </g>

                {/* --- TARGET SYSTEM (Cloud) --- */}
                <g>
                    {/* Cloud Container */}
                    <circle cx="630" cy="250" r="90" fill={colors.cloudLight} filter="url(#migration-shadow)" />
                    <circle cx="630" cy="250" r="90" fill="none" stroke={colors.cloud} strokeWidth="2" strokeDasharray="10 5">
                        <animateTransform attributeName="transform" type="rotate" from="0 630 250" to="360 630 250" dur="20s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Cloud Icon */}
                    <path d="M 600 250 Q 600 220 630 220 Q 660 220 660 250 Q 680 250 680 270 Q 680 290 660 290 L 600 290 Q 580 290 580 270 Q 580 250 600 250 Z" fill={colors.cloud} filter="url(#migration-shadow)" />
                    
                    <text x="630" y="380" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.cloud}>Target / Cloud</text>
                </g>

                {/* --- VALIDATION OVERLAYS --- */}
                <g>
                    {/* Verified Integrity Badge */}
                    <rect x="330" y="100" width="140" height="30" rx="15" fill={colors.success} filter="url(#migration-shadow)" />
                    <text x="400" y="120" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">✓ Verified Integrity</text>
                </g>

                {/* --- STATS PANEL --- */}
                <g>
                    <rect x="250" y="420" width="300" height="50" rx="8" fill="white" filter="url(#migration-shadow)" />
                    
                    <text x="300" y="440" textAnchor="middle" fontSize="10" fill={colors.textSecondary} fontWeight="600">DOWNTIME</text>
                    <text x="300" y="458" textAnchor="middle" fontSize="16" fill={colors.cloud} fontWeight="700">0%</text>

                    <text x="400" y="440" textAnchor="middle" fontSize="10" fill={colors.textSecondary} fontWeight="600">INTEGRITY</text>
                    <text x="400" y="458" textAnchor="middle" fontSize="16" fill={colors.cloud} fontWeight="700">100%</text>

                    <text x="500" y="440" textAnchor="middle" fontSize="10" fill={colors.textSecondary} fontWeight="600">SPEED</text>
                    <text x="500" y="458" textAnchor="middle" fontSize="16" fill={colors.cloud} fontWeight="700">FAST</text>
                </g>
            </svg>
        </div>
    );
};

export default MigrationAnimation;
