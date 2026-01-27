'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { QuizModal } from '@/components/quiz/QuizModal';

const projects = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxkmIS_aEzAnh0dD0qimxfsIlxEpswKJnPAW4Pu_d3GGrQ7kv7GCRK99dnLUf6i5JyzUq3O8bl3DpNljSVMlCl0vbcipjceUa300egi-5TGjAE8PC6ycjpwBvB-FHP0vkAmEUeLh9Tnfqy-Cn5IGFpJ0x-4iOJ-tXLJmW5bxbAe1is9PlN6qAHOnLpaRoMWSCPiH_4r8giU2t03m48NonZIRPEzQ-TlGPgQy73XVy9ZjKalpYlCu5v8WWJl5Jq3xVhCJMvzSTuj-o',
    price: '520 000 ₽',
    duration: '14 Дней',
    title: 'Сканди-Модерн Кухня',
    materials: 'Материалы: Egger, Blum',
    style: 'Стиль: Уютный минимализм',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCxb5hU_DF5j9YxfX7RXk6Kwkpb-83I3I6-dHgKoPop_8rZqfncP4PZJONlWD81ryMesl0rl95gbHS1DsiWlAY5ppvbSyYfkiTfYX3nEV-2UtR4W0-PFvRAe7RaZBe3grTYzrj1LEs1Ihz_BgZUDPctnyTCqolhKCzOGIsB8OoHpxuZSEBPhfvWS08GeM43Fwmf0xsbxUuOdW3toa3ARvMyPh73x0_ZCtdiwXFkQGpHfwKhxVEKXVX0a_lS9UOHF_XNqN76mXCrNY',
    price: '480 000 ₽',
    duration: '10 Дней',
    title: 'Минимализм White',
    materials: 'Материалы: Высокий глянец, Камень',
    style: 'Стиль: Чистый современный',
  },
  {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4r70GxKZ_1MVbz6YrsDiRCybIfLw2TkqQS-Rc3uJ7UPCY_dC4Fmvp0kGMLqTD_S8PX-lyOf55ZPaexnkJNZG--urVc3DTDH0dsJtcjjzfVGuGpMqj-j1Q1uv0mdmvkrETFgDnzHIuUYMxgyUpJmrp3gKhPSyEWnpq_vd3R_vRKnImvVh8wJs7_AaK93dWWdKE15HTA_LQNeir9JxVsEYSI9SM8yOJOE5-7X9UltMxipS-e8Y88SVfwvs4f88mIOA42B7M4A1Yq_Q',
      price: '650 000 ₽',
      duration: '21 День',
      title: 'Индустриальный Лофт',
      materials: 'Материалы: Матовый черный, Бетон',
      style: 'Стиль: Урбан Индастриал',
  },
  {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAocT3_a3AIozxloEFVlgd86TibFU2ox3aDr5CO6Umhfm0KrO47TNd74nEf8uVqUki_afOxCB7RHXzn3H6W2QFthEYrRi_kIMK-podUfYyv1_hqJFpaEqznhzBXzD5bCxsVPpyoduE3o9EC-cqr58u4njrVjgi2P0bb9-rqGggsfhEnV9RvVE6A7tr0z15NC8KaJSAlWFf3yBcTGAItTXH-3eu237J_-Dxu7wRSnx1Y_YUT74Wt00maKrTG3lF_s4zx8EUZ85WHC-g',
      price: '350 000 ₽',
      duration: '7 Дней',
      title: 'Компактная Студия',
      materials: 'Материалы: Ламинат, Компактность',
      style: 'Стиль: Эффективный Модерн',
  },
  {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeHeWG34vCoKoK8zLG6qqVIQled9clyv8WVUklgR1wNtpk50ErfF9HK102JmbDU24n1Y_5u1pKOPBYvXe3JdSEn4TTRtPs4oXMtlYiVlaO4124_l53teHioLKnD4rHkMrI6LdmM97nwYhskIXYFpm2ANMacY14T6W5Jyio3FfKZesHpwhBmW4azMyaqRL-wjZqRf8Q4vg80R62nRamVGnxemZJFZUbiI6FpPcP2r6aXggwGbikrZTQVGlsZYEWgE6CdST03gv9BGE',
      price: '710 000 ₽',
      duration: '25 Дней',
      title: 'Midnight Blue Luxury',
      materials: 'Материалы: Массив, Латунь, Мрамор',
      style: 'Стиль: Современная Классика',
  },
  {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChWe-goXYVpVLBEMj6O3onETs_OSZKf4dvgRrjPCtXHLEfbbDpfRVQKChhtULCDewZ39JU1W5ljnd_iZugQP2gp714xh37JLYEcK7lBaO8e-gxTqTaaf1wH5R_46u5EkWwVrfTB4YoYlBbAYeVPnOcLnx4yM120QemcvqhsfVGTHxK-CfJQ1UZFixSdMcQG5lwk7wyf9fGdQHkGLkytWAkCdBX3rz9vTdBrMRREW8iq1u8F3ATUFfWuBKvEOcrwwSFpPdnT8Ydlfs',
      price: '590 000 ₽',
      duration: '18 Дней',
      title: 'Классический Фармхаус',
      materials: 'Материалы: Шейкер, Дерево',
      style: 'Стиль: Деревенский Шарм',
  }
];

