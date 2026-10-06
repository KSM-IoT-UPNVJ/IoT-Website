'use client';

import React, { useEffect, useState } from 'react';

// Deadline: 6 Oktober 2026, pukul 17:00 WIB (UTC+7)
const DEADLINE = new Date('2026-10-06T17:00:00+07:00');

function getTimeLeft() {
  const now = new Date();
  const diff = DEADLINE - now;
  if (diff <= 0) return null;

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function RegistrationCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    // update setiap detik
    const timer = setInterval(() => {
      const left = getTimeLeft();
      setTimeLeft(left);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Setelah deadline — tampilkan pesan Registration Closed
  if (timeLeft === null) {
    return (
      <div className="mt-10 mb-4 flex flex-col items-center justify-center text-center px-4">
        <div className="inline-flex flex-col items-center gap-4 rounded-3xl border border-white/30 bg-white/20 backdrop-blur-md shadow-2xl px-10 py-12 max-w-2xl w-full">
          {/* Icon lock */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#33455b] shadow-lg mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h3 className="text-3xl md:text-4xl font-extrabold text-[#33455b] font-optima">
            Registration Closed
          </h3>

          <div className="w-16 h-1 rounded-full bg-[#1b96fc] opacity-70" />

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Thank you for your enthusiasm,{' '}
            <span className="font-bold text-[#33455b]">IoTnians!</span>
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            See you at{' '}
            <span className="font-bold text-[#1b96fc]">Youth IoT 2026!</span>
          </p>
        </div>
      </div>
    );
  }

  // Sebelum deadline — tampilkan countdown
  const units = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <div className="mt-10 mb-4 flex flex-col items-center justify-center text-center px-2">
      <div className="inline-flex flex-col items-center gap-5 rounded-3xl border border-white/30 bg-white/20 backdrop-blur-md shadow-2xl px-5 py-8 w-full max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600 ">
          Youth IoT 2026 - Open Registration
        </p>

        <h3 className="text-2xl md:text-3xl font-extrabold text-[#33455b] font-optima">
          Pendaftaran Ditutup Dalam
        </h3>

        {/* Countdown boxes */}
        <div className="flex items-center gap-1.5 md:gap-5 w-full justify-center">
          {units.map(({ label, value }, idx) => (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-[#33455b] shadow-lg">
                  <span className="text-xl md:text-3xl font-extrabold text-white tabular-nums">
                    {pad(value)}
                  </span>
                </div>
                <span className="mt-1.5 text-[9px] md:text-xs font-bold uppercase tracking-widest text-[#33455b]">
                  {label}
                </span>
              </div>
              {idx < units.length - 1 && (
                <span className="text-xl md:text-3xl font-bold text-[#33455b] mb-5 select-none">
                  :
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          Daftarkan dirimu sebelum{' '}
          <span className="font-bold text-[#33455b]">6 Oktober 2026, 17.00 WIB</span>
        </p>
      </div>
    </div>
  );
}
