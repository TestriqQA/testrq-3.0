// F-24 — Service-page schema constants extracted from
// src/components/seo/StructuredData.tsx for code organisation. Each export
// is a Schema.org JSON-LD payload for a specific service page (manual,
// automation, API, security, performance, etc.).
//
// StructuredData.tsx re-exports these via `export *` so the 141 existing
// call sites across the project don't need to update their imports.
//
// Extracted: 2026-05-15. Total exports here: 44 of 45 service schemas.

export const webAppTestingServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Web Application Testing Services",
      "alternateName": "Web Application Testing",
      "serviceType": "QA and Software Testing",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Testriq QA Lab",
        "image": "https://www.testriq.com/testriq-logo.png",
        "telephone": "+91-915-2929-343",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        },
        "priceRange": "$$"
      },
      "url": "https://www.testriq.com/web-application-testing-services",
      "description": "Professional web application testing services including functional, performance, and security testing to ensure cross-browser compatibility and bug-free web apps.",
      "areaServed": "WorldWide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Testing Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Functional Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Security Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Performance Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Usability Testing"
            }
          }
        ]
      }
    }
    // F-44.1: FAQPage intentionally NOT in @graph — page-side
    // createFaqPageSchema(faqsForSchema) on /web-application-testing-services
    // is the single source of truth, mirroring the WebappFAQs UI content.
    // Removed stale generic Q&As ("what types of web apps", "how long does
    // testing take", etc.) that were NOT in the visible UI (violating
    // Google's FAQPage content-must-match-visible-UI policy).
  ]
};

export const aiTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Application Testing Services",
  "description": "Comprehensive AI application testing services including model validation, bias detection, explainability, performance, and security testing for machine learning and generative AI systems.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "AI Testing Services",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Model Validation Testing",
          "description": "Validation of AI/ML models including accuracy, precision, recall, and F1-score across datasets."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Bias Detection",
          "description": "Testing for demographic and algorithmic bias in AI systems to ensure fairness and ethical compliance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Explainability Testing",
          "description": "Ensuring transparency in AI decision-making with tools like SHAP, LIME, and InterpretML."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Testing for latency, throughput, and scalability of AI applications under load."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Security Testing",
          "description": "Robust testing for AI threats including adversarial attacks, model evasion, and data poisoning."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Quality Testing",
          "description": "Validation of training data for completeness, consistency, and quality assurance."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const launchFastQASchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "LaunchFast QA Services",
  "description": "Rapid software testing services tailored for startups and agile development teams. Includes functional testing, performance optimization, security validation, and launch readiness assessment.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Rapid QA for Startups",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "LaunchFast QA Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rapid Functional Testing",
          "description": "Agile-friendly functional validation including regression, sanity, and smoke testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Optimization",
          "description": "Load, stress, and scalability testing to ensure optimal product performance at launch."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Validation",
          "description": "Security testing for authentication, vulnerabilities, and data protection during launch cycles."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Testing",
          "description": "Device compatibility, OS testing, and store-readiness validation for mobile platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Application Testing",
          "description": "Cross-browser and responsive testing to ensure flawless web launch experience."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API & Integration Testing",
          "description": "Validation of APIs, third-party integrations, and backend connectivity for launch readiness."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const exploratoryTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Exploratory Testing Services",
  "description": "Discover hidden bugs and usability issues with expert-led exploratory testing. Our systematic, human-centered approach ensures your product delivers exceptional quality and seamless user experiences.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Exploratory Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Exploratory Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Session-Based Testing",
          "description": "Charter-driven sessions with time-boxed exploration, documentation, and issue discovery."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Journey Exploration",
          "description": "End-to-end user scenario and edge case testing for better user experience validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Usability Investigation",
          "description": "Assessment of user interface design, accessibility, and UX flows for optimization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bug Discovery",
          "description": "Heuristic evaluation and creative scenario testing to find unexpected bugs and failures."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Persona-Based Testing",
          "description": "Testing using role-based personas to mimic real-user interactions and uncover contextual issues."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Heuristic Evaluation",
          "description": "Expert usability review using Nielsen heuristics and design best practices."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const desktopAppTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Desktop Application Testing Services",
  "description": "Comprehensive testing of desktop applications for functionality, compatibility, security, and performance across Windows, macOS, and Linux platforms.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Desktop App QA Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Functional Testing",
          "description": "Feature validation and business logic verification of desktop apps on various OS."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing",
          "description": "Vulnerability scanning, data encryption testing, access control validation for desktop software."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Load, stress, memory, and CPU usage analysis to optimize desktop app performance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Usability Testing",
          "description": "UX testing, interface design validation, and accessibility compliance across platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compatibility Testing",
          "description": "Cross-OS and hardware compatibility validation for Windows, macOS, and Linux apps."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Regression Testing",
          "description": "Automated regression suites to ensure updates do not break existing functionality."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const mobileAppTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Global Mobile Application Testing Services 2026",
  "description": "Expert-led mobile app testing across iOS 19 and Android 15. Specialized in 5G optimization, security penetration testing, and ISO 29119 compliance for 24,000+ device combinations.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Mobile Quality Assurance",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Advanced Mobile QA Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "5G & Performance Stress Testing",
          "description": "Optimizing software for 5G and edge computing, preventing crashes during network-edge connectivity shifts."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ISO 29119-3 Compliance Mapping",
          "description": "Standardized Test Environment Requirements and Test Design Specifications following international benchmarks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Elite Security Penetration Testing",
          "description": "Mobile security audits mapped to OWASP Mobile Top 10 with biometric identity validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI-Driven Automation (Appium)",
          "description": "Self-healing AI tools and Model-Based Testing (MBT) for rapid iOS and Android release cycles."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Real Device Cloud Testing",
          "description": "Exhaustive validation across over 24,000 Android device combinations and newest iOS versions."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const iotDeviceTestingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.testriq.com/iot-device-testing-services/#service",
      "name": "IoT Device Testing Services",
      "serviceType": "Embedded & Firmware QA",
      "provider": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "url": "https://www.testriq.com",
        "logo": "https://www.testriq.com/testriq-logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/testriq-qa-lab/",
          "https://clutch.co/profile/testriq-qa-lab"
        ]
      },
      "areaServed": "Worldwide",
      "description": "End-to-end IoT testing services including Firmware (OTA) validation, MQTT/Zigbee protocol testing, and Security Pen-testing for smart devices.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/OnlineOnly",
        "url": "https://www.testriq.com/contact"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IoT Testing Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "MQTT & Zigbee Protocol Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Firmware OTA Update Validation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IoT Security Penetration Testing"
            }
          }
        ]
      },

    }
    // F-44.1: FAQPage intentionally NOT in @graph — page-side
    // createFaqPageSchema(faqsForSchema) on /iot-device-testing-services
    // is the single source of truth, mirroring the IoTFAQs UI content
    // (5 Q&As vs 3 abbreviated embedded). Removed embedded duplicate.
  ]
};

