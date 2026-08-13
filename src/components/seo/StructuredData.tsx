/**
 * StructuredData component + Schema.org constants.
 *
 * This file is intentionally large (~5800 lines). It contains:
 *   - Lines 1-119: The <StructuredData> component itself.
 *   - Lines 120+: 74 named exports of pre-built Schema.org schema objects
 *     (organizationSchema, agileTestingSchema, etc.) used across 141
 *     call sites in 63 files.
 *
 * Why colocated: keeping schemas next to the rendering component made
 * imports trivial during early development. A future refactor may split
 * schemas into per-domain files (e.g., schemas/services/, schemas/blog/)
 * — see docs/seo-audit/03-metadata-bug-inventory.md for the full
 * structured-data architecture roadmap.
 *
 * The component portion of this file was rewritten in PR #X to fix
 * Pattern F (broken next/script-based JSON-LD rendering). The schema
 * constants below were not modified.
 */

/**
 * A single Schema.org JSON-LD object.
 */
import { buildCanonicalUrl, SITE_URL } from "../../lib/seo/metadata";
import { getBreadcrumbLabel } from "../../lib/seo/breadcrumb-labels";

type JsonLd = Record<string, unknown>;

/**
 * Component input — accepts a single schema OR an array.
 * Backward-compatible: existing `<StructuredData data={schemaObj} />`
 * call sites work unchanged. New call sites can pass arrays:
 * `<StructuredData data={[s1, s2, s3]} />`.
 */
type JsonLdInput = JsonLd | JsonLd[];

interface StructuredDataProps {
  data: JsonLdInput | null | undefined;
}

/**
 * Renders Schema.org JSON-LD as inline `<script type="application/ld+json">`
 * tags directly in the SSR HTML payload — so Google's crawler and AI
 * engines can parse the schema on the first request, before any
 * JavaScript runs.
 *
 * Previously this component wrapped its output in `next/script`'s
 * `<Script>`, which is intended for executable scripts. With the default
 * `afterInteractive` strategy, inline data scripts were not reliably
 * emitted into the initial SSR HTML — verified live in Phase 2 §7
 * (`/agile-testing-services` showed 0 ld+json blocks despite 3 calls).
 * See `docs/seo-audit/03-metadata-bug-inventory.md` Pattern F for the
 * full investigation across 63 consumer files / 141 call sites.
 *
 * The current implementation matches the sibling `BlogStructuredData`
 * component and Next.js's official JSON-LD pattern documented at
 * https://nextjs.org/docs/app/guides/json-ld.
 *
 * Edge case behavior:
 *   - `data={schemaObj}` (single object — today's pattern) → 1 <script>
 *   - `data={[s1, s2, s3]}` (array — new pattern) → 3 <script> elements
 *   - `data={null}` or `data={undefined}` → returns null, no <script>
 *   - `data={[]}` → returns null, no <script>
 *   - Array containing null/undefined entries → entries filtered, no crash
 *   - Array containing non-object entries → filtered, no crash
 *   - Schema string contains `</script>` → escaped to `</script>` (XSS-safe)
 *   - Schema with circular reference or non-stringifiable values
 *     (BigInt, etc.) → entry skipped, component does not crash. In
 *     development a console.error names the failed schema's `@type`.
 */
