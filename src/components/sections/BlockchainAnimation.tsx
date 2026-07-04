"use client";

import React, { useEffect, useState } from "react";
const BlockchainAnimation = () => {

    const colors = {
        primary: "#25A8E0", // brand-blue
        secondary: "#25A8E0", // brand-blue
        accent: "#60a5fa", // blue-400
        success: "#10b981",
        connection: "#93c5fd",
    };

    return (
        <div className="w-full aspect-square md:aspect-video rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-xl overflow-hidden relative">
            <svg viewBox="0 0 800 500" className="w-full h-full">
                {/* Nodes and Grid lines */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Animated Connecting Lines */}
                {[
                    { x1: 200, y1: 150, x2: 400, y2: 150 },
                    { x1: 400, y1: 150, x2: 600, y2: 150 },
                    { x1: 200, y1: 150, x2: 300, y2: 300 },
                    { x1: 400, y1: 150, x2: 500, y2: 300 },
                    { x1: 600, y1: 150, x2: 500, y2: 300 },
                    { x1: 300, y1: 300, x2: 500, y2: 300 },
                ].map((line, i) => (
                    <line
                        key={i}
                        stroke={colors.connection}
                        strokeWidth="2"
                        strokeDasharray="10,10"
                        {...line}
                    >
                        <animate attributeName="stroke-dashoffset" values="20; 0" dur="1s" repeatCount="indefinite" />
                    </line>
                ))}

                {/* Blockchain Blocks */}
                {[
                    { x: 200, y: 150, label: "Block 01" },
                    { x: 400, y: 150, label: "Block 02" },
                    { x: 600, y: 150, label: "Block 03" },
                    { x: 300, y: 300, label: "Smart Contract" },
                    { x: 500, y: 300, label: "dApp Logic" },
                ].map((block, i) => (
                    <g key={i} opacity="0">
                        <animate attributeName="opacity" values="0; 1" dur="0.5s" begin={`${i * 0.5}s`} fill="freeze" />
                        <rect x={block.x - 50} y={block.y - 30} width="100" height="60" rx="8" fill="white" stroke={colors.primary} strokeWidth="2" className="shadow-md" />
                        <text
                            x={block.x}
                            y={block.y + 5}
                            textAnchor="middle"
                            className="text-[12px] font-bold fill-blue-900"
                        >
                            {block.label}
                        </text>
                        <circle cx={block.x + 40} cy={block.y - 20} r="6" fill={colors.success}>
                            <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                        </circle>
                    </g>
                ))}

                {/* Security Shield Overlay */}
                <g>
                    <animate attributeName="opacity" values="0.7; 1; 0.7" dur="3s" repeatCount="indefinite" />
                    <path
                        d="M 400 200 L 440 220 V 260 C 440 280 400 300 400 300 C 400 300 360 280 360 260 V 220 L 400 200 Z"
                        fill="rgba(37, 168, 224, 0.1)"
                        stroke={colors.primary}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </svg>

            {/* HUD overlays */}
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-blue-200 shadow-sm transition-all duration-300">
                <div className="flex items-center gap-2 mb-1 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] uppercase font-bold text-gray-500">Network Status: Secured</span>
                </div>
                <div className="text-xs font-mono text-blue-700">Audit Pulse: 256ms</div>
            </div>

            <div className="absolute bottom-4 right-4 space-y-2 transition-all duration-300">
                <div className="bg-brand-blue text-white text-[10px] px-3 py-1 rounded-full shadow-lg">
                    Smart Contract Verified
                </div>
                <div className="bg-indigo-600 text-white text-[10px] px-3 py-1 rounded-full shadow-lg">
                    Vulnerability: Zero
                </div>
            </div>
        </div>
    );
};

export default BlockchainAnimation;
