import React from 'react';
import StepIcon from './StepIcon';
import StepBadge from './StepBadge';

type StepStatus = 'completed' | 'in-progress' | 'pending';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description?: string;
  status: StepStatus;
  icon: React.ReactNode;
  variant?: 'default' | 'large';
}

export default function StepCard({ 
  stepNumber, 
  title, 
  description, 
  status, 
  icon,
  variant = 'default'
}: StepCardProps) {
  const getBadgeText = () => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'pending': return 'Pending';
    }
  };

  const isLarge = variant === 'large';
  const bgColor = status === 'in-progress' ? 'bg-indigo-600' : 'bg-white';
  const textColor = status === 'in-progress' ? 'text-white' : 'text-gray-900';

  return (
    <div className={`${bgColor} rounded-2xl p-6 shadow-lg ${isLarge ? 'min-h-[200px]' : ''}`}>
      <div className="flex items-start gap-4">
        <StepIcon status={status} icon={icon} />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className={`text-xs ${status === 'in-progress' ? 'text-indigo-200' : 'text-gray-500'} mb-1`}>
                STEP {stepNumber}
              </p>
              <h3 className={`text-lg font-semibold ${textColor}`}>{title}</h3>
            </div>
            <StepBadge status={status} text={getBadgeText()} />
          </div>
          {description && (
            <p className={`text-sm mt-3 ${status === 'in-progress' ? 'text-indigo-100' : 'text-gray-600'}`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
