import React from 'react';

interface HeroProps {
  onOpenQuiz?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
              <span className="material-symbols-outlined text-primary !text-[18px]">verified</span>
              <span className="text-xs font-bold text-primary tracking-wide uppercase">Официальный производитель</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-dark leading-[1.1] tracking-tight">
              Кухни по вашим размерам за 14 дней
            </h1>
            <p className="text-text-secondary text-lg sm:text-xl font-normal leading-relaxed">
              Без посредников. Экономия до 30% от рыночной цены. Гарантия качества по договору 5 лет.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenQuiz}
              className="bg-primary hover:bg-green-400 text-text-dark h-14 px-8 rounded-lg text-base font-bold transition-all transform active:scale-95 shadow-lg shadow-primary/25 flex items-center justify-center gap-2 w-full sm:w-auto group cursor-pointer"
            >
              <span className="material-symbols-outlined !text-[24px]">calculate</span>
              <span>Рассчитать стоимость</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform !text-[20px]">arrow_forward</span>
            </button>
            <button className="bg-white border border-border-light hover:bg-gray-50 text-text-dark h-14 px-8 rounded-lg text-base font-medium transition-colors w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined !text-[24px]">download</span>
              <span>Скачать каталог</span>
            </button>
          </div>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <span className="material-symbols-outlined !text-[16px]">card_giftcard</span>
            Пройдите тест и получите дизайн-проект в подарок
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-border-light">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-full text-text-dark">
                <span className="material-symbols-outlined !text-[20px]">factory</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-text-dark">Цена фабрики</span>
                <span className="text-xs text-text-secondary">Без наценок</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-full text-text-dark">
                <span className="material-symbols-outlined !text-[20px]">design_services</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-text-dark">Бесплатный дизайн</span>
                <span className="text-xs text-text-secondary">3D-проект</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-full text-text-dark">
                <span className="material-symbols-outlined !text-[20px]">shield_moon</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-text-dark">Гарантия</span>
                <span className="text-xs text-text-secondary">5 лет</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-full min-h-[400px] lg:min-h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLL0GMeG-6Zgx9pnN0okI4ZunamgtmfkXtLozaX9OKb-k1A0mxwCMH2gafe8xVxtkHIFso9dx60a98pkr6lba06ncEUAF72NYEENK8Dy-ojhN_MUfCkd6h4ts0RdIarlOgbZfwgKTNE6pPDp9yyoucvgcjclN5VhrzjF4pSb-zQx7o_YITOgtTAqnDGfzU5yCjt47p6JpDcvAXkSXBc1eR2p5mqXENhS04K-uljWK-MlNdxmpOFOlH1PY83jqzMRaQpNN7HVgb1vY')" }}
          ></div>

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex -space-x-2">
                <img alt="Reviewer" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcLqh4Pg28KA1ZyzWGj1mgRgDwShZhKi_cegc9csGOeUFmZRBLkkre8kp7zzwUiim2zPUlH22djs1YAaD_TBi1bvkynDONq7L6WTh3D-v4OLW8aZpbG5an7kgohy8tFlQESmHFBHfnfB4ZuzFGwjTRAdxvbhsocm-Rzwp4e1Qxpv9PvXMd3xjSRTL8gMwFiCGlAYoAjepPDRD7EA4YPvTE697raSJ2J7Po8RvNiZkz8NTLV89ZeY7Mtxr38ZUI03BHFMNOHuPgjRA"/>
                <img alt="Reviewer" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkoot5NKZUtng2ZFhA2oCDWqYmcrJfX8qQHHWR-FGfNu65gjbqsqxGlYVK08Z7vz5-1uCUxfvd_s2KUF4kkRzBNISsA86CnAf6jkH7IGM8PUC3bfxv4qJwZpDca_OJ5YiH4mzWI0ANcNzNcjjOHklmQMKaztjXnr1nb9wUDndVUiF4GFhCFOiXZ1Qe2CS5hKlY0hQOcgDmfPwZg0CANHMXk3LARuYjMsx-gQKb6vqFGZ2rVxevCHF1fC0Bn_hvw6QKDrVhG-bn78M"/>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-text-dark text-white flex items-center justify-center text-xs font-bold">+2k</div>
              </div>
              <div className="flex text-yellow-400">
                <span className="material-symbols-outlined !text-[16px] filled">star</span>
                <span className="material-symbols-outlined !text-[16px] filled">star</span>
                <span className="material-symbols-outlined !text-[16px] filled">star</span>
                <span className="material-symbols-outlined !text-[16px] filled">star</span>
                <span className="material-symbols-outlined !text-[16px] filled">star</span>
              </div>
            </div>
            <p className="text-xs font-medium text-text-dark">&quot;Отличное качество и быстрая установка. Рекомендую!&quot;</p>
          </div>
        </div>
      </div>
    </div>
  );
};
