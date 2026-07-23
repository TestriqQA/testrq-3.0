"use client";

import React, { useState } from "react";
import { CityData } from "@/app/lib/CityData";
import Link from "next/link";
import {
  TestTube,
  Bot,
  Zap,
  Shield,
  Link as LinkIcon,
  Smartphone,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Globe,
  Users,
} from "lucide-react";

interface CityTestingServicesSectionProps {
  cityData: CityData;
}

const iconMap = {
  TestTube: TestTube,
  Bot: Bot,
  Zap: Zap,
  Shield: Shield,
  Smartphone: Smartphone,
  Link: LinkIcon, // ← ADD THIS
  Globe: Globe,
  Users: Users,
};

const CityTestingServicesSection: React.FC<CityTestingServicesSectionProps> = ({
  cityData,
}) => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {cityData.servicesContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {cityData.servicesContent.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {cityData.servicesContent.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];

            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 cursor-pointer ${activeService === index
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-100 hover:border-blue-200"
                  }`}
                onClick={() => setActiveService(index)}
              >
                {/* Trending Badge */}
                {service.trending && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    TRENDING
                  </div>
                )}

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
                  {IconComponent ? (
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  ) : (
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-blue-600 font-medium">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Link href={service.link}>
                  <div className="mt-6 pt-6 border-t border-gray-100 ">
                    <button className="cursor-pointer text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-200 flex items-center py-2 min-h-[24px]" aria-label={`Learn more about ${service.name}`}>
                      Learn More
                      <span className="sr-only"> about {service.name}</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Detailed Service View */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Service Details */}
            <div>
              <div className="flex items-center mb-4">
                {React.createElement(
                  iconMap[
                    cityData.servicesContent.services[activeService]
                      .icon as keyof typeof iconMap
                  ] || CheckCircle,
                  {
                    className: "h-12 w-12 text-brand-blue mr-4",
                  }
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {cityData.servicesContent.services[activeService].name}
                  </h3>
                  {cityData.servicesContent.services[activeService]
                    .trending && (
                      <div className="flex items-center text-orange-600 text-sm font-medium mt-1">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        High Demand in {cityData.name}
                      </div>
                    )}
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {cityData.servicesContent.services[activeService].description}
              </p>

              {/* All Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cityData.servicesContent.services[activeService].features.map(
                  (feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  )
                )}
              </div>

              {/* CTA Button */}
              <Link href={cityData.servicesContent.services[activeService].link}>
                <div className="mt-8">
                  <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 inline-flex items-center cursor-pointer">
                    Get Started with{" "}
                    {
                      cityData.servicesContent.services[activeService].name.split(
                        " "
                      )[0]
                    }{" "}
                    Testing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </Link>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Service Stats */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Service Performance in {cityData.name}
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Client Satisfaction</span>
                      <span className="text-gray-900 font-medium">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "98%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">
                        Project Success Rate
                      </span>
                      <span className="text-gray-900 font-medium">96%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "96%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">On-time Delivery</span>
                      <span className="text-gray-900 font-medium">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: "94%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-2xl font-bold text-brand-blue">500K+</div>
                  <div className="text-sm text-gray-600">
                    Test Cases Executed
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-2xl font-bold text-green-600">99%</div>
                  <div className="text-sm text-gray-600">
                    Bug Detection Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Custom Testing Solutions for Your {cityData.name} Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experts can design a tailored testing strategy that meets your
            specific requirements and industry standards.
          </p>

          <Link href="https://calendar.app.google/uUHn8prcXbdqcvVb6" target="_blank" rel="noopener noreferrer" className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 cursor-pointer">
            Schedule Free Consultation
          </Link>


        </div>
      </div>
    </section>
  );
};

export default CityTestingServicesSection;
