import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({ children }) {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const checkScroll = () => {
      setShowLeft(el.scrollLeft > 10);
      setShowRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 10);
    };

    checkScroll();

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.offsetWidth, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {showLeft && (
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-abu-sedang)] rounded-full shadow-lg p-2 hover:bg-[var(--color-biru-tua)] hover:cursor-pointer transition"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <div
        ref={containerRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-fit transition-transform duration-500 ease-in-out mx-6">
          {React.Children.map(children, (child, _) => (
            <div className="w-screen flex justify-center mx-8 md:w-[430px] flex-shrink-0 snap-center">
              {child}
            </div>
          ))}
        </div>
      </div>

      {showRight && (
        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-abu-sedang)] rounded-full shadow-lg p-2 hover:bg-[var(--color-biru-tua)] hover:cursor-pointer transition"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}
