'use client';

import Image from 'next/image';
import Link from 'next/link';
import HakMilik from '@/utils/hakMilik';
import { useState, useEffect } from 'react';

import RotatingIcons from '@/utils/RotatingIcons';
import FadeIn from '@/utils/fadeIn';

function Footer() {
  const [show, setShow] = useState(false);
  const [hmList, setHmList] = useState([]);
  const [hmTitle, setHmTitle] = useState('KSM Internet Of Things');

  // === FETCH PROJECT DARI FASTAPI ===
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/projects/");
        const data = await res.json();

        // Cari project yang punya HM
        const projectWithTeam = data.find(
          (project) => Array.isArray(project.hm) && project.hm.length > 0
        );

        if (projectWithTeam) {
          setHmList(projectWithTeam.hm);
          setHmTitle(projectWithTeam.title);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const linkClass =
    'block font-optima font-[300] text-[20px] text-biru-tua hover:-translate-y-0.5 transition transform duration-100 hover:text-biru-sedang';

  return (
    <div>
      <div className="flex px-[4vw] pt-[100px] h-[700px] bg-gradient-to-b from-transparent via-biru-footer-kepengurusan to-biru-muda justify-between overflow-hidden z-[-10]">
        
        {/* Contact Info */}
        <FadeIn direction="left" delay={0.2}>
          <div className="pt-[80px] md:w-[15vw] md:flex flex-col gap-[10px] hidden w-[300px] h-[300px] text-right">
            <p className="z-10 font-optima font-[900] text-[35px] text-biru-tua">
              Contact Info
            </p>
            <Link href="mailto:humas@ksmiotupnvj.com" className={linkClass}>
              humas@ksmiotupnvj.com
            </Link>
            <Link href="tel:+6283140434826" className={linkClass}>
              +62 831-4043-4826
            </Link>
            <Link href="https://ksmiotupnvj.com" className={linkClass}>
              www.ksmiotupnvj.com
            </Link>
          </div>
        </FadeIn>

        {/* Logo Tengah */}
        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-col w-[96vw] sm:w-[200px] md:w-[400px] h-[400px] items-center select-none">
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
            <p className="font-titillium text-[16px] font-[400] mb-4">
              UPN "Veteran" Jakarta
            </p>

            <Image
              src="/sloganBiru.png"
              alt="Slogan"
              width={368}
              height={77}
              className="h-auto w-56 md:w-72 lg:w-[368px] mb-4"
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
                  link="https://github.com/KSM-IoT-UPNVJ"
                  icon1="/footer/github_footer1.webp"
                  icon2="/footer/github_footer2.webp"
                  alt="IoTUPNVJ"
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Quick Links */}
        <FadeIn direction="right" delay={0.6}>
          <div className="pt-[80px] md:w-[15vw] hidden md:flex flex-col gap-[10px] w-[300px] h-[300px] items-start">
            <p className="z-10 font-optima font-[900] text-[35px] text-biru-tua">
              Quick Links
            </p>

            <Link href="/" className={linkClass}>Home</Link>
            <Link href="/aboutus" className={linkClass}>About Us</Link>
            <Link href="/insight" className={linkClass}>IoT Insight</Link>
            <Link href="/contact" className={linkClass}>Contact Us</Link>
          </div>
        </FadeIn>

      </div>

      {/* Copyright */}
      <div className="bg-biru-tua w-full text-white text-center text-base p-2">
        <button
          type="button"
          onClick={() => hmList.length > 0 && setShow(true)}
          className="cursor-pointer"
        >
          Copyright © 2025 - KSM Internet of Things UPNVJ
        </button>
      </div>

      {/* Modal Hak Milik */}
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
