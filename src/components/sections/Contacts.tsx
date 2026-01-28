import React from 'react';

interface ContactsProps {
    onOpenQuiz?: () => void;
}

export const Contacts: React.FC<ContactsProps> = ({ onOpenQuiz }) => {
    return (
        <section className="py-16 md:py-24 bg-text-dark text-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: CTA Content */}
                    <div className="flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                            <span className="material-symbols-outlined !text-sm">local_offer</span>
                            Специальное предложение
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                            Закажите бесплатный расчет прямо сейчас
                        </h2>

                        <p className="text-white/70 text-lg leading-relaxed">
                            Получите точную стоимость кухни за 2 минуты. При заказе в этом месяце — <span className="text-primary font-bold">каменная мойка в подарок</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <button
                                onClick={onOpenQuiz}
                                className="bg-primary hover:bg-green-400 text-text-dark h-14 px-8 rounded-xl text-base font-bold transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 cursor-pointer group"
                            >
                                <span className="material-symbols-outlined">calculate</span>
                                <span>Рассчитать стоимость</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <a
                                href="tel:+79990000000"
                                className="border border-white/30 hover:bg-white/10 text-white h-14 px-8 rounded-xl text-base font-medium transition-colors flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined">call</span>
                                <span>+7 (999) 000-00-00</span>
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex flex-wrap gap-6 mt-4 pt-6 border-t border-white/10">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary !text-[20px]">check_circle</span>
                                <span className="text-sm text-white/80">Бесплатный замер</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary !text-[20px]">check_circle</span>
                                <span className="text-sm text-white/80">Гарантия 5 лет</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary !text-[20px]">check_circle</span>
                                <span className="text-sm text-white/80">Рассрочка 0%</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <h3 className="text-xl font-bold mb-6">Контактная информация</h3>

                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary">location_on</span>
                                </div>
                                <div>
                                    <p className="font-bold mb-1">Адрес офиса и шоурума</p>
                                    <p className="text-white/70 text-sm">г. Москва, ул. Примерная, д. 1<br />Пн-Сб: 10:00 - 20:00</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary">call</span>
                                </div>
                                <div>
                                    <p className="font-bold mb-1">Телефон</p>
                                    <a href="tel:+79990000000" className="text-white/70 text-sm hover:text-primary transition-colors">+7 (999) 000-00-00</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary">mail</span>
                                </div>
                                <div>
                                    <p className="font-bold mb-1">Email</p>
                                    <a href="mailto:info@kitchenfactory.ru" className="text-white/70 text-sm hover:text-primary transition-colors">info@kitchenfactory.ru</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary">chat</span>
                                </div>
                                <div>
                                    <p className="font-bold mb-1">Мессенджеры</p>
                                    <div className="flex gap-3 mt-2">
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                                            <span className="text-sm font-bold">WA</span>
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                                            <span className="text-sm font-bold">TG</span>
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                                            <span className="text-sm font-bold">VK</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
