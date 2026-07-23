"use client";

import React, { useState } from "react";
import {
  FaRocket,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaUsers,
  FaBuilding,
  FaUniversity,
  FaUser,
  FaComments,
} from "react-icons/fa";
import PhoneInput from "@/components/ui/PhoneInput";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useRecaptchaForm } from "@/lib/recaptcha/useRecaptchaForm";
import Link from "next/link";

const ElearningContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    businessPhone: "",
    institution: "",
    platformType: "",
    numberOfUsers: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [institutionError, setInstitutionError] = useState<string | null>(null);
  const [platformTypeError, setPlatformTypeError] = useState<string | null>(
    null
  );
  const [numberOfUsersError, setNumberOfUsersError] = useState<string | null>(
    null
  );
  const [messageError, setMessageError] = useState<string | null>(null);

  const { isSubmitting, submitWithRecaptcha } = useRecaptchaForm({
    action: 'elearning_contact',
    onSuccess: () => {
      setIsSubmitted(true);
      document.getElementById("elearning-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({
        fullName: "",
        businessEmail: "",
        businessPhone: "",
        institution: "",
        platformType: "",
        numberOfUsers: "",
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

  const validateInstitution = (institution: string) => {
    if (!institution) {
      setInstitutionError("Institution/Organization is required.");
      return false;
    }
    setInstitutionError(null);
    return true;
  };

  const validatePlatformType = (platformType: string) => {
    if (!platformType) {
      setPlatformTypeError("Please select your platform type.");
      return false;
    }
    setPlatformTypeError(null);
    return true;
  };

  const validateNumberOfUsers = (numberOfUsers: string) => {
    if (!numberOfUsers) {
      setNumberOfUsersError("Please select number of users.");
      return false;
    }
    setNumberOfUsersError(null);
    return true;
  };

  const validateMessage = (message: string) => {
    if (!message) {
      setMessageError("Testing needs description is required.");
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
    if (name === "institution") validateInstitution(value);
    if (name === "platformType") validatePlatformType(value);
    if (name === "numberOfUsers") validateNumberOfUsers(value);
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
    const isInstitutionValid = validateInstitution(formData.institution);
    const isPlatformTypeValid = validatePlatformType(formData.platformType);
    const isNumberOfUsersValid = validateNumberOfUsers(formData.numberOfUsers);
    const isMessageValid = validateMessage(formData.message);

    if (
      isPhoneValid &&
      isEmailValid &&
      isFullNameValid &&
      isInstitutionValid &&
      isPlatformTypeValid &&
      isNumberOfUsersValid &&
      isMessageValid
    ) {
      await submitWithRecaptcha(
        async (data, recaptchaToken) => {
          const dataToSend = {
            ...data,
            recaptchaToken,
            source: "E-learning Testing Services Page",
          };

          const response = await fetch("/api/elearningContact", {
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
      title: "Speak with E-Learning Experts",
      description:
        "Direct consultation with our educational technology specialists",
      text: "(+91) 915-2929-343",
      action: "tel:(+91) 915-2929-343",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: FaEnvelope,
      title: "Detailed Platform Assessment",
      description: "Send us your requirements for comprehensive analysis",
      text: "contact@testriq.com",
      action: "mailto:contact@testriq.com",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FaCalendarAlt,
      title: "Educational Strategy Session",
      description: "Book a free consultation to discuss your testing needs",
      text: "Schedule Free Consultation",
      action: "https://calendar.app.google/uUHn8prcXbdqcvVb6",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const benefits = [
    <>
      Free{" "}
      <Link href="/blog/post/scorm-compliance-and-learning-analytics-testing-ensuring-accurate-tracking-and-assessment-of-learner-progress">
        e-learning platform assessment
      </Link>
    </>,
    "Educational technology expertise",
    "Accessibility compliance guidance",
    <>
      <Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">
        Performance optimization strategy
      </Link>
    </>,
    <>
      <Link href="/blog/post/system-integration-testing-for-robotic-systems-ensuring-seamless-operation">
        Integration testing
      </Link>{" "}
      recommendations
    </>,
    "Scalability planning and roadmap",
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
            <FaGraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">
              Transform Your E-Learning
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:leading-14">
            Ready to Optimize Your
            <span className="block">E-Learning Platform?</span>
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards better learning outcomes, higher
            engagement, and improved accessibility. Our e-learning testing
            experts are ready to help you create exceptional educational
            experiences.
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
                  if (method.title === "Educational Strategy Session") {
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
                  New Semester Starting Soon?
                </h4>
              </div>
              <p className="text-orange-100 text-sm leading-relaxed">
                Planning for new academic year or training program launch?
                Contact us at least 8-10 weeks in advance to ensure your
                platform is optimized and ready for peak usage periods.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            id="elearning-form-section"
            className="bg-white rounded-3xl lg:p-8 md:p-8 sm:p-2 shadow-2xl md:mt-16 sm:mt-2"
          >
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Quick E-Learning Assessment Form
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
                    <label htmlFor="elearning-fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="elearning-fullName"
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onBlur={() => validateFullName(formData.fullName)}
                        required
                        aria-invalid={!!fullNameError}
                        aria-describedby={fullNameError ? "elearning-fullName-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${fullNameError ? "border-red-500" : "border-gray-200"
                          }`}
                        placeholder="Your Name"
                      />
                    </div>
                    {fullNameError && (
                      <p id="elearning-fullName-error" role="alert" className="text-red-500 text-xs mt-1">
                        {fullNameError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="elearning-businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="elearning-businessEmail"
                        type="email"
                        name="businessEmail"
                        autoComplete="email"
                        inputMode="email"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        onBlur={() => validateEmail(formData.businessEmail)}
                        required
                        aria-invalid={!!emailError}
                        aria-describedby={emailError ? "elearning-businessEmail-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${emailError ? "border-red-500" : "border-gray-200"
                          }`}
                        placeholder="Email Address"
                      />
                    </div>
                    {emailError && (
                      <p id="elearning-businessEmail-error" role="alert" className="text-red-500 text-xs mt-1">{emailError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="elearning-businessPhone" className="block text-sm font-medium text-gray-700 mb-2">
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
                          id: "elearning-businessPhone",
                          autoComplete: "tel",
                          "aria-invalid": !!phoneError,
                          "aria-describedby": phoneError ? "elearning-businessPhone-error" : undefined,
                          className: "w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300",
                        }}
                      />
                    </div>
                    {phoneError && (
                      <p id="elearning-businessPhone-error" role="alert" className="text-red-500 text-xs mt-1">{phoneError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="elearning-institution" className="block text-sm font-medium text-gray-700 mb-2">
                      Institution/Organization *
                    </label>
                    <div className="relative">
                      <FaUniversity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="elearning-institution"
                        type="text"
                        name="institution"
                        autoComplete="organization"
                        value={formData.institution}
                        onChange={handleInputChange}
                        onBlur={() => validateInstitution(formData.institution)}
                        required
                        aria-invalid={!!institutionError}
                        aria-describedby={institutionError ? "elearning-institution-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${institutionError
                          ? "border-red-500"
                          : "border-gray-200"
                          }`}
                        placeholder="Institution/Organization Name"
                      />
                    </div>
                    {institutionError && (
                      <p id="elearning-institution-error" role="alert" className="text-red-500 text-xs mt-1">
                        {institutionError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="elearning-platformType" className="block text-sm font-medium text-gray-700 mb-2">
                      Select Your Platform Type *
                    </label>
                    <div className="relative">
                      <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" aria-hidden="true" />
                      <select
                        id="elearning-platformType"
                        name="platformType"
                        autoComplete="off"
                        value={formData.platformType}
                        onChange={handleInputChange}
                        onBlur={() =>
                          validatePlatformType(formData.platformType)
                        }
                        required
                        aria-invalid={!!platformTypeError}
                        aria-describedby={platformTypeError ? "elearning-platformType-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 appearance-none ${platformTypeError
                          ? "border-red-500"
                          : "border-gray-200"
                          }`}
                      >
                        <option value="">Select Your Platform Type</option>
                        <option value="moodle">Moodle</option>
                        <option value="canvas">Canvas</option>
                        <option value="blackboard">Blackboard</option>
                        <option value="google-classroom">
                          Google Classroom
                        </option>
                        <option value="custom">Custom LMS</option>
                        <option value="corporate">
                          Corporate Training Platform
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {platformTypeError && (
                      <p id="elearning-platformType-error" role="alert" className="text-red-500 text-xs mt-1">
                        {platformTypeError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="elearning-numberOfUsers" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Users *
                    </label>
                    <div className="relative">
                      <FaUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" aria-hidden="true" />
                      <select
                        id="elearning-numberOfUsers"
                        name="numberOfUsers"
                        autoComplete="off"
                        value={formData.numberOfUsers}
                        onChange={handleInputChange}
                        onBlur={() =>
                          validateNumberOfUsers(formData.numberOfUsers)
                        }
                        required
                        aria-invalid={!!numberOfUsersError}
                        aria-describedby={numberOfUsersError ? "elearning-numberOfUsers-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 appearance-none ${numberOfUsersError
                          ? "border-red-500"
                          : "border-gray-200"
                          }`}
                      >
                        <option value="">Number of Users</option>
                        <option value="small">Under 1,000 users</option>
                        <option value="medium">1,000 - 10,000 users</option>
                        <option value="large">10,000 - 50,000 users</option>
                        <option value="enterprise">50,000+ users</option>
                      </select>
                    </div>
                    {numberOfUsersError && (
                      <p id="elearning-numberOfUsers-error" role="alert" className="text-red-500 text-xs mt-1">
                        {numberOfUsersError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="elearning-message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about Testing need *
                    </label>
                    <div className="relative">
                      <FaComments className="absolute left-3 top-3 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <textarea
                        id="elearning-message"
                        name="message"
                        autoComplete="off"
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={() => validateMessage(formData.message)}
                        required
                        rows={4}
                        aria-invalid={!!messageError}
                        aria-describedby={messageError ? "elearning-message-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 resize-none ${messageError ? "border-red-500" : "border-gray-200"
                          }`}
                        placeholder="Tell us about your e-learning testing needs..."
                      />
                    </div>
                    {messageError && (
                      <p id="elearning-message-error" role="alert" className="text-red-500 text-xs mt-1">
                        {messageError}
                      </p>
                    )}
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
                        Get Free E-Learning Assessment
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>
                Educational technology experts • Response within 2 hours during
                business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElearningContactSection;
