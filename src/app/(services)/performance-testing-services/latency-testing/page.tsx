import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createBreadcrumbSchema,
    createFaqPageSchema,
    latencyTestingServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata, SITE_URL } from "@/lib/seo/metadata";

import LatencyTestingHeroSection from "@/components/sections/LatencyTestingHeroSection";
import LatencyTestingWhatIsSection from "@/components/sections/LatencyTestingWhatIsSection";
import LatencyTestingServicesSection from "@/components/sections/LatencyTestingServicesSection";
import LatencyTestingMethodologySection from "@/components/sections/LatencyTestingMethodologySection";
import LatencyTestingWhyChooseSection from "@/components/sections/LatencyTestingWhyChooseSection";
import LatencyTestingToolsSection from "@/components/sections/LatencyTestingToolsSection";
import LatencyTestingFAQsSection from "@/components/sections/LatencyTestingFAQsSection";
import LatencyTestingCTASection from "@/components/sections/LatencyTestingCTASection";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/performance-testing-services/latency-testing",
        title: "Latency Testing Services | API & Network Latency | Testriq",
        description:
            "Reduce application response times with Testriq's latency testing services. P95/P99 analysis, API latency profiling, network diagnostics, and database query optimization for enterprises globally.",
        ogImage: {
            url: "https://www.testriq.com/OG/performance-testing-og-image.webp",
            width: 2752,
            height: 1536,
            alt: "Latency Testing Services by Testriq",
            type: "image/webp",
        },
        keywords: [
            "latency testing services",
            "latency testing",
            "API latency testing",
            "network latency testing",
            "application latency testing",
            "reduce application latency",
            "P95 P99 latency analysis",
            "database latency testing",
            "microservices latency testing",
            "end-to-end latency testing",
            "CDN latency optimization",
            "real-time latency monitoring",
            "cloud latency testing",
            "latency measurement tools",
            "latency SLA compliance",
        ],
    });
}

export default function LatencyTestingPage() {
    // 3-level breadcrumb: Home → Performance Testing → Latency Testing
    const breadcrumbItems = [
        { name: "Home", url: `${SITE_URL}/` },
        {
            name: "Performance Testing",
            url: `${SITE_URL}/performance-testing-services`,
        },
        {
            name: "Latency Testing",
            url: `${SITE_URL}/performance-testing-services/latency-testing`,
        },
    ];

    // Plain-text mirror of LatencyTestingFAQsSection UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What is latency testing and why is it important?",
            answer: "Latency testing measures the time delay between a user action and system response across all application layers — network, server, database, and API. It is critical because even 100ms of added latency can reduce conversion rates by 7%, increase bounce rates, and directly impact revenue. Unlike throughput testing, latency testing focuses on the speed of individual transactions, not volume.",
        },
        {
            question: "What is the difference between latency testing and throughput testing?",
            answer: "Latency testing measures how fast a single request is processed (response time in milliseconds), while throughput testing measures how many requests the system can handle per second. A system can have high throughput but poor latency if requests queue up. Testriq tests both dimensions to ensure your application is both fast and scalable.",
        },
        {
            question: "What are P50, P95, and P99 latency percentiles?",
            answer: "P50 (median) means 50% of requests complete within that time. P95 means 95% of requests are faster than that value — the remaining 5% are slower (tail latency). P99 captures the worst 1% of request times. Enterprise SLAs typically target P95 < 100ms and P99 < 250ms. We analyze all three to detect tail latency spikes that average-based metrics miss.",
        },
        {
            question: "How do you test API latency in microservices architectures?",
            answer: "We use distributed tracing tools (Jaeger, Zipkin, OpenTelemetry) to follow requests across service boundaries. Each service-to-service hop is measured individually, including message queue delays, circuit breaker timeouts, and service mesh overhead. This reveals cascading latency — where a single slow service degrades the entire request chain.",
        },
        {
            question: "What tools are best for network latency testing?",
            answer: "For protocol-level testing, we use Apache JMeter and k6. For network diagnostics, Wireshark, MTR, and PingPlotter identify routing inefficiencies. APM tools like New Relic and Dynatrace provide real-time latency dashboards. For CDN validation, we use Cloudflare Analytics and AWS CloudWatch. Tool selection depends on your specific infrastructure and latency targets.",
        },
        {
            question: "How can latency testing improve application performance and revenue?",
            answer: "Latency testing identifies specific bottlenecks — slow database queries, unoptimized API serialization, misconfigured CDN caching — that generic performance tests miss. By resolving these, our clients typically achieve 40–85% latency reduction, which directly translates to faster page loads, improved Google Core Web Vitals scores, higher search rankings, and increased conversion rates.",
        },
    ];

    return (
        <div>
            <StructuredData data={latencyTestingServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <MainLayout>
                <LatencyTestingHeroSection />
                <LatencyTestingWhatIsSection />
                <LatencyTestingServicesSection />
                <LatencyTestingMethodologySection />
                <LatencyTestingWhyChooseSection />
                <LatencyTestingToolsSection />
                <LatencyTestingFAQsSection />
                <LatencyTestingCTASection />
            </MainLayout>
        </div>
    );
}
