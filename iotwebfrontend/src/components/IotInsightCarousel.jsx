import React, { useEffect, useRef } from "react";

export default function IotInsightCarousel({ children }) {
  const sliderRef = useRef(null);
  let isDown = useRef(false);
  let startX = useRef(null);
  let scrollLeft = useRef(null);

  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      let slider = sliderRef.current;
      slider.addEventListener("mousedown", handleStart);
      slider.addEventListener("mouseup", handleFinish);
      slider.addEventListener("mouseleave", handleFinish);
      slider.addEventListener("mousemove", handleMove);

      slider.addEventListener("touchstart", handleStart);
      slider.addEventListener("touchmove", handleMove);
      slider.addEventListener("touchend", handleFinish);

      return () => {
        slider.removeEventListener("mousedown", handleStart);
        slider.removeEventListener("mouseup", handleFinish);
        slider.removeEventListener("mouseleave", handleFinish);
        slider.removeEventListener("mousemove", handleMove);

        slider.removeEventListener("touchstart", handleStart);
        slider.removeEventListener("touchmove", handleMove);
        slider.removeEventListener("touchend", handleFinish);
      };
    }
  }, []);

  function handleStart(e) {
    isDown.current = true;

    const pageX = e.type.includes("touch") ? e.touches[0].pageX : e.pageX;

    startX.current = pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  }

  function handleFinish() {
    isDown.current = false;
  }

  function handleMove(e) {
    if (!isDown.current) return;
    e.preventDefault();

    const pageX = e.type.includes("touch") ? e.touches[0].pageX : e.pageX;

    const x = pageX - sliderRef.current.offsetLeft;
    const walk = x - startX.current;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <div ref={sliderRef} className="overflow-hidden cursor-default select-none">
      <div className="flex w-fit mx-15 transition-transform duration-300 ease-in-out">
        {React.Children.map(children, (child) => (
          <div className="w-fit mx-6">{child}</div>
        ))}
      </div>
    </div>
  );
}
