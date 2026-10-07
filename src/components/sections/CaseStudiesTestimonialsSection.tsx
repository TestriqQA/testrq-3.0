"use client";

import dynamic from "next/dynamic";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/booking";

const RatingStar = dynamic(() => import("@/components/RatingStar"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    const updateTarget = () => {
      setTargetReached(window.innerWidth < width);
    };

    updateTarget();
    window.addEventListener("resize", updateTarget);

    return () => window.removeEventListener("resize", updateTarget);
  }, [width]);

  return targetReached;
};

const CaseStudiesTestimonialsSection = () => {


  const cardData = [
    {
      Comment:
        "I highly recommend Testriq for their outstanding QA testing services provided to Canva over the past few years.",
      clientName: "Loren De Camas",
      designation: "QA Lead at Canva",
      company: "Canva",
      icon: (
        <Image
          title="Canva_Logo"
          src="/Canva_Logo.png"
          alt="Canva_Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      ),
    },
    {
      Comment:
        "Testriq is thorough and proficient in testing across our diverse user base. They are flexible and reliably meet deadlines.",
      clientName: "Jake Browning",
      designation: "Director of Product and Technology",
      company: "Ragnar",
      icon: (
        <Image
          title="Ragnar logo"
          src="/Ragnar_logo.webp"
          alt="Ragnar_logo"
          width={120}
          height={120}
          className="object-contain"
        />
      ),
    },
    {
      Comment:
        "Testriq provides comprehensive testing resources and responsive support. They've played a crucial role in our business success.",
      clientName: "Ranjan Upadhyay",
      designation: "Vice President - Operations",
      company: "Digiboxx",
      icon: (
        <Image
          title="Digiboxx logo"
          src="/Digiboxx-Logo.webp"
          alt="Digiboxx_logo"
          width={120}
          height={120}
          className="object-contain"
        />
      ),
    },
    {
      Comment:
        "TESTRIQ provided clear, actionable insights that improved both performance and user experience. Their professionalism is truly appreciated.",
      clientName: "Vinay Vikram Singh",
      designation: "Director",
      company: "Kanishka Software",
      icon: (
        <Image
          title="Kanishka Software Logo"
          src="/Kanishka_Software_Logo.webp"
          alt="Kanishka_Software_Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      ),
    },
    {
      Comment:
        "Testriq was a clutch QA partner, providing essential services to meet rigorous regulatory requirements with excellence.",
      clientName: "Dave Hadden",
      designation: "Founder and President, Pro-ficiency",
      company: "Pro-ficiency",
      icon: (
        <Image
          title="Pro-ficiency Logo"
          src="/Pro-ficiency_Logo.webp"
          alt="Pro-ficiency_Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);

  const cardsPerView = isMobile ? 1 : isTablet ? 2 : 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cardData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  });

  const getVisibleCards = () => {
    const visible: typeof cardData = [];
    for (let i = 0; i < cardsPerView; i++) {
      visible.push(cardData[(currentIndex + i) % cardData.length]);
    }
    return visible;
  };

  // const renderStars = (rating: number) => {
  //   return Array.from({ length: 5 }, (_, index) => (
  //     <FaStar
  //       key={index}
  //       className={`w-4 h-4 ${index < rating ? "text-yellow-400" : "text-gray-300"
  //         }`}
  //     />
  //   ));
  // };

  return (
    <section className="bg-[theme(color.background.gray)] px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-5">
            <FaQuoteLeft />
            <span className="text-sm">Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="text-[theme(color.brand.blue)]">Clients Say</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear directly from the leaders
            who have experienced the transformative impact of our testing
            services on their businesses.
          </p>
        </div>

        {/* Testimonials Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> */}
        <div className="relative mt-10">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg rounded-full p-3"
            aria-label="Left arrow button"
          >
            <FaChevronLeft />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden w-full">
            <div
              className={`flex transition-transform duration-700 ease-in-out p-5`}
            >
              {getVisibleCards().map((card, index) => (
                <div
                  key={index}
                  className={`px-2 ${isMobile ? "min-w-full" : isTablet ? "min-w-1/2" : "min-w-1/4"
                    }`}
                >
                  <div className="flex flex-col h-full ring-sky-200 ring-1 bg-[theme(color.background.gray)] rounded-lg p-5 gap-y-6 transition duration-300 transform hover:shadow-lg hover:shadow-sky-200 hover:-translate-y-2">
                    {card.icon}
                    <p className="text-gray-500 italic text-sm md:text-base">
                      {card.Comment}
                    </p>
                    <div className="flex flex-col xl:justify-between mt-auto gap-1">
                      <div>
                        <h3 className="text-base md:text-lg font-semibold">
                          {card.clientName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {card.designation}
                        </p>
                        <p className="text-sm text-gray-500 font-semibold">
                          {card.company}
                        </p>
                      </div>
                      <RatingStar />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* </div> */}

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg rounded-full p-3"
              aria-label="Right arrow button"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-brand-blue to-sky-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our client testimonials reflect consistent excellence across
              industries. Join hundreds of satisfied clients who have
              transformed their software quality.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <p className="text-blue-100 text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <p className="text-blue-100 text-sm">Client Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <p className="text-blue-100 text-sm">Recommend Us</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-blue-100 text-sm">Project Success</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results. Schedule a consultation to
            discuss how our testing expertise can transform your software
            quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={BOOKING_URL}
              target={ "_blank" }
              className="bg-[theme(color.brand.blue)] cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:scale-98 transition-all inline-flex items-center justify-center min-h-[48px] min-w-[48px]"
            >
              Schedule Consultation
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTestimonialsSection;
