import clsx from 'clsx';

function RotatingIcons({ link, icon1, icon2, alt = 'icon', className }) {
  return (
    <div
      onClick={() => window.open(link, '_blank')}
      className="relative w-[57px] h-[57px] group hover:cursor-pointer"
    >
      <div className={clsx("w-full h-full rounded-[10px] bg-[var(--color-biru-tua)] group-hover:rotate-90 group-hover:bg-white border-3 border-[var(--color-biru-tua)] transition-all duration-500 ease-in-out",
        className
      )}></div>

      <img
        src={icon1}
        alt={alt}
        className="w-[38px] h-[38px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-500 ease-in-out text-xs"
        draggable="false"
      />
      <img
        src={icon2}
        alt={alt}
        className="w-[38px] h-[38px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
        draggable="false"
      />
    </div>
  );
}

export default RotatingIcons;
