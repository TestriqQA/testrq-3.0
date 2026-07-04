"use client";

import React, { useEffect, useState } from "react";
const APITestingAnimation = () => {    // Corporate Color Palette
    const colors = {
        bg: "#f0f9ff",
        primary: "#3b82f6",
        secondary: "#0ea5e9",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        get: "#22c55e",
        post: "#3b82f6",
        put: "#8b5cf6",
        delete: "#f97316",
    };

    // API Endpoints
    const endpoints = [
        { method: "GET", path: "/users", status: 200, time: "45ms", color: colors.get },
        { method: "POST", path: "/auth", status: 201, time: "32ms", color: colors.post },
        { method: "PUT", path: "/data", status: 200, time: "28ms", color: colors.put },
        { method: "DELETE", path: "/item", status: 500, time: "Error", color: colors.delete },
    ];

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="api-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="blue-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                </defs>

                {/* --- CLIENT APP --- */}
                <g>
                    <rect x="50" y="150" width="150" height="160" rx="12" fill="white" filter="url(#api-shadow)" />
                    <rect x="50" y="150" width="150" height="35" rx="12" fill={colors.primary} />
                    <rect x="50" y="170" width="150" height="15" fill={colors.primary} />
                    <text x="125" y="173" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">📱 Client App</text>

                    {/* Request indicator */}
                    <rect x="65" y="200" width="120" height="25" rx="5" fill="#f0f9ff" />
                    <text x="125" y="217" textAnchor="middle" fontSize="10" fill={colors.textSecondary}>Request Ready</text>

                    <rect x="65" y="235" width="120" height="25" rx="5" fill="#f0fdf4" />
                    <text x="125" y="252" textAnchor="middle" fontSize="10" fill={colors.success}>Response: OK</text>

                    <rect x="65" y="270" width="120" height="25" rx="5" fill="#fef2f2" />
                    <text x="125" y="287" textAnchor="middle" fontSize="10" fill={colors.error}>Status: 500</text>
                </g>

                {/* --- API GATEWAY --- */}
                <g>
                    <circle cx="400" cy="230" r="60" fill="url(#blue-gradient)" filter="url(#api-shadow)" />
                    <text x="400" y="225" textAnchor="middle" fontSize="16" fontWeight="700" fill="white">API</text>
                    <text x="400" y="245" textAnchor="middle" fontSize="11" fill="white" opacity="0.9">Gateway</text>

                    {/* Animated rings */}
                    <circle cx="400" cy="230" r="75" fill="none" stroke={colors.primary} strokeWidth="2" opacity="0.3">
                        <animate attributeName="r" values="75; 85; 75" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="400" cy="230" r="90" fill="none" stroke={colors.primary} strokeWidth="1" opacity="0.2">
                        <animate attributeName="r" values="90; 105; 90" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* --- BACKEND SERVICE --- */}
                <g>
                    <rect x="600" y="150" width="150" height="160" rx="12" fill="white" filter="url(#api-shadow)" />
                    <rect x="600" y="150" width="150" height="35" rx="12" fill="#0f172a" />
                    <rect x="600" y="170" width="150" height="15" fill="#0f172a" />
                    <text x="675" y="173" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">🖥️ Backend</text>

                    <rect x="615" y="200" width="120" height="20" rx="4" fill="#f1f5f9" />
                    <text x="675" y="214" textAnchor="middle" fontSize="9" fill={colors.textSecondary}>Database: Connected</text>

                    <rect x="615" y="230" width="120" height="20" rx="4" fill="#f1f5f9" />
                    <text x="675" y="244" textAnchor="middle" fontSize="9" fill={colors.textSecondary}>Auth: Verified</text>

                    <rect x="615" y="260" width="120" height="20" rx="4" fill="#fef2f2" />
                    <text x="675" y="274" textAnchor="middle" fontSize="9">Service: Running</text>
                </g>

                {/* --- DATA PACKETS --- */}
                {/* Request packet (Client to API) */}
                <circle r="10" fill={colors.primary} filter="url(#api-shadow)">
                    <animate attributeName="cx" values="200; 340; 200" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="230; 230; 230" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Response packet (API to Backend) */}
                <circle r="10" fill={colors.success} filter="url(#api-shadow)">
                    <animate attributeName="cx" values="460; 600; 460" dur="2s" begin="1s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="230; 230; 230" dur="2s" begin="1s" repeatCount="indefinite" />
                </circle>

                {/* --- CONNECTION LINES --- */}
                <line x1="200" y1="230" x2="340" y2="230" stroke={colors.primary} strokeWidth="2" strokeDasharray="8 4">
                    <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="460" y1="230" x2="600" y2="230" stroke={colors.primary} strokeWidth="2" strokeDasharray="8 4">
                    <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" begin="1s" repeatCount="indefinite" />
                </line>

                {/* --- ENDPOINTS PANEL --- */}
                <g>
                    <rect x="50" y="350" width="700" height="120" rx="12" fill="white" filter="url(#api-shadow)" />
                    <text x="70" y="378" fontSize="12" fontWeight="700" fill={colors.textPrimary}>API Endpoints</text>

                    {endpoints.map((ep, i) => (
                        <g key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.5}s` }}>
                            <rect x={70 + i * 170} y="395" width="155" height="55" rx="6" fill="#f8fafc" stroke={ep.color} strokeWidth="2" />
                            <rect x={70 + i * 170} y="395" width="50" height="20" rx="4" fill={ep.color} />
                            <text x={95 + i * 170} y="409" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">{ep.method}</text>
                            <text x={147 + i * 170} y="420" textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textPrimary}>{ep.path}</text>

                            <rect x={80 + i * 170} y="425" width="35" height="16" rx="3" fill={i === 3 ? colors.error : colors.success} opacity="0.2" />
                            <text x={97 + i * 170} y="437" textAnchor="middle" fontSize="8" fontWeight="600" fill={i === 3 ? colors.error : colors.success}>{i === 3 ? "500" : ep.status}</text>

                            <text x={170 + i * 170} y="437" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>{ep.time}</text>
                        </g>
                    ))}
                </g>

                {/* --- QA ENGINEER --- */}
                <g>
                    <rect x="300" y="55" width="200" height="12" rx="4" fill="#dbeafe" />
                    <ellipse cx="400" cy="48" rx="25" ry="8" fill="#1e40af" />
                    <circle cx="400" cy="32" r="15" fill="#3b82f6" />
                </g>

                {/* --- ERROR ALERT --- */}
                <g opacity="0">
                    <rect x="550" y="320" width="180" height="40" rx="8" fill={colors.error} />
                    <text x="640" y="345" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ DELETE /item: 500</text>
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="3s" begin="2s" repeatCount="indefinite" />
                </g>

                {/* --- SUCCESS BADGE --- */}
                <g opacity="0">
                    <rect x="280" y="90" width="240" height="45" rx="10" fill={colors.success} filter="url(#api-shadow)" />
                    <text x="400" y="118" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ All APIs Healthy</text>
                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin="5s" fill="freeze" />
                </g>

            </svg>
        </div>
    );
};

export default APITestingAnimation;
