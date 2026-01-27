'use client';

import React, { useState } from 'react';
import { QuizStep1 } from './QuizStep1';
import { QuizStep2 } from './QuizStep2';
import { QuizStep3 } from './QuizStep3';

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
    // Here you would typically send the data to a backend
    alert(`Спасибо, ${data.name}! Мы свяжемся с вами по номеру ${data.phone}. (Demo only)`);
    onClose();
    // Reset after closing
    setTimeout(() => {
        setStep(1);
        setAnswers({ shape: null, material: null, contact: null });
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop / Background Image Container */}
        <div
            className="absolute inset-0 bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDchsyPp2muKBkVvJ3CzSTJcE8vysfl05vSDJJrviHXUy1uak_VEFF0talDbtCK0EXv9K-xbd0mQ_9imXq1ht3aIFGjyVAqm4zNMeTUEJDKSqnLepGt3L-5_Q-H9sjRYrxXNH_rPO73iDgACUP1Hg3-6QuZtkCWnMqsHveUDBXSseGfBFwVgN927bPpPHrKlZmJSS9J6yTQ6hm_aTzla8NZpZm9X_rDHanhS2hqg38WDGlm6z6Mtnm85M7JZUPP0mWiRYx7jDmGFcU')" }}
        >
            {/* Backdrop Blur Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0"></div>
        </div>

        {/* Modal Card */}
        <div className="relative z-10 w-full max-w-[960px] bg-background-light dark:bg-background-dark rounded-2xl shadow-2xl overflow-hidden border border-white/20 min-h-[600px] flex flex-col">
            {/* Close Button (Different placement for Step 3 maybe? No, consistent usually) */}
            {/* Note: Step 3 has full image on left, so close button needs to be z-index high and visible on both light/dark or positioned smartly. Screen 3 ref has it top right. Screen 2 ref has it top right. */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors z-50 cursor-pointer"
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
            </div>
        </div>
    </div>
  );
};