export const roboticTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise RPA & Robotics Testing Services 2026",
  "description": "Comprehensive robotics and RPA QA for the 2026 automation era. Specialized in ISO 10218 compliance, Sim2Real validation, AI-driven path planning, and enterprise RPA bot validation.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Robotics Quality Assurance",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Global Robotics & Automation Testing Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ISO 10218-1:2026 Compliance",
          "description": "Functional safety validation for industrial co-bots and integrators following international 2026 benchmarks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sim2Real Gap Validation",
          "description": "Bridging simulation-to-reality gaps using Digital Twin technology and Physical AI predictive modeling."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HW-SW Integration (ROS2)",
          "description": "Synchronizing sensors, actuators, and ROS/ROS2 middleware using FMEA and HAZOP frameworks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI/ML Path Consistency",
          "description": "Validating non-deterministic AI path planning (Move It) and human-robot collaborative safety (ISO 13482)."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Global Regulatory Safety (UL 3100)",
          "description": "Stringent safety compliance audits including force interaction, proximity testing, and ANSI/RIA R15.06 standards."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise RPA Testing Services",
          "description": "Automated UI-level testing for virtual workforces (UiPath, Blue Prism) on legacy enterprise systems."
        }
      }
    ]
  },

  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const etlTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ETL Testing Services",
  "description": "Comprehensive ETL testing solutions for data extraction, transformation, and loading processes. Ensure accuracy, performance, and security across your data pipelines.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "ETL QA Services",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ETL Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Extraction Testing",
          "description": "Validates data completeness, accuracy, and connectivity from source systems."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Transformation Testing",
          "description": "Ensures business rules and transformation logic are applied correctly across pipelines."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Loading Testing",
          "description": "Verifies successful and accurate loading of data into target databases or warehouses."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Quality Testing",
          "description": "Checks for completeness, consistency, uniqueness, and accuracy across all stages."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Tests throughput, latency, and scalability of ETL processes under real-world data volumes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Security Testing",
          "description": "Validates access controls, encryption, compliance, and secure data handling."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const manualTestingServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.testriq.com/manual-testing-services/#service",
      "name": "Manual & Exploratory Testing Services",
      "serviceType": "Software Quality Assurance",
      "provider": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "url": "https://www.testriq.com",
        "logo": "https://www.testriq.com/testriq-logo.png"
      },
      "image": "https://www.testriq.com/testriq-logo.png",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/OnlineOnly",
        "url": "https://www.testriq.com/contact",
      },
      "areaServed": "Worldwide",
      "description": "Expert Manual Testing services focusing on Exploratory Testing, User Acceptance Testing (UAT), and WCAG Accessibility Audits to find bugs automation misses.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Manual Testing Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Exploratory Testing (Ad-hoc)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "User Acceptance Testing (UAT) Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WCAG 2.1 Accessibility Audits"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Localization (L10n) Testing"
            }
          }
        ]
      },

    }
    // F-44: BreadcrumbList intentionally NOT in @graph — page-side
    // createCanonicalBreadcrumb (PR-3) is the single source of truth for
    // service-page breadcrumbs. Previously this constant emitted a stale
    // 3-item Pattern D breadcrumb (Home → Services → Manual Testing
    // pointing at /services, a 308 redirect), causing /manual-testing-services
    // to render two conflicting BreadcrumbList JSON-LD blocks in production.
    //
    // F-44.1: FAQPage also intentionally NOT in @graph — page-side
    // createFaqPageSchema(faqsForSchema) on the service page is the single
    // source of truth, mirroring the UI FAQ component content. Previously
    // this constant embedded its own FAQPage with stale generic Q&As that
    // were NOT visible in the page UI (violating Google's FAQPage policy
    // that requires content to match what users see).
  ]
};

