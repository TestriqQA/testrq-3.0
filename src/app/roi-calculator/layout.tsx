import { Metadata } from "next";

export const metadata: Metadata = {
  // title.absolute: the root layout applies template "%s | Testriq", and this
  // value already carries the brand, so the rendered title read "ROI Calculator
  // | Testriq QA Lab | Testriq". absolute opts out of the template.
  title: { absolute: "QA ROI Calculator | Testriq" },
  description: "Calculate your potential Return on Investment with Testriq QA Lab solutions.",
  alternates: {
    canonical: "https://www.testriq.com/roi-calculator",
  },
};

/**
 * DEV-11 is BLOCKED and no schema is emitted here, deliberately.
 *
 * The ticket calls this page "a genuine interactive tool and a strong
 * AI-citation candidate". It is not one yet: the page renders "The ROI
 * calculator will be available soon. Stay tuned!" — confirmed live on
 * www.testriq.com, 27 Oct 2026 — and page.tsx contains no calculation.
 *
 * WebApplication schema with an offers block would tell Google and every AI
 * engine that a working free tool exists at this URL. It does not. That is a
 * false claim in structured data, on a page a crawler can read to check.
 *
 * Add it when the calculator ships. The same blocker applies to the
 * calculator_complete key event in DEV-01: there is no result to fire on.
 */
export default function RoiCalculatorLayout({ children }: { children: React.ReactNode } ) {
  return <>{children}</>;
}
