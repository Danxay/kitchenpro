import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">countertops</span>
            <span className="font-bold text-text-dark">Kitchen Factory</span>
          </div>
          <div className="flex gap-6 text-sm text-text-secondary">
            <Link className="hover:text-primary transition-colors" href="#">Политика конфиденциальности</Link>
            <Link className="hover:text-primary transition-colors" href="#">Условия использования</Link>
          </div>
          <div className="flex gap-4">
            <Link className="text-text-secondary hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">public</span>
            </Link>
            <Link className="text-text-secondary hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">mail</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400">
          © 2023 Kitchen Factory. Все права защищены.
        </div>
      </div>
    </footer>
  );
};
