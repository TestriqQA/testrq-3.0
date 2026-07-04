"use client";

import React, { useEffect, useState } from "react";
const ArchitectureAnimation = () => {    const colors = {
        bg: "#f8fafc",
        core: "#25A8E0",
        service: "#6366f1",
        database: "#10b981",
        connection: "#cbd5e1",
        alert: "#f59e0b",
        success: "#10b981",
        textPrimary: "#1e293b",
    };    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-white overflow-hidden relative shadow-xl border border-gray-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="arch-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
                    </filter>
                    <linearGradient id="arch-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                </defs>

                {/* --- MICROSERVICES MESH --- */}
                <g>
                    {[
                        { id: "s1", x: 200, y: 150 },
                        { id: "s2", x: 200, y: 350 },
                        { id: "s3", x: 400, y: 250 },
                        { id: "s4", x: 600, y: 150 },
                        { id: "s5", x: 600, y: 350 },
                    ].map((node, i) => (
                        <React.Fragment key={node.id}>
                            {/* Connections */}
                            <line x1={node.x} y1={node.y} x2={400} y2={250} stroke={colors.connection} strokeWidth="1.5">
                                <animate attributeName="opacity" values="0.2; 1; 0.2" dur={`${1.5 + (i * 0.3)}s`} repeatCount="indefinite" />
                            </line>
                            {/* Nodes */}
                            <g opacity="0">
                                <animate attributeName="opacity" values="0; 1" dur="0.5s" begin={`${i * 0.2}s`} fill="freeze" />
                                <circle cx={node.x} cy={node.y} r="25" fill="white" stroke={colors.service} strokeWidth="2" filter="url(#arch-shadow)" />
                                <circle cx={node.x} cy={node.y} r="10" fill={colors.service}>
                                    <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                                </circle>
                            </g>
                        </React.Fragment>
                    ))}
                </g>

                {/* --- INSPECTION LENS --- */}
                <g>
                    <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="4s" repeatCount="indefinite" />
                    <circle cx="150" cy="80" r="40" fill="none" stroke={colors.alert} strokeWidth="3" strokeDasharray="5 5">
                        <animateTransform attributeName="transform" type="rotate" from="0 150 80" to="360 150 80" dur="8s" repeatCount="indefinite" />
                    </circle>
                    <path d="M180 110 L210 140" stroke={colors.alert} strokeWidth="4" strokeLinecap="round" />
                    <text x="150" y="140" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.alert}>AUDIT ENGINE</text>
                </g>

                {/* --- PERFORMANCE DASHBOARD --- */}
                <g>
                    <rect x="50" y="380" width="700" height="80" rx="12" fill="white" filter="url(#arch-shadow)" stroke="#e2e8f0" />
                    <text x="350" y="410" fontSize="14" fontWeight="700" fill={colors.textPrimary}>Resilience Score: </text>
                    <text x="470" y="410" fontSize="18" fontWeight="800" fill={colors.success}>
                        98%
                    </text>

                    <rect x="70" y="425" width="660" height="10" rx="5" fill="#f1f5f9" />
                    <rect x="70" y="425" width="0" height="10" rx="5" fill={colors.core}>
                        <animate attributeName="width" values="0; 646.8" dur="2s" fill="freeze" />
                    </rect>
                </g>

                {/* --- ARCHITECTURE BADGE --- */}
                <g>
                    <animate attributeName="opacity" values="0.7; 1; 0.7" dur="2s" repeatCount="indefinite" />
                    <rect x="250" y="30" width="300" height="50" rx="25" fill={colors.success} />
                    <text x="400" y="62" textAnchor="middle" fontSize="16" fontWeight="800" fill="white">✓ ARCHITECTURE CERTIFIED</text>
                </g>

            </svg>
        </div>
    );
};

export default ArchitectureAnimation;
