import Anggotakepengurusan from "./AnggotaKepengurusan"
import Footer from "./Footerkepengurusan"

function Kepengurusan() {
    return (
        <div className='h-dvh w-full justify-items-center '>
            <p className='font-optima font-bold 
                            text-[50px] m-[65px] text-biru-tua'>Our Team</p>
            <Anggotakepengurusan />
            <Footer />
        </div>
    )
}

export default Kepengurusan