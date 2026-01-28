'use client';

import React, { useState, useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuizModal } from '@/components/quiz/QuizModal';

const reviews = [
   {
      id: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqK_3Irhrthcpa1i8nHvm8pl3PakQSZmqQaQBPl-bMP4XfGPu0SeJdhKhNQhaQd337WCNZQ19mLEsFKniQJh2ygHWBMtT05UHODLEAJOYBQytwUrwduRTcrY5fCbnJpFAd67mN6W-QUQoQVR3_mkP9cyMAyrp6pOlDYW-bWkDWFyotyYEeDuPjBWC7D7JyDHdMK_Ds_beT2vSRY7AivION7u-MSOKR60EJSMIM3SM2FVC1etVSML32T5kgTfRSOnvTPYZhmTSzZgM',
      location: 'Москва, 2023',
      name: 'Елена С.',
      review: 'Установка прошла невероятно быстро и профессионально. Я беспокоилась о сроках, но они закончили на 2 дня раньше. Ящики с доводчиками меняют все! Очень рекомендую эту компанию всем своим друзьям.',
      style: 'Современный',
      rating: 5,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcLqh4Pg28KA1ZyzWGj1mgRgDwShZhKi_cegc9csGOeUFmZRBLkkre8kp7zzwUiim2zPUlH22djs1YAaD_TBi1bvkynDONq7L6WTh3D-v4OLW8aZpbG5an7kgohy8tFlQESmHFBHfnfB4ZuzFGwjTRAdxvbhsocm-Rzwp4e1Qxpv9PvXMd3xjSRTL8gMwFiCGlAYoAjepPDRD7EA4YPvTE697raSJ2J7Po8RvNiZkz8NTLV89ZeY7Mtxr38ZUI03BHFMNOHuPgjRA',
   },
   {
      id: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcaZugrsnIRXWaVm0fl9_Ud8EMzXci0UP6VqVWZA4UAEkHJq5bgpu9dhD21dhuffVn_83UfYDChIqNxJ2nGXWxHDcmX-g8qc0QSsX3htjMKV7aEGeZM0tjGH6-cOf-MVTsIM4R4s7Ag-lMR_UxABxRqDIy8aX043TekCUNQLClPjQlVc0gLAC0f3ruZ81iHN0yB9Jx4D7qViObdPClH3uosGx7OYsuJe2Fd4xt1beUmlKQ-uI9yXkCRtSc2uF_5EbroRSHcLvO_0g',
      location: 'Санкт-Петербург, 2023',
      name: 'Дмитрий К.',
      review: 'Калькулятор цены был точным, никаких сюрпризов в конце. Качество отделки дерева точно такое же, как мы видели в шоуруме. Очень доволен результатом и сервисом!',
      style: 'Классика',
      rating: 5,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkoot5NKZUtng2ZFhA2oCDWqYmcrJfX8qQHHWR-FGfNu65gjbqsqxGlYVK08Z7vz5-1uCUxfvd_s2KUF4kkRzBNISsA86CnAf6jkH7IGM8PUC3bfxv4qJwZpDca_OJ5YiH4mzWI0ANcNzNcjjOHklmQMKaztjXnr1nb9wUDndVUiF4GFhCFOiXZ1Qe2CS5hKlY0hQOcgDmfPwZg0CANHMXk3LARuYjMsx-gQKb6vqFGZ2rVxevCHF1fC0Bn_hvw6QKDrVhG-bn78M',
   },
   {
      id: 3,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3ZVmf5Elp4EyhXsTeSYYPBx06EhgpP0xuP3dg7X-7EuhXRb8Y_cmxaQH2fhMNVCNehBAaEMp2dzzGxrATSEkShIfd33yum7scZUnD1LYC78bnAH0gnBBc_5G3kM4-te4D0rknns8pIzKwf7MA0tpKOGQUrJTcGCZ-T3E4mYsziRMMHnLQzQpzFGF_FM4rwF-7GXsvk2gH26cR6Gn2GHdu-uWznQfJoNFIWGXF2fAd0hxYBHCFtptuF8BW3x0rKAtOau_tUjiQNDE',
      location: 'Казань, 2024',
      name: 'Анна М.',
      review: 'Потрясающие решения для хранения в моей маленькой квартире. Не могу поверить, сколько места у меня теперь есть. Дизайнеры были очень терпеливы к моим просьбам и учли все пожелания.',
      style: 'Минимализм',
      rating: 5,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTQRs5RGKqf2F5e4qfz0tR7GqcCExcFYK27HCXF-aAEi6-jwbDwJKUfoHopBq3LUfElqwSvB0uQVB80OdZ-fowJnFu-QbSwa6nDQhBFIx6sTR-11xKb0vUb3GHS9xTfMdOD9Ua-1ejT_u6KxFqYx9TFfz-yLPF_owjSsxhWAcDSe49C10CMMcMMwupqE1gOPIt325cWb_BDz0OCOXtlNliUPCi1D-5_aj7gWjCOPNfVOJHdwm4eJ-VJqKAkV9QqqgZKq70udOXpIU',
   },
   {
      id: 4,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbWKCkPt6uUM4pwkQS6Wr3C45UH1Ow3MTf-htV-uWfKV2ZOimYRS0dubdaEcunmkFZa25EbqzVzeqMLZ7Gngekn-SNAnmmSUSNiqjRcIdLYAp1cvSYG7mktHzswHyHfFeNc9IpoMPyuVerLMqFnlBpxA22F9CVknnMV-CIAKvT3LQ9U6JEPIz9piI7E1y3AUuRNHcP9BlfGDGjqE_QMjQbxe_mS4Q1Ev5PV267lI7WrmJXv_r-D5jyF4vDNQUrwWCpQHzKxlMJQ-U',
      location: 'Сочи, 2023',
      name: 'Сергей П.',
      review: 'Материалы высшего качества. Установщики были чистоплотными и уважительными. Конечный результат превзошел наши ожидания, особенно островная столешница. Это действительно премиум-сервис!',
      style: 'Люкс',
      rating: 5,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkoot5NKZUtng2ZFhA2oCDWqYmcrJfX8qQHHWR-FGfNu65gjbqsqxGlYVK08Z7vz5-1uCUxfvd_s2KUF4kkRzBNISsA86CnAf6jkH7IGM8PUC3bfxv4qJwZpDca_OJ5YiH4mzWI0ANcNzNcjjOHklmQMKaztjXnr1nb9wUDndVUiF4GFhCFOiXZ1Qe2CS5hKlY0hQOcgDmfPwZg0CANHMXk3LARuYjMsx-gQKb6vqFGZ2rVxevCHF1fC0Bn_hvw6QKDrVhG-bn78M',
   },
];

