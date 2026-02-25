import React from 'react';

type BadgeStatus = 'completed' | 'in-progress' | 'pending';

interface StepBadgeProps {
  status: BadgeStatus;
  text: string;
}

export default function StepBadge({ status, text }: StepBadgeProps) {
  const getStyles = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-600';
      case 'in-progress':
        return 'bg-indigo-100 text-indigo-600';
      case 'pending':
        return 'bg-gray-100 text-gray-400';
      default:
        return 'bg-gray-100 text-gray-400';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStyles()}`}>
      {text}
    </span>
  );
}
