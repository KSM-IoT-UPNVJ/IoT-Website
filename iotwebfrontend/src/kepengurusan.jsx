import Anggotakepengurusan from "./AnggotaKepengurusan"
import Footerkepengurusan from "./Footerkepengurusan"

function Kepengurusan() {
    return (
        <div className='h-dvh justify-items-center '>
            <p className='font-optima font-bold 
                            text-[50px] m-[65px] text-biru-tua'>Our Team</p>
            <Anggotakepengurusan />
            <Footerkepengurusan />
        </div>
    )
}

export default Kepengurusan