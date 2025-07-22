import React, { useEffect, useRef } from "react";

export default function IotInsightCarousel(props) {
  const sliderRef = useRef(null);
  let isDown = useRef(false);
  let startX = useRef(null);
  let scrollLeft = useRef(null);

  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      let slider = sliderRef.current;
      slider.addEventListener("mousedown", handleMouseDown);
      slider.addEventListener("mouseleave", handleMouseLeave);
      slider.addEventListener("mouseup", handleMouseUp);
      slider.addEventListener("mousemove", handleMouseMove);

      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchmove", handleTouchMove);
      slider.addEventListener("touchend", handleMouseUp);

      return () => {
        slider.removeEventListener("mousedown", handleMouseDown);
        slider.removeEventListener("mouseleave", handleMouseLeave);
        slider.removeEventListener("mouseup", handleMouseUp);
        slider.removeEventListener("mousemove", handleMouseMove);

        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchmove", handleTouchMove);
        slider.removeEventListener("touchend", handleMouseUp);
      };
    }
  }, []);

  function handleMouseDown(e) {
    isDown.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  }

  function handleMouseLeave() {
    isDown.current = false;
  }

  function handleMouseUp() {
    isDown.current = false;
  }

  function handleMouseMove(e) {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX.current;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  }

  function handleTouchStart(e) {
    isDown.current = true;
    startX.current = e.touches[0].pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  }

  function handleTouchMove(e) {
    if (!isDown.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = x - startX.current;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <div ref={sliderRef} className="overflow-hidden cursor-default select-none">
      <div className="flex w-fit mx-15 transition-transform duration-300 ease-in-out">
        {React.Children.map(props.children, (child) => (
          <div className="w-fit mx-6">{child}</div>
        ))}
      </div>
    </div>
  );
}
