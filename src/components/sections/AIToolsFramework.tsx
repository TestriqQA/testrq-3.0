// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import {
  FaTools,
  FaRocket,
  FaShieldAlt,
  FaBalanceScale,
  FaNetworkWired,
} from "react-icons/fa";
import Image from "next/image";

import Link from "next/link";

const AIToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      category: "Automated Validation Framework",
      icon: <FaTools className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "TFMA",
          description: "High-integrity model validation",
          icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" aria-label="TFMA Logo" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="text-brand-blue"><path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"></path></svg>,
        },
        {
          name: "Deepchecks",
          description: "Continuous validation for ML models",
          icon: <Image src="/Deepchecks_Logo.png" alt="Deepchecks Logo" width={20} height={20} className="object-contain" />,
        },
        {
          name: "Great Expectations",
          description: "Data validation framework",
          icon: <Image src="/Great_Expectations_Logo.png" alt="Great Expectations Logo" width={20} height={20} className="object-contain" />,
        },
      ],
    },
    {
      category: "Explainability & Ethics",
      icon: <FaBalanceScale className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "SHAP",
          description: "Shapley Additive Explanations",
          icon: <Image src="/SHAP_Logo.png" alt="SHAP Logo" width={20} height={20} className="object-contain" />,
        },
        {
          name: "LIME",
          description: "Local Interpretable Explanations",
          icon: <Image src="/LIME_Logo.png" alt="LIME Logo" width={20} height={20} className="object-contain" />,
        },
        {
          name: "AI Fairness 360",
          description: "Bias detection & mitigation",
          icon: <Image src="/AI_Fairness_360_Logo.png" alt="AI Fairness 360 Logo" width={20} height={20} className="object-contain" />,
        },
        {
          name: "Guardrails AI",
          description: "Safety guardrails for LLMs",
          icon: <Image src="/Guardrails_AI_Logo.png" alt="Guardrails AI Logo" width={20} height={20} className="object-contain" />,
        },
      ],
    },
    {
      category: "Performance & Drift",
      icon: <FaRocket className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Arize AI",
          description: "Model monitoring & drift detection",
          icon: <Image src="/Arize_AI_Logo.png" alt="Arize AI Logo" width={20} height={20} className="object-contain" />,
        },
        {
          name: "Weights & Biases",
          description: "Experiment tracking & versioning",
          icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" aria-label="Weights & Biases Logo" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="text-brand-blue"><path d="M2.48 0a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1zm19.04 0a1.55 1.55 0 1 0 0 3.101 1.55 1.55 0 0 0 0-3.101zM12 2.295a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1zM2.48 5.272a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96zm19.04 0a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96zM12 8.496a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1zm-9.52 3.907a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1zm19.04 0a1.55 1.55 0 1 0 0 3.102 1.55 1.55 0 0 0 0-3.102zM12 13.767a2.48 2.48 0 1 0 0 4.962 2.48 2.48 0 0 0 0-4.962zm-9.52 3.907a2.48 2.48 0 1 0 .001 4.962 2.48 2.48 0 0 0 0-4.962zm19.04.93a1.55 1.55 0 1 0 0 3.102 1.55 1.55 0 0 0 0-3.101zM12 20.9a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1Z"></path></svg>,
        },
        {
          name: "MLflow",
          description: "Model lifecycle management",
          icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" aria-label="MLflow Logo" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="text-brand-blue"><path d="M11.883.002a12.044 12.044 0 0 0-9.326 19.463l3.668-2.694A7.573 7.573 0 0 1 12.043 4.45v2.867l6.908-5.14A12.012 12.012 0 0 0 11.883.002zm9.562 4.533L17.777 7.23a7.573 7.573 0 0 1-5.818 12.322v-2.867l-6.908 5.14a12.046 12.046 0 0 0 16.394-17.29z"></path></svg>,
        },
      ],
    },
    {
      category: "Defending Your AI",
      icon: <FaShieldAlt className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "ART Toolbox",
          description: "Adversarial Robustness Toolbox",
          icon: <Image src="/ART_Toolbox_Logo.png" alt="ART Toolbox Logo" width={20} height={20} className="object-contain" />,
        },
        {
          name: "Garak",
          description: "LLM vulnerability scanner",
          icon: <Image src="/Garak_Logo.png" alt="Garak Logo" width={20} height={20} className="object-contain" />,
        },
      ],
    },
    {
      category: "Infrastructure",
      icon: <FaNetworkWired className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "AWS SageMaker",
          description: (
            <>
              <Link href="/web-application-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Cloud-native</Link> ML testing
            </>
          ),
          icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" aria-label="AWS SageMaker Logo" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="text-brand-blue"><path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z"></path></svg>,
        },
        {
          name: "Azure ML",
          description: "Enterprise ML platform",
          icon: <Image src="/Azure_ML_Logo.png" alt="Azure ML Logo" width={20} height={20} className="object-contain" />,
        },
        {
          name: "Google Vertex AI",
          description: "Unified AI platform",
          icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" aria-label="Google Vertex AI Logo" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="text-brand-blue"><path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z"></path></svg>,
        },
      ],
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Technical Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Tech Stack for{" "}
            <span className="text-[theme(color.brand.blue)]">
              Intelligent Automation Testing
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We utilize a high-difficulty tech stack to perform deep-tier validation across the entire AI lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold text-gray-900 ml-3">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {tool.icon && <span>{tool.icon}</span>}
                      <h4 className="font-semibold text-gray-900">
                        {tool.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[theme(color.brand.blue)]/10 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Custom AI Testing Solutions
          </h3>
          <p className="text-gray-700 text-lg mb-3 max-w-3xl mx-auto">
            We can adapt our testing approach to work with your specific AI
            models, <Link href='blog/post/etl-testing-tools-frameworks'>frameworks</Link>, and deployment environments, ensuring
            comprehensive coverage for your unique AI applications and use
            cases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIToolsFramework;
