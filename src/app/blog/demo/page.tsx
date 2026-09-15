import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import VisualTableOfContents, { sectionIcons } from "@/components/sections/VisualTableOfContents";
import ContentSection from "@/components/sections/ContentSection";
import ResourceSidebar from "@/components/sections/ResourceSidebar";
import BlogDemoHeroSection from "@/components/sections/BlogPostHeroSection";
import Link from "next/link";

export const metadata: Metadata = {
    // `absolute` bypasses the root layout's "%s | Testriq" template,
    // which would otherwise print the brand twice (F-71).
    title: { absolute: "Performance Testing in 2026 | Testriq Blog Demo" },
    description: "Master performance testing with our comprehensive guide covering types, tools, best practices, and real-world case studies.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function BlogDemoPage() {
    const sections = [
        { id: "introduction", title: "Introduction & Overview", icon: sectionIcons.intro, time: "2 min" },
        { id: "what-is", title: "What is Performance Testing?", icon: sectionIcons.definition, time: "3 min" },
        { id: "types", title: "Types of Performance Tests", icon: sectionIcons.types, time: "4 min" },
        { id: "tools", title: "Performance Testing Tools", icon: sectionIcons.tools, time: "3 min" },
        { id: "best-practices", title: "Best Practices & Tips", icon: sectionIcons.practices, time: "4 min" },
        { id: "case-study", title: "Real-World Case Study", icon: sectionIcons.caseStudy, time: "2 min" },
        { id: "roadmap", title: "Implementation Roadmap", icon: sectionIcons.roadmap, time: "2 min" },
        { id: "conclusion", title: "Conclusion & Next Steps", icon: sectionIcons.conclusion, time: "1 min" },
    ];

    return (
        <MainLayout>
            <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">


                {/* Hero Section */}
                <BlogDemoHeroSection />

                {/* Main Content - Three Column Layout */}
                <div className="relative max-w-[1600px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                        {/* Left: Visual TOC */}
                        <div className="xl:col-span-3">
                            <VisualTableOfContents sections={sections} />
                        </div>

                        {/* Center: Content - ALL SECTIONS USE "top" layout */}
                        <div className="xl:col-span-6">
                            {/* Introduction Section */}
                            <ContentSection
                                id="introduction"
                                title="Why Performance Testing Matters in 2026"
                                image="/blog-demo/hero_performance_dashboard_1769850360523.png"
                                imagePosition="top"
                                index={1}
                                content={
                                    <div>
                                        <p className="text-lg text-slate-700 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-2 first-letter:float-left">
                                            In today&apos;s digital landscape, where user expectations are higher than ever, performance testing has become a critical component of software quality assurance. A mere one-second delay in page load time can result in a 7% reduction in conversions, making performance optimization not just a technical concern but a business imperative.
                                        </p>
                                        <p className="mt-4 text-slate-700 leading-relaxed">
                                            Performance testing ensures your applications can handle real-world usage scenarios, from normal day-to-day traffic to peak loads during promotional events. It&apos;s about identifying bottlenecks before they impact your users and ensuring your infrastructure scales gracefully as your user base grows.
                                        </p>
                                        <div className="mt-6 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
                                            <h4 className="font-bold text-blue-900 mb-2">Key Statistic</h4>
                                            <p className="text-blue-800">
                                                According to recent studies, <strong>53% of mobile users abandon sites</strong> that take longer than 3 seconds to load. Performance testing helps you stay competitive in this demanding environment.
                                            </p>
                                        </div>
                                    </div>
                                }
                            />

                            <ContentSection
                                id="what-is"
                                title="What is Performance Testing?"
                                image="/blog-demo/metrics_comparison_visual_1769850381257.png"
                                imagePosition="top"
                                index={2}
                                content={
                                    <div>
                                        <p className="text-slate-700 leading-relaxed">
                                            Performance testing is a type of software testing that evaluates how a system performs under various conditions. It measures key metrics like response time, throughput, and resource utilization to ensure your application meets performance requirements.
                                        </p>
                                        <h4 className="text-xl font-bold text-slate-900 mt-6 mb-3">Core Performance Metrics</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                                <div>
                                                    <strong className="text-slate-900">Response Time:</strong>
                                                    <span className="text-slate-700"> How quickly your system responds to user requests. Target: under 200ms for optimal UX.</span>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                                <div>
                                                    <strong className="text-slate-900">Throughput:</strong>
                                                    <span className="text-slate-700"> The number of transactions your system can handle per second. Higher is better.</span>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                                <div>
                                                    <strong className="text-slate-900">Resource Utilization:</strong>
                                                    <span className="text-slate-700"> CPU, memory, and network usage under load. Should remain below 75% for stability.</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            />

                            <ContentSection
                                id="types"
                                title="Types of Performance Tests"
                                image="/blog-demo/test_types_comparison_1769850401800.png"
                                imagePosition="top"
                                index={3}
                                content={
                                    <div>
                                        <p className="text-slate-700 leading-relaxed mb-6">
                                            Different scenarios require different testing approaches. Understanding which type of performance test to run is crucial for comprehensive coverage.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-slate-50 rounded-xl">
                                                <h5 className="font-bold text-slate-900 mb-2">🔷 Load Testing</h5>
                                                <p className="text-sm text-slate-700">Evaluates system performance under expected normal and peak conditions. Essential for capacity planning.</p>
                                            </div>
                                            <div className="p-4 bg-slate-50 rounded-xl">
                                                <h5 className="font-bold text-slate-900 mb-2">🔷 Stress Testing</h5>
                                                <p className="text-sm text-slate-700">Pushes the system beyond normal limits to identify breaking points and failure modes.</p>
                                            </div>
                                            <div className="p-4 bg-slate-50 rounded-xl">
                                                <h5 className="font-bold text-slate-900 mb-2">🔷 Spike Testing</h5>
                                                <p className="text-sm text-slate-700">Evaluates system behavior during sudden, extreme increases in load (like flash sales).</p>
                                            </div>
                                            <div className="p-4 bg-slate-50 rounded-xl">
                                                <h5 className="font-bold text-slate-900 mb-2">🔷 Endurance Testing</h5>
                                                <p className="text-sm text-slate-700">Tests system stability over extended periods to detect memory leaks and degradation.</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />

                            <ContentSection
                                id="tools"
                                title="Top Performance Testing Tools"
                                image="/blog-demo/testing_tools_showcase_1769850418872.png"
                                imagePosition="top"
                                index={4}
                                content={
                                    <div>
                                        <p className="text-slate-700 leading-relaxed mb-6">
                                            Choosing the right tool can make or break your performance testing initiative. Here are the industry leaders in 2026:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="p-5 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow">
                                                <h5 className="font-bold text-slate-900 mb-2">Apache JMeter</h5>
                                                <p className="text-sm text-slate-700 mb-3">Open-source, Java-based tool with extensive protocol support. Great for beginners and experts alike.</p>
                                                <div className="flex gap-1">
                                                    {[...Array(4)].map((_, i) => (
                                                        <span key={i} className="text-amber-400">★</span>
                                                    ))}
                                                    <span className="text-slate-300">★</span>
                                                </div>
                                            </div>
                                            <div className="p-5 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow">
                                                <h5 className="font-bold text-slate-900 mb-2">Gatling</h5>
                                                <p className="text-sm text-slate-700 mb-3">Scala/Kotlin-based, high-performance tool perfect for DevOps and CI/CD integration.</p>
                                                <div className="flex gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i} className="text-amber-400">★</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="p-5 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow">
                                                <h5 className="font-bold text-slate-900 mb-2">K6</h5>
                                                <p className="text-sm text-slate-700 mb-3">Modern, developer-friendly tool with JavaScript scripting and excellent cloud integration.</p>
                                                <div className="flex gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i} className="text-amber-400">★</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="p-5 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow">
                                                <h5 className="font-bold text-slate-900 mb-2">LoadRunner</h5>
                                                <p className="text-sm text-slate-700 mb-3">Enterprise-grade solution with comprehensive protocol support and advanced analytics.</p>
                                                <div className="flex gap-1">
                                                    {[...Array(4)].map((_, i) => (
                                                        <span key={i} className="text-amber-400">★</span>
                                                    ))}
                                                    <span className="text-slate-300">★</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />

                            <ContentSection
                                id="best-practices"
                                title="Performance Testing Best Practices"
                                image="/blog-demo/best_practices_checklist_1769850453177.png"
                                imagePosition="top"
                                index={5}
                                content={
                                    <div>
                                        <p className="text-slate-700 leading-relaxed mb-6">
                                            Following these proven best practices will ensure your performance testing efforts deliver maximum value and actionable insights.
                                        </p>
                                        <div className="space-y-3">
                                            {[
                                                "Define clear performance goals and acceptance criteria before testing",
                                                "Create realistic test scenarios based on actual user behavior patterns",
                                                "Use production-like data and environments for accurate results",
                                                "Monitor all system resources during tests (CPU, memory, network, disk)",
                                                "Implement continuous performance testing in your CI/CD pipeline",
                                                "Test with varying network conditions to simulate real-world scenarios",
                                                "Establish baseline metrics for comparison and trend analysis",
                                                "Conduct both load and stress tests to understand system limits",
                                                "Analyze and report results with actionable recommendations",
                                                "Collaborate across teams to address performance bottlenecks",
                                            ].map((practice, index) => (
                                                <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                                                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                                                    <span className="text-slate-700 text-sm leading-relaxed">{practice}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                }
                            />

                            <ContentSection
                                id="case-study"
                                title="Real-World Success Story"
                                image="/blog-demo/case_study_results_1769850468764.png"
                                imagePosition="top"
                                index={6}
                                content={
                                    <div>
                                        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-6">
                                            <h4 className="font-bold text-blue-900 mb-2">Client: Global E-Commerce Platform</h4>
                                            <p className="text-blue-800 text-sm">
                                                <strong>Industry:</strong> Retail • <strong>Users:</strong> 5M+ daily • <strong>Revenue:</strong> $2B annually
                                            </p>
                                        </div>

                                        <h5 className="font-bold text-slate-900 mb-3">The Challenge</h5>
                                        <p className="text-slate-700 mb-4">
                                            The platform was experiencing severe performance degradation during peak shopping hours, with response times exceeding 8 seconds and a 15% error rate during Black Friday 2025. This resulted in $4.2M in lost revenue over a single weekend.
                                        </p>

                                        <h5 className="font-bold text-slate-900 mb-3">Our Solution</h5>
                                        <p className="text-slate-700 mb-4">
                                            We implemented a comprehensive performance testing strategy using Gatling and K6, identifying critical bottlenecks in their database queries, API endpoints, and caching layer. Our team optimized 47 database queries, implemented Redis caching, and restructured their microservices architecture.
                                        </p>

                                        <h5 className="font-bold text-slate-900 mb-3">The Results</h5>
                                        <div className="grid grid-cols-3 gap-4 mt-4">
                                            <div className="text-center p-4 bg-green-50 rounded-xl">
                                                <div className="text-3xl font-black text-green-600 mb-1">65%</div>
                                                <div className="text-xs text-green-800">Faster Response Time</div>
                                            </div>
                                            <div className="text-center p-4 bg-green-50 rounded-xl">
                                                <div className="text-3xl font-black text-green-600 mb-1">92%</div>
                                                <div className="text-xs text-green-800">Error Reduction</div>
                                            </div>
                                            <div className="text-center p-4 bg-green-50 rounded-xl">
                                                <div className="text-3xl font-black text-green-600 mb-1">3x</div>
                                                <div className="text-xs text-green-800">Throughput Increase</div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />

                            <ContentSection
                                id="roadmap"
                                title="4-Week Implementation Roadmap"
                                image="/blog-demo/roadmap_timeline_1769850487593.png"
                                imagePosition="top"
                                index={7}
                                content={
                                    <div>
                                        <p className="text-slate-700 leading-relaxed mb-6">
                                            Ready to implement performance testing in your organization? Follow this proven 4-week roadmap to get started:
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                {
                                                    week: "Week 1",
                                                    title: "Planning & Requirements",
                                                    tasks: [
                                                        "Define performance goals and SLAs",
                                                        "Identify critical user journeys and scenarios",
                                                        "Select performance testing tools",
                                                        "Set up testing environment",
                                                    ],
                                                },
                                                {
                                                    week: "Week 2",
                                                    title: "Test Script Development",
                                                    tasks: [
                                                        "Create baseline performance tests",
                                                        "Develop load testing scripts",
                                                        "Implement monitoring and logging",
                                                        "Conduct initial test runs",
                                                    ],
                                                },
                                                {
                                                    week: "Week 3",
                                                    title: "Execution & Analysis",
                                                    tasks: [
                                                        "Run comprehensive test suites",
                                                        "Monitor system resources",
                                                        "Identify performance bottlenecks",
                                                        "Document findings and recommendations",
                                                    ],
                                                },
                                                {
                                                    week: "Week 4",
                                                    title: "Optimization & Integration",
                                                    tasks: [
                                                        "Implement performance improvements",
                                                        "Re-test and validate optimizations",
                                                        "Integrate tests into CI/CD pipeline",
                                                        "Create performance dashboards",
                                                    ],
                                                },
                                            ].map((phase, index) => (
                                                <div key={index} className="relative pl-8 pb-6 border-l-4 border-blue-200 last:border-l-0 last:pb-0">
                                                    <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                        {index + 1}
                                                    </div>
                                                    <div>
                                                        <div className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">
                                                            {phase.week}
                                                        </div>
                                                        <h5 className="text-lg font-bold text-slate-900 mb-3">{phase.title}</h5>
                                                        <ul className="space-y-2">
                                                            {phase.tasks.map((task, taskIndex) => (
                                                                <li key={taskIndex} className="text-sm text-slate-700 flex items-start gap-2">
                                                                    <span className="text-blue-500 mt-0.5">•</span>
                                                                    <span>{task}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                }
                            />

                            <ContentSection
                                id="conclusion"
                                title="Conclusion & Next Steps"
                                image="/blog-demo/hero_performance_dashboard_1769850360523.png"
                                imagePosition="top"
                                index={8}
                                content={
                                    <div>
                                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                            Performance testing is no longer optional—it&apos;s a critical component of delivering exceptional user experiences and maintaining competitive advantage. By implementing the strategies, tools, and best practices outlined in this guide, you&apos;ll be well-equipped to ensure your applications perform flawlessly under any conditions.
                                        </p>

                                        <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl text-white mb-6">
                                            <h4 className="text-2xl font-bold mb-4">Ready to Elevate Your Performance Testing?</h4>
                                            <p className="text-blue-100 mb-6">
                                                Our team of performance testing experts is here to help you implement these strategies and achieve measurable results.
                                            </p>
                                            <div className="flex flex-wrap gap-4">
                                                <Link href="/contact" className="px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all">
                                                    Schedule Consultation
                                                </Link>
                                                <Link href="/services/performance-testing" className="px-6 py-3 bg-blue-500/30 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-blue-500/50 transition-all">
                                                    Explore Services
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="border-t border-slate-200 pt-6">
                                            <h5 className="font-bold text-slate-900 mb-3">Key Takeaways</h5>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2 text-slate-700">
                                                    <span className="text-green-500 font-bold">✓</span>
                                                    <span>Performance testing is essential for user satisfaction and business success</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-slate-700">
                                                    <span className="text-green-500 font-bold">✓</span>
                                                    <span>Different test types serve different purposes (load, stress, spike, endurance)</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-slate-700">
                                                    <span className="text-green-500 font-bold">✓</span>
                                                    <span>Modern tools like Gatling, K6, and JMeter make testing accessible</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-slate-700">
                                                    <span className="text-green-500 font-bold">✓</span>
                                                    <span>Following best practices ensures actionable, reliable results</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-slate-700">
                                                    <span className="text-green-500 font-bold">✓</span>
                                                    <span>A structured 4-week roadmap can get you started quickly</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                            />
                        </div>

                        {/* Right: Resource Sidebar */}
                        <div className="xl:col-span-3">
                            <ResourceSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
