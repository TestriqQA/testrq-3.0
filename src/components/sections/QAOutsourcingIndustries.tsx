import React from "react";
import {
  FaBuilding,
  FaHospital,
  FaShoppingCart,
  FaCloud,
  FaGraduationCap,
  FaPhone,
  FaSitemap,
  FaLayerGroup,
} from "react-icons/fa";

const industries = [
  { label: "BFSI & Fintech", icon: FaBuilding },
  { label: "Healthcare", icon: FaHospital },
  { label: "E-commerce & Retail", icon: FaShoppingCart },
  { label: "SaaS", icon: FaCloud },
  { label: "EdTech", icon: FaGraduationCap },
  { label: "Telecom", icon: FaPhone },
  { label: "IoT", icon: FaSitemap },
  { label: "and more", icon: FaLayerGroup },
];

const QAOutsourcingIndustries: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Industries</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries <span className="text-brand-blue">We Serve</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.label}
                className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 text-gray-700 font-medium hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <Icon className="w-4 h-4" />
                <span>{industry.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QAOutsourcingIndustries;