export const automationTestingServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.testriq.com/automation-testing-services/#service",
      "name": "Intelligent Automation Testing Services",
      "serviceType": "Test Automation & QA Architecture",
      "provider": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "url": "https://www.testriq.com",
        "logo": "https://www.testriq.com/testriq-logo.png"
      },
      "areaServed": "Worldwide",
      "description": "Transform your testing strategy with AI-powered automation. We use Selenium, Playwright, and API automation to reduce testing time by 80% and improve coverage.",
      "image": "https://www.testriq.com/testriq-logo.png",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/OnlineOnly",
        "url": "https://www.testriq.com/contact",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Automation Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Automation (Selenium & Playwright)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "API Automation Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile Automation (Android & iOS)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CI/CD Pipeline Integration"
            }
          }
        ]
      },

    }
    // F-44: BreadcrumbList intentionally NOT in @graph — page-side
    // createCanonicalBreadcrumb (PR-3) is the single source of truth.
    // Removed stale Pattern D (Home → Services → Automation Testing pointing
    // at /services 308 redirect) that was double-emitting on production.
    //
    // F-44.1: FAQPage also intentionally NOT in @graph — page-side
    // createFaqPageSchema(faqsForSchema) on the service page is the single
    // source of truth, mirroring the UI FAQ component content. Removed stale
    // generic Q&As that were NOT visible in the AutomationTestingFAQs UI
    // (violating Google's FAQPage policy that content must match visible UI).
  ]
};

