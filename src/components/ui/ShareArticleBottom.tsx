"use client";

import React from "react";
import {
    FaLinkedin,
    FaFacebook,
    FaReddit,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface ShareArticleBottomProps {
    title: string;
}

const ShareArticleBottom: React.FC<ShareArticleBottomProps> = ({ title }) => {
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

    return (
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 my-8">
            <div className="text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Found this article helpful?
                </h4>
                <p className="text-gray-700 mb-4">Share it with your team!</p>
                <div className="flex justify-center gap-3 flex-wrap">
                    <button
                        onClick={shareOnX}
                        className="bg-black text-white px-4 py-2 rounded-lg hover:brightness-110 transition-transform flex items-center gap-2"
                    >
                        <FaSquareXTwitter />
                        <span>X (Twitter)</span>
                    </button>
                    <button
                        onClick={shareOnLinkedin}
                        className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:brightness-110 transition-transform flex items-center gap-2"
                    >
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </button>
                    <button
                        onClick={shareOnFacebook}
                        className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:brightness-110 transition-transform flex items-center gap-2"
                    >
                        <FaFacebook />
                        <span>Facebook</span>
                    </button>
                    {/* orange-700, not orange-600: white on orange-600 (#f54900)
                        measures 3.59:1, under the 4.5:1 AA minimum, and was the 13th
                        color-contrast failure on every blog post. The sibling share
                        buttons already use dark shades (black, blue-700, blue-800)
                        for exactly this reason. */}
                    <button
                        onClick={shareOnReddit}
                        className="bg-orange-700 text-white px-4 py-2 rounded-lg hover:brightness-110 transition-transform flex items-center gap-2"
                    >
                        <FaReddit />
                        <span>Reddit</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareArticleBottom;
