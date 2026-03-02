'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { MoveLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const InfoRow = ({ label, value }) => {
  const isArray = Array.isArray(value);

  return (
    <div className="flex flex-col gap-1 rounded-lg bg-white/10 px-4 py-3 text-left sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-8 justify-between w-full">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200 sm:text-sm">
          {label}
        </div>

        {isArray ? (
          <ul className="text-sm text-gray-100 sm:text-base text-end">
            {value.map((val, index) => (
              <li key={val.id ?? index}>
                {typeof val === 'object' ? val.name : val}
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-sm text-gray-100 sm:text-base text-end">
            {typeof value === 'object' ? value.name : value}
          </div>
        )}
      </div>
    </div>
  );
};

export default function AchievementPopup({
  item,
  onClose,
  clickedElementPosition
}) {
  if (!item) return null;

  const showExtraInfo = Boolean(
    item.time || item.organizer || item.contributors
  );

  const mediaSources = useMemo(() => {
    if (!item) return [];

const addSource = (source) => {
  if (!source) return undefined;

  // CASE 1: string langsung
  if (typeof source === 'string') {
    const trimmed = source.trim();
    if (!trimmed) return undefined;

    const extension = trimmed.split('?')[0].split('.').pop()?.toLowerCase();
    const isVideo = ['mp4', 'webm', 'ogg'].includes(extension);

    return { src: trimmed, type: isVideo ? 'video' : 'image' };
  }

  // ✅ CASE 2: object dari database
  if (typeof source === 'object' && source.image_url) {
    const trimmed = source.image_url.trim();
    if (!trimmed) return undefined;

    const extension = trimmed.split('?')[0].split('.').pop()?.toLowerCase();
    const isVideo = ['mp4', 'webm', 'ogg'].includes(extension);

    return { src: trimmed, type: isVideo ? 'video' : 'image' };
  }

  return undefined;
};

    const collected = [];

    if (Array.isArray(item.images) && item.images.length > 0) {
      item.images.forEach((media) => {
        const parsed = addSource(media);
        if (parsed) collected.push(parsed);
      });
    } else {
      const parsed = addSource(item.image);
      if (parsed) collected.push(parsed);
    }

    return collected;
  }, [item]);

  const mediaCount = mediaSources.length;
  const hasMedia = mediaCount > 0;
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    setCurrentMediaIndex(0);
  }, [mediaSources]);

  const advanceMedia = useCallback(() => {
    if (mediaCount <= 1) return;
    setCurrentMediaIndex((prev) => (prev + 1) % mediaCount);
  }, [mediaCount]);

  const currentMedia =
    hasMedia ? mediaSources[currentMediaIndex] ?? mediaSources[0] : null;

  useEffect(() => {
    if (!currentMedia || currentMedia.type === 'video' || mediaCount <= 1) {
      return;
    }
    const timeoutId = setTimeout(advanceMedia, 3000);
    return () => clearTimeout(timeoutId);
  }, [advanceMedia, currentMedia, mediaCount]);

  // Animation start from card position
  const getInitialPosition = () => {
    if (!clickedElementPosition) {
      return { scale: 0, opacity: 0 };
    }

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    return {
      x: clickedElementPosition.x - centerX,
      y: clickedElementPosition.y - centerY,
      scale: 0,
      opacity: 0,
    };
  };

  const getFinalPosition = () => ({
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1
  });

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Kontainer utama popup */}
        <motion.div
          className="relative w-full sm:w-[90%] h-[86%] sm:h-[80%] shadow-2xl rounded-2xl p-4 sm:p-6"
          initial={getInitialPosition()}
          animate={getFinalPosition()}
          exit={getInitialPosition()}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: 0.6
          }}
        >

          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl -z-10"></div>

          <div className="relative z-10 w-full h-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">

            {/* Bagian kiri media */}
            <motion.div
              className="relative w-full md:w-1/2 h-1/2 md:h-full rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {hasMedia && currentMedia && (
                <AnimatePresence mode="wait">
                  {currentMedia.type === 'video' ? (
                    <motion.video
                      key={currentMedia.src}
                      src={currentMedia.src}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop={mediaCount <= 1}
                      muted
                      playsInline
                      onEnded={advanceMedia}
                    />
                  ) : (
                    <motion.div key={currentMedia.src} className="relative w-full h-full">
                      <Image
                        src={currentMedia.src}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>

            {/* Bagian kanan teks */}
            <div className="w-full md:w-1/2 flex flex-col justify-between p-2 sm:p-4 text-white overflow-y-scroll">
              <button className="self-start mb-4" onClick={onClose}>
                <MoveLeft size={36} />
              </button>

              <div className="text-center flex-grow flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  {item.title}
                </h2>
                <h5 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6">
                  {item.award}
                </h5>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4">
                  {item.description}
                </p>

                {showExtraInfo && (
                  <div className="mt-4 w-full max-w-xl space-y-3 text-left md:mx-auto">
                    {item.time && <InfoRow label="Waktu" value={item.time} />}
                    {item.organizer && (
                      <InfoRow label="Penyelenggara" value={item.organizer} />
                    )}
                    {item.contributors && (
                      <InfoRow label="Tim" value={item.contributors} />
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