export const apiTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "API Testing Services",
  "description": "Ensure your APIs deliver reliable, secure, and high-performance integrations with Testriq’s comprehensive API testing services. REST, SOAP, GraphQL, microservices covered.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "API Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Functional API Testing",
          "description": "End-to-end API testing for functionality, input/output validation, and error handling."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Performance Testing",
          "description": "Ensure optimal response times and performance under load for REST, SOAP, and GraphQL APIs."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing for APIs",
          "description": "Vulnerability assessments and security testing for APIs including authentication, encryption, and authorization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Integration Testing",
          "description": "Validation of complex API workflows, request chaining, and inter-service communication for microservices."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const regressionTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Regression Testing Services",
  "description": "Testriq provides comprehensive regression testing services including automated, manual, and risk-based testing to ensure software stability across updates. We help you prevent defects, maintain quality, and accelerate releases.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Regression Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automated Regression Testing",
          "description": "Run automated regression test suites across releases for faster and more consistent validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Manual Regression Testing",
          "description": "Manual test execution for scenarios requiring human judgment or not yet automated."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Risk-Based Regression Testing",
          "description": "Prioritize regression tests based on business impact and likelihood of defect introduction."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Continuous Regression Testing",
          "description": "CI/CD-integrated regression testing for real-time validation during deployments."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Impact Analysis",
          "description": "Determine affected functionalities due to code changes to scope regression suites efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cross-Platform Testing",
          "description": "Regression testing across web, mobile, legacy systems, and APIs for end-to-end quality."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const agileTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Agile Testing Services | Agile QA & Continuous Testing Company",
  "description": "Accelerate your release cycles with Testriq's Agile testing services. We offer continuous testing, shift-left QA, and expert Agile consulting to ensure high-quality software delivery in every sprint.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Agile Quality Assurance",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Agile Testing Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Continuous Testing & CI/CD Integration",
          "description": "Automated validation for every code change, providing immediate feedback in Agile environments."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Agile Test Automation Services",
          "description": "Maintainable, scalable frameworks for regression, functional, and API testing in sprints."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Agile Exploratory Testing",
          "description": "Expert-led discovery of edge cases and usability issues beyond scripted tests."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "BDD & TDD Implementation",
          "description": "Behavior-Driven and Test-Driven Development to ensure clear requirements and testable code."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Agile Regression Testing",
          "description": "Optimized regression suites for high-speed sprint cycles and frequent releases."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const performanceTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Performance Testing Services",
  "description": "Comprehensive performance testing services including load testing, stress testing, endurance testing, and spike testing to ensure application speed, scalability, and reliability under any load conditions.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Performance Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Load Testing",
          "description": "Simulate user loads to evaluate application behavior and performance under expected traffic."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Stress Testing",
          "description": "Determine the system’s breaking point by applying load beyond normal operational capacity."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Spike Testing",
          "description": "Evaluate how applications respond to sudden and extreme increases in traffic."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Endurance Testing",
          "description": "Assess application behavior and memory leaks under sustained load for long periods."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Scalability Testing",
          "description": "Determine the system’s ability to scale up or out to accommodate increased load."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Volume Testing",
          "description": "Assess system performance with large volumes of data to validate database and processing capabilities."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const securityTestingServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.testriq.com/security-testing/#service",
      "name": "VAPT & Security Testing Center of Excellence (TCoE)",
      "serviceType": "Cybersecurity & Penetration Testing",
      "provider": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "url": "https://www.testriq.com",
        "logo": "https://www.testriq.com/testriq-logo.png"
      },
      "image": "https://www.testriq.com/testriq-logo.png",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/OnlineOnly",
        "url": "https://www.testriq.com/contact",
      },
      "areaServed": "Worldwide",
      "description": "Enterprise-grade VAPT services, GDPR Compliance Audits, and Source Code Review delivered by our CISSP & OSCP certified Security Center of Excellence.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Security Testing Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vulnerability Assessment & Penetration Testing (VAPT)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile Application Security (OWASP MASVS)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ISO 27001 & GDPR Compliance Audit"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SecureGuard™ Managed Security Service"
            }
          }
        ]
      },

    }
    // F-44: BreadcrumbList intentionally NOT in @graph — page-side
    // createCanonicalBreadcrumb (PR-3) is the single source of truth.
    // Removed stale Pattern D (Home → Services → Security Testing pointing
    // at /services 308 redirect) that was double-emitting on production.
    //
    // F-44.1: FAQPage also intentionally NOT in @graph — page-side
    // createFaqPageSchema(faqsForSchema) on the service page is the single
    // source of truth, mirroring the UI FAQ component content. Removed stale
    // SecureGuard™ / Safe-to-Host Q&As that were NOT in the
    // SecurityTestingFAQs UI (violating Google's FAQPage content-must-match-
    // visible-UI policy).
  ]
};

