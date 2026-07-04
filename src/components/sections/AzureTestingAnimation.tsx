"use client";

import React, { useEffect, useState } from "react";
import { FaCloud, FaServer, FaShieldAlt, FaSync, FaMicrochip, FaCheckCircle, FaNetworkWired } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const AzureTestingAnimation = () => {    // Azure-themed Color Palette
    const colors = {
        bg: "#f0f9ff",
        azureBlue: "#0078d4",
        azureGlow: "rgba(0, 120, 212, 0.4)",
        indigo: "#4f46e5",
        sky: "#0ea5e9",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#0c4a6e",
        textSecondary: "#64748b",
        stream: "#38bdf8",
    };

    // Infrastructure nodes (Cloud, Server, Security, etc.)
    const nodes = [
        { id: "onprem", icon: <FaServer />, label: "On-Prem", x: 100, y: 150, color: colors.textSecondary },
        { id: "security", icon: <FaShieldAlt />, label: "Security", x: 100, y: 350, color: colors.error },
        { id: "devops", icon: <FaSync />, label: "DevOps", x: 300, y: 250, color: colors.indigo },
        { id: "azure", icon: <VscAzure />, label: "Azure", x: 550, y: 250, color: colors.azureBlue },
        { id: "ai", icon: <FaMicrochip />, label: "Azure AI", x: 700, y: 150, color: colors.sky },
        { id: "net", icon: <FaNetworkWired />, label: "VNet", x: 700, y: 350, color: colors.indigo },
    ];

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-100 overflow-hidden relative shadow-xl border border-sky-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="azure-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="azure-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="azure-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#0078d4" />
                        <stop offset="100%" stopColor="#00bcf2" />
                    </linearGradient>
                </defs>

                {/* --- CONNECTIONS --- */}
                {/* On-Prem to DevOps */}
                <path id="path-onprem-devops" d="M 140 150 Q 200 150, 260 230" fill="none" stroke={colors.sky} strokeWidth="3" strokeDasharray="8 6">
                    <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" repeatCount="indefinite" />
                </path>

                {/* DevOps to Azure */}
                <path id="path-devops-azure" d="M 340 250 L 510 250" stroke={colors.azureBlue} strokeWidth="4" />

                {/* Azure to AI/Networking */}
                <path id="path-azure-ai" d="M 595 250 L 670 180" stroke={colors.sky} strokeWidth="2" />
                <path id="path-azure-net" d="M 595 250 L 670 320" stroke={colors.indigo} strokeWidth="2" />

                {/* --- NODES --- */}
                {nodes.map((node) => (
                    <g key={node.id}>
                        <circle cx={node.x} cy={node.y} r="35" fill="white" filter="url(#azure-shadow)" />
                        <foreignObject x={node.x - 20} y={node.y - 20} width="40" height="40">
                            <div className="w-full h-full flex items-center justify-center text-2xl" style={{ color: node.color }}>
                                {node.icon}
                            </div>
                        </foreignObject>
                        <text x={node.x} y={node.y + 55} textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary} className="uppercase tracking-wider">{node.label}</text>
                    </g>
                ))}

                {/* --- DATA PACKETS --- */}
                <circle r="6" fill={colors.sky} filter="url(#azure-shadow)">
                    <animateMotion dur="2s" repeatCount="indefinite">
                        <mpath href="#path-onprem-devops" />
                    </animateMotion>
                </circle>
                <circle r="6" fill={colors.azureBlue} filter="url(#azure-shadow)">
                    <animateMotion dur="1.5s" repeatCount="indefinite">
                        <mpath href="#path-devops-azure" />
                    </animateMotion>
                </circle>
                <circle r="6" fill={colors.sky} filter="url(#azure-shadow)">
                    <animateMotion dur="1.2s" repeatCount="indefinite">
                        <mpath href="#path-azure-ai" />
                    </animateMotion>
                </circle>
                <circle r="6" fill={colors.indigo} filter="url(#azure-shadow)">
                    <animateMotion dur="1.2s" repeatCount="indefinite">
                        <mpath href="#path-azure-net" />
                    </animateMotion>
                </circle>

                {/* --- VALIDATION WAVES --- */}
                <circle cx="550" cy="250" r="40" fill="none" stroke={colors.success} strokeWidth="2">
                    <animate attributeName="r" values="40; 70; 40" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1; 0; 1" dur="3s" repeatCount="indefinite" />
                </circle>
                
                <circle cx="550" cy="250" r="40" fill="none" stroke={colors.success} strokeWidth="2">
                    <animate attributeName="r" values="40; 90; 40" dur="3s" begin="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1; 0; 1" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </circle>

                {/* --- SECURITY SHIELD --- */}
                <g>
                    <path
                        d="M 550 200 Q 580 200, 580 230 L 580 270 Q 550 300, 520 270 L 520 230 Q 520 200, 550 200"
                        fill="rgba(16, 185, 129, 0.1)"
                        stroke={colors.success}
                        strokeWidth="2"
                    />
                    <foreignObject x="540" y="240" width="20" height="20">
                        <div className="text-success text-xl">
                            <FaCheckCircle className="text-emerald-500" />
                        </div>
                    </foreignObject>
                </g>

                {/* --- SUCCESS OVERLAY --- */}
                <g>
                    <animate attributeName="opacity" values="0.7; 1; 0.7" dur="2s" repeatCount="indefinite" />
                    <rect x="250" y="50" width="300" height="50" rx="25" fill="white" filter="url(#azure-shadow)" />
                    <text x="400" y="82" textAnchor="middle" fontSize="16" fontWeight="800" fill={colors.azureBlue}>CLOUD-NATIVE QA VERIFIED</text>
                </g>

            </svg>

            {/* Cloud Background Elements */}
            <div className="absolute top-10 left-10 text-sky-200/40 text-6xl" style={{ animation: 'bounce 3s infinite' }}>
                <FaCloud />
            </div>
            <div className="absolute bottom-20 right-10 text-indigo-200/30 text-8xl" style={{ animation: 'bounce 3s infinite 1s' }}>
                <FaCloud />
            </div>
            <div className="absolute top-1/3 right-1/4 text-sky-300/20 text-4xl" style={{ animation: 'bounce 3s infinite 2s' }}>
                <FaCloud />
            </div>
        </div>
    );
};

export default AzureTestingAnimation;
