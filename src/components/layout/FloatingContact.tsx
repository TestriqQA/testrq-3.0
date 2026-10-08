"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaTimes } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Visibility depends on whether the top contact strip is on screen.
  //
  // That strip (Header.tsx) is `hidden lg:flex`. Below lg it is gone, so this
  // widget is the only contact affordance above the fold and must be visible
  // immediately — gating it behind 300px of scroll left mobile visitors with
  // nothing but the hamburger menu on landing. At lg and up the strip is
  // showing, so the original scroll gate stays: no point duplicating it on load.
  //
  // The query is 64rem, NOT 1024px: Tailwind v4 emits its breakpoints in rem
  // (verified in the built CSS: `@media (min-width: 64rem)`). With a px query
  // the two drift apart whenever the root font-size is not 16px, and the strip
  // hides while this widget still thinks it is on desktop — leaving exactly the
  // gap this effect exists to close.
  //
  // Also note this runs once on mount, which the previous scroll-only listener
  // did not. A page opened already scrolled (deep link, refresh mid-page) used
  // to keep the widget hidden until the next scroll event.
  useEffect(() => {
    const stripVisible = window.matchMedia("(min-width: 64rem)");

    const apply = () => {
      if (!stripVisible.matches) {
        setIsVisible(true);
        return;
      }
      const scrolledPast = window.scrollY > 300;
      setIsVisible(scrolledPast);
      if (!scrolledPast) setIsOpen(false);
    };

    apply();
    window.addEventListener("scroll", apply);
    // Both a resize listener AND the media-query listener. The mq "change"
    // event does not fire in every environment (device-emulation in dev tools
    // and the in-app browser pane are two), which left the widget hidden after
    // a desktop-width load was narrowed past the breakpoint — the exact symptom
    // this effect was added to fix. resize always fires; the mq listener stays
    // because it also catches a root-font-size change, which resize does not.
    window.addEventListener("resize", apply);
    stripVisible.addEventListener("change", apply);
    return () => {
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
      stripVisible.removeEventListener("change", apply);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[999] flex flex-col items-end transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
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
        className="relative flex items-center justify-center w-14 h-14 bg-[theme(color.brand.blue)] hover:bg-[#046a96] text-white rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:scale-105 transition-all duration-300 cursor-pointer"
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
