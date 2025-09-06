import RotatingIcons from '../../utils/RotatingIcons';
import FadeIn from '../../utils/fadeIn';

export default function Map() {
  return (
    <div className="flex flex-col md:flex-row bg-biru-tua rounded-xl overflow-hidden ">
      <div className="aspect-video w-full flex-1/2 p-10">
        <FadeIn direction={'left'} delay={0.2} className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.304762157166!2d106.77209311381209!3d-6.3545800954015315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eee3bada9ad3%3A0xa4d4dfc5da2d388!2sFakultas%20Teknik%20UPNVJ%20Limo!5e0!3m2!1sen!2sid!4v1611216657850!5m2!1sen!2sid"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </FadeIn>
      </div>

      <div className="flex flex-col flex-1/2 p-10 justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="font-optima font-extrabold text-white text-4xl">
            <FadeIn direction={'right'} delay={0.2}>
              Our Location
            </FadeIn>
          </h3>
          <FadeIn direction={'right'} delay={0.3}>
            <p className="text-white text-base py-2">
              Kampus FT UPNVJ, Jl. Limo Raya, Kota Depok, Jawa Barat, 16515
            </p>
          </FadeIn>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-optima font-extrabold text-white text-4xl">
            <FadeIn direction={'right'} delay={0.4}>
              Follow Us!
            </FadeIn>
          </h3>
          <FadeIn direction={'right'} delay={0.5}>
            <div className="flex gap-4 mb-0">
              <RotatingIcons
                link="https://www.instagram.com/iot.upnvj/"
                icon1="/footer/ig_footer1.png"
                icon2="/footer/ig_footer2.png"
                alt="iot.upnvj"
                className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:bg-none"
              />
              <RotatingIcons
                link="https://www.linkedin.com/company/ksmiotupnvj"
                icon1="/footer/linkedin_footer1.png"
                icon2="/footer/linkedin_footer2.png"
                alt="ksmiotupnvj"
                className="bg-biru-sedang"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
