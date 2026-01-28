import React from 'react';

const steps = [
    {
        icon: 'draw',
        title: 'Замер',
        description: 'Бесплатный выезд замерщика в удобное время. Точные измерения вашей кухни.',
        duration: '1 день',
    },
    {
        icon: 'view_in_ar',
        title: '3D-проект',
        description: 'Создаем реалистичную 3D-визуализацию. Вы увидите кухню до начала производства.',
        duration: '2-3 дня',
    },
    {
        icon: 'precision_manufacturing',
        title: 'Производство',
        description: 'Изготовление на современном оборудовании. Контроль качества на каждом этапе.',
        duration: '7-14 дней',
    },
    {
        icon: 'handyman',
        title: 'Установка',
        description: 'Профессиональный монтаж. Вывоз мусора и уборка после установки.',
        duration: '1-2 дня',
    },
];

export const Process: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                        <span className="material-symbols-outlined !text-sm">route</span>
                        Как мы работаем
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-text-dark tracking-tight">
                        От идеи до готовой кухни за 14 дней
                    </h2>
                    <p className="text-text-secondary text-lg mt-4">
                        Простой и прозрачный процесс. Вы всегда в курсе, на каком этапе ваш заказ.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector Line (hidden on mobile and last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gray-200">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                                </div>
                            )}

                            <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                                {/* Step Number & Icon */}
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary !text-[36px]">{step.icon}</span>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-text-dark font-bold text-sm flex items-center justify-center shadow-lg">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-text-dark mb-2">{step.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed mb-3">{step.description}</p>
                                <span className="inline-flex items-center gap-1 text-xs font-bold text-primary">
                                    <span className="material-symbols-outlined !text-[14px]">schedule</span>
                                    {step.duration}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
