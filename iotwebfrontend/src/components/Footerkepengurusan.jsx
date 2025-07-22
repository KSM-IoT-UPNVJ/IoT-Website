function Footerkepengurusan() {
  return (
    <div
      className="flex w-full pl-[100px] pr-[100px] pt-[100px] h-[700px] bg-gradient-to-b from-white via-biru-footer-kepengurusan to-biru-muda
                        justify-between"
    >
      <div className="pt-[80px] flex flex-col gap-[10px] w-[300px] h-[300px] items-end ">
        <a
          href=""
          className="z-10 font-optima font-[900] text-[35px] text-biru-tua"
        >
          Contact Info
        </a>
        <a
          href=""
          className="z-10 font-optima font-[300] text-[20px] text-biru-tua"
        >
          contact info
        </a>
        <a
          href=""
          className="z-10 font-optima font-[300] text-[20px] text-biru-tua"
        >
          contact info
        </a>
        <a
          href=""
          className="z-10 font-optima font-[300] text-[20px] text-biru-tua"
        >
          contact info
        </a>
      </div>
      <div className="flex flex-col w-[400px] h-[400px] items-center">
        <img
          src="public/Logo_IoT.png"
          alt="Logo_IoT"
          className="w-[180px] h-[201px]"
        ></img>
        <p className="font-titillium text-[24px] font-[700]">
          KSM Internet Of Things
        </p>
        <p className="font-titillium text-[16px] font-[400] mb-[10px]">
          UPN "Veteran" Jakarta
        </p>
        <img
          src="public/slogan.png"
          alt="Slogan"
          className="w-[368.5px] h-[77px]"
        ></img>
        <div className="flex w-[400px] h-[100px] justify-center gap-[40px]">
          <div
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/ksmiotupnvj/posts/?feedView=all",
                "_blank"
              )
            }
            className="relative w-[57px] h-[57px] group hover:cursor-pointer"
          >
            <div className="w-full h-full rounded-[10px] bg-[var(--color-biru-tua))] group-hover:bg-white border-3 border-[var(--color-biru-tua))] transition-all duration-500 ease-in-out group-hover:rotate-45"></div>
            <img
              src="public/linkedin_footer1.png"
              alt="linkedin"
              className="w-[38px] h-[38px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-500 ease-in-out"
            />
            <img
              src="public/linkedin_footer2.png"
              alt="linkedin"
              className="w-[38px] h-[38px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
            />
          </div>
          <div
            onClick={() => window.open("https://github.com/IoTUPNVJ", "_blank")}
            className="relative w-[57px] h-[57px] group hover:cursor-pointer"
          >
            <div className="w-full h-full rounded-[10px] bg-[var(--color-biru-tua))] group-hover:bg-white border-3 border-[var(--color-biru-tua))] transition-all duration-500 ease-in-out"></div>
            <img
              src="public/github_footer.png"
              alt="linkedin"
              className="w-[38px] h-[38px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-500 ease-in-out invert"
            />
            <img
              src="public/github_footer.png"
              alt="linkedin"
              className="w-[38px] h-[38px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
            />
          </div>
          <div
            onClick={() =>
              window.open("https://www.instagram.com/iot.upnvj/", "_blank")
            }
            className="relative w-[57px] h-[57px] group hover:cursor-pointer"
          >
            <div className="w-full h-full rounded-[10px] bg-[var(--color-biru-tua))] group-hover:bg-white border-3 border-[var(--color-biru-tua))] transition-all duration-500 ease-in-out group-hover:-rotate-45"></div>
            <img
              src="public/ig_footer1.png"
              alt="linkedin"
              className="w-[38px] h-[38px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-500 ease-in-out"
            />
            <img
              src="public/ig_footer2.png"
              alt="linkedin"
              className="w-[38px] h-[38px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="pt-[80px] pr-[80px] flex flex-col gap-[10px] w-[300px] h-[300px] items-end">
        <a
          href=""
          className="z-10 font-optima font-[900] text-[35px] text-biru-tua"
        >
          Quick Links
        </a>
        <a
          href=""
          className="z-10 font-optima font-normal text-[20px] text-biru-tua"
        >
          Contact Us
        </a>
        <a
          href=""
          className="z-10 font-optima font-[300] text-[20px] text-biru-tua"
        >
          About Us
        </a>
        <a
          href=""
          className="z-10 font-optima font-[300] text-[20px] text-biru-tua"
        >
          Iot Insight
        </a>
        <a
          href=""
          className="z-10 font-optima font-[300] text-[20px] text-biru-tua"
        >
          Article
        </a>
      </div>
    </div>
  );
}

export default Footerkepengurusan;
