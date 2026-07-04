"use client";

import React, { useEffect, useState } from "react";
const DataAnalysisAnimation = () => {    // Corporate Color Palette (Purple/Blue theme for Data Analysis)
    const colors = {
        bg: "#faf5ff",
        primary: "#7c3aed",
        secondary: "#8b5cf6",
        accent: "#a78bfa",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#3b0764",
        textSecondary: "#64748b",
        dataFlow: "#c4b5fd",
        chart1: "#6366f1",
        chart2: "#8b5cf6",
        chart3: "#a855f7",
        chart4: "#d946ef",
    };

    // Data source positions
    const dataSources = [
        { id: "db", x: 80, y: 120, label: "Database", emoji: "🗄️" },
        { id: "api", x: 80, y: 230, label: "API", emoji: "🔌" },
        { id: "files", x: 80, y: 340, label: "Files", emoji: "📁" },
    ];

    // Analysis stages
    const stages = [
        { id: "collect", x: 220, y: 230, label: "Collect", color: colors.chart1 },
        { id: "clean", x: 370, y: 230, label: "Clean", color: colors.chart2 },
        { id: "analyze", x: 520, y: 230, label: "Analyze", color: colors.chart3 },
        { id: "insights", x: 670, y: 230, label: "Insights", color: colors.chart4 },
    ];

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 overflow-hidden relative shadow-xl border border-purple-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="data-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="stage-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={colors.chart1} />
                        <stop offset="100%" stopColor={colors.chart4} />
                    </linearGradient>
                    <filter id="data-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* --- DATA SOURCES --- */}
                {dataSources.map((source, i) => (
                    <g key={source.id}>
                        <rect
                            x={source.x - 35}
                            y={source.y - 30}
                            width="70"
                            height="60"
                            rx="10"
                            fill="white"
                            stroke={colors.primary}
                            strokeWidth="3"
                            filter="url(#data-shadow)"
                        />
                        <text x={source.x} y={source.y - 5} textAnchor="middle" fontSize="18">{source.emoji}</text>
                        <text x={source.x} y={source.y + 20} textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textSecondary}>{source.label}</text>
                    </g>
                ))}

                {/* --- FLOW ARROWS from sources to Collect --- */}
                {dataSources.map((source, i) => (
                    <path key={`flow-${i}`} d={`M ${source.x + 35} ${source.y} L 180 230`} fill="none" stroke={colors.dataFlow} strokeWidth="2" strokeDasharray="6 4">
                        <animate attributeName="opacity" values="0.3; 1; 0.3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    </path>
                ))}

                {/* --- PROCESSING STAGES --- */}
                {stages.map((stage, i) => (
                    <g key={stage.id}>
                        {/* Stage Box */}
                        <rect x={stage.x - 45} y={stage.y - 50} width="90" height="100" rx="12" fill={stage.color} filter="url(#data-shadow)" />

                        {/* Stage Icon */}
                        <text
                            x={stage.x}
                            y={stage.y - 15}
                            textAnchor="middle"
                            fontSize="24"
                        >
                            {i === 0 ? "📥" : i === 1 ? "🧹" : i === 2 ? "🧠" : "📊"}
                        </text>

                        {/* Stage Label */}
                        <text x={stage.x} y={stage.y + 15} textAnchor="middle" fontSize="12" fontWeight="700" fill="white">
                            {stage.label.toUpperCase()}
                        </text>

                        {/* Progress Bar */}
                        <rect x={stage.x - 35} y={stage.y + 30} width="70" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
                        <rect x={stage.x - 35} y={stage.y + 30} width="0" height="8" rx="4" fill="rgba(255,255,255,0.9)">
                            <animate attributeName="width" values="0; 70" dur="1s" begin={`${i * 1.5}s`} fill="freeze" />
                        </rect>
                    </g>
                ))}

                {/* --- STAGE CONNECTIONS --- */}
                {[0, 1, 2].map(i => (
                    <path key={`conn-${i}`} d={`M ${stages[i].x + 45} 230 L ${stages[i + 1].x - 45} 230`} fill="none" stroke={colors.dataFlow} strokeWidth="3" />
                ))}

                {/* --- DATA PACKET --- */}
                <circle r="8" fill={colors.primary} filter="url(#data-glow)">
                    <animate attributeName="cx" values="180; 370; 520; 670; 180" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="230; 230; 230; 230; 230" dur="6s" repeatCount="indefinite" />
                </circle>

                {/* --- INSIGHTS CHART --- */}
                <g>
                    <rect x="580" y="340" width="180" height="110" rx="10" fill="white" filter="url(#data-shadow)" />
                    <text x="670" y="365" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>Analysis Results</text>

                    {/* Mini Bar Chart */}
                    {[
                        { x: 600, h: 50, color: colors.chart1 },
                        { x: 630, h: 70, color: colors.chart2 },
                        { x: 660, h: 55, color: colors.chart3 },
                        { x: 690, h: 80, color: colors.chart4 },
                        { x: 720, h: 65, color: colors.primary },
                    ].map((bar, i) => (
                        <rect key={`bar-${i}`} x={bar.x} y="430" width="20" height="0" rx="3" fill={bar.color}>
                            <animate attributeName="height" values={`0; ${bar.h}`} dur="1s" begin={`${i * 0.2 + 4.5}s`} fill="freeze" />
                            <animate attributeName="y" values={`430; ${430 - bar.h}`} dur="1s" begin={`${i * 0.2 + 4.5}s`} fill="freeze" />
                        </rect>
                    ))}
                </g>

                {/* --- QA ENGINEER --- */}
                <g>
                    {/* Desk */}
                    <rect x="50" y="460" width="500" height="12" rx="4" fill="#e9d5ff" />
                    {/* Person */}
                    <ellipse cx="300" cy="450" rx="30" ry="10" fill="#7c3aed" />
                    <circle cx="300" cy="430" r="18" fill="#8b5cf6" />
                </g>

                {/* --- METRICS PANEL --- */}
                <g>
                    <rect x="50" y="340" width="150" height="100" rx="10" fill="white" filter="url(#data-shadow)" />
                    <text x="125" y="365" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>Metrics</text>

                    <text x="70" y="390" fontSize="10" fill={colors.textSecondary}>Accuracy</text>
                    <rect x="70" y="395" width="110" height="8" rx="4" fill="#e2e8f0" />
                    <rect x="70" y="395" width="0" height="8" rx="4" fill={colors.success}>
                        <animate attributeName="width" values="0; 108" dur="1.5s" begin="2s" fill="freeze" />
                    </rect>
                    <text x="70" y="420" fontSize="9" fill={colors.success}>98.5%</text>

                    <text x="70" y="433" fontSize="10" fill={colors.textSecondary}>Completeness</text>
                </g>

                {/* --- ANOMALY ALERT --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" begin="3s" repeatCount="indefinite" />
                    <rect x="460" y="140" width="140" height="40" rx="8" fill={colors.error} />
                    <text x="530" y="165" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ Outlier Detected</text>
                </g>

                {/* --- SUCCESS BADGE --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin="6s" fill="freeze" />
                    <rect x="280" y="40" width="240" height="45" rx="10" fill={colors.success} filter="url(#data-shadow)" />
                    <text x="400" y="68" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ Analysis Complete</text>
                </g>

            </svg>
        </div>
    );
};

export default DataAnalysisAnimation;
