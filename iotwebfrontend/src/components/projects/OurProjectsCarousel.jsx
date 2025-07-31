import React, { useRef, useState, useEffect } from "react";

export default function OurProjectsCarousel({ children }) {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const slider = containerRef.current;
    if (!slider) return;

    const checkScroll = () => {
      setTimeout(() => {
        setShowLeft(slider.scrollLeft > 10);
        setShowRight(
          slider.scrollLeft + slider.offsetWidth < slider.scrollWidth - 10
        );
      }, 400);
    };

    checkScroll();

    slider.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      slider.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    const slider = containerRef.current;
    if (!slider) return;
    slider.scrollBy({
      left: direction * slider.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {showLeft && (
        <img
          src="/Chevron_left.png"
          onClick={() => scroll(-1)}
          className="absolute -left-2 hover:-left-1 top-1/2 z-10 opacity-20 hover:opacity-100 hover:cursor-pointer scale-60 hover:scale-80 transition-all"
        />
      )}

      <div
        ref={containerRef}
        className="overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide snap-x snap-mandatory"
      >
        <div className="flex w-fit transition-transform duration-500 ease-in-out mx-6">
          {React.Children.map(children, (child, _) => (
            <div className="flex justify-center mx-[20vw] md:mx-4 lg:mx-8 md:w-[430px] flex-shrink-0 snap-center">
              {child}
            </div>
          ))}
        </div>
      </div>

      {showRight && (
        <img
          src="/Chevron_right.png"
          onClick={() => scroll(1)}
          className="absolute -right-2 hover:-right-1 top-1/2 z-10 opacity-20 hover:opacity-100 hover:cursor-pointer scale-60 hover:scale-80 transition-all"
        />
      )}
    </div>
  );
}
