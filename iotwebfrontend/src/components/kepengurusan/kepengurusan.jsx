import Anggotakepengurusan from "./Anggotakepengurusan"
import Footer from "./Footerkepengurusan"
import BgKepengurusan from "./Bg-kepengurusan"

function Kepengurusan() {
    return (
        <div className='relative overflow-x-hidden'>
            <BgKepengurusan />
            <div className='relatve h-full w-full justify-items-center'>
                <p className='font-optima font-bold 
                                text-[50px] m-[65px] text-biru-tua'>Our Team</p>
                <Anggotakepengurusan />
                <Footer />
            </div>
        </div>
    )
}

export default Kepengurusan