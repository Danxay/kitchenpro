import React from 'react';

interface ReviewCardProps {
  image: string;
  location: string;
  name: string;
  review: string;
  style: string;
  source: 'Google' | 'Yandex' | 'Instagram' | 'VK';
  sourceIcon: string;
  sourceUrl?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  image,
  location,
  name,
  review,
  style,
  source,
  sourceIcon,
  sourceUrl = '#',
}) => {
  return (
    <div className="snap-center shrink-0 w-full md:w-[600px] lg:w-[400px] bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-gray-800 flex flex-col overflow-hidden transition-transform hover:shadow-md">
      {/* Image */}
      <div className="relative h-64 w-full bg-gray-200 overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded flex items-center gap-1">
          <span className="material-symbols-outlined !text-sm">photo_camera</span>
          {location}
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-text-dark dark:text-white">{name}</h3>
            <div className="flex items-center gap-1 mt-1">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined !text-[20px] filled">star</span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-primary/10 px-2 py-1 rounded text-green-700 dark:text-green-400 text-xs font-bold flex items-center gap-1">
            <span className="material-symbols-outlined !text-sm">verified_user</span>
            Подтвержден
          </div>
        </div>
        <p className="text-text-secondary dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
          &quot;{review}&quot;
        </p>
        <div className="mt-auto pt-4 border-t border-border-light dark:border-gray-700 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">Стиль: {style}</span>
          <a
            className="text-xs font-bold text-text-dark dark:text-white hover:text-primary dark:hover:text-primary flex items-center gap-1 transition-colors"
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {source === 'Google' ? (
               <img alt="Google" className="w-4 h-4 object-contain" src={sourceIcon} />
            ) : (
               <span className={`material-symbols-outlined !text-base ${source === 'Yandex' ? 'text-red-500' : source === 'Instagram' ? 'text-pink-500' : 'text-blue-500'}`}>{sourceIcon}</span>
            )}
            Читать на {source}
            <span className="material-symbols-outlined !text-sm">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
};
