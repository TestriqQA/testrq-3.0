"use client";

import React, { useEffect, useState } from "react";
const IoTTestingAnimation = () => {    // Corporate Color Palette
    const colors = {
        bg: "#f0fdfa",
        cloudBg: "#0891b2",
        deviceBg: "#ffffff",
        accent: "#14b8a6",
        accentLight: "#5eead4",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#134e4a",
        textSecondary: "#64748b",
        connection: "#06b6d4",
    };

    // Device positions (arranged in a network topology)
    const devices = [
        { id: "cloud", x: 400, y: 80, label: "Cloud", color: colors.cloudBg, size: 50 },
        { id: "gateway", x: 400, y: 200, label: "Gateway", color: "#6366f1", size: 40 },
        { id: "sensor1", x: 200, y: 320, label: "Sensor", color: "#22c55e", size: 30 },
        { id: "thermo", x: 320, y: 380, label: "Thermostat", color: "#3b82f6", size: 30 },
        { id: "camera", x: 480, y: 380, label: "Camera", color: "#8b5cf6", size: 30 },
        { id: "lock", x: 600, y: 320, label: "Smart Lock", color: "#ef4444", size: 30 },
    ];

    // Connections between devices
    const connections = [
        { from: "cloud", to: "gateway" },
        { from: "gateway", to: "sensor1" },
        { from: "gateway", to: "thermo" },
        { from: "gateway", to: "camera" },
        { from: "gateway", to: "lock" },
    ];

    // Animation Sequence    const getDevicePos = (id: string) => devices.find(d => d.id === id)!;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-100 overflow-hidden relative shadow-xl border border-teal-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="iot-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="iot-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* --- CONNECTION LINES --- */}
                {connections.map((conn, i) => {
                    const from = getDevicePos(conn.from);
                    const to = getDevicePos(conn.to);
                    return (
                        <line key={`conn-${i}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={colors.connection} strokeWidth="2" strokeDasharray="5 5">
                            <animate attributeName="stroke-dashoffset" values="10; 0" dur="1s" repeatCount="indefinite" />
                        </line>
                    );
                })}

                {/* --- DATA PACKETS --- */}
                {connections.map((conn, i) => {
                    const from = getDevicePos(conn.from);
                    const to = getDevicePos(conn.to);
                    return (
                        <g key={`packet-${i}`}>
                            <animateTransform attributeName="transform" type="translate" values={`${from.x} ${from.y}; ${to.x} ${to.y}; ${from.x} ${from.y}`} dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                            <circle r="4" fill={colors.accentLight} filter="url(#iot-glow)" />
                        </g>
                    );
                })}

                {/* --- IOT DEVICES --- */}
                {devices.map((device, i) => (
                    <g key={device.id}>
                        {/* Device Circle */}
                        <circle cx={device.x} cy={device.y} r={device.size} fill={colors.deviceBg} stroke={device.color} strokeWidth="3" filter="url(#iot-shadow)" />

                        {/* Device Icon (Simplified) */}
                        <circle cx={device.x} cy={device.y} r={device.size * 0.5} fill={device.color} />

                        {/* Device Label */}
                        <text
                            x={device.x}
                            y={device.y + device.size + 15}
                            textAnchor="middle"
                            fontSize="11"
                            fontWeight="600"
                            fill={colors.textPrimary}
                        >
                            {device.label}
                        </text>

                        {/* Status Indicator */}
                        <circle cx={device.x + device.size * 0.7} cy={device.y - device.size * 0.7} r="8" fill={colors.success} stroke="white" strokeWidth="2" opacity="0">
                            <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin={`${i * 0.3 + 1}s`} fill="freeze" />
                        </circle>
                    </g>
                ))}

                {/* --- QA ENGINEER --- */}
                <g>
                    {/* Desk */}
                    <rect x="50" y="460" width="700" height="12" rx="4" fill="#a7f3d0" />
                    {/* Person */}
                    <ellipse cx="400" cy="450" rx="30" ry="10" fill="#059669" />
                    <circle cx="400" cy="430" r="18" fill="#10b981" />
                </g>

                {/* --- MONITORING PANEL --- */}
                <g>
                    <rect x="620" y="120" width="150" height="100" rx="8" fill="white" filter="url(#iot-shadow)" />
                    <text x="695" y="145" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.textPrimary}>Network Status</text>

                    {/* Mini bars */}
                    <rect x="640" y="160" width="110" height="10" rx="5" fill="#e2e8f0" />
                    <rect x="640" y="160" width="0" height="10" rx="5" fill={colors.success}>
                        <animate attributeName="width" values="0; 100" dur="1.5s" begin="2s" fill="freeze" />
                    </rect>
                    <text x="640" y="185" fontSize="9" fill={colors.textSecondary}>Latency: 12ms</text>

                    <rect x="640" y="195" width="110" height="10" rx="5" fill="#e2e8f0" />
                    <rect x="640" y="195" width="0" height="10" rx="5" fill={colors.accent}>
                        <animate attributeName="width" values="0; 105" dur="1.5s" begin="2.5s" fill="freeze" />
                    </rect>
                    <text x="640" y="220" fontSize="9" fill={colors.textSecondary}>Uptime: 99.9%</text>
                </g>

                {/* --- ALERT BADGE --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" begin="2s" repeatCount="indefinite" />
                    <rect x="420" y="340" width="120" height="35" rx="6" fill={colors.error} />
                    <text x="480" y="362" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ Anomaly Detected</text>
                </g>

                {/* --- SUCCESS BADGE --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin="6s" fill="freeze" />
                    <rect x="300" y="30" width="200" height="40" rx="8" fill={colors.success} filter="url(#iot-shadow)" />
                    <text x="400" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ All Systems Healthy</text>
                </g>

            </svg>
        </div>
    );
};

export default IoTTestingAnimation;
