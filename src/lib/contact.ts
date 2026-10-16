/**
 * Single source of truth for Testriq's public phone numbers.
 *
 * Same reasoning as src/lib/booking.ts: before this file the number was pasted
 * literally into 207 places across the repo in seven different spellings
 * ("(+91) 915-2929-343", "+91 915-2929-343", "+91-915-2929-343",
 * "+919152929343", "919152929343", "9152929343", "+91-9152929343"). Adding a
 * second line meant touching every one of them, and the next change will too
 * unless new code imports from here.
 *
 * Each number keeps both forms because they are not interchangeable:
 *   - `display` is what a reader sees, and the grouping is deliberate.
 *   - `tel` is the dial string. RFC 3966 wants digits and a leading "+" only,
 *     so parentheses, spaces and hyphens are stripped. 15 call-to-action
 *     sections shipped `href="tel:(+91) 915-2929-343"`, which several mobile
 *     browsers refuse to dial; always build hrefs from `.tel`, never from
 *     `.display`.
 *
 * `display` here is plain ASCII, so anything rendering it should carry
 * `whitespace-nowrap` (the header and footer links do). A number with no such
 * wrapper breaks mid-group on narrow screens — "(+91) 983-" on one line and
 * "3096-129" on the next. Where the number is a plain string inside a data
 * array and there is no element to style, the separators inside it are written
 * as U+00A0 and U+2011 instead, which achieves the same thing in the text.
 *
 * WhatsApp deliberately stays on the primary line only (wa.me/919152929343) —
 * a wa.me link to a number with no WhatsApp account opens an error screen, so
 * the secondary number is not added there until someone confirms it is
 * registered.
 */
export interface PhoneNumber {
    /** Human-readable form, as shown on the site. */
    display: string;
    /** RFC 3966 dial string for `href="tel:..."`. Digits and "+" only. */
    tel: string;
}

export const PHONE_PRIMARY: PhoneNumber = {
    display: "(+91) 915-2929-343",
    tel: "+919152929343",
};

/** Added 16 Oct 2026 — second line, shown alongside the primary everywhere. */
export const PHONE_SECONDARY: PhoneNumber = {
    display: "(+91) 983-3096-129",
    tel: "+919833096129",
};

/** Both lines, in the order they should be displayed. */
export const PHONES: PhoneNumber[] = [PHONE_PRIMARY, PHONE_SECONDARY];
