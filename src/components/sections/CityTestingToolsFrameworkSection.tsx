
'use client';

import React, { useState } from 'react';
import { CityData } from "@/app/lib/CityData";
import {
  Settings,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Monitor,
  Database
} from 'lucide-react';
import Link from 'next/link';

interface CityTestingToolsFrameworkSectionProps {
  cityData: CityData;
}

const CityTestingToolsFrameworkSection: React.FC<CityTestingToolsFrameworkSectionProps> = ({ cityData }) => {
  const [activeCard, setActiveCard] = useState(0);

  // Define the fallback data for tools in case a location doesn't have custom tools mapped yet
  const defaultTools = [
    {
      id: "selenium-webDriver",
      title: 'Selenium WebDriver',
      shortName: "Selenium",
      description: 'Industry-leading open-source tool for automating web application testing across multiple browsers and platforms.',
      level: 'Expert Level',
      color: "blue",
      progress: '100%',
      link: '/automation-testing-services'
    },
    {
      id: "cypress",
      title: 'Cypress',
      shortName: "Cypress",
      description: 'Modern JavaScript-based end-to-end testing framework that runs directly in the browser for fast and reliable web application testing.',
      level: 'Expert Level',
      color: "green",
      progress: '100%',
      link: '/automation-testing-services'
    },
    {
      id: "apache-jmeter",
      title: 'Apache JMeter',
      shortName: "JMeter",
      description: 'Open-source Java application designed for load testing, performance measurement, and functional testing of web applications and APIs.',
      level: 'Expert Level',
      color: "indigo",
      progress: '100%',
      link: '/performance-testing-services'
    },
    {
      id: "postman",
      title: 'Postman',
      shortName: "Postman",
      description: 'Comprehensive API development and testing tool that simplifies creating, sharing, and automating API tests.',
      level: 'Expert Level',
      color: "orange",
      progress: '100%',
      link: '/api-testing'
    },
    {
      id: "docker",
      title: 'Docker',
      shortName: "Docker",
      description: 'Containerization platform that enables consistent development, testing, and deployment environments for QA processes.',
      level: 'Expert Level',
      color: "teal",
      progress: '100%',
      link: '/automation-testing-services'
    },
    {
      id: "jenkins",
      title: 'Jenkins',
      shortName: "Jenkins",
      description: 'Open-source automation server for continuous integration and delivery, automating builds, tests, and deployments in QA pipelines.',
      level: 'Expert Level',
      color: "purple",
      progress: '100%',
      link: '/automation-testing-services'
    },
  ];

  const tools = cityData.toolsFrameworkContent.tools && cityData.toolsFrameworkContent.tools.length > 0 
    ? cityData.toolsFrameworkContent.tools 
    : defaultTools;

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "text-green-600 bg-green-50 border-green-200",
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      teal: "text-teal-600 bg-teal-50 border-teal-200",
      indigo: "text-indigo-600 bg-indigo-50 border-indigo-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  const getProgressColor = (color: string) => {
    const colorMap = {
      green: "green-600",
      blue: "blue-600",
      purple: "purple-600",
      orange: "orange-600",
      teal: "teal-600",
      indigo: "indigo-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {cityData.toolsFrameworkContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {cityData.toolsFrameworkContent.description}
          </p>

          {/* Tech Stack Overview */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tools.map((tool, index) => (
              <button key={tool.id} onClick={() => setActiveCard(index)} className={`px-4 py-2 rounded-full shadow-sm cursor-pointer
              aria-label={tool.title}
                  ${activeCard === index ? `${getColorClasses(tool.color)} border-2` : "text-gray-600 bg-white border-2 border-gray-200 hover:bg-gray-50"}
              `}>
                <span className={`text-sm font-medium ${activeCard === index ? "" : "text-black"}`}>{tool.shortName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        {/* Removed category tabs as toolsFrameworkContent does not have categories */}

        {/* Active Category Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Category Header */}
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 p-8 text-white">
            <div className="flex items-center mb-4">
              <Settings className="h-12 w-12 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">
                  Tools & Frameworks Overview
                </h3>
                <p className="text-blue-100 mt-2">
                  Leveraging cutting-edge tools for superior QA testing.
                </p>
              </div>
            </div>
          </div>

          {/* Tools Grid - Placeholder for now, as toolsFrameworkContent does not have a 'tools' array */}
          <div className="flex justify-center p-12">
            <div className="w-2xl gap-6">
              {/* Example Tool Card (replace with actual data if available) */}
              <div className="relative bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className={`text-lg font-bold text-${getProgressColor(tools[activeCard].color)} transition-colors duration-200`}>
                    {tools[activeCard].title}
                  </h4>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getColorClasses(tools[activeCard].color)}`}>
                    Expert Level
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {tools[activeCard].description}
                </p>
                <div className="mb-10">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Expertise Level</span>
                    <span className={`text-gray-700 font-medium `}>Expert Level</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={` ${tools[activeCard].color === 'green' ? 'bg-green-600' : tools[activeCard].color === 'blue' ? 'bg-blue-600' : tools[activeCard].color === 'purple' ? 'bg-purple-600' : tools[activeCard].color === 'orange' ? 'bg-orange-600' : tools[activeCard].color === 'teal' ? 'bg-teal-600' : 'bg-indigo-600'} h-2 rounded-full`} style={{ width: '100%' }}></div>
                    <span className='text-sm font-semibold text-gray-500'>{tools[activeCard].progress}</span>
                  </div>
                </div>
                <Link href={tools[activeCard].link || '#'} passHref>
                  <button className={`w-full text-white py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center hover:scale-102 cursor-pointer ${tools[activeCard].color === 'green' ? 'bg-green-600' : tools[activeCard].color === 'blue' ? 'bg-blue-600' : tools[activeCard].color === 'purple' ? 'bg-purple-600' : tools[activeCard].color === 'orange' ? 'bg-orange-600' : tools[activeCard].color === 'teal' ? 'bg-teal-600' : 'bg-indigo-600'}`}>
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack Overview */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Complete Technology Stack for {cityData.name}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage the most advanced tools and technologies to deliver exceptional testing services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Frontend Testing */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Frontend Testing</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Selenium WebDriver
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cypress & Playwright
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cross-browser Testing
                </div>
              </div>
            </div>

            {/* Backend Testing */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Backend Testing</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  API Testing (REST/SOAP)
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Database Testing
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Microservices Testing
                </div>
              </div>
            </div>

            {/* Performance Testing */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Performance Testing</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  JMeter & LoadRunner
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  K6 & Gatling
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cloud Load Testing
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Showcase */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Why Our Tools & Expertise Matter for {cityData.name} Businesses
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-100">Industry-leading tool expertise with certified professionals</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-100">Custom framework development for {cityData.name} market needs</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-100">Continuous tool updates and technology adoption</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-100">Cost-effective solutions without compromising quality</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-25 rounded-xl p-6 text-center border border-white border-opacity-30 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-2 text-brand-blue">{cityData.toolsFrameworkContent.stats.projectsCompleted}</div>
                  <div className="text-sm text-brand-blue font-medium">Test Cases Executed</div>
                </div>
                <div className="bg-white bg-opacity-25 rounded-xl p-6 text-center border border-white border-opacity-30 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-2 text-brand-blue">{cityData.toolsFrameworkContent.stats.clientSatisfaction}</div>
                  <div className="text-sm text-brand-blue font-medium">Client Satisfaction</div>
                </div>
                <div className="bg-white bg-opacity-25 rounded-xl p-6 text-center border border-white border-opacity-30 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-2 text-brand-blue">{cityData.toolsFrameworkContent.stats.supportAvailable}</div>
                  <div className="text-sm text-brand-blue font-medium">Tool Support</div>
                </div>
                <div className="bg-white bg-opacity-25 rounded-xl p-6 text-center border border-white border-opacity-30 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-2 text-brand-blue">{cityData.toolsFrameworkContent.stats.yearsExperience}</div>
                  <div className="text-sm text-brand-blue font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <Link href="/contact-us" className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg">
                Discuss Your Tool Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityTestingToolsFrameworkSection;


