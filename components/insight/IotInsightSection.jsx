import iotInsightData from './iotInsightData';
import IotInsightCarousel from './IotInsightCarousel';
import IotInsightCard from './IotInsightCard';
import IotInsightDesc from './IotInsightDesc';

export default function IotInsightSection({ division, carouselReverse }) {
  const divisionData = iotInsightData[division + '-slide'];

  return (
    <>
      <div
        id={division.toLowerCase().replace('/', '-')}
        className={`flex flex-col-reverse mx-8 md:mx-15 py-5 my-10 bg-black/10 backdrop-blur-2xl shadow-lg rounded-4xl overflow-hidden select-none ${
          carouselReverse ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        <div className="flex flex-col w-auto md:max-w-[45%] mx-2 px-3 pt-2 pb-6">
          <h1 className="font-extrabold md:text-3xl xl:text-5xl overflow-hidden text-[var(--color-biru-tua2)] mt-3">
            {division.toUpperCase()}
          </h1>
          <h2 className="font-bold md:text-2xl xl:text-4xl overflow-hidden lg:mb-8 mb-3">
            Division
          </h2>

          <IotInsightDesc division2={division} />
        </div>

        <div className="mx-2 overflow-hidden flex justify-center my-auto">
          <IotInsightCarousel reverse={carouselReverse}>
            {Array.isArray(divisionData) &&
              divisionData.map((card, i) => (
                <IotInsightCard key={i} {...card} />
              ))}
          </IotInsightCarousel>
        </div>
      </div>
    </>
  );
}
