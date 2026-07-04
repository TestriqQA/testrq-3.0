"use client";

import React, { useEffect, useState } from "react";
const AITestingAnimation = () => {    // Corporate Color Palette
    const colors = {
        bg: "#faf5ff",
        coreBg: "#7c3aed",
        coreGlow: "rgba(124, 58, 237, 0.4)",
        accent: "#8b5cf6",
        accentLight: "#c4b5fd",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#581c87",
        textSecondary: "#64748b",
        dataStream: "#a78bfa",
        neuron: "#6366f1",
    };

    // Neural network node positions
    const inputNodes = [
        { id: "i1", x: 100, y: 150 },
        { id: "i2", x: 100, y: 250 },
        { id: "i3", x: 100, y: 350 },
    ];

    const hiddenNodes = [
        { id: "h1", x: 300, y: 120 },
        { id: "h2", x: 300, y: 200 },
        { id: "h3", x: 300, y: 280 },
        { id: "h4", x: 300, y: 360 },
    ];

    const outputNodes = [
        { id: "o1", x: 500, y: 200 },
        { id: "o2", x: 500, y: 300 },
    ];

    // Core AI model position
    const corePos = { x: 650, y: 250 };

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100 overflow-hidden relative shadow-xl border border-purple-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="ai-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="ai-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="core-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                </defs>

                {/* --- NEURAL NETWORK CONNECTIONS --- */}
                {/* Input to Hidden */}
                {inputNodes.map((input, i) =>
                    hiddenNodes.map((hidden, j) => (
                        <line key={`ih-${i}-${j}`} x1={input.x} y1={input.y} x2={hidden.x} y2={hidden.y} stroke={colors.accentLight} strokeWidth="1.5">
                            <animate attributeName="opacity" values="0.3; 1; 0.3" dur={`${1.5 + (i * 0.2)}s`} repeatCount="indefinite" />
                        </line>
                    ))
                )}

                {/* Hidden to Output */}
                {hiddenNodes.map((hidden, i) =>
                    outputNodes.map((output, j) => (
                        <line key={`ho-${i}-${j}`} x1={hidden.x} y1={hidden.y} x2={output.x} y2={output.y} stroke={colors.accentLight} strokeWidth="1.5">
                            <animate attributeName="opacity" values="0.3; 1; 0.3" dur={`${1.2 + (j * 0.3)}s`} repeatCount="indefinite" />
                        </line>
                    ))
                )}

                {/* Output to Core */}
                {outputNodes.map((output, i) => (
                    <line key={`oc-${i}`} x1={output.x} y1={output.y} x2={corePos.x} y2={corePos.y} stroke={colors.accent} strokeWidth="2">
                        <animate attributeName="opacity" values="0.4; 1; 0.4" dur="1s" repeatCount="indefinite" />
                    </line>
                ))}

                {/* --- INPUT NODES --- */}
                {inputNodes.map((node, i) => (
                    <g key={node.id}>
                        <animate attributeName="opacity" values="0.5; 1; 0.5" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                        <circle cx={node.x} cy={node.y} r="18" fill="white" stroke={colors.neuron} strokeWidth="2" filter="url(#ai-shadow)" />
                        <circle cx={node.x} cy={node.y} r="10" fill={colors.neuron} />
                        <text x={node.x - 45} y={node.y + 4} fontSize="10" fill={colors.textSecondary}>Data {i + 1}</text>
                    </g>
                ))}

                {/* --- HIDDEN NODES --- */}
                {hiddenNodes.map((node, i) => (
                    <g key={node.id}>
                        <circle cx={node.x} cy={node.y} r="15" fill="white" stroke={colors.accent} strokeWidth="2" filter="url(#ai-shadow)" />
                        <circle cx={node.x} cy={node.y} r="8" fill={colors.accent} />
                    </g>
                ))}

                {/* --- OUTPUT NODES --- */}
                {outputNodes.map((node, i) => (
                    <g key={node.id}>
                        <circle cx={node.x} cy={node.y} r="20" fill="white" stroke={colors.coreBg} strokeWidth="3" filter="url(#ai-shadow)" />
                        <circle cx={node.x} cy={node.y} r="10" fill={colors.coreBg} />
                        <text x={node.x + 30} y={node.y + 4} fontSize="10" fill={colors.textSecondary}>
                            {i === 0 ? "Prediction" : "Confidence"}
                        </text>
                    </g>
                ))}

                {/* --- AI CORE --- */}
                <g>
                    <animate attributeName="opacity" values="0.8; 1; 0.8" dur="3s" repeatCount="indefinite" />
                    {/* Glow Ring */}
                    <circle cx={corePos.x} cy={corePos.y} r="55" fill="none" stroke={colors.coreGlow} strokeWidth="10">
                        <animateTransform attributeName="transform" type="rotate" from={`0 ${corePos.x} ${corePos.y}`} to={`360 ${corePos.x} ${corePos.y}`} dur="8s" repeatCount="indefinite" />
                    </circle>
                    {/* Core Circle */}
                    <circle cx={corePos.x} cy={corePos.y} r="45" fill="url(#core-gradient)" filter="url(#ai-glow)" />
                    <text x={corePos.x} y={corePos.y + 5} textAnchor="middle" fontSize="18" fontWeight="700" fill="white">AI</text>
                    <text x={corePos.x} y={corePos.y + 70} textAnchor="middle" fontSize="11" fill={colors.textPrimary}>Model Core</text>
                </g>

                {/* --- QA ENGINEER --- */}
                <g>
                    <rect x="50" y="450" width="700" height="12" rx="4" fill="#ddd6fe" />
                    <ellipse cx="400" cy="440" rx="30" ry="10" fill="#8b5cf6" />
                    <circle cx="400" cy="420" r="18" fill="#a78bfa" />
                </g>

                {/* --- VALIDATION PANEL --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1" dur="1s" fill="freeze" />
                    <rect x="620" y="380" width="150" height="80" rx="8" fill="white" filter="url(#ai-shadow)" />
                    <text x="695" y="405" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>Validation</text>

                    <rect x="640" y="415" width="100" height="8" rx="4" fill="#e2e8f0" />
                    <rect x="640" y="415" width="90" height="8" rx="4" fill={colors.success}>
                        <animate attributeName="width" values="0; 90" dur="1s" fill="freeze" />
                    </rect>
                    <text x="640" y="435" fontSize="9" fill={colors.textSecondary}>Accuracy: 94%</text>

                    <rect x="640" y="445" width="100" height="8" rx="4" fill="#e2e8f0" />
                    <rect x="640" y="445" width="95" height="8" rx="4" fill={colors.accent}>
                        <animate attributeName="width" values="0; 95" dur="1s" begin="0.5s" fill="freeze" />
                    </rect>
                    <text x="640" y="465" fontSize="9" fill={colors.textSecondary}>Fairness: 97%</text>
                </g>

                {/* --- ANOMALY ALERT --- */}
                <g>
                    <rect x="440" y="350" width="130" height="35" rx="6" fill={colors.error} />
                    <text x="505" y="372" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ Bias Detected</text>
                </g>

                {/* --- SUCCESS BADGE --- */}
                <g>
                    <animate attributeName="opacity" values="0.6; 1; 0.6" dur="2s" repeatCount="indefinite" />
                    <rect x="300" y="30" width="200" height="40" rx="8" fill={colors.success} filter="url(#ai-shadow)" />
                    <text x="400" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ Model Validated</text>
                </g>

            </svg>
        </div>
    );
};

export default AITestingAnimation;
