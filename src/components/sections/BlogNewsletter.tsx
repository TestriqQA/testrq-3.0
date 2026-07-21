"use client";
import Link from 'next/link'
import { useRecaptchaForm } from "@/lib/recaptcha/useRecaptchaForm";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaArrowRight,
  FaCheck,
  FaLinkedin,
  FaSpinner,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BlogNewsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const { isSubmitting, submitWithRecaptcha } = useRecaptchaForm({
    action: 'newsletter_subscribe',
    onSuccess: () => {
      setSubscribed(true);
      setEmail("");
      setInterests([]);
    },
    onError: (err) => {
      setError(err || "Failed to subscribe");
    }
  });

  const availableInterests = [
    { name: "Test Automation", icon: "⚙️" },
    { name: "Performance Testing", icon: "🚀" },
    { name: "Security Testing", icon: "🔒" },
    { name: "Mobile Testing", icon: "📱" },
  ];

  const handleInterestChange = (interest: string) => {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    setError("");

    await submitWithRecaptcha(async (_, recaptchaToken) => {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          interests: interests,
          recaptchaToken
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to subscribe");
      }

      return response.json();
    }, { email, interests });
  };

  const benefits = [
    "Weekly curated insights from QA experts",
    "Early access to testing tools & frameworks",
    "Exclusive industry reports & case studies",
    "Free templates & checklists",
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8">
              <FaEnvelope className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-700 font-medium">Newsletter</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Stay ahead of the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                testing curve
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Join 10,000+ QA professionals getting weekly insights that actually matter.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <FaCheck className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-slate-500 text-sm">Follow us:</span>
              <div className="flex gap-3">
                <Link
                  href="https://x.com/testriq"
                  aria-label="Twitter"
                  className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
                >
                  <FaXTwitter className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/testriq-qa-lab"
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
                >
                  <FaLinkedin className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl blur-xl opacity-60" />

            <div className="relative bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50">
              {!subscribed ? (
                <>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100">
                      <FaEnvelope className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Get the newsletter
                    </h3>
                    <p className="text-slate-500">No spam. Unsubscribe anytime.</p>
                  </div>

                  <form onSubmit={handleSubscribe} className="space-y-6">
                    {error && (
                      <div id="newsletter-email-error" role="alert" className="bg-red-50 border border-red-100 rounded-xl p-4 text-red-600 text-sm">
                        {error}
                      </div>
                    )}

                    <div>
                      <label htmlFor="newsletter-email" className="block text-slate-700 text-sm font-medium mb-2">
                        Email address
                      </label>
                      <div className={`relative transition-all duration-300 ${isFocused ? 'scale-[1.02]' : ''}`}>
                        <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl transition-all duration-300 ${isFocused ? 'opacity-10 blur-sm' : 'opacity-0'}`} />
                        <input
                          id="newsletter-email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          inputMode="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                          placeholder="you@company.com"
                          aria-invalid={!!error}
                          aria-describedby={error ? "newsletter-email-error" : undefined}
                          className="relative w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 text-lg"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <fieldset>
                      <legend className="block text-slate-700 text-sm font-medium mb-3">
                        Interests (optional)
                      </legend>
                      <div className="grid grid-cols-2 gap-2">
                        {availableInterests.map((interest) => {
                          const isSelected = interests.includes(interest.name);
                          return (
                            <button
                              key={interest.name}
                              type="button"
                              onClick={() => handleInterestChange(interest.name)}
                              disabled={isSubmitting}
                              aria-pressed={isSelected}
                              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all border ${isSelected
                                ? 'bg-blue-50 border-blue-300 text-blue-700'
                                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                            >
                              <span aria-hidden="true">{interest.icon}</span>
                              {interest.name}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/25"
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe
                          <FaArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-slate-400 text-xs text-center">
                      By subscribing, you agree to our{" "}
                      <Link href="/privacy-policy" className="text-blue-600 underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <FaCheck className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    You&apos;re subscribed!
                  </h3>
                  <p className="text-slate-500">
                    Check your inbox for a confirmation email.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-slate-200">
          {[
            { value: "10K+", label: "Subscribers" },
            { value: "Weekly", label: "Fresh Content" },
            { value: "95%", label: "Open Rate" },
            { value: "4.9/5", label: "Reader Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