export default function PortfolioPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-dark antialiased">
      <Header onOpenQuiz={openQuiz} />
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-10 py-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto gap-4">
          <div className="inline-flex items-center rounded-full border border-border-light dark:border-[#2a3830] bg-white dark:bg-surface-dark px-3 py-1 text-xs font-medium text-text-secondary dark:text-[#a0b0a8]">
            <span className="mr-1 size-2 rounded-full bg-primary"></span>
            Обновлено 2024
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-dark dark:text-white">
            Реальные Кухни, <span className="text-primary">Честные Цены.</span>
          </h1>
          <p className="text-lg text-text-secondary dark:text-[#a0b0a8] max-w-[600px]">
             Посмотрите наши недавние работы. Мы верим в прозрачность — узнайте точную стоимость и сроки для каждого проекта.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center overflow-x-auto pb-4 no-scrollbar">
          <div className="flex gap-2 p-1 bg-[#eef1f0] dark:bg-[#1a2e22] rounded-xl">
             <button className="px-4 py-2 bg-white dark:bg-primary dark:text-black shadow-sm rounded-lg text-sm font-bold text-text-dark cursor-pointer">Все Стили</button>
             <button className="px-4 py-2 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg text-sm font-medium text-text-secondary dark:text-[#a0b0a8] transition-colors cursor-pointer">Современный</button>
             <button className="px-4 py-2 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg text-sm font-medium text-text-secondary dark:text-[#a0b0a8] transition-colors cursor-pointer">Лофт</button>
             <button className="px-4 py-2 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg text-sm font-medium text-text-secondary dark:text-[#a0b0a8] transition-colors cursor-pointer">Классика</button>
             <button className="px-4 py-2 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg text-sm font-medium text-text-secondary dark:text-[#a0b0a8] transition-colors cursor-pointer">Маленькие Кухни</button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
           {projects.map((project, index) => (
             <ProjectCard key={index} {...project} />
           ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-4">
            <button className="flex items-center gap-2 text-sm font-bold text-text-dark dark:text-white hover:text-primary transition-colors cursor-pointer">
                Загрузить еще проекты <span className="material-symbols-outlined">expand_more</span>
            </button>
        </div>
      </main>

      {/* CTA Section */}
      <section className="w-full bg-[#f0f4f2] dark:bg-[#0d1a12] py-20 px-4 md:px-10">
        <div className="max-w-[960px] mx-auto flex flex-col items-center gap-8 text-center">
            <div className="rounded-full bg-primary/10 p-4">
                <span className="material-symbols-outlined !text-4xl text-primary">calculate</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-text-dark dark:text-white max-w-[720px]">
                Понравилось увиденное? Узнайте стоимость вашей кухни за 2 минуты.
            </h2>
            <p className="text-base text-text-secondary dark:text-[#a0b0a8] max-w-[500px]">
                Никаких скрытых платежей. Получите мгновенную смету на основе вашей планировки и материалов.
            </p>
            <button
                onClick={openQuiz}
                className="group flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-text-dark text-base font-bold shadow-[0_4px_14px_0_rgba(32,223,108,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(32,223,108,0.23)] hover:-translate-y-0.5 active:translate-y-0"
            >
                <span className="truncate">Рассчитать стоимость кухни</span>
                <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <p className="text-sm text-text-secondary dark:text-[#a0b0a8] flex items-center gap-1">
                <span className="material-symbols-outlined !text-[16px] text-primary">check_circle</span>
                Бесплатно и без обязательств
            </p>
        </div>
      </section>

      <Footer />
      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />
    </div>
  );
}
