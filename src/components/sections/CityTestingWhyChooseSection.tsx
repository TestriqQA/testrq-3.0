'use client';

import React, { useState } from 'react';
import { CityData } from "@/app/lib/CityData";
import {
  MapPin,
  Award,
  Building,
  Clock,
  Users,
  CheckCircle,
  Quote,
  AlertTriangle,
  ThumbsDown,
  Shield,
  TrendingUp,
  Globe,
  Settings,
  Zap
} from 'lucide-react';
import Link from 'next/link';

interface CityTestingWhyChooseSectionProps {
  cityData: CityData;
}

const iconMap = {
  MapPin,
  Award,
  Building,
  Clock,
  Users,
  AlertTriangle,
  ThumbsDown,
  Shield,
  TrendingUp,
  Globe,
  CheckCircle,
  Settings,
  Zap
};

const CityTestingWhyChooseSection: React.FC<CityTestingWhyChooseSectionProps> = ({ cityData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold text-[#111111] text-center mb-8 leading-tight w-full">
            {cityData.whyChooseContent.title}
          </h2>
          <div className="w-full text-left">
            <p className={`text-xl text-[#4A4A4A] leading-[1.7] ${!isExpanded ? 'line-clamp-3' : ''}`}>
              {cityData.whyChooseContent.subtitle}
            </p>
            {cityData.whyChooseContent.subtitle && cityData.whyChooseContent.subtitle.length > 200 && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-brand-blue font-medium mt-6 hover:underline focus:outline-none inline-flex items-center text-sm"
              >
                {isExpanded ? 'Show Less' : 'Read More'}
              </button>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Reasons */}
          <div className="space-y-8">
            {cityData.whyChooseContent.reasons.map((reason, index) => {
              const IconComponent = iconMap[reason.icon as keyof typeof iconMap];

              return (
                <div key={index} className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    {IconComponent ? (
                      <IconComponent className="h-8 w-8 text-brand-blue" />
                    ) : (
                      <CheckCircle className="h-8 w-8 text-brand-blue" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {reason.title}
                      </h3>
                      <div className="bg-blue-100 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {reason.stats}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Stats Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Our {cityData.name} Impact
                </h3>
                <p className="text-gray-600">
                  Trusted by businesses across {cityData.state}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue mb-1">500K+</div>
                  <div className="text-sm text-gray-600">Test Cases Executed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              {/* Certifications */}
              <div className="border-t pt-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Our Certifications
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center">
                    <Award className="h-3 w-3 text-yellow-500 mr-1" />
                    <span className="text-gray-600">ISO 27001</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-3 w-3 text-yellow-500 mr-1" />
                    <span className="text-gray-600">CMMI Level 5</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-3 w-3 text-yellow-500 mr-1" />
                    <span className="text-gray-600">ISTQB Certified</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-3 w-3 text-yellow-500 mr-1" />
                    <span className="text-gray-600">Agile Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-brand-blue text-white rounded-lg p-4 shadow-lg z-20">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                <div>
                  <div className="text-sm font-bold">Quality Assured</div>
                  <div className="text-xs">Zero Defect Guarantee</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-6 bg-green-700 text-white rounded-lg p-4 shadow-lg z-20">
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-2" />
                <div>
                  <div className="text-sm font-bold">Fast Delivery</div>
                  <div className="text-xs">On-Time Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-blue rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600 rounded-full translate-x-16 translate-y-16"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <Quote className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What Our {cityData.name} Clients Say
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
                  {cityData.whyChooseContent.testimonial.text}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve in {cityData.name}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized expertise spans across {cityData.name}&apos;s key industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full gap-6">
            {cityData.industries.map((industry, index) => (
              <Link
                href={
                  industry.includes("SaaS") ? "/saas-testing-services" :
                    industry.includes("FinTech") ? "/banking-finance-industry-testing-services" :
                      industry.includes("Healthcare") ? "/healthcare-testing-services" :
                        industry.includes("E-commerce") ? "/e-commerce-testing-services" :
                          industry.includes("EdTech") ? "/e-learning-testing-services" :
                            industry.includes("IoT") ? "/iot-device-testing-services" : "/contact-us"
                }
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group cursor-pointer"
              >
                <Building className="h-8 w-8 text-brand-blue mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <div className="text-sm font-medium text-gray-900 group-hover:text-brand-blue transition-colors duration-200">{industry}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Testriq Difference?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join the 500K+ Test Cases Executed in {cityData.name} that trust us with their software quality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200">
                Start Your Project Today
              </Link>
              <Link href="https://calendar.app.google/uUHn8prcXbdqcvVb6" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-all duration-200 cursor-pointer">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityTestingWhyChooseSection;

