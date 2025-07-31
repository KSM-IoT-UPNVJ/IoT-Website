import ImageSlider from "./anggota-engineer"
import ImageSliderBPH from "./anggota-bph"
import ImageSliderHRD from "./anggota-hrd"
import ImageSliderMedfo from "./anggota-medfo"

function Anggotakepengurusan() {

    return(
        <>
            <div className='relative flex w-full h-[655px] mb-[4rem] z-0 justify-center items-center'>
                <div className='absolute w-[90%] h-full bg-[rgba(0,0,0,0.3)] rounded-[25px] left-1/2 -translate-x-1/2'></div>
                <ImageSliderBPH />
            </div>
             <div className='relative flex w-full h-[655px] mb-[4rem] z-0 justify-center items-center'>
                <div className='absolute w-[90%] h-full bg-[rgba(0,0,0,0.3)] rounded-[25px] left-1/2 -translate-x-1/2'></div>
                <ImageSliderHRD />
            </div>
             <div className='relative flex w-full h-[655px] mb-[4rem] z-0 justify-center items-center'>
                <div className='absolute w-[90%] h-full bg-[rgba(0,0,0,0.3)] rounded-[25px] left-1/2 -translate-x-1/2'></div>
                <ImageSlider />
            </div>
             <div className='relative flex w-full h-[655px] mb-[4rem] z-0 justify-center items-center'>
                <div className='absolute w-[90%] h-full bg-[rgba(0,0,0,0.3)] rounded-[25px] left-1/2 -translate-x-1/2'></div>
                <ImageSliderMedfo />
            </div>
        </>
    )
}

export default Anggotakepengurusan