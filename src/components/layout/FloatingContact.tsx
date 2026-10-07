"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaTimes } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show floating button after slight scroll to not overwhelm initial load
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[999] flex flex-col items-end transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Expanded Menu */}
      <div
        className={`mb-4 flex flex-col items-end gap-3 transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <Link
          href="mailto:contact@testriq.com"
          className="flex items-center gap-3 group"
          aria-label="Email Us"
        >
          <span className="bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-lg shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            Email Us
          </span>
          <div className="w-12 h-12 bg-[#EA4335] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <FaEnvelope className="text-xl" />
          </div>
        </Link>
        
        <Link
          href="tel:+919152929343"
          className="flex items-center gap-3 group"
          aria-label="Call Us"
        >
          <span className="bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-lg shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            Call Us
          </span>
          <div className="w-12 h-12 bg-[#0092ff] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <FaPhoneAlt className="text-xl" />
          </div>
        </Link>

        <Link
          href="https://wa.me/919152929343"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
          aria-label="WhatsApp Us"
        >
          <span className="bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-lg shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            WhatsApp Us
          </span>
          <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <FaWhatsapp className="text-2xl" />
          </div>
        </Link>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-14 h-14 bg-[theme(color.brand.blue)] hover:bg-[#046a96] text-white rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:scale-105 transition-all duration-300"
        aria-label="Contact Options"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[theme(color.brand.blue)] opacity-20"></span>
        {isOpen ? (
          <FaTimes className="text-2xl animate-in spin-in-90 duration-300" />
        ) : (
          <IoChatbubbleEllipsesOutline className="text-2xl animate-in zoom-in duration-300" />
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
