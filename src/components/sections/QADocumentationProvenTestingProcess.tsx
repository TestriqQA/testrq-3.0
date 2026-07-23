import Link from 'next/link';
import React from 'react';
import { FaSearch, FaEdit, FaCheckCircle, FaUsers, FaChartLine, FaCog, FaFileAlt } from 'react-icons/fa';

const QADocumentationProvenTestingProcess = () => {
  const processSteps = [
    {
      id: 1,
      icon: FaSearch,
      title: "Evaluate Requirements",
      duration: "2-3 days",
      description: "Our team scrutinizes your PRDs to remove vague details and clarify ambiguity before development begins.",
      activities: [
        "PRD scrutiny and gap analysis",
        "Ambiguity removal sessions",
        "Requirement refinement workshops",
        "Technical feasibility check"
      ],
      deliverables: [
        "Refined Requirement Specs",
        "Clarification Log",
        "Technical Audit Report",
        "Refined PRD Feedback"
      ],
      nextStep: "Definition of Done (DoD)"
    },
    {
      id: 2,
      icon: FaCheckCircle,
      title: "Definition of Done (DoD)",
      duration: "1-2 days",
      description: "We work with your stakeholders to define exactly what 'Quality' looks like for each sprint and release.",
      activities: [
        "Stakeholder quality alignment",
        "Sprint exit criteria definition",
        "Release readiness mapping",
        "Quality threshold setting"
      ],
      deliverables: [
        "DoD Framework Document",
        "Quality Metrics Baseline",
        "Stakeholder Sign-off Matrix",
        "Sprint Quality Gates"
      ],
      nextStep: "Entry & Exit Criteria"
    },
    {
      id: 3,
      icon: FaEdit,
      title: "Entry & Exit Criteria",
      duration: "1-2 days",
      description: "Defining specific conditions required to start and stop testing phases, preventing 'Scope Creep'.",
      activities: [
        "Testing phase boundary definition",
        "Resource availability check",
        "Stop-Testing threshold setting",
        "Scope creep prevention mapping"
      ],
      deliverables: [
        "Phase Boundary Docs",
        "Entry/Exit Checklists",
        "Scope Management Plan",
        "Resource Readiness Report"
      ],
      nextStep: "Standard Operating Procedures (SOPs)"
    },
    {
      id: 4,
      icon: FaCog,
      title: "Standard Operating Procedures (SOPs)",
      duration: "2-4 days",
      description: "We draft SOPs for your internal team to ensure long-term documentation health and consistency.",
      activities: [
        "Operational workflow drafting",
        "Tool usage guidelines",
        "Internal team training skeleton",
        "Maintenance protocol creation"
      ],
      deliverables: [
        "QA SOP Handbook",
        "Framework Guidelines",
        "Maintenance Protocols",
        "Team Onboarding Docs"
      ],
      nextStep: "Test Script Documentation"
    },
    {
      id: 5,
      icon: FaFileAlt,
      title: "Test Script Documentation",
      duration: "5-8 days",
      description: "We provide manual and automated test script skeletons that are scalable and easy to maintain.",
      activities: [
        "Test script skeleton design",
        "Manual script development",
        <><Link href="/automation-testing-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Automated script frameworking</Link></>,
        "Reusability mapping"
      ],
      deliverables: [
        <><Link href="/technology-stack" className="text-gray-800 hover:text-brand-blue hover:underline decoration-brand-blue">Test Script Repository</Link></>,
        "Automation Skeletons",
        "Scalable Script Framework",
        "Maintenance Guidelines"
      ],
      nextStep: "Continuous Monitoring"
    },
    {
      id: 6,
      icon: FaChartLine,
      title: "Continuous Monitoring",
      duration: "Ongoing",
      description: "Monthly audits of your documentation to ensure it hasn't drifted from the current build.",
      activities: [
        "Monthly documentation audits",
        "Build-drift analysis",
        "Version control sync-check",
        "Continuous feedback loops"
      ],
      deliverables: [
        "Monthly Audit Reports",
        "Maintenance Logs",
        "Drift Analysis Summary",
        "Optimization Roadmap"
      ],
      nextStep: "Documentation Lifecycle"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium mb-4">
            <FaCheckCircle className="mr-2" />
            Our Proven Documentation Process
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Systematic Approach to QA Documentation Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive 6-step QA documentation process ensures consistent, high-quality QA deliverables that meet your specific project-specific documentation <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">requirements</Link> and enhance your team&apos;s productivity and effectiveness.

          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden lg:block"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className={`relative ${isEven ? 'lg:pr-8' : 'lg:pl-16'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full hidden lg:block" style={{ top: '2rem' }}></div>

                  {/* Content Card */}
                  <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 ${isEven ? 'lg:ml-16' : 'lg:mr-16'}`}>
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Content */}
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="text-xl text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                                Step {step.id}
                              </span>
                              <span className="text-sm text-gray-500">{step.duration}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Key Activities */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Activities:</h4>
                          <div className="space-y-2">
                            {step.activities.map((activity, activityIndex) => (
                              <div key={activityIndex} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Content - Deliverables */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Deliverables & Outputs:</h4>
                        <div className="space-y-3 mb-6">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                              <span className="text-gray-800 text-sm font-medium">{deliverable}</span>
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Next Step */}
                        {step.nextStep && (
                          <div className="border-t border-gray-200 pt-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">Next:</span>
                              <span className="font-medium text-blue-600">{step.nextStep}</span>
                              <svg className="ml-2 w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic QA process documentation approach ensures consistent <Link href="/blog/post/issue-documentation-in-software-testing-how-detailed-bug-reporting-enhances-web-application-quality">quality assurance</Link>, efficient delivery, and measurable results that enhance your team&apos;s productivity and overall project-specific documentation success..

            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-2xl text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Proven Methodology</h4>
              <p className="text-gray-600">
                Our 6-step process has been refined through 150+ successful documentation projects,
                ensuring consistent quality and efficient delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Approach</h4>
              <p className="text-gray-600">
                Continuous stakeholder involvement and feedback <Link href="/blog/post/issue-documentation-in-software-testing-how-detailed-bug-reporting-enhances-web-application-quality">integration</Link> ensures documentation
                meets your specific needs and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-2xl text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Measurable Results</h4>
              <p className="text-gray-600">
                Our process delivers measurable improvements in team efficiency, <Link href="/blog/post/issue-documentation-in-software-testing-how-detailed-bug-reporting-enhances-web-application-quality">quality consistency</Link>,
                and project delivery timelines.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Documentation Project?</h3>
            <p className="text-xl mb-8 opacity-90">
              Our proven process ensures <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">comprehensive</Link>, high-quality documentation that enhances your team&apos;s productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="px-8 py-4 cursor-pointer border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QADocumentationProvenTestingProcess;

