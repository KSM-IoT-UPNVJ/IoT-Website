'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }, []);
  return null; // komponen ini cuma side effect
}
