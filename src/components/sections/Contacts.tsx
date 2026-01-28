'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface ContactsProps {
    onOpenQuiz?: () => void;
}

export const Contacts: React.FC<ContactsProps> = ({ onOpenQuiz }) => {
    return (
        <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: CTA Content */}
                    <div className="flex flex-col gap-6">
                        <ScrollReveal animation="fade-up">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit animate-pulse">
                                <span className="material-symbols-outlined !text-sm">local_offer</span>
                                Акция месяца
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={100}>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                                Закажите бесплатный расчёт <span className="text-primary">прямо сейчас</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={200}>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                                Получите точную стоимость вашей кухни за 2 минуты. При заказе в этом месяце — <span className="text-primary font-bold">каменная мойка в подарок</span>.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={300}>
                            <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                <button
                                    onClick={onOpenQuiz}
                                    className="bg-primary hover:bg-green-400 text-text-dark h-14 px-8 rounded-xl text-base font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer group"
                                >
                                    <span className="material-symbols-outlined !text-[20px]">calculate</span>
                                    <span>Рассчитать стоимость</span>
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform !text-[18px]">arrow_forward</span>
                                </button>
                                <a
                                    href="tel:+74951234567"
                                    className="border border-white/30 hover:bg-white/10 hover:border-white/50 text-white h-14 px-8 rounded-xl text-base font-medium transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                                >
                                    <span className="material-symbols-outlined !text-[20px]">call</span>
                                    <span>+7 (495) 123-45-67</span>
                                </a>
                            </div>
                        </ScrollReveal>

                        {/* Trust indicators */}
                        <ScrollReveal animation="fade-up" delay={400}>
                            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-2 group">
                                    <span className="material-symbols-outlined text-primary !text-[18px] group-hover:scale-125 transition-transform">check_circle</span>
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Бесплатный замер</span>
                                </div>
                                <div className="flex items-center gap-2 group">
                                    <span className="material-symbols-outlined text-primary !text-[18px] group-hover:scale-125 transition-transform">check_circle</span>
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Гарантия 5 лет</span>
                                </div>
                                <div className="flex items-center gap-2 group">
                                    <span className="material-symbols-outlined text-primary !text-[18px] group-hover:scale-125 transition-transform">check_circle</span>
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Рассрочка 0%</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right: Contact Info */}
                    <ScrollReveal animation="slide-right" delay={200}>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">pin_drop</span>
                                Контактная информация
                            </h3>

                            <div className="space-y-5">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-11 h-11 rounded-xl bg-primary/20 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center shrink-0 transition-all duration-300">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white !text-[20px] transition-colors">location_on</span>
                                    </div>
                                    <div>
                                        <p className="font-bold mb-1 group-hover:text-primary transition-colors">Офис и шоурум</p>
                                        <p className="text-gray-400 text-sm">г. Москва, ул. Мебельная, д. 15, стр. 2<br />Ежедневно: 10:00 – 20:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-11 h-11 rounded-xl bg-primary/20 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center shrink-0 transition-all duration-300">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white !text-[20px] transition-colors">call</span>
                                    </div>
                                    <div>
                                        <p className="font-bold mb-1 group-hover:text-primary transition-colors">Телефон</p>
                                        <a href="tel:+74951234567" className="text-gray-400 text-sm hover:text-primary transition-colors">+7 (495) 123-45-67</a>
                                        <p className="text-gray-500 text-xs mt-1">Звоните, ответим на любые вопросы</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-11 h-11 rounded-xl bg-primary/20 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center shrink-0 transition-all duration-300">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white !text-[20px] transition-colors">mail</span>
                                    </div>
                                    <div>
                                        <p className="font-bold mb-1 group-hover:text-primary transition-colors">Email</p>
                                        <a href="mailto:info@kuhnipro.ru" className="text-gray-400 text-sm hover:text-primary transition-colors">info@kuhnipro.ru</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-11 h-11 rounded-xl bg-primary/20 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center shrink-0 transition-all duration-300">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white !text-[20px] transition-colors">chat</span>
                                    </div>
                                    <div>
                                        <p className="font-bold mb-2 group-hover:text-primary transition-colors">Мессенджеры</p>
                                        <div className="flex gap-2">
                                            <a href="https://wa.me/74951234567" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary hover:text-text-dark hover:scale-110 flex items-center justify-center transition-all text-gray-400 text-sm font-bold">
                                                WA
                                            </a>
                                            <a href="https://t.me/kuhnipro" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary hover:text-text-dark hover:scale-110 flex items-center justify-center transition-all text-gray-400 text-sm font-bold">
                                                TG
                                            </a>
                                            <a href="https://vk.com/kuhnipro" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary hover:text-text-dark hover:scale-110 flex items-center justify-center transition-all text-gray-400 text-sm font-bold">
                                                VK
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};
