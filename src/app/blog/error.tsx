// src/app/blog/error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-6 font-mono text-sm bg-gray-100 p-4 rounded">
          {error.message || "There was an error loading the blog posts."}
          {error.digest && <span className="block mt-2 text-xs text-gray-500">Digest: {error.digest}</span>}
        </p>
        <button
          onClick={() => reset()}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
        >
          Try again
        </button>
      </div>
    </div>
  );
}