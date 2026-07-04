"use client";

import React, { useEffect, useState } from "react";
const TDMAnimation = () => {    const colors = {
        bg: "#f8fafc",
        production: "#ef4444",
        masked: "#10b981",
        synthetic: "#3b82f6",
        shield: "#6366f1",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        connection: "#cbd5e1",
    };    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-white overflow-hidden relative shadow-xl border border-slate-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="tdm-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
                    </filter>
                    <linearGradient id="shield-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                </defs>

                {/* --- CONNECTION LINES --- */}
                <g>
                    {/* Prod to Engine */}
                    <line x1="230" y1="250" x2="340" y2="250" stroke={colors.connection} strokeWidth="2" strokeDasharray="8 4">
                        <animate attributeName="stroke-dashoffset" values="12; 0" dur="0.5s" repeatCount="indefinite" />
                    </line>
                    {/* Engine to QA */}
                    <line x1="460" y1="250" x2="570" y2="250" stroke={colors.connection} strokeWidth="2" strokeDasharray="8 4">
                        <animate attributeName="stroke-dashoffset" values="12; 0" dur="0.5s" repeatCount="indefinite" />
                    </line>
                    {/* Synthetic to QA */}
                    <path d="M490 90 Q 570 90 570 150" fill="none" stroke={colors.synthetic} strokeWidth="2" strokeDasharray="8 4">
                        <animate attributeName="stroke-dashoffset" values="12; 0" dur="0.5s" repeatCount="indefinite" />
                    </path>
                </g>

                {/* --- DATA PACKETS --- */}
                <g>
                    <g>
                        <animateTransform attributeName="transform" type="translate" values="230 250; 340 250; 230 250" dur="2s" repeatCount="indefinite" />
                        <circle r="4" fill={colors.production} />
                    </g>
                    <g>
                        <animateTransform attributeName="transform" type="translate" values="460 250; 570 250; 460 250" dur="2s" begin="1s" repeatCount="indefinite" />
                        <circle r="4" fill={colors.masked} />
                    </g>
                </g>

                {/* --- PRODUCTION DATA HUB --- */}
                <g>
                    <rect x="50" y="150" width="180" height="200" rx="12" fill="#fff" stroke="#e2e8f0" strokeWidth="2" filter="url(#tdm-shadow)" />
                    <text x="140" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill={colors.textPrimary}>Production Data</text>

                    {[1, 2, 3].map((i) => (
                        <rect key={`prod-${i}`} x="70" y={200 + i * 35} width="140" height="25" rx="4" fill={colors.production} fillOpacity="0.1" stroke={colors.production} strokeWidth="1" />
                    ))}
                    <text x="140" y="270" textAnchor="middle" fontSize="10" fill={colors.production} opacity="0.8">Sensitive PII</text>
                </g>

                {/* --- DATA MASKING ENGINE --- */}
                <g>
                    <circle cx="400" cy="250" r="60" fill="url(#shield-gradient)" filter="url(#tdm-shadow)">
                        <animate attributeName="r" values="58; 62; 58" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <path d="M385 240 L400 225 L415 240 M400 225 L400 275" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <text x="400" y="330" textAnchor="middle" fontSize="14" fontWeight="700" fill={colors.shield}>TDM Engine</text>
                </g>

                {/* --- MASKED QA DATA HUB --- */}
                <g>
                    <rect x="570" y="150" width="180" height="200" rx="12" fill="#fff" stroke="#e2e8f0" strokeWidth="2" filter="url(#tdm-shadow)" />
                    <text x="660" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill={colors.textPrimary}>Masked QA Data</text>

                    {[1, 2, 3].map((i) => (
                        <rect key={`masked-${i}`} x="590" y={200 + i * 35} width="140" height="25" rx="4" fill={colors.masked} fillOpacity="0.1" stroke={colors.masked} strokeWidth="1">
                            <animate attributeName="width" values="0; 140" dur="2s" begin={`${1 + i * 0.5}s`} fill="freeze" />
                        </rect>
                    ))}
                    <text x="660" y="270" textAnchor="middle" fontSize="10" fill={colors.masked} opacity="0.8">Secure & Compliant</text>
                </g>

                {/* --- SYNTHETIC DATA GENERATOR --- */}
                <g>
                    <rect x="310" y="50" width="180" height="80" rx="12" fill="#fff" stroke={colors.synthetic} strokeWidth="2" filter="url(#tdm-shadow)" />
                    <text x="400" y="80" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.synthetic}>AI Synthetic Gen</text>

                    <g>
                        {[(x: number) => x - 30, (x: number) => x, (x: number) => x + 30].map((fn, i) => (
                            <circle key={`syn-${i}`} cx={fn(400)} cy="105" r="5" fill={colors.synthetic}>
                                <animate attributeName="opacity" values="0.3; 1; 0.3" dur="1s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                            </circle>
                        ))}
                    </g>
                </g>

                {/* --- COMPLIANCE STATUS --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                    <rect x="300" y="420" width="200" height="40" rx="20" fill={colors.masked} />
                    <text x="400" y="445" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ GDPR & SOC2 Compliant</text>
                </g>

            </svg>
        </div>
    );
};

export default TDMAnimation;
