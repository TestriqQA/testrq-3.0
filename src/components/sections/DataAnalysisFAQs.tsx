'use client';

import React, { useState } from 'react';
import {
  FaChevronRight,
  FaChartBar,
  FaBrain,
  FaDatabase,
} from 'react-icons/fa';

const DataAnalysisFAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqCategories = [
    {
      category: 'Data Analytics Strategy 2026',
      icon: <FaChartBar className="h-5 w-5" />,
      faqs: [
        {
          question: 'What is the difference between descriptive and prescriptive analytics?',
          answer: 'Descriptive analytics summarizes past data to show "What happened." Prescriptive analytics goes even further. It uses predictive models to suggest the best steps to reach a specific goal.'
        },
        {
          question: 'Why Should I Outsource My Data Analyzing and Modeling to Testriq?',
          answer: 'Outsourcing to a dedicated analytics consulting firm like Testriq solves the global talent shortage. You get access to certified data scientists and an ISO 8000-aligned workflow. This provides elite results without the overhead of an in-house team.'
        },
        {
          question: 'How Analyzing Data Improves Customer Retention?',
          answer: 'By utilizing diagnostic analytics, we identify the "churn signals" in your customer data. This allows you to implement data-driven strategies that proactively engage at-risk customers before they leave.'
        },
        {
          question: 'Do you handle both Structured and Unstructured Data?',
          answer: 'Yes. Our solutions process both structured data like SQL databases and unstructured data such as emails and PDFs. This integration provides a 360-degree view of your entire business environment.'
        },
        {
          question: 'What are the best data visuales tools for my business?',
          answer: 'The choice depends on your scale. For startups, we often recommend custom business intelligence dashboards via Power BI or Tableau. For larger enterprises, we may implement Looker or D3.js for deeper, more interactive data insights services.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">
              ● Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className='text-brand-blue'>Frequently</span> Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our data analysis services, methodologies, technologies, and business value propositions.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-brand-blue to-blue-600 px-6 py-4">
                <div className="flex items-center text-white">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3">{category.category}</h3>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {category.faqs.map((faq, faqIndex) => {
                  const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                  return (
                    <div key={faqIndex} className="p-6">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg p-2 cursor-pointer"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h4>
                        {isOpen ? (
                          <FaChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <FaChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="mt-4 pl-2">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Need More Information?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaChartBar className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Case Studies</h4>
              <p className="text-gray-600 text-sm">
                Explore detailed case studies and success stories from our clients.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaBrain className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Free Consultation</h4>
              <p className="text-gray-600 text-sm">
                Schedule a free consultation to discuss your specific requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaDatabase className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Technical Resources</h4>
              <p className="text-gray-600 text-sm">
                Access our technical documentation and best practices guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisFAQs;

