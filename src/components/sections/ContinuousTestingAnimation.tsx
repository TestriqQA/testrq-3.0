"use client";

import React, { useState, useEffect } from "react";

const ContinuousTestingAnimation: React.FC = () => {
    const [activeStage, setActiveStage] = useState(0);
    const [progress, setProgress] = useState(0);

    const stages = [
        { label: "Commit", color: "#4f39f6" },
        { label: "Build", color: "#7f22fe" },
        { label: "Test", color: "#007595" },
        { label: "Deploy", color: "#007a55" },
        { label: "Monitor", color: "#bb4d00" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setActiveStage((s) => (s + 1) % stages.length);
                    return 0;
                }
                return prev + 2;
            });
        }, 60);
        return () => clearInterval(interval);
    }, [stages.length]);

    return (
        <div className="relative w-full max-w-lg mx-auto">
            {/* Main Dashboard Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-xs font-mono text-gray-500">
                        CI/CD Pipeline — Live
                    </span>
                </div>

                {/* Pipeline Stages */}
                <div className="flex items-center justify-between mb-6 relative">
                    {/* Connection Line */}
                    <div className="absolute top-5 left-6 right-6 h-0.5 bg-gray-200 z-0"></div>
                    <div
                        className="absolute top-5 left-6 h-0.5 z-0 transition-all duration-300"
                        style={{
                            width: `${(activeStage / (stages.length - 1)) * 100}%`,
                            maxWidth: "calc(100% - 3rem)",
                            background: `linear-gradient(90deg, ${stages[0].color}, ${stages[activeStage].color})`,
                        }}
                    ></div>

                    {stages.map((stage, index) => (
                        <div key={stage.label} className="flex flex-col items-center z-10">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 border-2"
                                style={{
                                    backgroundColor:
                                        index <= activeStage ? stage.color : "#f3f4f6",
                                    borderColor:
                                        index <= activeStage ? stage.color : "#e5e7eb",
                                    color: index <= activeStage ? "#fff" : "#4a5565",
                                    transform:
                                        index === activeStage ? "scale(1.2)" : "scale(1)",
                                    boxShadow:
                                        index === activeStage
                                            ? `0 0 20px ${stage.color}40`
                                            : "none",
                                }}
                            >
                                {index < activeStage ? "✓" : index + 1}
                            </div>
                            <span
                                className="text-[10px] font-semibold mt-2 transition-colors"
                                style={{
                                    color: index <= activeStage ? stage.color : "#6a7282",
                                }}
                            >
                                {stage.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Active Stage Progress */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">
                            {stages[activeStage].label} Stage
                        </span>
                        <span
                            className="text-sm font-bold"
                            style={{ color: stages[activeStage].color }}
                        >
                            {progress}%
                        </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full rounded-full transition-all duration-100"
                            style={{
                                width: `${progress}%`,
                                backgroundColor: stages[activeStage].color,
                            }}
                        ></div>
                    </div>
                </div>

                {/* Test Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-green-700">847</div>
                        <div className="text-[10px] text-green-700 font-medium">
                            Tests Passed
                        </div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-red-700">3</div>
                        <div className="text-[10px] text-red-700 font-medium">
                            Tests Failed
                        </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-blue-600">99.6%</div>
                        <div className="text-[10px] text-blue-700 font-medium">
                            Pass Rate
                        </div>
                    </div>
                </div>

                {/* Recent Builds */}
                <div className="space-y-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Recent Builds
                    </div>
                    {[
                        { id: "#2847", status: "success", time: "2m 34s", branch: "main" },
                        {
                            id: "#2846",
                            status: "success",
                            time: "3m 12s",
                            branch: "feature/auth",
                        },
                        {
                            id: "#2845",
                            status: "running",
                            time: "1m 45s",
                            branch: "fix/api",
                        },
                    ].map((build) => (
                        <div
                            key={build.id}
                            className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-2 h-2 rounded-full ${build.status === "success"
                                            ? "bg-green-500"
                                            : "bg-yellow-500 animate-pulse"
                                        }`}
                                ></div>
                                <span className="text-xs font-mono text-gray-700">
                                    {build.id}
                                </span>
                            </div>
                            <span className="text-[10px] text-gray-500 font-mono">
                                {build.branch}
                            </span>
                            <span className="text-[10px] text-gray-500">{build.time}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-2xl"></div>
        </div>
    );
};

export default ContinuousTestingAnimation;
