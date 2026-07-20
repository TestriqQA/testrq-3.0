"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

/**
 * Routes that actually render a reCAPTCHA-protected form.
 *
 * Derived mechanically from the import graph, not by hand: every component that
 * touches useRecaptchaForm / useRecaptcha / executeRecaptcha was traced upward
 * through its importers to the page.tsx that renders it. The 11 consumers are
 * Banking, BlogNewsletter, Careers, ContactHero, Ecommerce, Elearning, Gaming,
 * Healthcare, IoTAppliance, PricingFormModal and Telecom contact sections.
 *
 * /blog is deliberately absent. BlogNewsletter is an exported dynamic() binding in
 * client-wrappers/BlogClientComponents.tsx that nothing imports — blog/page.tsx
 * pulls only BlogHeroSection, and <BlogNewsletter> is rendered nowhere in src/.
 * Including it would have loaded ~382 KiB across ~340 blog pages for a dead form.
 *
 * If you add a form that needs reCAPTCHA, add its route here. A missing route means
 * executeRecaptcha resolves null and the API route rejects the submit with HTTP 400.
 */
const RECAPTCHA_ROUTES = [
  "/banking-finance-industry-testing-services",
  "/careers",
  "/contact-us",
  "/e-commerce-testing-services",
  "/e-learning-testing-services",
  "/gaming-app-testing-services",
  "/healthcare-testing-services",
  "/iot-appliances-and-apps-testing-services",
  "/pricing",
  "/telecommunications-testing-services",
];

/**
 * Loads Google reCAPTCHA v3 only on routes that have a form.
 *
 * Previously the root layout rendered <Script> unconditionally, so all ~101 routes
 * paid for it. On the homepage — which has zero <form> and zero <input> — that was
 * ~382 KiB of script plus a 41 KiB stylesheet, an anchor iframe, and reCAPTCHA's own
 * Roboto font. PageSpeed attributed 9 of the page's 13 long main-thread tasks and
 * 1,281 ms of JS execution to recaptcha__en.js alone, which was essentially all of
 * the 590 ms Total Blocking Time.
 *
 * Injection is imperative rather than via next/script, and this component renders
 * null. That is deliberate: two earlier attempts drove the load from React state
 * (a demand flag on RecaptchaProvider) and both silently broke hydration of the
 * dynamic() boundary on /contact-us — the form rendered but never hydrated, so no
 * submit handler was ever attached. Touching nothing in the React tree avoids that
 * class of bug entirely.
 *
 * The &onload=onloadCallback parameter is preserved because RecaptchaContext still
 * installs window.onloadCallback and waits on it. That handshake is unchanged.
 */
export default function RecaptchaLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (!SITE_KEY || !pathname) return;

    const needsRecaptcha = RECAPTCHA_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`)
    );
    if (!needsRecaptcha) return;

    // Survives client-side navigation between two form routes.
    if (document.querySelector("script[data-recaptcha-loader]")) return;

    const inject = () => {
      if (document.querySelector("script[data-recaptcha-loader]")) return;
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}&onload=onloadCallback`;
      script.async = true;
      script.defer = true;
      script.setAttribute("data-recaptcha-loader", "");
      document.head.appendChild(script);
    };

    // Mirrors next/script's lazyOnload timing so the script never competes with
    // hydration for the main thread.
    if (document.readyState === "complete") {
      const id = window.setTimeout(inject, 0);
      return () => window.clearTimeout(id);
    }
    const onLoad = () => window.setTimeout(inject, 0);
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, [pathname]);

  return null;
}
