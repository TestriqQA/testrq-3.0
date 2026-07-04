"use client";

import React, { useEffect, useState } from "react";
const MicroservicesAnimation = () => {    // Microservices Color Palette
    const colors = {
        bg: "#f8fafc",
        serviceBg: "#3b82f6",
        serviceGlow: "rgba(59, 130, 246, 0.4)",
        accent: "#6366f1",
        accentLight: "#818cf8",
        success: "#10b981",
        error: "#f43f5e",
        warning: "#fbbf24",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        connection: "#94a3b8",
        dataPacket: "#3b82f6",
        contract: "#8b5cf6",
    };

    // Service nodes positions
    const services = [
        { id: "gateway", x: 400, y: 100, label: "API Gateway", color: "#6366f1", size: 40, emoji: "🌐" },
        { id: "auth", x: 200, y: 220, label: "Auth Service", color: "#3b82f6", size: 35, emoji: "🔐" },
        { id: "order", x: 400, y: 250, label: "Order Service", color: "#3b82f6", size: 35, emoji: "📦" },
        { id: "payment", x: 600, y: 220, label: "Payment Service", color: "#3b82f6", size: 35, emoji: "💳" },
        { id: "inventory", x: 300, y: 380, label: "Inventory", color: "#3b82f6", size: 32, emoji: "🏭" },
        { id: "shipping", x: 500, y: 380, label: "Shipping", color: "#3b82f6", size: 32, emoji: "🚚" },
    ];

    // Connections
    const connections = [
        { from: "gateway", to: "auth" },
        { from: "gateway", to: "order" },
        { from: "gateway", to: "payment" },
        { from: "order", to: "inventory" },
        { from: "order", to: "shipping" },
        { from: "payment", to: "auth" },
    ];

    // Animation Sequence    const getServicePos = (id: string) => services.find(s => s.id === id)!;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden relative shadow-xl border border-blue-100">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="service-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
                    </filter>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* --- CONNECTIONS --- */}
                {connections.map((conn, i) => {
                    const from = getServicePos(conn.from);
                    const to = getServicePos(conn.to);
                    return (
                        <line key={`conn-${i}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={colors.connection} strokeWidth="2" strokeDasharray="4 4">
                            <animate attributeName="stroke-dashoffset" values="8; 0" dur="1s" repeatCount="indefinite" />
                        </line>
                    );
                })}

                {/* --- SERVICE NODES --- */}
                {services.map((service, i) => (
                    <g key={service.id}>
                        {/* Service Container */}
                        <rect x={service.x - service.size} y={service.y - service.size} width={service.size * 2} height={service.size * 2} rx="12" fill="white" stroke={service.color} strokeWidth="2" filter="url(#service-shadow)" />

                        {/* Icon */}
                        <text
                            x={service.x}
                            y={service.y + 8}
                            textAnchor="middle"
                            fontSize={service.size * 0.7}
                        >
                            {service.emoji}
                        </text>

                        {/* Label */}
                        <text
                            x={service.x}
                            y={service.y + service.size + 18}
                            textAnchor="middle"
                            fontSize="11"
                            fontWeight="600"
                            fill={colors.textPrimary}
                        >
                            {service.label}
                        </text>

                        {/* Contract Icon - Only during contract test phase */}
                        <g opacity="0">
                            <animate attributeName="opacity" values="0; 1; 1; 0; 0; 0" dur="9s" repeatCount="indefinite" />
                            <text x={service.x + service.size - 5} y={service.y - service.size + 15} fontSize="12">
                                📜
                            </text>
                        </g>
                    </g>
                ))}

                {/* --- DATA FLOWS (Packets) --- */}
                {connections.map((conn, i) => {
                    const from = getServicePos(conn.from);
                    const to = getServicePos(conn.to);
                    return (
                        <g key={`packet-${i}`}>
                            <animateTransform attributeName="transform" type="translate" values={`${from.x} ${from.y}; ${to.x} ${to.y}; ${from.x} ${from.y}`} dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                            <circle r="4" fill={colors.dataPacket} filter="url(#glow)" />
                        </g>
                    );
                })}

                {/* --- STATUS OVERLAYS --- */}

                {/* Contract Testing Phase */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0; 0; 0" dur="9s" repeatCount="indefinite" />
                    <rect x="300" y="30" width="200" height="30" rx="15" fill={colors.contract} />
                    <text x="400" y="50" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">CONTRACT VALIDATION</text>
                </g>

                {/* Chaos Engineering Phase */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 0; 0; 1; 1; 0" dur="9s" repeatCount="indefinite" />
                    <rect x="580" y="150" width="140" height="40" rx="8" fill={colors.error} />
                    <text x="650" y="175" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">SERVICE FAILURE</text>

                    <text x="600" y="140" fontSize="30">
                        <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" repeatCount="indefinite" />
                        ⚡
                    </text>
                </g>

                {/* Resilience Phase */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 0; 0; 0; 0; 1" dur="9s" repeatCount="indefinite" />
                    <rect x="250" y="30" width="300" height="40" rx="20" fill={colors.success} filter="url(#glow)" />
                    <text x="400" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">RESILIENCE RECOVERY OK</text>
                </g>

            </svg>

            {/* Legend / Overlay Text */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-blue-100 shadow-sm max-w-[200px]">
                    <h4 className="text-xs font-bold text-blue-900 mb-1">Architecture Validation</h4>
                    <p className="text-[10px] text-gray-600 leading-tight">Testing service isolation, contracts, and distributed resilience.</p>
                </div>

                <div className="flex flex-col gap-1 items-end">
                    <div className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full shadow-md">
                        CLUSTER READY
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MicroservicesAnimation;
