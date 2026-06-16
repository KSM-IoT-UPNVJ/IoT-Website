import FadeIn from '../../utils/fadeIn';
const Slogan = () => {
  return (
    <section
      className="py-16 px-4"
      style={{
        fontFamily: 'var(--font-poppins)',
        color: 'var(--color-biru-tua)',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        <FadeIn direction={'left'} delay={0.4}>
          <div className="max-w-5xl mx-auto flex flex-col items-center select-none">
            <img
              src="slogan.png"
              alt="slogan"
              className="flex items-center w-[590px] h-auto"
            />
          </div>
        </FadeIn>
        <FadeIn direction={'right'} delay={0.8}>
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            <p className="text-xs md:text-lg text-center max-w-3xl select-none">
              Koneksi bukan hanya tentang teknologi, tetapi juga tentang bagaimana 
              setiap individu dapat saling terhubung, berkembang, dan bertumbuh bersama.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <FadeIn direction={'left'} delay={1.2}>
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-4">
              <h3
                className="text-2xl md:text-4xl font-bold mb-2 select-none"
                style={{ color: 'var(--color-biru-tua)' }}
              >
                Stay Connected
              </h3>
            </div>
          </FadeIn>
          <FadeIn direction={'right'} delay={1.6}>
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
              <p className="text-xs md:text-lg text-center max-w-3xl select-none">
                Menjadi pengingat bahwa kolaborasi, relasi, dan semangat belajar adalah fondasi 
                dalam membangun lingkungan yang suportif dan inovatif
              </p>
            </div>
          </FadeIn>

          <div>
            <FadeIn direction={'left'} delay={2}>
              <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
                <h3
                  className="text-2xl md:text-4xl font-bold mb-6 mt-4 select-none"
                  style={{ color: 'var(--color-biru-tua)' }}
                >
                  Make Difference
                </h3>
              </div>
            </FadeIn>
            <FadeIn direction={'right'} delay={2.4}>
              <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
                <p className="text-xs md:text-lg text-center max-w-3xl select-none">
                  Merepresentasikan komitmen kami untuk terus menciptakan dampak melalui karya, 
                  teknologi, serta kontribusi nyata bagi lingkungan sekitar.
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
