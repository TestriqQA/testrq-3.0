'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const QADocumentationFAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const faqs = [
    {
      category: "General",
      question: "What are the essential components of QA documentation?",
      answer: (<>The core parts are the Master Test Plan and Test Case Specifications. We also include the RTM, Defect Reports, and a final Test Summary Report. All these should ideally follow the ISO/IEC/IEEE 29119-3 standard for global consistency.</>)
    },
    {
      category: "Importance",
      question: "Why is documentation important in QA?",
      answer: "Documentation ensures traceability, facilitates knowledge transfer, satisfies regulatory audits (like FDA or ISO), and provides a baseline for automated testing. Without it, software quality becomes 'tribal knowledge,' which is a major risk for scaling companies."
    },
    {
      category: "Compliance",
      question: "Can you provide QA documentation for regulatory compliance audits?",
      answer: "Yes. We specialize in creating 'Audit-Ready' artifacts. We provide validation protocols and traceability matrices. These assets meet the strict requirements of FDA 21 CFR Part 11 and HIPAA."
    },
    {
      category: "Templates",
      question: "Do you offer templates for comprehensive QA documentation?",
      answer: "Yes, we provide a full suite of QA documentation templates. You can customize these to fit your specific tech stack and industry needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const categories = ['All', ...new Set(faqs.map(faq => faq.category))];

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium mb-4">
            <FaQuestionCircle className="mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Everything You Need to Know About QA Documentation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our <Link href="/blog/post/the-importance-of-qa-documentation-services-in-ensuring-quality">QA documentation services</Link>, processes,
            and how we can help improve your software quality and team productivity.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCategory(category);
                setOpenFAQ(null); // close any open FAQ when switching category
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${selectedCategory === category
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-600 hover:bg-gray-100 border-gray-200'
                } cursor-pointer`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                    {faq.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 leading-relaxed">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openFAQ === index ? (
                    <FaChevronUp className="text-gray-400" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="pl-20">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No FAQs available for this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default QADocumentationFAQs;
