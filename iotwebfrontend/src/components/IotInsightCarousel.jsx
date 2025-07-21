import React, { useRef, useEffect } from "react";

export default function IotInsightCarousel({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      startX = e.clientX || e.touches?.[0]?.clientX;
      scrollStart = container.scrollLeft;
      container.setPointerCapture(e.pointerId);
      container.classList.add("cursor-grabbing");
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const x = e.clientX || e.touches?.[0]?.clientX;
      const walk = x - startX;
      container.scrollLeft = scrollStart - walk;
    };

    const onPointerUp = (e) => {
      isDragging = false;
      container.classList.remove("cursor-grabbing");
      container.releasePointerCapture(e.pointerId);
    };

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointerleave", onPointerUp);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointerleave", onPointerUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto cursor-grab scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex w-fit gap-6 px-6">
        {React.Children.map(children, (child) => (
          <div className="flex-shrink-0 snap-center">{child}</div>
        ))}
      </div>
    </div>
  );
}
