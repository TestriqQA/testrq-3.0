"use client";

import React, { useState, useRef, useEffect, useDeferredValue, useTransition, useCallback } from "react";
import {
  FaSearch,
  FaUsers,
  FaTimes,
  FaUpload,
  FaFileAlt,
  FaTrash,
  FaCheckCircle,
  FaCaretDown,
} from "react-icons/fa";
import { SanityJobOpening } from "@/lib/sanity-data-adapter";
import Link from "next/link";
import JobCardItem from "./JobCardItem";
import { useRecaptchaForm } from "@/lib/recaptcha/useRecaptchaForm";

/** Sentinel value for "no domain experience". Mutually exclusive with the real domains. */
const DOMAIN_NA = "NA";

const CareersOpenPositions: React.FC<{ jobOpenings: SanityJobOpening[] }> = ({ jobOpenings }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [, startTransition] = useTransition();
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<SanityJobOpening | null>(
    null
  );
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDomainDropdown, setShowDomainDropdown] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  // Domain Knowledge is a custom checkbox dropdown, not a native control, so the
  // browser cannot enforce `required` on it — it needs its own error state.
  const [domainError, setDomainError] = useState("");
  const domainDropdownRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [customLocation, setCustomLocation] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentCompany: "",
    currentCTC: "",
    expectedCTC: "",
    skillsToolsFramework: "",
    domainKnowledge: [] as string[],
    experience: "",
    currentRole: "",
    location: "",
    noticePeriod: "",
  });

  const { isSubmitting, submitWithRecaptcha } = useRecaptchaForm({
    action: "career_application",
    onSuccess: () => {
      setShowSuccessMessage(true);
      if (modalContentRef.current) {
        modalContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
      setTimeout(() => {
        handleCloseModal();
      }, 3000);
    },
    onError: (error) => {
      alert(`Application submission failed: ${error || "An unknown error occurred."}`);
    }
  });



  const totalExperienceOptions = [
    "Fresher",
    "1 year",
    "2 years",
    "3 years",
    "4 years",
    "5 years",
    "6 years",
    "7 years",
    "8 years",
    "9 years",
    "10 years",

  ];

  const validatePhoneNumber = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10 || cleanPhone.length > 11) return false;
    const fakePatterns = [
      /^0{10,11}$/,
      /^1{10,11}$/,
      /^2{10,11}$/,
      /^3{10,11}$/,
      /^4{10,11}$/,
      /^5{10,11}$/,
      /^6{10,11}$/,
      /^7{10,11}$/,
      /^8{10,11}$/,
      /^9{10,11}$/,
      /^1234567890$/,
      /^0123456789$/,
      /^(\d)\1{9,10}$/,
    ];
    for (const pattern of fakePatterns) {
      if (pattern.test(cleanPhone)) return false;
    }
    if (cleanPhone.length === 11 && !cleanPhone.startsWith("91")) return false;
    if (cleanPhone.length === 10 && (cleanPhone.startsWith("0") || cleanPhone.startsWith("1"))) return false;
    return true;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        domainDropdownRef.current &&
        !domainDropdownRef.current.contains(event.target as Node)
      ) {
        setShowDomainDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredPositions = (jobOpenings || []).filter((position) => {
    const matchesSearch =
      position.title.toLowerCase().includes(deferredSearchTerm.toLowerCase()) ||
      position.skills.some((skill) =>
        skill.toLowerCase().includes(deferredSearchTerm.toLowerCase())
      );
    return matchesSearch;
  });

  const handleApplyClick = useCallback(
    (position: SanityJobOpening, e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setSelectedPosition(position);
      setShowApplicationModal(true);
      setShowSuccessMessage(false);
      document.body.style.overflow = "hidden";
    },
    []
  );

  const handleToggle = useCallback((id: number) => {
    startTransition(() => {
      setExpandedId((prev) => (prev === id ? null : id));
    });
  }, []);

  const handleCloseModal = () => {
    setShowApplicationModal(false);
    setSelectedPosition(null);
    setResumeFile(null);
    setShowSuccessMessage(false);
    setPhoneError("");
    setDomainError("");
    document.body.style.overflow = "unset";
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      currentCompany: "",
      currentCTC: "",
      expectedCTC: "",
      skillsToolsFramework: "",
      domainKnowledge: [],
      experience: "",
      currentRole: "",
      location: "",
      noticePeriod: "",
    });
    setCustomLocation("");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should not exceed 5MB");
        return;
      }
      if (file.type !== "application/pdf") {
        alert("Please upload a PDF file only");
        return;
      }
      setResumeFile(file);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.phone && !validatePhoneNumber(formData.phone)) {
      setPhoneError("Please enter a valid 10-11 digit phone number");
      return;
    }

    if (formData.location === "Others" && !customLocation.trim()) {
      alert("Please enter your location");
      return;
    }

    // Domain Knowledge is mandatory. The browser cannot enforce this the way it
    // does for the native inputs, because the control is a custom checkbox
    // dropdown — hence the explicit check and inline message. Applicants with no
    // domain experience select "NA".
    if (formData.domainKnowledge.length === 0) {
      setDomainError('Please select at least one domain, or "NA" if none apply');
      domainDropdownRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (!resumeFile) {
      alert("Please upload your resume");
      return;
    }

    await submitWithRecaptcha(async (_, recaptchaToken) => {
      const formDataToSend = new FormData();

      // Append form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "location" && value === "Others") {
          // Capitalize first letter logic
          const formattedLocation = customLocation.trim().charAt(0).toUpperCase() + customLocation.trim().slice(1);
          formDataToSend.append(key, formattedLocation);
        }
        else if (key === "domainKnowledge") {
          formDataToSend.append(key, JSON.stringify(value));
        } else if (value !== null && value !== undefined) {
          formDataToSend.append(key, value.toString());
        }
      });

      // Append resume file
      formDataToSend.append("resume", resumeFile);

      // Append position details
      if (selectedPosition) {
        formDataToSend.append("jobTitle", selectedPosition.title);
        formDataToSend.append("jobId", selectedPosition.id.toString());
      }

      // Append reCAPTCHA token
      formDataToSend.append("recaptchaToken", recaptchaToken);

      const response = await fetch("/api/apply-job", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "An unknown server error occurred.");
      }

      return response.json();
    }, formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setPhoneError("");
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDomainKnowledgeChange = (option: string) => {
    const selected = formData.domainKnowledge;
    const isSelected = selected.includes(option);

    // "NA" is mutually exclusive with the real domains — "NA, Banking" would
    // contradict itself. Picking NA clears everything else; picking any real
    // domain clears NA.
    let next: string[];
    if (option === DOMAIN_NA) {
      next = isSelected ? [] : [DOMAIN_NA];
    } else if (isSelected) {
      next = selected.filter((item) => item !== option);
    } else {
      next = [...selected.filter((item) => item !== DOMAIN_NA), option];
    }

    setFormData((prev) => ({ ...prev, domainKnowledge: next }));
    if (next.length > 0) setDomainError("");
  };



  const domainKnowledgeOptions = [
    "Trading",
    "Capital Markets",
    "HR",
    "Investment",
    "Insurance",
    "BFSI",
    "Banking",
    "Ecommerce",
    "Healthcare",
    "CRM",
    "LegalTech",
    "Gaming",
    "Advertising, Media, Social Media",
    "Project Management",
    "AI",
    "Finance",
    "ELearning",
    "Hospitality, Hotel, Resturant",
    "Travel",
    "Telecom",
    "Real Estate",
    "SalesForce",
    // Kept last, and handled as an exclusive choice in
    // handleDomainKnowledgeChange: domain knowledge is now mandatory, so
    // applicants with none still need a way to submit the form.
    "NA",
  ];

  const noticePeriodOptions = [
    "Immediate",
    "7 Days",
    "15 Days",
    "30 Days",
    "60 Days",
    "90 Days",
  ];

  return (
    <>
      <style jsx global>{`
        .job-description {
          line-height: 1.7;
        }

        .job-description h1,
        .job-description h2,
        .job-description h3,
        .job-description h4,
        .job-description h5,
        .job-description h6 {
          font-weight: 700 !important;
          color: #1f2937 !important;
          margin-top: 2rem !important;
          margin-bottom: 1rem !important;
        }

        /* Adjusted font sizes for job description headings */
        .job-description h1 {
          font-size: 1.875rem !important; /* 30px */
        }

        .job-description h2 {
          font-size: 1.5rem !important; /* 24px */
        }

        .job-description h3 {
          font-size: 1.25rem !important; /* 20px */
        }

        .job-description h4 {
          font-size: 1.125rem !important; /* 18px */
        }

        .job-description p {
          margin-bottom: 1rem !important;
          color: #4b5563 !important;
        }

        .job-description ul,
        .job-description ol {
          margin-bottom: 1.5rem !important;
          padding-left: 1.5rem !important;
          color: #4b5563 !important;
          list-style-type: disc; /* Ensure bullet points */
        }

        .job-description li {
          margin-bottom: 0.5rem !important;
          color: #4b5563 !important;
        }

        .job-description strong {
          font-weight: 600 !important;
          color: #1f2937 !important;
        }

        .job-description hr {
          margin: 2rem 0 !important;
          border-color: #e5e7eb !important;
        }

        .job-description code {
          background-color: #f3f4f6 !important;
          padding: 0.125rem 0.25rem !important;
          border-radius: 0.25rem !important;
          font-size: 0.875rem !important;
          color: #1f2937 !important;
        }

        .job-description blockquote {
          border-left: 4px solid #3b82f6 !important;
          padding-left: 1rem !important;
          margin: 1.5rem 0 !important;
          font-style: italic !important;
          color: #4b5563 !important;
        }

        .job-description table {
          width: 100% !important;
          border-collapse: collapse !important;
          margin: 1.5rem 0 !important;
        }

        .job-description th,
        .job-description td {
          padding: 0.75rem !important;
          border: 1px solid #d1d5db !important;
          text-align: left !important;
        }

        .job-description th {
          background-color: #f9fafb !important;
          font-weight: 600 !important;
        }

        .job-description > :first-child {
          margin-top: 0 !important;
        }

        .job-description h1 + p,
        .job-description h2 + p,
        .job-description h3 + p,
        .job-description h4 + p,
        .job-description h5 + p,
        .job-description h6 + p {
          margin-top: 0.5rem !important;
        }

        /* Modal scrollbar styling */
        .modal-content::-webkit-scrollbar {
          width: 6px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* Success animation */
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .success-message {
          animation: slideInFromTop 0.3s ease-out;
        }

        /* Centered success message overlay */
        .success-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 30;
          border-radius: 1rem;
        }

        /* Mobile modal improvements */
        @media (max-width: 768px) {
          .modal-content {
            margin: 0.5rem;
            max-height: calc(100vh - 1rem);
          }
        }
      `}</style>

      <section
        className="py-12 sm:py-16 bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24"
        id="open-positions-section"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-4 py-2 sm:px-6 sm:py-2 mb-4 sm:mb-6">
              <FaUsers className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              <span className="text-xs sm:text-sm font-medium text-white">
                Open Positions
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Find Your Perfect
              <span className="block text-[theme(color.brand.blue)]">
                QA Role
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Explore exciting opportunities to grow your{" "}
              <Link href="/blog/post/is-qa-a-good-career-software-tester" className="text-brand-blue underline">
                career in software testing
              </Link>
              . We&apos;re hiring passionate QA professionals in
              <Link href="/automation-testing-services" className="text-brand-blue underline"> automation testing</Link>, <Link href="/manual-testing-services" className="text-brand-blue underline">manual testing</Link>, <Link href="/performance-testing-services" className="text-brand-blue underline">performance testing</Link>, and
              <Link href="/security-testing" className="text-brand-blue underline"> security testing</Link> to join our world-class quality assurance team.
            </p>
          </div>

          {/* Search and Filters - Mobile optimized */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
              {/* Search */}
              <div className="md:col-span-2">
                <label htmlFor="careers-search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Positions
                </label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                  <input
                    id="careers-search"
                    type="search"
                    name="search"
                    autoComplete="off"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title, skills, or keywords..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-semibold">
                  {filteredPositions.length}
                </span>{" "}
                positions
              </p>
            </div>
          </div>

          {/* Job Listings - Mobile optimized */}
          <div className="space-y-4 sm:space-y-6">
            {filteredPositions.map((position) => (
              <JobCardItem
                key={position.id}
                position={position}
                isExpanded={expandedId === position.id}
                onToggle={handleToggle}
                onApply={handleApplyClick}
              />
            ))}

            {filteredPositions.length === 0 && (
              <div className="text-center py-12 sm:py-16">
                <FaSearch className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  No positions found
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  No positions found matching your search criteria.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Application Modal - Fully mobile optimized */}
        {showApplicationModal && selectedPosition && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-start justify-center z-50 p-2 sm:p-4 overflow-y-auto">
            <div
              ref={modalContentRef}
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl w-full max-w-4xl my-2 sm:my-4 relative modal-content max-h-[calc(100vh-1rem)] sm:max-h-[calc(100vh-2rem)] overflow-y-auto"
            >
              {/* Centered Success Message Overlay */}
              {showSuccessMessage && (
                <div className="success-overlay">
                  <div className="success-message bg-white rounded-xl p-6 sm:p-8 shadow-2xl max-w-sm mx-4">
                    <div className="text-center">
                      <FaCheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">Application Submitted Successfully!</h3>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base">We&apos;ll get back to you soon. This window will close automatically.</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="p-4 sm:p-6 lg:p-8">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 z-20 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 touch-manipulation"
                >
                  <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 pr-8">
                  Apply for {selectedPosition.title}
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base">
                  Fill out the form below to submit your application.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                  {/* Mobile-first responsive grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Column 1: Personal Info & Resume Upload */}
                    <div className="space-y-4">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                        Personal Information
                      </h4>
                      <div>
                        <label htmlFor="careers-fullName" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          id="careers-fullName"
                          type="text"
                          name="fullName"
                          autoComplete="name"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="careers-email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          id="careers-email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          inputMode="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="john.doe@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="careers-phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          id="careers-phone"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          aria-invalid={!!phoneError}
                          aria-describedby={phoneError ? "careers-phone-error" : undefined}
                          className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${phoneError ? "border-red-500" : "border-gray-300"
                            }`}
                          placeholder="+91 9876543210 or 9876543210"
                        />
                        {phoneError && (
                          <p id="careers-phone-error" role="alert" className="text-red-500 text-sm mt-1">{phoneError}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="careers-location" className="block text-sm font-medium text-gray-700 mb-2">
                          Location *
                        </label>
                        <select
                          id="careers-location"
                          name="location"
                          autoComplete="address-level2"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          required
                        >
                          <option value="">Select Location</option>
                          <option value="Western Mumbai">Western Mumbai</option>
                          <option value="Central Mumbai">Central Mumbai</option>
                          <option value="Harbour Mumbai">Harbour Mumbai</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Chennai">Chennai</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Kolkata">Kolkata</option>
                          <option value="Noida">Noida</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="Aurangabad">Aurangabad</option>
                          <option value="Jaipur">Jaipur</option>
                          <option value="Surat">Surat</option>
                          <option value="Lucknow">Lucknow</option>
                          <option value="Pune">Pune</option>
                          <option value="Nashik">Nashik</option>
                          <option value="Nagpur">Nagpur</option>
                          <option value="Gurgaon">Gurgaon</option>
                          <option value="Indore">Indore</option>
                          <option value="Bhubaneswar">Bhubaneswar</option>
                          <option value="Bhopal">Bhopal</option>
                          <option value="Ranchi">Ranchi</option>
                          <option value="Kochi">Kochi</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Others">Others</option>
                        </select>
                        {formData.location === "Others" && (
                          <div className="mt-2">
                            <label htmlFor="careers-customLocation" className="sr-only">
                              Custom location
                            </label>
                            <input
                              id="careers-customLocation"
                              type="text"
                              name="customLocation"
                              autoComplete="address-level2"
                              value={customLocation}
                              onChange={(e) => setCustomLocation(e.target.value)}
                              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                              placeholder="Enter your location"
                              required
                            />
                          </div>
                        )}
                      </div>
                      {/* Skills and Tools - Full width */}
                      <div>
                        <label htmlFor="careers-skillsToolsFramework" className="block text-sm font-medium text-gray-700 mb-2">
                          Skills, Tools & Frameworks *
                        </label>
                        <textarea
                          id="careers-skillsToolsFramework"
                          name="skillsToolsFramework"
                          autoComplete="off"
                          value={formData.skillsToolsFramework}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="List your technical skills, testing tools, frameworks, programming languages, etc."
                          required
                        />
                      </div>

                    </div>

                    {/* Column 2: Professional Info */}
                    <div className="space-y-4">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                        Professional Information
                      </h4>
                      <div>
                        <label htmlFor="careers-experience" className="block text-sm font-medium text-gray-700 mb-2">
                          Total Experience *
                        </label>
                        <select
                          id="careers-experience"
                          name="experience"
                          autoComplete="off"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          required
                        >
                          <option value="">Select experience level</option>
                          {totalExperienceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="careers-currentCTC" className="block text-sm font-medium text-gray-700 mb-2">
                            Current CTC
                          </label>
                          <input
                            id="careers-currentCTC"
                            type="text"
                            name="currentCTC"
                            autoComplete="off"
                            value={formData.currentCTC}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                            placeholder="e.g., 8 LPA"
                          />
                        </div>
                        <div>
                          <label htmlFor="careers-expectedCTC" className="block text-sm font-medium text-gray-700 mb-2">
                            Expected CTC
                          </label>
                          <input
                            id="careers-expectedCTC"
                            type="text"
                            name="expectedCTC"
                            autoComplete="off"
                            value={formData.expectedCTC}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                            placeholder="e.g., 12 LPA"
                          />
                        </div>
                      </div>

                      {/* Notice Period */}
                      <div>
                        <label htmlFor="careers-noticePeriod" className="block text-sm font-medium text-gray-700 mb-2">
                          Notice Period <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <select
                          id="careers-noticePeriod"
                          name="noticePeriod"
                          autoComplete="off"
                          required
                          value={formData.noticePeriod}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        >
                          <option value="">Select Notice Period</option>
                          {noticePeriodOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Domain Knowledge - Mobile optimized dropdown */}
                      <div ref={domainDropdownRef}>
                        <span id="careers-domainKnowledge-label" className="block text-sm font-medium text-gray-700 mb-2">
                          Domain Knowledge <span className="text-red-500" aria-hidden="true">*</span>
                        </span>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setShowDomainDropdown(!showDomainDropdown)}
                            aria-haspopup="listbox"
                            aria-expanded={showDomainDropdown}
                            aria-labelledby="careers-domainKnowledge-label"
                            aria-required="true"
                            aria-invalid={!!domainError}
                            aria-describedby={domainError ? "careers-domainKnowledge-error" : undefined}
                            className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-left flex items-center justify-between text-sm sm:text-base min-h-[44px] touch-manipulation ${domainError ? "border-red-500" : "border-gray-300"}`}
                          >
                            <span className="text-gray-500">
                              {formData.domainKnowledge.length > 0
                                ? `${formData.domainKnowledge.length} selected`
                                : "Select domains"}
                            </span>
                            <FaCaretDown className="w-4 h-4 text-gray-400" aria-hidden="true" />
                          </button>

                          {showDomainDropdown && (
                            <div role="listbox" aria-multiselectable="true" aria-labelledby="careers-domainKnowledge-label" className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                              {domainKnowledgeOptions.map((option, idx) => {
                                const checkboxId = `careers-domainKnowledge-${idx}`;
                                return (
                                  <div
                                    key={option}
                                    className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm touch-manipulation"
                                  >
                                    <input
                                      id={checkboxId}
                                      type="checkbox"
                                      checked={formData.domainKnowledge.includes(option)}
                                      onChange={() => handleDomainKnowledgeChange(option)}
                                      className="mr-2 rounded"
                                    />
                                    <label htmlFor={checkboxId} className="flex-1 cursor-pointer">
                                      {option}
                                    </label>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>

                        {domainError && (
                          <p id="careers-domainKnowledge-error" role="alert" className="text-red-500 text-sm mt-1">
                            {domainError}
                          </p>
                        )}

                        {formData.domainKnowledge.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {formData.domainKnowledge.map((domain) => (
                              <span
                                key={domain}
                                className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                              >
                                {domain}
                                <button
                                  type="button"
                                  onClick={() => handleDomainKnowledgeChange(domain)}
                                  className="ml-1 text-blue-600 hover:text-blue-800"
                                >
                                  <FaTimes className="w-3 h-3" />
                                </button>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      {/* Resume Upload - Mobile optimized */}
                      <div>
                        <label htmlFor="resume-upload-input" className="block text-sm font-medium text-gray-700 mb-2">
                          Resume/CV * (PDF only, max 5MB)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 sm:p-6 text-center hover:border-blue-400 transition-colors duration-300 cursor-pointer" onClick={() => document.getElementById('resume-upload-input')?.click()}>
                          {resumeFile ? (
                            <div className="flex items-center justify-between bg-green-50 p-2 rounded-lg">
                              <div className="flex items-center gap-2">
                                <FaFileAlt className="w-2 h-2 text-green-600" aria-hidden="true" />
                                <span className="text-sm text-green-700 font-medium truncate">
                                  {resumeFile.name}
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); setResumeFile(null); }}
                                aria-label="Remove uploaded resume"
                                className="ml-1 text-red-500 hover:text-red-700 p-1"
                              >
                                <FaTrash className="w-3 h-3" aria-hidden="true" />
                              </button>
                            </div>
                          ) : (
                            <div>
                              <FaUpload className="w-4 h-4 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-2 sm:mb-4" aria-hidden="true" />
                              <p className="text-gray-600 mb-2 text-sm sm:text-base">
                                Click to upload or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">PDF files only (max 5MB)</p>
                            </div>
                          )}
                          <input
                            id="resume-upload-input"
                            name="resume"
                            type="file"
                            accept=".pdf"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                        </div>
                      </div>
                    </div>
                  </div>





                  {/* Submit Button - Mobile optimized */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-[theme(color.brand.blue)] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base min-h-[48px] touch-manipulation"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-6 py-3 sm:px-8 sm:py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base min-h-[48px] touch-manipulation"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CareersOpenPositions;

