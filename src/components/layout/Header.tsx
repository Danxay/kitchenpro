import Link from 'next/link';
import React from 'react';

interface HeaderProps {
  onOpenQuiz?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuiz }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-border-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="text-primary flex items-center justify-center">
              <span className="material-symbols-outlined !text-[32px]">countertops</span>
            </div>
            <h2 className="text-text-dark text-xl font-bold tracking-tight">Kitchen Factory</h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-text-dark hover:text-primary transition-colors text-sm font-medium" href="/portfolio">Портфолио</Link>
            <Link className="text-text-dark hover:text-primary transition-colors text-sm font-medium" href="#">Материалы</Link>
            <Link className="text-text-dark hover:text-primary transition-colors text-sm font-medium" href="/reviews">Отзывы</Link>
            <Link className="text-text-dark hover:text-primary transition-colors text-sm font-medium" href="#">О нас</Link>
          </nav>

          {/* Contact Section */}
          <div className="flex items-center gap-4">
            <a className="hidden lg:block text-text-dark font-bold text-sm hover:text-primary transition-colors" href="tel:+79990000000">
              +7 (999) 000-00-00
            </a>
            <button
              onClick={onOpenQuiz}
              className="bg-primary hover:bg-green-400 active:bg-green-500 text-text-dark px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined !text-[20px]">call</span>
              <span className="hidden sm:inline">Заказать звонок</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
