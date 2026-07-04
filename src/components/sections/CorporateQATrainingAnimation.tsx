"use client";

import React, { useEffect, useState } from "react";
const CorporateQATrainingAnimation = () => {    // Corporate Color Palette (Blue/Purple for Training)
    const colors = {
        bg: "#eff6ff",
        primary: "#2563eb",
        secondary: "#3b82f6",
        accent: "#60a5fa",
        purple: "#8b5cf6",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e3a8a",
        textSecondary: "#64748b",
        instructor: "#1d4ed8",
        trainee: "#6366f1",
        module: "#0ea5e9",
    };

    // Trainee positions (arranged in classroom)
    const trainees = [
        { id: "t1", x: 140, y: 320, label: "Trainee 1" },
        { id: "t2", x: 260, y: 320, label: "Trainee 2" },
        { id: "t3", x: 380, y: 320, label: "Trainee 3" },
        { id: "t4", x: 500, y: 320, label: "Trainee 4" },
        { id: "t5", x: 200, y: 400, label: "Trainee 5" },
        { id: "t6", x: 320, y: 400, label: "Trainee 6" },
        { id: "t7", x: 440, y: 400, label: "Trainee 7" },
    ];

    // Training modules
    const modules = [
        { id: "m1", x: 180, y: 130, label: "Manual Testing", color: colors.primary },
        { id: "m2", x: 320, y: 130, label: "Automation", color: colors.purple },
        { id: "m3", x: 460, y: 130, label: "Performance", color: colors.success },
    ];

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 640 480" className="w-full h-full relative z-10">
                <defs>
                    <filter id="training-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="training-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="board-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1e3a8a" />
                        <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                </defs>

                {/* --- CLASSROOM BACKGROUND --- */}
                <g>
                    {/* Whiteboard/Screen */}
                    <rect x="100" y="60" width="440" height="120" rx="8" fill="url(#board-gradient)" filter="url(#training-shadow)" />
                    <rect x="110" y="70" width="420" height="100" rx="4" fill="#0f172a" />

                    {/* Floor */}
                    <rect x="50" y="440" width="540" height="15" rx="4" fill="#cbd5e1" />
                </g>

                {/* --- INSTRUCTOR --- */}
                <g>
                    {/* Podium */}
                    <rect x="280" y="200" width="80" height="50" rx="6" fill={colors.primary} filter="url(#training-shadow)" />
                    <rect x="290" y="210" width="60" height="30" rx="4" fill="#1e40af" />

                    {/* Instructor Body */}
                    <ellipse cx="320" cy="195" rx="25" ry="8" fill={colors.instructor} />
                    <circle cx="320" cy="175" r="18" fill={colors.secondary} />

                    {/* Instructor pointer animation */}
                    <line x1="340" y1="180" x2="380" y2="140" stroke={colors.accent} strokeWidth="3" strokeLinecap="round">
                        <animate attributeName="x2" values="380; 360; 380" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="y2" values="140; 120; 140" dur="2s" repeatCount="indefinite" />
                    </line>
                </g>

                {/* --- TRAINING MODULES ON SCREEN --- */}
                {modules.map((module, i) => (
                    <g key={module.id}>
                        <rect
                            x={module.x - 50}
                            y={module.y - 30}
                            width="100"
                            height="50"
                            rx="6"
                            fill={module.color}
                            filter="url(#training-shadow)"
                        />
                        <text x={module.x} y={module.y - 5} textAnchor="middle" fontSize="10" fontWeight="600" fill="white">
                            {module.label}
                        </text>

                        {/* Progress bar */}
                        <rect x={module.x - 40} y={module.y + 8} width="80" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
                        <rect x={module.x - 40} y={module.y + 8} width="0" height="6" rx="3" fill="rgba(255,255,255,0.9)">
                            <animate attributeName="width" values="0; 80" dur="2s" begin={`${i * 1}s`} fill="freeze" />
                        </rect>
                    </g>
                ))}

                {/* --- TRAINEES --- */}
                {trainees.map((trainee, i) => (
                    <g key={trainee.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                        {/* Desk */}
                        <rect
                            x={trainee.x - 30}
                            y={trainee.y + 15}
                            width="60"
                            height="20"
                            rx="4"
                            fill="#e2e8f0"
                            filter="url(#training-shadow)"
                        />

                        {/* Laptop */}
                        <rect x={trainee.x - 20} y={trainee.y + 5} width="40" height="25" rx="3" fill="#334155" />

                        {/* Laptop screen glow */}
                        <rect x={trainee.x - 17} y={trainee.y + 8} width="34" height="18" rx="2" fill="#0ea5e9" opacity="0.3" />

                        {/* Trainee Body */}
                        <ellipse cx={trainee.x} cy={trainee.y} rx="15" ry="5" fill={colors.trainee} />
                        <circle cx={trainee.x} cy={trainee.y - 12} r="10" fill="#818cf8" />
                    </g>
                ))}

                {/* --- COLLABORATION BUBBLES --- */}
                {[trainees[1], trainees[2], trainees[5]].map((trainee, i) => (
                    <g key={`bubble-${i}`}>
                        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="1.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                        <ellipse
                            cx={trainee.x + 25}
                            cy={trainee.y - 30}
                            rx="18"
                            ry="12"
                            fill="white"
                            stroke={colors.primary}
                            strokeWidth="2"
                        />
                        <text x={trainee.x + 25} y={trainee.y - 27} textAnchor="middle" fontSize="12">💬</text>
                    </g>
                ))}

                {/* --- ASSESSMENT PANEL --- */}
                <g>
                    <rect x="520" y="280" width="100" height="120" rx="8" fill="white" filter="url(#training-shadow)" />
                    <text x="570" y="305" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Assessment</text>

                    {/* Score bars */}
                    {[
                        { y: 320, w: 70, label: "Theory", color: colors.primary },
                        { y: 345, w: 85, label: "Practice", color: colors.purple },
                        { y: 370, w: 75, label: "Project", color: colors.success },
                    ].map((bar, i) => (
                        <React.Fragment key={`bar-${i}`}>
                            <text x="530" y={bar.y + 4} fontSize="8" fill={colors.textSecondary}>{bar.label}</text>
                            <rect x="530" y={bar.y + 8} width="80" height="8" rx="4" fill="#e2e8f0" />
                            <rect x="530" y={bar.y + 8} width="0" height="8" rx="4" fill={bar.color}>
                                <animate attributeName="width" values={`0; ${bar.w}`} dur="1s" begin={`${i * 0.5 + 2}s`} fill="freeze" />
                            </rect>
                        </React.Fragment>
                    ))}
                </g>

                {/* --- CERTIFICATION BADGES --- */}
                {trainees.slice(0, 5).map((trainee, i) => (
                    <g key={`cert-${i}`} opacity="0">
                        <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin={`${i * 0.5 + 4}s`} fill="freeze" />
                        <circle
                            cx={trainee.x}
                            cy={trainee.y - 35}
                            r="12"
                            fill={colors.success}
                            filter="url(#training-glow)"
                        />
                        <text
                            x={trainee.x}
                            y={trainee.y - 31}
                            textAnchor="middle"
                            fontSize="12"
                            fill="white"
                        >
                            ✓
                        </text>
                    </g>
                ))}

                {/* --- SUCCESS BANNER --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1" dur="1.5s" begin="6s" fill="freeze" />
                    <rect x="170" y="15" width="300" height="35" rx="8" fill={colors.success} filter="url(#training-shadow)" />
                    <text x="320" y="38" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">🎓 Training Completed Successfully!</text>
                </g>

                {/* --- LIVE INDICATOR --- */}
                <g>
                    <rect x="555" y="65" width="70" height="22" rx="11" fill={colors.error} />
                    <circle cx="570" cy="76" r="5" fill="white">
                        <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x="595" y="80" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">LIVE</text>
                </g>

            </svg>
        </div>
    );
};

export default CorporateQATrainingAnimation;
