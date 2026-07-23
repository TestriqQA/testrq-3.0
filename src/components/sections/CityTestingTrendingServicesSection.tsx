'use client';

import React, { useState } from 'react';
import { CityData } from "@/app/lib/CityData";
import { 
  TrendingUp, 
  Brain, 
  Cloud, 
  Cpu, 
  Shield, 
  Eye,
  Rocket,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';
import Link from 'next/link';

interface CityTestingTrendingServicesSectionProps {
  cityData: CityData;
}

const serviceIcons = {
  'AI-Powered Testing': Brain,
  'Cloud Testing Services': Cloud,
  'IoT Device Testing': Cpu,
  'Blockchain Testing': Shield,
  'Accessibility Testing': Eye,
  'DevOps Testing Integration': Rocket,
  'Microservices Testing': Globe,
  'DevSecOps Testing': Shield
};

const CityTestingTrendingServicesSection: React.FC<CityTestingTrendingServicesSectionProps> = ({ cityData }) => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <TrendingUp className="h-5 w-5 mr-2" />
            TRENDING IN {cityData.name.toUpperCase()}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            {cityData.trendingServicesContent.title}
          </h2>
          <div className="max-w-4xl mx-auto w-full">
            <p className="text-xl text-gray-600">
              {cityData.trendingServicesContent.subtitle}
            </p>
          </div>
        </div>

        {/* Trending Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {cityData.trendingServicesContent.services.map((service, index) => {
            const IconComponent = serviceIcons[service.name as keyof typeof serviceIcons] || Brain;
            
            return (
              <div 
                key={index}
                className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  activeService === index 
                    ? 'border-orange-500 shadow-lg bg-gradient-to-br from-orange-50 to-red-50' 
                    : 'border-gray-200 hover:border-orange-300'
                }`}
                onClick={() => setActiveService(index)}
              >
                {/* Trending Badge */}
                {service.trending && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center shadow-lg">
                    <Sparkles className="h-3 w-3 mr-1" />
                    TRENDING
                  </div>
                )}

                {/* Service Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl mb-6">
                  <IconComponent className="h-8 w-8 text-orange-600" />
                </div>

                {/* Service Content */}
                <Link
                  href={
                    service.name.includes("SaaS") ? "/saas-testing-services" :
                    service.name.includes("FinTech") ? "/banking-finance-industry-testing-services" :
                    service.name.includes("Healthcare") ? "/healthcare-testing-services" :
                    service.name.includes("E-commerce") ? "/e-commerce-testing-services" :
                    service.name.includes("EdTech") ? "/e-learning-testing-services" :
                    service.name.includes("IoT") ? "/iot-device-testing-services" : "/contact-us"
                  }
                  className="cursor-pointer hover:text-orange-600 block mb-4"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-0 cursor-pointer">
                    {service.name}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* City-Specific Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-blue-900 mb-1">
                        {cityData.name} Market Relevance
                      </div>
                      <div className="text-sm text-blue-700">
                        {service.citySpecific}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                  {service.benefits.length > 2 && (
                    <div className="text-sm text-orange-600 font-medium">
                      +{service.benefits.length - 2} more benefits
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                      +{service.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Link href="/contact-us" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center">
                  Explore Service
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Detailed Service View */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Service Details */}
            <div>
              <div className="flex items-center mb-6">
                {React.createElement(
                  serviceIcons[cityData.trendingServicesContent.services[activeService].name as keyof typeof serviceIcons] || Brain,
                  { className: "h-12 w-12 text-orange-400 mr-4" }
                )}
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {cityData.trendingServicesContent.services[activeService].name}
                  </h3>
                  <div className="flex items-center text-orange-400 text-sm font-medium mt-2">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    High Demand in {cityData.name}
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                {cityData.trendingServicesContent.services[activeService].description}
              </p>

              {/* All Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Key Benefits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cityData.trendingServicesContent.services[activeService].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <Zap className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-100">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Technologies We Use</h4>
                <div className="flex flex-wrap gap-2">
                  {cityData.trendingServicesContent.services[activeService].technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-white bg-opacity-20 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-white border-opacity-30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* City Relevance */}
              <div className="bg-white bg-opacity-15 rounded-lg p-6 mb-8 border border-white border-opacity-20">
                <h4 className="text-lg font-semibold mb-2 flex items-center text-blue-800">
                  <Globe className="h-5 w-5 mr-2 text-blue-800" />
                  {cityData.name} Market Opportunity
                </h4>
                <p className="text-blue-800">
                  {cityData.trendingServicesContent.services[activeService].citySpecific}
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center shadow-lg">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/ai-application-testing" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
                  Explore AI Application Testing
                </Link>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Service Impact Stats */}
              <div className="bg-white bg-opacity-25 rounded-xl p-6 mb-6 border border-white border-opacity-30 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-4 text-blue-800">
                  Service Impact in {cityData.name}
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-blue-800 font-medium">Market Adoption</span>
                      <span className="text-blue-800 font-bold">85%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-blue-800 font-medium">ROI Improvement</span>
                      <span className="text-blue-800 font-bold">120%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-blue-800 font-medium">Client Satisfaction</span>
                      <span className="text-blue-800 font-bold">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center border border-white border-opacity-30 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-orange-600 mb-1">500K+</div>
                  <div className="text-sm text-blue-800 font-medium">Test Cases Executed</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center border border-white border-opacity-30 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">99%</div>
                  <div className="text-sm text-blue-800 font-medium">Success Rate</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-lg p-3 shadow-lg">
                <div className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2" />
                  <div>
                    <div className="text-sm font-bold">Latest Tech</div>
                    <div className="text-xs">Always Updated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 lg:p-12 border border-orange-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Embrace the Future of Testing?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay ahead of the competition with our trending testing services tailored for {cityData.name} businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200">
                Explore Trending Services
              </button> */}
              <Link href="https://calendar.app.google/uUHn8prcXbdqcvVb6" target="_blank" rel="noopener noreferrer" className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityTestingTrendingServicesSection;

