import ImageSlider from "./anggota-engineer"
import ImageSliderBPH from "./anggota-bph"
import ImageSliderHRD from "./anggota-hrd"
import ImageSliderMedfo from "./anggota-medfo"

function Anggotakepengurusan() {

    return(
        <>
            <div className='relative flex w-full h-auto max-h-[270px] sm:max-h-[340px] md:max-h-[450px] lg:max-h-[510px] xl:max-h-[665px] duration-500 transition-all md:mb-[4rem] mb-[2rem] z-0 justify-center items-center'>
                <div className='absolute w-[90%] h-full bg-[rgba(0,0,0,0.3)] rounded-[25px] left-1/2 -translate-x-1/2'></div>
                <ImageSliderBPH />
            </div>
             <div className='relative flex w-full h-auto max-h-[270px] sm:max-h-[340px] md:max-h-[450px] lg:max-h-[510px] xl:max-h-[665px] duration-500 transition-all md:mb-[4rem] mb-[2rem] z-0 justify-center items-center'>
                <div className='absolute w-[90%] h-full bg-[rgba(0,0,0,0.3)] rounded-[25px] left-1/2 -translate-x-1/2'></div>
                <ImageSliderHRD />
            </div>
             <div className='relative flex w-full h-auto max-h-[300px] sm:max-h-[370px] md:max-h-[450px] lg:max-h-[510px] xl:max-h-[665px] duration-500 transition-all md:mb-[4rem] mb-[2rem] z-0 justify-center items-center'>
                <div className='absolute w-[90%] h-full bg-[rgba(0,0,0,0.3)] rounded-[25px] left-1/2 -translate-x-1/2'></div>
                <ImageSlider />
            </div>
             <div className='relative flex w-full h-auto max-h-[270px] sm:max-h-[340px] md:max-h-[450px] lg:max-h-[510px] xl:max-h-[665px] duration-500 transition-all md:mb-[4rem] mb-[2rem] z-0 justify-center items-center'>
                <div className='absolute w-[90%] h-full bg-[rgba(0,0,0,0.3)] rounded-[25px] left-1/2 -translate-x-1/2'></div>
                <ImageSliderMedfo />
            </div>
        </>
    )
}

export default Anggotakepengurusan