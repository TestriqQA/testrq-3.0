"use client";

import React, { useEffect, useState } from "react";
const RoboticTestingAnimation = () => {    // Corporate Color Palette
    const colors = {
        bg: "#f0f9ff",
        armBase: "#475569",
        armJoint: "#1e40af",
        armSegment: "#64748b",
        accent: "#3b82f6",
        accentLight: "#93c5fd",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        sensor: "#06b6d4",
        path: "#818cf8",
    };

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="robot-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="arm-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#475569" />
                        <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                    <linearGradient id="joint-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                </defs>

                {/* --- CONTROL CONSOLE --- */}
                <g>
                    <rect x="50" y="100" width="180" height="280" rx="10" fill="white" filter="url(#robot-shadow)" />
                    <rect x="50" y="100" width="180" height="40" rx="10" fill="url(#joint-gradient)" />
                    <text x="140" y="125" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Control Panel</text>

                    {/* Code Lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <g key={`code-${i}`}>
                            <rect x="65" y={160 + i * 25} width={80 + (i % 3) * 20} height="10" rx="5" fill={colors.accent} opacity="0.5">
                                <animate attributeName="opacity" values="0.2; 1; 0.2" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                            </rect>
                        </g>
                    ))}

                    {/* Status Indicators */}
                    <circle cx="200" cy="360" r="10" fill={colors.success}>
                        <animate attributeName="fill" values={`${colors.success}; ${colors.error}; ${colors.success}`} dur="8s" repeatCount="indefinite" />
                    </circle>
                    <text x="190" y="380" fontSize="9" fill={colors.textSecondary}>Status</text>
                </g>

                {/* --- ROBOTIC ARM PATH --- */}
                <path d="M 400 400 Q 500 200 600 300" fill="none" stroke={colors.path} strokeWidth="2" strokeDasharray="8 8">
                    <animate attributeName="stroke-dashoffset" values="16; 0" dur="1s" repeatCount="indefinite" />
                </path>

                {/* --- ROBOTIC ARM --- */}
                <g>
                    {/* Base */}
                    <rect x="350" y="420" width="100" height="30" rx="5" fill="url(#arm-gradient)" filter="url(#robot-shadow)" />
                    <ellipse cx="400" cy="420" rx="40" ry="10" fill={colors.armJoint} />

                    {/* Arm Segment 1 */}
                    <g>
                        <animateTransform attributeName="transform" type="rotate" values="0 400 420; 30 400 420; -15 400 420; 0 400 420" dur="8s" repeatCount="indefinite" />
                        <rect x="385" y="320" width="30" height="100" rx="8" fill="url(#arm-gradient)" filter="url(#robot-shadow)" />

                        {/* Joint 1 */}
                        <circle cx="400" cy="320" r="18" fill="url(#joint-gradient)" filter="url(#robot-shadow)" />

                        {/* Arm Segment 2 */}
                        <g>
                            <animateTransform attributeName="transform" type="rotate" values="0 400 320; 45 400 320; -30 400 320; 0 400 320" dur="8s" repeatCount="indefinite" />
                            <rect x="388" y="230" width="24" height="90" rx="6" fill={colors.armSegment} filter="url(#robot-shadow)" />

                            {/* Joint 2 */}
                            <circle cx="400" cy="230" r="14" fill="url(#joint-gradient)" />

                            {/* End Effector / Gripper */}
                            <g>
                                <rect x="390" y="200" width="8" height="35" rx="2" fill={colors.armBase}>
                                    <animate attributeName="x" values="390; 385; 390" dur="2s" repeatCount="indefinite" />
                                </rect>
                                <rect x="402" y="200" width="8" height="35" rx="2" fill={colors.armBase}>
                                    <animate attributeName="x" values="402; 407; 402" dur="2s" repeatCount="indefinite" />
                                </rect>
                                <rect x="385" y="195" width="30" height="10" rx="3" fill={colors.armJoint} />
                            </g>
                        </g>
                    </g>
                </g>

                {/* --- SENSOR READOUTS --- */}
                <g>
                    <rect x="550" y="100" width="200" height="180" rx="10" fill="white" filter="url(#robot-shadow)" />
                    <text x="650" y="130" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.textPrimary}>Sensor Data</text>

                    {/* Sensor Bars */}
                    {[
                        { label: "Position", value: 95, color: colors.accent },
                        { label: "Torque", value: 78, color: colors.success },
                        { label: "Velocity", value: 88, color: "#8b5cf6" },
                    ].map((sensor, i) => (
                        <g key={`sensor-${i}`}>
                            <text x="565" y={165 + i * 45} fontSize="10" fill={colors.textSecondary}>{sensor.label}</text>
                            <rect x="565" y={175 + i * 45} width="170" height="12" rx="6" fill="#e2e8f0" />
                            <rect x="565" y={175 + i * 45} width="0" height="12" rx="6" fill={sensor.color}>
                                <animate attributeName="width" values={`0; ${(sensor.value / 100) * 170}`} dur="2s" begin={`${1 + i * 0.3}s`} fill="freeze" />
                            </rect>
                            <text x="720" y={185 + i * 45} fontSize="10" fontWeight="600" fill={colors.textPrimary}>{sensor.value}%</text>
                        </g>
                    ))}
                </g>

                {/* --- QA ENGINEER --- */}
                <g>
                    <rect x="50" y="420" width="150" height="10" rx="2" fill="#cbd5e1" />
                    <ellipse cx="125" cy="415" rx="25" ry="8" fill="#475569" />
                    <circle cx="125" cy="395" r="15" fill="#64748b" />
                </g>

                {/* --- ANOMALY ALERT --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="8s" repeatCount="indefinite" />
                    <rect x="320" y="130" width="160" height="40" rx="8" fill={colors.error} />
                    <text x="400" y="155" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">⚠ Joint Error Detected</text>
                </g>

                {/* --- SUCCESS BADGE --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                    <rect x="280" y="50" width="240" height="45" rx="10" fill={colors.success} filter="url(#robot-shadow)" />
                    <text x="400" y="78" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ Robot System Validated</text>
                </g>

            </svg>
        </div>
    );
};

export default RoboticTestingAnimation;
