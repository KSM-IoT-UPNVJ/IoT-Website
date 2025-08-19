import { Phone, Mail, Globe } from 'lucide-react';
import FadeIn from '../../utils/fadeIn';

export default function MediaCard() {
  const imageSrc = 'foto_upn.jpg';
  const cardImage =
    'relative h-21 rounded-2xl overflow-hidden group hover:-translate-y-1 hover:scale-105 duration-150';

  return (
    <div className="flex flex-col gap-4 flex-2/7 p-10">
      <a href="tel:+62 813-1522-6318" className={cardImage}>
        <FadeIn delay={0.4} direction={'right'} className="w-full h-full">
          <img
            src={imageSrc}
            alt="Top"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 text-white backdrop-blur-[5px] bg-black/25 flex items-center px-4 gap-4 group-hover:bg-black/50 duration-150">
            <div className="bg-biru-sedang p-2 rounded-full duration-150">
              <Phone />
            </div>
            <div>
              <p className="font-bold duration-150">Phone</p>
              <p className="text-sm duration-150">+62 813-1552-6318</p>
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
          <div className="absolute inset-0 text-white bg-black/25 flex backdrop-blur-[5px] items-center px-4 gap-4 group-hover:bg-black/50 duration-150">
            <div className="bg-biru-sedang p-2 rounded-full">
              <Mail />
            </div>
            <div>
              <p className="font-bold">Email</p>
              <p className="text-sm break-all">
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
          <div className="absolute inset-0 text-white bg-black/25 backdrop-blur-[5px] flex items-center px-4 gap-4 group-hover:bg-black/50 duration-150">
            <div className="bg-biru-sedang p-2 rounded-full">
              <Globe />
            </div>
            <div>
              <p className="font-bold">Website</p>
              <p className="text-sm break-all">ksmiotupnvj.my.id</p>
            </div>
          </div>
        </FadeIn>
      </a>
    </div>
  );
}
