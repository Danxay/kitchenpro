'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import dynamic from 'next/dynamic';

const QuizModal = dynamic(() => import('@/components/quiz/QuizModal').then((mod) => mod.QuizModal));

const projects = [
  {
    id: 1,
    image: '/modern_white_kitchen_island_1769605750150.webp',
    price: '485 000 ₽',
    duration: '14 дней',
    area: '12 м²',
    title: 'Современная белая кухня с островом',
    description: 'Просторная кухня в минималистичном стиле с островной зоной для готовки. Фасады из МДФ с покрытием soft-touch, столешница из искусственного камня Caesarstone.',
    style: 'Минимализм',
    material: 'МДФ Soft-touch',
    client: 'Семья Смирновых, Москва',
  },
  {
    id: 2,
    image: '/loft_kitchen_dark_1769605279295.webp',
    price: '620 000 ₽',
    duration: '18 дней',
    area: '18 м²',
    title: 'Кухня-гостиная в стиле лофт',
    description: 'Открытое пространство с кухонным островом и барной стойкой. Сочетание тёмного дерева, металла и бетонных текстур. Встроенная техника Bosch.',
    style: 'Лофт',
    material: 'Шпон дуба',
    client: 'Дмитрий К., Москва',
  },
  {
    id: 3,
    image: '/compact_corner_kitchen_1769605364732.webp',
    price: '380 000 ₽',
    duration: '12 дней',
    area: '8 м²',
    title: 'Компактная угловая кухня',
    description: 'Эргономичное решение для небольшого пространства. Максимум систем хранения, выдвижные механизмы Blum. Светлые тона визуально расширяют помещение.',
    style: 'Современный',
    material: 'ЛДСП Egger',
    client: 'Анна П., Одинцово',
  },
  {
    id: 4,
    image: '/classic_beige_kitchen_1769605447061.webp',
    price: '750 000 ₽',
    duration: '21 день',
    area: '22 м²',
    title: 'Классическая кухня с патиной',
    description: 'Роскошная кухня в классическом стиле с фасадами из массива ясеня. Патинирование под старину, резные карнизы и пилястры.',
    style: 'Классика',
    material: 'Массив ясеня',
    client: 'Семья Игнатьевых, Подольск',
  },
  {
    id: 5,
    image: '/linear_studio_kitchen_1769605522246.webp',
    price: '290 000 ₽',
    duration: '10 дней',
    area: '6 м²',
    title: 'Линейная кухня для студии',
    description: 'Компактное решение для квартиры-студии. Всё необходимое на 3 метрах: варочная панель, духовка, посудомойка. Фасады с интегрированными ручками.',
    style: 'Минимализм',
    material: 'МДФ эмаль',
    client: 'Екатерина С., Москва',
  },
  {
    id: 6,
    image: '/scandinavian_kitchen_light_1769605481983.webp',
    price: '520 000 ₽',
    duration: '16 дней',
    area: '15 м²',
    title: 'Кухня в скандинавском стиле',
    description: 'Светлая и уютная кухня с деревянными акцентами. Открытые полки, встроенная подсветка, много естественного света.',
    style: 'Скандинавский',
    material: 'МДФ + шпон',
    client: 'Ольга М., Химки',
  },
];

const styles = ['Все', 'Минимализм', 'Лофт', 'Современный', 'Классика', 'Скандинавский'];

export default function PortfolioPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('Все');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  const filteredProjects = selectedStyle === 'Все'
    ? projects
    : projects.filter(p => p.style === selectedStyle);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white font-display text-text-dark antialiased">
      <Header onOpenQuiz={openQuiz} />

      <main className="flex-grow flex flex-col py-8 md:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Page Header */}
          <ScrollReveal animation="fade-up">
            <div className="mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <span className="material-symbols-outlined !text-sm">photo_library</span>
                Портфолио
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-dark tracking-tight mb-4">
                Наши работы
              </h1>
              <p className="text-text-secondary text-lg max-w-2xl">
                Более 500 реализованных проектов. Каждая кухня — уникальное решение под ваш интерьер и потребности.
              </p>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => {
                    setSelectedStyle(style);
                    setVisibleCount(6);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer hover:scale-105 ${selectedStyle === style
                    ? 'bg-primary text-text-dark shadow-md'
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                    }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {visibleProjects.map((project, index) => (
              <ScrollReveal key={project.id} animation="fade-up" delay={index * 100}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer text-left"
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
                      <p className="text-sm text-white/80 mb-3">{project.style} • {project.area}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                        Подробнее <span className="material-symbols-outlined !text-[16px]">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center">
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 text-text-dark font-medium transition-all cursor-pointer hover:scale-105"
              >
                <span className="material-symbols-outlined">expand_more</span>
                Показать ещё
              </button>
            </div>
          )}

          {/* CTA Section */}
          <ScrollReveal animation="fade-up">
            <div className="mt-16 md:mt-20 p-8 md:p-12 bg-gray-50 rounded-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
                Хотите такую же кухню?
              </h2>
              <p className="text-text-secondary mb-6 max-w-lg mx-auto">
                Рассчитайте стоимость вашего проекта за 2 минуты. Бесплатная консультация и 3D-визуализация.
              </p>
              <button
                onClick={openQuiz}
                className="inline-flex items-center gap-2 bg-primary hover:bg-green-400 text-text-dark px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/25 hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 cursor-pointer"
              >
                <span className="material-symbols-outlined">calculate</span>
                Рассчитать стоимость
              </button>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-scale-in">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:scale-110 transition-all z-50 cursor-pointer bg-white/80 rounded-full"
              aria-label="Закрыть"
            >
              <span className="material-symbols-outlined !text-[24px]">close</span>
            </button>

            <div className="flex flex-col md:flex-row overflow-y-auto">
              <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[400px] shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${selectedProject.image}')` }}
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-3">
                  {selectedProject.style}
                </span>
                <h2 className="text-2xl font-bold text-text-dark mb-3">{selectedProject.title}</h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">{selectedProject.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                    <p className="text-xs text-text-secondary mb-1">Стоимость</p>
                    <p className="text-lg font-bold text-text-dark">{selectedProject.price}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                    <p className="text-xs text-text-secondary mb-1">Срок</p>
                    <p className="text-lg font-bold text-text-dark">{selectedProject.duration}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                    <p className="text-xs text-text-secondary mb-1">Площадь</p>
                    <p className="text-lg font-bold text-text-dark">{selectedProject.area}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                    <p className="text-xs text-text-secondary mb-1">Материал</p>
                    <p className="text-lg font-bold text-text-dark">{selectedProject.material}</p>
                  </div>
                </div>

                <p className="text-xs text-text-secondary mb-4">
                  <span className="material-symbols-outlined !text-[14px] mr-1">person</span>
                  Клиент: {selectedProject.client}
                </p>

                <button
                  onClick={() => {
                    setSelectedProject(null);
                    openQuiz();
                  }}
                  className="mt-auto w-full bg-primary hover:bg-green-400 text-text-dark py-3 rounded-xl font-bold transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Хочу такую кухню
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isQuizOpen && <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />}
    </div>
  );
}
