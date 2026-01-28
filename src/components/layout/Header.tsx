'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  onOpenQuiz?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuiz }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <rect x="2" y="6" width="20" height="12" rx="2" fill="white" />
                <rect x="4" y="8" width="4" height="4" rx="0.5" fill="#22c55e" />
                <rect x="10" y="8" width="4" height="4" rx="0.5" fill="#22c55e" />
                <rect x="16" y="8" width="4" height="4" rx="0.5" fill="#22c55e" />
                <rect x="4" y="14" width="16" height="2" rx="0.5" fill="#22c55e" opacity="0.5" />
              </svg>
            </div>
            <span className="font-bold text-xl text-text-dark">
              Кухни<span className="text-primary">Про</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/portfolio" className="text-text-secondary hover:text-primary transition-colors font-medium text-sm">
              Портфолио
            </Link>
            <Link href="/reviews" className="text-text-secondary hover:text-primary transition-colors font-medium text-sm">
              Отзывы
            </Link>
            <a href="tel:+74951234567" className="text-text-dark font-bold text-sm hover:text-primary transition-colors flex items-center gap-1.5">
              <span className="material-symbols-outlined !text-[18px] text-primary">call</span>
              +7 (495) 123-45-67
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenQuiz}
              className="h-10 px-5 rounded-lg bg-primary hover:bg-green-400 text-text-dark text-sm font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
            >
              <span className="material-symbols-outlined !text-[18px]">calculate</span>
              Рассчитать стоимость
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-text-dark hover:text-primary transition-colors cursor-pointer"
            aria-label="Меню"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined !text-[24px] transition-transform duration-200" style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }}>
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />

        {/* Menu Panel */}
        <div className={`absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <nav className="flex flex-col p-4 gap-1">
            <Link
              href="/portfolio"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-dark hover:bg-gray-50 transition-colors font-medium"
            >
              <span className="material-symbols-outlined text-primary !text-[20px]">photo_library</span>
              Портфолио
            </Link>
            <Link
              href="/reviews"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-dark hover:bg-gray-50 transition-colors font-medium"
            >
              <span className="material-symbols-outlined text-primary !text-[20px]">reviews</span>
              Отзывы
            </Link>
            <a
              href="tel:+74951234567"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-dark hover:bg-gray-50 transition-colors font-medium"
            >
              <span className="material-symbols-outlined text-primary !text-[20px]">call</span>
              +7 (495) 123-45-67
            </a>
            <div className="border-t border-gray-100 my-2" />
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenQuiz?.();
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary hover:bg-green-400 text-text-dark font-bold transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined !text-[20px]">calculate</span>
              Рассчитать стоимость
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};
