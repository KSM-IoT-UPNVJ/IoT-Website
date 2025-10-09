'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import FadeIn from '../../utils/fadeIn';
import DropdownAnimate from '../../utils/dropdownAnimate';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '@/public/Logo_IoT.png';
import slogan from '@/public/slogan.png';

function Nav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleToggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const linkClass =
    'flex text-md cursor-pointer justify-center font-medium items-center px-4 hover:-translate-y-0.5 transition transform duration-100 hover:text-biru-sedang';

  const mobileLinkClass =
    'block text-md px-4 py-2 hover:bg-abu-sedang rounded-xl transition';
  return (
    <div className="sticky z-10 bg-gradient-to-r from-biru-muda to-white shadow-md py-6.5 px-7.5 w-full h-auto">
      <div className="flex justify-between items-center">
        {/* logo */}
        <button
          onClick={() => {
            router.push(`/`);
          }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div>
            <FadeIn delay={1.2} direction={'left'}>
              <Image
                src={logo}
                alt="logo"
                width={40}
                height={40}
                className="w-auto h-10"
              />
            </FadeIn>
          </div>
          <div>
            <FadeIn delay={1.2} direction={'left'}>
              <p className="font-titillium font-semibold text-base ">
                KSM Internet Of Things
              </p>
              <p className="font-titillium font-normal text-sm">
                UPN "Veteran" Jakarta
              </p>
            </FadeIn>
          </div>
        </button>

        {/* Navigation list */}
        <div className="hidden md:flex justify-center items-center space-x-2">
          <button
            onClick={() => {
              router.push(`/`);
            }}
            className={linkClass}
          >
            <FadeIn delay={0.3} direction={'down'}>
              Home
            </FadeIn>
          </button>
          <div ref={dropdownRef}>
            <button onClick={handleToggle} className={linkClass}>
              <FadeIn delay={0.4} direction={'down'}>
                About
              </FadeIn>
              <FadeIn delay={0.4} direction={'down'}>
                <ChevronDown size={16} />
              </FadeIn>
            </button>
            {open && (
              <div className="absolute mt-3 shadow-xs rounded-xl border-2 border-biru-muda bg-transparent backdrop-blur-[10px] text-xs animate-fade-in duration-200 z-30">
                <DropdownAnimate show={open}>
                  <a
                    onClick={() => router.push(`/aboutus`)}
                    className="block cursor-pointer rounded-xl text-center text-md px-2 py-2 hover:-translate-y-0.5 transition transform duration-100 hover:bg-abu-sedang"
                  >
                    About Us
                  </a>
                  <button
                    onClick={() => {
                      router.push(`/kepengurusan`);
                    }}
                    className="block text-md cursor-pointer text-center rounded-xl px-2 py-2 hover:-translate-y-0.5 transition transform duration-100 hover:bg-abu-sedang"
                  >
                    Kepengurusan
                  </button>
                </DropdownAnimate>
              </div>
            )}
          </div>
          <button onClick={() => router.push(`/project`)} className={linkClass}>
            <FadeIn delay={0.8} direction={'down'}>
              Projects
            </FadeIn>
          </button>
          <button onClick={() => router.push(`/contact`)} className={linkClass}>
            <FadeIn delay={1.0} direction={'down'}>
              Contact
            </FadeIn>
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={handleToggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:block">
          <FadeIn delay={1.2} direction={'down'}>
            <button
              onClick={() => router.push(`/aboutus`)}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Image
                src={slogan}
                alt="slogan"
                width={40}
                height={40}
                className="w-auto h-10"
              />
            </button>
          </FadeIn>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mt-4 md:hidden bg-white p-4 rounded-xl shadow border border-biru-muda space-y-2 animate-fade-in">
          <button
            onClick={() => router.push(`/home`)}
            href="home"
            className={mobileLinkClass}
          >
            Home
          </button>
          <div ref={dropdownRef}>
            <button
              onClick={handleToggle}
              className="w-full flex justify-between items-center px-4 py-2 hover:bg-abu-sedang rounded-xl transition"
            >
              About <ChevronDown size={16} />
            </button>
            {open && (
              <DropdownAnimate show={open} className="mt-2 space-y-1">
                <div className="px-5 border-1 border-biru-muda bg-white rounded-xl">
                  <button
                    onClick={() => {
                      router.push(`/aboutus`);
                    }}
                    className={mobileLinkClass}
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => {
                      router.push(`/kepengurusan`);
                    }}
                    href="kepengurusan"
                    className={mobileLinkClass}
                  >
                    Kepengurusan
                  </button>
                </div>
              </DropdownAnimate>
            )}
          </div>
          <button
            onClick={() => {
              router.push(`/project`);
              handleToggleMobileMenu();
            }}
            className={mobileLinkClass}
          >
            Projects
          </button>
          <button
            onClick={() => {
              router.push(`/contact`);
              handleToggleMobileMenu();
            }}
            className={mobileLinkClass}
          >
            Contact
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;