export const qaDocumentationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "QA Documentation Services",
  "description": "Professional QA documentation services including test plans, test cases, requirements documentation, and compliance-ready deliverables.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "QA Documentation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Test Planning & Strategy",
          "description": "Comprehensive documentation for test planning, test strategy, scope, timelines, risk management, and test entry/exit criteria."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Test Case Documentation",
          "description": "Detailed test cases with expected results, test data, and traceability to requirements."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Requirements Documentation",
          "description": "Functional and non-functional requirement documentation aligned with business goals."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Process Documentation",
          "description": "QA process flows, standard operating procedures (SOPs), and test lifecycle documentation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Reporting & Analytics",
          "description": "Test summary reports, defect metrics, coverage reports, and executive dashboards."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Acceptance Testing Documentation",
          "description": "UAT planning, scenarios, test logs, and sign-off documents for stakeholder validation."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const dataAnalysisServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Data Analysis Services",
  "description": "Transform raw data into actionable insights through descriptive, predictive, prescriptive, and cognitive analytics. Our services help businesses make data-driven decisions for growth and efficiency.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Data Analysis & Analytics",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Data Analytics Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Descriptive Analytics",
          "description": "Understand historical data and business performance through visualizations and statistical summaries."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Predictive Analytics",
          "description": "Leverage machine learning to forecast trends and predict future outcomes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Prescriptive Analytics",
          "description": "Generate data-backed recommendations for optimal business decision-making."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diagnostic Analytics",
          "description": "Analyze past performance to identify causes and correlations within your data."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cognitive Analytics",
          "description": "Use AI and natural language processing to simulate human thought processes in data interpretation."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const smartDeviceTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Smart Device Testing Services",
  "description": "Smart device and IoT testing services for wearables, smart home appliances, and connected ecosystems. Includes connectivity, performance, security, and cloud integration testing.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "IoT & Smart Device Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Smart Device Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Connectivity Testing",
          "description": "WiFi, Bluetooth, NFC, and cellular connectivity validation for seamless device communication."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing",
          "description": "Penetration testing, vulnerability scanning, and data protection validation for smart devices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Evaluation of responsiveness, throughput, and power consumption of smart devices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Battery & Power Testing",
          "description": "Monitoring and analysis of battery life, charging cycles, and energy consumption."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Experience Testing",
          "description": "Functional and usability testing under real-world scenarios and user conditions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Integration Testing",
          "description": "Validation of cloud connectivity, synchronization, and backend communication for smart devices."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const matrimonialAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Matrimonial App Certification Services",
  "description": "Comprehensive certification services for matrimonial apps covering security, privacy, compliance, user safety, and algorithm fairness. Ensures GDPR, ISO 27001, and CCPA compliance with high standards of trust and quality.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Application Security & Compliance Certification",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Matrimonial App Certification Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security & Data Protection",
          "description": "Includes ISO 27001 compliance, data encryption, vulnerability assessment, and secure authentication mechanisms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Privacy Compliance",
          "description": "Covers GDPR, CCPA compliance, privacy by design, consent management, and data minimization practices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quality Assurance Testing",
          "description": "Includes functional testing, performance testing, usability testing, and ISTQB-aligned test coverage."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Safety & Trust",
          "description": "Identity verification, anti-scam protection, user reporting, and fake profile detection to ensure platform safety."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Algorithm Fairness & Transparency",
          "description": "Auditing of matching logic for fairness, bias detection, explainability, and ethical AI adherence."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Regulatory Compliance",
          "description": "Full-spectrum compliance checks with ISO 27701, SOC 2, OWASP, and region-specific privacy laws."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const datingAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dating App Trust Certification",
  "serviceType": "Quality Assurance and Certification",
  "description": "Comprehensive trust certification program for dating apps covering identity verification, user safety, content moderation, privacy compliance, and platform stability.",
  "provider": {
    "@type": "Organization",
    "name": "TESTRIQ QA Lab",
    "url": "https://www.testriq.com",
    "logo": "https://www.testriq.com/testriq-logo.png"
  },
  "image": "https://www.testriq.com/testriq-logo.png",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/OnlineOnly",
    "url": "https://www.testriq.com/contact",
  },
  "category": "Quality Assurance and Certification",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dating App Certification Tiers",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Basic Certification",
        "description": "Platform Functionality + Privacy + Content Moderation Checklist",
        "category": "New dating apps in MVP/early-launch phase"
      },
      {
        "@type": "Offer",
        "name": "Advanced Certification",
        "description": "Basic + Identity Verification + Messaging Audit",
        "category": "Growth-stage or regionally scaling apps"
      },
      {
        "@type": "Offer",
        "name": "Enterprise Certification",
        "description": "All of the above + AI-based Matching Audit + Threat Modeling + Pen Testing",
        "category": "Established or global dating platforms"
      }
    ]
  },

};

export const fantasyAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fantasy Sports App Certification",
  "description": "Get your fantasy sports platform certified for fair play, data privacy, security, and regulatory compliance. Testriq's certification builds user trust, prevents fraud, and improves engagement across fantasy gaming apps.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Fantasy Sports Platform Security & Compliance Certification",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fantasy App Certification Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security & Privacy",
          "description": "End-to-end encryption, PCI DSS compliance, secure authentication, and GDPR/CCPA privacy compliance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fair Play & Compliance",
          "description": "Fair gaming verification, regulatory compliance checks, anti-fraud detection, and algorithm transparency."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance & Reliability",
          "description": "Load testing, uptime assurance, real-time data validation, and infrastructure scaling validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Experience Testing",
          "description": "UI/UX, accessibility (WCAG 2.1), mobile-first experience, and multi-device compatibility validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Integrity & Audit",
          "description": "Data validation, backup strategies, role-based access control, and audit trails for fantasy data."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quality Assurance & Testing",
          "description": "Functional testing, API testing, security audits, regression testing, and cheat detection systems."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const tradingAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Trading App Certification Services",
  "description": "Professional certification and QA services for trading applications, covering security testing, low-latency performance, regulatory compliance (FINRA, SEC, MiFID II), algorithm validation, and data integrity audits.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Trading Platform Certification",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Trading App Certification Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security & Fraud Prevention Testing",
          "description": "Vulnerability scanning, end-to-end encryption, and multi-factor authentication for trading platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Regulatory Compliance Validation",
          "description": "Verification of compliance with FINRA, SEC, MiFID II, GDPR, and PCI DSS standards."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance & Low Latency Testing",
          "description": "Real-time performance benchmarking, order execution speed testing, and stress testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Algorithmic Trading Validation",
          "description": "Validation of trading algorithms, risk controls, and automated execution safeguards."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Experience & Accessibility Testing",
          "description": "Cross-device testing, error handling validation, and accessibility compliance (WCAG)."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const shoppingAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopping Apps Certification",
  description:
    "Comprehensive certification program for e-commerce and shopping apps covering security, payment processing, performance optimization, user experience, and compliance standards.",
  provider: {
    "@type": "Organization",
    name: "TESTRIQ QA Lab",
    url: "https://www.testriq.com",
    logo: "https://www.testriq.com/testriq-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9004988859",
      contactType: "customer service",
    },
  },
  serviceType: "Quality Assurance and Certification",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Shopping App Certification Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Security & Privacy Certification",
        description: "PCI DSS compliance, SSL/TLS encryption, data anonymization, GDPR compliance",
        category: "Security and Privacy",
      },
      {
        "@type": "Offer",
        name: "Payment Security Certification",
        description: "Payment tokenization, fraud detection, multi-gateway support, 3D Secure authentication",
        category: "Payment Security",
      },
      {
        "@type": "Offer",
        name: "Performance & Speed Certification",
        description: "Sub-3s load times, CDN optimization, auto-scaling, performance monitoring",
        category: "Performance and Speed",
      },
    ],
  },

};

