import Form from './form';
import Map from './map';
import FadeIn from '../../utils/fadeIn';
import MediaCard from './mediaCard';

export default function Contact() {
  return (
    <div className="m-15">
      <div className="text-center my-10">
        <FadeIn delay={0.1} direction={'down'}>
          <h1 className="font-optima font-bold text-5xl my-10">Contact Us !</h1>
        </FadeIn>

        <FadeIn delay={0.3} direction={'up'}>
          <p className="text-xl max-w-5xl mx-auto">
            Have a question or want to collaborate with KSM IoT UPNVJ? We’d love
            to hear from you! Reach out through the form below or connect with
            us via email or social media. Let’s build the future of technology
            together.
          </p>
        </FadeIn>
      </div>

      <div>
        <div className="flex flex-col md:flex-row justify-around">
          <Form />
          <MediaCard />
        </div>
      </div>

      <Map />
    </div>
  );
}
