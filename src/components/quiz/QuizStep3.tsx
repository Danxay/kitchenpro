import React, { useState } from 'react';

interface QuizStep3Props {
  onSubmit: (data: { name: string; phone: string }) => void;
  onBack: () => void;
}

export const QuizStep3: React.FC<QuizStep3Props> = ({ onSubmit, onBack }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      onSubmit({ name, phone });
    }
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row min-h-[600px]">
      {/* Left Side: Visual / Gift (Visible on Desktop) */}
      <div className="relative w-full md:w-5/12 bg-gray-100 dark:bg-gray-800 min-h-[250px] md:min-h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNRIScrLeMkH8TBczzNUFkNjy0YsbuSsii6vgI5ZsXcPVdgsJewRKKNjYAQjWt7ZAAJxDbZnKsTzZOoztLniDDa1m1rFvTqpxu1SNleKsO5vkKgG2QVxDbYQnNPLRghe_tV64a4hKYqNBPoMj6wmU2-F9M1Lf8_77XoFpnF9rb7fXWYZgLPZQ72Ln03o4ElG9Odv3O6wDggaPwzFsQmAE91dBsPrR4CiPN5PER5zGoSH3v-qwSY046bw3U1H9FR8TgVFaQyx4E5Wk')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40 md:bg-black/30 flex flex-col justify-end p-8 text-white">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-primary text-[#111714] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-[16px]">card_giftcard</span>
              Ваш подарок
            </span>
            <h3 className="text-2xl font-bold leading-tight mb-2">Каменная мойка</h3>
            <p className="text-white/90 text-sm font-medium">Бесплатно при заказе кухни в этом месяце</p>
          </div>
        </div>
        {/* Back button for mobile embedded in image area if needed, but we have onBack prop. Usually form step allows going back? Reference doesn't explicitly show back button on screen 4, but good UX requires it or a close button. The modal has a close button. I'll add a back button. */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 md:hidden bg-white/20 hover:bg-white/30 p-2 rounded-full text-white backdrop-blur-sm transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      </div>

      {/* Right Side: Form & Content */}
      <div className="w-full md:w-7/12 p-6 md:p-10 lg:p-12 flex flex-col justify-center bg-white dark:bg-surface-dark">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[#111714] dark:text-white text-sm font-medium">Почти готово!</span>
            <span className="text-primary font-bold text-sm">95%</span>
          </div>
          <div className="w-full bg-[#dce5df] dark:bg-gray-700 rounded-full h-2.5">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: '95%' }}></div>
          </div>
        </div>

        {/* Header Content */}
        <div className="flex flex-col gap-3 mb-8">
          <h1 className="text-[#111714] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
            Расчет почти готов!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Оставьте номер, и мы пришлем детальную смету и <span className="font-semibold text-[#111714] dark:text-white">3D-проект</span> в WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-md">
          {/* Name Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary transition-colors">
              <span className="material-symbols-outlined">person</span>
            </div>
            <input
              className="block w-full pl-12 pr-4 py-4 bg-background-light dark:bg-background-dark border-transparent focus:border-primary focus:ring-0 rounded-xl text-[#111714] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium transition-all outline-none"
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* Phone Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary transition-colors">
              <span className="material-symbols-outlined">call</span>
            </div>
            <input
              className="block w-full pl-12 pr-4 py-4 bg-background-light dark:bg-background-dark border-transparent focus:border-primary focus:ring-0 rounded-xl text-[#111714] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium transition-all outline-none"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
             <button
                type="button"
                onClick={onBack}
                className="hidden md:flex w-auto px-6 items-center justify-center gap-2 rounded-xl h-auto border border-gray-300 hover:bg-gray-50 text-gray-600 font-bold transition-colors"
              >
                Назад
              </button>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-[#1bc760] active:scale-[0.99] transition-all duration-200 text-[#111714] font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer"
            >
              <span>Получить расчет и подарок</span>
              <span className="material-symbols-outlined font-bold">arrow_forward</span>
            </button>
          </div>
        </form>

        {/* Social Proof */}
        <div className="mt-8 flex items-center gap-3">
          <div className="flex -space-x-3">
            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-surface-dark bg-gray-300 bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTQRs5RGKqf2F5e4qfz0tR7GqcCExcFYK27HCXF-aAEi6-jwbDwJKUfoHopBq3LUfElqwSvB0uQVB80OdZ-fowJnFu-QbSwa6nDQhBFIx6sTR-11xKb0vUb3GHS9xTfMdOD9Ua-1ejT_u6KxFqYx9TFfz-yLPF_owjSsxhWAcDSe49C10CMMcMMwupqE1gOPIt325cWb_BDz0OCOXtlNliUPCi1D-5_aj7gWjCOPNfVOJHdwm4eJ-VJqKAkV9QqqgZKq70udOXpIU')" }}></div>
            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-surface-dark bg-gray-300 bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2bH8pxsZO-C7MLLGDXX7NKXb_IZtLyTF57kVT3WlCEa9ocf5aKw5m86WpllCAT2mrusXOSM5SP4VNU7KtUQRdzGXFbaf6M2fCQdMuB0C-rCYy9DJH0V4HujdFkOw-vFWzH-sPxKFDDNhBHf3IU2ek4BYzVv45xcFSHfM9zNgPLMJykBLPM2zmSGvnIWNe0-9G3uv38TgPVd3oAIAyW3jUzcAxwqnOlKntnyw8s7dEkdMkUp1h5G12wiSVddg2aJsccSUU4Teyz1c')" }}></div>
            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-surface-dark bg-gray-300 bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZllF9iamvkyOiTuBLVGo_7rJ3Bmq2rn3H1wP6IyDKT-r9Y-GSQwlpYZexap40DI1ncgUJelGfEgkpyEudQJB5NiBw5e11re_wNQn5Gs8JERurgHj5tpsMUYqQ0ONJtMXY7DTf8yPgOnqNPX6dPaKTXLwi_JCxPoo2c7Eh2AQpNTCc1gk-PP_uO6ODFDniQ-2TZ-OzU1430Cz_NVETWLO2QT4Z1W9WaelVNoGA0yTFy5MDRXouBAqU5zlHlRrHNEEs1fGyEhJ7RjQ')" }}></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            <span className="font-bold text-[#111714] dark:text-white">14 человек</span> получили расчет сегодня
          </p>
        </div>

        {/* Footer Meta */}
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
          <p className="text-gray-400 dark:text-gray-500 text-xs text-center md:text-left leading-normal">
            Нажимая кнопку, вы соглашаетесь с <a href="#" className="underline hover:text-primary transition-colors">политикой обработки персональных данных</a>
          </p>
        </div>
      </div>
    </div>
  );
};
