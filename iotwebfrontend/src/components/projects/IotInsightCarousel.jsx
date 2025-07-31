import React, { useEffect, useRef } from "react";

export default function IotInsightCarousel({ children }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide cursor-default select-none mx-4 snap-x snap-mandatory"
    >
      <div className="flex w-fit">
        {React.Children.map(children, (child) => {
          return (
            <div
              className={`w-fit snap-start px-18.5`}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
}
