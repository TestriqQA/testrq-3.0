import { useState, useCallback } from 'react';
import { useRecaptcha } from './RecaptchaContext';
import { event as gaEvent } from '../gtag';

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
  const { action, gaEventName, onSuccess, onError } = options;
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

      // Call the submit function with the reCAPTCHA token (or empty string if bypassed)
      const result = await submitFunction(formData, recaptchaToken || '');

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
      gaEvent({
        action: gaEventName ?? action,
        category: 'lead',
        // Which page produced the lead. GA4 attributes the event to the page
        // anyway, but carrying it on the event keeps the answer available in
        // the Events report without a secondary dimension.
        label: typeof window !== 'undefined' ? window.location.pathname : undefined,
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
  }, [action, gaEventName, executeRecaptcha, isSubmitting, onSuccess, onError]);

  return {
    isSubmitting,
    submitWithRecaptcha,
  };
}
