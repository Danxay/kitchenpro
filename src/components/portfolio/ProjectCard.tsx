import React from 'react';

interface ProjectCardProps {
  image: string;
  price: string;
  duration: string;
  title: string;
  materials: string;
  style: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  price,
  duration,
  title,
  materials,
  style,
}) => {
  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-surface-dark shadow-md cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      />
      {/* Floating Badges */}
      <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
        <div className="flex items-center gap-1.5 rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-text-dark shadow-sm">
          <span className="material-symbols-outlined !text-[14px]">payments</span>
          {price}
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-text-dark dark:text-white shadow-sm">
          <span className="material-symbols-outlined !text-[14px]">schedule</span>
          {duration}
        </div>
      </div>
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6 z-10">
        <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="flex flex-col gap-1 mb-4">
            <p className="text-sm text-gray-200 flex items-center gap-2">
              <span className="material-symbols-outlined !text-[16px] text-primary">carpenter</span>
              <span className="opacity-90">{materials}</span>
            </p>
            <p className="text-sm text-gray-200 flex items-center gap-2">
              <span className="material-symbols-outlined !text-[16px] text-primary">palette</span>
              <span className="opacity-90">{style}</span>
            </p>
          </div>
          <button className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
            Смотреть проект <span className="material-symbols-outlined !text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
