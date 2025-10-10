'use client';

import React from 'react';
import clsx from 'clsx';

export default function LoadingSkeleton({ className = '', ...props }) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        'animate-pulse rounded-md bg-gray-200/80 dark:bg-gray-700/60',
        className,
      )}
      {...props}
    />
  );
}
