'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { QuizStep1 } from './QuizStep1';
import { QuizStep2 } from './QuizStep2';
import { QuizStep3 } from './QuizStep3';
import { QuizSuccess } from './QuizSuccess';

interface QuizModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({
        shape: null as string | null,
        material: null as string | null,
        contact: null as { name: string; phone: string } | null,
    });
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClose = useCallback(() => {
        onClose();
        // Сбрасываем после закрытия
        setTimeout(() => {
            setStep(1);
            setAnswers({ shape: null, material: null, contact: null });
        }, 300);
    }, [onClose]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            modalRef.current?.focus();
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleClose]);

    if (!isOpen) return null;

    const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);

    const handleShapeSelect = (shape: string) => {
        setAnswers((prev) => ({ ...prev, shape }));
    };

    const handleMaterialSelect = (material: string) => {
        setAnswers((prev) => ({ ...prev, material }));
    };

    const handleFormSubmit = (data: { name: string; phone: string }) => {
        setAnswers((prev) => ({ ...prev, contact: data }));
        // В реальном проекте здесь был бы API-запрос
        // Переходим на success экран
        setStep(4);
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal Card */}
            <div
                ref={modalRef}
                tabIndex={-1}
                className="relative z-10 w-full max-w-[960px] bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col outline-none"
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    aria-label="Закрыть модальное окно"
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-50 cursor-pointer bg-white/80 rounded-full"
                >
                    <span className="material-symbols-outlined !text-[24px]">close</span>
                </button>

                {/* Step Content */}
                <div className="flex-1 h-full">
                    {step === 1 && (
                        <div className="h-full p-6 md:p-10 lg:p-12">
                            <QuizStep1
                                selectedShape={answers.shape}
                                onSelectShape={handleShapeSelect}
                                onNext={handleNext}
                            />
                        </div>
                    )}
                    {step === 2 && (
                        <QuizStep2
                            selectedMaterial={answers.material}
                            onSelectMaterial={handleMaterialSelect}
                            onNext={handleNext}
                            onBack={handleBack}
                        />
                    )}
                    {step === 3 && (
                        <QuizStep3
                            onSubmit={handleFormSubmit}
                            onBack={handleBack}
                        />
                    )}
                    {step === 4 && (
                        <QuizSuccess
                            name={answers.contact?.name || 'Гость'}
                            onClose={handleClose}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