export const sapTestingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.testriq.com/sap-testing-services/#service",
      "name": "SAP Testing Services",
      "serviceType": "Enterprise Software QA",
      "provider": {
        "@type": "Organization",
        "name": "Testriq QA Lab",
        "url": "https://www.testriq.com",
        "logo": "https://www.testriq.com/testriq-logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/testriq-qa-lab/",
          "https://clutch.co/profile/testriq-qa-lab"
        ]
      },
      "areaServed": "Worldwide",
      "description": "Comprehensive SAP testing services including S/4HANA migration validation, SAP Fiori testing, and automated regression testing for enterprise landscapes.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/OnlineOnly",
        "url": "https://www.testriq.com/contact-us",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SAP Testing Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "S/4HANA Migration Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SAP Fiori UX Validation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SAP Test Automation (Tosca/Worksoft)"
            }
          }
        ]
      },

    }
    // F-44: BreadcrumbList intentionally NOT in @graph — page-side
    // createCanonicalBreadcrumb (PR-3) is the single source of truth.
    // Removed stale Pattern D (Home → Services → SAP Testing pointing at
    // /services 308 redirect) that was double-emitting on production.
    //
    // F-44.1: FAQPage also intentionally NOT in @graph — page-side
    // createFaqPageSchema(faqsForSchema) on /sap-testing-services is the
    // single source of truth, mirroring the SapFAQs UI content (5 Q&As vs
    // 3 stale embedded). Removed embedded duplicate.
  ]
};

export const usabilityTestingServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Usability Testing Services & UX Audit",
      "alternateName": "User Experience Testing",
      "serviceType": "UX and Usability QA",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Testriq QA Lab",
        "image": "https://www.testriq.com/testriq-logo.png",
        "telephone": "+91-915-2929-343",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        },
        "priceRange": "$$"
      },
      "url": "https://www.testriq.com/usability-testing-services",
      "description": "Expert usability testing services and UX audits to elevate user experience and drive conversions. AI-driven insights and real-user testing for web and mobile apps.",
      "areaServed": "WorldWide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Usability Testing Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Usability Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Usability & Conversion Optimization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UX Audit & Heuristic Evaluation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI-Driven UX Insights"
            }
          }
        ]
      }
    }
    // F-44.1: FAQPage intentionally NOT in @graph — page-side
    // createFaqPageSchema(faqsForSchema) on /usability-testing-services is
    // the single source of truth, mirroring the UsabilityTestingFAQs UI
    // content (4 Q&As vs 3 embedded). Removed embedded duplicate.
  ]
};

export const continuousTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Continuous Testing Services & CI/CD Integration",
  "description": "World-class Continuous Testing Services designed to integrate seamlessly into your DevOps ecosystem. We help organizations shift quality left, ensuring every code commit leads to a more reliable, high-performing product.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Continuous Testing & CI/CD Quality Engineering",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Continuous Testing Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CI/CD Pipeline Integration",
          "description": "Seamlessly embedding automated tests into Jenkins, GitLab, Azure DevOps, or AWS pipelines for zero-touch testing execution."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shift-Left and Shift-Right Testing",
          "description": "Moving testing earlier in development and monitoring performance in production for early defect detection."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automated Regression Testing",
          "description": "Ensuring new code changes do not break existing functionality across web and mobile apps."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Continuous Performance Testing",
          "description": "Validating system scalability and performance with every build for proactive risk management."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Continuous Security Testing",
          "description": "Automated vulnerability scanning and security posture validation within the CI/CD pipeline."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Test Data Management",
          "description": "Providing high-quality, compliant data for realistic testing environments ensuring environmental parity."
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0"
    }
  }
};

