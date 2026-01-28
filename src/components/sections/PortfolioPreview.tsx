'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const projects = [
    {
        id: 1,
        image: '/modern_white_kitchen_island_1769605750150.webp',
        price: '485 000 ₽',
        duration: '14 дней',
        title: 'Современная белая кухня',
        style: 'Минимализм',
    },
    {
        id: 2,
        image: '/loft_kitchen_dark_1769605279295.webp',
        price: '620 000 ₽',
        duration: '18 дней',
        title: 'Кухня с островом в стиле лофт',
        style: 'Лофт',
    },
    {
        id: 3,
        image: '/compact_corner_kitchen_1769605364732.webp',
        price: '380 000 ₽',
        duration: '12 дней',
        title: 'Уютная угловая кухня',
        style: 'Современный',
    },
];

export const PortfolioPreview: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollReveal animation="fade-up">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                <span className="material-symbols-outlined !text-sm">photo_library</span>
                                Наши работы
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-text-dark tracking-tight">
                                Реальные проекты, честные цены
                            </h2>
                        </div>
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
                        >
                            <span>Все проекты</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                </ScrollReveal>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ScrollReveal key={project.id} animation="fade-up" delay={index * 150}>
                            <Link
                                href="/portfolio"
                                className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 block"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${project.image}')` }}
                                />

                                {/* Badges */}
                                <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
                                    <div className="flex items-center gap-1.5 rounded-full bg-primary/95 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-text-dark shadow-sm group-hover:scale-105 transition-transform">
                                        <span className="material-symbols-outlined !text-[14px]">payments</span>
                                        {project.price}
                                    </div>
                                    <div className="flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-text-dark shadow-sm group-hover:scale-105 transition-transform">
                                        <span className="material-symbols-outlined !text-[14px]">schedule</span>
                                        {project.duration}
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-10">
                                    <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                                        <p className="text-sm text-white/80 mb-3">Стиль: {project.style}</p>
                                        <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                                            Подробнее <span className="material-symbols-outlined !text-[16px]">arrow_forward</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
