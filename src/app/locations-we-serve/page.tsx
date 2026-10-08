"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaExternalLinkAlt,
  FaCity,
  FaFlag,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";

import { locationData, LocationData } from "../lib/LocationData"; // adjust path if needed

// Structured Data for LocalBusiness and Service
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.testriq.com/#organization",
      "name": "Testriq QA Lab LLP",
      "alternateName": "Testriq",
      "url": "https://www.testriq.com/",
      "logo": "https://www.testriq.com/testriq-logo.png",
      "description": "Leading software testing company providing comprehensive QA services across multiple locations including web application testing, mobile app testing, API testing, and test automation services.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mumbai",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.0760",
        "longitude": "72.8777"
      },
      "telephone": "+91-9876543210",
      "email": "info@testriq.com",
      "foundingDate": "2020",
      "numberOfEmployees": "50-100",
      "priceRange": "$$",
      "serviceArea": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Testing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Application Testing",
              "description": "Comprehensive web application testing services including functional, performance, and security testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Testing",
              "description": "Mobile application testing for iOS and Android platforms including usability and compatibility testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "API Testing",
              "description": "REST and SOAP API testing services for data validation and integration testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Test Automation",
              "description": "Automated testing solutions using Selenium, Cypress, and other industry-standard tools"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.linkedin.com/company/testriq-qa-lab/",
        "https://x.com/testriq",
        "https://www.facebook.com/testriq.lab/"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.testriq.com/locations-we-serve/#service",
      "name": "Software Testing Services",
      "description": "Professional software testing and quality assurance services available across multiple locations in India and UAE",
      "provider": {
        "@id": "https://www.testriq.com/#organization"
      },
      "serviceType": "Software Testing",
      "areaServed": [
        {
          "@type": "Country",
          "name": "India",
          "containsPlace": [
            {
              "@type": "State",
              "name": "Maharashtra",
              "containsPlace": [
                { "@type": "City", "name": "Mumbai" },
                { "@type": "City", "name": "Pune" },
                { "@type": "City", "name": "Nashik" },
                { "@type": "City", "name": "Nagpur" }
              ]
            },
            {
              "@type": "State",
              "name": "Karnataka",
              "containsPlace": [
                { "@type": "City", "name": "Bangalore" },
                { "@type": "City", "name": "Mysore" },
                { "@type": "City", "name": "Hubli" }
              ]
            },
            {
              "@type": "State",
              "name": "Tamil Nadu",
              "containsPlace": [
                { "@type": "City", "name": "Chennai" },
                { "@type": "City", "name": "Coimbatore" },
                { "@type": "City", "name": "Madurai" }
              ]
            }
          ]
        },
        {
          "@type": "Country",
          "name": "United Arab Emirates",
          "containsPlace": [
            {
              "@type": "State",
              "name": "Dubai",
              "containsPlace": [
                { "@type": "City", "name": "Dubai" },
                { "@type": "City", "name": "Sharjah" }
              ]
            },
            {
              "@type": "State",
              "name": "Abu Dhabi",
              "containsPlace": [
                { "@type": "City", "name": "Abu Dhabi" },
                { "@type": "City", "name": "Al Ain" }
              ]
            }
          ]
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Testing Services Portfolio",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Manual Testing Services",
              "description": "Expert manual testing services for functional, usability, and exploratory testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automation Testing Services",
              "description": "Comprehensive test automation using Selenium, Cypress, TestComplete, and custom frameworks"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Performance Testing Services",
              "description": "Load, stress, and performance testing using JMeter, LoadRunner, and other tools"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Security Testing Services",
              "description": "Application security testing including penetration testing and vulnerability assessment"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.testriq.com/locations-we-serve/#webpage",
      "url": "https://www.testriq.com/locations-we-serve/",
      "name": "Software Testing Services Locations - Testriq QA Lab",
      "description": "Discover comprehensive software testing services across major cities in India and UAE. Professional QA testing solutions tailored to local market needs.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.testriq.com/#website",
        "name": "Testriq - Professional Software Testing Services",
        "url": "https://www.testriq.com/"
      },
      "about": {
        "@id": "https://www.testriq.com/locations-we-serve/#service"
      },
      "mainEntity": {
        "@id": "https://www.testriq.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.testriq.com/locations-we-serve/#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testriq.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations We Serve",
          "item": "https://www.testriq.com/locations-we-serve/"
        }
      ]
    }
  ]
};