export default function ReviewsPage() {
   const [isQuizOpen, setIsQuizOpen] = useState(false);
   const scrollRef = useRef<HTMLDivElement>(null);

   const openQuiz = () => setIsQuizOpen(true);
   const closeQuiz = () => setIsQuizOpen(false);

   const scroll = (direction: 'left' | 'right') => {
      if (scrollRef.current) {
         const scrollAmount = 400;
         scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
         });
      }
   };

   return (
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white font-display text-text-dark antialiased">
         <Header onOpenQuiz={openQuiz} />

         <main className="flex-1 flex flex-col items-center w-full py-12 lg:py-20 px-4 md:px-10">
            <div className="max-w-7xl w-full flex flex-col gap-12">
               {/* Section Header */}
               <div className="flex flex-col items-center text-center gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                     <span className="material-symbols-outlined !text-sm">verified</span>
                     Нам доверяют 500+ семей
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight">
                     Реальные Кухни, Реальные Истории
                  </h1>
                  <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
                     Посмотрите, как мы преобразили дома с нашими индивидуальными проектами. Читайте настоящие отзывы наших довольных клиентов.
                  </p>
               </div>

               {/* Navigation Buttons */}
               <div className="flex justify-center gap-3">
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

               {/* Reviews Carousel */}
               <div className="relative w-full">
                  <div
                     ref={scrollRef}
                     className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]"
                  >
                     {reviews.map((review) => (
                        <div
                           key={review.id}
                           className="snap-start shrink-0 w-[340px] md:w-[400px] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                           {/* Project Image */}
                           <div
                              className="h-48 bg-cover bg-center relative"
                              style={{ backgroundImage: `url('${review.image}')` }}
                           >
                              <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium flex items-center gap-1">
                                 <span className="material-symbols-outlined !text-[14px]">location_on</span>
                                 Проект: {review.location}
                              </div>
                           </div>

                           {/* Content */}
                           <div className="p-5 flex flex-col gap-4">
                              {/* Rating */}
                              <div className="flex gap-1">
                                 {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-yellow-400 !text-[18px] filled">star</span>
                                 ))}
                              </div>

                              {/* Review Text */}
                              <p className="text-text-dark text-sm leading-relaxed line-clamp-4">
                                 &quot;{review.review}&quot;
                              </p>

                              {/* Author */}
                              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                                 <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                 />
                                 <div>
                                    <p className="font-bold text-sm text-text-dark">{review.name}</p>
                                    <p className="text-xs text-text-secondary">Стиль: {review.style}</p>
                                 </div>
                                 <div className="ml-auto">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                                       <span className="material-symbols-outlined !text-[14px]">verified</span>
                                       Подтвержден
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Stats */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-gray-100">
                  <div className="text-center">
                     <p className="text-3xl md:text-4xl font-black text-primary">500+</p>
                     <p className="text-sm text-text-secondary mt-1">Довольных клиентов</p>
                  </div>
                  <div className="text-center">
                     <p className="text-3xl md:text-4xl font-black text-text-dark">4.9</p>
                     <p className="text-sm text-text-secondary mt-1">Средняя оценка</p>
                  </div>
                  <div className="text-center">
                     <p className="text-3xl md:text-4xl font-black text-text-dark">5 лет</p>
                     <p className="text-sm text-text-secondary mt-1">Гарантия</p>
                  </div>
                  <div className="text-center">
                     <p className="text-3xl md:text-4xl font-black text-text-dark">14 дней</p>
                     <p className="text-sm text-text-secondary mt-1">Средний срок</p>
                  </div>
               </div>

               {/* Bottom CTA */}
               <div className="flex flex-col items-center gap-6 mt-4">
                  <p className="text-text-secondary font-medium text-center">
                     Готовы создать кухню своей мечты? Узнайте стоимость за 2 минуты.
                  </p>
                  <button
                     onClick={openQuiz}
                     className="group relative flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-primary hover:bg-green-400 text-text-dark text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-primary/30"
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
