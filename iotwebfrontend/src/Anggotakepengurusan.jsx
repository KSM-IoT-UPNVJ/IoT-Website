import ImageSlider from "./anggota-engineer"
import ImageSliderBPH from "./anggota-bph"

function Anggotakepengurusan() {

    return(
        <>
            <div className='flex w-full h-[655px] bg-[rgba(0,0,0,0.3)] mb-[4rem] z-0 justify-between items-center overflow-hidden'>
                <ImageSliderBPH />
            </div>
            <div className='flex w-full h-[655px] bg-[rgba(0,0,0,0.3)] mb-[4rem] overflow-hidden items-center'>
                <ImageSlider />
            </div>
            <div className='flex w-full h-[655px] bg-[rgba(0,0,0,0.3)] mb-[4rem] justify-evenly items-center '>
                <div className='perspective-[825px] origin-left overflow-hidden'>
                    <a href="https://www.instagram.com/p/DMNEqw_Rkwu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                    className='overflow-hidden flex flex-col w-[472px] h-[615px] py-[60px] z-10 justify-between items-center perspective-distant rotate-y-[15deg] transform-gpu origin-right duration-[1s] ease-in-out scale-x-[0.8] scale-y-[0.8]'>
                        <img src="src/public/hrd.webp" alt="hrd" className="w-full h-full rounded-[15px]"></img>   
                    </a>
                </div>
                <div className='perspective-[825px] origin-right overflow-hidden'>
                    <a href="https://www.instagram.com/p/DMNEOzGxpno/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                    className='overflow-hidden flex flex-col w-[472px] h-[615px] py-[60px] z-10 justify-between items-center perspective-distant rotate-y-[-15deg] transform-gpu origin-left duration-[1s] ease-in-out scale-x-[0.8] scale-y-[0.8]'>
                        <img src="src/public/akademik.webp" alt="akademik" className="w-full h-full rounded-[15px]"></img>   
                    </a>
                </div>
            </div>
            <div className='flex w-full h-[655px] bg-[rgba(0,0,0,0.3)] mb-[4rem] justify-between items-center'>
                <div className='perspective-[825px] origin-left scale-x-[0.9] overflow-hidden'>
                    <a href="https://www.instagram.com/p/DMM_1IpxBPU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                    className='overflow-hidden flex flex-col w-[472px] h-[615px] py-[60px] rounded-[15px] z-10 justify-between items-center perspective-distant rotate-y-[30deg] transform-gpu origin-right duration-[1s] ease-in-out scale-x-[0.8] scale-y-[0.8]'>
                        <img src="src/public/humas.webp" alt="humas" className="w-full h-full rounded-[15px]"></img>   
                    </a>
                </div>
                <a href="https://www.instagram.com/p/DMNAZGpxtCN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                className='relative w-[472px] h-[515px] bg-biru-muda rounded-[15px]  z-10 overflow-hidden'>
                    <img src="src/public/medfo.webp" alt="medfo" className="w-full h-full"></img>   
                </a>
                <div className='perspective-[825px] origin-right scale-x-[0.9] overflow-hidden'>
                    <a href="https://www.instagram.com/p/DMNB-72R3MD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                    className='overflow-hidden flex flex-col w-[472px] h-[615px] py-[60px] z-10 justify-between items-center perspective-distant rotate-y-[-30deg] transform-gpu origin-left duration-[1s] ease-in-out scale-x-[0.8] scale-y-[0.8]'>
                        <img src="src/public/Medkraf.webp" alt="medkraf" className="w-full h-full rounded-[15px]"></img>   
                    </a>
                </div>
            </div>
        </>
    )
}

export default Anggotakepengurusan