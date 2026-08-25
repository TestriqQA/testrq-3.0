import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Testing Services Locations - India & UAE |Testriq QA Lab",
  description: "Professional software testing services across major cities in India and UAE. Expert QA testing, automation testing, performance testing, and API testing solutions tailored to local market needs. Available in Mumbai, Bangalore, Chennai, Dubai, and 129+ locations.",
  keywords: [
    "software testing services locations",
    "QA testing services India",
    "software testing company Mumbai",
    "automation testing services Bangalore", 
    "performance testing Chennai",
    "API testing services Dubai",
    "software testing UAE",
    "quality assurance services",
    "manual testing services",
    "test automation services",
    "software testing company near me",
    "professional QA services",
    "software quality testing",
    "application testing services",
    "web testing services",
    "mobile app testing services",
    "software testing consultancy",
    "testing services provider",
    "QA outsourcing services",
    "software testing solutions"
  ],
  openGraph: {
    title: "Software Testing Services Locations - India & UAE | Testriq QA Lab",
    description: "Professional software testing services across major cities in India and UAE. Expert QA testing, automation testing, performance testing, and API testing solutions tailored to local market needs.",
    url: "https://www.testriq.com/locations-we-serve/",
    siteName: "Testriq - Professional Software Testing Services",
    images: [
      {
        url: "https://www.testriq.com/OG/locations-we-serve-og.jpg",
        width: 1200,
        height: 630,
        alt: "Software Testing Services Locations - Testriq QA Lab",
        type: "image/jpeg",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq", 
    title: "Software Testing Services Locations - India & UAE | Testriq QA Lab",
    description: "Professional software testing services across major cities in India and UAE. Expert QA testing, automation testing, performance testing, and API testing solutions.",
    images: ["https://www.testriq.com/OG/locations-we-serve-og.jpg"],
  },
  alternates: {
    canonical: "https://www.testriq.com/locations-we-serve",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

