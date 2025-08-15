import Anggotakepengurusan from "./Anggotakepengurusan"
import Bg from "../../utils/Bg"
import Footer from "../footer"
import FadeIn from "../../utils/fadeIn"

function Kepengurusan() {
    return (
        <div className='relative overflow-x-hidden'>
            <Bg />
            <div className='relatve h-full w-full justify-items-center'>
                <FadeIn delay={1.6} direction={'down'}>
                    <p className='font-optima font-bold text-[30px] m-[35px] md:m-[65px] md:text-[50px] duration-1000 transition-all text-biru-tua'>Our Team</p>
                </FadeIn>
                <Anggotakepengurusan />
                <Footer />
            </div>
        </div>
    )
}

export default Kepengurusan