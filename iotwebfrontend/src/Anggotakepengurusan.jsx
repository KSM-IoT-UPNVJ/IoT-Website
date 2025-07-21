function Anggotakepengurusan() {
    return(
        <>
            <div className='flex w-full h-[655px] bg-[rgba(0,0,0,0.3)] mb-[4rem] z-0 justify-between items-center'>
                <div className='absolute w-[100%] p-[20px] h-[100%] flex justify-between items-center'>
                    <a href="" className=''>
                        <img src="public/Chevron_left.png" alt="tombolKiri" className=''></img>
                    </a>
                    <a href="" className=''>
                        <img src="public/Chevron_right.png" alt="tombolkanan" className=''></img>
                    </a>
                </div>
                <div className='perspective-[825px] origin-left scale-x-[0.9] overflow-hidden'>
                    <div className='flex flex-col w-[472px] h-[515px] bg-abu-muda rounded-[15px] z-10 justify-between items-center perspective-distant rotate-y-[45deg] transform-gpu origin-right duration-[1s] ease-in-out scale-x-[0.9] scale-y-[0.60]'>

                    </div>   
                </div>
                <div className='relative w-[472px] h-[515px] bg-biru-muda rounded-[15px] z-10 overflow-hidden'>
                    <div className='absolute w-[100%] h-[100%] justify-between items-center flex flex-col pr-[180px] '>
                        <div className='w-[72px] h-[100px] bg-abu-muda opacity-100 z-20'></div>
                        <div className='w-[72px] h-[100px] bg-abu-muda opacity-100 z-20'></div>
                    </div>   
                </div>
                <div className='perspective-[825px] origin-right scale-x-[0.9]'>
                    <div className='flex flex-col w-[472px] h-[515px] bg-biru-sedang rounded-[15px] z-10 justify-between items-center perspective-distant rotate-y-[-45deg] transform-gpu origin-left duration-[1s] ease-in-out scale-x-[0.9] scale-y-[0.60]'></div>   
                </div> 
            </div>
            <div className='w-full h-[65px] bg-[rgba(0,0,0,0.3)] mb-[4rem]'>2</div>
            <div className='w-full h-[65px] bg-[rgba(0,0,0,0.3)] mb-[4rem]'>3</div>
            <div className='w-full h-[65px] bg-[rgba(0,0,0,0.3)] mb-[4rem]'>4</div>
            <div className='w-full h-[65px] bg-[rgba(0,0,0,0.3)] mb-[4rem]'>5</div>
        </>
    )
}

export default Anggotakepengurusan