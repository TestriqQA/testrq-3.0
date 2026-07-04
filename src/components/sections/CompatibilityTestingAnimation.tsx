"use client";

import React, { useEffect, useState } from "react";
import { FaChrome, FaFirefox, FaSafari, FaEdge, FaMobile, FaTablet, FaLaptop } from "react-icons/fa6";

const CompatibilityTestingAnimation = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl border border-blue-200" />;

    const devices = [
        { id: "laptop", name: "Desktop", icon: <FaLaptop />, x: 100, y: 100, width: 250, height: 160 },
        { id: "tablet", name: "Tablet", icon: <FaTablet />, x: 450, y: 150, width: 120, height: 180 },
        { id: "mobile", name: "Mobile", icon: <FaMobile />, x: 620, y: 200, width: 80, height: 140 },
    ];

    const browsers = [
        { icon: <FaChrome className="text-red-500" />, name: "Chrome" },
        { icon: <FaFirefox className="text-orange-500" />, name: "Firefox" },
        { icon: <FaSafari className="text-blue-500" />, name: "Safari" },
        { icon: <FaEdge className="text-blue-600" />, name: "Edge" },
    ];

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden relative shadow-xl border border-blue-200 p-8 flex items-center justify-center">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* --- Background Network Lines --- */}
                <g opacity="0.1">
                    <line x1="100" y1="100" x2="450" y2="150" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="450" y1="150" x2="620" y2="200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="100" y1="100" x2="620" y2="200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
                </g>

                {/* --- Devices --- */}
                {devices.map((device, idx) => (
                    <g
                        key={device.id}
                        className="animate-fade-in"
                        style={{ animationDelay: `${idx * 0.4}s` }}
                    >
                        {/* Device Frame */}
                        <rect
                            x={device.x}
                            y={device.y}
                            width={device.width}
                            height={device.height}
                            rx="10"
                            fill="white"
                            stroke="#e2e8f0"
                            strokeWidth="2"
                            className="shadow-sm"
                        />

                        {/* Screen Content Mockup */}
                        <rect
                            x={device.x + 8}
                            y={device.y + 8}
                            width={device.width - 16}
                            height={device.height - 30}
                            rx="4"
                            fill="#f8fafc"
                        />

                        {/* Status Dots */}
                        <circle
                            cx={device.x + device.width - 20}
                            cy={device.y + device.height - 15}
                            r="5"
                            fill="#22c55e"
                        >
                            <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" begin={`${idx * 0.2}s`} repeatCount="indefinite" />
                        </circle>

                        {/* Browser Icons on Screen */}
                        <g opacity="0.6">
                            {browsers.map((browser, bIdx) => (
                                <foreignObject
                                    key={bIdx}
                                    x={device.x + 15 + (bIdx * (device.width / 5))}
                                    y={device.y + 20}
                                    width="20"
                                    height="20"
                                    xmlns="http://www.w3.org/1999/xhtml"
                                >
                                    <div className="text-lg">
                                        {browser.icon}
                                    </div>
                                </foreignObject>
                            ))}
                        </g>

                        {/* Device Icon / Name Label */}
                        <text
                            x={device.x + 10}
                            y={device.y + device.height - 10}
                            fontSize="10"
                            fontWeight="600"
                            fill="#64748b"
                        >
                            {device.name} Validation
                        </text>
                    </g>
                ))}

                {/* --- Animation: Data Flow/Checkmark --- */}
                <circle
                    r="3"
                    fill="#3b82f6"
                >
                    <animate attributeName="cx" values="100; 450; 620; 100" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="100; 150; 200; 100" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Success Indicator appearing at the end */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="6s" begin="2s" repeatCount="indefinite" />
                    <rect x="300" y="380" width="200" height="40" rx="20" fill="#22c55e" />
                    <text x="400" y="405" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">✓ Compatibility Verified</text>
                </g>

                {/* Scanning Line */}
                <rect
                    x="0"
                    y="0"
                    width="800"
                    height="2"
                    fill="url(#scanning-gradient)"
                    opacity="0.3"
                >
                    <animate attributeName="y" values="0; 500; 0" dur="4s" repeatCount="indefinite" />
                </rect>
                <defs>
                    <linearGradient id="scanning-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default CompatibilityTestingAnimation;
