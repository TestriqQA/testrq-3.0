import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const LatencyTestingFAQsSection: React.FC = () => {
  const faqs = [
    {
      question: "What is latency testing and why is it important?",
      answer:
        "Latency testing measures the time delay between a user action and system response across all application layers — network, server, database, and API. It is critical because even 100ms of added latency can reduce conversion rates by 7%, increase bounce rates, and directly impact revenue. Unlike throughput testing, latency testing focuses on the speed of individual transactions, not volume.",
    },
    {
      question:
        "What is the difference between latency testing and throughput testing?",
      answer:
        "Latency testing measures how fast a single request is processed (response time in milliseconds), while throughput testing measures how many requests the system can handle per second. A system can have high throughput but poor latency if requests queue up. Testriq tests both dimensions to ensure your application is both fast and scalable.",
    },
    {
      question: "What are P50, P95, and P99 latency percentiles?",
      answer:
        "P50 (median) means 50% of requests complete within that time. P95 means 95% of requests are faster than that value — the remaining 5% are slower (tail latency). P99 captures the worst 1% of request times. Enterprise SLAs typically target P95 < 100ms and P99 < 250ms. We analyze all three to detect tail latency spikes that average-based metrics miss.",
    },
    {
      question:
        "How do you test API latency in microservices architectures?",
      answer:
        "We use distributed tracing tools (Jaeger, Zipkin, OpenTelemetry) to follow requests across service boundaries. Each service-to-service hop is measured individually, including message queue delays, circuit breaker timeouts, and service mesh overhead. This reveals cascading latency — where a single slow service degrades the entire request chain.",
    },
    {
      question: "What tools are best for network latency testing?",
      answer:
        "For protocol-level testing, we use Apache JMeter and k6. For network diagnostics, Wireshark, MTR, and PingPlotter identify routing inefficiencies. APM tools like New Relic and Dynatrace provide real-time latency dashboards. For CDN validation, we use Cloudflare Analytics and AWS CloudWatch. Tool selection depends on your specific infrastructure and latency targets.",
    },
    {
      question:
        "How can latency testing improve application performance and revenue?",
      answer:
        "Latency testing identifies specific bottlenecks — slow database queries, unoptimized API serialization, misconfigured CDN caching — that generic performance tests miss. By resolving these, our clients typically achieve 40–85% latency reduction, which directly translates to faster page loads, improved Google Core Web Vitals scores, higher search rankings, and increased conversion rates.",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaQuestionCircle aria-hidden="true" />
            <span className="text-sm uppercase tracking-wider font-semibold">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            People <span className="text-brand-blue">Also Ask</span>
          </h2>
          <p className="text-lg text-gray-700 mt-3 max-w-2xl mx-auto font-medium">
            Frequently asked questions about latency testing, tools, percentile analysis, and how it impacts application performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-brand-blue mr-2 flex-shrink-0" aria-hidden="true">Q:</span>
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                <span className="text-green-700 font-bold mr-2" aria-hidden="true">A:</span>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatencyTestingFAQsSection;
