import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules"; // Hanya gunakan Autoplay, tanpa Navigation
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TeamGallery() {
  const swiperRef = useRef(null);
  const [direction, setDirection] = useState("right");

  // Data untuk 12 kolom (pastikan lengkap)
  const columns = [
    // Kolom 1
    {
      type: "tall",
      images: [
        { src: "/aboutUs/bangRifqi.JPG"}, 
        { src: "/aboutUs/bangDimas.JPG"}],
      className: "",
    },
    {
      type: "medium",
      images: [
        { src: "/aboutUs/kakBella.JPG"},
        { src: "/aboutUs/kakNaira.JPG"},
      ],
      className: "pt-10",
    },
    {
      type: "short",
      images: [
        { src: "/aboutUs/bangFalis.JPG"},
        { src: "/aboutUs/bangOctogius.JPG"},
        { src: "/aboutUs/bangNaufal.JPG"},
      ],
      className: "",
    },
    {
      type: "tall",
      images: [
        { src: "/aboutUs/bangKumkum.JPG"},
        { src: "/aboutUs/bangRifat.JPG"},
      ],
      className: "",
    },
    {
      type: "medium",
      images: [
        { src: "/aboutUs/bangZahid.JPG"},
        { src: "/aboutUs/bangRakka.JPG"},
      ],
      className: "pt-10",
    },
    {
      type: "short",
      images: [
        { src: "/aboutUs/bangReby.JPG"},
        { src: "/aboutUs/bangMusfa.JPG"},
        { src: "/aboutUs/bangFaiq.JPG"},
      ],
      className: "",
    },
    {
      type: "tall",
      images: [
        { src: "/aboutUs/bangLucky.JPG"},
        { src: "/aboutUs/Shauqi.JPG"},
      ],
      className: "",
    },
    {
      type: "medium",
      images: [
        { src: "/aboutUs/bangRiza.JPG"},
        { src: "/aboutUs/kakAmelia.JPG"},
      ],
      className: "pt-10",
    },
    {
      type: "short",
      images: [
        { src: "/aboutUs/bangMauli.JPG"},
        { src: "/aboutUs/bangRakka2.JPG"},
        { src: "/aboutUs/azam.JPG"},
      ],
      className: "",
    },
    {
      type: "tall",
      images: [
        { src: "/aboutUs/bangRafif.JPG"},
        { src: "/aboutUs/nada.JPG"},
      ],
      className: "",
    },
    {
      type: "medium",
      images: [
        { src: "/aboutUs/ilham.JPG"},
        { src: "/aboutUs/bangDhoni.JPG"},
      ],
      className: "pt-10",
    },
    {
      type: "short",
      images: [
        { src: "/aboutUs/bangJohn.JPG"},
        { src: "/aboutUs/bangMarsel.JPG"},
        { src: "/aboutUs/bangIrfan.JPG"},
      ],
      className: "",
    },
    {
      type: "tall",
      images: [
        { src: "/aboutUs/bangNico.JPG"},
        { src: "/aboutUs/bangGerard.JPG"},
      ],
      className: "",
    },
    {
      type: "medium",
      images: [
        { src: "/aboutUs/bangFairly.JPG"},
        { src: "/aboutUs/bangAzriel.JPG"},
      ],
      className: "pt-10",
    },
    {
      type: "short",
      images: [
        { src: "/aboutUs/bangFarhan.JPG"},
        { src: "/aboutUs/nabhan.JPG"},
        { src: "/aboutUs/bangSaddam.JPG"},
      ],
      className: "",
    },
    {
      type: "medium",
      images: [
        { src: "/aboutUs/bangImmanuel.JPG"},
        { src: "/aboutUs/bangGoesny.JPG"},
      ],
      className: "pt-10",
    },
    {
      type: "short",
      images: [
        { src: "/aboutUs/bangFaiz.JPG"},
        { src: "/aboutUs/dhani.JPG"},
        { src: "/aboutUs/khalif.JPG"},
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
      <div className="w-full h-120px  flex flex-col items-center justify-center px-3 py-3">
        {/* Judul */}
        <h1
          className="text-4xl md:text-5xl font-semibold text-[#2C3E50] mb-30 text-center"
          style={{ fontFamily: "'OptimaNova'" }}
        >
          Our Team
        </h1>
      </div>
      <div className="swiper-container-wrap ">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]} // Hanya gunakan Autoplay
          spaceBetween={22}
          slidesPerView={6}
          loop={false}
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
    </div>
  );
}
