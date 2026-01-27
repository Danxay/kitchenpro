'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ReviewCard } from '@/components/reviews/ReviewCard';
import { QuizModal } from '@/components/quiz/QuizModal';

const reviews = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqK_3Irhrthcpa1i8nHvm8pl3PakQSZmqQaQBPl-bMP4XfGPu0SeJdhKhNQhaQd337WCNZQ19mLEsFKniQJh2ygHWBMtT05UHODLEAJOYBQytwUrwduRTcrY5fCbnJpFAd67mN6W-QUQoQVR3_mkP9cyMAyrp6pOlDYW-bWkDWFyotyYEeDuPjBWC7D7JyDHdMK_Ds_beT2vSRY7AivION7u-MSOKR60EJSMIM3SM2FVC1etVSML32T5kgTfRSOnvTPYZhmTSzZgM',
    location: 'Проект: Москва, 2023',
    name: 'Елена С.',
    review: 'Установка прошла невероятно быстро и профессионально. Я беспокоилась о сроках, но они закончили на 2 дня раньше. Ящики с доводчиками меняют все!',
    style: 'Современный',
    source: 'Google' as const,
    sourceIcon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAom1a0i6FlTwoaoM6I78S86LM3rt_i-_XMf-S2xmzKgKeF0oUdrMNGhAmRSEMsUtps_nOHt0xvk5MNkVDQIR67fkglCb__x1qhtHbCpT2Qon2KULsHTmf1eh6M8r4ufrSOX7suCEAXJ1aRVbqmE2QUV8XR6cT5wV6eP5jnJswumUoHZSiwLR9Se2LYaeMGzGFu_TeqloyX8pqGdOW8UxycNdiaU578udzuKLVPwTm_7CVd2bIIPRTWVTLLMkB06716T7rjoUwt42E'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcaZugrsnIRXWaVm0fl9_Ud8EMzXci0UP6VqVWZA4UAEkHJq5bgpu9dhD21dhuffVn_83UfYDChIqNxJ2nGXWxHDcmX-g8qc0QSsX3htjMKV7aEGeZM0tjGH6-cOf-MVTsIM4R4s7Ag-lMR_UxABxRqDIy8aX043TekCUNQLClPjQlVc0gLAC0f3ruZ81iHN0yB9Jx4D7qViObdPClH3uosGx7OYsuJe2Fd4xt1beUmlKQ-uI9yXkCRtSc2uF_5EbroRSHcLvO_0g',
    location: 'Проект: Санкт-Петербург, 2023',
    name: 'Дмитрий К.',
    review: 'Калькулятор цены был точным, никаких сюрпризов в конце. Качество отделки дерева точно такое же, как мы видели в шоуруме. Рекомендую!',
    style: 'Классика',
    source: 'Yandex' as const,
    sourceIcon: 'map'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3ZVmf5Elp4EyhXsTeSYYPBx06EhgpP0xuP3dg7X-7EuhXRb8Y_cmxaQH2fhMNVCNehBAaEMp2dzzGxrATSEkShIfd33yum7scZUnD1LYC78bnAH0gnBBc_5G3kM4-te4D0rknns8pIzKwf7MA0tpKOGQUrJTcGCZ-T3E4mYsziRMMHnLQzQpzFGF_FM4rwF-7GXsvk2gH26cR6Gn2GHdu-uWznQfJoNFIWGXF2fAd0hxYBHCFtptuF8BW3x0rKAtOau_tUjiQNDE',
    location: 'Проект: Казань, 2024',
    name: 'Анна М.',
    review: 'Потрясающие решения для хранения в моей маленькой квартире. Не могу поверить, сколько места у меня теперь есть. Дизайнеры были очень терпеливы к моим просьбам.',
    style: 'Минимализм',
    source: 'Instagram' as const,
    sourceIcon: 'photo_camera'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbWKCkPt6uUM4pwkQS6Wr3C45UH1Ow3MTf-htV-uWfKV2ZOimYRS0dubdaEcunmkFZa25EbqzVzeqMLZ7Gngekn-SNAnmmSUSNiqjRcIdLYAp1cvSYG7mktHzswHyHfFeNc9IpoMPyuVerLMqFnlBpxA22F9CVknnMV-CIAKvT3LQ9U6JEPIz9piI7E1y3AUuRNHcP9BlfGDGjqE_QMjQbxe_mS4Q1Ev5PV267lI7WrmJXv_r-D5jyF4vDNQUrwWCpQHzKxlMJQ-U',
    location: 'Проект: Сочи, 2023',
    name: 'Сергей П.',
    review: 'Материалы высшего качества. Установщики были чистоплотными и уважительными. Конечный результат превзошел наши ожидания, особенно островная столешница.',
    style: 'Люкс',
    source: 'VK' as const,
    sourceIcon: 'thumb_up'
  }
];

export default function ReviewsPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-dark dark:text-slate-100 antialiased overflow-x-hidden min-h-screen flex flex-col">
      <Header onOpenQuiz={openQuiz} />
      <main className="flex-1 flex flex-col items-center w-full py-12 lg:py-20 px-4 md:px-10 lg:px-40">
        <div className="max-w-7xl w-full flex flex-col gap-12">
           {/* Section Header */}
           <div className="flex flex-col items-center text-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider mb-2">
                 <span className="material-symbols-outlined !text-sm">verified</span>
                 Нам доверяют 500+ семей
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-dark dark:text-white tracking-tight">
                 Реальные Кухни, Реальные Истории
              </h2>
              <p className="text-text-secondary dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
                 Посмотрите, как мы преобразили дома с нашими индивидуальными проектами. Читайте настоящие отзывы наших довольных клиентов.
              </p>
           </div>

           {/* Testimonials Carousel (simplified horizontal scroll) */}
           <div className="relative w-full group/carousel">
              {/* Navigation Buttons (Visual only as native scroll works fine) */}
              <button aria-label="Previous slide" className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 size-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 text-slate-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 cursor-pointer">
                 <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button aria-label="Next slide" className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 size-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 text-slate-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 cursor-pointer">
                 <span className="material-symbols-outlined">arrow_forward</span>
              </button>

              {/* Cards Container */}
              <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]">
                 {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                 ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-6">
                 <button className="w-3 h-3 rounded-full bg-primary transition-all hover:bg-green-400"></button>
                 <button className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700 transition-all hover:bg-primary"></button>
                 <button className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700 transition-all hover:bg-primary"></button>
                 <button className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700 transition-all hover:bg-primary"></button>
              </div>
           </div>

           {/* Bottom CTA */}
           <div className="flex flex-col items-center gap-6 mt-4">
              <p className="text-text-secondary dark:text-slate-400 font-medium text-center">
                 Готовы создать кухню своей мечты? Узнайте стоимость за 2 минуты.
              </p>
              <button
                 onClick={openQuiz}
                 className="group relative flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-primary hover:bg-green-400 text-text-dark text-lg font-bold shadow-lg shadow-green-500/20 transition-all hover:-translate-y-1 hover:shadow-green-500/40"
              >
                 <span className="mr-2">Получить расчет</span>
                 <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
           </div>
        </div>
      </main>
      <Footer />
      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />
    </div>
  );
}
