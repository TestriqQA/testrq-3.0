'use client';

import React from 'react';
import { CityData } from "@/app/lib/CityData";
import { Building, CheckCircle } from 'lucide-react';

interface CityTestingCaseStudiesSectionProps {
  cityData: CityData;
}

const CityTestingCaseStudiesSection: React.FC<CityTestingCaseStudiesSectionProps> = ({ cityData }) => {
  // const [activeStudy, setActiveStudy] = useState(0);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {cityData.caseStudiesContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {cityData.caseStudiesContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cityData.caseStudiesContent.studies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                {study.company.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {study.company}
              </h3>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Building className="h-4 w-4 mr-1" />
                {study.industry}
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                {study.challenge}
              </p>
              <div className="space-y-2">
                {study.results.slice(0, 2).map((result, idx) => (
                  <div key={idx} className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityTestingCaseStudiesSection;

