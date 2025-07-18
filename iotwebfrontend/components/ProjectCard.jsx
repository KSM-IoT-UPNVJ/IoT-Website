function ProjectCard({ title, description, image }) {
  return (
    <div className="rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col bg-white w-full">
      <div className="bg-gray-100 flex items-center justify-center h-48">
        {image ? (
          <img src={image} alt={title} className="object-contain h-full" />
        ) : (
          <h2 className="text-2xl font-extrabold text-gray-700">GAMBAR</h2>
        )}
      </div>
      <div className="bg-sky-200 p-6 flex flex-col flex-grow justify-between">
        <div className="h-42">
          <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
          <p className="h-30 text-sm text-gray-800">
            {description.length > 160
              ? description.slice(0, 159).replace(/[\s.,:;!?]+$/, "") + "..."
              : description}
          </p>
        </div>
        <div className="mt-6">
          <button className="bg-indigo-800 hover:bg-indigo-900 text-white py-2 px-4 rounded-full text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
