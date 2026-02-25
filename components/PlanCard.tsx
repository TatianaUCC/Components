import React from 'react';

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  isSelected: boolean;
  onSelect: () => void;
}

export default function PlanCard({ title, price, features, isSelected, onSelect }: PlanCardProps) {
  return (
    <div
      onClick={onSelect}
      className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
        isSelected
          ? 'bg-gradient-to-br from-indigo-600 to-blue-500 text-white shadow-2xl scale-105'
          : 'bg-white text-gray-900 shadow-md hover:shadow-xl hover:scale-102 border-2 border-gray-200'
      }`}
    >
      {isSelected && (
        <div className="absolute -top-3 -right-3 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className={`text-4xl font-bold ${isSelected ? 'text-white' : 'text-indigo-600'}`}>
            ${price}
          </span>
          <span className={`text-sm ${isSelected ? 'text-indigo-100' : 'text-gray-500'}`}>
            /mes
          </span>
        </div>
      </div>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isSelected ? 'text-green-300' : 'text-green-500'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className={`text-sm ${isSelected ? 'text-white' : 'text-gray-600'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
          isSelected
            ? 'bg-white text-indigo-600 hover:bg-gray-100'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        {isSelected ? 'Seleccionado' : 'Seleccionar Plan'}
      </button>
    </div>
  );
}
