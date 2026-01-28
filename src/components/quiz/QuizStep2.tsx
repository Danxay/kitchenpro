import React from 'react';

interface QuizStep2Props {
  selectedMaterial: string | null;
  onSelectMaterial: (material: string) => void;
  onNext: () => void;
  onBack: () => void;
}

// SVG иконки материалов
const MaterialSVG = ({ type, isSelected }: { type: string; isSelected: boolean }) => {
  const color = isSelected ? '#22c55e' : '#9ca3af';
  const bgColor = isSelected ? '#dcfce7' : '#f3f4f6';

  const materials: Record<string, React.ReactNode> = {
    mdf: (
      <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
        <rect x="5" y="10" width="70" height="40" rx="2" fill={bgColor} stroke={color} strokeWidth="2" />
        <rect x="10" y="15" width="25" height="30" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="40" y="15" width="30" height="13" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <rect x="40" y="32" width="30" height="13" rx="1" fill="white" stroke={color} strokeWidth="1.5" />
        <circle cx="20" cy="25" r="3" fill={color} opacity="0.3" />
        <line x1="55" y1="21" x2="55" y2="21" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <line x1="55" y1="38" x2="55" y2="38" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    plastic: (
      <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
        <rect x="5" y="10" width="70" height="40" rx="4" fill={bgColor} stroke={color} strokeWidth="2" />
        <rect x="10" y="15" width="28" height="30" rx="3" fill="white" stroke={color} strokeWidth="1.5">
          <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="42" y="15" width="28" height="30" rx="3" fill="white" stroke={color} strokeWidth="1.5" />
        <path d="M22 25 L26 30 L22 35" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="56" cy="30" r="4" fill={color} opacity="0.3" />
      </svg>
    ),
    veneer: (
      <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
        <rect x="5" y="10" width="70" height="40" rx="2" fill={bgColor} stroke={color} strokeWidth="2" />
        {/* Wood grain pattern */}
        <path d="M12 15 Q20 20, 12 30 Q20 40, 12 45" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M25 15 Q33 25, 25 35 Q33 45, 25 50" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M38 15 Q46 22, 38 32 Q46 42, 38 48" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M51 15 Q59 20, 51 30 Q59 40, 51 45" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M64 15 Q72 25, 64 35 Q72 45, 64 50" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
        <rect x="10" y="20" width="30" height="20" rx="2" fill="white" stroke={color} strokeWidth="1.5" opacity="0.8" />
      </svg>
    ),
    stone: (
      <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
        <rect x="5" y="10" width="70" height="40" rx="2" fill={bgColor} stroke={color} strokeWidth="2" />
        {/* Stone texture dots */}
        <circle cx="15" cy="20" r="1.5" fill={color} opacity="0.3" />
        <circle cx="25" cy="35" r="2" fill={color} opacity="0.2" />
        <circle cx="40" cy="25" r="1" fill={color} opacity="0.4" />
        <circle cx="55" cy="40" r="1.5" fill={color} opacity="0.3" />
        <circle cx="65" cy="20" r="2" fill={color} opacity="0.2" />
        <circle cx="50" cy="15" r="1" fill={color} opacity="0.3" />
        <circle cx="30" cy="45" r="1.5" fill={color} opacity="0.2" />
        <circle cx="70" cy="35" r="1" fill={color} opacity="0.4" />
        {/* Countertop shape */}
        <rect x="15" y="25" width="50" height="15" rx="2" fill="white" stroke={color} strokeWidth="1.5" />
        <ellipse cx="40" cy="32" rx="12" ry="5" fill={color} opacity="0.2" />
      </svg>
    ),
  };

  return materials[type] || null;
};

const materials = [
  {
    id: 'mdf',
    label: 'МДФ эмаль',
    description: 'Гладкая поверхность, богатая палитра',
    price: 'от 120 000 ₽',
    popular: false
  },
  {
    id: 'plastic',
    label: 'Пластик HPL',
    description: 'Устойчив к царапинам и влаге',
    price: 'от 89 000 ₽',
    popular: true
  },
  {
    id: 'veneer',
    label: 'Шпон дерева',
    description: 'Натуральная текстура дуба или ясеня',
    price: 'от 180 000 ₽',
    popular: false
  },
  {
    id: 'stone',
    label: 'Акрил + камень',
    description: 'Премиум-сегмент, долговечность',
    price: 'от 250 000 ₽',
    popular: false
  },
];

export const QuizStep2: React.FC<QuizStep2Props> = ({ selectedMaterial, onSelectMaterial, onNext, onBack }) => {
  return (
    <div className="flex flex-col h-full p-6 md:p-10">
      {/* Progress Bar */}
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex justify-between items-center">
          <p className="text-text-dark text-sm font-medium">Шаг 2 из 3</p>
          <p className="text-primary font-bold text-sm">66%</p>
        </div>
        <div className="rounded-full bg-gray-200 h-2 w-full overflow-hidden">
          <div className="h-full rounded-full bg-primary transition-all duration-500 ease-out" style={{ width: '66%' }} />
        </div>
      </div>

      {/* Headline */}
      <div className="mb-6 text-center md:text-left">
        <h2 className="text-text-dark text-2xl md:text-3xl font-bold leading-tight mb-2">
          Выберите материал фасадов
        </h2>
        <p className="text-text-secondary text-sm md:text-base">
          Определим оптимальное сочетание качества и бюджета
        </p>
      </div>

      {/* Selection Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 flex-1">
        {materials.map((material) => (
          <label key={material.id} className="group cursor-pointer">
            <input
              className="peer sr-only"
              name="material"
              type="radio"
              value={material.id}
              checked={selectedMaterial === material.id}
              onChange={() => onSelectMaterial(material.id)}
            />
            <div className={`relative flex flex-col h-full rounded-xl border-2 p-3 md:p-4 transition-all duration-200
              ${selectedMaterial === material.id
                ? 'border-primary bg-primary/5 shadow-md shadow-primary/10'
                : 'border-gray-200 bg-white hover:border-primary/50 hover:bg-gray-50'
              }`}
            >
              {/* Popular Badge */}
              {material.popular && (
                <span className="absolute -top-2 -right-2 bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  Хит
                </span>
              )}

              {/* SVG Icon */}
              <div className="aspect-[4/3] w-full mb-3 rounded-lg overflow-hidden">
                <MaterialSVG type={material.id} isSelected={selectedMaterial === material.id} />
              </div>

              {/* Label */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm md:text-base font-bold text-text-dark">
                    {material.label}
                  </p>
                  <span className={`material-symbols-outlined text-primary !text-[20px] transition-all ${selectedMaterial === material.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}>
                    check_circle
                  </span>
                </div>
                <p className="text-xs text-text-secondary mb-2 hidden md:block">{material.description}</p>
                <p className="text-xs font-bold text-primary">{material.price}</p>
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Footer / Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <button
          onClick={onBack}
          className="flex items-center justify-center gap-1 text-text-secondary hover:text-text-dark px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined !text-[18px]">arrow_back</span>
          <span className="font-medium">Назад</span>
        </button>
        <button
          onClick={onNext}
          disabled={!selectedMaterial}
          className="flex items-center justify-center rounded-xl bg-primary hover:bg-green-400 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all text-text-dark text-base font-bold h-12 px-8 min-w-[140px] shadow-lg shadow-primary/20 disabled:shadow-none cursor-pointer active:scale-[0.98]"
        >
          <span>Далее</span>
          <span className="material-symbols-outlined ml-2 !text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
