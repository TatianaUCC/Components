import React from 'react';

interface TimeCardProps {
  stepNumber: number;
  title: string;
  description: string;
  timeRemaining: string;
}

export default function TimeCard({ stepNumber, title, description, timeRemaining }: TimeCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-1">STEP {stepNumber}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>

      <div className="bg-indigo-600 rounded-xl p-4">
        <p className="text-xs text-indigo-200 mb-1">TIME REMAINING</p>
        <p className="text-2xl font-bold text-white">{timeRemaining}</p>
      </div>
    </div>
  );
}
