import React, { useEffect, useRef } from "react";

export default function IotInsightCarousel({ children }) {
  const sliderRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const cardWidth = 377;

  // Clone children for infinite effect
  const originalChildren = React.Children.toArray(children);
  const clonesBefore = originalChildren.map((child, i) =>
    React.cloneElement(child, { key: `clone-before-${i}` })
  );
  const clonesAfter = originalChildren.map((child, i) =>
    React.cloneElement(child, { key: `clone-after-${i}` })
  );
  const fullChildren = [...clonesBefore, ...originalChildren, ...clonesAfter];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalOriginalWidth = cardWidth * originalChildren.length;

    requestAnimationFrame(() => {
      slider.scrollLeft = totalOriginalWidth + cardWidth * originalChildren.length / 3;
    });

    const enableSmoothScroll = (el) => {
      el.classList.add("scroll-smooth");
    };
    const disableSmoothScroll = (el) => {
      el.classList.remove("scroll-smooth");
    };

    let isNearEdge = false;

    const maxScroll = totalOriginalWidth * 3;
    const minScroll = 0;
    const middleScroll = totalOriginalWidth;

    const scrollOneCard = () => {
      const currentScroll = slider.scrollLeft;
      const nearRightEdge = currentScroll >= maxScroll - cardWidth - 1;

      // Always scroll smoothly
      enableSmoothScroll(slider);
      slider.scrollBy({ left: cardWidth });

      if (nearRightEdge) {
        isNearEdge = true;

        // Shorter timeout to quickly jump without visual glitch
        // disableSmoothScroll(slider);
        slider.scrollLeft = minScroll + cardWidth;

        // Adjust auto-scroll interval temporarily
        disableSmoothScroll(slider);
        resetAutoScroll(0); // faster interval when near edge
      } else if (isNearEdge) {
        isNearEdge = false;
        resetAutoScroll(3000); // restore default interval
      }
    };

    const resetAutoScroll = (intervalTime) => {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = setInterval(scrollOneCard, intervalTime);
    };

    const startAutoScroll = () => {
      if (!autoScrollInterval.current) {
        autoScrollInterval.current = setInterval(scrollOneCard, 3000);
      }
    };

    const stopAutoScroll = () => {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    };

    startAutoScroll();

    // Drag-scroll logic
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    const handleMouseDown = (e) => {
      enableSmoothScroll(slider);
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      disableSmoothScroll(slider);
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      disableSmoothScroll(slider);
      isDown = false;
    };

    const handleMouseMove = (e) => {
      enableSmoothScroll(slider);
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
      disableSmoothScroll(slider);
    };

    // Handle manual infinite loop by jumping seamlessly
    const handleScroll = () => {
      disableSmoothScroll(slider);
      if (slider.scrollLeft < minScroll + 1) {
        slider.scrollLeft = maxScroll - 2 * cardWidth - 1; // +1 avoids stutter on edges
      } else if (slider.scrollLeft > maxScroll - cardWidth - 1) {
        slider.scrollLeft = minScroll + cardWidth + 1;
      }
    };

    // Event listeners
    slider.addEventListener("scroll", handleScroll);
    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);
    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      stopAutoScroll();
      slider.removeEventListener("scroll", handleScroll);
      slider.removeEventListener("mouseenter", stopAutoScroll);
      slider.removeEventListener("mouseleave", startAutoScroll);
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-l from-transparent to-biru-muda z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-transparent to-biru-muda z-10 pointer-events-none"></div>

      <div
        ref={sliderRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide cursor-default select-none mx-4 snap-x snap-mandatory"
      >
        <div className="flex w-fit">
          {React.Children.map(fullChildren, (child) => {
            return <div className={`w-fit snap-center md:snap-start mx-7.5 md:m-0 md:px-18.5`}>{child}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
