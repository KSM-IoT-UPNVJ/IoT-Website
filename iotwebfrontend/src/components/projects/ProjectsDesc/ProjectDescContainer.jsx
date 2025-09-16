import FadeIn from "/src/utils/fadeIn";

export default function ProjectDescContainer() {
  return (
    <>
      <div className="flex flex-col bg-biru-muda mx-8 md:mx-15 overflow-hidden">
        <h1 className="font-optima font-extrabold text-biru-tua bg-amber-200 text-4xl mx-auto mt-10 mb-5 select-none">
          <FadeIn direction={"right"} delay={0.8}>
            KSM IoT UPNVJ Website Development
          </FadeIn>
        </h1>
        <div className="flex flex-col gap-1 items-center bg-amber-500">
          <h3 className="font-optima font-extrabold text-white text-4xl">
            <FadeIn direction={"right"} delay={0.2}>
              Our Location
            </FadeIn>
          </h3>
          <FadeIn direction={"right"} delay={0.3}>
            <p className="text-white text-base py-2">
              Kampus FT UPNVJ, Jl. Limo Raya, Kota Depok, Jawa Barat, 16515
            </p>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
