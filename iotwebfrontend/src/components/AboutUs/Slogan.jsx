import FadeIn from "../../utils/fadeIn";
const Slogan = () => {
  return (
    <section
      className="py-16 px-4"
      style={{
        fontFamily: "var(--font-poppins)",
        color: "var(--color-biru-tua)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        <FadeIn direction={"left"} delay={0.4}>
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <img
              src="slogan.png"
              alt="slogan"
              className="flex items-center w-[590px] h-auto"
            />
          </div>
        </FadeIn>
        <FadeIn direction={"right"} delay={0.8}>
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            <p className="text-xs md:text-lg text-center max-w-3xl">
              Slogan ini menjadi fondasi utama dan cerminan semangat KSM IoT
              tahun 2025 yang memiliki dua pilar utama:
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn direction={"left"} delay={1.2}>
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center ">
              <h3
                className="text-4xl font-bold mb-2"
                style={{ color: "var(--color-biru-tua)" }}
              >
                Innovating Today
              </h3>
            </div>
          </FadeIn>
          <FadeIn direction={"right"} delay={1.6}>
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
              <p className="text-base md:text-lg leading-relaxed">
                Menanamkan keberanian untuk bermimpi besar, berani mencoba, dan
                tak henti <br />
                menciptakan solusi cerdas di bidang teknologi Internet of
                Things.
              </p>
            </div>
          </FadeIn>

          <div>
            <FadeIn direction={"left"} delay={2}>
              <div className="max-w-5xl mx-auto flex flex-col items-center text-center ">
                <h3
                  className="text-4xl font-bold mb-2"
                  style={{ color: "var(--color-biru-tua)" }}
                >
                  Champion Tomorrow
                </h3>
              </div>
            </FadeIn>
            <FadeIn direction={"right"} delay={2.4}>
              <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
                <p className="text-base md:text-lg leading-relaxed">
                  Menegaskan tujuan besar untuk melahirkan individu yang menjadi
                  juara, baik <br />
                  dalam kompetisi teknologi maupun sebagai pribadi yang
                  bermanfaat dan menjadi <br />
                  penggerak perubahan di era teknologi.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
