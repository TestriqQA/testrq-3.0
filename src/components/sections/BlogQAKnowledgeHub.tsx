'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import {
    FaArrowRight,
    FaLightbulb,
    FaShieldAlt,
    FaRocket,
    FaCode,
    FaMobile,
    FaChartLine,
    FaBookOpen,
    FaUsers,
    FaClock,
    FaStar,
    FaFire,
    FaDownload,
    FaPlay,
    FaBell,
    FaCheckCircle
} from 'react-icons/fa';
import { Post } from '@/lib/sanity-data-adapter';

interface QAKnowledgeHubProps {
    trendingPosts?: Post[];
}

const QAKnowledgeHub: React.FC<QAKnowledgeHubProps> = ({ trendingPosts = [] }) => {
    const [selectedPath, setSelectedPath] = useState<number | null>(null);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string }>({ type: 'success', text: '' });

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        setMessage({ type: 'success', text: '' });

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Failed to subscribe');

            setStatus('success');
            setMessage({ type: 'success', text: data.message });
            setEmail('');
        } catch (error) {
            setStatus('error');
            setMessage({ type: 'error', text: error instanceof Error ? error.message : 'Something went wrong. Please try again.' });
        }
    };
    const learningPaths = [
        {
            id: 1,
            title: 'Automation Mastery',
            level: 'Beginner to Advanced',
            duration: '8 weeks',
            modules: 24,
            icon: <FaCode className="w-6 h-6" />,
            gradient: 'from-blue-500 via-blue-600 to-indigo-600',
            topics: ['Selenium', 'Cypress', 'Playwright', 'CI/CD'],
            students: '12.5K',
        },
        {
            id: 2,
            title: 'Security Expert Path',
            level: 'Intermediate',
            duration: '6 weeks',
            modules: 18,
            icon: <FaShieldAlt className="w-6 h-6" />,
            gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
            topics: ['OWASP', 'Penetration Testing', 'Vulnerability Assessment'],
            students: '8.3K',
        },
        {
            id: 3,
            title: 'Performance Pro',
            level: 'Advanced',
            duration: '5 weeks',
            modules: 15,
            icon: <FaRocket className="w-6 h-6" />,
            gradient: 'from-violet-500 via-purple-600 to-fuchsia-600',
            topics: ['JMeter', 'K6', 'Load Testing', 'Scalability'],
            students: '9.7K',
        },
        {
            id: 4,
            title: 'Mobile Testing Pro',
            level: 'Intermediate',
            duration: '7 weeks',
            modules: 21,
            icon: <FaMobile className="w-6 h-6" />,
            gradient: 'from-amber-500 via-orange-600 to-red-600',
            topics: ['Appium', 'iOS Testing', 'Android', 'Cross-Platform'],
            students: '10.2K',
        },
    ];

    // Fallback dummy data if no real posts provided (optional, or just show real posts)
    // We will map real posts to this structure
    const displayPosts = trendingPosts.length > 0 ? trendingPosts.slice(0, 4) : [];

    const resources = [
        {
            title: 'Ultimate QA Checklist',
            type: 'PDF Guide',
            downloads: '23.5K',
            icon: <FaDownload className="w-5 h-5" />,
        },
        {
            title: 'Testing Tools Comparison',
            type: 'Interactive Tool',
            downloads: '18.2K',
            icon: <FaChartLine className="w-5 h-5" />,
        },
        {
            title: 'Video Tutorials Series',
            type: '20+ Videos',
            downloads: '31.7K',
            icon: <FaPlay className="w-5 h-5" />,
        },
    ];



    return (
        <section className="relative bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/20 via-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-violet-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-emerald-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 lg:mb-20">
                    {/* Animated Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20 rounded-2xl mb-6 backdrop-blur-sm">
                        <FaFire className="w-4 h-4 text-orange-400 animate-pulse" />
                        <span className="text-sm text-blue-300 font-bold tracking-wide">INTERACTIVE LEARNING HUB</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.15]">
                        Your Journey to{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Testing Excellence
                            </span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-fuchsia-500/30 blur-lg" />
                        </span>
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Structured learning paths, trending insights, and premium resources designed for modern QA professionals
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Left Column - Learning Paths (2/3 width) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl flex items-center justify-center">
                                    <FaBookOpen className="w-5 h-5 text-white" />
                                </div>
                                Curated Learning Paths
                            </h3>
                            <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-2 transition-colors">
                                View All
                                <FaArrowRight className="w-3 h-3" />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {learningPaths.map((path) => (
                                <div
                                    key={path.id}
                                    onClick={() => setSelectedPath(path.id)}
                                    className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${selectedPath === path.id
                                        ? 'border-blue-500 bg-slate-800/80'
                                        : 'border-slate-700/50 hover:border-slate-600'
                                        }`}
                                >
                                    {/* Gradient accent */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                                    <div className="relative p-6">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-14 h-14 bg-gradient-to-br ${path.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                                {path.icon}
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-700/50 rounded-lg">
                                                <FaStar className="w-3 h-3 text-yellow-400" />
                                                <span className="text-xs text-slate-300 font-semibold">{path.students}</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                            {path.title}
                                        </h4>

                                        {/* Meta */}
                                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                                            <span className="flex items-center gap-1.5">
                                                <FaClock className="w-3.5 h-3.5" />
                                                {path.duration}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <FaBookOpen className="w-3.5 h-3.5" />
                                                {path.modules} modules
                                            </span>
                                        </div>

                                        {/* Topics */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {path.topics.map((topic, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg border border-slate-600/50"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Level badge */}
                                        <div className="pt-4 border-t border-slate-700/50">
                                            <span className="inline-flex items-center gap-2 text-sm">
                                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                                <span className="text-slate-400">{path.level}</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Checkmark for selected */}
                                    {selectedPath === path.id && (
                                        <div className="absolute top-4 right-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <FaCheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Trending & Resources */}
                    <div className="space-y-6">
                        {/* Trending Topics */}
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <FaFire className="w-5 h-5 text-orange-400" />
                                Trending Now
                            </h3>

                            <div className="space-y-4">
                                {displayPosts.length > 0 ? displayPosts.map((post, idx) => (
                                    <Link
                                        key={post.id}
                                        href={`/blog/post/${post.slug}`}
                                        className="group block"
                                    >
                                        <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-700/30 transition-colors">
                                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                                                {idx + 1}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors line-clamp-2">
                                                    {post.title}
                                                </h4>
                                                <div className="flex items-center gap-3 text-xs">
                                                    <span className="text-slate-400">{post.views || '1.2K'} views</span>
                                                    <span className="text-green-400 font-semibold">{post.trending ? '+Trending' : 'Popular'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )) : (
                                    <p className="text-slate-400 text-sm">No trending posts available at the moment.</p>
                                )}
                            </div>
                        </div>

                        {/* Free Resources */}
                        <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <FaDownload className="w-5 h-5 text-blue-400" />
                                Free Resources
                            </h3>

                            <div className="space-y-3">
                                {resources.map((resource, idx) => (
                                    <button
                                        key={idx}
                                        className="w-full flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/80 transition-all group"
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center text-white">
                                            {resource.icon}
                                        </div>
                                        <div className="flex-1 text-left">
                                            <h4 className="text-sm font-semibold text-white mb-0.5 group-hover:text-blue-300 transition-colors">
                                                {resource.title}
                                            </h4>
                                            <p className="text-xs text-slate-400">{resource.type}</p>
                                        </div>
                                        <FaArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QAKnowledgeHub;