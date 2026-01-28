'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import { Process } from '@/components/sections/Process';
import { ReviewsPreview } from '@/components/sections/ReviewsPreview';
import { Contacts } from '@/components/sections/Contacts';
import dynamic from 'next/dynamic';

// ⚡ Bolt: Lazy load QuizModal to reduce initial bundle size.
// It is only needed when user clicks "Calculate cost".
const QuizModal = dynamic(() => import('@/components/quiz/QuizModal').then((mod) => mod.QuizModal));

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white font-display text-text-dark antialiased">
      <Header onOpenQuiz={openQuiz} />

      <main className="flex-grow flex flex-col">
        <Hero onOpenQuiz={openQuiz} />
        <Features />
        <PortfolioPreview />
        <Process />
        <ReviewsPreview />
        <Contacts onOpenQuiz={openQuiz} />
      </main>

      <Footer />

      {isQuizOpen && <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />}
    </div>
  );
}
