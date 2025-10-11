import { memo, useMemo } from 'react';
import Image from 'next/image';

function PhotoSlider({ images, direction }) {
  const duplicatedImages = useMemo(() => images.concat(images), [images]);

  return (
    <div
      className={`flex h-[18vh] sm:h-[20vh] md:h-1/4 -z-10 w-max ${direction}`}
    >
      {duplicatedImages.map((photo, index) => (
        <div key={`${photo}-${index}`} className="p-1.5">
          <Image
            src={photo}
            width={260}
            height={160}
            alt={`photo-${index}`}
            className="w-[220px] sm:w-[260px] md:w-70 h-full object-cover rounded-2xl"
            loading="lazy"
            quality={60}
            sizes="(min-width: 768px) 260px, (min-width: 640px) 260px, 220px"
          />
        </div>
      ))}
    </div>
  );
}

export default memo(PhotoSlider);
