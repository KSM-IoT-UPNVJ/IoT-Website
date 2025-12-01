'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LaunchOpening() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(null);

  // Countdown 5 detik
  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      router.push('/'); // GANTI halaman tujuan
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main
      aria-busy="true"
      aria-describedby="app-loading-description"
      onClick={() => {
        if (countdown === null) setCountdown(5);
      }}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#050816] via-[#0b1d3b] to-[#120c3c] text-white cursor-pointer"
    >
      <span id="app-loading-description" className="sr-only">
        Opening Website KSM IoT UPNVJ
      </span>

      {/* =======================
          CSS ANIMATION BLOCK
      ======================== */}
      <style jsx>{`
        @keyframes launch {
          0% {
            transform: translateY(0px) scale(1);
          }
          40% {
            transform: translateY(-12px) scale(1.01);
          }
          60% {
            transform: translateY(-14px) scale(1.01);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }

        @keyframes flame {
          0% {
            transform: translate(-50%, 0) scaleY(0.9);
            opacity: 0.75;
          }
          50% {
            transform: translate(-50%, 6px) scaleY(1.05);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, 0) scaleY(0.9);
            opacity: 0.75;
          }
        }

        @keyframes smoke {
          0% {
            transform: translateY(0) scale(0.7);
            opacity: 0.5;
          }
          100% {
            transform: translateY(60px) scale(1.4);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        .rocket {
          position: relative;
          width: 100px;
          height: 180px;
          animation: launch 1.8s ease-in-out infinite;
        }

        .rocket-tip {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 48px solid #facc15;
        }

        .rocket-body {
          position: absolute;
          top: 36px;
          left: 50%;
          transform: translateX(-50%);
          width: 78px;
          height: 120px;
          border-radius: 38px;
          background: linear-gradient(180deg, #f9fafb 0%, #9ca3af 100%);
          border: 4px solid rgba(255, 255, 255, 0.35);
          box-shadow: inset 0 0 20px rgba(148, 163, 184, 0.35),
            0 10px 30px rgba(15, 23, 42, 0.45);
        }

        .rocket-window {
          position: absolute;
          top: 62px;
          left: 50%;
          transform: translateX(-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: radial-gradient(circle, #60a5fa 0%, #1e3a8a 70%);
          border: 4px solid rgba(255, 255, 255, 0.8);
          box-shadow: inset -4px -6px 12px rgba(30, 64, 175, 0.6);
        }

        .rocket-fin {
          position: absolute;
          bottom: 36px;
          width: 0;
          height: 0;
          border-top: 40px solid #f97316;
        }

        .rocket-fin.left {
          left: 0;
          border-right: 34px solid transparent;
        }

        .rocket-fin.right {
          right: 0;
          border-left: 34px solid transparent;
        }

        .rocket-flame {
          position: absolute;
          bottom: -56px;
          left: 50%;
          width: 28px;
          height: 80px;
          transform: translateX(-50%);
          background: radial-gradient(
            circle at 50% 0%,
            #facc15 0%,
            #ef4444 75%
          );
          border-radius: 50% 50% 40% 40%;
          filter: blur(0.5px);
          animation: flame 0.6s ease-in-out infinite;
        }

        .smoke-trail {
          position: absolute;
          bottom: -90px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .smoke-puff {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(226, 232, 240, 0.45);
          filter: blur(1px);
          animation: smoke 1.5s ease-in infinite;
        }

        .smoke-puff:nth-child(2) {
          animation-delay: 0.3s;
          width: 36px;
          height: 36px;
        }

        .smoke-puff:nth-child(3) {
          animation-delay: 0.6s;
        }

        .starfield {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .star {
          position: absolute;
          height: 3px;
          width: 3px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.8);
          animation: twinkle 3s ease-in-out infinite;
        }

        .star:nth-child(odd) {
          animation-duration: 4.6s;
        }
      `}</style>

      {/* =======================
          BACKGROUND STARS
      ======================== */}
      {mounted && (
        <div className="starfield">
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              key={index}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* =======================
          ROCKET + TEXT
      ======================== */}
      <div className="relative flex flex-col items-center gap-40 px-6 text-center">
        <div className="relative flex items-center justify-center w-full">
          <div className="rocket">
            <div className="rocket-tip" />
            <div className="rocket-body" />
            <div className="rocket-window" />
            <div className="rocket-fin left" />
            <div className="rocket-fin right" />
            <div className="rocket-flame" />
            <div className="smoke-trail">
              <span className="smoke-puff" />
              <span className="smoke-puff" />
              <span className="smoke-puff" />
            </div>
          </div>
          <div className="absolute bottom-[-90px] h-2 w-48 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />
        </div>

        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-semibold tracking-wide sm:text-4xl">
            KSM IoT UPNVJ Launching Website
          </h2>
          <p className="text-base text-slate-200 sm:text-lg text-center">
            Tap anywhere to launch
          </p>
        </div>
      </div>

      {/* =======================
          COUNTDOWN OVERLAY
      ======================== */}
      {countdown !== null && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-6xl font-bold">
          {countdown}
        </div>
      )}
    </main>
  );
}