export default function StructuredData({ data }: StructuredDataProps) {
  if (data == null) return null;

  const schemas: JsonLd[] = Array.isArray(data) ? data : [data];

  // Filter out null/undefined/non-object entries so dynamically-built
  // schema arrays (where some fields might be optional) don't crash.
  const valid = schemas.filter(
    (s): s is JsonLd => s != null && typeof s === 'object',
  );
  if (valid.length === 0) return null;

  return (
    <>
      {valid.map((schema, i) => {
        let json: string;
        try {
          // XSS-safe: replace `<` with its unicode escape so embedded
          // strings can never close the script tag prematurely (e.g.
          // a schema description containing `</script>`).
          // Per Next.js JSON-LD docs.
          json = JSON.stringify(schema).replace(/</g, '\\u003c');
        } catch (err) {
          // JSON.stringify can throw on circular references, BigInt, etc.
          // Don't crash the page — skip this entry. In dev, surface the
          // problem so the broken schema can be fixed at the source.
          if (process.env.NODE_ENV !== 'production') {
            const type =
              (schema as { '@type'?: unknown })['@type'] ?? 'unknown';
            // eslint-disable-next-line no-console
            console.error(
              `[StructuredData] Failed to stringify schema (@type=${String(type)}). ` +
                `Common causes: circular reference, BigInt, undefined values inside arrays. ` +
                `Skipping this entry.`,
              err,
            );
          }
          return null;
        }

        return (
          <script
            key={`ld-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: json }}
          />
        );
      })}
    </>
  );
}

// Organization Schema for Testriq
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Testriq QA Lab",
  "alternateName": "Testriq",
  "url": "https://www.testriq.com",
  "logo": "https://www.testriq.com/testriq-logo.png",
  "description": "Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation testing solutions.",
  "foundingDate": "2010",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-915-2929-343",
    "contactType": "customer service",
    "email": "contact@testriq.com",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  // F-58 Phase 1 — Entity authority sameAs. Each URL is a confirmed
  // Testriq presence on a platform that Google's Knowledge Graph + AI
  // search engines (Gemini / ChatGPT / Perplexity / Claude) use for
  // B2B-software entity recognition. Adding these increases the entity
  // graph density Google associates with the canonical Organization @id
  // (https://www.testriq.com/#organization), feeding both ranking
  // signals and AI answer-engine attribution.
  //
  // Verified 2026-05-16 via Chrome MCP — each URL returns HTTP 200 with
  // active Testriq-branded content. Listings to add later (Phase 2 —
  // user-blocked on account creation): Crunchbase company page,
  // Wikidata entry, DesignRush listing.
  "sameAs": [
    // Social — pre-existing
    "https://www.linkedin.com/company/testriq-qa-lab/",
    "https://x.com/testriq",
    "https://github.com/TestriqQA-Lab",
    // Social — added Phase 1
    "https://www.facebook.com/testriq.lab",
    "https://www.instagram.com/testriq",
    "https://www.youtube.com/@TestriqQALab",
    // B2B review directories — added Phase 1
    "https://clutch.co/profile/testriq-qa-lab",
    "https://www.goodfirms.co/company/testriq-qa-lab",
    "https://www.g2.com/products/testriq-qa-lab/reviews"
  ],
  // F-58 Phase 1 — Founder Person reference. The founder's Crunchbase
  // entry is a strong individual-authority signal that increases
  // Testriq's E-E-A-T attribution via the founder relationship.
  "founder": {
    "@type": "Person",
    "name": "Sandeep Maske",
    "jobTitle": "Founder & CEO",
    "sameAs": [
      "https://www.crunchbase.com/person/sandeep-maske"
    ]
  },
  "award": [
    "ISTQB Certified Testing Professionals",
    "ISO 9001:2015 Certified — Quality Management System",
    "ISO/IEC 27001:2022 Certified — Information Security Management"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": "ISTQB Certified Tester",
      "recognizedBy": {
        "@type": "Organization",
        "name": "International Software Testing Qualifications Board",
        "url": "https://www.istqb.org/"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": "ISO 9001:2015 — Quality Management System",
      "recognizedBy": {
        "@type": "Organization",
        "name": "International Organization for Standardization",
        "url": "https://www.iso.org/iso-9001-quality-management.html"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": "ISO/IEC 27001:2022 — Information Security Management System",
      "recognizedBy": {
        "@type": "Organization",
        "name": "International Organization for Standardization",
        "url": "https://www.iso.org/standard/27001"
      }
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
          "description": "Comprehensive web application testing services including functional, performance, and security testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Application Testing",
          "description": "Mobile app testing across iOS and Android platforms with device compatibility testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Testing",
          "description": "RESTful API testing, GraphQL testing, and API automation services."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Test Automation",
          "description": "Automated testing solutions using industry-leading frameworks and tools."
        }
      }
    ]
  }
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Testriq - Professional Software Testing Services",
  "url": "https://www.testriq.com",
  "description": "Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation.",
  "publisher": {
    "@type": "Organization",
    "name": "Testriq QA Lab"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.testriq.com/blog/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Product/Service Schema with Aggregate Rating for Homepage
export const productServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Testriq QA Lab - Comprehensive Software Testing Services",
  "description": "Leading software testing company providing comprehensive QA services including web app testing, mobile testing, API testing, and automation testing solutions.",
  "url": "https://www.testriq.com/",
  "image": "https://www.testriq.com/testriq-logo.png",
  "brand": {
    "@type": "Brand",
    "name": "Testriq QA Lab"
  },
  "sku": "TQ-QA-001",
  "mpn": "TQ-QA-MAIN",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/OnlineOnly",
  }
};

// Home Page FAQ Schema
export const homeFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the benefits of Managed QA Services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Managed QA Services allow organizations to outsource their entire quality function to experts. Our approach cuts overhead and gives you access to advanced test automation. You get comprehensive testing without the costs of internal hiring."
      }
    },
    {
      "@type": "Question",
      "name": "How does Testriq ensure security in Software Testing Services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We integrate Security at the heart of the SDLC through DevSecOps Integration. This includes risk-based testing, Pentesting, and regular Security Audits to ensure compliance with global standards like SOC2 and GDPR."
      }
    },
    {
      "@type": "Question",
      "name": "Why is ISO/IEC/IEEE 29119 important for QA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ISO/IEC/IEEE 29119 is the international standard for software testing. Our approach uses a standard language and process for risk-based testing. This ensures all reports and bug tracking meet the highest global standards."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer Mobile App QA Testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide mobile QA for both iOS and Android. Our testing includes cross-browser checks and UX validation to ensure your global rollout is seamless across all devices."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle Generative AI Testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in Generative AI testing to protect your brand. We ensure your AI is reliable and secure. Our team audits agents for inaccurate data, prevents prompt injections, and guarantees model fairness."
      }
    }
  ]
};

// Service Schema for Web Application Testing




// Service Schema for AI Application Testing




// Service Schema for LaunchFast QA


// Service Schema for Desktop Application service


// Service Schema for Mobile Application service


// Service Schema for IOT Testing Service


// Service Schema for Robotics  Testing Service

// Service Schema for ETL Testing Service

// Service Schema for manual Testing Service

// Service Schema for automation Testing Service



// Service Schema for api testing

// Service Schema for regression Testing ServiceS

// Service Schema for Agile Testing Services

// FAQ Schema for Agile Testing
export const agileFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the core principles of Agile testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The core principles of Agile testing include continuous feedback, collaboration between testers and developers, testing early and often (shift-left), and focusing on delivering value to the customer through iterative improvements."
      }
    },
    {
      "@type": "Question",
      "name": "How does Agile testing differ from traditional waterfall testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike waterfall testing, which occurs at the end of the development cycle, Agile testing is integrated into every stage of the process. It is iterative, collaborative, and focuses on continuous quality rather than a single final sign-off."
      }
    },
    {
      "@type": "Question",
      "name": "What is the role of a QA tester in an Agile team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In an Agile team, a QA tester is a collaborative partner who helps define requirements, provides continuous feedback, develops automated tests, and ensures that the final product meets the user's needs and expectations."
      }
    },
    {
      "@type": "Question",
      "name": "How to integrate automated testing into Agile sprints?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Integrating automation into Agile sprints requires a focus on building maintainable scripts, prioritizing high-value test cases, and ensuring that automated tests are executed as part of the continuous integration (CI) pipeline."
      }
    }
  ]
};

// Service Schema for performance Testing Service

// Structured data for SEO
export const toolsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.testriq.com/#organization",
      "name": "Testriq QA LAB LLP",
      "url": "https://www.testriq.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testriq.com//testriq-logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-915-2929-343",
        "contactType": "sales",
        "areaServed": "Global",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar",
        "addressLocality": "Mira Bhayandar",
        "addressRegion": "Maharashtra",
        "postalCode": "401107",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testriq-qa-lab/",
        "https://www.facebook.com/testriq.lab/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.testriq.com/technology-stack/#webpage",
      "url": "https://www.testriq.com/technology-stack",
      "name": "Software Testing Tools & Frameworks Technology Stack",
      "isPartOf": {
        "@id": "https://www.testriq.com/#website"
      },
      "description": "Comprehensive suite of 50+ industry-leading testing tools and frameworks including Selenium, Cypress, Playwright, and JMeter for Enterprise QA automation.",
      "breadcrumb": {
        "@id": "https://www.testriq.com/technology-stack/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.testriq.com/technology-stack/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testriq.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tools & Technology Stack",
          "item": "https://www.testriq.com/technology-stack"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "QA Automation & Testing Technology Services",
      "provider": {
        "@id": "https://www.testriq.com/#organization"
      },
      "serviceType": "Software Testing Services",
      "areaServed": "Global",
      "description": "Implementation of advanced QA automation frameworks using Selenium, Cypress, Appium, and JMeter for web, mobile, and API testing.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Testing Tools & Framework Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Application Testing",
              "description": "Automation using Selenium WebDriver, Cypress, Playwright, and TestCafe."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile Testing Frameworks",
              "description": "Mobile automation using Appium, Espresso, XCUITest, and Detox."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Performance Testing",
              "description": "Load and stress testing using JMeter, LoadRunner, K6, and Gatling."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Security Testing",
              "description": "Vulnerability assessment using OWASP ZAP, Burp Suite, and Veracode."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Healthcare Compliance Testing",
              "description": "HIPAA and FDA compliance testing using specialized healthcare validation tools."
            }
          }
        ]
      }
    }
  ]
};

// Service Schema for security Testing Service

// Service Schema for qa Documentation Service 


// Service Schema for data Analysis Service


// Service Schema for complete Testing Guide
export const completeTestingGuideSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Complete Software Testing Guide",
  "description": "Master software testing with our comprehensive guide covering manual, automation, performance, and security testing. Learn tools, types, methodologies, and best practices.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Software Testing Education",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Testing Guide Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Manual Testing",
          "description": "Learn the fundamentals of manual testing including test case design, bug tracking, and test execution processes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automation Testing",
          "description": "Explore automation frameworks and tools like Selenium, Cypress, and Playwright through hands-on examples."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Understand load testing, stress testing, and performance tuning using tools like JMeter and LoadRunner."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing",
          "description": "Learn security testing techniques to identify vulnerabilities and ensure application security."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Testing",
          "description": "Get practical guidance on testing APIs using tools like Postman, REST Assured, and SoapUI."
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
      "price": "Free"
    }
  }
};



// Service Schema for E-Commerce Testing
export const ecommerceTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-Commerce Testing Services",
  "description": "Comprehensive QA testing solutions for online stores including cart, payment, performance, and security testing. Testriq ensures optimized user experiences, reduced cart abandonment, and secure transactions for e-commerce businesses.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab LLP",
    "url": "https://www.testriq.com"
  },
  "serviceType": "E-Commerce QA Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "E-Commerce QA Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shopping Cart Testing",
          "description": "Validating shopping cart functionality, checkout flows, and payment integration accuracy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Payment Gateway Testing",
          "description": "Secure testing for multiple payment gateways ensuring PCI DSS compliance and transaction success."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Commerce Testing",
          "description": "Mobile-first testing approach covering responsiveness, performance, and mobile payment workflows."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance & Load Testing",
          "description": "Stress, spike, and load testing during peak sales periods like Black Friday to ensure uptime and speed."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security & Compliance Testing",
          "description": "Testing for vulnerabilities, SSL, data privacy (GDPR), and security compliance (SOC2, ISO 27001)."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cross-Platform Compatibility Testing",
          "description": "Ensuring seamless user experience across devices, browsers, and operating systems."
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

// Service Schema for elearning Testing Service
export const elearningTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-Learning Testing Services",
  "description":
    "Comprehensive testing for LMS platforms, online courses, and educational applications including accessibility compliance, SCORM/xAPI validation, video QA, mobile optimization, security, and performance testing.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "E-Learning Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LMS Platform Testing",
          "description":
            "Functional and usability testing for Moodle, Canvas, Blackboard, Google Classroom, and custom LMS platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accessibility Compliance Testing",
          "description":
            "Testing against WCAG 2.1 AA, ADA, Section 508, and EN 301 549 standards for inclusive education platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SCORM & xAPI Compliance Testing",
          "description":
            "SCORM 1.2/2004 and Tin Can (xAPI) compatibility testing across LMS environments and devices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Multimedia & Video Content Testing",
          "description":
            "QA for video playback, audio clarity, captioning, device compatibility, and streaming optimization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Learning Optimization",
          "description":
            "Performance and usability testing across smartphones and tablets to reduce dropout and enhance engagement."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance & Load Testing",
          "description":
            "Testing e-learning platforms for scalability, uptime, and stress-handling during high-traffic academic periods."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security & Privacy Testing",
          "description":
            "Ensuring GDPR, FERPA, and COPPA compliance through secure login, encryption, and data protection validation."
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


// Service Schema for healthcare Testing Service
export const healthcareTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Healthcare Testing Services",
  "description": "Testriq provides professional QA testing for healthcare software, including HIPAA compliance testing, FDA validation, EHR integration testing, medical device validation, and patient data security audits.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Healthcare Software QA Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Healthcare Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HIPAA Compliance Testing",
          "description": "Comprehensive validation of patient data protection, PHI access controls, and HIPAA Security & Privacy Rule compliance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "EHR System Testing",
          "description": "Functional, integration, and workflow testing of Electronic Health Record and EMR systems including HL7 and FHIR standards."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "FDA Validation Support",
          "description": "Test documentation and compliance validation for FDA regulations including 21 CFR Part 820 and IEC 62304."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medical Device Testing",
          "description": "QA for IoT-enabled medical devices including connectivity, real-time data validation, and device integration testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Telehealth App Testing",
          "description": "Testing of video quality, mobile compatibility, encryption, and security for telemedicine applications and mHealth platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Healthcare Cybersecurity",
          "description": "Penetration testing, threat modeling, and vulnerability assessment tailored for healthcare applications and cloud systems."
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

// F-82: Service Schema for SaaS platform Testing Service (Cycle 2 Sprint 6).
// Closes Phase 13 industry-vertical gap — SaaS is a high-volume B2B buyer
// category that the existing (solutions)/ tree (BFSI / healthcare / edtech /
// ecom / gaming / iot / telecom) doesn't address. A separate /saas-testing-
// services *service* page exists but treats SaaS as a service offering, not
// an industry vertical with its own buyer journey.
export const saasPlatformTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SaaS Platform Testing Services",
  "description": "Testriq provides end-to-end QA for B2B and B2C SaaS platforms — multi-tenant testing, subscription billing validation, SOC 2 / GDPR compliance, API contract testing, integration regression, scalability load testing, and zero-downtime release validation for continuous-delivery SaaS teams.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "SaaS Platform QA Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SaaS Platform Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Multi-Tenant Isolation Testing",
          "description": "Validates data isolation, role-based access, and per-tenant configuration boundaries to prevent cross-tenant leakage in shared-database SaaS architectures."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Subscription & Billing QA",
          "description": "End-to-end testing of trial/upgrade/downgrade/cancel flows, proration edge cases, Stripe / Chargebee / Recurly webhook reliability, and dunning sequences."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SOC 2 & GDPR Compliance Testing",
          "description": "Pre-audit validation of access controls, audit-log completeness, encryption-at-rest/in-transit, data-residency, and DSAR (Data Subject Access Request) workflows."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Contract & Integration Testing",
          "description": "Schema-driven Pact / OpenAPI contract tests across public APIs, webhooks, and partner integrations to prevent breaking changes during continuous delivery."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Scalability & Load Testing",
          "description": "Burst-load and sustained-load simulation to validate auto-scaling policies, database connection pools, and queue throughput at enterprise tenant volumes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Zero-Downtime Release Validation",
          "description": "Blue-green / canary deploy verification, feature-flag matrix testing, and synthetic-monitor smoke suites that gate production rollouts."
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

// F-82: Service Schema for Manufacturing / Industry 4.0 Testing Service.
// Closes Phase 13 industry-vertical gap — Manufacturing + Industrial IoT was
// missing from (solutions)/ despite a substantial buyer-intent search surface
// around IEC 61508 / IEC 62443 / OPC UA / MES / SCADA / digital-twin QA.
export const manufacturingIndustryTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Manufacturing & Industry 4.0 Testing Services",
  "description": "Testriq delivers QA for manufacturing software and Industry 4.0 systems — MES / SCADA validation, IEC 61508 / IEC 62443 functional-safety and cyber-security testing, OPC UA / MQTT protocol QA, digital-twin simulation testing, predictive-maintenance analytics validation, and ERP-shopfloor integration testing.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Manufacturing & Industry 4.0 QA Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Manufacturing Industry Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MES / SCADA System Testing",
          "description": "Functional, integration, and failover testing of Manufacturing Execution Systems and SCADA stacks, including PLC ↔ HMI ↔ historian data-path validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IEC 62443 OT Cyber-security Testing",
          "description": "Penetration testing and segmentation audits for operational-technology (OT) networks per IEC 62443 security levels SL1–SL4, including DMZ + jump-host validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IEC 61508 Functional-Safety Validation",
          "description": "SIL-rated software validation per IEC 61508 / ISO 26262 for safety-critical industrial control applications, with fault-injection and HAZOP-driven test design."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial IoT Protocol Testing",
          "description": "Interoperability and conformance testing for OPC UA, MQTT, Modbus, and PROFINET on real shop-floor and lab-bench device matrices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital-Twin & Simulation QA",
          "description": "Validation of digital-twin models against physical asset telemetry, including parity testing, drift detection, and predictive-maintenance ML model accuracy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ERP ↔ Shopfloor Integration Testing",
          "description": "End-to-end QA of SAP / Oracle / Dynamics ERP integration with MES, including BOM sync, work-order propagation, and inventory-movement reconciliation."
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

// Service Schema for gaming Testing Service
export const gamingTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gaming App Testing Solutions",
  "description": "Testriq provides game QA services including mobile game testing, console compatibility, VR/AR validation, multiplayer synchronization, performance testing, anti-cheat validation, and cloud gaming QA.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Game Testing & QA",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Gaming App Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Game Testing",
          "description": "Functional and performance testing for iOS and Android games, including device compatibility and battery optimization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Console Game Testing",
          "description": "Testing across PlayStation, Xbox, and Nintendo Switch platforms for certification, controls, and hardware compatibility."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Multiplayer & Network Testing",
          "description": "Multiplayer synchronization, matchmaking, network load testing, and social features validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VR/AR Game Testing",
          "description": "Motion tracking, comfort testing, hand tracking, and immersive experience validation for VR and AR platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Optimization",
          "description": "Frame rate testing, load time analysis, memory usage optimization, and platform stress testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Game Security Testing",
          "description": "Anti-cheat system validation, penetration testing, and protection against hacking or data leaks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Gaming Testing",
          "description": "Streaming quality validation, latency optimization, cross-device sync, and bandwidth testing for cloud-based games."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Launch Readiness Testing",
          "description": "Final validation before release including day-one patch verification, stress testing, and launch-day monitoring."
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

// Service Schema for iot Testing Service
export const iotTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IoT Testing Solutions",
  "description": "Comprehensive IoT testing services including device connectivity, edge computing, cloud integration, protocol validation, performance, and IoT security testing.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "IoT Quality Assurance",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IoT Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Device Connectivity Testing",
          "description": "Testing smart devices for reliable network connectivity across various protocols."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IoT Security Testing",
          "description": "Security validation through penetration testing, encryption, access control, and compliance checks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Edge Computing Testing",
          "description": "Validation of edge processing, latency optimization, and edge-cloud synchronization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Integration Testing",
          "description": "Testing device integration with cloud platforms like AWS IoT, Azure IoT, and Google Cloud."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Protocol Interoperability",
          "description": "Testing cross-platform compatibility and communication across IoT protocols like MQTT, CoAP, Zigbee, LoRaWAN, etc."
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

// Service Schema for banking Finance Testing Service
export const bankingFinanceTestingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Banking & Finance Testing Solutions",
  "description": "Comprehensive BFSI testing services by Testriq including security testing, compliance validation (PCI DSS, SOX, GDPR), core banking QA, mobile banking validation, and performance testing.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab LLP",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Banking & Finance Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "BFSI Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Testing",
          "description": "Advanced penetration testing, vulnerability assessments, and threat modeling for financial systems."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compliance Testing",
          "description": "Validation for PCI DSS, SOX, GDPR, Basel III and other financial regulations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Core Banking Validation",
          "description": "QA for core banking platforms including account management, transactions, and data integrity."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Banking QA",
          "description": "Cross-platform testing for mobile apps with biometric, security, and offline functionality validation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Testing",
          "description": "Stress, load, and scalability testing for high-volume banking transactions and peak loads."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automation Testing",
          "description": "CI/CD integrated regression testing and automated workflows for BFSI platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Security Testing",
          "description": "Testing for open banking APIs, OAuth validation, and secure financial integrations."
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

// Service Schema for telecommunication Testing
export const telecommunicationTestingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Telecommunication Testing Solutions",
  "description": "Testriq provides comprehensive telecommunication testing services including 5G, IoT, VoIP, network security, NFV/SDN testing, and performance optimization for telecom operators worldwide.",
  "provider": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com"
  },
  "serviceType": "Telecom Software Testing",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Telecommunication Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "5G Network Testing",
          "description": "Protocol validation, network slicing, edge computing, and latency optimization for 5G networks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IoT Connectivity Testing",
          "description": "Device compatibility testing, protocol validation, and connectivity performance monitoring for IoT networks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VoIP/VoLTE Testing",
          "description": "Voice quality analysis, jitter optimization, codec validation, and call setup testing for voice networks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "NFV/SDN Testing",
          "description": "Validation of network function virtualization and software-defined networking in cloud-native telecom environments."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Network Security Testing",
          "description": "Penetration testing, vulnerability assessment, protocol security validation, and threat modeling for telecom networks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Optimization",
          "description": "Load and stress testing, capacity planning, throughput analysis, and real-time network performance improvement."
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

// Service Schema for about page
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // ENTITY 1: The Organization (Who You Are)
    {
      "@type": "Organization",
      "@id": "https://www.testriq.com/#organization",
      "name": "Testriq QA Lab LLP",
      "url": "https://www.testriq.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testriq.com/testriq-logo.png",
        "width": 112,
        "height": 112
      },
      "foundingDate": "2010",
      "description": "Testriq QA Lab LLP is a globally trusted software testing company with over 15 years of experience delivering expert-led QA solutions across the SDLC.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar",
        "addressLocality": "Mira Road East, Mira Bhayandar",
        "addressRegion": "Maharashtra",
        "postalCode": "401107",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-915-2929-343",
        "contactType": "sales",
        "email": "contact@testriq.com",
        "areaServed": "World"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testriq-qa-lab/",
        "https://www.facebook.com/testriq.lab/",
        "https://x.com/testriq"
        // Add other social links found in your footer
      ],
      "awards": [
        "ISO 9001 Certified",
        "ISTQB Certified Team",
        "Top 10 QA Companies",
        "99.8% Project Success Rate"
      ]
    },
    // ENTITY 2: The FAQ Section (Matches your page content 1:1)
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes Testriq a trusted QA partner with over 15 years of experience?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Testriq combines over 15 years of experience with ISO 9001 processes and a team of ISTQB-certified professionals. We have executed over 500k test cases with a 99.8% success rate across 15+ countries."
          }
        },
        {
          "@type": "Question",
          "name": "Which industries does Testriq serve with its software testing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve a wide range of industries including Fintech, Healthcare, SaaS, E-commerce, Drone Technology, and IoT. Our domain experts ensure compliance and performance for specific industry standards."
          }
        },
        {
          "@type": "Question",
          "name": "Why do startups and enterprises choose Testriq for software quality assurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Startups choose us for our agility and 'LaunchFast QA' services, while enterprises rely on our scalable teams, robust security testing, and ability to integrate seamlessly with existing DevOps pipelines."
          }
        },
        {
          "@type": "Question",
          "name": "How does Testriq ensure quality and transparency in testing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain 100% transparency through real-time reporting, dedicated project managers, and open communication channels. Our 'Quality First' value ensures every bug is documented with precision."
          }
        },
        {
          "@type": "Question",
          "name": "What types of testing does Testriq perform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We perform comprehensive testing including Manual, Automation (Selenium/Cypress), API, Mobile App, Performance, Security, and IoT Device Testing."
          }
        }
      ]
    }
    // F-44.2: BreadcrumbList intentionally NOT in @graph — page-side
    // createCanonicalBreadcrumb (in src/app/about-us/page.tsx) is the single
    // source of truth, matching the F-44 pattern. Removed an "About Us"
    // BreadcrumbList block here that was double-rendering on /about-us
    // alongside the page-side breadcrumb (which had its own lowercase
    // "about Page" typo, fixed in the same PR).
  ]
};

// Service Schema for our Team Page
export const ourTeamPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Meet Our Team - Testriq QA Lab",
  "description": "Meet the certified QA professionals behind Testriq's success. Our team of ISTQB-certified experts brings decades of software testing experience across multiple domains.",
  "url": "https://www.testriq.com/our-team",
  "mainEntity": {
    "@type": "Organization",
    "name": "Testriq QA Lab",
    "url": "https://www.testriq.com",
    "logo": "https://www.testriq.com/images/Testriq_Logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9152929343",
      "contactType": "customer support",
      "email": "contact@testriq.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/testriq-qa-lab/",
      "https://x.com/testriq",
      "https://www.facebook.com/testriq.lab/"
    ]
  },
  "hasPart": {
    "@type": "ItemList",
    "name": "Testriq Team Members",
    "itemListElement": [
      {
        "@type": "Person",
        "name": "Sandeep Maske",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "Testriq QA Lab" },
        "url": "https://www.testriq.com/our-team#sandeep-maske"
      },
      {
        "@type": "Person",
        "name": "Santosh Kakade",
        "jobTitle": "VP Operations",
        "worksFor": { "@type": "Organization", "name": "Testriq QA Lab" },
        "url": "https://www.testriq.com/our-team#santosh-kakade"
      },
      {
        "@type": "Person",
        "name": "Goutam Mishra",
        "jobTitle": "Head of QA and BD",
        "worksFor": { "@type": "Organization", "name": "Testriq QA Lab" },
        "url": "https://www.testriq.com/our-team#goutam-mishra"
      },
      {
        "@type": "Person",
        "name": "Rohan Maske",
        "jobTitle": "VP - Marketing",
        "worksFor": { "@type": "Organization", "name": "Testriq QA Lab" },
        "url": "https://www.testriq.com/our-team#rohan-maske"
      },
      {
        "@type": "Person",
        "name": "Aatish Jadhav",
        "jobTitle": "Senior Manager - Strategic Growth",
        "worksFor": { "@type": "Organization", "name": "Testriq QA Lab" },
        "url": "https://www.testriq.com/our-team#aatish-jadhav"
      }
    ]
  }
};

// Note: the previous static `careersPageSchema` (917 lines, 21 hardcoded
// JobPosting entries) was removed in F-40 (Cycle 2 Sprint 1). The careers
// page now builds its JobPosting JSON-LD dynamically from live Sanity data
// via `buildCareersPageSchema(jobs)` in `./jobPostingSchema.ts`.

export const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.testriq.com/#organization",
      "name": "Testriq QA LAB LLP",
      "url": "https://www.testriq.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testriq.com/testriq-logo.png"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.testriq.com/#website",
      "url": "https://www.testriq.com",
      "name": "Testriq QA Lab",
      "publisher": {
        "@id": "https://www.testriq.com/#organization"
      }
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.testriq.com/case-studies/#webpage",
      "url": "https://www.testriq.com/case-studies",
      "name": "Software Testing & QA Case Studies | Testriq QA Lab",
      "description": "Explore our library of software testing case studies. See how Testriq helps global enterprises like Canva and Ragnar achieve 99% bug-free releases through expert QA automation.",
      "isPartOf": {
        "@id": "https://www.testriq.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.testriq.com/case-studies/#breadcrumb"
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://www.testriq.com/canva-design-platform",
            "name": "Testing Canva’s Design Platform"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "url": "https://www.testriq.com/ragnar-sports-platform",
            "name": "Ragnar Sports Platform – QA by Testriq"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "url": "https://www.testriq.com/kanishka-mobile-app",
            "name": "Testriq for Kanishka Mobile App Testing"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "url": "https://www.testriq.com/home-facts-case-study",
            "name": "Real Estate QA Case Study – Testriq"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "url": "https://www.testriq.com/realtytrac-case-study",
            "name": "RealtyTrac QA Case Study"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "url": "https://www.testriq.com/brandify-case-study",
            "name": "Brandify QA for Digital Marketing Case Study"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "url": "https://www.testriq.com/milton-case-study",
            "name": "Milton Smart Stainless Steel Water Bottle Case Study"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "url": "https://www.testriq.com/luep-case-study",
            "name": "Cross-Platform QA Case Study of Luep"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "url": "https://www.testriq.com/aalpha-information-systems",
            "name": "Securing Aalpha Information Systems' HR Portal"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "url": "https://www.testriq.com/digiboxx-case-study",
            "name": "Optimizing Digiboxx with Robust Testing"
          },
          {
            "@type": "ListItem",
            "position": 11,
            "url": "https://www.testriq.com/rc-pets-case-study",
            "name": "Performance Testing for RC Pets' Growth"
          },
          {
            "@type": "ListItem",
            "position": 12,
            "url": "https://www.testriq.com/worksocial-case-study",
            "name": "WorkSocial Software Optimized Through Testing"
          },
          {
            "@type": "ListItem",
            "position": 13,
            "url": "https://www.testriq.com/leadoconnect-case-study",
            "name": "Refining LeadoConnect’s B2B Software with QA"
          },
          {
            "@type": "ListItem",
            "position": 14,
            "url": "https://www.testriq.com/pro-ficiency-case-study",
            "name": "Elevating Pro-ficiency’s Software with QA and Rigorous Testing"
          },
          {
            "@type": "ListItem",
            "position": 15,
            "url": "https://www.testriq.com/phyllo-case-study",
            "name": "Optimizing Phyllo's API with Efficient Testing"
          },
          {
            "@type": "ListItem",
            "position": 16,
            "url": "https://www.testriq.com/indo-wings-case-study",
            "name": "Security Testing for High-end Drone for Indo Wings"
          },
          {
            "@type": "ListItem",
            "position": 17,
            "url": "https://www.testriq.com/smart-doorbell-case-study",
            "name": "Comprehensive QA for Smart Video Doorbell App"
          }
        ]
      }
    }
    // F-44.2: BreadcrumbList intentionally NOT in @graph — page-side
    // createCanonicalBreadcrumb (in src/app/case-studies/page.tsx) is the
    // single source of truth. Removed a "Case Studies" BreadcrumbList block
    // here that was double-rendering on /case-studies — the page-side and
    // schema-internal blocks emitted identical content, but Google's
    // BreadcrumbList rich-result rules treat duplicates as conflicting.
  ]
};

// Contact Us Page

export const contactUsPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us",
  "url": "https://www.testriq.com/contact",
  "description": "Reach out to Testriq QA Lab for expert QA consultation, project inquiries, support requests, or partnership opportunities. Get in touch via call, email, video consultation, or schedule a meeting.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Testriq QA Lab LLP",
    "url": "https://www.testriq.com",
    "logo": "https://www.testriq.com/images/Testriq_Logo.png",
    "email": "contact@testriq.com",
    "telephone": "+91-915-2929-343",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park, Mira Road East",
      "addressLocality": "Mira Bhayandar",
      "addressRegion": "Maharashtra",
      "postalCode": "401107",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+91-915-2929-343",
        "email": "contact@testriq.com",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "Worldwide"
      },
      {
        "@type": "ContactPoint",
        "contactType": "emergency",
        "telephone": "+91-915-2929-343",
        "availableLanguage": ["English"],
        "areaServed": "Worldwide",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ]
  }
};





// Breadcrumb Schema
export const createBreadcrumbSchema = (items: Array<{ name: string, url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

/**
 * F-44.1 helper: build a FAQPage JSON-LD entity from a `{question, answer}` array.
 * Used by service / solution / tool / comparison pages to surface their UI FAQ
 * content into structured data for rich-result eligibility. Plain-text answers
 * only — strip JSX / Markdown before passing in.
 */
export const createFaqPageSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.answer,
    },
  })),
});

/**
 * Build a canonical 2-item BreadcrumbList (Home → this page) for any Testriq
 * service or solution page. The page URL is derived from `pathname` via
 * `buildCanonicalUrl`, so:
 *
 *   - No way to introduce a slug typo (Pattern B) — the URL is whatever path
 *     the page actually serves at.
 *   - No way to introduce a /services/ prefix (Pattern A) — the helper takes
 *     the public pathname directly.
 *   - No way to ship a 3-item breadcrumb with an intermediate "Services" node
 *     pointing at the page URL (Pattern D) — the helper structurally produces
 *     exactly 2 items.
 *
 * Existing `createBreadcrumbSchema` remains available for legitimate
 * multi-item cases (blog category trees, case-study hierarchies, etc.).
 *
 * The terminal node's name comes from `BREADCRUMB_LABELS` when the slug is
 * listed there, so the markup always matches the breadcrumb the user sees.
 * 22 of 61 service/solution routes had drifted apart before this lookup
 * existed. `pageName` is the fallback for routes outside that map.
 *
 * @example
 *   <StructuredData
 *     data={createCanonicalBreadcrumb("/regression-testing", "Regression Testing")}
 *   />
 *
 * @param pathname Public pathname of the page, with or without leading slash.
 * @param pageName Fallback display name, used when the slug is not in
 *                 `BREADCRUMB_LABELS`.
 * @returns A Schema.org BreadcrumbList JSON-LD object.
 */
export const createCanonicalBreadcrumb = (pathname: string, pageName: string) =>
  createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: getBreadcrumbLabel(pathname, pageName), url: buildCanonicalUrl(pathname) },
  ]);

// FAQ Schema
export const createFAQSchema = (faqs: Array<{ question: string, answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});



// Structured data for dating app certification service




// Structured data for fantasy sports app certification service




// Structured data for shopping apps certification service

// Service Schema for SAP Testing Service

// Service Schema for Usability Testing Service

// Professional Service Schema for Homepage/Local SEO
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Testriq QA Lab",
  // schema.org `image` on a business means a representative image, not the
  // brand mark — that belongs on Organization.logo, which is set separately
  // and left pointing at testriq-logo.png.
  //
  // This field previously carried testriq-logo.png (7959x2178, a wide wordmark
  // on white). Google-family surfaces prefer structured data over og:image for
  // link previews, so Google Chat rendered the homepage card by centre-cropping
  // that wordmark to a square — the preview showed a giant "stri" rather than
  // the branded card. testriq-logo.png appears nowhere else on the homepage
  // (no <img>, no image_src), so this was the only possible source.
  "image": "https://www.testriq.com/OG/testriq-qa-lab-llp-og-img.webp",
  "url": "https://www.testriq.com",
  "telephone": "+91-915-2929-343",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar",
    "addressLocality": "Mira Bhayandar",
    "addressRegion": "Maharashtra",
    "postalCode": "401107",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.2812",
    "longitude": "72.8777"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/testriq-qa-lab/",
    "https://www.facebook.com/testriq.lab/"
  ],
  "priceRange": "$$"
};

// Service Schema for Functional Testing
export const functionalServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Functional Testing Services",
      "alternateName": "Software QA & Automation",
      "serviceType": "QA and Software Testing",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Testriq QA Lab",
        "url": "https://www.testriq.com",
        "telephone": "+91-915-2929-343",
        "priceRange": "$$"
      },
      "url": "https://www.testriq.com/services/functional-testing-services",
      "description": "Ensure flawless software performance with Testriq's expert Functional Testing Services. Comprehensive QA, automation & validation for web, mobile & enterprise applications.",
      "areaServed": "WorldWide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Functional QA Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Application Functional Testing",
              "description": "Ensuring robust performance and flawless user experience across all web platforms."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Functional Testing",
              "description": "Validating functionality, usability, and performance on diverse mobile devices."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "API Testing Services",
              "description": "Verifying the functionality, reliability, and security of application programming interfaces."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automated Functional Testing",
              "description": "Accelerating development cycles with high-standard automated validation."
            }
          }
        ]
      }
    }
    // F-44.1: FAQPage intentionally NOT in @graph — page-side
    // createFaqPageSchema(faqsForSchema) on /functional-testing-services
    // is the single source of truth, mirroring the FunctionalFAQs UI content
    // (5 Q&As vs 2 embedded). Removed embedded duplicate.
  ]
};

// Service Schema for Continuous Testing Services

// Service Schema for Test Data Management

// Service Schema for User Acceptance Testing (UAT)
export const tdmFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is test data management and why is it important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Test Data Management (TDM) is the process of planning, creating, securing, and delivering the data required for software testing. It is important because it ensures that testing is realistic, secure, and compliant with privacy laws, while reducing the time and cost associated with manual data preparation."
      }
    },
    {
      "@type": "Question",
      "name": "How to ensure GDPR compliance in test data management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GDPR compliance is ensured through techniques like data masking, pseudonymization, and synthetic data generation. These methods remove personally identifiable information (PII) from test environments, ensuring that no real user data is exposed during the QA process."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between data masking and synthetic data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Data masking involves taking real production data and obfuscating sensitive elements to make it secure for testing. Synthetic data, on the other hand, is artificially generated from scratch using algorithms or AI to mirror the characteristics of real data without containing any actual information from real users."
      }
    },
    {
      "@type": "Question",
      "name": "How to automate test data provisioning in DevOps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Automating test data provisioning involves integrating TDM tools with CI/CD pipelines. This allows for the automatic creation, masking, and delivery of fresh test datasets whenever a new build is triggered, enabling true self-service QA and faster release cycles."
      }
    }
  ]
};

// ============================================================
// MISSING SERVICE SCHEMAS (referenced by service pages)
// ============================================================




export const architectureFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is application architecture inspection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Application architecture inspection is a systematic review of a software system's structural design to identify weaknesses, scalability bottlenecks, security vulnerabilities, and deviations from best practices."
      }
    },
    {
      "@type": "Question",
      "name": "Why is architecture inspection important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It helps identify design flaws and technical debt early, reducing long-term maintenance costs and improving system reliability, security, and performance."
      }
    }
  ]
};


export const azureFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are Azure testing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Azure testing services involve validating applications deployed on Microsoft Azure, including functional testing, performance testing, security auditing, and CI/CD pipeline integration using Azure DevOps."
      }
    },
    {
      "@type": "Question",
      "name": "How does Testriq support Azure DevOps testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Testriq integrates automated test suites directly into Azure DevOps pipelines, enabling continuous testing, faster release cycles, and real-time quality gates for enterprise cloud applications."
      }
    }
  ]
};


export const blockchainFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does blockchain testing cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Blockchain testing covers smart contract functionality, consensus mechanism validation, security audits, network performance, tokenomics logic, and integration testing with external systems."
      }
    },
    {
      "@type": "Question",
      "name": "Why is smart contract auditing important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smart contracts are immutable once deployed. A single bug can result in irreversible financial loss. Rigorous auditing ensures contract logic is correct, secure, and free from common vulnerabilities."
      }
    }
  ]
};


export const compatibilityFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is compatibility testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Compatibility testing verifies that a software application works correctly across different browsers, devices, operating systems, screen resolutions, and network configurations."
      }
    },
    {
      "@type": "Question",
      "name": "Why is cross-browser testing important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different browsers render web pages differently. Cross-browser testing ensures a consistent user experience across Chrome, Firefox, Safari, Edge, and other browsers."
      }
    }
  ]
};









export const timezoneFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is timezone testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timezone testing ensures your application correctly handles date and time operations across multiple time zones, including daylight saving time transitions, locale-specific formatting, and scheduling logic."
      }
    },
    {
      "@type": "Question",
      "name": "What is follow-the-sun testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Follow-the-sun testing is a global testing model where QA teams in different time zones hand off work continuously, providing round-the-clock testing coverage without overtime costs."
      }
    }
  ]
};

export const pricingServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.testriq.com/#organization",
      "name": "Testriq",
      "alternateName": "Testriq QA Company",
      "url": "https://www.testriq.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testriq.com/testriq-logo.png",
        "width": 250,
        "height": 60
      },
      "description": "ISTQB Certified partner providing end-to-end QA, DevSecOps, and AI-driven quality engineering. Global reach serving US, UK, EU, India, and UAE markets.",
      "foundingDate": "2010",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
        "addressLocality": "Mira Bhayandar",
        "addressRegion": "Maharashtra",
        "postalCode": "401107",
        "addressCountry": "IN"
      },
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+91-915-2929-343",
        "contactType": "customer service",
        "email": "contact@testriq.com",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": ["US", "GB", "IN", "AE", "EU"]
      }],
      "sameAs": [
        "linkedin.com/company/testriq-qa-lab/",
        "https://twitter.com/testriq",
        "https://www.facebook.com/testriq.lab/",
        "https://www.instagram.com/testriq/"
      ]
      // F-41: AggregateRating removed (was hardcoded ratingValue 4.8 / ratingCount 425
      // with no real Review data anywhere in the codebase). Google's structured-data
      // guidelines require AggregateRating to reflect genuine, verifiable user reviews;
      // self-asserted ratings with no on-page Review content are a manual-action vector.
      // Re-add ONLY when fed by a real review source (G2/Clutch import or Sanity review
      // documents) AND the underlying Review entries are also rendered on-page.
    },
    {
      "@type": "WebSite",
      "@id": "https://www.testriq.com/#website",
      "name": "Testriq",
      "url": "https://www.testriq.com",
      "publisher": { "@id": "https://www.testriq.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.testriq.com/blog/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.testriq.com/pricing",
      "url": "https://www.testriq.com/pricing",
      "name": "QA Testing Packages & Pricing | Transparent Software Testing Costs",
      "description": "No fluff, just results. Transparent pricing for world-class software testing services.",
      "inLanguage": "en-US",
      "isPartOf": { "@id": "https://www.testriq.com/#website" },
      "about": { "@id": "https://www.testriq.com/#organization" },
      "breadcrumb": { "@id": "https://www.testriq.com/pricing#breadcrumb" },
      "lastReviewed": "2026-04-23",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".pricing-hero > p:first-of-type"]
      },
      "significantLink": [
        "https://www.testriq.com/contact-us",
        "https://www.testriq.com/web-application-testing-services",
        "https://www.testriq.com/mobile-application-testing",
        "https://www.testriq.com/api-testing",
        "https://www.testriq.com/security-testing"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.testriq.com/pricing#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.testriq.com/" },
        { "@type": "ListItem", "position": 2, "name": "Pricing" }
      ]
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.testriq.com/pricing#offer-catalog",
      "name": "Testriq QA Testing Packages & Pricing",
      "description": "Choose the perfect testing bundle for your project's phase. Clear deliverables, fast turnarounds, and no hidden fees.",
      "provider": { "@id": "https://www.testriq.com/#organization" },
      "numberOfItems": 4,
      "itemListElement": [
        { "@type": "Service", "@id": "https://www.testriq.com/pricing#web-app-testing" },
        { "@type": "Service", "@id": "https://www.testriq.com/pricing#mobile-app-testing" },
        { "@type": "Service", "@id": "https://www.testriq.com/pricing#api-testing" },
        { "@type": "Service", "@id": "https://www.testriq.com/pricing#vapt-security" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.testriq.com/pricing#web-app-testing",
      "name": "Web App Testing Bundle",
      "description": "Comprehensive web application testing including Functional Testing, Integration Tests, Cross-Browser & Device Compatibility, Usability (UX), Performance, and Security testing. Deliverables include a Bug List with video/screenshot evidence, Vulnerability Report, and Performance Scorecard.",
      "provider": { "@id": "https://www.testriq.com/#organization" },
      "serviceType": "Web Application Testing",
      "category": "Software Testing Services",
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United Arab Emirates" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web App Testing Features",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Functional Testing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Integration Tests" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cross-Browser & Device Compatibility" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Usability (UX) Testing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Testing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Testing" } }
        ]
      },
      "termsOfService": "2 bug verification cycles free of cost",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceCurrency": "USD",
          "unitText": "per mid size project",
          "description": "Custom pricing per mid size project. Contact for a personalized quote."
        },
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-01-01",
        "url": "https://www.testriq.com/contact-us",
        "seller": { "@id": "https://www.testriq.com/#organization" }
      },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Browser Coverage", "value": "Windows, MAC, Android Phone & Tablets, Apple Phone & Tablets" },
        { "@type": "PropertyValue", "name": "Deliverables", "value": "Bug List (Video/Screenshot + Steps), Vulnerability Report, Performance Scorecard" },
        { "@type": "PropertyValue", "name": "Free Bug Verification Cycles", "value": "2" }
      ],
      "url": "https://www.testriq.com/pricing"
    },
    {
      "@type": "Service",
      "@id": "https://www.testriq.com/pricing#mobile-app-testing",
      "name": "Mobile App Testing Bundle",
      "description": "End-to-end mobile application testing for iOS and Android including Functional Testing, UI responsiveness, touch gestures, network condition testing (4G/5G vs Wi-Fi), API Integration Tests, Performance, and Security. Deliverables include Bug List, crash-report log, and UX Friction report.",
      "provider": { "@id": "https://www.testriq.com/#organization" },
      "serviceType": "Mobile Application Testing",
      "category": "Software Testing Services",
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United Arab Emirates" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile App Testing Features",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Functional Testing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI Responsiveness on Small Screens" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Touch Gesture Testing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Network Condition Testing (4G/5G vs Wi-Fi)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API Integration Tests" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Testing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Testing" } }
        ]
      },
      "termsOfService": "2 bug verification cycles free of cost",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceCurrency": "USD",
          "unitText": "per mid size App, iOS + Android",
          "description": "Custom pricing per mid size mobile app (iOS + Android). Contact for a personalized quote."
        },
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-01-01",
        "url": "https://www.testriq.com/contact-us",
        "seller": { "@id": "https://www.testriq.com/#organization" }
      },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Device Coverage", "value": "Real iOS & Android devices, latest to lowest OS versions" },
        { "@type": "PropertyValue", "name": "Special Tests", "value": "Battery drain & heat check, Push notification delivery, Real world network conditions" },
        { "@type": "PropertyValue", "name": "Deliverables", "value": "Bug List (Video/Screenshot + Steps), Crash-Report Log, UX Friction Report" },
        { "@type": "PropertyValue", "name": "Free Bug Verification Cycles", "value": "2" }
      ],
      "url": "https://www.testriq.com/pricing"
    },
    {
      "@type": "Service",
      "@id": "https://www.testriq.com/pricing#api-testing",
      "name": "API Testing Pack",
      "description": "Comprehensive API testing for up to 20 endpoints including Functional Validation, Schema Validation (JSON/XML), Negative Testing (4xx/5xx), Auth & Header Validation (JWT/OAuth), Performance (latency, throughput, rate limiting), and Data Integrity checks. Covers REST, GraphQL, and SOAP architectures.",
      "provider": { "@id": "https://www.testriq.com/#organization" },
      "serviceType": "API Testing",
      "category": "Software Testing Services",
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United Arab Emirates" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "API Testing Features",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Functional Validation — Endpoint Logic & CRUD Operations" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Schema Validation — JSON/XML Structure & Data Types" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Negative Testing — Error Codes (4xx, 5xx) & Edge Cases" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Auth & Headers — Token Validation (JWT/OAuth) & API Keys" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance — Latency, Throughput & Rate Limiting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Integrity — Database Consistency After API Calls" } }
        ]
      },
      "termsOfService": "2 bug verification cycles free of cost",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceCurrency": "USD",
          "unitText": "per project (up to 20 endpoints)",
          "description": "Custom pricing per project covering up to 20 API endpoints. Contact for a personalized quote."
        },
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-01-01",
        "url": "https://www.testriq.com/contact-us",
        "seller": { "@id": "https://www.testriq.com/#organization" }
      },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Architecture Support", "value": "REST, GraphQL, SOAP" },
        { "@type": "PropertyValue", "name": "Environment Support", "value": "Dev, Staging, Production" },
        { "@type": "PropertyValue", "name": "Tools Included", "value": "Postman / Insomnia collections for easy re-running" },
        { "@type": "PropertyValue", "name": "Deliverables", "value": "Full API Audit Report, Performance Benchmarks, Ready-to-use Postman Collection" },
        { "@type": "PropertyValue", "name": "Free Bug Verification Cycles", "value": "2" }
      ],
      "url": "https://www.testriq.com/pricing"
    },
    {
      "@type": "Service",
      "@id": "https://www.testriq.com/pricing#vapt-security",
      "name": "VAPT (Security) Pack",
      "description": "Vulnerability Assessment and Penetration Testing for web or mobile applications. Includes automated scanning, manual pentesting, OWASP Top 10 coverage, sensitive data exposure checks, server configuration audits, and privilege escalation testing.",
      "provider": { "@id": "https://www.testriq.com/#organization" },
      "serviceType": "VAPT Security Testing",
      "category": "Software Testing Services",
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United Arab Emirates" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "VAPT Security Testing Features",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vulnerability Assessment — Automated Scanning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manual Pentesting — Human-Led Exploitation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "OWASP Top 10 Coverage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sensitive Data Exposure Checks" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Server Configuration — SSL/TLS & Port Audits" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Privilege Escalation Testing" } }
        ]
      },
      "termsOfService": "1 complimentary re-scan after vulnerability fixes",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceCurrency": "USD",
          "unitText": "per audit (Web or Mobile)",
          "description": "Custom pricing per security audit. Contact for a personalized quote."
        },
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-01-01",
        "url": "https://www.testriq.com/contact-us",
        "seller": { "@id": "https://www.testriq.com/#organization" }
      },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Approach", "value": "Hybrid — Automated Tools + Manual Expert Review" },
        { "@type": "PropertyValue", "name": "Special Inclusions", "value": "Business Logic Audit, PoC for every vulnerability, Executive Summary + Tech Details" },
        { "@type": "PropertyValue", "name": "Deliverables", "value": "VAPT Audit Report (Critical/High/Medium/Low), Remediation Roadmap, Security Certificate" },
        { "@type": "PropertyValue", "name": "Free Re-scan", "value": "1 complimentary re-scan after fixes" }
      ],
      "url": "https://www.testriq.com/pricing"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.testriq.com/pricing#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is included in Testriq's Web App Testing bundle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Testriq's Web App Testing bundle includes Functional Testing, Integration Tests, Cross-Browser & Device Compatibility, Usability (UX), Performance, and Security testing. Testing covers Windows, MAC, Android Phone & Tablets, and Apple Phone & Tablets. You receive a Bug List with video/screenshot evidence, a Vulnerability Report, and a Performance Scorecard. Two bug verification cycles are included free of cost."
          }
        },
        {
          "@type": "Question",
          "name": "What does the Mobile App Testing bundle cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Mobile App Testing bundle covers Functional Testing, UI responsiveness on small screens, touch gestures, app behavior on 4G/5G vs Wi-Fi, API Integration Tests, Performance, and Security testing. Testing is done on real iOS & Android devices across latest to lowest OS versions, including battery drain & heat checks, push notification delivery, and real-world network conditions. Deliverables include a Bug List, crash-report log, and UX Friction report."
          }
        },
        {
          "@type": "Question",
          "name": "How many API endpoints are covered in the API Testing Pack?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The API Testing Pack covers up to 20 endpoints per project. It includes Functional Validation, Schema Validation (JSON/XML), Negative Testing (4xx/5xx error codes), Auth & Header Validation (JWT/OAuth), Performance testing (latency, throughput, rate limiting), and Data Integrity checks. Testing supports REST, GraphQL, and SOAP architectures across Dev, Staging, and Production environments."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in the VAPT (Security) Pack?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The VAPT Pack includes Vulnerability Assessment (automated scanning), Manual Pentesting (human-led exploitation), OWASP Top 10 coverage (Injection, XSS, Broken Auth), Sensitive Data Exposure checks, Server Configuration audits (SSL/TLS & open ports), and Privilege Escalation testing. It uses a hybrid approach of automated tools and manual expert review. Deliverables include a categorized VAPT Audit Report, Remediation Roadmap, and a Security Certificate. One complimentary re-scan is included after you fix the vulnerabilities."
          }
        },
        {
          "@type": "Question",
          "name": "Does Testriq offer custom pricing for larger projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All Testriq testing bundles are priced per project scope and can be customized based on application complexity, number of features, and testing depth. Contact our experts for a personalized quote with clear deliverables, fast turnarounds, and no hidden fees."
          }
        }
      ]
    }
  ]
};


// Service Schema for ISO/IEC 42001:2023 Compliance Testing


// F-24: Service-page schemas extracted to ./schemas/services.ts.
// Re-exported here so existing 141 call sites can keep importing from this file.
export * from "./schemas/services";
