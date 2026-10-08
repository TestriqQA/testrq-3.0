'use client';

import { useEffect } from 'react';
import Link from 'next/link';

/**
 * Root error boundary for the app. Catches errors thrown in any nested
 * route segment (anything that doesn't have its own closer `error.tsx`).
 *
 * `global-error.tsx` is a separate file that handles errors thrown in the
 * root layout itself — the one place this file cannot catch.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface to console + telemetry in production
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          We hit an unexpected error while loading this page. Our team has been
          notified. You can try again, or head back to the homepage.
        </p>
        <p className="text-gray-500 mb-8 font-mono text-xs bg-gray-100 p-4 rounded text-left overflow-auto">
          {error.message || 'No error message available.'}
          {error.digest && (
            <span className="block mt-2 text-gray-400">
              Digest: {error.digest}
            </span>
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
          >
            Try again
          </button>
          <Link
            href="/"
            className="bg-gray-200 text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
