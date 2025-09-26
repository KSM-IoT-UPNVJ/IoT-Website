import { Phone, Mail, Globe } from 'lucide-react';
import FadeIn from '../../utils/fadeIn';

export default function MediaCard() {
  const imageSrc = 'foto_upn.jpg';
  const cardImage =
    'relative h-16 sm:h-18 md:h-20 lg:h-21 rounded-xl sm:rounded-2xl overflow-hidden group hover:-translate-y-1 hover:scale-105 duration-150';

  return (
    <div className="flex flex-col gap-3 sm:gap-4 flex-1 lg:flex-2/7 p-4 sm:p-6 md:p-8 lg:p-10">
      <a href="tel:+62 813-1522-6318" className={cardImage}>
        <FadeIn delay={0.4} direction={'right'} className="w-full h-full">
          <img
            src={imageSrc}
            alt="Top"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 text-white backdrop-blur-[5px] bg-black/25 flex items-center px-3 sm:px-4 gap-2 sm:gap-3 md:gap-4 group-hover:bg-black/50 duration-150">
            <div className="bg-biru-sedang p-1.5 sm:p-2 rounded-full duration-150">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="font-bold duration-150 text-sm sm:text-base">
                Phone
              </p>
              <p className="text-xs sm:text-sm duration-150">
                +62 813-1552-6318
              </p>
            </div>
          </div>
        </FadeIn>
      </a>

      <a href="mailto: internetofthings.upnvj@gmail.com" className={cardImage}>
        <FadeIn delay={0.7} direction={'right'} className="w-full h-full">
          <img
            src={imageSrc}
            alt="Middle"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 text-white bg-black/25 flex backdrop-blur-[5px] items-center px-3 sm:px-4 gap-2 sm:gap-3 md:gap-4 group-hover:bg-black/50 duration-150">
            <div className="bg-biru-sedang p-1.5 sm:p-2 rounded-full">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base">Email</p>
              <p className="text-xs sm:text-sm break-all">
                internetofthings.upnvj@gmail.com
              </p>
            </div>
          </div>
        </FadeIn>
      </a>

      <a href="https://ksmiotupnvj.my.id/" className={cardImage}>
        <FadeIn delay={1.0} direction={'right'} className="w-full h-full">
          <img
            src={imageSrc}
            alt="Bottom"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 text-white bg-black/25 backdrop-blur-[5px] flex items-center px-3 sm:px-4 gap-2 sm:gap-3 md:gap-4 group-hover:bg-black/50 duration-150">
            <div className="bg-biru-sedang p-1.5 sm:p-2 rounded-full">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base">Website</p>
              <p className="text-xs sm:text-sm break-all">ksmiotupnvj.my.id</p>
            </div>
          </div>
        </FadeIn>
      </a>
    </div>
  );
}
