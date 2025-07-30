import ImageSlider from "./anggota-engineer"
import ImageSliderBPH from "./anggota-bph"
import ImageSliderHRD from "./anggota-hrd"
import ImageSliderMedfo from "./anggota-medfo"

function Anggotakepengurusan() {

    return(
        <>
            <div className='flex w-full h-[655px] bg-gradient-to-b from-[rgba(0,0,0,0.3)] via-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.3)] mb-[4rem] z-0 justify-between items-center overflow-hidden'>
                <ImageSliderBPH />
            </div>
            <div className='flex w-full h-[655px] bg-[rgba(0,0,0,0.3)] mb-[4rem] overflow-hidden items-center'>
                <ImageSliderHRD />
            </div>
            <div className='flex w-full h-[655px] bg-[rgba(0,0,0,0.3)] mb-[4rem] overflow-hidden items-center'>
                <ImageSlider />
            </div>
            <div className='flex w-full h-[655px] bg-[rgba(0,0,0,0.3)] mb-[4rem] overflow-hidden items-center'>
                <ImageSliderMedfo />
            </div>
        </>
    )
}

export default Anggotakepengurusan