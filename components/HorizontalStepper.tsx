import React from 'react';
import StepIcon from './StepIcon';
import ProgressLine from './ProgressLine';

type StepStatus = 'completed' | 'in-progress' | 'pending';

interface Step {
  number: number;
  title: string;
  status: StepStatus;
  icon: React.ReactNode;
}

interface HorizontalStepperProps {
  steps: Step[];
}

export default function HorizontalStepper({ steps }: HorizontalStepperProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <StepIcon status={step.status} icon={step.icon} />
              <div className="text-center">
                <p className="text-xs text-gray-500">STEP {step.number}</p>
                <p className="text-sm font-semibold text-gray-900">{step.title}</p>
                <p className={`text-xs mt-1 ${
                  step.status === 'completed' ? 'text-green-600' : 
                  step.status === 'in-progress' ? 'text-indigo-600' : 
                  'text-gray-400'
                }`}>
                  {step.status === 'completed' ? 'Completed' : 
                   step.status === 'in-progress' ? 'In Progress' : 
                   'Pending'}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <ProgressLine completed={step.status === 'completed'} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
