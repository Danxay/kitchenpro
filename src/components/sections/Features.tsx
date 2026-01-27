import React from 'react';

export const Features: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/3 space-y-4">
            <h2 className="text-3xl font-black text-text-dark tracking-tight">Почему выбирают нас?</h2>
            <p className="text-text-secondary text-lg">Мы объединяем современные технологии производства с мастерством, чтобы создавать премиальные кухни по заводским ценам.</p>
            <a className="inline-flex items-center text-primary font-bold hover:underline gap-1 mt-2" href="#">
              Узнать больше о процессе
              <span className="material-symbols-outlined !text-[18px]">arrow_right_alt</span>
            </a>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">precision_manufacturing</span>
              </div>
              <h3 className="text-lg font-bold text-text-dark mb-2">Автоматизированное производство</h3>
              <p className="text-text-secondary text-sm">Высокоточный распил и кромление обеспечивают идеальную подгонку каждого модуля.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <h3 className="text-lg font-bold text-text-dark mb-2">Премиум материалы</h3>
              <p className="text-text-secondary text-sm">Только экологичные плиты Egger и премиальная фурнитура Blum.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <h3 className="text-lg font-bold text-text-dark mb-2">Быстрая доставка</h3>
              <p className="text-text-secondary text-sm">Собственный автопарк обеспечивает безопасную и своевременную доставку вашей кухни.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
