import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics"; // Import the new component
import ApolloTracking from "@/components/ApolloTracking"; // Apollo tracking script
import { RecaptchaProvider } from "@/lib/recaptcha/RecaptchaContext";

import Navbar from "@/components/layout/Header";

const Footer = dynamic(
  () => import("@/components/layout/Footer"),
  {
    ssr: true,
    loading: () => null,
  }
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  // preload only gates which font files get a <link rel=preload>; every @font-face
  // still ships, so font-mono keeps working wherever it is actually used (error
  // pages, blog search, verify-certificate). The homepage renders zero font-mono
  // elements, so preloading it only burned High-priority bandwidth in the same
  // window as the render-blocking stylesheet that gates first paint.
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Pure-Play Software Testing Company & QA Outsourcing | Testriq",
    template: "%s | Testriq",
  },
  description:
    "Testriq is a leading pure-play software testing company offering expert QA outsourcing. Specialized in AI/ML validation, DevSecOps, and ISTQB-certified testing for global enterprises in US, UK, EU, and UAE.",
  keywords: [
    "pure-play software testing company",
    "QA outsourcing services",
    "global software testing services",
    "managed QA services",
    "software quality engineering",
    "ISTQB certified testing",
    "independent software testing company",
    "AI application testing",
    "security penetration testing",
    "test automation frameworks",
    "offshore QA testing",
    "compliance testing services",
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/",
    siteName: "Testriq - Global Software Testing Services",
    title: "Pure-Play Software Testing Company & QA Outsourcing | Testriq",
    description:
      "ISTQB Certified partner providing end-to-end QA, DevSecOps, and AI-driven quality engineering. Global reach serving US, UK, EU, India, and UAE markets.",
    images: [
      {
        url: "https://www.testriq.com/OG/testriq-qa-lab-llp-og-img.webp",
        width: 1200,
        height: 630,
        alt: "Testriq - Global Software Testing Services",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",

    site: "@testriq",
    creator: "@testriq",
    title: "Pure-Play Software Testing Company & QA Outsourcing | Testriq",
    description:
      "Expert QA outsourcing and risk-based testing for global enterprises. Serving US, UK, EU, and Asia with ISTQB certified experts.",
    images: ["https://www.testriq.com/OG/testriq-qa-lab-llp-twitter-img.webp"],
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
  verification: {
    google: "LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0",
    yandex: "ff703971283d110e",
    yahoo: "0A67349B8CD11BF71173B38572028507",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans flex min-h-screen flex-col antialiased bg-[theme(color.background.gray)]`}
      >
        {/* Google reCAPTCHA v3 Script.
            F-25: strategy was "afterInteractive" — eagerly competing with hydration
            on every route, including the ~95 % of pages that have no form. Dropped
            to "lazyOnload" so the script loads after the rest of the page (window.load)
            settles. RecaptchaContext gates executeRecaptcha behind isRecaptchaReady,
            so any form submit before the script lands is a no-op rather than an error
            (consistent with reCAPTCHA v3 invisible-on-action semantics). */}
        {recaptchaSiteKey && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}&onload=onloadCallback`}
            strategy="lazyOnload"
          />
        )}

        <GoogleAnalytics /> {/* Render the GoogleAnalytics component here */}
        <ApolloTracking /> {/* Render the ApolloTracking component here */}

        <RecaptchaProvider>
          <header>
            <Navbar />
          </header>
          <main className="flex-grow">{children}</main>
          <Footer />
          {/* <TawkToScript /> */}
        </RecaptchaProvider>
      </body>
    </html>
  );
}
