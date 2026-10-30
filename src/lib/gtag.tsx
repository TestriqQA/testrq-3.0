// lib/gtag.tsx

declare global {
  // Extend the Window interface to include gtag
  interface Window {
    gtag: (
      command: string,
      eventName: string,
      params: Gtag.ControlParams | Gtag.EventParams | Gtag.ConfigParams | Gtag.CustomParams
    ) => void;
  }
}

// Ensure gtag is defined globally by including the Google Analytics script in your layout
// The Gtag namespace is typically available after the gtag.js script loads.

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string ) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID as string, {
      page_path: url,
    });
  }
};

interface GTagEvent {
  /** GA4 event name. Letters, digits and underscores only; must start with a letter. */
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
//
// `label` and `value` were required until 2026-09-28. Nothing had ever called
// this function (GA4 recorded 0 key events across 24,774 sessions because every
// form submitted without reporting), so making them optional broke no caller —
// and it stops the new call sites having to invent a `value`. GA4 treats `value`
// as a real revenue-shaped metric, so a placeholder 0 on every lead would have
// put a misleading number in the reports rather than leaving it blank.
/**
 * Fire a GA4 event with its own parameter names (DEV-01).
 *
 * `event()` below predates this and forces every call into GA4's legacy
 * Universal-Analytics shape — `event_category` / `event_label`. The six key
 * events the business needs are specified with their own parameters
 * (`form_location`, `service`, `link_url`, `page_path`, `case_study_slug`),
 * and squeezing those into `event_label` would make them unreportable without
 * a custom dimension per event. This passes parameters through untouched.
 *
 * Event names are sent exactly as given: GA4 is case-sensitive and silently
 * creates a second, separate event for any variation, so `generate_lead` and
 * `Generate_Lead` would split one conversion into two half-counts.
 */
export const trackEvent = (
  name: string,
  params: Record<string, string | number | undefined> = {},
) => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return;

  // Drop undefined values rather than sending them: GA4 stores the string
  // "undefined" and it then shows up as a real parameter value in reports.
  const clean = Object.fromEntries(
    Object.entries(params).filter(([, v]) => v !== undefined && v !== ''),
  );

  window.gtag('event', name, clean);
};

export const event = ({ action, category, label, value }: GTagEvent ) => {
  // `typeof window.gtag` alone throws a ReferenceError if `window` itself is
  // undefined, so the window check has to come first. In practice this is only
  // called from client components, but the guard makes the module safe to
  // import anywhere.
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return;

  window.gtag('event', action, {
    event_category: category,
    ...(label !== undefined ? { event_label: label } : {}),
    ...(value !== undefined ? { value } : {}),
  });
};
