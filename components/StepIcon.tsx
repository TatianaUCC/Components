import React from 'react';

type StepStatus = 'completed' | 'in-progress' | 'pending';

interface StepIconProps {
  status: StepStatus;
  icon: React.ReactNode;
}

export default function StepIcon({ status, icon }: StepIconProps) {
  const getStyles = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 text-white';
      case 'in-progress':
        return 'bg-indigo-600 text-white';
      case 'pending':
        return 'bg-gray-200 text-gray-400';
      default:
        return 'bg-gray-200 text-gray-400';
    }
  };

  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStyles()}`}>
      {icon}
    </div>
  );
}
