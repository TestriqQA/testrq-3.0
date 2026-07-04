"use client";

import React, { useEffect, useState } from "react";
const SmartDeviceTestingAnimation = () => {    // Corporate Color Palette
    const colors = {
        bg: "#f0fdf4",
        hubBg: "#16a34a",
        hubGlow: "rgba(22, 163, 74, 0.4)",
        accent: "#10b981",
        accentLight: "#6ee7b7",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#166534",
        textSecondary: "#64748b",
        connection: "#34d399",
        wifi: "#3b82f6",
        bluetooth: "#6366f1",
    };

    // Smart devices positions
    const devices = [
        { id: "hub", x: 400, y: 230, label: "Smart Hub", color: colors.hubBg, size: 50, emoji: "🏠" },
        { id: "speaker", x: 200, y: 150, label: "Speaker", color: "#8b5cf6", size: 35, emoji: "🔊" },
        { id: "tv", x: 580, y: 120, label: "Smart TV", color: "#3b82f6", size: 35, emoji: "📺" },
        { id: "watch", x: 150, y: 320, label: "Wearable", color: "#f59e0b", size: 30, emoji: "⌚" },
        { id: "phone", x: 280, y: 380, label: "Phone", color: "#10b981", size: 32, emoji: "📱" },
        { id: "bulb", x: 520, y: 380, label: "Smart Light", color: "#eab308", size: 30, emoji: "💡" },
        { id: "camera", x: 650, y: 280, label: "Camera", color: "#ef4444", size: 32, emoji: "📷" },
    ];

    // Connections from hub to all devices
    const connections = devices.filter(d => d.id !== "hub").map(d => ({ from: "hub", to: d.id }));

    // Animation Sequence    const getDevicePos = (id: string) => devices.find(d => d.id === id)!;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden relative shadow-xl border border-green-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="device-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="hub-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
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
                        <line key={`conn-${i}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={colors.connection} strokeWidth="2" strokeDasharray="6 6">
                            <animate attributeName="stroke-dashoffset" values="12; 0" dur="0.5s" repeatCount="indefinite" />
                        </line>
                    );
                })}

                {/* --- DATA PACKETS --- */}
                {connections.map((conn, i) => {
                    const from = getDevicePos(conn.from);
                    const to = getDevicePos(conn.to);
                    return (
                        <g key={`packet-${i}`}>
                            <animateTransform attributeName="transform" type="translate" values={`${from.x} ${from.y}; ${to.x} ${to.y}; ${from.x} ${from.y}`} dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
                            <circle r="5" fill={colors.wifi} filter="url(#hub-glow)" />
                        </g>
                    );
                })}

                {/* --- SMART DEVICES --- */}
                {devices.map((device, i) => (
                    <g key={device.id}>
                        {/* Device Circle */}
                        <circle cx={device.x} cy={device.y} r={device.size} fill="white" stroke={device.color} strokeWidth={device.id === "hub" ? 4 : 3} filter={device.id === "hub" ? "url(#hub-glow)" : "url(#device-shadow)"} />

                        {/* Device Emoji/Icon */}
                        <text
                            x={device.x}
                            y={device.y + 6}
                            textAnchor="middle"
                            fontSize={device.id === "hub" ? 28 : 20}
                        >
                            {device.emoji}
                        </text>

                        {/* Device Label */}
                        <text
                            x={device.x}
                            y={device.y + device.size + 18}
                            textAnchor="middle"
                            fontSize="10"
                            fontWeight="600"
                            fill={colors.textPrimary}
                        >
                            {device.label}
                        </text>

                        {/* Status Indicator */}
                        {device.id !== "hub" && (
                            <circle cx={device.x + device.size * 0.7} cy={device.y - device.size * 0.7} r="8" fill={device.id === "camera" ? colors.error : colors.success} stroke="white" strokeWidth="2">
                                {device.id === "camera" && (
                                    <animate attributeName="fill" values={`${colors.error}; ${colors.error}; ${colors.success}; ${colors.success}`} dur="8s" repeatCount="indefinite" />
                                )}
                            </circle>
                        )}
                    </g>
                ))}

                {/* --- HUB PULSE EFFECT --- */}
                <circle cx={400} cy={230} r="55" fill="none" stroke={colors.hubGlow} strokeWidth="6">
                    <animate attributeName="r" values="55; 70; 55" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1; 0; 1" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* --- QA ENGINEER --- */}
                <g>
                    <rect x="50" y="450" width="700" height="12" rx="4" fill="#bbf7d0" />
                    <ellipse cx="400" cy="440" rx="30" ry="10" fill="#16a34a" />
                    <circle cx="400" cy="420" r="18" fill="#22c55e" />
                </g>

                {/* --- TESTING ACTIVITY PANEL --- */}
                <g>
                    <rect x="620" y="380" width="160" height="90" rx="10" fill="white" filter="url(#device-shadow)" />
                    <text x="700" y="405" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>Testing Status</text>

                    <text x="635" y="430" fontSize="9" fill={colors.textSecondary}>WiFi:</text>
                    <rect x="665" y="422" width="100" height="8" rx="4" fill={colors.wifi}>
                        <animate attributeName="width" values="0; 100" dur="2s" begin="0.5s" fill="freeze" />
                    </rect>

                    <text x="635" y="452" fontSize="9" fill={colors.textSecondary}>BLE:</text>
                    <rect x="665" y="444" width="90" height="8" rx="4" fill={colors.bluetooth}>
                        <animate attributeName="width" values="0; 90" dur="2s" begin="1s" fill="freeze" />
                    </rect>

                    <text x="635" y="474" fontSize="9" fill={colors.textSecondary}>Sync:</text>
                    <rect x="665" y="466" width="95" height="8" rx="4" fill={colors.success}>
                        <animate attributeName="width" values="0; 95" dur="2s" begin="1.5s" fill="freeze" />
                    </rect>
                </g>

                {/* --- ANOMALY ALERT --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="8s" repeatCount="indefinite" />
                    <rect x="560" y="230" width="150" height="35" rx="8" fill={colors.error} />
                    <text x="635" y="252" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ Camera Offline</text>
                </g>

                {/* --- SUCCESS BADGE --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 0; 1; 1" dur="8s" repeatCount="indefinite" />
                    <rect x="280" y="40" width="240" height="45" rx="10" fill={colors.success} filter="url(#device-shadow)" />
                    <text x="400" y="68" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ All Devices Validated</text>
                </g>

            </svg>
        </div>
    );
};

export default SmartDeviceTestingAnimation;
