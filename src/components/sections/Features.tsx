'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const features = [
  {
    icon: 'precision_manufacturing',
    title: 'Собственное производство',
    description: 'Полный цикл изготовления на современном оборудовании. Контроль качества на каждом этапе.',
  },
  {
    icon: 'auto_awesome',
    title: 'Премиум материалы',
    description: 'Используем только проверенные материалы: ЛДСП Egger, фурнитура Blum и Hettich.',
  },
  {
    icon: 'rocket_launch',
    title: 'Срок от 14 дней',
    description: 'Быстрое производство благодаря отлаженным процессам и собственному складу материалов.',
  },
  {
    icon: 'savings',
    title: 'Экономия до 30%',
    description: 'Работаем напрямую, без посредников и наценок салонов. Честные цены от производителя.',
  },
  {
    icon: 'design_services',
    title: 'Бесплатный 3D-проект',
    description: 'Создаём реалистичную визуализацию вашей кухни бесплатно перед началом производства.',
  },
  {
    icon: 'verified_user',
    title: 'Гарантия 5 лет',
    description: 'Официальная гарантия на все изделия. Сервисное обслуживание в течение всего срока.',
  },
];

export const Features: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <span className="material-symbols-outlined !text-sm">workspace_premium</span>
              Наши преимущества
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-text-dark tracking-tight mb-4">
              Почему выбирают КухниПро?
            </h2>
            <p className="text-text-secondary text-lg">
              Мы объединяем современные технологии с вниманием к деталям, чтобы создавать кухни вашей мечты
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <div className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary group-hover:scale-110 rounded-xl flex items-center justify-center text-primary group-hover:text-white mb-4 transition-all duration-300">
                  <span className="material-symbols-outlined !text-[24px]">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
