'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuizModal } from '@/components/quiz/QuizModal';

const allProjects = [
  {
    id: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxkmIS_aEzAnh0dD0qimxfsIlxEpswKJnPAW4Pu_d3GGrQ7kv7GCRK99dnLUf6i5JyzUq3O8bl3DpNljSVMlCl0vbcipjceUa300egi-5TGjAE8PC6ycjpwBvB-FHP0vkAmEUeLh9Tnfqy-Cn5IGFpJ0x-4iOJ-tXLJmW5bxbAe1is9PlN6qAHOnLpaRoMWSCPiH_4r8giU2t03m48NonZIRPEzQ-TlGPgQy73XVy9ZjKalpYlCu5v8WWJl5Jq3xVhCJMvzSTuj-o',
    price: '520 000 ₽',
    duration: '14 Дней',
    title: 'Сканди-Модерн Кухня',
    materials: 'Egger, Blum',
    style: 'Современный',
    description: 'Светлая кухня в скандинавском стиле с акцентами из натурального дерева.',
  },
  {
    id: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCxb5hU_DF5j9YxfX7RXk6Kwkpb-83I3I6-dHgKoPop_8rZqfncP4PZJONlWD81ryMesl0rl95gbHS1DsiWlAY5ppvbSyYfkiTfYX3nEV-2UtR4W0-PFvRAe7RaZBe3grTYzrj1LEs1Ihz_BgZUDPctnyTCqolhKCzOGIsB8OoHpxuZSEBPhfvWS08GeM43Fwmf0xsbxUuOdW3toa3ARvMyPh73x0_ZCtdiwXFkQGpHfwKhxVEKXVX0a_lS9UOHF_XNqN76mXCrNY',
    price: '480 000 ₽',
    duration: '10 Дней',
    title: 'Минимализм White',
    materials: 'Высокий глянец, Камень',
    style: 'Современный',
    description: 'Белоснежная кухня с глянцевыми фасадами и каменной столешницей.',
  },
  {
    id: 3,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4r70GxKZ_1MVbz6YrsDiRCybIfLw2TkqQS-Rc3uJ7UPCY_dC4Fmvp0kGMLqTD_S8PX-lyOf55ZPaexnkJNZG--urVc3DTDH0dsJtcjjzfVGuGpMqj-j1Q1uv0mdmvkrETFgDnzHIuUYMxgyUpJmrp3gKhPSyEWnpq_vd3R_vRKnImvVh8wJs7_AaK93dWWdKE15HTA_LQNeir9JxVsEYSI9SM8yOJOE5-7X9UltMxipS-e8Y88SVfwvs4f88mIOA42B7M4A1Yq_Q',
    price: '650 000 ₽',
    duration: '21 День',
    title: 'Индустриальный Лофт',
    materials: 'Матовый черный, Бетон',
    style: 'Лофт',
    description: 'Стильная кухня в индустриальном стиле с темными фасадами.',
  },
  {
    id: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAocT3_a3AIozxloEFVlgd86TibFU2ox3aDr5CO6Umhfm0KrO47TNd74nEf8uVqUki_afOxCB7RHXzn3H6W2QFthEYrRi_kIMK-podUfYyv1_hqJFpaEqznhzBXzD5bCxsVPpyoduE3o9EC-cqr58u4njrVjgi2P0bb9-rqGggsfhEnV9RvVE6A7tr0z15NC8KaJSAlWFf3yBcTGAItTXH-3eu237J_-Dxu7wRSnx1Y_YUT74Wt00maKrTG3lF_s4zx8EUZ85WHC-g',
    price: '350 000 ₽',
    duration: '7 Дней',
    title: 'Компактная Студия',
    materials: 'Ламинат, МДФ',
    style: 'Маленькие',
    description: 'Компактное решение для небольших квартир с максимальной функциональностью.',
  },
  {
    id: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeHeWG34vCoKoK8zLG6qqVIQled9clyv8WVUklgR1wNtpk50ErfF9HK102JmbDU24n1Y_5u1pKOPBYvXe3JdSEn4TTRtPs4oXMtlYiVlaO4124_l53teHioLKnD4rHkMrI6LdmM97nwYhskIXYFpm2ANMacY14T6W5Jyio3FfKZesHpwhBmW4azMyaqRL-wjZqRf8Q4vg80R62nRamVGnxemZJFZUbiI6FpPcP2r6aXggwGbikrZTQVGlsZYEWgE6CdST03gv9BGE',
    price: '710 000 ₽',
    duration: '25 Дней',
    title: 'Midnight Blue Luxury',
    materials: 'Массив, Латунь, Мрамор',
    style: 'Классика',
    description: 'Роскошная кухня в классическом стиле с мраморной столешницей.',
  },
  {
    id: 6,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChWe-goXYVpVLBEMj6O3onETs_OSZKf4dvgRrjPCtXHLEfbbDpfRVQKChhtULCDewZ39JU1W5ljnd_iZugQP2gp714xh37JLYEcK7lBaO8e-gxTqTaaf1wH5R_46u5EkWwVrfTB4YoYlBbAYeVPnOcLnx4yM120QemcvqhsfVGTHxK-CfJQ1UZFixSdMcQG5lwk7wyf9fGdQHkGLkytWAkCdBX3rz9vTdBrMRREW8iq1u8F3ATUFfWuBKvEOcrwwSFpPdnT8Ydlfs',
    price: '590 000 ₽',
    duration: '18 Дней',
    title: 'Классический Фармхаус',
    materials: 'Шейкер, Дерево',
    style: 'Классика',
    description: 'Уютная кухня в деревенском стиле с теплыми оттенками дерева.',
  },
];

