import React from 'react';

interface QuizSuccessProps {
    name: string;
    onClose: () => void;
}

export const QuizSuccess: React.FC<QuizSuccessProps> = ({ name, onClose }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-12 min-h-[500px] bg-white">
            {/* Success Animation */}
            <div className="relative mb-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-white !text-[40px] md:!text-[48px]">check</span>
                    </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary/30 animate-ping" />
                <div className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-primary/40 animate-ping delay-150" />
            </div>

            {/* Success Message */}
            <div className="text-center max-w-md">
                <h2 className="text-2xl md:text-3xl font-black text-text-dark mb-3">
                    Заявка отправлена!
                </h2>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-2">
                    Спасибо, <span className="font-semibold text-text-dark">{name}</span>!
                </p>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                    Наш менеджер свяжется с вами в течение <span className="font-semibold text-primary">15 минут</span> и отправит расчет в WhatsApp.
                </p>
            </div>

            {/* What's next */}
            <div className="mt-8 w-full max-w-sm">
                <div className="bg-gray-50 rounded-xl p-5 space-y-3">
                    <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Что дальше:</p>
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary font-bold text-xs">1</span>
                        </div>
                        <p className="text-sm text-text-dark">Менеджер позвонит для уточнения деталей</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary font-bold text-xs">2</span>
                        </div>
                        <p className="text-sm text-text-dark">Отправим расчет и 3D-проект в WhatsApp</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary font-bold text-xs">3</span>
                        </div>
                        <p className="text-sm text-text-dark">Назначим бесплатный замер</p>
                    </div>

                </div>
            </div>

            {/* Close Button */}
            <button
                onClick={onClose}
                className="mt-8 px-8 py-3 bg-text-dark hover:bg-gray-800 text-white font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-2"
            >
                <span>Закрыть</span>
                <span className="material-symbols-outlined !text-[20px]">close</span>
            </button>
        </div>
    );
};
