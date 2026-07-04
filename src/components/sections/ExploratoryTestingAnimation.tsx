"use client";

import React, { useEffect, useState } from "react";
const ExploratoryTestingAnimation = () => {    // Color Palette
    const colors = {
        bg: "#0f172a", // Slate 900
        grid: "#334155", // Slate 700
        nodeDefault: "#64748b", // Slate 500
        nodeActive: "#22d3ee", // Cyan 400
        nodeTraversed: "#3b82f6", // Blue 500
        nodeBug: "#ef4444", // Red 500
        pathDefault: "#334155",
        pathActive: "#22d3ee",
        scanner: "rgba(34, 211, 238, 0.1)",
        glow: "rgba(34, 211, 238, 0.5)",
    };

    // Node Positions (x, y) - Abstract App Map
    const nodes = [
        { id: 1, x: 400, y: 150 }, // Root
        { id: 2, x: 250, y: 250 }, // L1
        { id: 3, x: 550, y: 250 }, // R1
        { id: 4, x: 150, y: 380 }, // L2-A
        { id: 5, x: 320, y: 350 }, // L2-B
        { id: 6, x: 480, y: 350 }, // R2-A
        { id: 7, x: 650, y: 380 }, // R2-B
        { id: 8, x: 200, y: 500 }, // L3 (Bug location)
    ];

    // Connections
    const connections = [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 6 },
        { from: 3, to: 7 },
        { from: 4, to: 8 },
        { from: 5, to: 8 },
    ];

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
            {/* Background Grid */}
            <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true" style={{ pointerEvents: "none" }}>
                <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke={colors.grid} strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            {/* Main SVG Scene */}
            <svg viewBox="0 0 800 600" className="w-full h-full relative z-10">
                <defs>
                    <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <linearGradient id="scanner-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={colors.nodeActive} stopOpacity="0" />
                        <stop offset="50%" stopColor={colors.nodeActive} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={colors.nodeActive} stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* --- CONNECTING LINES --- */}
                <g className="connections">
                    {connections.map((conn, i) => {
                        const start = nodes.find(n => n.id === conn.from)!;
                        const end = nodes.find(n => n.id === conn.to)!;

                        return (
                            <line key={`conn-${i}`} x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke={colors.pathDefault} strokeWidth="2" />
                        );
                    })}
                </g>

                {/* --- TRAVERSAL PATH (Bug Path) --- */}
                <path d={`M ${nodes[0].x} ${nodes[0].y} L ${nodes[1].x} ${nodes[1].y} L ${nodes[3].x} ${nodes[3].y} L ${nodes[7].x} ${nodes[7].y}`} fill="none" stroke={colors.nodeActive} strokeWidth="4" strokeLinecap="round" filter="url(#glow-filter)" strokeDasharray="800" strokeDashoffset="800">
                    <animate attributeName="stroke-dashoffset" values="800; 0" dur="3s" repeatCount="indefinite" />
                </path>

                {/* --- NODES --- */}
                {nodes.map((node, i) => (
                    <g key={`node-${node.id}`}>
                        {/* Outer Ring */}
                        <circle cx={node.x} cy={node.y} r="12" fill={colors.bg} stroke={colors.nodeDefault} strokeWidth="2" />
                        {/* Inner Dot */}
                        <circle cx={node.x} cy={node.y} r="6" fill={colors.nodeDefault} />
                    </g>
                ))}

                {/* --- TESTER SILHOUETTE --- */}
                <g>
                    {/* Shoulders */}
                    <path d="M 300 600 Q 400 500 500 600" fill="#1e293b" />
                    {/* Head */}
                    <circle cx="400" cy="550" r="40" fill="#334155" />
                    {/* Eyes/Visor */}
                    <rect x="380" y="540" width="40" height="10" rx="5" fill={colors.nodeActive} filter="url(#glow-filter)" />

                    {/* Thinking Particles */}
                    {[0, 1, 2].map(i => (
                        <circle key={`thought-${i}`} cx="400" cy="500" r="4" fill={colors.nodeActive} opacity="0">
                            <animate attributeName="cy" values="500; 450" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0; 1; 0" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                            <animate attributeName="cx" values={`400; ${380 + i * 20}`} dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                        </circle>
                    ))}
                </g>

                {/* --- BUG INDICATOR --- */}
                <g transform="translate(180, 470)" opacity="0">
                    <animate attributeName="opacity" values="0; 0; 1; 1; 0" dur="6s" repeatCount="indefinite" />
                    <path d="M16 26C16 26 18 26 20 26C22 26 24 26 24 26C24.55 26 25 26.45 25 27V42H15V27C15 26.45 15.45 26 16 26ZM15 42H25V43C25 45.76 22.76 48 20 48C17.24 48 15 45.76 15 43V42ZM20 25C22.76 25 25 22.76 25 20C25 17.24 22.76 15 20 15C17.24 15 15 17.24 15 20C15 22.76 17.24 25 20 25ZM13 28H10V26H13V28ZM30 28H27V26H30V28ZM13 36H9V34H13V36ZM31 36H27V34H31V36ZM13 44H10V42H13V44ZM30 44H27V42H30V44Z"
                        fill={colors.nodeBug} />

                    <circle cx="20" cy="30" r="30" stroke={colors.nodeBug} strokeWidth="2" fill="none" opacity="0.5">
                        <animate attributeName="r" values="20; 40" dur="1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1; 0" dur="1s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* --- SCANNER BEAM --- */}
                <rect x="-20" y="0" width="40" height="600" fill="url(#scanner-gradient)" opacity="1">
                    <animate attributeName="x" values="-40; 840; -40" dur="6s" repeatCount="indefinite" />
                </rect>

                {/* --- LEARNING INDICATOR --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 0; 0; 1; 1; 0" dur="6s" repeatCount="indefinite" />
                    <text x="400" y="100" textAnchor="middle" fill={colors.nodeTraversed} fontSize="24" fontFamily="monospace" fontWeight="bold">
                        INSIGHT RECORDED
                    </text>
                    <circle cx="400" cy="140" r="30" stroke={colors.nodeTraversed} strokeWidth="2" fill="none" />
                    <path d="M385 140 L395 150 L415 130" stroke={colors.nodeTraversed} strokeWidth="4" fill="none" />
                </g>

            </svg>
        </div>
    );
};

export default ExploratoryTestingAnimation;
