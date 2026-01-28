'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const reviews = [
    {
        id: 1,
        name: 'Елена Смирнова',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcLqh4Pg28KA1ZyzWGj1mgRgDwShZhKi_cegc9csGOeUFmZRBLkkre8kp7zzwUiim2zPUlH22djs1YAaD_TBi1bvkynDONq7L6WTh3D-v4OLW8aZpbG5an7kgohy8tFlQESmHFBHfnfB4ZuzFGwjTRAdxvbhsocm-Rzwp4e1Qxpv9PvXMd3xjSRTL8gMwFiCGlAYoAjepPDRD7EA4YPvTE697raSJ2J7Po8RvNiZkz8NTLV89ZeY7Mtxr38ZUI03BHFMNOHuPgjRA',
        location: 'Москва, Чертаново',
        review: 'Заказывали кухню с островом. Сделали за 16 дней, как и обещали. Качество отличное, фурнитура работает идеально. Особенно понравилось, что замерщик сразу предложил несколько вариантов планировки.',
        rating: 5,
        date: 'Январь 2026',
        style: 'С островом',
    },
    {
        id: 2,
        name: 'Дмитрий Козлов',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkoot5NKZUtng2ZFhA2oCDWqYmcrJfX8qQHHWR-FGfNu65gjbqsqxGlYVK08Z7vz5-1uCUxfvd_s2KUF4kkRzBNISsA86CnAf6jkH7IGM8PUC3bfxv4qJwZpDca_OJ5YiH4mzWI0ANcNzNcjjOHklmQMKaztjXnr1nb9wUDndVUiF4GFhCFOiXZ1Qe2CS5hKlY0hQOcgDmfPwZg0CANHMXk3LARuYjMsx-gQKb6vqFGZ2rVxevCHF1fC0Bn_hvw6QKDrVhG-bn78M',
        location: 'Москва, Бутово',
        review: 'Долго выбирали между несколькими компаниями. В КухниПро привлекла честная цена без скрытых доплат. Кухня получилась точно как на 3D-визуализации. Рекомендую!',
        rating: 5,
        date: 'Декабрь 2025',
        style: 'Минимализм',
    },
    {
        id: 3,
        name: 'Анна Петрова',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTQRs5RGKqf2F5e4qfz0tR7GqcCExcFYK27HCXF-aAEi6-jwbDwJKUfoHopBq3LUfElqwSvB0uQVB80OdZ-fowJnFu-QbSwa6nDQhBFIx6sTR-11xKb0vUb3GHS9xTfMdOD9Ua-1ejT_u6KxFqYx9TFfz-yLPF_owjSsxhWAcDSe49C10CMMcMMwupqE1gOPIt325cWb_BDz0OCOXtlNliUPCi1D-5_aj7gWjCOPNfVOJHdwm4eJ-VJqKAkV9QqqgZKq70udOXpIU',
        location: 'Москва, Митино',
        review: 'Маленькая кухня 6 кв.м, но ребята вместили всё необходимое. Умные решения для хранения просто спасение! Установка заняла всего день.',
        rating: 5,
        date: 'Ноябрь 2025',
        style: 'Угловая',
    },
    {
        id: 4,
        name: 'Сергей Игнатьев',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2bH8pxsZO-C7MLLGDXX7NKXb_IZtLyTF57kVT3WlCEa9ocf5aKw5m86WpllCAT2mrusXOSM5SP4VNU7KtUQRdzGXFbaf6M2fCQdMuB0C-rCYy9DJH0V4HujdFkOw-vFWzH-sPxKFDDNhBHf3IU2ek4BYzVv45xcFSHfM9zNgPLMJykBLPM2zmSGvnIWNe0-9G3uv38TgPVd3oAIAyW3jUzcAxwqnOlKntnyw8s7dEkdMkUp1h5G12wiSVddg2aJsccSUU4Teyz1c',
        location: 'Подольск',
        review: 'Третья кухня от этой фабрики. Делали родителям, себе и сестре. Всегда отличный результат, поэтому возвращаемся снова. Цены адекватные, сроки соблюдают.',
        rating: 5,
        date: 'Октябрь 2025',
        style: 'Классика',
    },
];

export const ReviewsPreview: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 360;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollReveal animation="fade-up">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                <span className="material-symbols-outlined !text-sm">verified</span>
                                Отзывы клиентов
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-text-dark tracking-tight">
                                Нам доверяют 547+ семей
                            </h2>
                        </div>
                        <div className="flex items-center gap-4">
                            {/* Navigation */}
                            <div className="flex gap-2">
                                <button
                                    onClick={() => scroll('left')}
                                    className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-text-dark hover:bg-primary hover:text-text-dark hover:border-primary hover:scale-110 transition-all cursor-pointer shadow-sm"
                                    aria-label="Предыдущий отзыв"
                                >
                                    <span className="material-symbols-outlined !text-[20px]">arrow_back</span>
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-text-dark hover:bg-primary hover:text-text-dark hover:border-primary hover:scale-110 transition-all cursor-pointer shadow-sm"
                                    aria-label="Следующий отзыв"
                                >
                                    <span className="material-symbols-outlined !text-[20px]">arrow_forward</span>
                                </button>
                            </div>
                            <Link
                                href="/reviews"
                                className="hidden md:inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
                            >
                                <span>Все отзывы</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Reviews Carousel */}
                <ScrollReveal animation="fade-up" delay={200}>
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-5 pb-4 snap-x snap-mandatory scrollbar-hide"
                    >
                        {reviews.map((review, index) => (
                            <div
                                key={review.id}
                                className="snap-start shrink-0 w-[320px] md:w-[360px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Rating */}
                                <div className="flex gap-0.5 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined text-yellow-400 !text-[18px] filled">star</span>
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-text-dark text-sm leading-relaxed mb-5 line-clamp-4">
                                    &quot;{review.review}&quot;
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                    <img
                                        src={review.avatar}
                                        alt={review.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <p className="font-bold text-sm text-text-dark">{review.name}</p>
                                        <p className="text-xs text-text-secondary">{review.location}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs font-medium">
                                            <span className="material-symbols-outlined !text-[12px]">verified</span>
                                            Проверен
                                        </span>
                                        <p className="text-xs text-text-secondary mt-1">{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Mobile Link */}
                <div className="flex justify-center mt-6 md:hidden">
                    <Link
                        href="/reviews"
                        className="inline-flex items-center gap-2 text-primary font-bold"
                    >
                        <span>Все отзывы</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
