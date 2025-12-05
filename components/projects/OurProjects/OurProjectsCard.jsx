'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OurProjectsCard({
  title,
  description,
  image,
  isPlaceholder,
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <div
        className={`w-[400px] h-[600px] overflow-hidden px-5 pb-4 select-none ${
          isPlaceholder ? 'max-[1280px]:hidden' : ''
        }`}
      >
        <div
          className={`rounded-xl shadow-[0_2px_10px_rgba(0,0,0,1)] overflow-hidden relative flex flex-col w-full h-full m-2 transition-all group duration-200 ease-in-out select-none ${
            !isPlaceholder ? 'active:scale-90 cursor-pointer bg-abu-muda' : ''
          }`}
        >
          {!isPlaceholder && (
            <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-200 group-hover:opacity-20" />
          )}

          {!isPlaceholder && (
            <div className="relative flex items-center justify-center w-full h-full bg-[var(--color-abu-muda)] duration-300 overflow-hidden">
              {image && !imgError ? (
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 400px, 90vw"
                  quality={80}
                  className="object-cover text-[var(--color-biru-tua)] transition-transform duration-300 group-hover:scale-110"
                  onError={() => {
                    setImgError(true);
                  }}
                />
              ) : (
                <h2 className="text-5xl font-extrabold text-[var(--color-biru-tua)] group-hover:scale-110 duration-300">
                  GAMBAR
                </h2>
              )}
            </div>
          )}

          <div
            className={`p-3 mb-3 text-center ${
              isPlaceholder ? 'justify-center' : ''
            } overflow-hidden flex flex-col h-full transition-all duration-200 z-2 group-hover:brightness-95 group-hover:scale-102 bg-white/90 backdrop-blur-sm`}
          >
            {isPlaceholder && (
              <p className="font-bold text-[10rem]  text-[var(--color-biru-tua)] leading-tight duration-300">
                !
              </p>
            )}

            <h3 className="font-bold text-[20px]  text-[var(--color-biru-tua)] my-2 duration-300">
              {title}
            </h3>

<p className="font-normal text-[18px] my-2  text-[var(--color-biru-tua)] transition-opacity duration-300">
  {description
    ? description.length > 210
      ? description.slice(0, 210).replace(/[\s.,:;!?]+$/, '') + '...'
      : description
    : "No description available"}
</p>
          </div>
        </div>
      </div>
    </>
  );
}
