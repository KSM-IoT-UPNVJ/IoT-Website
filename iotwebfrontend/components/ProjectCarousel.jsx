import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({ children }) {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.offsetWidth < el.scrollWidth);
  };

  const scroll = (direction) => {
    const el = containerRef.current;
    if (!el) return;
    const scrollAmount = el.offsetWidth;
    el.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="relative w-full px-6 py-8">
      {showLeft && (
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 transition"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <div
        ref={containerRef}
        className="overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] 
             [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-6 w-full transition-transform duration-500 ease-in-out px-4">
          {React.Children.map(children, (child, _) => (
            <div className="w-full md:w-[32%] flex-shrink-0">{child}</div>
          ))}
        </div>
      </div>

      {showRight && (
        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 transition"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}
