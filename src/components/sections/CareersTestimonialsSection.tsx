"use client";

import React, { useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const CareersTestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior QA Automation Engineer",
      department: "Test Automation",
      tenure: "2.5 years",
      location: "Remote, USA",
      avatar: "SJ",
      rating: 5,
      quote:
        "Working at Testriq QA Lab has been transformative for my career in software testing. The learning opportunities, collaborative QA culture, and cutting-edge automation testing projects make every day exciting. I've grown more in two years here than in my previous five years elsewhere. The mentorship program, exposure to tools like Selenium, Cypress, and Postman, and the $5K learning and development budget have helped me become an expert in multiple testing frameworks and domains like performance testing and API validation.",
      highlights: ["Career Growth", "Learning Budget", "Mentorship"],
      social: {
        linkedin: "https://linkedin.com/in/sarah-johnson",
        twitter: "https://twitter.com/sarahj_qa",
      },
    },
    {
      name: "Marcus Chen",
      role: "Lead Performance Engineer",
      department: "Performance Testing",
      tenure: "3 years",
      location: "London, UK",
      avatar: "MC",
      rating: 5,
      quote:
        "The remote-first culture at Testriq is incredible. Despite being based in London while most of my team is distributed globally, I feel more connected to my colleagues than I ever did in traditional office environments. The flexibility to work when I'm most productive, combined with regular team meetups, creates the perfect work-life balance.",
      highlights: ["Remote Culture", "Work-Life Balance", "Global Team"],
      social: {
        linkedin: "https://linkedin.com/in/marcus-chen",
        github: "https://github.com/marcusc",
      },
    },
    {
      name: "Priya Patel",
      role: "Mobile QA Specialist",
      department: "Mobile Testing",
      tenure: "1.5 years",
      location: "Remote, India",
      avatar: "PP",
      rating: 5,
      quote:
        "As someone who transitioned from manual to automation testing, Testriq provided the perfect environment for growth. The team's support, comprehensive training programs, and hands-on projects helped me become proficient in mobile automation tools. The diversity and inclusion initiatives make everyone feel valued and heard.",
      highlights: [
        "Skill Transition",
        "Training Programs",
        "Diversity & Inclusion",
      ],
      social: {
        linkedin: "https://linkedin.com/in/priya-patel-qa",
        twitter: "https://twitter.com/priya_qa",
      },
    },
    {
      name: "David Rodriguez",
      role: "Security Testing Engineer",
      department: "Security Testing",
      tenure: "2 years",
      location: "New York, NY",
      avatar: "DR",
      rating: 5,
      quote:
        "The technical challenges at Testriq are exactly what I was looking for in my career. Working on security testing for Fortune 500 clients while having access to the latest tools and technologies keeps me engaged and motivated. The company's investment in employee development, including conference attendance and certification support, shows they truly care about our professional growth.",
      highlights: [
        "Technical Challenges",
        "Latest Technologies",
        "Professional Development",
      ],
      social: {
        linkedin: "https://linkedin.com/in/david-rodriguez-security",
        github: "https://github.com/davidr-sec",
      },
    },
    {
      name: "Emily Watson",
      role: "Junior QA Analyst",
      department: "Manual Testing",
      tenure: "8 months",
      location: "Remote, Canada",
      avatar: "EW",
      rating: 5,
      quote:
        "Starting my QA career at Testriq was the best decision I could have made. The onboarding process was thorough, and I was assigned a mentor who guided me through my first projects. The team is incredibly supportive, and there's never a question too small to ask. The company culture truly lives up to its reputation - it's collaborative, inclusive, and focused on continuous learning.",
      highlights: ["Great Onboarding", "Mentorship", "Supportive Team"],
      social: {
        linkedin: "https://linkedin.com/in/emily-watson-qa",
      },
    },
    {
      name: "Ahmed Hassan",
      role: "API Testing Specialist",
      department: "Test Automation",
      tenure: "1 year",
      location: "Remote, Egypt",
      avatar: "AH",
      rating: 5,
      quote:
        "The global perspective at Testriq is amazing. Working with team members from different countries and cultures has broadened my understanding of software testing and business requirements. The company's commitment to work-life balance is genuine - unlimited PTO isn't just a policy, it's actively encouraged. Management truly trusts us to manage our time effectively.",
      highlights: [
        "Global Perspective",
        "Work-Life Balance",
        "Trust & Autonomy",
      ],
      social: {
        linkedin: "https://linkedin.com/in/ahmed-hassan-api",
        github: "https://github.com/ahmed-api",
      },
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="py-16 bg-white px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaStar className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Employee Stories
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hear From Our
            <span className="block text-[theme(color.brand.blue)]">
              Team Members
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from QA professionals about their career growth, learning experiences, and professional journey at Testriq.

          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-100 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(currentTestimonialData.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              <FaQuoteLeft className="w-8 h-8 text-[theme(color.brand.blue)] opacity-50 mb-6" />

              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                &quot;{currentTestimonialData.quote}&quot;
              </blockquote>

              <div className="flex flex-wrap gap-3 mb-8">
                {currentTestimonialData.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[theme(color.brand.blue)] bg-opacity-10 text-white text-sm rounded-full font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Employee Info */}
            <div className="text-center lg:text-left">
              <div className="w-24 h-24 bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto lg:mx-0 mb-6">
                {currentTestimonialData.avatar}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {currentTestimonialData.name}
              </h3>
              <p className="text-[theme(color.brand.blue)] font-semibold mb-1">
                {currentTestimonialData.role}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                {currentTestimonialData.department}
              </p>
              <p className="text-gray-500 text-sm mb-1">
                {currentTestimonialData.location}
              </p>
              <p className="text-gray-500 text-sm mb-6">
                {currentTestimonialData.tenure} at Testriq
              </p>

              {/* Social Links */}
              <div className="flex gap-3 justify-center lg:justify-start">
                {currentTestimonialData.social.linkedin && (
                  <a
                    href={currentTestimonialData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                )}
                {currentTestimonialData.social.twitter && (
                  <a
                    href={currentTestimonialData.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center text-white transition-colors"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                )}
                {currentTestimonialData.social.github && (
                  <a
                    href={currentTestimonialData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-900 rounded-lg flex items-center justify-center text-white transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            <button
              onClick={prevTestimonial}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <FaChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-[theme(color.brand.blue)]"
                      : "bg-gray-300 hover:bg-gray-400"
                  } cursor-pointer`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span className="hidden sm:inline">Next</span>
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                index === currentTestimonial
                  ? "bg-[theme(color.brand.blue)] bg-opacity-10 border-[theme(color.brand.blue)]"
                  : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                &quot;{testimonial.quote.substring(0, 120)}...&quot;
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        
      </div>
    </section>
  );
};

export default CareersTestimonialsSection;
