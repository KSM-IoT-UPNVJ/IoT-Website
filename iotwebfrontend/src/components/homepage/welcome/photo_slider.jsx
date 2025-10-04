export default function PhotoSlider({ images, direction }) {
  const all = [...images, ...images]; // duplicate for seamless loop

  return (
    <div
      className={`flex h-[18vh] sm:h-[20vh] md:h-1/4 -z-10 w-max ${direction}`}
    >
      {all.map((photo, index) => (
        <div key={index} className="p-1.5">
          <img
            src={photo}
            alt={`photo-${index}`}
            className="w-[220px] sm:w-[260px] md:w-70 h-full object-cover rounded-2xl"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
