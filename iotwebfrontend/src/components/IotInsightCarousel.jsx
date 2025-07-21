import React, { useRef, useEffect } from "react";

export default function IotInsightCarousel({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      container.classList.add("cursor-grabbing");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const mouseLeaveOrUp = () => {
      isDown = false;
      container.classList.remove("cursor-grabbing");
    };

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", mouseDown);
    container.addEventListener("mouseleave", mouseLeaveOrUp);
    container.addEventListener("mouseup", mouseLeaveOrUp);
    container.addEventListener("mousemove", mouseMove);

    return () => {
      container.removeEventListener("mousedown", mouseDown);
      container.removeEventListener("mouseleave", mouseLeaveOrUp);
      container.removeEventListener("mouseup", mouseLeaveOrUp);
      container.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto cursor-grab scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex w-fit transition-transform duration-500 ease-in-out gap-6 px-6">
        {React.Children.map(children, (child, _) => (
          <div className="flex-shrink-0 snap-center">{child}</div>
        ))}
      </div>
    </div>
  );
}
