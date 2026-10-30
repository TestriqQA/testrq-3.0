
'use client';

import React, { useState } from 'react';
import { CityData } from "@/app/lib/CityData";
import { ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';

interface CityTestingFAQsSectionProps {
  cityData: CityData;
}

const CityTestingFAQsSection: React.FC<CityTestingFAQsSectionProps> = ({ cityData }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {cityData.faqsContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {cityData.faqsContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cityData.faqsContent.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between cursor-pointer"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  <div className="px-6 pb-6" hidden={openFAQ !== index}>
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-700">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-sm text-gray-600">{cityData.ctaContent.contactInfo.phone}</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <Mail className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-sm text-gray-600">{cityData.ctaContent.contactInfo.email}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityTestingFAQsSection;


