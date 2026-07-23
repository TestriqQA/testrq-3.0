'use client';

import React, { createContext, useContext, useCallback, ReactNode, useEffect } from 'react';

interface RecaptchaContextType {
  executeRecaptcha: (action: string) => Promise<string | null>;
}

const RecaptchaContext = createContext<RecaptchaContextType | undefined>(undefined);

interface RecaptchaProviderProps {
  children: ReactNode;
}

interface GRecaptcha {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

interface CustomWindow extends Window {
  grecaptcha?: GRecaptcha;
  onloadCallback?: () => void;
}

declare const window: CustomWindow;

export const RecaptchaProvider: React.FC<RecaptchaProviderProps> = ({ children }) => {
  useEffect(() => {
    // The injected script URL carries &onload=onloadCallback, so this global MUST
    // exist by the time reCAPTCHA loads or it throws ("onloadCallback is not a
    // function"), which would show up as a console error in Best Practices.
    // Readiness itself is no longer tracked in React state — executeRecaptcha awaits
    // window.grecaptcha and grecaptcha.ready() directly, which also covers the
    // deferred-load case where the script arrives long after this provider mounted.
    if (typeof window === 'undefined') return;
    if (!window.onloadCallback) {
      window.onloadCallback = () => {
        /* handshake target only; readiness is awaited in executeRecaptcha */
      };
    }
    // Intentionally no cleanup: deleting the global would break the handshake for a
    // script that is still in flight, and this provider lives in the root layout and
    // never unmounts.
  }, []);

  const executeRecaptcha = useCallback(async (action: string): Promise<string | null> => {
    // RecaptchaLoader defers the script until the visitor first engages with a form,
    // so on a very fast submit the script may still be in flight. Wait for it rather
    // than failing the submission — reCAPTCHA v3 only needs to be ready at execute
    // time. Bounded so a genuinely blocked/offline script can never hang the form;
    // on timeout we fall through to the existing null-token path.
    if (typeof window !== 'undefined' && !window.grecaptcha) {
      const deadline = Date.now() + 12000;
      while (!window.grecaptcha && Date.now() < deadline) {
        await new Promise((r) => setTimeout(r, 100));
      }
    }

    if (typeof window === 'undefined' || !window.grecaptcha) {
      console.warn('reCAPTCHA is not ready or grecaptcha is not defined.');
      return null;
    }

    // grecaptcha may exist before its internal init completes; ready() resolves that.
    await new Promise<void>((resolve) => {
      try {
        window.grecaptcha?.ready(() => resolve());
      } catch {
        resolve();
      }
    });

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined.');
      return null;
    }

    try {
      const token = await window.grecaptcha.execute(siteKey, { action });
      return token;
    } catch (error) {
      console.error('Error executing reCAPTCHA:', error);
      return null;
    }
    // Readiness is now awaited inside this callback (the script is deferred until
    // form engagement), so it no longer needs to be a dependency — keeping it here
    // would rebuild the callback on every load and re-run consumers' effects.
  }, []);

  return (
    <RecaptchaContext.Provider value={{ executeRecaptcha }}>
      {children}
    </RecaptchaContext.Provider>
  );
};

export const useRecaptcha = () => {
  const context = useContext(RecaptchaContext);
  if (context === undefined) {
    throw new Error('useRecaptcha must be used within a RecaptchaProvider');
  }
  return context;
};
