"use client";

/**
 * GA4 tracking for `tel:` and `mailto:` clicks — enquiries that never touch a
 * form and were therefore invisible alongside the un-instrumented forms.
 *
 * One delegated listener on `document` rather than an onClick on each link:
 * 40 files render a tel: or mailto: anchor (every "Ready to start" CTA, the
 * footer, the city-page CTA, each industry contact block). Editing all 40
 * would leave the next one added untracked, which is how the forms ended up
 * silent in the first place. Delegation covers every such link, including ones
 * added later, from a single file.
 *
 * Capture phase, because several CTA sections call stopPropagation() on their
 * own wrappers; a bubble-phase listener would miss those clicks.
 *
 * Renders null and is mounted as a sibling leaf of the page tree (see the same
 * note on ConsentBanner in layout.tsx), so it adds no markup, no CLS, and
 * cannot disturb hydration of the tree beside it.
 */

import { useEffect } from "react";
import { event as gaEvent } from "@/lib/gtag";

export default function ContactLinkTracking() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target;
      // Clicks can land on a non-Element node (or the document itself), which
      // has no closest().
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>(
        'a[href^="tel:"], a[href^="mailto:"]'
      );
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const isPhone = href.startsWith("tel:");

      gaEvent({
        action: isPhone ? "phone_click" : "email_click",
        category: "contact",
        // The destination Testriq number/address, not anything the visitor
        // typed — the number tells us which CTA block is actually used.
        label: href.slice(isPhone ? "tel:".length : "mailto:".length),
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