const LocationsWeServe: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedCountries, setExpandedCountries] = useState<Set<string>>(
    new Set()
  );
  const [expandedStates, setExpandedStates] = useState<Set<string>>(new Set());

  const toggleCountryExpansion = (country: string) => {
    const newExpanded = new Set(expandedCountries);
    if (newExpanded.has(country)) {
      newExpanded.delete(country);
    } else {
      newExpanded.add(country);
    }
    setExpandedCountries(newExpanded);
  };

  const toggleStateExpansion = (state: string) => {
    const newExpanded = new Set(expandedStates);
    if (newExpanded.has(state)) {
      newExpanded.delete(state);
    } else {
      newExpanded.add(state);
    }
    setExpandedStates(newExpanded);
  };

  const getLocationName = (url: string): string => {
    const parts = url.split("-in-");
    if (parts.length > 1) {
      return parts[1]
        .split("/")[0]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
    }
    return url;
  };

  const filterLocations = () => {
    if (!searchTerm.trim()) return locationData;

    const filtered: LocationData = {};

    Object.entries(locationData).forEach(([country, states]) => {
      Object.entries(states).forEach(([state, cities]) => {
        Object.entries(cities).forEach(([city, urls]) => {
          const cityName = city.toLowerCase();
          const stateName = state.toLowerCase();
          const countryName = country.toLowerCase();
          const search = searchTerm.toLowerCase();

          if (
            cityName.includes(search) ||
            stateName.includes(search) ||
            countryName.includes(search)
          ) {
            if (!filtered[country]) filtered[country] = {};
            if (!filtered[country][state]) filtered[country][state] = {};
            filtered[country][state][city] = urls;
          }

          // Also search in subcities
          if (Array.isArray(urls)) {
            const matchingUrls = urls.filter((url) =>
              getLocationName(url).toLowerCase().includes(search)
            );
            if (matchingUrls.length > 0) {
              if (!filtered[country]) filtered[country] = {};
              if (!filtered[country][state]) filtered[country][state] = {};
              filtered[country][state][city] = matchingUrls;
            }
          }
        });
      });
    });

    return filtered;
  };

  const filteredData = filterLocations();
  const totalLocations = Object.values(locationData).reduce(
    (total, states) =>
      total +
      Object.values(states).reduce(
        (stateTotal, cities) =>
          stateTotal +
          Object.values(cities).reduce(
            (cityTotal, urls) =>
              cityTotal + (Array.isArray(urls) ? urls.length : 1),
            0
          ),
        0
      ),
    0
  );

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="pt-8 pb-16 bg-gray-50 px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-[theme(color.brand.blue)] transition-colors"
            >
              <FaHome className="text-lg" />
              Home
            </Link>
            <FaChevronRight className="text-xs text-gray-400" />
            <span className="text-[theme(color.brand.blue)]">
              Locations We Serve
            </span>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
              <FaGlobe className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Global Reach</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Software Testing Services{" "}
              <span className="text-[theme(color.brand.blue)]">Locations We Serve</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive <Link href='blog/post/the-future-of-qa-trends-shaping-software-testing-in-2025'>QA testing services</Link> across major cities and regions in India and UAE. We provide world-class software testing solutions including <Link href='manual-testing'>manual testing</Link>, <Link href='automation-testing-services'>automation testing</Link>, <Link href='performance-testing-services'>performance testing</Link>, and <Link href='api-testing'>API testing</Link> tailored to local market needs and business requirements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaFlag className="w-4 h-4 text-[theme(color.brand.blue)]" />
                <span>
                  <strong>{Object.keys(locationData).length}</strong> Countries
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4 text-[theme(color.brand.blue)]" />
                <span>
                  <strong>
                    {Object.values(locationData).reduce(
                      (total, states) => total + Object.keys(states).length,
                      0
                    )}
                  </strong>{" "}
                  States/Regions
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCity className="w-4 h-4 text-[theme(color.brand.blue)]" />
                <span>
                  <strong>{totalLocations}+</strong> Locations
                </span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <div className="max-w-2xl mx-auto">
              <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                Search for your city, state, or country to find software testing services
              </label>
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search locations for software testing services... (e.g., Mumbai, Maharashtra, India)"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300 text-lg"
                />
              </div>
              {searchTerm && (
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Found software testing services in {Object.keys(filteredData).length} countries
                </p>
              )}
            </div>
          </div>

          {/* Locations Grid */}
          <div className="space-y-8">
            {Object.entries(filteredData).map(([country, states]) => (
              <div
                key={country}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                {/* Country Header */}
                <div
                  className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-700 text-white p-6 cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                  onClick={() => toggleCountryExpansion(country)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <FaFlag className="w-6 h-6" />
                      <div>
                        <h2 className="text-2xl font-bold">Software Testing Services in {country}</h2>
                        <p className="text-blue-100 text-sm">
                          {Object.keys(states).length} states •{" "}
                          {Object.values(states).reduce(
                            (total, cities) => total + Object.keys(cities).length,
                            0
                          )}{" "}
                          cities offering professional QA testing solutions
                        </p>
                      </div>
                    </div>
                    {expandedCountries.has(country) ? (
                      <FaChevronUp className="w-5 h-5" />
                    ) : (
                      <FaChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* States */}
                {expandedCountries.has(country) && (
                  <div className="p-6">
                    <div className="space-y-4">
                      {Object.entries(states).map(([state, cities]) => (
                        <div
                          key={state}
                          className="border border-gray-200 rounded-xl overflow-hidden"
                        >
                          {/* State Header */}
                          <div
                            className="bg-gray-50 p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                            onClick={() => toggleStateExpansion(state)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="w-5 h-5 text-[theme(color.brand.blue)]" />
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900">
                                    Software Testing Services in {state}
                                  </h3>
                                  <p className="text-sm text-gray-600">
                                    {Object.keys(cities).length} cities with professional QA testing services
                                  </p>
                                </div>
                              </div>
                              {expandedStates.has(state) ? (
                                <FaChevronUp className="w-4 h-4 text-gray-500" />
                              ) : (
                                <FaChevronDown className="w-4 h-4 text-gray-500" />
                              )}
                            </div>
                          </div>

                          {/* Cities */}
                          {expandedStates.has(state) && (
                            <div className="p-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.entries(cities).map(([city, urls]) => (
                                  <div
                                    key={city}
                                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                                  >
                                    <div className="flex items-center gap-2 mb-3">
                                      <FaCity className="w-4 h-4 text-[theme(color.brand.blue)]" />
                                      <h4 className="font-semibold text-gray-900">
                                        Software Testing in {city}
                                      </h4>
                                    </div>

                                    {Array.isArray(urls) ? (
                                      <div className="space-y-2">
                                        <p className="text-xs text-gray-500 mb-2">
                                          {urls.length} testing service locations available
                                        </p>
                                        <div className="max-h-32 overflow-y-auto space-y-1">
                                          {urls.map((url, index) => (
                                            <Link
                                              key={index}
                                              href={url}
                                              className="flex items-center justify-between text-sm text-[theme(color.brand.blue)] hover:text-blue-800 hover:underline group p-2 rounded hover:bg-blue-50 transition-all duration-200"
                                            >
                                              <span className="truncate">
                                                Professional Software Testing Services in{" "}
                                                {getLocationName(url)}
                                              </span>
                                              <FaExternalLinkAlt className="w-3 h-3 flex-shrink-0 ml-2 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ) : (
                                      <Link
                                        href={urls as string}
                                        className="flex items-center justify-between text-[theme(color.brand.blue)] hover:text-blue-800 hover:underline group"
                                      >
                                        <span>
                                          Professional Software Testing Services in {city}
                                        </span>
                                        <FaExternalLinkAlt className="w-4 h-4 group-hover:opacity-100 transition-opacity" />
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Results */}
          {Object.keys(filteredData).length === 0 && searchTerm && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaSearch className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                No software testing service locations found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search term or browse all testing service locations above.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="bg-[theme(color.brand.blue)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Show All Testing Service Locations
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl p-8 text-white text-center">
            <FaGlobe className="w-12 h-12 text-white mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">
              Don&apos;t See Your Location for Software Testing Services?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We&apos;re constantly expanding our software testing and QA services to new locations.
              Contact us to discuss bringing our world-class <Link href='software-testing-guide'>software testing</Link>, <Link href='automation-testing-services'>automation testing</Link>,
              <Link href='performance-testing-services'>performance testing</Link>, and <Link href='api-testing'>API testing services</Link> to your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[theme(color.brand.blue)] transition-all duration-300">
                  Contact Us for Testing Services
                </button>
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <FaFlag className="w-8 h-8 text-[theme(color.brand.blue)] mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {Object.keys(locationData).length}
              </div>
              <div className="text-sm text-gray-600">Countries Served</div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <FaMapMarkerAlt className="w-8 h-8 text-[theme(color.brand.blue)] mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {Object.values(locationData).reduce(
                  (total, states) => total + Object.keys(states).length,
                  0
                )}
              </div>
              <div className="text-sm text-gray-600">States/Regions</div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <FaCity className="w-8 h-8 text-[theme(color.brand.blue)] mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {totalLocations}+
              </div>
              <div className="text-sm text-gray-600">Testing Service Locations</div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <FaGlobe className="w-8 h-8 text-[theme(color.brand.blue)] mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Software Testing Services Available Across All Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FaGlobe className="w-6 h-6 text-[theme(color.brand.blue)]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2"><Link href='manual-testing'>Manual Testing</Link></h3>
                <p className="text-sm text-gray-600">Comprehensive manual testing services including <Link href='blog/post/functional-testing-in-manual-testing-use-cases-techniques-best-practices'>functional</Link>, <Link href='blog/post/usability-testing-in-manual-testing-use-cases-techniques'>usability</Link>, and <Link href='exploratory-testing'>exploratory testing</Link></p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FaGlobe className="w-6 h-6 text-[theme(color.brand.blue)]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2"><Link href='automation-testing-services'>Automation Testing</Link></h3>
                <p className="text-sm text-gray-600">Test automation using <Link href='blog/post/getting-started-with-selenium-a-beginners-guide'>Selenium</Link>, <Link href='blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress'>Cypress</Link>, TestComplete, and custom automation frameworks</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FaGlobe className="w-6 h-6 text-[theme(color.brand.blue)]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2"><Link href='performance-testing-services'>Performance Testing</Link></h3>
                <p className="text-sm text-gray-600"><Link href='blog/post/load-testing-in-performance-testing-complete-guide'>Load testing</Link>, <Link href='blog/post/stress-testing-applications-identifying-breaking-points'>stress testing</Link>, and performance optimization using <Link href='blog/post/top-performance-testing-tools-compared-jmeter-loadrunner-etc'>JMeter and LoadRunner</Link></p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FaGlobe className="w-6 h-6 text-[theme(color.brand.blue)]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2"><Link href='api-testing'>API Testing</Link></h3>
                <p className="text-sm text-gray-600"><Link href='blog/post/rest-api-testing-guide-endpoints-methods-best-practices'>REST</Link> and <Link href='blog/post/soap-api-testing-methodology-ensuring-legacy-system-reliability'>SOAP API testing</Link> for data validation, <Link href='blog/post/integration-testing-for-web-application-ensuring-seamless-system-interactions'>integration testing</Link>, and API <Link href='security-testing'>security testing</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationsWeServe;