export const tdmServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Test Data Management Services",
  "description": "Optimize your QA with Testriq's Test Data Management services. We offer secure data masking, synthetic data generation, and automated TDM solutions to ensure high-quality testing with total compliance.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Quality Assurance",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "TDM Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Masking and De-identification",
          "description": "Protecting sensitive information with advanced data masking and de-identification services."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Synthetic Test Data Generation",
          "description": "Creating high-fidelity datasets from scratch using AI-driven methods."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Subsetting and Provisioning",
          "description": "Extracting smaller, referentially intact slices of production data for efficient testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compliance and Privacy Audits",
          "description": "Ensuring QA environments are audit-ready and compliant with global privacy regulations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "TDM for Performance and Load Testing",
          "description": "Provisioning massive datasets for resilience and scalability validation."
        }
      }
    ]
  }
};

export const uatServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "User Acceptance Testing Services",
      "alternateName": "UAT Testing",
      "serviceType": "QA and Business Validation",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Testriq QA Lab",
        "image": "https://www.testriq.com/testriq-logo.png",
        "telephone": "+91-915-2929-343",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        },
        "priceRange": "$$"
      },
      "url": "https://www.testriq.com/services/user-acceptance-testing",
      "description": "Testriq's user acceptance testing services provide professional UAT testing, beta testing management, and end-user validation for enterprise software, ERP, CRM, and digital transformation projects.",
      "areaServed": "WorldWide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "UAT Testing Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Operational Acceptance Testing (OAT)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Beta Testing Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "End-to-End Workflow Validation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Compliance & Regulatory UAT"
            }
          }
        ]
      }
    }
    // F-44.1: FAQPage intentionally NOT in @graph — page-side
    // createFaqPageSchema(faqsForSchema) on /user-acceptance-testing is the
    // single source of truth, mirroring the UATFAQs UI content (4 Q&As vs
    // 2 embedded). Removed embedded duplicate.
  ]
};

export const accessibilityServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Accessibility Testing Services",
  "description": "Comprehensive WCAG 2.2 and ADA compliance accessibility testing services to ensure your digital products are inclusive and accessible to all users.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Accessibility & WCAG Compliance Testing",
  "areaServed": "Worldwide"
};

export const adHocTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ad Hoc Testing Services",
  "description": "Expert ad hoc and exploratory testing services for rapid defect identification without formal test plans. Ideal for agile teams needing flexible QA coverage.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Ad Hoc & Exploratory Testing",
  "areaServed": "Worldwide"
};

export const architectureServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Application Architecture Inspection Services",
  "description": "In-depth application architecture inspection and software architecture audit services to identify design flaws, scalability risks, and technical debt early.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Application Architecture Audit",
  "areaServed": "Worldwide"
};

export const azureTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise Azure Testing Services",
  "description": "Comprehensive Azure cloud testing services including cloud-native QA, DevOps integration, Azure DevTest Labs management, and performance validation for enterprise workloads.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Cloud & Azure Testing",
  "areaServed": "Worldwide"
};

export const blockchainServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Blockchain Application Testing Services",
  "description": "Specialized blockchain testing services covering smart contract auditing, DeFi platform testing, NFT marketplace QA, and decentralized application security validation.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Blockchain & Smart Contract Testing",
  "areaServed": "Worldwide"
};

export const compatibilityTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Compatibility Testing Services",
  "description": "End-to-end compatibility testing across browsers, devices, operating systems, and network environments to ensure your application works flawlessly everywhere.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Cross-Browser & Cross-Device Compatibility Testing",
  "areaServed": "Worldwide"
};

export const cyberSecurityServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cyber Security Testing Services",
  "description": "Comprehensive cyber security testing including penetration testing, vulnerability assessments, VAPT, and security audits to protect your digital assets from threats.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Cyber Security & Penetration Testing",
  "areaServed": "Worldwide"
};

export const embeddedTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Embedded Systems Testing Services",
  "description": "Specialized embedded software and hardware testing services for IoT devices, firmware validation, real-time systems, and safety-critical embedded applications.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Embedded & Firmware Testing",
  "areaServed": "Worldwide"
};

export const managedTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Managed Testing Services",
  "description": "End-to-end managed QA and testing services with dedicated testing teams, test management, and full ownership of your software quality lifecycle.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Managed QA & Testing Outsourcing",
  "areaServed": "Worldwide"
};

export const microservicesServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Microservices Testing Services",
  "description": "Comprehensive microservices testing including contract testing, API testing, service mesh validation, and end-to-end integration testing for distributed architectures.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Microservices & API Testing",
  "areaServed": "Worldwide"
};

