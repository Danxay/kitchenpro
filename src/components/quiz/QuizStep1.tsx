import React from 'react';

interface QuizStep1Props {
  selectedShape: string | null;
  onSelectShape: (shape: string) => void;
  onNext: () => void;
}

// SVG иконки форм кухни
const KitchenShapeSVG = ({ type, isSelected }: { type: string; isSelected: boolean }) => {
  const color = isSelected ? '#22c55e' : '#9ca3af';
  const bgColor = isSelected ? '#dcfce7' : '#f3f4f6';

  const shapes: Record<string, React.ReactNode> = {
    straight: (
      <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
        <rect x="5" y="25" width="70" height="30" rx="3" fill={bgColor} stroke={color} strokeWidth="2" />
        <rect x="10" y="30" width="12" height="20" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="25" y="30" width="12" height="20" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="40" y="30" width="12" height="20" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="55" y="30" width="15" height="20" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <circle cx="60" cy="40" r="4" fill={color} opacity="0.5" />
      </svg>
    ),
    'l-shaped': (
      <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
        <path d="M5 15h45v40H5V15z M50 35h25v20H50V35z" fill={bgColor} stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <rect x="10" y="20" width="10" height="12" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="23" y="20" width="10" height="12" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="10" y="38" width="10" height="12" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="23" y="38" width="10" height="12" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="55" y="40" width="12" height="10" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <circle cx="38" cy="26" r="3" fill={color} opacity="0.5" />
      </svg>
    ),
    'u-shaped': (
      <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
        <path d="M5 10h20v45H5V10z M25 35h30v20H25V35z M55 10h20v45H55V10z" fill={bgColor} stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <rect x="8" y="15" width="14" height="10" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="8" y="30" width="14" height="10" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="58" y="15" width="14" height="10" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="58" y="30" width="14" height="10" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="32" y="40" width="16" height="10" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <circle cx="40" cy="45" r="3" fill={color} opacity="0.5" />
      </svg>
    ),
    island: (
      <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
        <rect x="5" y="5" width="70" height="20" rx="3" fill={bgColor} stroke={color} strokeWidth="2" />
        <rect x="25" y="35" width="30" height="20" rx="3" fill={bgColor} stroke={color} strokeWidth="2" strokeDasharray="4 2" />
        <rect x="10" y="10" width="15" height="10" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="30" y="10" width="15" height="10" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="50" y="10" width="20" height="10" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <circle cx="55" cy="15" r="3" fill={color} opacity="0.5" />
        <rect x="32" y="42" width="16" height="8" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
      </svg>
    ),
  };

  return shapes[type] || null;
};

const shapes = [
  { id: 'straight', label: 'Прямая', description: 'Классика для небольших пространств' },
  { id: 'l-shaped', label: 'Г-образная', description: 'Оптимальное использование угла' },
  { id: 'u-shaped', label: 'П-образная', description: 'Максимум рабочей поверхности' },
  { id: 'island', label: 'С островом', description: 'Для просторных кухонь' },
];

export const QuizStep1: React.FC<QuizStep1Props> = ({ selectedShape, onSelectShape, onNext }) => {
  return (
    <div className="flex flex-col h-full p-6 md:p-10">
      {/* Progress Bar */}
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex justify-between items-center">
          <p className="text-text-dark text-sm font-medium">Шаг 1 из 3</p>
          <p className="text-primary font-bold text-sm">33%</p>
        </div>
        <div className="rounded-full bg-gray-200 h-2 w-full overflow-hidden">
          <div className="h-full rounded-full bg-primary transition-all duration-500 ease-out" style={{ width: '33%' }} />
        </div>
      </div>

      {/* Headline */}
      <div className="mb-6 text-center md:text-left">
        <h2 className="text-text-dark text-2xl md:text-3xl font-bold leading-tight mb-2">
          Выберите форму кухни
        </h2>
        <p className="text-text-secondary text-sm md:text-base">
          Подберём идеальную планировку под ваше пространство
        </p>
      </div>

      {/* Selection Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 flex-1">
        {shapes.map((shape) => (
          <label key={shape.id} className="group cursor-pointer">
            <input
              className="peer sr-only"
              name="kitchen_shape"
              type="radio"
              value={shape.id}
              checked={selectedShape === shape.id}
              onChange={() => onSelectShape(shape.id)}
            />
            <div className={`flex flex-col h-full rounded-xl border-2 p-3 md:p-4 transition-all duration-200
              ${selectedShape === shape.id
                ? 'border-primary bg-primary/5 shadow-md shadow-primary/10'
                : 'border-gray-200 bg-white hover:border-primary/50 hover:bg-gray-50'
              }`}
            >
              {/* SVG Icon */}
              <div className="aspect-[4/3] w-full mb-3 rounded-lg overflow-hidden">
                <KitchenShapeSVG type={shape.id} isSelected={selectedShape === shape.id} />
              </div>

              {/* Label */}
              <div className="mt-auto">
                <div className="flex items-center justify-between">
                  <p className={`text-sm md:text-base font-bold ${selectedShape === shape.id ? 'text-text-dark' : 'text-text-dark'}`}>
                    {shape.label}
                  </p>
                  <span className={`material-symbols-outlined text-primary !text-[20px] transition-all ${selectedShape === shape.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}>
                    check_circle
                  </span>
                </div>
                <p className="text-xs text-text-secondary mt-0.5 hidden md:block">{shape.description}</p>
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Footer / Navigation */}
      <div className="flex items-center justify-end pt-4 border-t border-gray-100">
        <button
          onClick={onNext}
          disabled={!selectedShape}
          className="flex items-center justify-center rounded-xl bg-primary hover:bg-green-400 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all text-text-dark text-base font-bold h-12 px-8 min-w-[140px] shadow-lg shadow-primary/20 disabled:shadow-none cursor-pointer active:scale-[0.98]"
        >
          <span>Далее</span>
          <span className="material-symbols-outlined ml-2 !text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
