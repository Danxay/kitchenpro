'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { QuizModal } from '@/components/quiz/QuizModal';

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-dark antialiased">
      <Header onOpenQuiz={openQuiz} />

      <main className="flex-grow flex flex-col">
        <Hero onOpenQuiz={openQuiz} />
        <Features />
      </main>

      <Footer />

      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />
    </div>
  );
}
