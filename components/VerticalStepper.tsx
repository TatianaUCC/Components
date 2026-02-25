import React from 'react';
import StepIcon from './StepIcon';

type StepStatus = 'completed' | 'in-progress' | 'pending';

interface Step {
  number: number;
  title: string;
  status: StepStatus;
  icon: React.ReactNode;
}

interface VerticalStepperProps {
  steps: Step[];
}

export default function VerticalStepper({ steps }: VerticalStepperProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mb-8">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <rect x="3" y="3" width="14" height="14" rx="2" />
        </svg>
      </div>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <StepIcon status={step.status} icon={step.icon} />
              {index < steps.length - 1 && (
                <div className={`w-0.5 h-16 mt-2 ${
                  step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                }`} />
              )}
            </div>
            <div className="pt-2">
              <p className="text-xs text-gray-500 mb-1">STEP {step.number}</p>
              <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm">?</span>
          <div className="text-left">
            <p className="text-xs text-gray-500">Having troubles?</p>
            <p className="text-sm font-medium">Contact us</p>
          </div>
        </button>
      </div>
    </div>
  );
}
