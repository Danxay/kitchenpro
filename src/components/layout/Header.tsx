'use client';

import Link from 'next/link';
import React, { useState } from 'react';

interface HeaderProps {
  onOpenQuiz?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuiz }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="text-primary flex items-center justify-center">
                <span className="material-symbols-outlined !text-[28px] md:!text-[32px]">countertops</span>
              </div>
              <h2 className="text-text-dark text-lg md:text-xl font-bold tracking-tight">Kitchen Factory</h2>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link className="text-text-dark hover:text-primary transition-colors text-sm font-medium" href="/portfolio">
                Портфолио
              </Link>
              <Link className="text-text-dark hover:text-primary transition-colors text-sm font-medium" href="/reviews">
                Отзывы
              </Link>
            </nav>

            {/* Contact Section */}
            <div className="flex items-center gap-3 md:gap-4">
              <a className="hidden lg:block text-text-dark font-bold text-sm hover:text-primary transition-colors" href="tel:+79990000000">
                +7 (999) 000-00-00
              </a>
              <button
                onClick={onOpenQuiz}
                className="bg-primary hover:bg-green-400 active:bg-green-500 text-text-dark px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined !text-[20px]">call</span>
                <span className="hidden sm:inline">Заказать звонок</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-text-dark hover:text-primary transition-colors cursor-pointer"
                aria-label="Меню"
              >
                <span className="material-symbols-outlined !text-[24px]">
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />

          {/* Menu Panel */}
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col p-4 gap-1">
              <Link
                href="/portfolio"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-4 py-3 text-text-dark hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                <span className="material-symbols-outlined text-primary">photo_library</span>
                Портфолио
              </Link>
              <Link
                href="/reviews"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-4 py-3 text-text-dark hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                <span className="material-symbols-outlined text-primary">star</span>
                Отзывы
              </Link>
              <div className="my-2 border-t border-gray-100" />
              <a
                href="tel:+79990000000"
                className="flex items-center gap-3 px-4 py-3 text-text-dark hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                <span className="material-symbols-outlined text-primary">call</span>
                +7 (999) 000-00-00
              </a>
              <button
                onClick={() => {
                  closeMobileMenu();
                  onOpenQuiz?.();
                }}
                className="mt-2 w-full bg-primary hover:bg-green-400 text-text-dark py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined">calculate</span>
                Рассчитать стоимость
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
