'use client';

import { useEffect } from 'react';

/**
 * Last-resort error boundary — catches errors thrown in the root
 * `app/layout.tsx` itself. Replaces the entire HTML document, so it MUST
 * provide its own `<html>` and `<body>` tags (Next.js requirement).
 *
 * Keep this file deliberately minimal — no imports beyond React, no external
 * styles, no `next/link` (because the root layout may have failed). Inline
 * styles only, to maximise the chance this renders even when something
 * critical is broken.
 *
 * For non-root-layout errors, see `app/error.tsx`.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[global-error] root layout failed:', error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          backgroundColor: '#f9fafb',
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          color: '#111827',
        }}
      >
        <div style={{ maxWidth: '36rem', width: '100%', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '1.875rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            Site temporarily unavailable
          </h1>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
            We&apos;re experiencing a critical error. Please try again in a
            moment, or visit{' '}
            <a href="https://www.testriq.com/" style={{ color: '#2563eb' }}>
              testriq.com
            </a>
            .
          </p>
          {error.digest && (
            <p
              style={{
                color: '#9ca3af',
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              Digest: {error.digest}
            </p>
          )}
          <button className="cursor-pointer"
            onClick={() => reset()}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
