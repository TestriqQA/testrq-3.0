"use client";

import React, { useState } from "react";
import {
  Shield,
  ArrowRight,
  Play,
  Verified,
  TrendingUp,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import Lightbox from "../VideoLightBox";

const DatingAppHeroSection = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const trustMetrics = [
    {
      label: "Expert-Backed Certification",
      icon: <Verified className="w-8 h-8" />,
      color: "text-blue-600",
    },
    {
      label: (<><Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">Advanced Security</Link> Standards</>),
      icon: <Shield className="w-8 h-8" />,
      color: "text-green-600",
    },
    {
      label: "Boost User Confidence",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-purple-600",
    },
    {
      label: "Continuous Safety Monitoring",
      icon: <Eye className="w-8 h-8" />,
      color: "text-orange-600",
    },
  ];

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-8 pb-16 px-8 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(37,168,224,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-brand-blue transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-brand-blue">
            Dating Apps Certification
          </span>
        </div>
        <div className="text-center">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center bg-brand-blue text-white rounded-full text-base md:text-sm px-6 py-3 mb-6">
              <Shield className="w-4 h-4 mr-2 hidden md:block" />
              The New Standard in Dating App Trust & Safety
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Dating App Certification:
              <br />
              Build Trust. <span className="text-brand-blue">Boost Downloads.</span>
              <br />
              Keep Users Safe.
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Launch your dating platform with a seal of credibility. Our
              certification helps you attract users, gain investor confidence,
              and meet the highest <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">safety</Link> standards from day one.
            </p>
          </div>

          {/* Trust Points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            {trustMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border flex flex-col items-center border-gray-100 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`${metric.color} mb-3`}>{metric.icon}</div>
                <div className="text-lg font-semibold text-gray-800 leading-snug">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <Link href="/contact-us">
              <button
                className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#1e90d4] transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95"
              >
                Get Certified Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>

            <button
              className="border-2 border-brand-blue cursor-pointer text-brand-blue px-8 py-4 rounded-xl font-semibold text-lg hover:border-brand-blue hover:text-brand-blue transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95"
              onClick={openLightbox}
            >
              <Play className="mr-2 w-5 h-5 text-brand-blue" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={isLightboxOpen}
        videoLink="https://yourvideolink.com"
        onClose={closeLightbox}
      />
    </section>
  );
};

export default DatingAppHeroSection;
