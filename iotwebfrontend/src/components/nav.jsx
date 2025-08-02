import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeIn from '../utils/fadeIn';

function Nav() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setOpen((prev) => !prev);

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

  return (
    <div className="sticky bg-gradient-to-r from-biru-muda to-white shadow-md py-6.5 px-7.5 w-full h-auto">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div>
            <FadeIn delay={0.1} direction={'left'}>
              <img src="Logo_IoT.png" alt="logo" className="w-auto h-10" />
            </FadeIn>
          </div>
          <div>
            <FadeIn delay={0.2} direction={'left'}>
              <p className="font-titillium font-semibold text-base ">
                KSM Internet Of Things
              </p>
              <p className="font-titillium font-normal text-sm">
                UPN "Veteran" Jakarta
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Navigation list */}
        <div className="flex justify-center items-center space-x-2">
          <a href="#home" className={linkClass}>
            <FadeIn delay={0.3} direction={'down'}>
              Home
            </FadeIn>
          </a>
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
              <div className="absolute mt-3 shadow-xs rounded-xl border-2 border-biru-muda bg-transparent backdrop-blur-[10px] text-xs animate-fade-in duration-200">
                <a
                  href="#about"
                  className="block rounded-xl text-center text-md px-2 py-2 hover:-translate-y-0.5 transition transform duration-100 hover:bg-abu-sedang"
                >
                  About Us
                </a>
                <a
                  href="#kepengurusan"
                  className="block text-md text-center rounded-xl px-2 py-2 hover:-translate-y-0.5 transition transform duration-100 hover:bg-abu-sedang"
                >
                  Kepengurusan
                </a>
              </div>
            )}
          </div>
          <a href="#project" className={linkClass}>
            <FadeIn delay={0.8} direction={'down'}>
              Projects
            </FadeIn>
          </a>
          <a href="#contact" className={linkClass}>
            <FadeIn delay={1.0} direction={'down'}>
              Contact
            </FadeIn>
          </a>
        </div>

        <div>
          <FadeIn delay={1.2} direction={'right'}>
            <img src="slogan.png" alt="slogan" className="w-auto h-10" />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default Nav;
