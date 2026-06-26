"use client";
import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Testriq_Logo from "../../../public/images/Testriq_Logo.png";

// Define the type for submenu items with links
type SubmenuItem = {
  label: string;
  link: string;
  // Optional one-line subtitle. Rendered under the label in the desktop
  // Products hover panel; safely ignored by every other submenu renderer.
  description?: string;
};

type Submenu = SubmenuItem[] | { heading: string; services: SubmenuItem[] }[];

// Define the type for a menu item
interface MenuItem {
  label: string;
  link: string;
  submenu?: Submenu;
}

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null); // State to track active submenu in mobile
  const [activeTabletSubmenu, setActiveTabletSubmenu] = useState<number | null>(
    null
  ); // State to track active submenu in tablet
  const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState<
    number | null
  >(null); // State to track active submenu in desktop
  const [activeMegaMenuCategory, setActiveMegaMenuCategory] = useState<number>(0); // State for desktop mega menu active category tab
  const [activeMobileMegaCategory, setActiveMobileMegaCategory] = useState<number | null>(null); // State for mobile mega menu nested accordion
  const [activeLink, setActiveLink] = useState<string>(""); // State to track the active link
  const [activeParent, setActiveParent] = useState<string>(""); // State to track the active parent menu item

  if (pathname?.startsWith('/cms')) return null;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleSubmenu = (index: number) => {
    // If the clicked submenu is already open, close it, otherwise open it
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const toggleTabletSubmenu = (index: number) => {
    // If the clicked submenu is already open, close it, otherwise open it
    setActiveTabletSubmenu(activeTabletSubmenu === index ? null : index);
  };

  // Handle desktop submenu hover
  const handleDesktopSubmenuEnter = (index: number) => {
    setActiveDesktopSubmenu(index);
  };

  const handleDesktopSubmenuLeave = () => {
    setActiveDesktopSubmenu(null);
  };

  // Close navbar and set active link/parent when a link is clicked
  const handleLinkClick = (link: string, parentLabel: string = "") => {
    if (link) {
      setActiveLink(link); // Set active link for submenu or top-level items with valid links
      setActiveParent(parentLabel); // Set active parent for submenu items
    } else {
      setActiveLink(""); // Clear active link if no valid link
      setActiveParent(parentLabel); // Set parent if provided (e.g., for top-level items without links)
    }
    setMenuOpen(false);
    setActiveSubmenu(null);
    setActiveTabletSubmenu(null);
    setActiveDesktopSubmenu(null); // Also close desktop submenu
    setActiveMegaMenuCategory(0); // Reset desktop mega menu
    setActiveMobileMegaCategory(null); // Reset mobile mega menu
  };

  const toggleMobileMegaCategory = (index: number) => {
    setActiveMobileMegaCategory(activeMobileMegaCategory === index ? null : index);
  };

  // Define menu items with proper types and links
  const menuItems: MenuItem[] = [
    { label: "Home", link: "/" },
    {
      label: "Company",
      link: "",
      submenu: [
        { label: "About Us", link: "/about-us" },
        { label: "Our Team", link: "/our-team" },
      ],
    },
    {
      label: "Services",
      link: "",
      submenu: [
        {
          heading: "By Testing Type / Specialized QA Services",
          services: [
            { label: "Accessibility Testing", link: "/accessibility-testing-services" },
            { label: "SaaS Testing", link: "/saas-testing-services" },
            { label: "Managed Testing", link: "/managed-testing-services" },
            { label: "Ad-hoc Testing", link: "/ad-hoc-testing" },
            { label: "User Acceptance Testing (UAT)", link: "/user-acceptance-testing" },
            { label: "Microservices Testing", link: "/microservices-testing" },
            { label: "Migration Testing", link: "/migration-testing" },
            { label: "Embedded Testing", link: "/embedded-testing-services" },
            { label: "Usability Testing", link: "/usability-testing-services" },
            { label: "Blockchain App Testing", link: "/blockchain-app-testing-services" },
            { label: "Test Data Management", link: "/test-data-management-services" },
            { label: "Application Architecture Inspection", link: "/application-architecture-inspection-services" },
            { label: "Timezone Testing", link: "/timezone-testing-services" }
          ],
        },
        {
          heading: "By Testing Coverage",
          services: [
            { label: "Functional Testing", link: "/functional-testing-services" },
            { label: "Manual Testing", link: "/manual-testing-services" },
            { label: "Automation Testing", link: "/automation-testing-services" },
            { label: "API Testing", link: "/api-testing" },
            { label: "Regression Testing", link: "/regression-testing" },
            { label: "Performance Testing", link: "/performance-testing-services" },
            { label: "Security Testing", link: "/security-testing" },
            { label: "Cyber Security Testing", link: "/cyber-security-testing-services" },
            { label: "Compatibility Testing", link: "/compatibility-testing-services" },
            { label: "Continuous Testing (CI/CD)", link: "/continuous-testing-services-cicd-pipeline" },
            { label: "QA Documentation Services", link: "/qa-documentation-services" },
            { label: "Data Analysis", link: "/data-analysis-services" },
            { label: "Corporate QA Training", link: "/corporate-qa-training" },
            { label: "SAP Testing", link: "/sap-testing-services" }
          ],
        },
        {
          heading: "By Methodology / Approach",
          services: [
            { label: "Shift-Left Testing", link: "/shift-left-testing" },
            { label: "Agile Testing", link: "/agile-testing-services" },
            { label: "Continuous Testing (CI/CD)", link: "/continuous-testing-services-cicd-pipeline" }
          ],
        },
        {
          heading: "By Expertise Focus Area",
          services: [
            { label: "LaunchFast QA", link: "/launchfast-qa" },
            { label: "Exploratory Testing", link: "/exploratory-testing" },
            { label: "Web Application Testing", link: "/web-application-testing-services" },
            { label: "Desktop Application Testing", link: "/desktop-application-testing-services" },
            { label: "Mobile Application Testing", link: "/mobile-application-testing" },
            { label: "IoT Testing", link: "/iot-device-testing-services" },
            { label: "AI Application Testing", link: "/ai-application-testing" },
            { label: "Robotics Testing", link: "/robotics-testing-services" },
            { label: "Smart Device Testing", link: "/smart-device-testing-services" },
            { label: "ETL Testing", link: "/etl-testing-services" },
            { label: "Azure Testing", link: "/azure-testing-services" },
            { label: "Microservices Testing", link: "/microservices-testing" }
          ],
        },
        {
          heading: "By Industries Expertise",
          services: [
            { label: "Ecommerce Testing Service", link: "/e-commerce-testing-services" },
            { label: "Elearning Testing Service", link: "/e-learning-testing-services" },
            { label: "Healthcare Testing Service", link: "/healthcare-testing-services" },
            { label: "Gaming App Testing Service", link: "/gaming-app-testing-services" },
            { label: "Iot Appliances & App Testing Service", link: "/iot-appliances-and-apps-testing-services" },
            { label: "Banking & Finance Testing Service", link: "/banking-finance-industry-testing-services" },
            { label: "Telecommunication Testing Service", link: "/telecommunications-testing-services" }
          ],
        },
        {
          heading: "Trust Certification",
          services: [
            { label: "Matrimonial Apps Certification", link: "/matrimonial-apps-certification" },
            { label: "Dating Apps Certification", link: "/dating-app-certification" },
            { label: "Trading Apps Certification", link: "/trading-apps-certification" },
            { label: "Shopping Apps Certification", link: "/shopping-apps-certification" }
          ],
        },
      ],
    },
    {
      label: "Products",
      link: "",
      // Products submenu — add new products here as { label, link, description? }.
      // `description` is optional and shows as a subtitle in the desktop hover panel.
      submenu: [
        { label: "LLMQA", link: "/llmqa", description: "LLM & chatbot validation — test, certify, and trust your AI." },
      ],
    },
    { label: "Tools", link: "/technology-stack" },
    { label: "Case Studies", link: "/case-studies" },
    { label: "Careers", link: "/careers" },
    { label: "Blog", link: "/blog" },
    { label: "Pricing", link: "/pricing" },
    { label: "Contact", link: "/contact-us" },
  ];

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 md:px-16 sticky top-0 z-50">
      <div className="flex justify-between items-center px-2 sm:px-5 md:px-8 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" onClick={() => handleLinkClick("/", "")} aria-label="Testriq Home">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer">
            <Image
              title="Testriq Logo"
              src={Testriq_Logo}
              alt="Testriq logo"
              height={100}
              width={120}
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex space-x-6 2xl:space-x-4 w-max-screen-xl text-gray-700 text-sm xl:text-base">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className={`${item.label === "Services" ? "static" : "relative"} cursor-pointer`}
              onMouseEnter={() =>
                item.submenu && handleDesktopSubmenuEnter(idx)
              }
              onMouseLeave={handleDesktopSubmenuLeave}
            >
              {item.link ? (
                <Link
                  href={item.link}
                  onClick={() => handleLinkClick(item.link, "")}
                  aria-label={item.label}
                >
                  <div
                    className={`flex items-center gap-1 hover:text-[theme(color.brand.blue)] px-2 py-1 ${activeLink === item.link || activeParent === item.label
                      ? "text-[theme(color.brand.blue)]"
                      : ""
                      }`}
                  >
                    {item.label}
                    {item.submenu && <MdKeyboardArrowDown />}
                  </div>
                </Link>
              ) : (
                <div
                  className={`flex items-center gap-1 hover:text-[theme(color.brand.blue)] px-2 py-1 ${activeParent === item.label
                    ? "text-[theme(color.brand.blue)]"
                    : ""
                    }`}
                >
                  {item.label}
                  {item.submenu && <MdKeyboardArrowDown />}
                </div>
              )}

              {/* Mega Menu for 'Services' */}
              {item.label === "Services" &&
                item.submenu &&
                activeDesktopSubmenu === idx && (
                  <div className="absolute top-full mt-0 left-1/2 -translate-x-1/2 z-[60] w-screen max-w-7xl before:content-[''] before:absolute before:-top-6 before:left-0 before:w-full before:h-6 before:bg-transparent">
                    <div className="bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-b-xl overflow-hidden border border-gray-100 flex h-[500px] w-full">
                      {/* Left Sidebar - Categories */}
                      <div className="w-1/3 bg-gray-50/80 p-6 overflow-y-auto border-r border-gray-100 flex flex-col gap-1">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-4">Services Catalog</h3>
                      {item.submenu.map((column, colIdx) => {
                        if (!("heading" in column)) return null;
                        const isActive = activeMegaMenuCategory === colIdx;
                        return (
                          <button
                            key={colIdx}
                            onMouseEnter={() => setActiveMegaMenuCategory(colIdx)}
                            onClick={() => setActiveMegaMenuCategory(colIdx)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-[15px] font-semibold transition-all duration-200 flex items-center justify-between group ${
                              isActive
                                ? "bg-white text-[theme(color.brand.blue)] shadow-sm border border-gray-100"
                                : "text-gray-600 hover:bg-white hover:text-gray-900 border border-transparent"
                            }`}
                          >
                            {column.heading}
                            <FaArrowRight className={`w-3 h-3 transition-all duration-200 ${isActive ? 'translate-x-0 opacity-100 text-[theme(color.brand.blue)]' : '-translate-x-2 opacity-0 text-gray-400 group-hover:opacity-50 group-hover:-translate-x-1'}`} />
                          </button>
                        );
                      })}
                    </div>

                    {/* Right Content - Services Links */}
                    <div className="w-2/3 bg-white p-8 overflow-y-auto relative">
                      {(() => {
                        const activeCol = item.submenu[activeMegaMenuCategory];
                        if (!activeCol || !("services" in activeCol)) return null;

                        return (
                          <div className="animate-in fade-in slide-in-from-right-4 duration-300 fill-mode-both" key={activeMegaMenuCategory}>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                              <span className="w-1.5 h-6 bg-[theme(color.brand.blue)] rounded-full"></span>
                              {activeCol.heading}
                            </h2>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                              {activeCol.services.map((service, subIdx) => (
                                <Link
                                  key={subIdx}
                                  href={service.link}
                                  onClick={() => handleLinkClick(service.link, item.label)}
                                  className="group flex items-start gap-3 py-2 px-3 rounded-xl hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-2 group-hover:bg-[theme(color.brand.blue)] transition-colors shrink-0"></div>
                                  <span className="text-base font-medium text-gray-700 group-hover:text-[theme(color.brand.blue)] transition-colors leading-snug">
                                    {service.label}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                  </div>
                )}

              {/* Hover panel for 'Products'. Items come from the menuItems
                  array above (currently placeholders) — the panel renders
                  each product's label plus an optional description line. */}
              {item.label === "Products" &&
                item.submenu &&
                activeDesktopSubmenu === idx && (
                  <div className="absolute top-full left-0 z-[60] w-80 pt-2">
                    <div className="bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-xl border border-gray-100 p-2">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 pt-2 pb-1">
                        Our Products
                      </h3>
                      {item.submenu.map((subItem, subIdx) => {
                        if (!("link" in subItem)) return null;
                        return (
                          <Link
                            key={subIdx}
                            href={subItem.link}
                            onClick={() => handleLinkClick(subItem.link, item.label)}
                            aria-label={subItem.label}
                            className="group flex items-start gap-3 px-3 py-2.5 rounded-lg border border-transparent hover:bg-blue-50/50 hover:border-blue-100 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-2 shrink-0 group-hover:bg-[theme(color.brand.blue)] transition-colors"></div>
                            <div className="flex flex-col">
                              <span
                                className={`text-[15px] font-semibold leading-snug transition-colors group-hover:text-[theme(color.brand.blue)] ${activeLink === subItem.link
                                  ? "text-[theme(color.brand.blue)]"
                                  : "text-gray-700"
                                  }`}
                              >
                                {subItem.label}
                              </span>
                              {subItem.description && (
                                <span className="text-xs text-gray-500 leading-snug mt-0.5">
                                  {subItem.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

              {/* Dropdown for other items */}
              {item.submenu &&
                item.label !== "Services" &&
                item.label !== "Products" &&
                activeDesktopSubmenu === idx && (
                  <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-max z-[55]">
                    {item.submenu.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          href={"link" in subItem ? subItem.link : "#"}
                          onClick={() =>
                            handleLinkClick(
                              "link" in subItem ? subItem.link : "#",
                              item.label
                            )
                          }
                          aria-label={"label" in subItem ? subItem.label : subItem.heading}
                        >
                          <span
                            className={`block px-4 py-2 hover:bg-blue-50 hover:text-[theme(color.brand.blue)] text-sm xl:text-base text-gray-600 cursor-pointer ${activeLink ===
                              ("link" in subItem ? subItem.link : "#")
                              ? "text-[theme(color.brand.blue)]"
                              : ""
                              }`}
                          >
                            {"label" in subItem
                              ? subItem.label
                              : subItem.heading}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
        </ul>

        {/* Tablet Menu (simplified horizontal) */}
        <div className="hidden md:flex xl:hidden items-center">
          <button
            className="text-gray-700 text-xl p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Actions */}
        <div className="hidden xl:flex items-center gap-3 2xl:gap-4">
          <Link
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1W3Eeyft1hJ_qD6g0x_G9lz_V9RUSlSxsz1G5jorkyssa8WxyvrQap44rv8CFFbGVpzUDHCjCl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#25A8E0] text-white px-3 xl:px-4 py-2 rounded-xl hover:bg-[#057db0] cursor-pointer flex items-center gap-2">
              <span className="text-sm xl:text-base">Talk to Expert</span>
              <FaArrowRight className="w-3 h-3 xl:w-4 xl:h-5" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="hidden md:block xl:hidden px-4 pb-4 border-t">
          <div className="grid grid-cols-2 gap-4 py-4">
            {menuItems.map((item, idx) => (
              <div key={idx} className="relative">
                <div
                  className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-[theme(color.brand.blue)] p-2 rounded-md hover:bg-gray-50"
                  onClick={() =>
                    item.submenu
                      ? toggleTabletSubmenu(idx)
                      : handleLinkClick(item.link, "")
                  }
                >
                  {item.link ? (
                    <Link
                      href={item.link}
                      onClick={() => handleLinkClick(item.link, "")}
                      aria-label={item.label}
                    >
                      <span
                        className={`text-md font-medium ${activeLink === item.link ||
                          activeParent === item.label
                          ? "text-[theme(color.brand.blue)]"
                          : ""
                          }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <span
                      className={`text-md font-medium ${activeParent === item.label
                        ? "text-[theme(color.brand.blue)]"
                        : ""
                        }`}
                    >
                      {item.label}
                    </span>
                  )}
                  {item.submenu && (
                    <MdKeyboardArrowDown
                      className={`transition-transform ${activeTabletSubmenu === idx ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </div>

                {/* Tablet Submenu */}
                {item.submenu && activeTabletSubmenu === idx && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-3 w-80 max-h-96 overflow-y-auto z-[60] mt-1 border">
                    {item.label === "Services" && item.submenu ? (
                      <div className="px-2 space-y-1">
                        {item.submenu.map((column, colIdx) => {
                          if ("label" in column && "link" in column) return null; // Fallback
                          
                          const isActive = activeMobileMegaCategory === colIdx;
                          return (
                            <div key={colIdx} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleMobileMegaCategory(colIdx);
                                }}
                                className={`w-full text-left px-4 py-3 flex items-center justify-between font-semibold text-sm transition-colors ${
                                  isActive ? "text-[theme(color.brand.blue)] bg-blue-50/50" : "text-gray-700 hover:bg-gray-100"
                                }`}
                              >
                                {column.heading}
                                <MdKeyboardArrowDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180 text-[theme(color.brand.blue)]' : 'text-gray-400'}`} />
                              </button>
                              
                              {isActive && (
                                <div className="px-4 py-3 bg-white space-y-1 border-t border-gray-100">
                                  {column.services.map((service, subIdx) => (
                                    <Link
                                      key={subIdx}
                                      href={service.link}
                                      onClick={() => handleLinkClick(service.link, item.label)}
                                    >
                                      <span className={`flex items-center gap-2 min-h-[44px] text-xs text-gray-600 hover:text-[theme(color.brand.blue)] py-2 hover:bg-blue-50/30 px-2 rounded-md transition-colors ${activeLink === service.link ? "text-[theme(color.brand.blue)] font-medium" : ""}`}>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        {service.label}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <ul className="px-2">
                        {item.submenu.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              href={"link" in subItem ? subItem.link : "#"}
                              onClick={() =>
                                handleLinkClick(
                                  "link" in subItem ? subItem.link : "#",
                                  item.label
                                )
                              }
                              aria-label={"label" in subItem ? subItem.label : subItem.heading}
                            >
                              <span
                                className={`flex items-center min-h-[44px] px-3 py-2 hover:bg-blue-50 text-sm text-gray-600 hover:text-[theme(color.brand.blue)] cursor-pointer rounded-md ${activeLink ===
                                  ("link" in subItem ? subItem.link : "#")
                                  ? "text-[theme(color.brand.blue)]"
                                  : ""
                                  }`}
                              >
                                {"label" in subItem
                                  ? subItem.label
                                  : subItem.heading}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1W3Eeyft1hJ_qD6g0x_G9lz_V9RUSlSxsz1G5jorkyssa8WxyvrQap44rv8CFFbGVpzUDHCjCl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick("", "")}
            >
              <button className="bg-[#25A8E0] text-white px-4 py-2 rounded-xl hover:bg-blue-400 flex items-center gap-2">
                <span className="text-sm">Talk to Expert</span>
                <FaArrowRight className="w-3 h-3" />
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-700">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className="hover:text-[theme(color.brand.blue)] cursor-pointer"
              >
                <div
                  className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50"
                  onClick={() =>
                    item.submenu
                      ? toggleSubmenu(idx)
                      : handleLinkClick(item.link, "")
                  }
                >
                  {item.link ? (
                    <Link
                      href={item.link}
                      onClick={() => handleLinkClick(item.link, "")}
                      aria-label={item.label}
                    >
                      <span
                        className={`text-base font-medium ${activeLink === item.link ||
                          activeParent === item.label
                          ? "text-[theme(color.brand.blue)]"
                          : ""
                          }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <span
                      className={`text-base font-medium ${activeParent === item.label
                        ? "text-[theme(color.brand.blue)]"
                        : ""
                        }`}
                    >
                      {item.label}
                    </span>
                  )}
                  {item.submenu && (
                    <MdKeyboardArrowDown
                      className={`transition-transform ${activeSubmenu === idx ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </div>

                {/* Submenu for mobile */}
                {item.submenu && activeSubmenu === idx && (
                  <div className="mt-2 bg-white rounded-xl p-2 max-h-[60vh] overflow-y-auto border border-gray-100 shadow-inner">
                    {item.label === "Services" && item.submenu ? (
                      <div className="space-y-2">
                        {item.submenu.map((column, colIdx) => {
                          if ("label" in column && "link" in column) return null; // Fallback
                          
                          const isActive = activeMobileMegaCategory === colIdx;
                          return (
                            <div key={colIdx} className="rounded-lg border border-gray-100 overflow-hidden shadow-sm bg-gray-50">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleMobileMegaCategory(colIdx);
                                }}
                                className={`w-full text-left px-4 py-3 flex items-center justify-between font-semibold text-[15px] transition-colors ${
                                  isActive ? "bg-blue-50 text-[theme(color.brand.blue)]" : "text-gray-700 hover:bg-gray-100"
                                }`}
                              >
                                {column.heading}
                                <MdKeyboardArrowDown className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'rotate-180 text-[theme(color.brand.blue)]' : 'text-gray-400'}`} />
                              </button>
                              
                              {isActive && (
                                <div className="p-3 bg-white border-t border-gray-100">
                                  {column.services.map((service, subIdx) => (
                                    <Link
                                      key={subIdx}
                                      href={service.link}
                                      onClick={() => handleLinkClick(service.link, item.label)}
                                    >
                                      <span className={`flex items-center gap-2 text-sm text-gray-600 hover:text-[theme(color.brand.blue)] py-2.5 px-3 rounded-md hover:bg-blue-50/50 transition-colors ${activeLink === service.link ? "text-[theme(color.brand.blue)] font-medium bg-blue-50/30" : ""}`}>
                                        <div className="w-1 h-1 rounded-full bg-blue-200"></div>
                                        {service.label}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        {item.submenu.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={"link" in subItem ? subItem.link : "#"}
                            onClick={() =>
                              handleLinkClick(
                                "link" in subItem ? subItem.link : "#",
                                item.label
                              )
                            }
                            aria-label={"label" in subItem ? subItem.label : subItem.heading}
                          >
                            <span
                              className={`block text-sm text-gray-600 hover:text-[theme(color.brand.blue)] p-2 cursor-pointer hover:bg-white rounded-md ${activeLink ===
                                ("link" in subItem ? subItem.link : "#")
                                ? "text-[theme(color.brand.blue)]"
                                : ""
                                }`}
                            >
                              {"label" in subItem
                                ? subItem.label
                                : subItem.heading}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-4 pt-4 border-t">
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1W3Eeyft1hJ_qD6g0x_G9lz_V9RUSlSxsz1G5jorkyssa8WxyvrQap44rv8CFFbGVpzUDHCjCl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick("", "")}
            >
              <button className="bg-[#25A8E0] text-white px-4 py-2 rounded-xl hover:bg-blue-400 flex items-center justify-center gap-2">
                <span className="text-sm">Talk to Expert</span>
                <FaArrowRight className="w-3 h-3" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
