import { useState, useCallback } from 'react';
import { useRecaptcha } from './RecaptchaContext';
import { trackEvent } from '../gtag';
import { captureLeadAttribution } from '../lead-attribution';

interface UseRecaptchaFormOptions {
  /** reCAPTCHA v3 action name, e.g. 'banking_contact'. */
  action: string;
  /**
   * GA4 event name for a successful submission. Defaults to `action`, which is
   * already distinct per form and is a legal GA4 event name in every current
   * caller. Set this only when the GA name needs to diverge from the reCAPTCHA
   * one — without it, renaming a reCAPTCHA action would silently rename the
   * conversion event and break the Key-event mapping configured in the GA4 UI.
   */
  gaEventName?: string;
  /**
   * DEV-01. The GA4 key event fired on a confirmed successful submission.
   *
   * Defaults to `generate_lead` with `{ form_location, form_name }`, which is
   * what the eight industry contact forms should report. Override it for the
   * two shapes that are not sales leads and for the quote form:
   *
   *   quote form   -> { name: 'quote_request', params: { service } }
   *   newsletter   -> its own name, so it never inflates the lead count
   *   careers      -> likewise
   *
   * `form_location` is always added from the live pathname and cannot be
   * overridden — it is the one parameter every event in the spec shares.
   */
  ga?: { name: string; params?: Record<string, string | number | undefined> };
  onSuccess?: (data: unknown) => void;
  onError?: (error: string) => void;
}

interface UseRecaptchaFormReturn {
  isSubmitting: boolean;
  submitWithRecaptcha: <TFormData extends Record<string, unknown>, TResult>( // Use generics for better type safety
    submitFunction: (data: TFormData, recaptchaToken: string) => Promise<TResult>,
    formData: TFormData
  ) => Promise<void>;
}

export function useRecaptchaForm(options: UseRecaptchaFormOptions): UseRecaptchaFormReturn {
  const { action, gaEventName, ga, onSuccess, onError } = options;
  const { executeRecaptcha } = useRecaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitWithRecaptcha = useCallback(async <TFormData extends Record<string, unknown>, TResult>(
    submitFunction: (data: TFormData, recaptchaToken: string) => Promise<TResult>,
    formData: TFormData
  ) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha(action);

      if (!recaptchaToken && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
        throw new Error('Failed to generate reCAPTCHA token');
      }

      // DEV-02. Lead source attribution is merged in here — the one place
      // every form using this hook passes through — rather than at eleven call
      // sites that would drift, which is the same reasoning as the GA4 event
      // below. Nine of the eleven callers spread `...data` into their request
      // body, so the fields reach their API route with no per-form change;
      // BlogNewsletter and CareersOpenPositions build their body field by
      // field and so ignore them, which is fine — neither is a sales lead.
      //
      // Spread after formData so these three keys are always present and
      // always ours, regardless of what the form's own state holds.
      const attribution = captureLeadAttribution();

      // Call the submit function with the reCAPTCHA token (or empty string if bypassed)
      const result = await submitFunction({ ...formData, ...attribution }, recaptchaToken || '');

      // GA4 lead event. This is the one place it fires, for all eleven forms
      // that use this hook — the alternative was eleven near-identical call
      // sites that would drift. Reaching this line means submitFunction
      // resolved without throwing, and every caller's submitFunction throws on
      // a non-OK response, so the two failure modes both stay silent as
      // required: a validation failure never calls submitWithRecaptcha at all,
      // and a network/API error lands in the catch below instead.
      //
      // Fired before the caller's onSuccess so that a throw inside their
      // success handler (state updates, scrollIntoView) cannot swallow the
      // conversion signal.
      // DEV-01. Event names now match the six the business counts, exactly as
      // specified — GA4 is case-sensitive and an unrecognised name silently
      // becomes a separate, unmarked event rather than a key event.
      //
      // `gaEventName` is still honoured so an existing caller can pin a name,
      // but nothing passes it today; `ga` is the current mechanism.
      const formLocation =
        typeof window !== 'undefined' ? window.location.pathname : undefined;

      trackEvent(ga?.name ?? gaEventName ?? 'generate_lead', {
        // Always present, never overridable: every event in the spec carries
        // the page that produced it.
        form_location: formLocation,
        ...(ga?.params ?? { form_name: action }),
      });

      if (onSuccess) {
        onSuccess(result);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      console.error('Form submission error:', error);

      if (onError) {
        onError(errorMessage);
      }
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }, [action, gaEventName, ga, executeRecaptcha, isSubmitting, onSuccess, onError]);

  return {
    isSubmitting,
    submitWithRecaptcha,
  };
}
