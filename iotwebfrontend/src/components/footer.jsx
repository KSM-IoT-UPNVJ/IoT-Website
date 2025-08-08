import RotatingIcons from "/src/utils/RotatingIcons";
import FadeIn from "../utils/fadeIn";

function Footer() {
  return (
    <div className="">
      <div className="flex w-full px-[4vw] pt-[100px] h-[700px] bg-gradient-to-b from-white to-biru-muda justify-between overflow-hidden">
        <FadeIn delay={0.8} direction={"left"}>
          <div className="pt-[80px] md:w-[15vw] md:flex flex-col gap-[10px] hidden w-[300px] h-[300px] items-end">
            <p className="z-10 font-optima font-[900] text-[35px] text-biru-tua text-end">
              Contact Info
            </p>
            <div>
              <a
                href=""
                className="z-10 font-optima font-[300] text-[20px] text-biru-tua hover:font-bold"
              >
                contact info
              </a>
            </div>
            <div>
              <a
                href=""
                className="z-10 font-optima font-[300] text-[20px] text-biru-tua hover:font-bold"
              >
                contact info
              </a>
            </div>
            <div>
              <a
                href=""
                className="z-10 font-optima font-[300] text-[20px] text-biru-tua hover:font-bold"
              >
                contact info
              </a>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.5} direction={"down"}>
          <div className="flex flex-col w-[96vw] md:w-[62vw] h-[400px] items-center">
            <img
              src="/Logo_IoT.png"
              alt="Logo_IoT"
              className="w-[180px] h-[201px] mb-2"
            ></img>
            <p className="font-titillium text-[24px] font-[700]">
              KSM Internet Of Things
            </p>
            <p className="font-titillium text-[16px] font-[400] mb-5">
              UPN "Veteran" Jakarta
            </p>
            <img
              src="/slogan.png"
              alt="Slogan"
              className="w-[368.5px] h-[77px] saturate-[450%] mb-3"
            ></img>
            <div className="flex w-[400px] h-[100px] justify-center gap-[40px]">
              <div className="flex gap-8">
                <FadeIn delay={0.8} direction={"up"}>
                  <RotatingIcons
                    link="https://www.instagram.com/iot.upnvj/"
                    icon1="/footer/ig_footer1.png"
                    icon2="/footer/ig_footer2.png"
                    alt="iot.upnvj"
                  />
                </FadeIn>
                <FadeIn delay={1} direction={"up"}>
                <RotatingIcons
                  link="https://www.linkedin.com/company/ksmiotupnvj"
                  icon1="/footer/linkedin_footer1.png"
                  icon2="/footer/linkedin_footer2.png"
                  alt="ksmiotupnvj"
                />
                </FadeIn>
                <FadeIn delay={1.2} direction={"up"}>
                <RotatingIcons
                  link="https://github.com/IoTUPNVJ"
                  icon1="/footer/github_footer1.png"
                  icon2="/footer/github_footer2.png"
                  alt="IoTUPNVJ"
                />
                </FadeIn>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.8} direction={"right"}>
          <div className="pt-[80px] md:w-[15vw] md:flex flex-col gap-[10px] hidden w-[300px] h-[300px] items-start">
            <p className="z-10 font-optima font-bold text-[35px] text-biru-tua">
              Quick Links
            </p>
            <div>
              <a
                href="#contact"
                className="z-10 font-optima font-normal text-[20px] text-biru-tua hover:font-bold"
              >
                Contact Us
              </a>
            </div>
            <div>
              <a
                href="#about-us"
                className="z-10 font-optima font-[300] text-[20px] text-biru-tua hover:font-bold"
              >
                About Us
              </a>
            </div>
            <div>
              <a
                href="#iot-insight"
                className="z-10 font-optima font-[300] text-[20px] text-biru-tua hover:font-bold"
              >
                Iot Insight
              </a>
            </div>
            <div>
              <a
                href="#article"
                className="z-10 font-optima font-[300] text-[20px] text-biru-tua hover:font-bold"
              >
                Article
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="bg-biru-tua text-white text-center text-base p-2">
        Copyright © 2025 - Zahid, Faiz, Goesny, Khalif, Dani, and UI/UX KSM IoT
        UPNVJ
      </div>
    </div>
  );
}

export default Footer;
