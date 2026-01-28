import React from 'react';

interface QuizStep2Props {
  selectedMaterial: string | null;
  onSelectMaterial: (material: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const materials = [
  {
    id: 'plastic',
    label: 'Пластик',
    description: 'Прочный и современный',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlUk4gIBW0AEWpzzV5KvMb8LCatxnVt96Hxb6MNkuVS-t4p_wEf1Hj8la8DPzF4O_9PtUA42-EMv3D8USGDh1wu59yRx8-bmNY2N1CfjIoJrMhb1cUkd0nzzhkgz1atACRupE6Zo4aEgbRe5EIdzMweQJQACda3GXJ-zNcAdeAzeFIgw7nTJ9yjei-LZGurA-_lDIgYHeqZgKqX2j6GJI3ubpkHa7LSuDn4MhXgkuiTce9Po2_FqZF2NIgOUEZzR5pTZMfZAz0aZU',
  },
  {
    id: 'mdf',
    label: 'МДФ Эмаль',
    description: 'Гладкий, любой цвет',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNbu7C6maTClI3ByJfjojB53wbZXgUeeCDLkE0zsTAPJstT-XBVJERiD-uktUBGTApEGZ9IZNTH3ANxeUELDGjFN9vq8s_-KI3BrOFBsw-9bJ6GO7KX6WQVVqGQag2SKT_iwNKbG9uyoJhV8d0O5ljg1yFlaRP0_5hzDseZLsYchOgHl5e6Tbry7O5ZckH_57PowpkCa_N0IbRep_Qv47HrVglA0R8oINNDu9HyEBAmdBOuMQLKw032gCa6VWUFixUhXyzTN2j-dM',
  },
  {
    id: 'wood',
    label: 'Массив дерева',
    description: 'Премиум, классика',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTsXUCG7FhHtO03ApxUo3gBLElhmQusbJ-svk-2wgmIG2PORbY0qjVTLXDiskpGAqKS4IHEYX7f8uGvWzGYFpUzPtyPWvpjum4Zk8jtOoPXjmQv-6QtbBeBqSZdFDLaB9xXXJkkOplgmNA_iGOcar6tSznAr20H0xsYtryka8HNcoRPV5RzAjPWIhHmWMj9BFXHRynku-fXKvBPwzIfHDaQEBBq91QY14KBlopokRt2nORzxLV1JxKbhHCwI5tFVYSGproQfT2AY0',
  },
];

export const QuizStep2: React.FC<QuizStep2Props> = ({ selectedMaterial, onSelectMaterial, onNext, onBack }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header Section: Progress & Title */}
      <div className="px-6 md:px-12 pt-8 pb-4 text-center">
        <p className="text-text-secondary text-sm font-medium mb-4 uppercase tracking-wider">Рассчитайте стоимость вашей кухни</p>
        <div className="flex flex-col gap-3 mb-6 max-w-xl mx-auto w-full">
          <div className="flex gap-6 justify-between items-end">
            <p className="text-text-dark text-base font-semibold leading-normal">Шаг 2 из 3</p>
            <p className="text-text-dark text-sm font-normal leading-normal">66%</p>
          </div>
          <div className="rounded-full bg-gray-200 h-2 overflow-hidden">
            <div className="h-full rounded-full bg-primary transition-all duration-500 ease-out" style={{ width: '66%' }}></div>
          </div>
        </div>
        <h2 className="text-text-dark tracking-tight text-[28px] md:text-[32px] font-bold leading-tight pt-2">
          Материал фасадов
        </h2>
        <p className="text-text-secondary mt-2 text-sm">Выберите материал, который вам больше всего нравится</p>
      </div>

      {/* Options Grid */}
      <div className="px-6 md:px-12 py-6 flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {materials.map((item) => (
            <label key={item.id} className="group relative cursor-pointer">
              <input
                className="peer sr-only"
                name="material"
                type="radio"
                value={item.id}
                checked={selectedMaterial === item.id}
                onChange={() => onSelectMaterial(item.id)}
              />
              <div className={`flex flex-col h-full rounded-xl border-2 p-4 transition-all hover:bg-gray-100
                ${selectedMaterial === item.id
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-transparent bg-gray-50'
                }`}
              >
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  ></div>
                  <div className={`absolute top-3 right-3 w-6 h-6 rounded-full bg-white flex items-center justify-center transition-opacity shadow-sm ${selectedMaterial === item.id ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="material-symbols-outlined text-primary !text-[20px]">check_circle</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <p className="text-text-dark text-lg font-bold leading-normal">{item.label}</p>
                    <div className={`w-5 h-5 rounded-full border-2 transition-colors flex items-center justify-center ${selectedMaterial === item.id ? 'border-primary bg-primary' : 'border-gray-300 group-hover:border-primary/50'}`}>
                      <div className={`w-2 h-2 rounded-full bg-white ${selectedMaterial === item.id ? 'opacity-100' : 'opacity-0'}`}></div>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm font-normal leading-normal">{item.description}</p>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Footer: Navigation Buttons */}
      <div className="px-6 md:px-12 py-8 border-t border-gray-100 mt-auto">
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 max-w-4xl mx-auto items-center">
          <button
            onClick={onBack}
            className="w-full sm:w-auto min-w-[120px] flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-transparent hover:bg-gray-100 border border-gray-300 text-text-dark text-sm font-bold leading-normal tracking-[0.015em] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined !text-[18px]">arrow_back</span>
            <span>Назад</span>
          </button>
          <button
            onClick={onNext}
            disabled={!selectedMaterial}
            className="w-full sm:w-auto min-w-[140px] flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-primary hover:bg-green-400 disabled:bg-gray-300 disabled:cursor-not-allowed text-text-dark text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 transition-all transform hover:translate-y-[-1px] disabled:shadow-none disabled:transform-none cursor-pointer"
          >
            <span>Далее</span>
            <span className="material-symbols-outlined !text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
