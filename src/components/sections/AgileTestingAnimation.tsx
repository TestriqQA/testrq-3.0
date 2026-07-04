"use client";

import React, { useEffect, useState } from "react";
const AgileTestingAnimation = () => {    const colors = {
        bg: "#f0f9ff",
        primary: "#0ea5e9", // sky-500
        secondary: "#6366f1", // indigo-500
        accent: "#f59e0b", // amber-500
        success: "#22c55e", // green-500
        text: "#0c4a6e", // sky-950
    };    return (
        <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100 shadow-2xl overflow-hidden relative p-8 flex items-center justify-center">
            <svg viewBox="0 0 400 300" className="w-full h-full">
                {/* Sprint Cycle Path */}
                <circle
                    cx="200" cy="150" r="100"
                    fill="none"
                    stroke="#e0f2fe"
                    strokeWidth="20"
                />

                {/* Progress Ring */}
                <circle cx="200" cy="150" r="100" fill="none" stroke={colors.primary} strokeWidth="20" strokeDasharray="628.3" strokeDashoffset="628.3" transform="rotate(-90 200 150)">
                    <animate attributeName="stroke-dashoffset" values="628.3; 0; 628.3" dur="4s" repeatCount="indefinite" keyTimes="0; 0.8; 1" />
                </circle>

                {/* Nodes on the cycle */}
                {[0, 90, 180, 270].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 200 + 100 * Math.cos(rad);
                    const y = 150 + 100 * Math.sin(rad);
                    const labels = ["Deployment", "Testing", "Development", "Planning"];
                    return (
                        <g key={i} opacity="0">
                            <animate attributeName="opacity" values="0; 1" dur="1s" begin={`${i * 1}s`} fill="freeze" />
                            <circle cx={x} cy={y} r="12" fill="white" stroke={colors.primary} strokeWidth="3">
                                <animate attributeName="opacity" values="0.5; 1; 0.5" dur="2s" begin={`${i * 1}s`} repeatCount="indefinite" />
                            </circle>
                            <text
                                x={x} y={y + 30}
                                textAnchor="middle"
                                fontSize="12"
                                fontWeight="600"
                                fill={colors.text}
                                className="font-sans"
                            >
                                {labels[i]}
                            </text>
                        </g>
                    );
                })}

                {/* Central Velocity Indicator */}
                <g>
                    <text x="200" y="145" textAnchor="middle" fontSize="14" fill={colors.text} className="font-sans uppercase tracking-widest font-bold">Velocity</text>
                    <text x="200" y="175" textAnchor="middle" fontSize="32" fontWeight="bold" fill={colors.primary} className="font-sans">
                        100%
                    </text>
                </g>

                {/* Floating Elements (Agile artifacts) */}
                <g>
                    <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur="3s" repeatCount="indefinite" />
                    <rect x="50" y="50" width="40" height="50" rx="4" fill="white" stroke={colors.secondary} strokeWidth="2" />
                    <text x="55" y="75" fontSize="8" fill={colors.secondary}>Backlog</text>
                </g>

                <g>
                    <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur="3s" begin="1.5s" repeatCount="indefinite" />
                    <circle cx="330" cy="60" r="25" fill="white" stroke={colors.accent} strokeWidth="2" />
                    <text x="315" y="65" fontSize="8" fill={colors.accent}>Sprint</text>
                </g>
            </svg>

            {/* Shift-Left Indicator */}
            <div className="absolute left-8 bottom-8 bg-white/80 p-4 rounded-xl border border-sky-100 shadow-lg backdrop-blur-sm">
                <div className="text-xs font-bold text-sky-600 uppercase tracking-tighter">Methodology</div>
                <div className="text-lg font-black text-sky-950 italic">Shift-Left QA</div>
            </div>
        </div>
    );
};

export default AgileTestingAnimation;