const styleFilters = ['Все', 'Современный', 'Лофт', 'Классика', 'Маленькие'];

export default function PortfolioPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Все');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  // Фильтрация проектов
  const filteredProjects = activeFilter === 'Все'
    ? allProjects
    : allProjects.filter(p => p.style === activeFilter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white font-display text-text-dark antialiased">
      <Header onOpenQuiz={openQuiz} />
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-8 py-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto gap-4">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-text-secondary">
            <span className="mr-1 size-2 rounded-full bg-primary" />
            Обновлено 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-dark">
            Реальные Кухни, <span className="text-primary">Честные Цены.</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-[600px]">
            Посмотрите наши недавние работы. Мы верим в прозрачность — узнайте точную стоимость и сроки для каждого проекта.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center overflow-x-auto pb-4">
          <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
            {styleFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setVisibleCount(6);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${activeFilter === filter
                    ? 'bg-white shadow-sm text-text-dark font-bold'
                    : 'text-text-secondary hover:bg-white/50'
                  }`}
              >
                {filter === 'Все' ? 'Все стили' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 shadow-md cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
                <div className="flex items-center gap-1.5 rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-text-dark shadow-sm">
                  <span className="material-symbols-outlined !text-[14px]">payments</span>
                  {project.price}
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-text-dark shadow-sm">
                  <span className="material-symbols-outlined !text-[14px]">schedule</span>
                  {project.duration}
                </div>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6 z-10">
                <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-col gap-1 mb-4">
                    <p className="text-sm text-gray-200 flex items-center gap-2">
                      <span className="material-symbols-outlined !text-[16px] text-primary">carpenter</span>
                      <span className="opacity-90">Материалы: {project.materials}</span>
                    </p>
                    <p className="text-sm text-gray-200 flex items-center gap-2">
                      <span className="material-symbols-outlined !text-[16px] text-primary">palette</span>
                      <span className="opacity-90">Стиль: {project.style}</span>
                    </p>
                  </div>
                  <span className="text-sm font-bold text-primary flex items-center gap-1">
                    Смотреть проект <span className="material-symbols-outlined !text-[16px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadMore}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold text-text-dark transition-colors cursor-pointer"
            >
              Загрузить еще проекты
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-gray-300 !text-[64px]">search_off</span>
            <p className="text-text-secondary mt-4">Проектов в этой категории пока нет</p>
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="w-full bg-gray-50 py-20 px-4 md:px-10">
        <div className="max-w-[960px] mx-auto flex flex-col items-center gap-8 text-center">
          <div className="rounded-full bg-primary/10 p-4">
            <span className="material-symbols-outlined !text-4xl text-primary">calculate</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-text-dark max-w-[720px]">
            Понравилось увиденное? Узнайте стоимость вашей кухни за 2 минуты.
          </h2>
          <p className="text-base text-text-secondary max-w-[500px]">
            Никаких скрытых платежей. Получите мгновенную смету на основе вашей планировки и материалов.
          </p>
          <button
            onClick={openQuiz}
            className="group flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-text-dark text-base font-bold shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Рассчитать стоимость кухни</span>
            <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
          <p className="text-sm text-text-secondary flex items-center gap-1">
            <span className="material-symbols-outlined !text-[16px] text-primary">check_circle</span>
            Бесплатно и без обязательств
          </p>
        </div>
      </section>

      <Footer />

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative z-10 w-full max-w-[900px] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-50 cursor-pointer bg-white/80 rounded-full"
            >
              <span className="material-symbols-outlined !text-[24px]">close</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div
                className="h-64 md:h-auto md:min-h-[400px] bg-cover bg-center"
                style={{ backgroundImage: `url('${selectedProject.image}')` }}
              />

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary text-text-dark text-xs font-bold rounded-full">
                    {selectedProject.price}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-text-dark text-xs font-bold rounded-full">
                    {selectedProject.duration}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-text-dark mb-3">{selectedProject.title}</h2>
                <p className="text-text-secondary mb-6">{selectedProject.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">carpenter</span>
                    <span className="text-sm">Материалы: {selectedProject.materials}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">palette</span>
                    <span className="text-sm">Стиль: {selectedProject.style}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      openQuiz();
                    }}
                    className="w-full bg-primary hover:bg-green-400 text-text-dark py-3 rounded-xl font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined">calculate</span>
                    Рассчитать похожую кухню
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />
    </div>
  );
}
