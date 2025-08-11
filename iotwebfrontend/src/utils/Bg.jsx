import './bg.css';

function Bg () {
    return (
        <div className='absolute h-full w-full flex flex-col items-center justify-evenly overflow-hidden z-[-2]'>
            <img src="src/public/BgKepengurusan.webp" alt="bg" className='w-full h-auto animate-bgKepengurusan mix-blend-multiply scale-[2] md:scale-[1.75] lg:scale-[1.5] xl:scale-[1.25] 2xl:scale-[1]'></img>
            <img src="src/public/BgKepengurusan.webp" alt="bg" className='w-full h-auto mix-blend-multiply animate-bgKepengurusan'></img>
        </div>
    )
}

export default Bg