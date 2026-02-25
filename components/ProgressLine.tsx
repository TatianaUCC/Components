import React from 'react';

interface ProgressLineProps {
  completed: boolean;
}

export default function ProgressLine({ completed }: ProgressLineProps) {
  return (
    <div className="flex-1 h-1 mx-2">
      <div className={`h-full rounded ${completed ? 'bg-green-500' : 'bg-gray-300'}`} />
    </div>
  );
}
