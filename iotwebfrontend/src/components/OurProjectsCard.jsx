export default function OurProjectsCard({ title, description, image }) {
  return (
    <div className="rounded-xl shadow-[0_2px_10px_rgba(0,0,0,1)] overflow-hidden flex flex-col md:w-full w-[430px] h-[800px] my-2">
      <div className="flex items-center justify-center w-full h-[340px] bg-[var(--color-abu-muda)] hover:brightness-50 hover:cursor-pointer transition duration-300">
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-cover h-full w-full text-[var(--color-biru-tua)]"
          />
        ) : (
          <h2 className="text-5xl font-extrabold text-[var(--color-biru-tua)]">
            GAMBAR
          </h2>
        )}
      </div>
      <div className="bg-[var(--color-biru-muda)] p-3 flex flex-col flex-grow justify-between">
        <div className="h-42">
          <h3 className="font-bold text-[20px] text-center text-[var(--color-biru-tua)] my-6">
            {title}
          </h3>
          <p className="font-normal h-30 text-[20px] text-center text-[var(--color-biru-tua)]">
            {description.length > 340
              ? description.slice(0, 340).replace(/[\s.,:;!?]+$/, "") + "..."
              : description}
          </p>
        </div>
        <div className="text-center justify-center">
          <button className="bg-[var(--color-biru-sedang2)] hover:bg-[var(--color-kuning-tua)] hover:cursor-pointer rounded-full w-[160px] h-[50px] mb-4 transition-all duration-300 ease-in-out">
            <p className="text-white text-[16px]">Learn More</p>
          </button>
        </div>
      </div>
    </div>
  );
}
