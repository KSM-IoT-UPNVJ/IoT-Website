export default function ProjectCard({ title, description, image }) {
  return (
    <div className="rounded-xl shadow-[0_2px_10px_rgba(0,0,0,1)] overflow-hidden flex flex-col md:w-full w-[430px] h-[800px] my-2">
      <div className="flex items-center justify-center w-full h-[340px]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-contain h-[100%] w-full text-[var(--color-biru-tua)]"
          />
        ) : (
          <h2 className="text-5xl font-extrabold text-[var(--color-biru-tua)]">
            GAMBAR
          </h2>
        )}
      </div>
      <div className="bg-[var(--color-biru-muda)] p-6 flex flex-col flex-grow justify-between">
        <div className="h-42">
          <h3 className="font-bold text-2xl text-center text-[var(--color-biru-tua)] mb-2">
            {title}
          </h3>
          <p className="h-30 text-xl text-center text-[var(--color-biru-tua)]">
            {description.length > 340
              ? description.slice(0, 340).replace(/[\s.,:;!?]+$/, "") + "..."
              : description}
          </p>
        </div>
        <div className="text-center">
          <button className="bg-[var(--color-biru-sedang)] hover:bg-[var(--color-biru-tua)] hover:cursor-pointer text-white py-2 px-4 rounded-full text-xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
