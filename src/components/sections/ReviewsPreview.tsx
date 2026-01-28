'use client';

import Link from 'next/link';
import React, { useRef } from 'react';

const reviews = [
    {
        name: 'Елена С.',
        location: 'Москва',
        text: 'Установка прошла невероятно быстро и профессионально. Я беспокоилась о сроках, но они закончили на 2 дня раньше!',
        rating: 5,
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcLqh4Pg28KA1ZyzWGj1mgRgDwShZhKi_cegc9csGOeUFmZRBLkkre8kp7zzwUiim2zPUlH22djs1YAaD_TBi1bvkynDONq7L6WTh3D-v4OLW8aZpbG5an7kgohy8tFlQESmHFBHfnfB4ZuzFGwjTRAdxvbhsocm-Rzwp4e1Qxpv9PvXMd3xjSRTL8gMwFiCGlAYoAjepPDRD7EA4YPvTE697raSJ2J7Po8RvNiZkz8NTLV89ZeY7Mtxr38ZUI03BHFMNOHuPgjRA',
    },
    {
        name: 'Дмитрий К.',
        location: 'Санкт-Петербург',
        text: 'Калькулятор цены был точным, никаких сюрпризов в конце. Качество отделки дерева точно такое же, как мы видели в шоуруме.',
        rating: 5,
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkoot5NKZUtng2ZFhA2oCDWqYmcrJfX8qQHHWR-FGfNu65gjbqsqxGlYVK08Z7vz5-1uCUxfvd_s2KUF4kkRzBNISsA86CnAf6jkH7IGM8PUC3bfxv4qJwZpDca_OJ5YiH4mzWI0ANcNzNcjjOHklmQMKaztjXnr1nb9wUDndVUiF4GFhCFOiXZ1Qe2CS5hKlY0hQOcgDmfPwZg0CANHMXk3LARuYjMsx-gQKb6vqFGZ2rVxevCHF1fC0Bn_hvw6QKDrVhG-bn78M',
    },
    {
        name: 'Анна М.',
        location: 'Казань',
        text: 'Потрясающие решения для хранения в моей маленькой квартире. Не могу поверить, сколько места у меня теперь есть!',
        rating: 5,
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTQRs5RGKqf2F5e4qfz0tR7GqcCExcFYK27HCXF-aAEi6-jwbDwJKUfoHopBq3LUfElqwSvB0uQVB80OdZ-fowJnFu-QbSwa6nDQhBFIx6sTR-11xKb0vUb3GHS9xTfMdOD9Ua-1ejT_u6KxFqYx9TFfz-yLPF_owjSsxhWAcDSe49C10CMMcMMwupqE1gOPIt325cWb_BDz0OCOXtlNliUPCi1D-5_aj7gWjCOPNfVOJHdwm4eJ-VJqKAkV9QqqgZKq70udOXpIU',
    },
];

export const ReviewsPreview: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 340;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                            <span className="material-symbols-outlined !text-sm">verified</span>
                            500+ довольных клиентов
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-text-dark tracking-tight">
                            Что говорят наши клиенты
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-text-dark hover:bg-gray-50 hover:border-primary transition-all cursor-pointer"
                            aria-label="Предыдущий отзыв"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-text-dark hover:bg-gray-50 hover:border-primary transition-all cursor-pointer"
                            aria-label="Следующий отзыв"
                        >
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Reviews Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="snap-start shrink-0 w-[320px] md:w-[380px] bg-gray-50 rounded-2xl p-6 flex flex-col"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-yellow-400 !text-[20px] filled">star</span>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-text-dark text-base leading-relaxed mb-6 flex-1">
                                &quot;{review.text}&quot;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-bold text-text-dark">{review.name}</p>
                                    <p className="text-sm text-text-secondary">{review.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/reviews"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                        Все отзывы
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
