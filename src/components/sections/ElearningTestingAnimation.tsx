"use client";

import React, { useEffect, useState } from "react";
const ElearningTestingAnimation = () => {    // Corporate Color Palette (E-Learning - Indigo/Purple/Blue for education)
    const colors = {
        bg: "#eef2ff",
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#a78bfa",
        course: "#3b82f6",
        quiz: "#10b981",
        video: "#ef4444",
        success: "#10b981",
        error: "#ef4444",
        progress: "#f59e0b",
        textPrimary: "#312e81",
        textSecondary: "#64748b",
        accessibility: "#0891b2",
    };

    // Course modules
    const modules = [
        { id: "m1", x: 100, y: 140, label: "Intro", progress: 100 },
        { id: "m2", x: 200, y: 140, label: "Basics", progress: 75 },
        { id: "m3", x: 300, y: 140, label: "Advanced", progress: 30 },
    ];

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-100 overflow-hidden relative shadow-xl border border-indigo-200">
            <svg viewBox="0 0 640 480" className="w-full h-full relative z-10">
                <defs>
                    <filter id="learn-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="learn-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="learn-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={colors.primary} />
                        <stop offset="100%" stopColor={colors.secondary} />
                    </linearGradient>
                </defs>

                {/* --- LMS DASHBOARD HEADER --- */}
                <g>
                    {/* Header bar */}
                    <rect x="50" y="30" width="540" height="50" rx="8" fill="white" filter="url(#learn-shadow)" />
                    <rect x="60" y="42" width="100" height="26" rx="6" fill="url(#learn-gradient)" />
                    <text x="110" y="59" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">🎓 LMS Portal</text>

                    {/* Navigation tabs */}
                    <text x="200" y="60" fontSize="10" fill={colors.textSecondary}>Dashboard</text>
                    <text x="280" y="60" fontSize="10" fontWeight="600" fill={colors.primary}>Courses</text>
                    <text x="355" y="60" fontSize="10" fill={colors.textSecondary}>Progress</text>

                    {/* User avatar */}
                    <circle cx="550" cy="55" r="15" fill={colors.accent} />
                    <text x="550" y="60" textAnchor="middle" fontSize="12">👤</text>
                </g>

                {/* --- COURSE MODULES --- */}
                {modules.map((module, i) => (
                    <g key={module.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                        <rect
                            x={module.x - 40}
                            y={module.y - 35}
                            width="80"
                            height="90"
                            rx="10"
                            fill="white"
                            stroke={colors.primary}
                            strokeWidth="2"
                            filter="url(#learn-shadow)"
                        />
                        <text x={module.x} y={module.y - 10} textAnchor="middle" fontSize="22">📚</text>
                        <text x={module.x} y={module.y + 15} textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textPrimary}>{module.label}</text>

                        {/* Progress bar */}
                        <rect x={module.x - 30} y={module.y + 30} width="60" height="6" rx="3" fill="#e2e8f0" />
                        <rect x={module.x - 30} y={module.y + 30} width="0" height="6" rx="3" fill={module.progress === 100 ? colors.success : colors.progress}>
                            <animate attributeName="width" values={`0; ${(module.progress / 100) * 60}`} dur="1.5s" begin={`${i * 0.2 + 0.5}s`} fill="freeze" />
                        </rect>
                        <text x={module.x} y={module.y + 48} textAnchor="middle" fontSize="8" fill={colors.textSecondary}>{module.progress}%</text>
                    </g>
                ))}

                {/* --- VIDEO PLAYER --- */}
                <g>
                    <rect x="400" y="100" width="180" height="110" rx="10" fill="#1e1b4b" filter="url(#learn-shadow)" />
                    <text x="490" y="140" textAnchor="middle" fontSize="10" fill="white" opacity="0.7">Video Lesson</text>

                    {/* Play button */}
                    <circle cx="490" cy="165" r="20" fill={colors.video} />
                    <polygon points="485,157 485,173 500,165" fill="white" />

                    {/* Progress bar */}
                    <rect x="410" y="195" width="160" height="4" rx="2" fill="#374151" />
                    <rect x="410" y="195" width="0" height="4" rx="2" fill={colors.video}>
                        <animate attributeName="width" values="0; 160" dur="8s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* --- QUIZ SECTION --- */}
                <g>
                    <rect x="400" y="230" width="180" height="100" rx="10" fill="white" filter="url(#learn-shadow)" />
                    <text x="490" y="255" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>📝 Quiz</text>

                    {/* Quiz options */}
                    {["A", "B", "C"].map((opt, i) => (
                        <g key={opt}>
                            <rect x="415" y={265 + i * 20} width="150" height="16" rx="4" fill="#f1f5f9" />
                            <text x="425" y={276 + i * 20} fontSize="9" fill={colors.textSecondary}>Option {opt}</text>
                            <circle cx="555" cy={273 + i * 20} r="6" fill={i === 1 ? colors.success : "transparent"} stroke={i === 1 ? colors.success : "#cbd5e1"} strokeWidth="2" opacity="0">
                                <animate attributeName="opacity" values={i === 1 ? "0; 1; 1" : "0; 0; 0"} dur="1s" begin="3s" fill="freeze" />
                            </circle>
                        </g>
                    ))}
                </g>

                {/* --- PROGRESS TRACKING --- */}
                <g>
                    <rect x="50" y="250" width="150" height="90" rx="10" fill="white" filter="url(#learn-shadow)" />
                    <text x="125" y="275" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>📊 Progress</text>

                    {/* Circular progress */}
                    <circle cx="125" cy="310" r="25" fill="none" stroke="#e2e8f0" strokeWidth="6" />
                    <circle cx="125" cy="310" r="25" fill="none" stroke={colors.success} strokeWidth="6" strokeLinecap="round" strokeDasharray="157" strokeDashoffset="157" transform="rotate(-90 125 310)">
                        <animate attributeName="stroke-dashoffset" values="157; 47" dur="2s" begin="1s" fill="freeze" />
                    </circle>
                    <text x="125" y="315" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.success}>70%</text>
                </g>

                {/* --- ACCESSIBILITY CHECK --- */}
                <g className="animate-fade-in" style={{ animationDelay: '2s' }}>
                    <rect x="220" y="250" width="150" height="50" rx="8" fill={colors.accessibility} filter="url(#learn-shadow)" />
                    <text x="295" y="280" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">♿ WCAG 2.1 AA ✓</text>
                </g>

                {/* --- DEFECT INDICATOR --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" begin="2s" fill="freeze" />
                    <rect x="220" y="310" width="150" height="30" rx="6" fill={colors.error} />
                    <text x="295" y="330" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">⚠️ Quiz Submit Issue</text>
                </g>

                {/* --- RETEST SUCCESS --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin="6s" fill="freeze" />
                    <rect x="220" y="310" width="150" height="30" rx="6" fill={colors.success} />
                    <text x="295" y="330" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">✓ Issue Resolved</text>
                </g>

                {/* --- QA ENGINEER --- */}
                <g>
                    {/* Desk */}
                    <rect x="30" y="420" width="580" height="12" rx="4" fill="#e0e7ff" />
                    {/* Engineer Body */}
                    <ellipse cx="100" cy="410" rx="25" ry="8" fill={colors.primary} />
                    <circle cx="100" cy="390" r="16" fill={colors.secondary} />
                    {/* Laptop */}
                    <rect x="75" y="395" width="50" height="30" rx="4" fill="#334155" />
                    <rect x="78" y="398" width="44" height="24" rx="2" fill={colors.accent} opacity="0.3" />
                </g>

                {/* --- SUCCESS BANNER --- */}
                <g opacity="0">
                    <animate attributeName="opacity" values="0; 1; 1" dur="1s" begin="7s" fill="freeze" />
                    <rect x="180" y="360" width="280" height="40" rx="10" fill={colors.success} filter="url(#learn-shadow)" />
                    <text x="320" y="386" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">✓ E-Learning Platform Validated</text>
                </g>

                {/* --- LIVE INDICATOR --- */}
                <g>
                    <rect x="500" y="350" width="90" height="24" rx="12" fill={colors.primary} />
                    <circle cx="515" cy="362" r="5" fill="white">
                        <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x="555" y="367" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">TESTING</text>
                </g>

            </svg>
        </div>
    );
};

export default ElearningTestingAnimation;
