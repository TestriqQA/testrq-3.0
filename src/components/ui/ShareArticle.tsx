"use client";

import React, { useState } from "react";
import {
    FaShare,
    FaLinkedin,
    FaFacebook,
    FaReddit,
    FaCopy,
    FaCheck,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface ShareArticleProps {
    title: string;
}

const ShareArticle: React.FC<ShareArticleProps> = ({ title }) => {
    const [isCopied, setIsCopied] = useState(false);
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    const shareOnX = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, '_blank');
    };

    const shareOnLinkedin = () => {
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`, '_blank');
    };

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    };

    const shareOnReddit = () => {
        window.open(`https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`, '_blank');
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-b border-gray-100 mb-8">
            <div className="flex items-center gap-2 text-gray-500 font-medium">
                <span className="bg-blue-50 text-blue-600 p-2 rounded-lg">
                    <FaShare className="w-4 h-4" />
                </span>
                <span>Share Article</span>
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={shareOnLinkedin}
                    className="p-2.5 text-gray-400 hover:text-white hover:bg-[#0a66c2] bg-gray-50 rounded-lg transition-all duration-300 group cursor-pointer"
                    title="Share on LinkedIn"
                >
                    <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                <button
                    onClick={shareOnX}
                    className="p-2.5 text-gray-400 hover:text-white hover:bg-black bg-gray-50 rounded-lg transition-all duration-300 group cursor-pointer"
                    title="Share on X"
                >
                    <FaSquareXTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                <button
                    onClick={shareOnFacebook}
                    className="p-2.5 text-gray-400 hover:text-white hover:bg-[#1877f2] bg-gray-50 rounded-lg transition-all duration-300 group cursor-pointer"
                    title="Share on Facebook"
                >
                    <FaFacebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                <button
                    onClick={shareOnReddit}
                    className="p-2.5 text-gray-400 hover:text-white hover:bg-[#ff4500] bg-gray-50 rounded-lg transition-all duration-300 group cursor-pointer"
                    title="Share on Reddit"
                >
                    <FaReddit className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>

                <div className="h-6 w-px bg-gray-200 mx-1" />

                <button
                    onClick={copyToClipboard}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${isCopied
                        ? "bg-green-50 text-green-600 ring-1 ring-green-500/20"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        } cursor-pointer`}
                    title="Copy Link"
                >
                    {isCopied ? (
                        <>
                            <FaCheck className="w-4 h-4" />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <FaCopy className="w-4 h-4" />
                            <span>Copy Link</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ShareArticle;
