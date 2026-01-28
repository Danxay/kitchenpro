'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const reviews = [
    {
        id: 1,
        name: 'Елена Смирнова',
        location: 'Москва, Чертаново',
        review: 'Заказывали кухню с островом. Сделали за 16 дней, как и обещали. Качество отличное, фурнитура работает идеально. Особенно понравилось, что замерщик сразу предложил несколько вариантов планировки.',
        rating: 5,
        date: 'Январь 2026',
        style: 'С островом',
    },
    {
        id: 2,
        name: 'Дмитрий Козлов',
        location: 'Москва, Бутово',
        review: 'Долго выбирали между несколькими компаниями. В КухниПро привлекла честная цена без скрытых доплат. Кухня получилась точно как на 3D-визуализации. Рекомендую!',
        rating: 5,
        date: 'Декабрь 2025',
        style: 'Минимализм',
    },
    {
        id: 3,
        name: 'Анна Петрова',
        location: 'Москва, Митино',
        review: 'Маленькая кухня 6 кв.м, но ребята вместили всё необходимое. Умные решения для хранения просто спасение! Установка заняла всего день.',
        rating: 5,
        date: 'Ноябрь 2025',
        style: 'Угловая',
    },
    {
        id: 4,
        name: 'Сергей Игнатьев',
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
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${index % 4 === 0 ? 'bg-blue-500' :
                                        index % 4 === 1 ? 'bg-green-500' :
                                            index % 4 === 2 ? 'bg-purple-500' : 'bg-orange-500'
                                        }`}>
                                        {review.name.split(' ').map(n => n[0]).join('')}
                                    </div>
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
