'use client';

import React, { useState } from 'react';
import { CityData } from "@/app/lib/CityData";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { BOOKING_URL } from "@/lib/booking";

interface CityTestingCTASectionProps {
  cityData: CityData;
}

const CityTestingCTASection: React.FC<CityTestingCTASectionProps> = ({ cityData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            {cityData.ctaContent.title}
          </h2>
          <p className="text-xl text-gray-100 mb-4">
            {cityData.ctaContent.subtitle}
          </p>
          <div className="max-w-4xl mx-auto">
            <p className={`text-lg text-gray-200 ${!isExpanded ? 'line-clamp-4' : ''}`}>
              {cityData.ctaContent.description}
            </p>
            {cityData.ctaContent.description && cityData.ctaContent.description.length > 250 && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-300 font-medium mt-2 hover:text-white hover:underline focus:outline-none inline-flex items-center text-sm transition-colors cursor-pointer"
              >
                {isExpanded ? 'Show Less' : 'Read More'}
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {(cityData.ctaContent.benefits ?? []).map((benefit, index) => (
            <div key={index} className="flex items-start bg-white bg-opacity-25 rounded-xl p-6 border border-white border-opacity-30 backdrop-blur-sm">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
              <span className="text-blue-800 text-lg font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white bg-opacity-25 rounded-2xl p-8 border border-white border-opacity-30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-black mb-6">
              Get in Touch with Our {cityData.name} Team
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-400 mr-4" />
                <div>
                  <div className="text-black font-semibold">Call Us</div>
                  <div className="text-black font-medium">{cityData.ctaContent.contactInfo.phone}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-green-400 mr-4" />
                <div>
                  <div className="text-black font-semibold">Email Us</div>
                  <div className="text-black font-medium">{cityData.ctaContent.contactInfo.email}</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-purple-400 mr-4" />
                <div>
                  <div className="text-black font-semibold">Service Area</div>
                  <div className="text-black font-medium">{cityData.ctaContent.contactInfo.address}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold text-white mb-8">
              Ready to Get Started?
            </h3>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-4">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 w-full sm:w-auto text-center cursor-pointer shadow-lg hover:shadow-xl flex items-center"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <Link href="tel: (+91) 915-2929-343" className="w-xs md:w-md border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center">
                Get Instant Quote
                <Phone className="ml-3 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityTestingCTASection;

