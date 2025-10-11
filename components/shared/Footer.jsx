'use client';

import Image from 'next/image';
import Link from 'next/link';
import HakMilik from '@/utils/hakMilik';
import { useState } from 'react';

import RotatingIcons from '@/utils/RotatingIcons';
import FadeIn from '@/utils/fadeIn'; // Import komponen FadeIn
import projectsDescData from '@/components/projects/ProjectsDesc/projectsDescData.json' assert { type: 'json' };

function Footer() {
  const [show, setShow] = useState(false);
  const projectWithTeam = projectsDescData.find(
    (project) => Array.isArray(project.hm) && project.hm.length > 0,
  );
  const hmList = projectWithTeam?.hm ?? [];
  const hmTitle = projectWithTeam?.title ?? 'KSM Internet Of Things';

  const linkClass =
    'inline-block font-optima font-[300] text-[20px] text-biru-tua hover:-translate-y-0.5 transition transform duration-100 hover:text-biru-sedang';

  return (
    <div>
      <div className="flex px-[4vw] pt-[100px] h-[700px] bg-gradient-to-b from-transparent via-biru-footer-kepengurusan to-biru-muda justify-between overflow-hidden z-[-10]">
        <FadeIn direction="left" delay={0.2}>
          <div className="pt-[80px] md:w-[15vw] md:flex flex-col gap-[10px] hidden w-[300px] h-[300px] text-right">
            <p className="z-10 font-optima font-[900] text-[35px] text-biru-tua">
              Contact Info
            </p>
            <div>
              <a
                href="mailto:internetofthings.upnvj@gmail.com"
                className={linkClass}
              >
                humas@ksmiotupnvj.com
              </a>
            </div>
            <div>
              <a href="tel:+62 831-4043-4826" className={linkClass}>
                +62 831-4043-4826
              </a>
            </div>
            <div>
              <a href="ksmiotupnvj.com" className={linkClass}>
                www.ksmiotupnvj.com
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-col w-[96vw] md:w-[400px] h-[400px] items-center select-none">
            <Image
              src="/Logo_IoT.png"
              alt="Logo_IoT"
              width={180}
              height={201}
              className="w-[180px] h-[201px] mb-2"
              draggable="false"
            />
            <p className="font-titillium text-[24px] font-[700]">
              KSM Internet Of Things
            </p>
            <p className="font-titillium text-[16px] font-[400] mb-5">
              UPN "Veteran" Jakarta
            </p>
            <Image
              src="/slogan.png"
              alt="Slogan"
              width={368.5}
              height={77}
              className="w-[368.5px] h-[77px] saturate-[450%] mb-3"
              draggable="false"
            />
            <div className="flex w-[400px] h-[100px] justify-center gap-[40px]">
              <div className="flex gap-8">
                <RotatingIcons
                  link="https://www.instagram.com/iot.upnvj/"
                  icon1="/footer/ig_footer1.webp"
                  icon2="/footer/ig_footer2.webp"
                  alt="iot.upnvj"
                />
                <RotatingIcons
                  link="https://www.linkedin.com/company/ksmiotupnvj"
                  icon1="/footer/linkedin_footer1.webp"
                  icon2="/footer/linkedin_footer2.webp"
                  alt="ksmiotupnvj"
                />
                <RotatingIcons
                  link="https://github.com/IoTUPNVJ"
                  icon1="/footer/github_footer1.webp"
                  icon2="/footer/github_footer2.webp"
                  alt="IoTUPNVJ"
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.6}>
          <div className="pt-[80px] md:w-[15vw] hidden md:flex flex-col gap-[10px] w-[300px] h-[300px] items-start">
            <p className="z-10 font-optima font-[900] text-[35px] text-biru-tua">
              Quick Links
            </p>
            <div>
              <Link href={'/'} className={`${linkClass} hover:cursor-pointer`}>
                Home
              </Link>
            </div>
            <div>
              <Link
                href={'/aboutus'}
                className={`${linkClass} hover:cursor-pointer`}
              >
                About Us
              </Link>
            </div>
            <div>
              <Link
                href={'/insight'}
                className={`${linkClass} hover:cursor-pointer`}
              >
                Iot Insight
              </Link>
            </div>
            <div>
              <Link
                href={'/contact'}
                className={`${linkClass} hover:cursor-pointer`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="bg-biru-tua w-full text-white text-center text-base p-2">
        <button
          type="button"
          onClick={() => hmList.length > 0 && setShow(true)}
          className="cursor-pointer"
        >
          Copyright © 2025 - KSM Internet of Things UPNVJ
        </button>
      </div>
      {show && hmList.length > 0 && (
        <HakMilik
          people={hmList}
          title={`${hmTitle} Team`}
          height="auto"
          width="100%"
          onClose={() => setShow(false)}
        />
      )}
    </div>
  );
}

export default Footer;
