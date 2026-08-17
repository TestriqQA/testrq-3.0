"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import { FaCertificate } from "react-icons/fa6";

import { BsTwitterX } from "react-icons/bs";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/Testriq_Logo.png";

interface coreService {
  title: string;
  path: Url;
}

interface specializedTesting {
  title: string;
  path: Url;
}

const coreService = [
  { title: "LaunchFast QA", path: "/launchfast-qa" },
  { title: "Exploratory Testing", path: "/exploratory-testing" },
  {
    title: "Web Application Testing",
    path: "/web-application-testing-services",
  },
  {
    title: "Desktop Application Testing",
    path: "/desktop-application-testing-services",
  },
  { title: "Mobile App Testing", path: "/mobile-application-testing" },
  { title: "IoT Device Testing", path: "/iot-device-testing-services" },
  { title: "AI Application Testing", path: "/ai-application-testing" },
  { title: "Robotics Testing", path: "/robotics-testing-services" },
  { title: "Smart Device Testing", path: "/smart-device-testing-services" },
  { title: "ETL Testing", path: "/etl-testing-services" },
  { title: "Performance Testing", path: "/performance-testing-services" },
  { title: "QA Outsourcing Services", path: "/qa-outsourcing-services" },
];

const specializedTesting = [
  { title: "Manual Testing", path: "/manual-testing-services" },
  { title: "Automation Testing", path: "/automation-testing-services" },
  { title: "API Testing", path: "/api-testing" },
  { title: "Regression Testing", path: "/regression-testing" },
  { title: "Performance Testing", path: "/performance-testing-services" },
  { title: "Security Testing", path: "/security-testing" },
  { title: "QA Documentation Services", path: "/qa-documentation-services" },
  { title: "Data Analysis", path: "/data-analysis-services" },
  { title: "Corporate QA Training", path: "/corporate-qa-training" },
  { title: "SAP Testing", path: "/sap-testing-services" },
  { title: "Telecom Testing", path: "/telecommunications-testing-services" },
];

// The header's "Services" mega-menu (Header.tsx menuItems) only renders its
// links into the DOM after a real mouseenter on "Services" AND on a category
// tab — both are React state gated (`activeDesktopSubmenu === idx`, then
// `activeMegaMenuCategory`), so nothing in it exists in the page's initial
// HTML or in the fully-JS-rendered DOM before a user interacts with it.
// Googlebot's renderer does not simulate hover or click, so every page whose
// only inbound link was that menu was effectively invisible to a normal
// crawl — discoverable solely via the XML sitemap. Verified 2026-08-17: 0 of
// these hrefs exist in the live homepage's rendered DOM pre-interaction.
//
// Footer has no such gate — every array below renders unconditionally, the
// same pattern `coreService` and `specializedTesting` already use above. This
// closes the gap: every slug present in Header's submenu but absent from
// Footer, so it now has a real, always-crawlable inbound link from every page
// on the site (Footer is in the global layout).
const moreTestingServices = [
  { title: "Accessibility Testing", path: "/accessibility-testing-services" },
  { title: "SaaS Testing", path: "/saas-testing-services" },
  { title: "Managed Testing", path: "/managed-testing-services" },
  { title: "Ad-hoc Testing", path: "/ad-hoc-testing" },
  { title: "User Acceptance Testing (UAT)", path: "/user-acceptance-testing" },
  { title: "Microservices Testing", path: "/microservices-testing" },
  { title: "Migration Testing", path: "/migration-testing" },
  { title: "Embedded Testing", path: "/embedded-testing-services" },
  { title: "Usability Testing", path: "/usability-testing-services" },
  { title: "Blockchain App Testing", path: "/blockchain-app-testing-services" },
  { title: "Test Data Management", path: "/test-data-management-services" },
  { title: "Application Architecture Inspection", path: "/application-architecture-inspection-services" },
  { title: "Timezone Testing", path: "/timezone-testing-services" },
  { title: "Functional Testing", path: "/functional-testing-services" },
  { title: "Cyber Security Testing", path: "/cyber-security-testing-services" },
  { title: "Compatibility Testing", path: "/compatibility-testing-services" },
  { title: "Continuous Testing (CI/CD)", path: "/continuous-testing-services-cicd-pipeline" },
  { title: "Shift-Left Testing", path: "/shift-left-testing" },
  { title: "Agile Testing", path: "/agile-testing-services" },
  { title: "Azure Testing", path: "/azure-testing-services" },
];

