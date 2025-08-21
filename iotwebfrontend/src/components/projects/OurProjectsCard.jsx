import { useState } from "react";

export default function OurProjectsCard({ title, description, image }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className={`rounded-xl shadow-[0_2px_10px_rgba(0,0,0,1)] overflow-hidden flex flex-col md:w-full w-[430px] my-4 transition-all active:scale-90 duration-200 ease-in-out cursor-pointer ${
        showDescription ? "h-[800px]" : "h-auto"
      }`}
      onClick={() => setShowDescription((prev) => !prev)}
    >

      <div
        className="flex items-center justify-center w-full h-[340px] bg-[var(--color-abu-muda)] hover:brightness-50 duration-300"
      >
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

      <div className="bg-[var(--color-biru-muda)] p-3 flex flex-col flex-grow justify-between transition-all duration-500">
        <div>
          <h3
            className="font-bold text-[20px] text-center text-[var(--color-biru-tua)] my-6"
          >
            {title}
          </h3>

          {showDescription && (
            <p className="font-normal text-[20px] text-center text-[var(--color-biru-tua)] transition-opacity duration-300">
              {description.length > 340
                ? description.slice(0, 340).replace(/[\s.,:;!?]+$/, "") + "..."
                : description}
            </p>
          )}
        </div>


        {showDescription && (
          <div className="text-center justify-center">
            <a
              href="https://github.com/your-repo-here"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[var(--color-biru-sedang2)] hover:bg-[var(--color-kuning-tua)] cursor-pointer rounded-full w-[160px] h-[50px] mb-4 transition-all duration-300 ease-in-out">
                <p className="text-white text-[16px]">Learn More</p>
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
