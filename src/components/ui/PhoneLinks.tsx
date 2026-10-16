import React from "react";
// Relative, not the "@/" alias: this component is pulled in by CityData, which
// the metadata test suite imports directly under vitest. Vitest has no alias
// resolution configured, so an aliased runtime import fails there.
import { PHONES } from "../../lib/contact";

/**
 * Both phone lines, each as its own `tel:` link.
 *
 * Exists because a single link labelled with two numbers dials only the first:
 * the second reads as callable and silently places the wrong call. Every place
 * that shows the numbers should render this instead of a string.
 *
 * Styling is inherited on purpose — no colour, size or weight is set here — so
 * the component drops into a dark header, a light card or body copy without
 * fighting the surrounding design. Pass `className` for layout tweaks.
 *
 * `whitespace-nowrap` on each number keeps a line from breaking mid-group
 * ("(+91) 983-" then "3096-129" on narrow screens). The only break point is
 * between the two numbers, so each one always stays whole.
 *
 * NOTE: renders anchors, so it must not be placed inside another <a> or
 * <Link> — nested anchors are invalid HTML and browsers silently restructure
 * the DOM around them. Where a whole card is already a link, use `asText` to
 * render the numbers without anchors, or lift the card's link off the wrapper.
 */
export interface PhoneLinksProps {
    /** Extra classes for the wrapper. */
    className?: string;
    /** Render as plain text, for use inside an existing link. */
    asText?: boolean;
}

// Separated by a gap rather than a "/" character. A separator between two
// flex items is itself an item, so when the pair wraps it strands at the end
// of the first line — "(+91) 915-2929-343 /" with the second number below.
// The gap reads cleanly both side by side and stacked.
const PhoneLinks: React.FC<PhoneLinksProps> = ({ className = "", asText = false }) => (
    <span className={`inline-flex flex-wrap items-center gap-x-4 gap-y-0.5 ${className}`}>
        {PHONES.map((phone) =>
            asText ? (
                <span key={phone.tel} className="whitespace-nowrap">
                    {phone.display}
                </span>
            ) : (
                <a
                    key={phone.tel}
                    href={`tel:${phone.tel}`}
                    className="whitespace-nowrap hover:underline"
                >
                    {phone.display}
                </a>
            )
        )}
    </span>
);

export default PhoneLinks;
