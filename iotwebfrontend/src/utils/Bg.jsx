import './Bg.css';

function Bg() {
  return (
    <div className="absolute h-full w-full flex flex-col items-center justify-evenly overflow-hidden z-[-1] ">
      <img
        src="public/kepengurusan/BgKepengurusan.webp"
        alt="bg"
        className="w-full h-auto animate-bgKepengurusan mix-blend-multiply mb-[200px] md:mb-[250px] lg:mb-[300px] xl:mb-[350px] 2xl:mb-[400px] scale-[1.4] md:scale-[1.3] lg:scale-[1.2] xl:scale-[1.1] 2xl:scale-[1]"
      ></img>
      <img
        src="public/kepengurusan/BgKepengurusan.webp"
        alt="bg"
        className="w-full h-auto mix-blend-multiply animate-bgKepengurusan scale-[1.4] md:scale-[1.3] lg:scale-[1.2] xl:scale-[1.1] 2xl:scale-[1]"
      ></img>
    </div>
  );
}

export default Bg;
