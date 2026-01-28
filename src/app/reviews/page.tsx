'use client';

import React, { useState, useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import dynamic from 'next/dynamic';

const QuizModal = dynamic(() => import('@/components/quiz/QuizModal').then((mod) => mod.QuizModal));

const reviews = [
   {
      id: 1,
      name: 'Елена Смирнова',
      location: 'Москва, Чертаново',
      review: 'Заказывали кухню с островом. Сделали за 16 дней, как и обещали. Качество отличное, фурнитура Blum работает идеально, всё открывается плавно и бесшумно. Особенно понравилось, что замерщик Алексей сразу предложил несколько вариантов планировки и помог определиться со стилем. 3D-визуализация была один в один с результатом!',
      rating: 5,
      date: 'Январь 2026',
      style: 'Современный с островом',
      price: '620 000 ₽',
   },
   {
      id: 2,
      name: 'Дмитрий Козлов',
      location: 'Москва, Бутово',
      review: 'Долго выбирали между несколькими компаниями, объездили штук 10 салонов. В КухниПро привлекла честная цена без скрытых доплат — что посчитали, то и заплатили. Кухня получилась точно как на 3D-визуализации. Монтажники Сергей и Виктор работали аккуратно, после себя всё убрали. Рекомендую!',
      rating: 5,
      date: 'Декабрь 2025',
      style: 'Минимализм',
      price: '485 000 ₽',
   },
   {
      id: 3,
      name: 'Анна Петрова',
      location: 'Москва, Митино',
      review: 'Маленькая кухня 6 кв.м в хрущёвке, но ребята вместили всё необходимое: посудомойку, духовку, варочную панель. Умные решения для хранения просто спасение! Выдвижные ящики до самого верха, карусель в углу. Установка заняла всего день. Очень довольна!',
      rating: 5,
      date: 'Ноябрь 2025',
      style: 'Угловая компактная',
      price: '290 000 ₽',
   },
   {
      id: 4,
      name: 'Сергей Игнатьев',
      location: 'Подольск',
      review: 'Третья кухня от этой фабрики. Делали родителям, себе и сестре. Всегда отличный результат, поэтому возвращаемся снова. Цены действительно адекватные по сравнению с салонами, сроки всегда соблюдают. Отдельное спасибо дизайнеру Марине за терпение с нашими бесконечными правками.',
      rating: 5,
      date: 'Октябрь 2025',
      style: 'Классика с патиной',
      price: '750 000 ₽',
   },
   {
      id: 5,
      name: 'Ольга Морозова',
      location: 'Химки',
      review: 'Очень боялась заказывать кухню онлайн, но всё прошло гладко. Менеджер Наталья была на связи постоянно, отвечала даже в выходные. Кухня в скандинавском стиле — просто мечта! Белые фасады, деревянные акценты, открытые полки. Соседи уже записали контакт.',
      rating: 5,
      date: 'Сентябрь 2025',
      style: 'Скандинавский',
      price: '520 000 ₽',
   },
   {
      id: 6,
      name: 'Михаил Васильев',
      location: 'Москва, Строгино',
      review: 'Заказывал кухню-студию с барной стойкой. Сложный проект с нестандартной планировкой, но ребята справились на отлично. Особенно впечатлила интеграция техники — всё встроено идеально, ни одной щели. Подсветка под верхними шкафами создаёт уютную атмосферу вечером.',
      rating: 5,
      date: 'Август 2025',
      style: 'Лофт с баром',
      price: '580 000 ₽',
   },
];

const stats = [
   { number: '547+', label: 'Довольных клиентов', icon: 'groups' },
   { number: '4.9', label: 'Рейтинг на Яндексе', icon: 'star' },
   { number: '98%', label: 'Рекомендуют нас', icon: 'thumb_up' },
   { number: '6 лет', label: 'На рынке', icon: 'workspace_premium' },
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

         <main className="flex-grow flex flex-col py-8 md:py-12">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
               {/* Page Header */}
               <div className="mb-8 md:mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                     <span className="material-symbols-outlined !text-sm">reviews</span>
                     Отзывы
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-dark tracking-tight mb-4">
                     Что говорят наши клиенты
                  </h1>
                  <p className="text-text-secondary text-lg max-w-2xl">
                     Реальные отзывы от реальных людей. Мы гордимся тем, что 98% клиентов рекомендуют нас друзьям и знакомым.
                  </p>
               </div>

               {/* Stats */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
                  {stats.map((stat, index) => (
                     <div
                        key={index}
                        className="bg-gray-50 rounded-2xl p-5 md:p-6 text-center hover:bg-primary/5 hover:shadow-md transition-all duration-300"
                     >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                           <span className="material-symbols-outlined text-primary !text-[24px]">{stat.icon}</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-black text-text-dark mb-1">{stat.number}</p>
                        <p className="text-xs md:text-sm text-text-secondary">{stat.label}</p>
                     </div>
                  ))}
               </div>

               {/* Navigation */}
               <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-text-dark">Последние отзывы</h2>
                  <div className="flex gap-2">
                     <button
                        onClick={() => scroll('left')}
                        className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-text-dark hover:bg-primary hover:text-text-dark hover:border-primary transition-all cursor-pointer shadow-sm"
                        aria-label="Предыдущий отзыв"
                     >
                        <span className="material-symbols-outlined !text-[20px]">arrow_back</span>
                     </button>
                     <button
                        onClick={() => scroll('right')}
                        className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-text-dark hover:bg-primary hover:text-text-dark hover:border-primary transition-all cursor-pointer shadow-sm"
                        aria-label="Следующий отзыв"
                     >
                        <span className="material-symbols-outlined !text-[20px]">arrow_forward</span>
                     </button>
                  </div>
               </div>

               {/* Reviews Carousel */}
               <div
                  ref={scrollRef}
                  className="flex overflow-x-auto gap-5 pb-4 snap-x snap-mandatory scrollbar-hide"
               >
                  {reviews.map((review) => (
                     <div
                        key={review.id}
                        className="snap-start shrink-0 w-[340px] md:w-[400px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 card-hover flex flex-col"
                     >
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-4">
                           <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-white font-bold text-lg">
                              {review.name.split(' ').map(n => n[0]).join('')}
                           </div>
                           <div className="flex-1">
                              <p className="font-bold text-text-dark">{review.name}</p>
                              <p className="text-xs text-text-secondary">{review.location}</p>
                           </div>
                           <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium">
                              <span className="material-symbols-outlined !text-[12px]">verified</span>
                              Проверен
                           </span>
                        </div>

                        {/* Rating */}
                        <div className="flex gap-0.5 mb-4">
                           {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="material-symbols-outlined text-yellow-400 !text-[18px] filled">star</span>
                           ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-text-dark text-sm leading-relaxed mb-4 flex-1">
                           &quot;{review.review}&quot;
                        </p>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-2 mb-4">
                           <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 rounded-full text-xs font-medium text-text-secondary">
                              <span className="material-symbols-outlined !text-[14px]">style</span>
                              {review.style}
                           </span>
                           <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">
                              <span className="material-symbols-outlined !text-[14px]">payments</span>
                              {review.price}
                           </span>
                        </div>

                        {/* Date */}
                        <p className="text-xs text-text-secondary pt-3 border-t border-gray-100">
                           {review.date}
                        </p>
                     </div>
                  ))}
               </div>

               {/* CTA Section */}
               <div className="mt-16 md:mt-20 p-8 md:p-12 bg-gray-50 rounded-2xl text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
                     Присоединяйтесь к довольным клиентам
                  </h2>
                  <p className="text-text-secondary mb-6 max-w-lg mx-auto">
                     Рассчитайте стоимость вашей кухни за 2 минуты и получите персональное предложение.
                  </p>
                  <button
                     onClick={openQuiz}
                     className="inline-flex items-center gap-2 bg-primary hover:bg-green-400 text-text-dark px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                     <span className="material-symbols-outlined">calculate</span>
                     Рассчитать стоимость
                  </button>
               </div>
            </div>
         </main>

         <Footer />

         {isQuizOpen && <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />}
      </div>
   );
}
