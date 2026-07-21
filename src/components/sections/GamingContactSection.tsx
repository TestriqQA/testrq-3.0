"use client";


import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaGamepad,
  FaMobile,
  FaDesktop,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaAward,
  FaUser,
  FaBuilding,
  FaComments,
  FaRocket,
} from "react-icons/fa";
import PhoneInput from "@/components/ui/PhoneInput";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useRecaptchaForm } from "@/lib/recaptcha/useRecaptchaForm";

const GamingContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    businessPhone: "",
    companyStudioName: "",
    gameType: "",
    targetPlatforms: "",
    projectDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isSubmitting, submitWithRecaptcha } = useRecaptchaForm({
    action: 'gaming_contact',
    onSuccess: () => {
      setIsSubmitted(true);
      document.getElementById("gaming-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ fullName: "", businessEmail: "", businessPhone: "", companyStudioName: "", gameType: "", targetPlatforms: "", projectDetails: "" });
    },
    onError: (error) => { console.error("Form submission failed:", error); alert(error || "Failed"); }
  });
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [companyStudioNameError, setCompanyStudioNameError] = useState<string | null>(null);
  const [gameTypeError, setGameTypeError] = useState<string | null>(null);
  const [targetPlatformsError, setTargetPlatformsError] = useState<string | null>(null);
  const [projectDetailsError, setProjectDetailsError] = useState<string | null>(null);

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

  const validateCompanyStudioName = (name: string) => {
    if (!name) {
      setCompanyStudioNameError("Company/Studio Name is required.");
      return false;
    }
    setCompanyStudioNameError(null);
    return true;
  };

  const validateGameType = (gameType: string) => {
    if (!gameType) {
      setGameTypeError("Please select game type.");
      return false;
    }
    setGameTypeError(null);
    return true;
  };

  const validateTargetPlatforms = (platforms: string) => {
    if (!platforms) {
      setTargetPlatformsError("Please select target platforms.");
      return false;
    }
    setTargetPlatformsError(null);
    return true;
  };

  const validateProjectDetails = (details: string) => {
    if (!details) {
      setProjectDetailsError("Project details are required.");
      return false;
    }
    if (details.trim().length < 10) {
      setProjectDetailsError("Project details must be at least 10 characters.");
      return false;
    }
    setProjectDetailsError(null);
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
    if (name === "companyStudioName") validateCompanyStudioName(value);
    if (name === "gameType") validateGameType(value);
    if (name === "targetPlatforms") validateTargetPlatforms(value);
    if (name === "projectDetails") validateProjectDetails(value);
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
    const isCompanyStudioNameValid = validateCompanyStudioName(formData.companyStudioName);
    const isGameTypeValid = validateGameType(formData.gameType);
    const isTargetPlatformsValid = validateTargetPlatforms(formData.targetPlatforms);
    const isProjectDetailsValid = validateProjectDetails(formData.projectDetails);

    if (
      isPhoneValid &&
      isEmailValid &&
      isFullNameValid &&
      isCompanyStudioNameValid &&
      isGameTypeValid &&
      isTargetPlatformsValid &&
      isProjectDetailsValid
    ) {
      await submitWithRecaptcha(async (data, recaptchaToken) => {
        const response = await fetch("/api/gamingContact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            recaptchaToken,
            source: "Gaming App Testing Services Page",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }

        return response.json();
      }, formData);
    } else {
      console.log("Form has errors.");
    }
  };

  const contactOptions = [
    {
      icon: FaPhone,
      title: "Speak with Gaming Experts",
      description: "Direct consultation with our gaming testing specialists",
      text: "(+91) 915-2929-343",
      action: "tel:(+91) 915-2929-343",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FaEnvelope,
      title: "Request Game Testing Proposal",
      description: "Get a comprehensive proposal for your gaming testing needs",
      text: "contact@testriq.com",
      action: "mailto:contact@testriq.com",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: FaCalendarAlt,
      title: "Gaming Strategy Session",
      description: "Book a free consultation to discuss your game testing requirements",
      text: "Schedule Free Consultation",
      action: "https://calendar.app.google/uUHn8prcXbdqcvVb6",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const expertiseAreas = [
    {
      icon: FaMobile,
      title: "Mobile Gaming",
      description: "iOS, Android, and cross-platform mobile game testing",
    },
    {
      icon: FaDesktop,
      title: "PC & Console",
      description: "Windows, Mac, Linux, PlayStation, Xbox, Nintendo Switch",
    },
    {
      icon: FaUsers,
      title: "Multiplayer Games",
      description: "Network testing, matchmaking, and social features",
    },
    {
      icon: FaGamepad,
      title: "All Game Genres",
      description: "Action, RPG, Strategy, Sports, VR/AR, and more",
    },
  ];

  const whyChooseUs = [
    {
      icon: FaAward,
      title: "Gaming Specialists",
      description: "Dedicated team with deep gaming industry expertise",
    },
    {
      icon: FaCheckCircle,
      title: "99.9% Success Rate",
      description: "Proven track record of successful game launches",
    },
    {
      icon: FaClock,
      title: "Faster Launches",
      description: "40% faster time to market through efficient testing",
    },
  ];

  const scrollToCalendly = () => {
    const element = document.getElementById("calendly-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-6 py-2 mb-6">
            <FaGamepad className="w-4 h-4" />
            <span className="text-sm font-medium">Gaming Excellence</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:leading-14">
            Ready to Launch Your
            <span className="block text-purple-300">Next Gaming Hit?</span>
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards a successful game launch with comprehensive testing.
            Our gaming experts are ready to help you deliver exceptional player experiences across all platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              Choose Your Preferred Contact Method
            </h3>

            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.action}
                onClick={(e) => {
                  if (option.title === "Gaming Strategy Session") {
                    e.preventDefault();
                    scrollToCalendly();
                  }
                }}
                className="block bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-purple-800 mb-2">
                      {option.title}
                    </h4>
                    <p className="text-purple-900 text-sm mb-4 leading-relaxed">
                      {option.description}
                    </p>
                    <span className="text-purple-600 font-semibold flex items-center gap-2 group">
                      {option.text}
                    </span>
                  </div>
                </div>
              </a>
            ))}

            {/* Expertise Areas */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-purple-800 mb-6">
                Our Gaming Expertise
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <area.icon className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-600 text-sm">{area.title}</h4>
                      <p className="text-purple-600 text-xs">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-opacity-20 rounded-2xl p-6 border border-purple-400 border-opacity-30">
              <h3 className="text-xl font-bold text-white mb-4">
                Why Game Studios Choose Us
              </h3>

              <div className="space-y-3">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <reason.icon className="w-5 h-5 text-purple-300 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">{reason.title}</h4>
                      <p className="text-blue-100 text-xs">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div id="gaming-form-section" className="bg-white rounded-3xl lg:p-8 md:p-8 sm:p-2 shadow-2xl md:mt-16 sm:mt-2">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Gaming Testing Assessment Form
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
                    <label htmlFor="gaming-fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="gaming-fullName"
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onBlur={() => validateFullName(formData.fullName)}
                        required
                        aria-invalid={!!fullNameError}
                        aria-describedby={fullNameError ? "gaming-fullName-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 ${fullNameError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Your Name"
                      />
                    </div>
                    {fullNameError && <p id="gaming-fullName-error" role="alert" className="text-red-500 text-xs mt-1">{fullNameError}</p>}
                  </div>

                  <div>
                    <label htmlFor="gaming-businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="gaming-businessEmail"
                        type="email"
                        name="businessEmail"
                        autoComplete="email"
                        inputMode="email"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        onBlur={() => validateEmail(formData.businessEmail)}
                        required
                        aria-invalid={!!emailError}
                        aria-describedby={emailError ? "gaming-businessEmail-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 ${emailError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Email Address"
                      />
                    </div>
                    {emailError && <p id="gaming-businessEmail-error" role="alert" className="text-red-500 text-xs mt-1">{emailError}</p>}
                  </div>

                  <div>
                    <label htmlFor="gaming-businessPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Phone *
                    </label>
                    <div className="relative">
                      <PhoneInput
                        international
                        value={formData.businessPhone}
                        onChange={handlePhoneChange}
                        onBlur={() => validatePhoneNumber(formData.businessPhone)}
                        className={`w-full phone-input-container ${phoneError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Enter phone number"
                        numberInputProps={{
                          id: "gaming-businessPhone",
                          autoComplete: "tel",
                          "aria-invalid": !!phoneError,
                          "aria-describedby": phoneError ? "gaming-businessPhone-error" : undefined,
                          className: "w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300",
                        }}
                      />
                    </div>
                    {phoneError && <p id="gaming-businessPhone-error" role="alert" className="text-red-500 text-xs mt-1">{phoneError}</p>}
                  </div>

                  <div>
                    <label htmlFor="gaming-companyStudioName" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Studio Name *
                    </label>
                    <div className="relative">
                      <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="gaming-companyStudioName"
                        type="text"
                        name="companyStudioName"
                        autoComplete="organization"
                        value={formData.companyStudioName}
                        onChange={handleInputChange}
                        onBlur={() => validateCompanyStudioName(formData.companyStudioName)}
                        required
                        aria-invalid={!!companyStudioNameError}
                        aria-describedby={companyStudioNameError ? "gaming-companyStudioName-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 ${companyStudioNameError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Company/Studio Name"
                      />
                    </div>
                    {companyStudioNameError && <p id="gaming-companyStudioName-error" role="alert" className="text-red-500 text-xs mt-1">{companyStudioNameError}</p>}
                  </div>

                  <div>
                    <label htmlFor="gaming-gameType" className="block text-sm font-medium text-gray-700 mb-2">
                      Game Type *
                    </label>
                    <div className="relative">
                      <FaGamepad className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" aria-hidden="true" />
                      <select
                        id="gaming-gameType"
                        name="gameType"
                        autoComplete="off"
                        value={formData.gameType}
                        onChange={handleInputChange}
                        onBlur={() => validateGameType(formData.gameType)}
                        required
                        aria-invalid={!!gameTypeError}
                        aria-describedby={gameTypeError ? "gaming-gameType-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 appearance-none ${gameTypeError ? 'border-red-500' : 'border-gray-200'}`}
                      >
                        <option value="">Select Game Type</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="rpg">RPG</option>
                        <option value="strategy">Strategy</option>
                        <option value="sports">Sports</option>
                        <option value="racing">Racing</option>
                        <option value="puzzle">Puzzle</option>
                        <option value="simulation">Simulation</option>
                        <option value="mmo">MMO</option>
                        <option value="casual">Casual</option>
                        <option value="vr-ar">VR/AR</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {gameTypeError && <p id="gaming-gameType-error" role="alert" className="text-red-500 text-xs mt-1">{gameTypeError}</p>}
                  </div>

                  <div>
                    <label htmlFor="gaming-targetPlatforms" className="block text-sm font-medium text-gray-700 mb-2">
                      Target Platforms *
                    </label>
                    <div className="relative">
                      <FaDesktop className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" aria-hidden="true" />
                      <select
                        id="gaming-targetPlatforms"
                        name="targetPlatforms"
                        autoComplete="off"
                        value={formData.targetPlatforms}
                        onChange={handleInputChange}
                        onBlur={() => validateTargetPlatforms(formData.targetPlatforms)}
                        required
                        aria-invalid={!!targetPlatformsError}
                        aria-describedby={targetPlatformsError ? "gaming-targetPlatforms-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 appearance-none ${targetPlatformsError ? 'border-red-500' : 'border-gray-200'}`}
                      >
                        <option value="">Select Target Platforms</option>
                        <option value="mobile-ios-android">Mobile (iOS & Android)</option>
                        <option value="pc-windows">PC (Windows)</option>
                        <option value="pc-mac">PC (Mac)</option>
                        <option value="pc-linux">PC (Linux)</option>
                        <option value="console-playstation">Console (PlayStation)</option>
                        <option value="console-xbox">Console (Xbox)</option>
                        <option value="console-nintendo">Console (Nintendo Switch)</option>
                        <option value="web-browser">Web Browser</option>
                        <option value="vr-platforms">VR Platforms</option>
                        <option value="cross-platform">Cross-Platform</option>
                        <option value="multiple">Multiple Platforms</option>
                      </select>
                    </div>
                    {targetPlatformsError && <p id="gaming-targetPlatforms-error" role="alert" className="text-red-500 text-xs mt-1">{targetPlatformsError}</p>}
                  </div>

                  <div>
                    <label htmlFor="gaming-projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <div className="relative">
                      <FaComments className="absolute left-3 top-3 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <textarea
                        id="gaming-projectDetails"
                        name="projectDetails"
                        autoComplete="off"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        onBlur={() => validateProjectDetails(formData.projectDetails)}
                        required
                        rows={4}
                        aria-invalid={!!projectDetailsError}
                        aria-describedby={projectDetailsError ? "gaming-projectDetails-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 resize-none ${projectDetailsError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Tell us about your game testing project, development stage, timeline, specific testing requirements, and any concerns..."
                      />
                    </div>
                    {projectDetailsError && <p id="gaming-projectDetails-error" role="alert" className="text-red-500 text-xs mt-1">{projectDetailsError}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:scale-98 transition-all duration-200 ease-in-out flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaRocket className="w-4 h-4" />
                        Get Gaming Testing Assessment
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>
                Gaming testing experts • Response within 2 hours during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingContactSection;

