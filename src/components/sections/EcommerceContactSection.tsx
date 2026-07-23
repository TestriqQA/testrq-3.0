"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaRocket,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
  FaShoppingCart,
  FaUser,
  FaBuilding,
  FaComments,
} from "react-icons/fa";
import PhoneInput from "@/components/ui/PhoneInput";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useRecaptchaForm } from "@/lib/recaptcha/useRecaptchaForm";

const EcommerceContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    businessPhone: "",
    companyName: "",
    platform: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [companyNameError, setCompanyNameError] = useState<string | null>(null);
  const [platformError, setPlatformError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const { isSubmitting, submitWithRecaptcha } = useRecaptchaForm({
    action: 'ecommerce_contact',
    onSuccess: () => {
      setIsSubmitted(true);
      document.getElementById("ecommerce-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({
        fullName: "",
        businessEmail: "",
        businessPhone: "",
        companyName: "",
        platform: "",
        message: "",
      });
    },
    onError: (error) => {
      console.error("Form submission failed:", error);
      alert(error || "Form submission failed. Please try again.");
    }
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

  const validateCompanyName = (name: string) => {
    if (!name) {
      setCompanyNameError("Company Name is required.");
      return false;
    }
    setCompanyNameError(null);
    return true;
  };

  const validatePlatform = (platform: string) => {
    if (!platform) {
      setPlatformError("Please select your platform.");
      return false;
    }
    setPlatformError(null);
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
    if (name === "companyName") validateCompanyName(value);
    if (name === "platform") validatePlatform(value);
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
    const isCompanyNameValid = validateCompanyName(formData.companyName);
    const isPlatformValid = validatePlatform(formData.platform);
    const isMessageValid = validateMessage(formData.message);

    if (
      isPhoneValid &&
      isEmailValid &&
      isFullNameValid &&
      isCompanyNameValid &&
      isPlatformValid &&
      isMessageValid
    ) {
      await submitWithRecaptcha(
        async (data, recaptchaToken) => {
          const dataToSend = {
            ...data,
            recaptchaToken,
            companyStage: "e-commerce",
            howDidYouHear: "e-commerce-testing-services",
            source: "E-commerce Testing Services Page",
          };

          const response = await fetch("/api/eCommerceContact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Form submission failed. Please try again.");
          }

          return response.json();
        },
        formData
      );
    } else {
      console.log("Form has errors.");
    }
  };

  const contactMethods = [
    {
      icon: FaPhone,
      title: "Call Our E-Commerce Experts",
      description: "Speak directly with our e-commerce testing specialists",
      text: "(+91) 915-2929-343",
      action: "tel: (+91) 915-2929-343",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FaEnvelope,
      title: "Email for Detailed Inquiry",
      description: "Send us your requirements for a comprehensive proposal",
      text: "contact@testriq.com",
      action: "mailto:contact@testriq.com",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: FaCalendarAlt,
      title: "Schedule Strategy Session",
      description: "Book a free consultation to discuss your testing needs",
      text: "Schedule Free Consultation",
      action: "https://calendar.app.google/uUHn8prcXbdqcvVb6",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const benefits = [
    "Free e-commerce platform assessment",
    "Custom testing strategy development",
    "ROI projections and timeline",
    "Platform-specific recommendations",
    "Dedicated project manager",
    "24/7 support during critical periods",
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-brand-blue to-sky-600 overflow-hidden">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-brand-blue bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <FaShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Get Started Today</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:leading-14">
            Maximize Conversions & Secure Your
            <span className="block">Global Revenue in 2026</span>
          </h2>

          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Take the first step towards a <span className="font-semibold">&quot;Conversion-First&quot;</span> strategy. Our e-commerce testing experts are ready to ensure your platform is PCI DSS 4.0 compliant, scalable for Black Friday surges, and successful globally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              Choose Your Preferred Contact Method
            </h3>

            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
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
                    <p className="text-sky-700 text-sm mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <Link
                      href={method.action} target={"_blank"}
                      className="text-sky-700 font-semibold flex items-center gap-2 group"
                    >
                      {method.text}
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What You Get When You Contact Us
              </h3>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-700 bg-opacity-20 rounded-2xl p-6 border border-orange-400 border-opacity-30">
              <div className="flex items-center gap-3 mb-3">
                <FaRocket className="w-5 h-5 text-orange-300" />
                <h4 className="font-semibold text-white">
                  Peak Season Coming?
                </h4>
              </div>
              <p className="text-orange-100 text-sm leading-relaxed">
                Planning for Black Friday, holiday sales, or major product
                launches? Contact us at least 6-8 weeks in advance to ensure
                your platform is ready.
              </p>
            </div>
          </div>

          <div
            id="ecommerce-form-section"
            className="bg-white rounded-3xl lg:p-8 md:p-8 sm:p-2 shadow-2xl md:mt-16 sm:mt-2"
          >
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Quick Contact Form
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
                    <label htmlFor="ecommerce-fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="ecommerce-fullName"
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onBlur={() => validateFullName(formData.fullName)}
                        required
                        aria-invalid={!!fullNameError}
                        aria-describedby={fullNameError ? "ecommerce-fullName-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${fullNameError ? "border-red-500" : "border-gray-200"
                          }`}
                        placeholder="Your Name"
                      />
                    </div>
                    {fullNameError && (
                      <p id="ecommerce-fullName-error" role="alert" className="text-red-500 text-xs mt-1">
                        {fullNameError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="ecommerce-businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="ecommerce-businessEmail"
                        type="email"
                        name="businessEmail"
                        autoComplete="email"
                        inputMode="email"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        onBlur={() => validateEmail(formData.businessEmail)}
                        required
                        aria-invalid={!!emailError}
                        aria-describedby={emailError ? "ecommerce-businessEmail-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${emailError ? "border-red-500" : "border-gray-200"
                          }`}
                        placeholder="Email Address"
                      />
                    </div>
                    {emailError && (
                      <p id="ecommerce-businessEmail-error" role="alert" className="text-red-500 text-xs mt-1">{emailError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="ecommerce-businessPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Phone *
                    </label>
                    <div className="relative">
                      <PhoneInput
                        international
                        value={formData.businessPhone}
                        onChange={handlePhoneChange}
                        onBlur={() =>
                          validatePhoneNumber(formData.businessPhone)
                        }
                        className={`w-full phone-input-container ${phoneError ? "border-red-500" : "border-gray-200"
                          }`}
                        placeholder="Enter phone number"
                        numberInputProps={{
                          id: "ecommerce-businessPhone",
                          autoComplete: "tel",
                          "aria-invalid": !!phoneError,
                          "aria-describedby": phoneError ? "ecommerce-businessPhone-error" : undefined,
                          className: "w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300",
                        }}
                      />
                    </div>
                    {phoneError && (
                      <p id="ecommerce-businessPhone-error" role="alert" className="text-red-500 text-xs mt-1">{phoneError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="ecommerce-companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="ecommerce-companyName"
                        type="text"
                        placeholder="Company Name"
                        name="companyName"
                        autoComplete="organization"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        onBlur={() => validateCompanyName(formData.companyName)}
                        required
                        aria-invalid={!!companyNameError}
                        aria-describedby={companyNameError ? "ecommerce-companyName-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${companyNameError
                          ? "border-red-500"
                          : "border-gray-200"
                          }`}
                      />
                    </div>
                    {companyNameError && (
                      <p id="ecommerce-companyName-error" role="alert" className="text-red-500 text-xs mt-1">
                        {companyNameError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="ecommerce-platform" className="block text-sm font-medium text-gray-700 mb-2">
                      Select Your Platform *
                    </label>
                    <div className="relative">
                      <FaShoppingCart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" aria-hidden="true" />
                      <select
                        id="ecommerce-platform"
                        name="platform"
                        autoComplete="off"
                        value={formData.platform}
                        onChange={handleInputChange}
                        onBlur={() => validatePlatform(formData.platform)}
                        required
                        aria-invalid={!!platformError}
                        aria-describedby={platformError ? "ecommerce-platform-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${platformError ? "border-red-500" : "border-gray-200"
                          }`}
                      >
                        <option value="">Select Your Platform</option>
                        <option value="shopify">Shopify</option>
                        <option value="woocommerce">WooCommerce</option>
                        <option value="magento">Magento</option>
                        <option value="bigcommerce">BigCommerce</option>
                        <option value="custom">Custom Platform</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {platformError && (
                      <p id="ecommerce-platform-error" role="alert" className="text-red-500 text-xs mt-1">
                        {platformError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="ecommerce-message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your testing needs... *
                    </label>
                    <div className="relative">
                      <FaComments className="absolute left-3 top-3 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <textarea
                        id="ecommerce-message"
                        name="message"
                        autoComplete="off"
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={() => validateMessage(formData.message)}
                        placeholder="Tell us about your testing needs..."
                        rows={4}
                        required
                        aria-invalid={!!messageError}
                        aria-describedby={messageError ? "ecommerce-message-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 resize-none ${messageError ? "border-red-500" : "border-gray-200"
                          }`}
                      ></textarea>
                    </div>
                    {messageError && (
                      <p id="ecommerce-message-error" role="alert" className="text-red-500 text-xs mt-1">
                        {messageError}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[theme(color.brand.blue)] text-white py-3 px-6 cursor-pointer rounded-xl font-semibold hover:bg-opacity-90 hover:scale-97 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <FaRocket className="w-4 h-4" />
                    )}
                    {isSubmitting
                      ? "Sending..."
                      : "Get Free E-Commerce Assessment"}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 mb-4 text-center text-gray-500 text-sm">
              <p>Response within 2 hours during business hours</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">
              Join 500+ Successful E-Commerce Businesses
            </h3>
            <p className="text-brand-blue mb-6">
              Don&apos;t let technical issues hold back your e-commerce success.
              Start optimizing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                title="Start Free Assessment – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px] 
                 bg-gradient-to-br from-brand-blue to-sky-600 text-white 
                 rounded-2xl font-semibold text-lg shadow-lg
                 hover:bg-gray-100 hover:text-brand-blue hover:scale-98 
                 transition-all duration-200 ease-in-out"
              >
                Start Free Assessment
              </Link>
              <Link
                href="/case-studies"
                title="View Success Stories – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
                 bg-white bg-opacity-20 text-brand-blue rounded-2xl font-semibold text-lg
                 hover:scale-98 transition-all duration-200 ease-in-out
                 ring-2 ring-brand-blue border-opacity-30"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceContactSection;
