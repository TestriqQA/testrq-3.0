"use client";

import React, { useState } from "react";
import {
  FaRocket,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
  FaWifi,
  FaUser,
  FaBuilding,
  FaComments,
  FaCog,
} from "react-icons/fa";
import PhoneInput from "@/components/ui/PhoneInput";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useRecaptchaForm } from "@/lib/recaptcha/useRecaptchaForm";

const IoTApplianceContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    businessPhone: "",
    companyName: "",
    iotSolutionType: "",
    testingRequirements: [] as string[],
    projectDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [companyNameError, setCompanyNameError] = useState<string | null>(null);
  const [iotSolutionTypeError, setIotSolutionTypeError] = useState<string | null>(null);
  const [testingRequirementsError, setTestingRequirementsError] = useState<string | null>(null);
  const [projectDetailsError, setProjectDetailsError] = useState<string | null>(null);
  const { isSubmitting, submitWithRecaptcha } = useRecaptchaForm({
    action: 'iot_contact',
    onSuccess: () => {
      setIsSubmitted(true);
      document.getElementById("iot-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ fullName: "", businessEmail: "", businessPhone: "", companyName: "", iotSolutionType: "", testingRequirements: [], projectDetails: "" });
    },
    onError: (error) => { console.error("Form submission failed:", error); alert(error || "Failed"); }
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

  const validateCompanyName = (companyName: string) => {
    if (!companyName) {
      setCompanyNameError("Company Name is required.");
      return false;
    }
    setCompanyNameError(null);
    return true;
  };

  const validateIotSolutionType = (iotSolutionType: string) => {
    if (!iotSolutionType) {
      setIotSolutionTypeError("Please select your IoT solution type.");
      return false;
    }
    setIotSolutionTypeError(null);
    return true;
  };

  const validateTestingRequirements = (testingRequirements: string[]) => {
    if (testingRequirements.length === 0) {
      setTestingRequirementsError("Please select at least one testing requirement.");
      return false;
    }
    setTestingRequirementsError(null);
    return true;
  };

  const validateProjectDetails = (projectDetails: string) => {
    if (!projectDetails) {
      setProjectDetailsError("Project details are required.");
      return false;
    }
    if (projectDetails.trim().length < 10) {
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
    if (name === "companyName") validateCompanyName(value);
    if (name === "iotSolutionType") validateIotSolutionType(value);
    if (name === "projectDetails") validateProjectDetails(value);
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => {
      const updatedRequirements = prev.testingRequirements.includes(value)
        ? prev.testingRequirements.filter((req) => req !== value)
        : [...prev.testingRequirements, value];

      validateTestingRequirements(updatedRequirements);

      return {
        ...prev,
        testingRequirements: updatedRequirements,
      };
    });
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
    const isIotSolutionTypeValid = validateIotSolutionType(formData.iotSolutionType);
    const isTestingRequirementsValid = validateTestingRequirements(formData.testingRequirements);
    const isProjectDetailsValid = validateProjectDetails(formData.projectDetails);

    if (
      isPhoneValid &&
      isEmailValid &&
      isFullNameValid &&
      isCompanyNameValid &&
      isIotSolutionTypeValid &&
      isTestingRequirementsValid &&
      isProjectDetailsValid
    ) {
      await submitWithRecaptcha(async (data, recaptchaToken) => {
        const dataToSend = {
          ...data,
          testingRequirements: data.testingRequirements.join(", "),
          recaptchaToken,
          source: "IoT Appliance Testing Services Page",
        };
        const response = await fetch("/api/iotContact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed");
        }
        return response.json();
      }, formData);
    } else {
      console.log("Form has errors.");
    }
  };

  const contactMethods = [
    {
      icon: FaPhone,
      title: "Speak with IoT Experts",
      description: "Direct consultation with our IoT testing specialists",
      text: "(+91) 915-2929-343",
      action: "tel:(+91) 915-2929-343",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: FaEnvelope,
      title: "Detailed IoT Assessment",
      description: "Send us your requirements for comprehensive analysis",
      text: "contact@testriq.com",
      action: "mailto:contact@testriq.com",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FaCalendarAlt,
      title: "IoT Strategy Session",
      description: "Book a free consultation to discuss your testing needs",
      text: "Schedule Free Consultation",
      action: "https://calendar.app.google/uUHn8prcXbdqcvVb6",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const benefits = [
    "Free IoT device assessment",
    "IoT security expertise",
    "Connectivity compliance guidance",
    "Performance optimization strategy",
    "Integration testing recommendations",
    "Scalability planning and roadmap",
  ];

  const scrollToCalendly = () => {
    const element = document.getElementById("calendly-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const testingRequirementOptions = [
    "Device & Hardware Testing",
    "Connectivity & Protocol Testing",
    "Security & Vulnerability Testing",
    "Cloud Integration Testing",
    "Performance & Scalability Testing",
    "Compliance & Certification",
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-brand-blue to-sky-600 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-brand-blue bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <FaWifi className="w-4 h-4" />
            <span className="text-sm font-medium">
              Secure Your IoT Ecosystem
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:leading-14">
            Ready to Secure Your
            <span className="block">IoT Ecosystem?</span>
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Connect with our IoT testing experts to discuss your IoT project
            requirements, get a custom IoT testing quote, and start your journey
            toward a successful IoT deployment with secure connectivity,
            regulatory compliance, and optimized device performance.
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
                  if (method.title === "IoT Strategy Session") {
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
                  IoT Product Launch Coming Soon?
                </h4>
              </div>
              <p className="text-orange-100 text-sm leading-relaxed">
                Planning for IoT product launch or deployment? Contact us at least
                8-12 weeks in advance to ensure your devices are thoroughly tested,
                secure, and ready for market deployment.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div id="iot-form-section" className="bg-white rounded-3xl lg:p-8 md:p-8 sm:p-2 shadow-2xl md:mt-16 sm:mt-2">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Quick IoT Assessment Form
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
                    <label htmlFor="iot-fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="iot-fullName"
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onBlur={() => validateFullName(formData.fullName)}
                        required
                        aria-invalid={!!fullNameError}
                        aria-describedby={fullNameError ? "iot-fullName-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${fullNameError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Your Name"
                      />
                    </div>
                    {fullNameError && <p id="iot-fullName-error" role="alert" className="text-red-500 text-xs mt-1">{fullNameError}</p>}
                  </div>

                  <div>
                    <label htmlFor="iot-businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="iot-businessEmail"
                        type="email"
                        name="businessEmail"
                        autoComplete="email"
                        inputMode="email"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        onBlur={() => validateEmail(formData.businessEmail)}
                        required
                        aria-invalid={!!emailError}
                        aria-describedby={emailError ? "iot-businessEmail-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${emailError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Email Address"
                      />
                    </div>
                    {emailError && <p id="iot-businessEmail-error" role="alert" className="text-red-500 text-xs mt-1">{emailError}</p>}
                  </div>

                  <div>
                    <label htmlFor="iot-businessPhone" className="block text-sm font-medium text-gray-700 mb-2">
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
                          id: "iot-businessPhone",
                          autoComplete: "tel",
                          "aria-invalid": !!phoneError,
                          "aria-describedby": phoneError ? "iot-businessPhone-error" : undefined,
                        }}
                      />
                    </div>
                    {phoneError && <p id="iot-businessPhone-error" role="alert" className="text-red-500 text-xs mt-1">{phoneError}</p>}
                  </div>

                  <div>
                    <label htmlFor="iot-companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <input
                        id="iot-companyName"
                        type="text"
                        name="companyName"
                        autoComplete="organization"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        onBlur={() => validateCompanyName(formData.companyName)}
                        required
                        aria-invalid={!!companyNameError}
                        aria-describedby={companyNameError ? "iot-companyName-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 ${companyNameError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Company Name"
                      />
                    </div>
                    {companyNameError && <p id="iot-companyName-error" role="alert" className="text-red-500 text-xs mt-1">{companyNameError}</p>}
                  </div>

                  <div>
                    <label htmlFor="iot-iotSolutionType" className="block text-sm font-medium text-gray-700 mb-2">
                      IoT Solution Type *
                    </label>
                    <div className="relative">
                      <FaCog className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" aria-hidden="true" />
                      <select
                        id="iot-iotSolutionType"
                        name="iotSolutionType"
                        autoComplete="off"
                        value={formData.iotSolutionType}
                        onChange={handleInputChange}
                        onBlur={() => validateIotSolutionType(formData.iotSolutionType)}
                        required
                        aria-invalid={!!iotSolutionTypeError}
                        aria-describedby={iotSolutionTypeError ? "iot-iotSolutionType-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 appearance-none ${iotSolutionTypeError ? 'border-red-500' : 'border-gray-200'}`}
                      >
                        <option value="">Select IoT Solution Type</option>
                        <option value="smart-home">Smart Home Devices</option>
                        <option value="industrial">Industrial IoT (IIoT)</option>
                        <option value="healthcare">Healthcare IoT</option>
                        <option value="automotive">Connected Vehicles</option>
                        <option value="smart-city">Smart City Infrastructure</option>
                        <option value="wearables">Wearables & Fitness</option>
                        <option value="agriculture">Smart Agriculture</option>
                        <option value="retail">Retail IoT</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {iotSolutionTypeError && <p id="iot-iotSolutionType-error" role="alert" className="text-red-500 text-xs mt-1">{iotSolutionTypeError}</p>}
                  </div>

                  <fieldset
                    aria-invalid={!!testingRequirementsError}
                    aria-describedby={testingRequirementsError ? "iot-testingRequirements-error" : undefined}
                  >
                    <legend className="block text-sm font-medium text-gray-700 mb-2">
                      Testing Requirements *
                    </legend>
                    <div className="space-y-2">
                      {testingRequirementOptions.map((option, index) => {
                        const checkboxId = `iot-testingRequirements-${index}`;
                        return (
                          <div key={index} className="flex items-center">
                            <input
                              id={checkboxId}
                              type="checkbox"
                              checked={formData.testingRequirements.includes(option)}
                              onChange={() => handleCheckboxChange(option)}
                              className="rounded border-gray-300 text-[theme(color.brand.blue)] focus:ring-[theme(color.brand.blue)]"
                            />
                            <label htmlFor={checkboxId} className="ml-2 text-gray-700">{option}</label>
                          </div>
                        );
                      })}
                    </div>
                    {testingRequirementsError && <p id="iot-testingRequirements-error" role="alert" className="text-red-500 text-xs mt-1">{testingRequirementsError}</p>}
                  </fieldset>

                  <div>
                    <label htmlFor="iot-projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <div className="relative">
                      <FaComments className="absolute left-3 top-3 text-gray-400 w-4 h-4" aria-hidden="true" />
                      <textarea
                        id="iot-projectDetails"
                        name="projectDetails"
                        autoComplete="off"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        onBlur={() => validateProjectDetails(formData.projectDetails)}
                        required
                        rows={4}
                        aria-invalid={!!projectDetailsError}
                        aria-describedby={projectDetailsError ? "iot-projectDetails-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:outline-none transition-all duration-300 resize-none ${projectDetailsError ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Tell us about your IoT solution, number of devices, protocols used, timeline, and any specific testing challenges you're facing..."
                      />
                    </div>
                    {projectDetailsError && <p id="iot-projectDetails-error" role="alert" className="text-red-500 text-xs mt-1">{projectDetailsError}</p>}
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
                        Get Free IoT Assessment
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>
                IoT testing experts • Response within 2 hours during
                business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTApplianceContactSection;

