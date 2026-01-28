import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-4">
              <span className="material-symbols-outlined text-primary !text-[28px]">countertops</span>
              <span className="font-bold text-xl text-text-dark">Kitchen Factory</span>
            </Link>
            <p className="text-text-secondary text-sm mb-4 max-w-sm">
              Производим кухни на заказ с 2018 года. Собственное производство, честные цены, гарантия 5 лет.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/79990000000"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
                aria-label="WhatsApp"
              >
                <span className="text-sm font-bold">WA</span>
              </a>
              <a
                href="https://t.me/kitchenfactory"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
                aria-label="Telegram"
              >
                <span className="text-sm font-bold">TG</span>
              </a>
              <a
                href="https://vk.com/kitchenfactory"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
                aria-label="VK"
              >
                <span className="text-sm font-bold">VK</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-text-dark mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/portfolio" className="text-text-secondary hover:text-primary transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-text-secondary hover:text-primary transition-colors">
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-text-dark mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+79990000000" className="text-text-secondary hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined !text-[18px] text-primary">call</span>
                  +7 (999) 000-00-00
                </a>
              </li>
              <li>
                <a href="mailto:info@kitchenfactory.ru" className="text-text-secondary hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined !text-[18px] text-primary">mail</span>
                  info@kitchenfactory.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-text-secondary">
                <span className="material-symbols-outlined !text-[18px] text-primary mt-0.5">location_on</span>
                <span>г. Москва, ул. Примерная, д. 1<br />Пн-Сб: 10:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Kitchen Factory. Все права защищены.</p>
          <p>ИП Иванов И.И. ИНН 123456789012 ОГРНИП 123456789012345</p>
        </div>
      </div>
    </footer>
  );
};
