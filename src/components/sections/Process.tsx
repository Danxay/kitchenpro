'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const steps = [
    {
        icon: 'architecture',
        title: 'Замер и консультация',
        description: 'Бесплатный выезд специалиста. Точные замеры, обсуждение пожеланий и бюджета.',
        duration: '1 день',
    },
    {
        icon: 'view_in_ar',
        title: '3D-проектирование',
        description: 'Создаём реалистичную визуализацию. Вносим правки до полного согласования.',
        duration: '2-3 дня',
    },
    {
        icon: 'precision_manufacturing',
        title: 'Производство',
        description: 'Изготовление на собственной фабрике с контролем качества на каждом этапе.',
        duration: '7-10 дней',
    },
    {
        icon: 'home',
        title: 'Доставка и монтаж',
        description: 'Бережная доставка и профессиональная установка. Уборка после завершения работ.',
        duration: '1-2 дня',
    },
];

export const Process: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollReveal animation="fade-up">
                    <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                            <span className="material-symbols-outlined !text-sm">route</span>
                            Как мы работаем
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-text-dark tracking-tight mb-4">
                            От заявки до готовой кухни за 14 дней
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Прозрачный процесс на каждом этапе. Вы всегда знаете статус вашего заказа.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                            <div className="relative group h-full">
                                {/* Connector Line (desktop only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-[calc(50%+50px)] w-[calc(100%-100px)] h-0.5 bg-gray-200 group-hover:bg-primary/50 transition-colors duration-500">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150" />
                                    </div>
                                )}

                                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                                    {/* Step Number & Icon */}
                                    <div className="relative mb-5">
                                        <div className="w-20 h-20 rounded-2xl bg-primary/10 group-hover:bg-primary/20 group-hover:rotate-3 flex items-center justify-center transition-all duration-300">
                                            <span className="material-symbols-outlined text-primary !text-[32px] group-hover:scale-110 transition-transform">{step.icon}</span>
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-text-dark font-bold text-sm flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed mb-3 flex-1">{step.description}</p>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined !text-[14px]">schedule</span>
                                        {step.duration}
                                    </span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
