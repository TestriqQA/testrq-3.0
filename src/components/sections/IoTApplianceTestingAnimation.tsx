"use client";

import React, { useEffect, useState } from "react";
const IoTApplianceTestingAnimation = () => {    // Corporate Color Palette - IoT / Connectivity Theme
    const colors = {
        bg: "#ecfeff",
        primary: "#25A8E0", // Testriq Brand Blue
        secondary: "#06b6d4", // Cyan
        accent: "#0891b2",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        deviceBg: "#1e293b",
        cloudBg: "#0ea5e9",
    };

    // Animation Sequence

    return (
        <div
            className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 overflow-hidden relative shadow-xl border border-cyan-200"
            role="img"
            aria-label="Animated illustration showing the IoT appliance testing process"
        >
            <svg
                viewBox="0 0 800 600"
                className="w-full h-full relative z-10"
                aria-hidden="true"
            >
                <defs>
                    <filter id="iot-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="iot-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#25A8E0" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="cloud-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                </defs>

                {/* === SMART HOME ENVIRONMENT === */}
                <g>
                    {/* House Outline */}
                    <path
                        d="M 400 80 L 600 180 L 600 380 L 200 380 L 200 180 Z"
                        fill="none"
                        stroke="#cbd5e1"
                        strokeWidth="2"
                        strokeDasharray="8 4"
                    />
                    {/* Roof */}
                    <path
                        d="M 180 180 L 400 60 L 620 180"
                        fill="none"
                        stroke="#94a3b8"
                        strokeWidth="3"
                    />
                </g>

                {/* === CLOUD HUB === */}
                <g>
                    {/* Cloud Shape */}
                    <ellipse cx="400" cy="35" rx="70" ry="25" fill="url(#cloud-gradient)" filter="url(#iot-shadow)" />
                    <circle cx="350" cy="35" r="18" fill="url(#cloud-gradient)" />
                    <circle cx="450" cy="35" r="18" fill="url(#cloud-gradient)" />
                    <text x="400" y="40" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
                        ☁ Cloud Hub
                    </text>
                </g>

                {/* === QA ENGINEER WORKSTATION === */}
                <g>
                    {/* Desk */}
                    <rect x="30" y="320" width="140" height="10" rx="3" fill="#cbd5e1" />
                    {/* Monitor */}
                    <rect x="55" y="250" width="90" height="65" rx="5" fill="#1e293b" filter="url(#iot-shadow)" />
                    <rect x="62" y="257" width="76" height="45" rx="3" fill="#0f172a" />
                    {/* Dashboard on screen */}
                    <rect x="67" y="262" width="30" height="15" rx="2" fill={colors.primary} opacity="0.5" />
                    <rect x="102" y="262" width="30" height="15" rx="2" fill={colors.success} opacity="0.5" />
                    <rect x="67" y="282" width="66" height="8" rx="2" fill="#334155" />
                    {/* Monitor Stand */}
                    <rect x="92" y="315" width="16" height="8" fill="#64748b" />
                    {/* Engineer Silhouette */}
                    <ellipse cx="100" cy="350" rx="30" ry="10" fill="#94a3b8" />
                    <rect x="80" y="325" width="40" height="28" rx="10" fill={colors.primary} />
                    <circle cx="100" cy="310" r="16" fill={colors.primary} />
                    {/* Headset */}
                    <path d="M 86 305 Q 100 290 114 305" stroke={colors.secondary} strokeWidth="3" fill="none" />
                </g>

                {/* === IOT DEVICES === */}

                {/* Thermostat */}
                <g>
                    <circle cx="280" cy="200" r="35" fill="white" filter="url(#iot-shadow)" stroke="#e2e8f0" strokeWidth="2" />
                    <circle cx="280" cy="200" r="25" fill={colors.deviceBg} />
                    <text x="280" y="205" textAnchor="middle" fontSize="12" fill={colors.secondary} fontWeight="bold">
                        72°
                    </text>
                    <text x="280" y="250" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>
                        Thermostat
                    </text>
                </g>

                {/* Smart Light */}
                <g>
                    <rect x="360" y="165" width="50" height="70" rx="8" fill="white" filter="url(#iot-shadow)" stroke="#e2e8f0" strokeWidth="2" />
                    <ellipse cx="385" cy="195" rx="15" ry="20" fill={colors.warning} opacity="0.8" />
                    <path d="M 375 220 L 395 220 L 390 235 L 380 235 Z" fill="#94a3b8" />
                    <text x="385" y="260" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>
                        Smart Light
                    </text>
                </g>

                {/* Smart Fridge */}
                <g>
                    <rect x="450" y="140" width="60" height="100" rx="6" fill="white" filter="url(#iot-shadow)" stroke="#e2e8f0" strokeWidth="2" />
                    <rect x="455" y="145" width="50" height="55" rx="3" fill={colors.deviceBg} />
                    <rect x="455" y="205" width="50" height="30" rx="3" fill="#475569" />
                    <circle cx="500" cy="170" r="3" fill={colors.secondary} />
                    <text x="480" y="260" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>
                        Smart Fridge
                    </text>
                </g>

                {/* Security Camera */}
                <g>
                    <rect x="545" y="175" width="55" height="40" rx="6" fill="white" filter="url(#iot-shadow)" stroke="#e2e8f0" strokeWidth="2" />
                    <circle cx="572" cy="195" r="12" fill={colors.deviceBg} />
                    <circle cx="572" cy="195" r="6" fill={colors.secondary} />
                    <rect x="555" y="215" width="10" height="25" fill="#94a3b8" />
                    <text x="572" y="260" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>
                        Camera
                    </text>
                </g>

                {/* Washing Machine - This one will have a defect */}
                <g>
                    <rect x="630" y="155" width="55" height="75" rx="6" fill="white" filter="url(#iot-shadow)" stroke="#e2e8f0" strokeWidth="2" />
                    <circle cx="657" cy="195" r="22" fill={colors.deviceBg} />
                    <circle cx="657" cy="195" r="15" fill="#475569" />
                    <circle cx="657" cy="195" r="8" fill="#64748b" />
                    <rect x="635" y="160" width="40" height="8" rx="2" fill="#334155" />
                    <text x="657" y="260" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>
                        Washer
                    </text>
                </g>

                {/* === CONNECTIVITY LINES === */}
                <g>
                    {/* Lines from devices to cloud */}
                    <path d="M 280 165 Q 280 100 400 55" stroke={colors.secondary} strokeWidth="2" strokeDasharray="6 3" fill="none">
                        <animate attributeName="stroke-dashoffset" values="9; 0" dur="1s" repeatCount="indefinite" />
                    </path>
                    <path d="M 385 165 Q 385 100 400 55" stroke={colors.secondary} strokeWidth="2" strokeDasharray="6 3" fill="none">
                        <animate attributeName="stroke-dashoffset" values="9; 0" dur="1s" repeatCount="indefinite" />
                    </path>
                    <path d="M 480 140 Q 480 90 400 55" stroke={colors.secondary} strokeWidth="2" strokeDasharray="6 3" fill="none">
                        <animate attributeName="stroke-dashoffset" values="9; 0" dur="1s" repeatCount="indefinite" />
                    </path>
                    <path d="M 572 175 Q 572 100 400 55" stroke={colors.secondary} strokeWidth="2" strokeDasharray="6 3" fill="none">
                        <animate attributeName="stroke-dashoffset" values="9; 0" dur="1s" repeatCount="indefinite" />
                    </path>
                    <path d="M 657 155 Q 620 100 400 55" stroke={colors.secondary} strokeWidth="2" strokeDasharray="6 3" fill="none">
                        <animate attributeName="stroke-dashoffset" values="9; 0" dur="1s" repeatCount="indefinite" />
                    </path>
                </g>

                {/* === SENSOR DATA PULSES === */}
                <g>
                    {[280, 385, 480, 572, 657].map((x, i) => (
                        <circle key={`pulse-${i}`} cx={x} cy={i === 2 ? 130 : i === 4 ? 145 : 155} r="6" fill={colors.success}>
                            <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                        </circle>
                    ))}
                </g>

                {/* === SECURITY SCAN SHIELD === */}
                <g>
                    <animate attributeName="opacity" values="0.6; 1; 0.6" dur="2s" repeatCount="indefinite" />
                    <path
                        d="M 0 -25 L 20 -15 L 20 10 L 0 25 L -20 10 L -20 -15 Z"
                        fill={colors.primary}
                        transform="translate(280, 300)"
                    />
                    <text x="280" y="305" textAnchor="middle" fontSize="14" fill="white">
                        🛡
                    </text>
                </g>

                {/* === DEFECT DETECTION ON WASHER === */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" begin="2s" repeatCount="indefinite" />
                    <circle cx="685" cy="165" r="14" fill={colors.error} opacity="0.2" />
                    <circle cx="685" cy="165" r="10" fill={colors.error} />
                    <text x="685" y="170" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">
                        !
                    </text>
                    <rect x="620" y="275" width="90" height="22" rx="5" fill={colors.error} />
                    <text x="665" y="290" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">
                        ⚠ Firmware Error
                    </text>
                </g>

                {/* === SUCCESS INDICATORS AFTER RETEST === */}
                <g>
                    {/* Success checkmarks on all devices */}
                    {[
                        { x: 305, y: 180 },
                        { x: 405, y: 175 },
                        { x: 505, y: 150 },
                        { x: 595, y: 180 },
                        { x: 680, y: 165 },
                    ].map((pos, i) => (
                        <g key={`check-${i}`} opacity="0">
                            <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin={`${5 + i * 0.2}s`} fill="freeze" />
                            <circle cx={pos.x} cy={pos.y} r="10" fill={colors.success} />
                            <text x={pos.x} y={pos.y + 4} textAnchor="middle" fontSize="10" fill="white">
                                ✓
                            </text>
                        </g>
                    ))}
                </g>

                {/* === COMPLETION SUCCESS BADGE === */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin="6s" fill="freeze" />
                    <rect
                        x="230"
                        y="560"
                        width="340"
                        height="35"
                        rx="10"
                        fill={colors.success}
                        filter="url(#iot-shadow)"
                    />
                    <text
                        x="400"
                        y="583"
                        textAnchor="middle"
                        fontSize="13"
                        fontWeight="bold"
                        fill="white"
                    >
                        ✓ All Devices Verified - Ecosystem Ready!
                    </text>
                </g>

                {/* === TESTING PHASES PANEL === */}
                <g>
                    <rect x="30" y="400" width="140" height="150" rx="10" fill="white" filter="url(#iot-shadow)" />
                    <text x="100" y="425" textAnchor="middle" fontSize="10" fontWeight="bold" fill={colors.textPrimary}>
                        Testing Phase
                    </text>

                    {/* Phase Indicators */}
                    {[
                        { label: "Connectivity", phase: "connectivity" },
                        { label: "Sensor Data", phase: "sensorValidate" },
                        { label: "Security", phase: "securityScan" },
                        { label: "Firmware", phase: "defectDetect" },
                    ].map((item, i) => (
                        <g key={item.phase}>
                            <circle cx="50" cy={450 + i * 25} r="6" fill="#e2e8f0">
                                <animate attributeName="fill" values={`#e2e8f0; ${colors.success}`} dur="0.5s" begin={`${i * 1 + 1}s`} fill="freeze" />
                            </circle>
                            <text x="62" y={454 + i * 25} fontSize="9" fill={colors.textSecondary}>
                                {item.label}
                            </text>
                        </g>
                    ))}
                </g>
            </svg>
        </div>
    );
};

export default IoTApplianceTestingAnimation;
