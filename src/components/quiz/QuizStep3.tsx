import React, { useState } from 'react';

interface QuizStep3Props {
  onSubmit: (data: { name: string; phone: string }) => void;
  onBack: () => void;
}

export const QuizStep3: React.FC<QuizStep3Props> = ({ onSubmit, onBack }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};

    if (name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ name: name.trim(), phone: phone.trim() });
    }
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">
      {/* Left Side: Visual / Gift */}
      <div className="relative w-full md:w-5/12 bg-gray-100 min-h-[200px] md:min-h-full shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/stone_sink_luxury_gift_1769605810298.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
          <div>
            <span className="inline-flex items-center gap-2 bg-primary text-text-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3 animate-pulse">
              <span className="material-symbols-outlined !text-[16px]">card_giftcard</span>
              Подарок
            </span>
            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-1">Каменная мойка</h3>
            <p className="text-white/80 text-sm">Бесплатно при заказе в этом месяце</p>
          </div>
        </div>

        {/* Back button for mobile */}
        <button
          onClick={onBack}
          className="absolute top-3 left-3 md:hidden bg-white/20 hover:bg-white/30 p-2 rounded-full text-white backdrop-blur-sm transition-all cursor-pointer"
          aria-label="Назад"
        >
          <span className="material-symbols-outlined !text-[20px]">arrow_back</span>
        </button>
      </div>

      {/* Right Side: Form & Content */}
      <div className="w-full md:w-7/12 p-5 md:p-8 lg:p-10 flex flex-col justify-center bg-white overflow-y-auto">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-end mb-2">
            <span className="text-text-dark text-sm font-medium">Почти готово!</span>
            <span className="text-primary font-bold text-sm">95%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '95%' }} />
          </div>
        </div>

        {/* Header Content */}
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-text-dark text-2xl md:text-3xl font-black leading-tight tracking-tight">
            Расчет почти готов!
          </h1>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Оставьте номер, и мы пришлём детальную смету и <span className="font-semibold text-text-dark">3D-проект</span> в WhatsApp
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
          {/* Name Input */}
          <div>
            <div className={`relative flex items-center bg-gray-50 rounded-xl transition-all ${errors.name ? 'ring-2 ring-red-400' : ''
              }`}>
              <span className="material-symbols-outlined text-gray-400 ml-4 !text-[20px]">person</span>
              <input
                className="w-full px-3 py-3.5 bg-transparent text-text-dark placeholder-gray-400 font-medium outline-none focus:outline-none focus:ring-0 border-0"
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
            </div>
            {errors.name && (
              <p id="name-error" className="text-red-500 text-xs mt-1.5 ml-1 flex items-center gap-1">
                <span className="material-symbols-outlined !text-[14px]">error</span>
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <div className={`relative flex items-center bg-gray-50 rounded-xl transition-all ${errors.phone ? 'ring-2 ring-red-400' : ''
              }`}>
              <span className="material-symbols-outlined text-gray-400 ml-4 !text-[20px]">call</span>
              <input
                className="w-full px-3 py-3.5 bg-transparent text-text-dark placeholder-gray-400 font-medium outline-none focus:outline-none focus:ring-0 border-0"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
            </div>
            {errors.phone && (
              <p id="phone-error" className="text-red-500 text-xs mt-1.5 ml-1 flex items-center gap-1">
                <span className="material-symbols-outlined !text-[14px]">error</span>
                {errors.phone}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 mt-2">
            <button
              type="button"
              onClick={onBack}
              className="hidden md:flex w-auto px-5 items-center justify-center gap-2 rounded-xl py-3 border border-gray-300 hover:bg-gray-50 text-text-secondary font-bold transition-all cursor-pointer"
            >
              Назад
            </button>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-green-400 active:scale-[0.98] transition-all duration-200 text-text-dark font-bold text-base py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 cursor-pointer"
            >
              <span>Получить расчет</span>
              <span className="material-symbols-outlined !text-[20px]">arrow_forward</span>
            </button>
          </div>
        </form>

        {/* Social Proof */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">А</div>
            <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xs font-bold">М</div>
            <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-bold">Е</div>
          </div>
          <p className="text-xs text-text-secondary">
            <span className="font-bold text-text-dark">23 человека</span> получили расчет сегодня
          </p>
        </div>

        {/* Footer Meta */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-gray-400 text-xs leading-normal">
            Нажимая кнопку, вы соглашаетесь с{' '}
            <a href="/privacy" className="underline hover:text-primary transition-colors">политикой конфиденциальности</a>
          </p>
        </div>
      </div>
    </div>
  );
};
