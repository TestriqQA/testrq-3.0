"use client";

import React, { useState } from "react";
import { FaTools, FaCalculator, FaChartLine, FaLightbulb, FaCheckCircle, FaQuestionCircle, FaEnvelope, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ROICalculatorPage: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(true);
  const [email, setEmail] = useState("");

  const closeLightbox = () => setIsLightboxOpen(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);
    setEmail("");
    alert("Thank you! We'll notify you when the ROI calculator is available.");
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue text-white rounded-full text-sm md:text-base px-6 py-3 mb-6">
            <FaCalculator className="w-4 h-4" />
            <span>ROI Calculator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your <span className="text-brand-blue">ROI</span> Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Use our comprehensive ROI calculator to quantify the financial benefits of investing in professional software testing and quality assurance services. Discover how Testriq&apos;s solutions can transform your development process and deliver measurable business value.
          </p>
        </div>

        {/* Coming Soon Lightbox */}
        {isLightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white p-8 rounded-lg max-w-md w-full text-center">
              <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
              <p className="text-lg text-gray-600 mb-6">
                The ROI calculator will be available soon. Stay tuned!
              </p>
              <button
                onClick={closeLightbox}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Enhanced Introduction Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="text-center mb-8">
            <FaLightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding QA ROI: Why It Matters</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Business Impact of Quality Assurance</h3>
              <p className="text-gray-700 mb-4">
                Quality assurance is not just a technical necessity - it&apos;s a strategic business investment that directly impacts your bottom line. Professional QA services can reduce development costs by up to 50% by catching defects early in the development cycle, when they&apos;re significantly less expensive to fix.
              </p>
              <p className="text-gray-700 mb-4">
                Studies show that fixing a bug in production costs 10-100 times more than addressing it during the development phase. Our ROI calculator will help you quantify these savings and understand the true value of investing in comprehensive testing strategies.
              </p>
              <p className="text-gray-700">
                Beyond cost savings, quality assurance directly contributes to customer satisfaction, brand reputation, and market competitiveness. Applications with fewer bugs and better performance lead to higher user retention rates and increased revenue opportunities.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Metrics Our Calculator Will Measure</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Cost Avoidance:</strong>
                    <span className="text-gray-700"> Calculate savings from early bug detection and prevention of production issues.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Time to Market:</strong>
                    <span className="text-gray-700"> Measure how efficient testing processes accelerate product delivery.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Customer Satisfaction:</strong>
                    <span className="text-gray-700"> Quantify the revenue impact of improved user experience and reduced churn.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Team Productivity:</strong>
                    <span className="text-gray-700"> Assess efficiency gains from automated testing and streamlined processes.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Risk Mitigation:</strong>
                    <span className="text-gray-700"> Calculate the value of avoiding security breaches and compliance issues.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How the Calculator Works Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Our ROI Calculator Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Input Your Data</h3>
              <p className="text-gray-700">
                Provide information about your current development process, including project size, team composition, current bug detection rates, and development costs. Our calculator uses industry benchmarks to fill in gaps where specific data isn&apos;t available.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Analysis</h3>
              <p className="text-gray-700">
                Our proprietary algorithms analyze your inputs against industry standards and best practices. The calculator considers factors like defect density, test coverage, automation potential, and the specific characteristics of your industry and technology stack.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Detailed ROI Report</h3>
              <p className="text-gray-700">
                Receive a comprehensive report showing projected cost savings, efficiency improvements, risk reduction, and timeline benefits. The report includes both short-term and long-term ROI projections with confidence intervals.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">What Makes Our Calculator Unique</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Industry-Specific Models</h4>
                <p className="text-gray-700 text-sm">
                  Our calculator uses different calculation models based on your industry (fintech, healthcare, e-commerce, etc.) to provide more accurate projections that reflect sector-specific challenges and opportunities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Technology Stack Considerations</h4>
                <p className="text-gray-700 text-sm">
                  Whether you&apos;re working with web applications, mobile apps, APIs, or complex enterprise systems, our calculator adjusts its analysis to account for the unique testing requirements of your technology stack.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Scalability Factors</h4>
                <p className="text-gray-700 text-sm">
                  The calculator considers how testing investments scale with your business growth, providing projections that account for increasing complexity and volume over time.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Risk Assessment Integration</h4>
                <p className="text-gray-700 text-sm">
                  Beyond direct cost savings, our calculator quantifies risk mitigation benefits, including the value of avoiding security breaches, compliance violations, and reputation damage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Examples Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Real-World ROI Examples</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            While our calculator is being finalized, here are some examples of ROI achieved by our clients across different industries:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="bg-blue-100 rounded-lg p-4 mb-4">
                <FaChartLine className="w-8 h-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">E-commerce Platform</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bug Reduction:</span>
                  <span className="font-semibold text-green-600">75%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time to Market:</span>
                  <span className="font-semibold text-green-600">40% faster</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cost Savings:</span>
                  <span className="font-semibold text-green-600">$2.3M annually</span>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Comprehensive testing strategy including automation and performance testing resulted in significant improvements in customer satisfaction and reduced support costs.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="bg-green-100 rounded-lg p-4 mb-4">
                <FaChartLine className="w-8 h-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Financial Services</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Security Issues:</span>
                  <span className="font-semibold text-green-600">90% reduction</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Compliance Score:</span>
                  <span className="font-semibold text-green-600">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI:</span>
                  <span className="font-semibold text-green-600">340%</span>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Security-focused testing approach prevented potential breaches and ensured regulatory compliance, avoiding millions in potential fines and reputation damage.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="bg-purple-100 rounded-lg p-4 mb-4">
                <FaChartLine className="w-8 h-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Healthcare Platform</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">System Uptime:</span>
                  <span className="font-semibold text-green-600">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">User Satisfaction:</span>
                  <span className="font-semibold text-green-600">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Development Efficiency:</span>
                  <span className="font-semibold text-green-600">60% improvement</span>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Rigorous testing protocols ensured patient data security and system reliability, enabling the platform to handle critical healthcare operations with confidence.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/case-studies" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
              View Detailed Case Studies <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <FaQuestionCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-800">Why is QA ROI important for my business?</h3>
                </div>
                <p className="text-gray-700 ml-8">
                  QA ROI helps you make informed decisions about testing investments by quantifying the financial benefits. It demonstrates how quality assurance contributes to cost reduction, risk mitigation, and revenue growth, making it easier to justify testing budgets and resources.
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <FaQuestionCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-800">How accurate are the ROI calculations?</h3>
                </div>
                <p className="text-gray-700 ml-8">
                  Our calculations are based on industry benchmarks, historical data from similar projects, and proven methodologies. While individual results may vary, our models provide reliable estimates with confidence intervals to help you understand the range of potential outcomes.
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <FaQuestionCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-800">What factors influence QA ROI?</h3>
                </div>
                <p className="text-gray-700 ml-8">
                  Key factors include project complexity, current defect rates, team size, technology stack, industry regulations, automation potential, and the maturity of existing testing processes. Our calculator considers all these variables to provide personalized projections.
                </p>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <FaQuestionCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-800">Can I get a custom ROI analysis?</h3>
                </div>
                <p className="text-gray-700 ml-8">
                  Yes! While our calculator provides general estimates, we also offer detailed, customized ROI analyses that take into account your specific business context, goals, and constraints. Contact our team to discuss your unique requirements.
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <FaQuestionCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-800">How does Testriq measure ROI?</h3>
                </div>
                <p className="text-gray-700 ml-8">
                  We use a comprehensive approach that includes direct cost savings (reduced bug fixing costs), indirect benefits (improved customer satisfaction), risk mitigation value (avoided security breaches), and efficiency gains (faster development cycles).
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <FaQuestionCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-800">What if I don&apos;t have all the required data?</h3>
                </div>
                <p className="text-gray-700 ml-8">
                  Our calculator is designed to work with incomplete data by using industry averages and intelligent estimates. However, the more accurate data you provide, the more precise your ROI projections will be.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* ROI Calculator Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-brand-blue hover:ring-2 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FaTools className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">ROI Calculator</h3>
            </div>
            <p className="text-gray-600 mb-6">
              The ROI calculator is coming soon. Meanwhile, learn about how our comprehensive testing services and proven methodologies can help you optimize your development processes and achieve measurable business results.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">What to Expect:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Personalized ROI projections based on your specific context</li>
                <li>• Industry benchmark comparisons</li>
                <li>• Detailed cost-benefit analysis</li>
                <li>• Risk mitigation value assessment</li>
                <li>• Implementation timeline recommendations</li>
              </ul>
            </div>
          </div>
          
          {/* Early Access Signup */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <FaEnvelope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Get Early Access</h3>
            </div>
            <p className="mb-6 text-blue-100">
              Be the first to know when our ROI calculator launches. Sign up for early access and receive a complimentary consultation to discuss your testing strategy and potential ROI.
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              >
                Notify Me When Available
              </button>
            </form>
            <p className="text-xs text-blue-100 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Maximize Your Testing ROI?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Don&apos;t wait for the calculator to launch. Contact our experts today for a personalized consultation and discover how Testriq can help you achieve exceptional returns on your quality assurance investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-brand-blue text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/case-studies"
              className="inline-block bg-gray-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorPage;

