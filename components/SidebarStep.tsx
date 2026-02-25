import React from 'react';

interface SidebarStepProps {
  currentStep: number;
  steps: { number: number; title: string; icon: React.ReactNode }[];
}

export default function SidebarStep({ currentStep, steps }: SidebarStepProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg h-fit sticky top-8">
      <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center mb-8 shadow-md">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      </div>
      
      <div className="space-y-6">
        {steps.map((step, index) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;
          
          return (
            <div key={step.number} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isCurrent
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    step.icon
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-0.5 h-16 mt-2 transition-all duration-300 ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
              <div className="pt-2">
                <p className="text-xs text-gray-500 mb-1">PASO {step.number}</p>
                <h3 className={`text-base font-semibold ${isCurrent ? 'text-indigo-600' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <button className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
          <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">?</span>
          <div className="text-left">
            <p className="text-xs text-gray-500">¿Tienes problemas?</p>
            <p className="text-sm font-medium">Contáctanos</p>
          </div>
        </button>
      </div>
    </div>
  );
}
