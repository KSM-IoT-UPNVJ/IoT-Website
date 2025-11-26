import { useEffect, useState } from 'react';

import FadeIn from '@/utils/fadeIn';
import HakMilik from '@/utils/hakMilik';
import Button from '@/components/shared/button';
import Image from 'next/image';

export default function ProjectDescContainer(props) {
  const { title, description, division, date, divisionImage, image, hm, githubLink } =
    props;

  const [show, setShow] = useState(false);

  const extraDesc = [];

  for (let i = 2; i <= 20; i++) {
    const img = props[`image${i}`];
    const subtitle = props[`subtitle${i}`];
    const desc = props[`description${i}`];

    if (!img && !subtitle && !desc) continue;

    extraDesc.push({ img, subtitle, desc });
  }

  return (
    <>
      <div className="flex flex-col mx-8 md:mx-15 overflow-hidden select-none">
        <h1 className="font-optima font-extrabold text-center text-biru-tua text-4xl mx-auto mt-10 mb-5 select-none">
          <FadeIn direction={'right'} delay={0.8}>
            {title}
          </FadeIn>
        </h1>
        <FadeIn direction={'right'} delay={0.8}>
          <div className="flex flex-col gap-2 items-center max-w-200 h-full mx-auto bg-radial-[at_50%_10%] from-biru-sedang to-biru-sedang2 backdrop-blur-2xl shadow-lg rounded-4xl p-6">
            <div className="flex flex-row items-center w-full">
              <div className="flex w-full flex-col justify-center">
                <h3 className="text-white font-extrabold ml-5">{division}</h3>
                <p className="text-white font-bold ml-5">{date}</p>
              </div>
            </div>
            {image && (
              <Image
                src={image}
                alt="gambar project"
                width={520}
                height={300}
                className="w-full max-h-130 object-contain py-2 rounded-2xl"
                draggable="false"
              />
            )}
            <div className="flex justify-center">
              {hm && (
                <Button onButtonClick={() => setShow(true)}>
                  Meet the Teams
                </Button>
              )}
              <Button href={githubLink}>
                Learn More
              </Button>
            </div>

            <div className="text-white text-base text-justify py-2 w-full whitespace-pre-line">
              <p>{description}</p>
            </div>
            {extraDesc.length > 0 && (
              <div className="w-full flex flex-col gap-10 mt-8">
                {extraDesc.map((sec, i) => (
                  <div key={i} className="w-full">
                    {sec.img && (
                      <div className="rounded-2xl overflow-hidden py-2">
                        <div className="relative w-full h-[300px]">
                          <Image
                            src={sec.img}
                            alt={`gambar project tambahan ${i + 2}`}
                            fill
                            className="object-contain"
                            draggable="false"
                          />
                        </div>
                      </div>
                    )}

                    {sec.subtitle && (
                      <h2 className="text-white font-bold text-xl mt-4">
                        {sec.subtitle}
                      </h2>
                    )}

                    {sec.desc && (
                      <p className="text-white text-base text-justify py-2 whitespace-pre-line">
                        {sec.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
      {show && (
        <HakMilik
          people={hm}
          title={title + ' Team'}
          height="auto"
          width="100%"
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
}
