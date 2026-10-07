/**
 * Single source of truth for the "Book a call" / "Talk to Expert" destination.
 *
 * Before this file existed the booking URL was pasted literally into 70 places
 * across 68 files — 67 copies of the short link in CTA sections plus three
 * copies of the long appointment-schedule URL in the header. Changing calendars
 * meant a 70-site find-and-replace, and one of those sites is a transactional
 * email template that is easy to miss.
 *
 * Changing calendars is now a one-line edit here. Get the value from Google
 * Calendar: open the appointment schedule → Share → copy the booking page link.
 *
 * Always paste the SHORT calendar.app.google form. The long
 * calendar.google.com/calendar/u/0/appointments/... form that used to be in the
 * header carries a `/u/0/` segment meaning "the visitor's first signed-in
 * Google account", which throws an access error for anyone juggling multiple
 * Google logins — on the most prominent CTA on the site.
 *
 * Before changing this, open the new link in a private window and confirm it
 * renders the booking page for a signed-out stranger. If it asks for a login,
 * the schedule is not shared publicly and every CTA on the site is broken.
 */
export const BOOKING_URL = "https://calendar.app.google/bc6FdJreqEy9cnxK6";
