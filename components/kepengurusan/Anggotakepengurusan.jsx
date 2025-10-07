'use client';

import ImageSlider from './anggota-engineer';
import ImageSliderBPH from './anggota-bph';
import ImageSliderHRD from './anggota-hrd';
import ImageSliderMedfo from './anggota-medfo';

function Anggotakepengurusan() {
  return (
    <>
      <div className="relative flex w-full h-auto max-h-[665px] duration-500 transition-all md:my-[4rem] my-[2rem] z-0 justify-center items-center">
        <div className=" w-[90%] h-full bg-[rgba(0,0,0,0.3)] rounded-[25px] overflow-visible">
          <ImageSliderBPH />
        </div>
      </div>
      <div className="relative flex w-full h-auto max-h-[665px] duration-500 transition-all md:mb-[4rem] mb-[2rem] z-0 justify-center items-center">
        <div className="w-[90%] h-full bg-[rgba(0,0,0,0.3)] rounded-[25px] overflow-visible">
          <ImageSliderHRD />
        </div>
      </div>
      <div className="relative flex w-full h-auto max-h-[665px] duration-500 transition-all md:mb-[4rem] mb-[2rem] z-0 justify-center items-center">
        <div className="w-[90%] h-full bg-[rgba(0,0,0,0.3)] rounded-[25px] overflow-visible">
          <ImageSlider />
        </div>
      </div>
      <div className="relative flex w-full h-auto max-h-[665px] duration-500 transition-all md:mb-[4rem] mb-[2rem] z-0 justify-center items-center">
        <div className="w-[90%] h-full bg-[rgba(0,0,0,0.3)] rounded-[25px] overflow-visible">
          <ImageSliderMedfo />
        </div>
      </div>
    </>
  );
}

export default Anggotakepengurusan;
