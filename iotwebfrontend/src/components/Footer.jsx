function Footer() {
    return (
      <div className='flex flex-col' >
        <div className='flex w-screen pl-[100px] pr-[100px] pt-[100px] h-[700px] bg-gradient-to-b from-white to-biru-muda
                        justify-between'>
            <div className='pt-[80px] flex flex-col gap-[10px] w-[300px] h-[300px] items-end'>
                <a href="" className='z-10 font-optima font-[900] text-[35px]'>Contact Info</a>
                <a href="" className='z-10 font-optima font-[300] text-[20px]'>contact info</a>
                <a href="" className='z-10 font-optima font-[300] text-[20px]'>contact info</a>
                <a href="" className='z-10 font-optima font-[300] text-[20px]'>contact info</a>
            </div>
            <div className='flex flex-col w-[400px] h-[400px] items-center'>
                <img src="public/Logo_IoT.png" alt="Logo_IoT" className='w-[180px] h-[201px]'></img>
                <p className='font-optima text-[24px] font-[700]'>KSM Internet Of Things</p>
                <p className='font-optima text-[16px] font-[400] mb-[10px]'>UPN "Veteran" Jakarta</p>
                <img src="public/slogan.png" alt="Slogan" className='w-[368.5px] h-[77px]'></img>
                <div className='flex w-[400px] h-[100px] justify-center gap-[10px]'>
                    <a href="https://www.linkedin.com/company/ksmiotupnvj/" target="_blank" rel="noopener noreferrer">
                      <img src="public/Linkedin_Footer.png" alt="linkedin" className='w-[57px] h-[57px]'></img>
                    </a> 
                    <a href="https://www.instagram.com/iot.upnvj?igsh=MWlkazFmeXA0Ymhmbw==" target="_blank" rel="noopener noreferrer">
                      <img src="/Ig_Footer.png" alt="ig" className="w-[57px] h-[57px]" />
                    </a>
                </div>
            </div>
            <div className='pt-[80px] pr-[80px] flex flex-col gap-[10px] w-[300px] h-[300px] items-end'>
                <a href="" className='z-10 font-optima font-[900] text-[35px]'>Quick Links</a>
                <a href="" className='z-10 font-optima font-[300] text-[20px]'>Contact Us</a>
                <a href="" className='z-10 font-optima font-[300] text-[20px]'>About Us</a>
                <a href="" className='z-10 font-optima font-[300] text-[20px]'>Iot Insight</a>
                <a href="" className='z-10 font-optima font-[300] text-[20px]'>Article</a>
            </div>
        </div> 
        <div className="text-center text-sm md:text-base font-medium bg-biru-tua text-white py-4">
          <p>Copyright © 2025 – Kumkum, Fairly, And Azriel KSM IoT UPNVJ</p>
        </div>           
    </div>
        
    )
}
export default Footer;
