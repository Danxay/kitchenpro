import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-4 group">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <rect x="2" y="6" width="20" height="12" rx="2" fill="white" />
                  <rect x="4" y="8" width="4" height="4" rx="0.5" fill="#22c55e" />
                  <rect x="10" y="8" width="4" height="4" rx="0.5" fill="#22c55e" />
                  <rect x="16" y="8" width="4" height="4" rx="0.5" fill="#22c55e" />
                  <rect x="4" y="14" width="16" height="2" rx="0.5" fill="#22c55e" opacity="0.5" />
                </svg>
              </div>
              <span className="font-bold text-xl">
                Кухни<span className="text-primary">Про</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-xs leading-relaxed">
              Производство кухонь на заказ с 2018 года. Собственная фабрика в Москве, премиум материалы, честные цены.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/74951234567"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary hover:text-text-dark flex items-center justify-center text-gray-400 transition-all"
                aria-label="WhatsApp"
              >
                <span className="text-sm font-bold">WA</span>
              </a>
              <a
                href="https://t.me/kuhnipro"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary hover:text-text-dark flex items-center justify-center text-gray-400 transition-all"
                aria-label="Telegram"
              >
                <span className="text-sm font-bold">TG</span>
              </a>
              <a
                href="https://vk.com/kuhnipro"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary hover:text-text-dark flex items-center justify-center text-gray-400 transition-all"
                aria-label="VK"
              >
                <span className="text-sm font-bold">VK</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white mb-4">Навигация</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined !text-[16px]">home</span>
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined !text-[16px]">photo_library</span>
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined !text-[16px]">reviews</span>
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+74951234567" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary !text-[16px]">call</span>
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@kuhnipro.ru" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary !text-[16px]">mail</span>
                  info@kuhnipro.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <span className="material-symbols-outlined text-primary !text-[16px] mt-0.5">location_on</span>
                <span>г. Москва, ул. Мебельная,<br />д. 15, стр. 2</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-primary !text-[16px]">schedule</span>
                <span>Пн-Сб: 10:00 - 20:00</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Услуги</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary !text-[16px]">check_circle</span>
                Бесплатный замер
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary !text-[16px]">check_circle</span>
                3D-проектирование
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary !text-[16px]">check_circle</span>
                Доставка и монтаж
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary !text-[16px]">check_circle</span>
                Гарантия 5 лет
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
            <p>© {currentYear} КухниПро. Все права защищены.</p>
            <Link href="/privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</Link>
          </div>
          <p className="text-center">ИП Иванов И.И. ИНН 772512345678 ОГРНИП 318774600012345</p>
        </div>
      </div>
    </footer>
  );
};
