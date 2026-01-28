import React from 'react';

interface QuizStep1Props {
  selectedShape: string | null;
  onSelectShape: (shape: string) => void;
  onNext: () => void;
}

const shapes = [
  {
    id: 'straight',
    label: 'Прямая',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_EChPO8q21phIHVTjxMacMkAkjYjP3mex8JNRX2yMksn7RzaUbb5gNq7UA1Ga5yx3E-FWumPILhR9u3Gv7w06aIPWV9oD3Wh-Av3uaNVvECf39YKKeb_oFHEUYpE58TkUPn96YloDXwO3n5n8FwLQbioCD7hgzuAsNK20C3pHVTFo0A5NWtOHXLxA9d9-hRkA-OsqCBS3Y8eRPPOWRqYDuHg2FavivAdOlh3c2E87q0UPn10auDQFFCXHElEPIjScBvmPCkZ4Npw',
  },
  {
    id: 'l-shaped',
    label: 'Г-образная',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-hMLX9aLmUJ9Hts2apK1UCQ7CQW4JJaH4rbH2bRTP3EkD-c0pcNxEvQ4DuqjdgMzEez5X4p4SdUoDlJI6uyLbb88GERVkdJl-g7RSj_s67Uxx44KQV6IXMMAhu8mGzbw1UluUehYYwy5o8OzvzBgUO-skudD91b8YYue5HCmKv7SUBDgPdzhVBHzup2GlrMN4Mj0woO54JsDYbbRLleZK8UAw06IQayqnXwaLCFYImajqj3uVedLroWURVIBjGSjQdhxVzH2ux6I',
  },
  {
    id: 'u-shaped',
    label: 'П-образная',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_XINTG6BdRv9Sm8z_RM9E5B2F1hlMZHB80rZqrhGy--yL9TxZyTrxtn4CwIURYUqlovHy1rsdxSBwmlccfIp0he7P-XyeR7vhxONtB0bOTdYKbBCNEOAt_oi6MFbd0p5MGZ3Vm1xSsfa4UDoj6Te6ncI5h7Zk8PDlx0dk6FT9BNA1tUn0xSw1WnN0pz_lNSI2Ml_YiZ0J-HIVdloH2uegaihhJwxpe2a_DCvg10voOSHMymKXXdSTGQ3dd7Ni6xCI4RNFUYbTav0',
  },
  {
    id: 'island',
    label: 'С островком',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmY1lWU1JtxP3WqvMeSXGi9CLBygIViZXQVSc1XJPcqXpXCYNzkdEBDD_dNDlWwoi4yQRcDur248ORlKzPJE_RTWM0mjcG2rp_wlPOo3eMpiIjNiW2X54N-OgQPbGY_1TYVsNh8baEYUycivDdh6xTOh3uwZg3gzjRcSSSymeBNP1zUHz8ScqdaDHQW-dRoBDh3-hf_duj2zcZZb1LpOIkgnBM9ZIlV-4otv-hhbhlTXlQSfGBCeid3VZ94B8dwXDeLW8lhw81Uxo',
  },
];

export const QuizStep1: React.FC<QuizStep1Props> = ({ selectedShape, onSelectShape, onNext }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Progress Bar Section */}
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex gap-6 justify-between items-end">
          <p className="text-text-dark text-sm font-medium leading-normal opacity-80">Вопрос 1 из 3</p>
          <p className="text-primary font-bold text-sm">33%</p>
        </div>
        <div className="rounded-full bg-gray-200 h-2 w-full overflow-hidden">
          <div className="h-full rounded-full bg-primary transition-all duration-500 ease-out" style={{ width: '33%' }}></div>
        </div>
      </div>

      {/* Headline */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-text-dark tracking-tight text-3xl md:text-4xl font-bold leading-tight">
          Выберите форму кухни
        </h2>
        <p className="mt-2 text-text-secondary text-base">
          Мы подберем для вас идеальные варианты планировки
        </p>
      </div>

      {/* Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 overflow-y-auto max-h-[50vh] pr-2">
        {shapes.map((shape) => (
          <label key={shape.id} className="group relative cursor-pointer">
            <input
              className="peer sr-only"
              name="kitchen_shape"
              type="radio"
              value={shape.id}
              checked={selectedShape === shape.id}
              onChange={() => onSelectShape(shape.id)}
            />
            <div className={`flex flex-col h-full rounded-xl border-2 p-4 shadow-sm ring-1 ring-gray-200 transition-all duration-200
              ${selectedShape === shape.id
                ? 'border-primary bg-primary/5 ring-0 shadow-md'
                : 'border-transparent bg-white hover:border-primary/50 hover:bg-gray-50'
              }`}
            >
              <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-50">
                <div
                  className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-all ${selectedShape === shape.id ? 'opacity-80' : 'opacity-60 grayscale group-hover:grayscale-0'}`}
                  style={{ backgroundImage: `url('${shape.image}')` }}
                ></div>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <p className={`text-lg font-bold leading-normal ${selectedShape === shape.id ? 'text-text-dark' : 'text-text-dark font-medium'}`}>{shape.label}</p>
                <span className={`material-symbols-outlined text-primary text-2xl font-bold transition-opacity ${selectedShape === shape.id ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Footer / Navigation */}
      <div className="flex items-center justify-end mt-auto pt-6 border-t border-gray-100">
        <button
          onClick={onNext}
          disabled={!selectedShape}
          className="flex items-center justify-center rounded-lg bg-primary hover:bg-green-400 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-text-dark text-base font-bold h-12 px-8 min-w-[140px] shadow-lg shadow-primary/20 disabled:shadow-none cursor-pointer"
        >
          <span>Далее</span>
          <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
