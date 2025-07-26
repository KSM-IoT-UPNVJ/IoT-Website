import { Phone, Mail, Globe } from 'lucide-react';
import Form from './components/contact/form';
import Map from './components/contact/map';

export function Contact() {
  const imageSrc = 'foto_upn.jpg';
  const cardImage =
    'relative h-21 rounded-2xl overflow-hidden group hover:-translate-y-1 hover:scale-105 duration-150';
  return (
    <div className="m-15">
      <div className="text-center my-10">
        <h1 className="font-optima font-bold text-5xl my-10">Contact Us !</h1>
        <p className="text-xl px-50">
          Have a question or want to collaborate with KSM IoT UPNVJ? We’d love
          to hear from you! Reach out through the form below or connect with us
          via email or social media. Let’s build the future of technology
          together.
        </p>
      </div>

      <div>
        <div className="flex justify-around ">
          <Form />
          <div className="flex flex-col gap-4 flex-2/5 p-10">
            <a href="tel:+62 813-1522-6318" className={cardImage}>
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
            </a>

            <a
              href="mailto: internetofthings.upnvj@gmail.com"
              className={cardImage}
            >
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
            </a>

            <a href="https://ksmiotupnvj.my.id/" className={cardImage}>
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
            </a>
          </div>
        </div>
      </div>

      <Map />
    </div>
  );
}
