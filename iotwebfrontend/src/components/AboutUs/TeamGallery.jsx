import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FadeIn from "../../utils/fadeIn";

export default function TeamGallery() {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [direction, setDirection] = useState("right");
  const [visibleSlides, setVisibleSlides] = useState({});

  // Data untuk 12 kolom (pastikan lengkap)
  const columns = [
    // Kolom 1
    {
      type: "tall",
      images: [
        { src: "/aboutUs/bangRifqi.webp" },
        { src: "/aboutUs/bangDimas.webp" },
      ],
      className: "",
    },
    {
      type: "medium",
      images: [
        { src: "/aboutUs/kakBella.webp" },
        { src: "/aboutUs/kakNaira.webp" },
      ],
      className: "pt-10",
    },
    {
      type: "short",
      images: [
        { src: "/aboutUs/bangFalis.webp" },
        { src: "/aboutUs/bangOctogius.webp" },
        { src: "/aboutUs/bangNaufal.webp" },
      ],
      className: "",
    },
    {
      type: "tall",
      images: [
        { src: "/aboutUs/bangKumkum.webp" },
        { src: "/aboutUs/bangRifat.webp" },
      ],
      className: "",
    },
    {
      type: "medium",
      images: [
        { src: "/aboutUs/bangZahid.webp" },
        { src: "/aboutUs/bangRakka.webp" },
      ],
      className: "pt-10",
    },
    {
      type: "short",
      images: [
        { src: "/aboutUs/bangReby.webp" },
        { src: "/aboutUs/bangMusfa.webp" },
        { src: "/aboutUs/bangFaiq.webp" },
      ],
      className: "",
    },
    {
      type: "tall",
      images: [
        { src: "/aboutUs/bangLucky.webp" },
        { src: "/aboutUs/Shauqi.webp" },
      ],
      className: "",
    },
    {
      type: "medium",
      images: [
        { src: "/aboutUs/bangRiza.webp" },
        { src: "/aboutUs/kakAmelia.webp" },
      ],
      className: "pt-10",
    },
    {
      type: "short",
      images: [
        { src: "/aboutUs/bangMauli.webp" },
        { src: "/aboutUs/bangRakka2.webp" },
        { src: "/aboutUs/azam.webp" },
      ],
      className: "",
    },
    {
      type: "tall",
      images: [
        { src: "/aboutUs/bangRafif.webp" },
        { src: "/aboutUs/nada.webp" },
      ],
      className: "",
    },
    {
      type: "medium",
      images: [
        { src: "/aboutUs/ilham.webp" },
        { src: "/aboutUs/bangDhoni.webp" },
      ],
      className: "pt-10",
    },
    {
      type: "short",
      images: [
        { src: "/aboutUs/bangJohn.webp" },
        { src: "/aboutUs/bangMarsel.webp" },
        { src: "/aboutUs/bangIrfan.webp" },
      ],
      className: "",
    },
    {
      type: "tall",
      images: [
        { src: "/aboutUs/bangNico.webp" },
        { src: "/aboutUs/bangGerard.webp" },
      ],
      className: "",
    },
    {
      type: "medium",
      images: [
        { src: "/aboutUs/bangFairly.webp" },
        { src: "/aboutUs/bangAzriel.webp" },
      ],
      className: "pt-10",
    },
    {
      type: "short",
      images: [
        { src: "/aboutUs/bangFarhan.webp" },
        { src: "/aboutUs/nabhan.webp" },
        { src: "/aboutUs/bangSaddam.webp" },
      ],
      className: "",
    },
    {
      type: "medium",
      images: [
        { src: "/aboutUs/bangImmanuel.webp" },
        { src: "/aboutUs/bangGoesny.webp" },
      ],
      className: "pt-10",
    },
    {
      type: "short",
      images: [
        { src: "/aboutUs/bangFaiz.webp" },
        { src: "/aboutUs/dhani.webp" },
        { src: "/aboutUs/khalif.webp" },
      ],
      className: "",
    },
  ];

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;

    const handleReachEnd = () => {
      setDirection("left");
      swiper.autoplay.start();
    };

    const handleReachBeginning = () => {
      setDirection("right");
      swiper.autoplay.start();
    };

    swiper.on("reachEnd", handleReachEnd);
    swiper.on("reachBeginning", handleReachBeginning);

    return () => {
      swiper.off("reachEnd", handleReachEnd);
      swiper.off("reachBeginning", handleReachBeginning);
    };
  }, []);

  // Hitung posisi slide terhadap viewport container
  useEffect(() => {
    const updateVisibility = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const slides = container.querySelectorAll(".swiper-slide");

      const newVisibility = {};
      slides.forEach((slide, idx) => {
        const rect = slide.getBoundingClientRect();
        const isVisible =
          rect.right > containerRect.left + 50 &&
          rect.left < containerRect.right - 50;
        newVisibility[idx] = isVisible;
      });

      setVisibleSlides(newVisibility);
    };

    updateVisibility();
    const interval = setInterval(updateVisibility, 100); // cukup ringan
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="elementor-widget-container">
      <FadeIn direction="down" delay={0.8}>
        <div className="w-full h-120px flex flex-col items-center justify-center px-3 py-3">
          <h1
            className="text-4xl md:text-5xl font-semibold text-[#2C3E50] mb-30 text-center"
            style={{ fontFamily: "'OptimaNova'" }}
          >
            Our Team
          </h1>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.4}>
        <div
          className="swiper-container-wrap overflow-hidden"
          ref={containerRef}
        >
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={22}
            slidesPerView={2}
            loop={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
              waitForTransition: false,
              reverseDirection: direction === "left",
            }}
            speed={9000}
            allowTouchMove={false}
            noSwiping={true}
            noSwipingClass="swiper-slide"
            breakpoints={{
              430: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
            className="pp-tm-wrapper pp-tm-carousel"
          >
            {columns.map((column, index) => {
              const isVisible = visibleSlides[index];
              return (
                <SwiperSlide
                  key={index}
                  className="swiper-slide"
                  style={{
                    width: "240px",
                    marginRight: "0px",
                    pointerEvents: "none",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scale(1)" : "scale(0.92)",
                  }}
                >
                  <div className={`flex flex-col gap-5 ${column.className}`}>
                    {column.images.map((img, imgIndex) => (
                      <FadeIn
                        key={imgIndex}
                        direction="up"
                        delay={imgIndex * 2} // delay berurutan 0s, 0.6s, 1.2s, dst.
                      >
                        <img
                          src={img.src}
                          alt={img.alt || `team-${index}-${imgIndex}`}
                          className={`
        rounded-lg object-cover
        ${
          column.type === "tall"
            ? "w-full h-[280px]"
            : column.type === "medium"
            ? "w-full h-[240px]"
            : "w-full h-[180px]"
        }
      `}
                          style={{ pointerEvents: "none" }}
                        />
                      </FadeIn>
                    ))}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </FadeIn>
    </div>
  );
}
