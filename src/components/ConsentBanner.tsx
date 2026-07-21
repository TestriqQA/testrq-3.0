"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useConsent } from "@/lib/consent/useConsent";
import { setConsent } from "@/lib/consent/consentStore";

/**
 * Cookie-consent banner. Gates non-essential third-party tracking (Apollo) behind an
 * explicit opt-in.
 *
 * Renders nothing until mounted on the client, so server and first client render agree
 * (both null) and there is no hydration mismatch — and nothing to shift, since it is
 * position:fixed and never participates in document flow (CLS stays 0). Once a choice
 * is stored it never shows again.
 *
 * This is a non-blocking banner, not a modal: it does not trap focus or overlay the
 * page, so it cannot break keyboard navigation or hurt INP. Both actions are native
 * <button>s with comfortable hit areas (target-size compliant).
 */
export default function ConsentBanner() {
  const consent = useConsent();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || consent !== "unset") return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl border border-sky-100 bg-white p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="text-sm leading-relaxed text-gray-700">
          We use essential cookies to run this site and, with your permission,
          analytics cookies to understand visitor interest. See our{" "}
          <Link
            href="/cookies-policy"
            className="text-[theme(color.brand.blue)] underline"
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("declined")}
            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="rounded-lg bg-[theme(color.brand.blue)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:brightness-110"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
