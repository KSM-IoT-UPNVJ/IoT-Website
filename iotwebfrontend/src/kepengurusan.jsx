import Anggotakepengurusan from "./AnggotaKepengurusan"
import Footerkepengurusan from "./Footerkepengurusan"

function Kepengurusan() {
    return (
        <div className='h-dvh justify-items-center '>
            <p className='font-optima font-[600] 
                            text-[50px]'>Our Team</p>
            <Anggotakepengurusan />
            <Footerkepengurusan />
        </div>
    )
}

export default Kepengurusan