export const migrationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Migration Testing Services",
  "description": "Specialized migration testing services for database migrations, cloud migrations, platform upgrades, and data migration projects to ensure zero data loss and business continuity.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Data & System Migration Testing",
  "areaServed": "Worldwide"
};

export const saasTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SaaS Application Testing Services",
  "description": "Comprehensive SaaS testing services including multi-tenant architecture validation, subscription management testing, API integration testing, and scalability assessment.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "SaaS & Cloud Application Testing",
  "areaServed": "Worldwide"
};

export const shiftLeftServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Shift Left Testing Services",
  "description": "Shift-left testing services that integrate quality assurance early in the development lifecycle, reducing defect costs and accelerating software delivery.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Shift-Left QA & Early Testing",
  "areaServed": "Worldwide"
};

export const timezoneTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Timezone Testing Services",
  "description": "Real-time QA and follow-the-sun testing services that provide round-the-clock quality assurance coverage across global time zones for uninterrupted software delivery.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Timezone & Follow-the-Sun Testing",
  "areaServed": "Worldwide"
};

export const iso42001ComplianceTestingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.testriq.com/iso-iec-42001-compliance-testing-services/#service",
      "name": "ISO/IEC 42001:2023 Compliance Testing Services",
      "alternateName": "AI Management System (AIMS) Compliance Testing",
      "serviceType": "AI Governance & Compliance Testing",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Testriq QA Lab",
        "url": "https://www.testriq.com",
        "image": "https://www.testriq.com/testriq-logo.png",
        "telephone": "+91-915-2929-343",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        },
        "priceRange": "$$"
      },
      "url": "https://www.testriq.com/iso-iec-42001-compliance-testing-services",
      "description": "Expert ISO/IEC 42001:2023 compliance testing for Artificial Intelligence Management Systems (AIMS). We help organizations achieve certification readiness with comprehensive gap analysis, AI risk assessment, bias testing, explainability validation, data governance audits, and regulatory alignment with the EU AI Act and NIST AI RMF.",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ISO 42001 Compliance Testing Suite",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIMS Gap Assessment",
              "description": "Clause-by-clause gap analysis of current AI management practices against ISO/IEC 42001:2023 requirements with prioritized remediation roadmap."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Risk & Impact Assessment",
              "description": "Systematic identification and evaluation of AI risks including bias testing, fairness analysis, and societal impact assessment aligned with Annex A controls."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Transparency & Explainability Testing",
              "description": "Validation of AI model interpretability, decision audit trails, and explainability metrics using SHAP, LIME, and other frameworks."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Data Governance Testing",
              "description": "Comprehensive testing of data pipelines, training data quality, data provenance tracking, and GDPR privacy compliance for AI systems."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Performance & Monitoring Validation",
              "description": "Testing operational monitoring frameworks for model drift detection, performance threshold validation, and incident response readiness."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Certification Readiness Assessment",
              "description": "Pre-audit simulation of the certification body evaluation process with evidence package review and certification readiness statement."
            }
          }
        ]
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/OnlineOnly",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "0"
        }
      }
    }
    // F-44.1: FAQPage intentionally NOT in @graph — page-side
    // createFaqPageSchema(faqsForSchema) on /iso-iec-42001-compliance-testing-services
    // is the single source of truth, mirroring the ISO42001FAQs UI content
    // (8 Q&As vs 6 embedded). Removed embedded duplicate.
  ]
};

// Service Schema for Latency Testing Services
export const latencyTestingServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Latency Testing Services",
      "alternateName": "Application Latency Testing",
      "serviceType": "Latency Testing and Performance Optimization",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Testriq QA Lab",
        "image": "https://www.testriq.com/testriq-logo.png",
        "telephone": "+91-915-2929-343",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
          "addressLocality": "Mira Bhayandar",
          "addressRegion": "Maharashtra",
          "postalCode": "401107",
          "addressCountry": "IN"
        },
        "priceRange": "$$"
      },
      "url": "https://www.testriq.com/performance-testing-services/latency-testing",
      "description": "Enterprise latency testing services measuring P50, P95, and P99 response times across network, application, database, and API layers. ISO 29119-aligned methodology for global enterprises.",
      "areaServed": "WorldWide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Latency Testing Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "API Latency Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Network Latency Analysis"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Database Query Latency Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CDN & Edge Latency Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Microservices Latency Testing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Real-Time Application Latency Testing"
            }
          }
        ]
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD",
        "price": "0"
      }
    }
    // FAQPage intentionally NOT in @graph — page-side
    // createFaqPageSchema(faqsForSchema) on /performance-testing-services/latency-testing
    // is the single source of truth, mirroring the LatencyTestingFAQsSection UI content.
  ]
};