const industriesAndTrust = [
  { title: "Ecommerce Testing", path: "/e-commerce-testing-services" },
  { title: "E-Learning Testing", path: "/e-learning-testing-services" },
  { title: "Healthcare Testing", path: "/healthcare-testing-services" },
  { title: "Gaming App Testing", path: "/gaming-app-testing-services" },
  { title: "IoT Appliances & App Testing", path: "/iot-appliances-and-apps-testing-services" },
  { title: "Banking & Finance Testing", path: "/banking-finance-industry-testing-services" },
  { title: "Matrimonial Apps Certification", path: "/matrimonial-apps-certification" },
  { title: "Dating Apps Certification", path: "/dating-app-certification" },
  { title: "Trading Apps Certification", path: "/trading-apps-certification" },
  { title: "Shopping Apps Certification", path: "/shopping-apps-certification" },
];

const company = [
  { title: "About Us", path: "/about-us" },
  { title: "Our Team", path: "/our-team" },
  { title: "Tools", path: "/technology-stack" },
  { title: "Case Studies", path: "/case-studies" },
  { title: "Blogs", path: "/blog" },
  { title: "Careers", path: "/careers" },
  { title: "Locations We Serve", path: "/locations-we-serve" },
  { title: "Contact Us", path: "/contact-us" },
];

