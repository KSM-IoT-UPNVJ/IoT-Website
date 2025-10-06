import Form from './form/ContactForm';
import Map from './map';
import FadeIn from '../../utils/fadeIn';
import MediaCard from './mediaCard';

import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }, []);

  return (
    <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-15">
      <div className="text-center my-6 sm:my-8 md:my-10">
        <FadeIn delay={0.1} direction={'down'}>
          <h1 className="font-optima font-bold text-3xl sm:text-4xl md:text-5xl my-6 sm:my-8 md:my-10">
            Contact Us !
          </h1>
        </FadeIn>

        <FadeIn delay={0.3} direction={'up'}>
          <p className="text-base sm:text-lg md:text-xl max-w-5xl mx-auto px-4">
            Have a question or want to collaborate with KSM IoT UPNVJ? We'd love
            to hear from you! Reach out through the form below or connect with
            us via email or social media. Let's build the future of technology
            together.
          </p>
        </FadeIn>
      </div>

      <div className="mb-8 sm:mb-10 md:mb-12">
        <div className="flex flex-col lg:flex-row justify-around gap-6 lg:gap-8">
          <Form />
          <MediaCard />
        </div>
      </div>

      <Map />
    </div>
  );
}
