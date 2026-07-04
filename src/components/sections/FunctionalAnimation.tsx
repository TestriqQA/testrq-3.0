"use client";

import React from "react";
const FunctionalAnimation: React.FC = () => {
    return (
        <div className="relative w-full h-[400px] bg-slate-50 rounded-[2rem] overflow-hidden flex items-center justify-center p-8 border border-gray-100 shadow-inner">
            <div className="max-w-md w-full relative h-40">
                {/* Input Module */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center relative overflow-hidden">
                        <div
      className="w-full h-1 bg-brand-blue/10 absolute top-0"
     />
                        <div className="grid grid-cols-2 gap-1 p-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-2 h-2 bg-gray-200 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                            ))}
                        </div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase mt-2 tracking-widest">User Input</span>
                </div>

                {/* Processing Logic */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-32 bg-white rounded-3xl border-2 border-brand-blue/20 relative flex items-center justify-center shadow-lg">
                        <div
                            className="absolute inset-0 rounded-3xl border-2 border-brand-blue border-dashed animate-[spin_10s_linear_infinite]"
                        />
                        <div className="relative z-10 space-y-2">
                            <div
      className="w-12 h-1 bg-green-400 rounded-full mx-auto"
     />
                            <div className="text-[10px] font-black text-brand-blue uppercase tracking-tighter text-center">Validating...</div>
                        </div>
                    </div>
                </div>

                {/* Validated Output */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center animate-fade-in" style={{ animationDelay: '2s' }}>
                    <div className="w-16 h-16 bg-green-50 rounded-xl border-2 border-green-100 flex items-center justify-center shadow-sm">
                        <svg
                            className="w-8 h-8 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="text-[10px] font-bold text-green-600 uppercase mt-2 tracking-widest">Expected Result</span>
                </div>

                {/* Data Flow Lines */}
                <svg className="absolute inset-0 w-full h-full -z-0 pointer-events-none" style={{ filter: "drop-shadow(0 0 4px rgba(37, 168, 224, 0.2))" }}>
                    <path
                        d="M 64 80 L 160 80"
                        stroke="#25A8E0"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        fill="none"
                    >
                        <animate attributeName="stroke-dashoffset" values="8; 0" dur="0.5s" repeatCount="indefinite" />
                    </path>
                    <path
                        d="M 288 80 L 384 80"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        fill="none"
                    >
                        <animate attributeName="stroke-dashoffset" values="8; 0" dur="0.5s" repeatCount="indefinite" />
                    </path>
                </svg>
            </div>

            {/* Background Status Pips */}
            <div className="absolute bottom-6 left-8 right-8 flex justify-between px-4">
                <div className="flex flex-col items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                    <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Behavioral Sync</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Logic Verified</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">UI Compliant</span>
                </div>
            </div>
        </div>
    );
};

export default FunctionalAnimation;
