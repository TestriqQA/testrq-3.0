"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding, FaPaperPlane, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import PhoneInput from "@/components/ui/PhoneInput";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useRecaptchaForm } from "@/lib/recaptcha/useRecaptchaForm";

interface PricingFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    packageName: string;
    packagePrice: string;
    accentColor: string; // Tailwind color class like "blue" | "indigo" | "emerald" | "rose"
}

const gradientMap: Record<string, string> = {
    blue: "from-blue-600 to-blue-700",
    indigo: "from-indigo-600 to-indigo-700",
    emerald: "from-emerald-600 to-teal-600",
    rose: "from-rose-600 to-pink-600",
};

const bgMap: Record<string, string> = {
    blue: "bg-blue-600",
    indigo: "bg-indigo-600",
    emerald: "bg-emerald-600",
    rose: "bg-rose-600",
};

const lightBgMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    rose: "bg-rose-50 text-rose-700 border-rose-100",
};

const PricingFormModal: React.FC<PricingFormModalProps> = ({
    isOpen,
    onClose,
    packageName,
    packagePrice,
    accentColor,
}) => {
    const gradient = gradientMap[accentColor] || gradientMap.blue;
    const bg = bgMap[accentColor] || bgMap.blue;
    const lightBg = lightBgMap[accentColor] || lightBgMap.blue;

    const [formData, setFormData] = useState({
        fullName: "",
        businessEmail: "",
        businessPhone: "",
        companyName: "",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Initialize reCAPTCHA form hook
    const { isSubmitting, submitWithRecaptcha } = useRecaptchaForm({
        action: "pricing_form",
        onSuccess: () => {
            setIsSubmitted(true);
        },
        onError: (error) => {
            console.error("Pricing form submission failed:", error);
            alert(error || "Form submission failed. Please try again.");
        },
    });

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setFormData({
                    fullName: "",
                    businessEmail: "",
                    businessPhone: "",
                    companyName: "",
                    message: "",
                });
                setErrors({});
                setIsSubmitted(false);
            }, 300);
        }
    }, [isOpen]);

    const validate = useCallback(() => {
        const newErrors: Record<string, string> = {};

        if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
            newErrors.fullName = "Full name is required (min 3 characters).";
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!formData.businessEmail.trim()) {
            newErrors.businessEmail = "Email is required.";
        } else if (!emailRegex.test(formData.businessEmail)) {
            newErrors.businessEmail = "Please enter a valid email.";
        }

        if (!formData.businessPhone) {
            newErrors.businessPhone = "Phone number is required.";
        } else if (!isValidPhoneNumber(formData.businessPhone)) {
            newErrors.businessPhone = "Please enter a valid phone number.";
        }

        if (!formData.message.trim() || formData.message.trim().length < 10) {
            newErrors.message = "Message is required (min 10 characters).";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [formData]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error on change
        if (errors[name]) {
            setErrors((prev) => {
                const copy = { ...prev };
                delete copy[name];
                return copy;
            });
        }
    };

    const handlePhoneChange = (phone: string | undefined) => {
        setFormData((prev) => ({ ...prev, businessPhone: phone || "" }));
        if (errors.businessPhone) {
            setErrors((prev) => {
                const copy = { ...prev };
                delete copy.businessPhone;
                return copy;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        await submitWithRecaptcha(
            async (data, recaptchaToken) => {
                const response = await fetch("/api/pricingContact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...data,
                        packageName,
                        packagePrice,
                        recaptchaToken,
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(
                        errorData.error || "Form submission failed. Please try again."
                    );
                }

                return response.json();
            },
            formData as unknown as Record<string, unknown>
        );
    };

    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                {/* Modal */}
                <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                        {/* Header */}
                        <div className={`bg-gradient-to-r ${gradient} px-6 py-5 relative`}>
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                                aria-label="Close"
                            >
                                <FaTimes className="w-3.5 h-3.5" />
                            </button>

                            <p className="text-white/70 text-[10px] font-bold uppercase tracking-[2px] mb-1">
                                Get Started With
                            </p>
                            <h2 className="text-xl font-bold text-white tracking-tight">
                                {packageName}
                            </h2>
                            <div className="mt-2 inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-lg">
                                {packagePrice}
                            </div>
                        </div>

                        {/* Body */}
                        <div className="overflow-y-auto flex-1 px-6 py-5">
                            {isSubmitted ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                                        <FaCheckCircle className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Request Submitted!
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed max-w-xs mx-auto mb-2">
                                        Thank you for your interest in <strong>{packageName}</strong>.
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        Our team will reach out to you within <strong>2 hours</strong>. We&apos;ve
                                        also sent a confirmation to your email.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className={`mt-8 px-8 py-3 ${bg} text-white rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer`}
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                    {/* Package Info Chip */}
                                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold ${lightBg}`}>
                                        <FaShieldAlt className="w-3 h-3 shrink-0" />
                                        <span>Package: {packageName} — {packagePrice}</span>
                                    </div>

                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="pricing-fullName" className="block text-xs font-semibold text-gray-700 mb-1.5">
                                            Full Name <span className="text-red-400">*</span>
                                        </label>
                                        <div className="relative">
                                            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" aria-hidden="true" />
                                            <input
                                                id="pricing-fullName"
                                                type="text"
                                                name="fullName"
                                                autoComplete="name"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder="John Doe"
                                                aria-invalid={!!errors.fullName}
                                                aria-describedby={errors.fullName ? "pricing-fullName-error" : undefined}
                                                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all ${errors.fullName ? "border-red-400" : "border-gray-200"
                                                    }`}
                                            />
                                        </div>
                                        {errors.fullName && (
                                            <p id="pricing-fullName-error" role="alert" className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="pricing-businessEmail" className="block text-xs font-semibold text-gray-700 mb-1.5">
                                            Email Address <span className="text-red-400">*</span>
                                        </label>
                                        <div className="relative">
                                            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" aria-hidden="true" />
                                            <input
                                                id="pricing-businessEmail"
                                                type="email"
                                                name="businessEmail"
                                                autoComplete="email"
                                                inputMode="email"
                                                value={formData.businessEmail}
                                                onChange={handleInputChange}
                                                placeholder="john@company.com"
                                                aria-invalid={!!errors.businessEmail}
                                                aria-describedby={errors.businessEmail ? "pricing-businessEmail-error" : undefined}
                                                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all ${errors.businessEmail ? "border-red-400" : "border-gray-200"
                                                    }`}
                                            />
                                        </div>
                                        {errors.businessEmail && (
                                            <p id="pricing-businessEmail-error" role="alert" className="text-red-500 text-[11px] mt-1">{errors.businessEmail}</p>
                                        )}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="pricing-businessPhone" className="block text-xs font-semibold text-gray-700 mb-1.5">
                                            Contact Number <span className="text-red-400">*</span>
                                        </label>
                                        <div className="relative">
                                            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3 z-10 pointer-events-none" aria-hidden="true" />
                                            <PhoneInput
                                                international
                                                value={formData.businessPhone}
                                                onChange={handlePhoneChange}
                                                className={`w-full phone-input-container pricing-phone-input ${errors.businessPhone ? "border-red-400" : "border-gray-200"
                                                    }`}
                                                placeholder="Enter phone number"
                                                numberInputProps={{
                                                    id: "pricing-businessPhone",
                                                    autoComplete: "tel",
                                                    "aria-invalid": !!errors.businessPhone,
                                                    "aria-describedby": errors.businessPhone ? "pricing-businessPhone-error" : undefined,
                                                }}
                                            />
                                        </div>
                                        {errors.businessPhone && (
                                            <p id="pricing-businessPhone-error" role="alert" className="text-red-500 text-[11px] mt-1">{errors.businessPhone}</p>
                                        )}
                                    </div>

                                    {/* Company Name */}
                                    <div>
                                        <label htmlFor="pricing-companyName" className="block text-xs font-semibold text-gray-700 mb-1.5">
                                            Company Name
                                        </label>
                                        <div className="relative">
                                            <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" aria-hidden="true" />
                                            <input
                                                id="pricing-companyName"
                                                type="text"
                                                name="companyName"
                                                autoComplete="organization"
                                                value={formData.companyName}
                                                onChange={handleInputChange}
                                                placeholder="Your Company (optional)"
                                                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="pricing-message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                                            Message <span className="text-red-400">*</span>
                                        </label>
                                        <textarea
                                            id="pricing-message"
                                            name="message"
                                            autoComplete="off"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={3}
                                            placeholder="Tell us about your project and testing requirements..."
                                            aria-invalid={!!errors.message}
                                            aria-describedby={errors.message ? "pricing-message-error" : undefined}
                                            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none ${errors.message ? "border-red-400" : "border-gray-200"
                                                }`}
                                        />
                                        {errors.message && (
                                            <p id="pricing-message-error" role="alert" className="text-red-500 text-[11px] mt-1">{errors.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${gradient} text-white py-3 px-6 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin w-4 h-4"
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
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane className="w-3.5 h-3.5" />
                                                Submit Inquiry
                                            </>
                                        )}
                                    </button>

                                    {/* Privacy Note */}
                                    <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                                        By submitting, you agree to our{" "}
                                        <Link href="/privacy-policy" className="underline hover:text-gray-600">
                                            Privacy Policy
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="/terms-of-service" className="underline hover:text-gray-600">
                                            Terms of Service
                                        </Link>
                                        .
                                    </p>
                                </form>
                            )}
                        </div>
                </div>
        </div>
    );
};

export default PricingFormModal;
