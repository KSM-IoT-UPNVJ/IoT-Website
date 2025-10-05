import Anggotakepengurusan from './Anggotakepengurusan';
import FadeIn from '../../utils/fadeIn';

function Kepengurusan() {
    useEffect(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }, []);
      
  return (
    <div className="relative overflow-x-hidden">
      <div className="relatve h-full w-full justify-items-center">
        <FadeIn delay={1.2} direction={'down'}>
          <p className="font-optima font-bold text-[30px] m-[35px] md:m-[65px] md:text-[50px] duration-1000 transition-all text-biru-tua select-none">
            Our Team
          </p>
        </FadeIn>
        <Anggotakepengurusan />
      </div>
    </div>
  );
}

export default Kepengurusan;
