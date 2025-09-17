
export default function PhotoSlider({
  duration = 10,
  images
}) {
  const all = [...images, ...images]; // duplicate for seamless loop

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex w-max"
        style={{
          animation: `scrollRight ${duration}s linear infinite`,
        }}
      >
        {all.map((src, i) => (
          <div key={i} className="flex-shrink-0 p-2">
            <img
              src={src}
              alt={`photo-${i}`}
              className="w-56 h-40 object-cover rounded-2xl shadow-md"
            />
          </div>
        ))}
      </div>

      <style>{`
@keyframes scrollRight {
0% { transform: translateX(-50%); }
100% { transform: translateX(0%); }
}
`}</style>
    </div>
  );
}
