import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import GoogleAnalytics from "@/components/GoogleAnalytics"; // Import the new component
import RecaptchaLoader from "@/components/RecaptchaLoader"; // Route-scoped reCAPTCHA v3 loader
import ApolloTracking from "@/components/ApolloTracking"; // Apollo tracking script (consent-gated)
import ConsentBanner from "@/components/ConsentBanner"; // Cookie-consent opt-in for Apollo
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
    // The Testriq wordmark on a 1200×630 canvas — the exact ratio every platform
    // crops to, so the mark is shown whole instead of being sliced.
    //
    // /testriq-logo.png itself is 7959×2178 (3.65:1) and is deliberately NOT used
    // here: pointed at directly, receivers centre-crop it to a zoomed fragment
    // (shared links rendered a giant "stri"). That file is untouched and is still
    // what Organization.logo points at, which is its correct role.
    //
    // PNG, not WebP. LinkedIn does not support WebP og:images at all and WhatsApp
    // fails on them silently, so a WebP card previews nowhere reliable.
    //
    // Width/height below are the asset's real size. They were declared 1200×630
    // for years against a 1100×733 file; receivers size the preview box from
    // these before the image loads, so a wrong ratio letterboxes the first share.
    images: [
      {
        url: "https://www.testriq.com/OG/testriq-logo-og.png",
        width: 1200,
        height: 630,
        alt: "Testriq - Global Software Testing Services",
        type: "image/png",
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
    // Same card as og:image, for the same reasons (1.91:1 so nothing crops, PNG
    // so every client can decode it).
    images: ["https://www.testriq.com/OG/testriq-logo-og.png"],
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans flex min-h-screen flex-col antialiased bg-[theme(color.background.gray)]`}
      >
        {/* Google reCAPTCHA v3.
            F-25 moved this <Script> to "lazyOnload", but it still loaded on all ~101
            routes including the ~91 with no form. PageSpeed attributed 9 of the
            homepage's 13 long main-thread tasks and 1,281 ms of JS execution to
            recaptcha__en.js — essentially all of its 590 ms Total Blocking Time — plus
            100 % of its unused CSS. RecaptchaLoader keeps the identical script and the
            same onloadCallback handshake, but only injects it on the 10 routes that
            actually render a reCAPTCHA-protected form. */}
        <RecaptchaLoader />

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

        {/* Sibling leaf, not a wrapper: renders null until mounted and is
            position:fixed, so it adds no CLS and cannot disturb hydration of the
            tree above it. Gates Apollo via the shared consent store. */}
        <ConsentBanner />
      </body>
    </html>
  );
}
