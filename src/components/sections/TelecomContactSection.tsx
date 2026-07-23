"use client";

import React, { useState } from "react";
import {
  FaRocket,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
  FaSignal,
  FaUser,
  FaBuilding,
  FaComments,
  FaClipboardList,
} from "react-icons/fa";
import PhoneInput from "@/components/ui/PhoneInput";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useRecaptchaForm } from "@/lib/recaptcha/useRecaptchaForm";

const TelecomContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    businessPhone: "",
    companyOrganization: "",
    testingRequirements: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [companyOrganizationError, setCompanyOrganizationError] = useState<string | null>(null);
  const [testingRequirementsError, setTestingRequirementsError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const { isSubmitting, submitWithRecaptcha } = useRecaptchaForm({
    action: 'telecom_contact',
    onSuccess: () => {
      setIsSubmitted(true);
      document.getElementById("telecom-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({
        fullName: "",
        businessEmail: "",
        businessPhone: "",
        companyOrganization: "",
        testingRequirements: "",
        message: "",
      });
    },
    onError: (error) => {
      console.error("Form submission failed:", error);
      alert(error || "Failed");
    },
  });

  const validatePhoneNumber = (phone: string | undefined) => {
    if (!phone) {
      setPhoneError("Business Phone is required.");
      return false;
    }
    if (!isValidPhoneNumber(phone)) {
      setPhoneError("Invalid phone number format.");
      return false;
    }

    const digits = phone.replace(/\D/g, "");

    if (/^(\d)\1+$/.test(digits)) {
      setPhoneError("Phone number cannot consist of repeating digits.");
      return false;
    }

    const isSequential = (num: string) => {
      for (let i = 0; i < num.length - 5; i++) {
        const n = num.split("").map(Number);
        if (
          (n[i + 1] === n[i] + 1 &&
            n[i + 2] === n[i + 1] + 1 &&
            n[i + 3] === n[i + 2] + 1 &&
            n[i + 4] === n[i + 3] + 1 &&
            n[i + 5] === n[i + 4] + 1) ||
          (n[i + 1] === n[i] - 1 &&
            n[i + 2] === n[i + 1] - 1 &&
            n[i + 3] === n[i + 2] - 1 &&
            n[i + 4] === n[i + 3] - 1 &&
            n[i + 5] === n[i + 4] - 1)
        ) {
          return true;
        }
      }
      return false;
    };
    if (isSequential(digits)) {
      setPhoneError("Phone number cannot consist of sequential digits.");
      return false;
    }

    if (/^0+$/.test(digits)) {
      setPhoneError("Phone number cannot be all zeros.");
      return false;
    }

    setPhoneError(null);
    return true;
  };

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError("Business Email is required.");
      return false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Invalid email format.");
      return false;
    }
    setEmailError(null);
    return true;
  };

  const validateFullName = (name: string) => {
    if (!name) {
      setFullNameError("Full Name is required.");
      return false;
    }
    if (name.trim().length < 3) {
      setFullNameError("Full Name must be at least 3 characters.");
      return false;
    }
    setFullNameError(null);
    return true;
  };

  const validateCompanyOrganization = (companyOrganization: string) => {
    if (!companyOrganization) {
      setCompanyOrganizationError("Company/Organization is required.");
      return false;
    }
    setCompanyOrganizationError(null);
    return true;
  };

  const validateTestingRequirements = (testingRequirements: string) => {
    if (!testingRequirements) {
      setTestingRequirementsError("Please select your testing requirements.");
      return false;
    }
    setTestingRequirementsError(null);
    return true;
  };

  const validateMessage = (message: string) => {
    if (!message) {
      setMessageError("Message is required.");
      return false;
    }
    if (message.trim().length < 10) {
      setMessageError("Message must be at least 10 characters.");
      return false;
    }
    setMessageError(null);
    return true;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "fullName") validateFullName(value);
    if (name === "businessEmail") validateEmail(value);
    if (name === "companyOrganization") validateCompanyOrganization(value);
    if (name === "testingRequirements") validateTestingRequirements(value);
    if (name === "message") validateMessage(value);
  };

  const handlePhoneChange = (phone: string | undefined) => {
    setFormData((prev) => ({
      ...prev,
      businessPhone: phone || "",
    }));
    validatePhoneNumber(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isPhoneValid = validatePhoneNumber(formData.businessPhone);
    const isEmailValid = validateEmail(formData.businessEmail);
    const isFullNameValid = validateFullName(formData.fullName);
    const isCompanyOrganizationValid = validateCompanyOrganization(formData.companyOrganization);
    const isTestingRequirementsValid = validateTestingRequirements(formData.testingRequirements);
    const isMessageValid = validateMessage(formData.message);

    if (
      isPhoneValid &&
      isEmailValid &&
      isFullNameValid &&
      isCompanyOrganizationValid &&
      isTestingRequirementsValid &&
      isMessageValid
    ) {
      await submitWithRecaptcha(async (data, recaptchaToken) => {
        const response = await fetch("/api/telecomContact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            recaptchaToken,
            source: "Telecom Testing Services",
          }),
        });
        if (!response.ok) throw new Error("Failed");
        return response.json();
      }, formData);
    } else {
      console.log("Form has errors.");
    }
  };

  const contactMethods = [
    {
      icon: FaPhone,
      title: "Speak with Telecom Experts",
      description: "Speak directly with our telecom software QA specialists",
      text: "(+91) 915-2929-343",
      action: "tel:(+91) 915-2929-343",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: FaEnvelope,
      title: "Detailed Telecom Assessment",
      description: "Get detailed responses to your telecom software testing needs",
      text: "contact@testriq.com",
      action: "mailto:contact@testriq.com",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FaCalendarAlt,
      title: "Telecom Strategy Session",
      description: "Book a tailored telecom software quality assessment",
      text: "Schedule Free Consultation",
      action: "https://calendar.app.google/uUHn8prcXbdqcvVb6",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const benefits = [
    "Free telecom software assessment",
    "Telecom software expertise",
    "Network performance optimization",
    "OSS/BSS testing recommendations",
    "Customer portal & app testing",
    "Regulatory compliance guidance",
  ];

  const scrollToCalendly = () => {
    const element = document.getElementById("calendly-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-brand-blue to-sky-600 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <FaSignal className="w-4 h-4" />
            <span className="text-sm font-medium">
              Elevate Your Telecom Software Quality
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:leading-14">
            Ready to Elevate Your
            <span className="block">Telecom Software Quality?</span>
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Connect with our telecom software QA experts to address platform
            performance, application reliability, integration challenges, and
            ensure your OSS/BSS systems, customer portals, and billing platforms
            deliver flawless user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              Choose Your Preferred Contact Method
            </h3>

            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                onClick={(e) => {
                  if (method.title === "Telecom Strategy Session") {
                    e.preventDefault();
                    scrollToCalendly();
                  }
                }}
                className="block bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-brand-blue mb-2">
                      {method.title}
                    </h4>
                    <p className="text-blue-600 text-sm mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <span className="text-blue-600 font-semibold flex items-center gap-2 group">
                      {method.text}
                    </span>
                  </div>
                </div>
              </a>
            ))}

            {/* Benefits */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">
                What You Get When You Contact Us
              </h3>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-blue-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency Note */}
            <div className="bg-orange-700 bg-opacity-20 rounded-2xl p-6 border border-orange-400 border-opacity-30">
              <div className="flex items-center gap-3 mb-3">
                <FaRocket className="w-5 h-5 text-orange-300" />
                <h4 className="font-semibold text-white">
                  New Product Launch Imminent?
                </h4>
              </div>
              <p className="text-orange-100 text-sm leading-relaxed">
                Planning for a new telecom product launch or system upgrade?
                Contact us at least 6-8 weeks in advance to ensure your software
                is thoroughly tested, stable, and ready for deployment.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div id="telecom-form-section" className="bg-white rounded-3xl lg:p-8 md:p-8 sm:p-2 shadow-2xl md:mt-16 sm:mt-2">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Quick Telecom Software Assessment Form
              </h4>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="telecom-fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="telecom-fullName"
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onBlur={() => validateFullName(formData.fullName)}
                        required
                        aria-invalid={!!fullNameError}
                        aria-describedby={fullNameError ? "telecom-fullName-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${fullNameError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Your Name"
                      />
                    </div>
                    {fullNameError && <p id="telecom-fullName-error" role="alert" className="text-red-500 text-xs mt-1">{fullNameError}</p>}
                  </div>

                  <div>
                    <label htmlFor="telecom-businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="telecom-businessEmail"
                        type="email"
                        name="businessEmail"
                        autoComplete="email"
                        inputMode="email"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        onBlur={() => validateEmail(formData.businessEmail)}
                        required
                        aria-invalid={!!emailError}
                        aria-describedby={emailError ? "telecom-businessEmail-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${emailError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Email Address"
                      />
                    </div>
                    {emailError && <p id="telecom-businessEmail-error" role="alert" className="text-red-500 text-xs mt-1">{emailError}</p>}
                  </div>

                  <div>
                    <label htmlFor="telecom-businessPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Phone *
                    </label>
                    <div className="relative">
                      <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry="IN"
                        value={formData.businessPhone}
                        onChange={handlePhoneChange}
                        onBlur={() => validatePhoneNumber(formData.businessPhone)}
                        className={`w-full border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${phoneError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Phone Number"
                        numberInputProps={{
                          id: "telecom-businessPhone",
                          autoComplete: "tel",
                          "aria-invalid": !!phoneError,
                          "aria-describedby": phoneError ? "telecom-businessPhone-error" : undefined,
                        }}
                      />
                    </div>
                    {phoneError && <p id="telecom-businessPhone-error" role="alert" className="text-red-500 text-xs mt-1">{phoneError}</p>}
                  </div>

                  <div>
                    <label htmlFor="telecom-companyOrganization" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization *
                    </label>
                    <div className="relative">
                      <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="telecom-companyOrganization"
                        type="text"
                        name="companyOrganization"
                        autoComplete="organization"
                        value={formData.companyOrganization}
                        onChange={handleInputChange}
                        onBlur={() => validateCompanyOrganization(formData.companyOrganization)}
                        required
                        aria-invalid={!!companyOrganizationError}
                        aria-describedby={companyOrganizationError ? "telecom-companyOrganization-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${companyOrganizationError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Your Telecom Company"
                      />
                    </div>
                    {companyOrganizationError && <p id="telecom-companyOrganization-error" role="alert" className="text-red-500 text-xs mt-1">{companyOrganizationError}</p>}
                  </div>

                  <div>
                    <label htmlFor="telecom-testingRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                      Testing Requirements *
                    </label>
                    <div className="relative">
                      <FaClipboardList className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" aria-hidden="true" />
                      <select
                        id="telecom-testingRequirements"
                        name="testingRequirements"
                        autoComplete="off"
                        value={formData.testingRequirements}
                        onChange={handleInputChange}
                        onBlur={() => validateTestingRequirements(formData.testingRequirements)}
                        required
                        aria-invalid={!!testingRequirementsError}
                        aria-describedby={testingRequirementsError ? "telecom-testingRequirements-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 appearance-none ${testingRequirementsError ? 'border-red-500' : 'border-gray-200'}`}
                      >
                        <option value="">Select your primary need</option>
                        <option value="oss-bss-testing">OSS/BSS Testing</option>
                        <option value="billing-platform-validation">Billing Platform Validation</option>
                        <option value="customer-portal-app-testing">Customer Portal & App Testing</option>
                        <option value="api-integration-testing">API & Integration Testing</option>
                        <option value="performance-load-testing">Performance & Load Testing</option>
                        <option value="security-compliance-testing">Security & Compliance Testing</option>
                        <option value="comprehensive-software-qa">Comprehensive Software QA</option>
                      </select>
                    </div>
                    {testingRequirementsError && <p id="telecom-testingRequirements-error" role="alert" className="text-red-500 text-xs mt-1">{testingRequirementsError}</p>}
                  </div>

                  <div>
                    <label htmlFor="telecom-message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <FaComments className="absolute left-3 top-3 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <textarea
                        id="telecom-message"
                        name="message"
                        autoComplete="off"
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={() => validateMessage(formData.message)}
                        required
                        rows={4}
                        aria-invalid={!!messageError}
                        aria-describedby={messageError ? "telecom-message-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 resize-none ${messageError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Please describe your telecom software testing requirements, performance goals, and any specific platforms you are working with..."
                      />
                    </div>
                    {messageError && <p id="telecom-message-error" role="alert" className="text-red-500 text-xs mt-1">{messageError}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-blue to-sky-600 text-white py-3 px-6 rounded-xl font-semibold hover:scale-98 transition-all duration-200 ease-in-out flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaRocket className="w-4 h-4" />
                        Get Free Telecom Assessment
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>
                Telecom testing experts • Response within 2 hours during
                business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomContactSection;