const partners = [
  {
    title: "GoodFirms Trusted Review Logo",
    src: "/GoodFirms_Logo.png",
    alt: "GoodFirms Logo",
    href: "https://www.goodfirms.co/company/testriq-qa-lab",
  },
  {
    title: "Clutch.io Verified Company Logo",
    src: "/ClutchIO_Logo.png",
    alt: "Clutch.io Logo",
    href: "https://clutch.co/profile/testriq-qa-lab",
  },
  {
    title: "DesignRush Verified Agency Logo",
    src: "/DesignRush_Logo.png",
    alt: "DesignRush Logo",
  },
];

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  if (pathname?.startsWith('/cms')) return null;

  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-16 px-8 md:px-12 lg:px-24">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4 xl:mr-10">
            <div className="flex items-center space-x-2">
              <Image title="Testriq Logo" src={Logo} alt="Testriq_logo" width={150} />
            </div>
            <p className="text-gray-800 text-sm leading-relaxed">
              Premium software testing services with over a decade of
              experience. ISTQB certified experts providing comprehensive QA
              solutions.
            </p>

            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex space-x-2 text-sm text-gray-800">
                <FaMapMarkerAlt className="h-15 w-15 text-brand-blue" />
                <p>
                  Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar,
                  Beverly Park, Mira Road, Mira Bhayandar, Mumbai, Maharashtra
                  401107
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-800">
                <FaPhoneAlt className="h-4 w-4 text-brand-blue" />
                <Link
                  href="tel:+919152929343"
                  className="inline-block py-2 -my-1 hover:text-brand-blue transition-colors"
                >
                  (+91) 915-2929-343
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-800">
                <FaEnvelope className="h-4 w-4 text-brand-blue" />
                <Link
                  href="mailto:contact@testriq.com"
                  className="inline-block py-2 -my-1 hover:text-brand-blue transition-colors"
                >
                  contact@testriq.com
                </Link>
              </div>
            </div>

            {/* Certification Badges */}
            <div className='space-y-2'>
              <div className='flex flex-wrap items-center gap-2'>
                <Image title="ISO 9001 Certification Badge" src="/Footer_Images/ISO-9001-100x40-1.png" alt='ISO 9001 Certified' width={120} height={100} />
                <Image title="ISO 27001 Certification Badge" src="/Footer_Images/ISO-27001-100x40-1.png" alt='ISO 27001 Certified' width={120} height={100} />
                <div className="inline-flex items-center bg-brand-blue px-3 py-2 rounded gap-2 h-10">
                  <FaCertificate className="text-white" />
                  <span className="text-white text-sm font-semibold">ISTQB Certified</span>
                </div>
              </div>
              <div>
                <Image title="MSME Registered" src="/Footer_Images/msme-logo.png" alt='MSME Registered' width={100} height={100} />
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 pt-4">
              <Link
                href="https://www.linkedin.com/company/testriq-qa-lab/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 group"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-5 w-5 text-gray-800 group-hover:text-blue-600 transition-colors" />
              </Link>
              <Link
                href="https://www.facebook.com/testriq.lab/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 group"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-5 w-5 text-gray-800 group-hover:text-blue-600 transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/testriq"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 group"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5 text-gray-800 group-hover:text-pink-600 transition-colors" />
              </Link>
              <Link
                href="https://x.com/testriq"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 group"
                aria-label="Twitter"
              >
                <BsTwitterX className="h-5 w-5 text-gray-800 group-hover:text-blue-400 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-blue-200 pb-2">
              Core Services
            </h3>
            <ul className="space-y-2">
              {coreService.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.path}
                    className="block py-2.5 -my-1 text-sm text-gray-800 hover:text-brand-blue transition-all duration-200 hover:translate-x-1"
                    aria-label={service.title}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Testing */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-blue-200 pb-2">
              Specialized Testing
            </h3>
            <ul className="space-y-2">
              {specializedTesting.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.path}
                    className="block py-2.5 -my-1 text-sm text-gray-800 hover:text-brand-blue transition-all duration-200 hover:translate-x-1"
                    aria-label={service.title}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-blue-200 pb-2">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.path}
                    className="block py-2.5 -my-1 text-sm text-gray-800 hover:text-brand-blue transition-all duration-200 hover:translate-x-1"
                    aria-label={link.title}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Second row: services that only lived behind the header's
            hover-gated mega-menu. Same unconditional-render pattern as the
            columns above, so every link here is present in the initial HTML
            on every page site-wide. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-gray-300">
          {/* More Testing Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-blue-200 pb-2">
              More Testing Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              {moreTestingServices.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.path}
                    className="block py-2.5 -my-1 text-sm text-gray-800 hover:text-brand-blue transition-all duration-200 hover:translate-x-1"
                    aria-label={service.title}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Trust Certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-blue-200 pb-2">
              Industries & Trust
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              {industriesAndTrust.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="block py-2.5 -my-1 text-sm text-gray-800 hover:text-brand-blue transition-all duration-200 hover:translate-x-1"
                    aria-label={item.title}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>



        <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
          {partners.map((partner, index) => {
            const ImageComponent = (
              <Image
                title={partner.title}
                src={partner.src}
                alt={partner.alt}
                width={80}
                height={20}
                className="object-contain h-8 w-auto filter grayscale hover:grayscale-0 transition duration-300"
              />
            );

            return partner.href ? (
              <Link
                key={index}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
                aria-label={partner.title}
              >
                {ImageComponent}
              </Link>
            ) : (
              <div
                key={index}
                className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
                aria-label={partner.title}
              >
                {ImageComponent}
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-800">
              © {new Date().getFullYear()} Testriq QA LAB LLP. All Rights Reserved
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link
                href="/privacy-policy"
                className="inline-block py-2 -my-1 px-1 text-sm text-gray-800 hover:text-brand-blue transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="inline-block py-2 -my-1 px-1 text-sm text-gray-800 hover:text-brand-blue transition-colors"
              >
                Terms Of Service
              </Link>
              <Link
                href="/cookies-policy"
                className="inline-block py-2 -my-1 px-1 text-sm text-gray-800 hover:text-brand-blue transition-colors"
              >
                Cookies Policy
              </Link>
              <Link
                href="/website-map"
                className="inline-block py-2 -my-1 px-1 text-sm text-gray-800 hover:text-brand-blue transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
