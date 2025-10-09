'use client'; // error boundary harus client component

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Page Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Oops! Something went wrong 😢
      </h2>
      <p className="text-gray-600 mb-6">
        {error.message || 'An unexpected error occurred.'}
      </p>
      <button
        onClick={() => reset()} // reset() untuk coba render ulang page
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
}
