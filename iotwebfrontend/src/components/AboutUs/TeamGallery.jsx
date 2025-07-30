import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules"; // Hanya gunakan Autoplay, tanpa Navigation
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FadeIn from "../../utils/fadeIn";

export default function TeamGallery() {
  const swiperRef = useRef(null);
  const [direction, setDirection] = useState("right");

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
        { src: "/aboutUs/nada.webp" }
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

  return (
    <div className="elementor-widget-container">
      <FadeIn direction={"down"} delay={0.8}>
        <div className="w-full h-120px  flex flex-col items-center justify-center px-3 py-3">
          {/* Judul */}
          <h1
            className="text-4xl md:text-5xl font-semibold text-[#2C3E50] mb-30 text-center"
            style={{ fontFamily: "'OptimaNova'" }}
          >
            Our Team
          </h1>
        </div>
      </FadeIn>
      <FadeIn direction={"up"} delay={0.4}>
        <div className="swiper-container-wrap ">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]} // Hanya gunakan Autoplay
            spaceBetween={22}
            slidesPerView={6}
            loop={false}
            s
            autoplay={{
              delay: 4000, // Scroll terus menerus
              disableOnInteraction: true, // Tidak bisa diinteraksi
              waitForTransition: false,
              reverseDirection: direction === "left",
            }}
            speed={9000} // Kecepatan scroll
            allowTouchMove={false} // Matikan touch move
            noSwiping={true} // Matikan swiping
            noSwipingClass="swiper-slide" // Matikan swiping di slide
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
            className="pp-tm-wrapper pp-tm-carousel"
          >
            {columns.map((column, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide"
                style={{
                  width: "240px",
                  marginRight: "0px",
                  pointerEvents: "none", // Matikan pointer events
                }}
              >
                <div className={`flex flex-col gap-5 ${column.className}`}>
                  {column.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img.src}
                      alt={img.alt}
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
                      style={{ pointerEvents: "none" }} // Matikan pointer events
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </FadeIn>
    </div>
  );
}
