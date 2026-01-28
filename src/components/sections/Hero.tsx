'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface HeroProps {
  onOpenQuiz?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-6 max-w-2xl">
            {/* Badge */}
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 w-fit">
                <span className="material-symbols-outlined text-primary !text-[16px]">verified</span>
                <span className="text-xs font-bold text-primary tracking-wide uppercase">Собственное производство</span>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-text-dark leading-[1.1] tracking-tight">
                Кухни на заказ <br className="hidden sm:block" />
                <span className="text-gradient">за 14 дней</span>
              </h1>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-lg">
                Изготовим вашу идеальную кухню на собственной фабрике в Москве.
                Премиум материалы, честные цены, гарантия 5 лет.
              </p>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenQuiz}
                  className="bg-primary hover:bg-green-400 text-text-dark h-12 sm:h-14 px-6 sm:px-8 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer group"
                >
                  <span className="material-symbols-outlined !text-[20px]">calculate</span>
                  <span>Рассчитать стоимость</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform !text-[18px]">arrow_forward</span>
                </button>
                <a
                  href="tel:+74951234567"
                  className="border border-gray-200 hover:border-primary hover:bg-primary/5 text-text-dark h-12 sm:h-14 px-6 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-primary !text-[18px]">call</span>
                  <span>+7 (495) 123-45-67</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Gift Banner */}
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0 animate-pulse">
                  <span className="material-symbols-outlined text-amber-600 !text-[20px]">redeem</span>
                </div>
                <p className="text-sm text-text-dark">
                  <span className="font-bold">Подарок:</span> Каменная мойка бесплатно при заказе до конца месяца
                </p>
              </div>
            </ScrollReveal>

            {/* Trust Indicators */}
            <ScrollReveal animation="fade-up" delay={500}>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                  <span className="text-2xl sm:text-3xl font-black text-text-dark group-hover:text-primary transition-colors">547+</span>
                  <span className="text-xs sm:text-sm text-text-secondary">Довольных клиентов</span>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                  <span className="text-2xl sm:text-3xl font-black text-text-dark group-hover:text-primary transition-colors">4.9</span>
                  <span className="text-xs sm:text-sm text-text-secondary">Рейтинг на Яндексе</span>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                  <span className="text-2xl sm:text-3xl font-black text-text-dark group-hover:text-primary transition-colors">5 лет</span>
                  <span className="text-xs sm:text-sm text-text-secondary">Гарантия</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Image */}
          <ScrollReveal animation="scale-in" delay={200}>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLL0GMeG-6Zgx9pnN0okI4ZunamgtmfkXtLozaX9OKb-k1A0mxwCMH2gafe8xVxtkHIFso9dx60a98pkr6lba06ncEUAF72NYEENK8Dy-ojhN_MUfCkd6h4ts0RdIarlOgbZfwgKTNE6pPDp9yyoucvgcjclN5VhrzjF4pSb-zQx7o_YITOgtTAqnDGfzU5yCjt47p6JpDcvAXkSXBc1eR2p5mqXENhS04K-uljWK-MlNdxmpOFOlH1PY83jqzMRaQpNN7HVgb1vY')" }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Floating Review Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[280px] bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-green-500 flex items-center justify-center">
                      <span className="material-symbols-outlined !text-[16px] text-white">person</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center">
                      <span className="material-symbols-outlined !text-[16px] text-white">person</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-text-dark text-white flex items-center justify-center text-xs font-bold">+2k</div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map(i => (
                      <span key={i} className="material-symbols-outlined !text-[14px] filled">star</span>
                    ))}
                  </div>
                </div>
                <p className="text-xs font-medium text-text-dark leading-relaxed">
                  &quot;Сделали кухню мечты за 12 дней. Качество на высоте, рекомендую!&quot;
                </p>
                <p className="text-xs text-text-secondary mt-1">— Анна М., Москва</p>
              </div>


              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md group-hover:scale-105 transition-transform">
                <p className="text-xs text-text-secondary">Кухни от</p>
                <p className="text-lg font-black text-text-dark">89 000 ₽</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
