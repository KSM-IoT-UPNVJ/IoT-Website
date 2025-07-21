import React, { useRef, useState, useEffect } from "react";

export default function OurProjectsCarousel({ children }) {
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
        <img
          src="/Chevron_left.png"
          onClick={() => scroll(-1)}
          className="absolute -left-2 hover:-left-1 top-1/2 z-10 hover:cursor-pointer scale-60 hover:scale-80 transition-all"
        />
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
        <img
          src="/Chevron_right.png"
          onClick={() => scroll(1)}
          className="absolute -right-2 hover:-right-1 top-1/2 z-10 hover:cursor-pointer scale-60 hover:scale-80 transition-all"
        />
      )}
    </div>
  );
}
