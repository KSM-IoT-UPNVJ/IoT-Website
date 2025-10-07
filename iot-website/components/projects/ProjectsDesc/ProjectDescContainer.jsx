import FadeIn from '../../../utils/fadeIn';

export default function ProjectDescContainer({
  title,
  description,
  division,
  date,
  divisionImage,
  image,
}) {
  return (
    <>
      <div className="flex flex-col mx-8 md:mx-15 overflow-hidden select-none">
        <h1 className="font-optima font-extrabold text-center text-biru-tua text-4xl mx-auto mt-10 mb-5 select-none">
          <FadeIn direction={'right'} delay={0.8}>
            {title}
          </FadeIn>
        </h1>
        <div className="flex flex-col gap-8 items-center max-w-200 h-full mx-auto bg-black/20 backdrop-blur-2xl shadow-lg rounded-4xl p-6">
          <div className="flex flex-row items-center w-full">
            <div>
              {divisionImage && (
                <img
                  src={divisionImage}
                  alt=""
                  className="w-20 aspect-square object-fill rounded-[50%]"
                  draggable="false"
                />
              )}
            </div>
            <div className="flex w-full flex-col justify-center">
              <h3 className="text-biru-tua font-extrabold ml-5">{division}</h3>
              <p className="text-biru-tua font-bold ml-5">{date}</p>
            </div>
          </div>
          {image && (
            <img
              src={image}
              alt=""
              className="w-full max-h-130 object-contain"
              draggable="false"
            />
          )}
          <div className="text-biru-tua text-base text-justify py-2 w-full whitespace-pre-line">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
