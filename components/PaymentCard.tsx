import React from 'react';

interface PaymentCardProps {
  type: 'card' | 'transfer';
  isSelected: boolean;
  onSelect: () => void;
}

export default function PaymentCard({ type, isSelected, onSelect }: PaymentCardProps) {
  const config = {
    card: {
      title: 'Tarjeta de Crédito/Débito',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      description: 'Pago instantáneo y seguro'
    },
    transfer: {
      title: 'Transferencia Bancaria',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      description: 'Procesamiento en 1-2 días hábiles'
    }
  };

  const { title, icon, description } = config[type];

  return (
    <div
      onClick={onSelect}
      className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
        isSelected
          ? 'bg-gradient-to-br from-indigo-600 to-blue-500 text-white shadow-2xl scale-105 border-2 border-indigo-600'
          : 'bg-white text-gray-900 shadow-md hover:shadow-xl border-2 border-gray-200 hover:border-indigo-300'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-xl ${
            isSelected ? 'bg-white/20' : 'bg-indigo-100'
          }`}
        >
          <div className={isSelected ? 'text-white' : 'text-indigo-600'}>
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-semibold mb-1 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h3>
          <p className={`text-sm ${isSelected ? 'text-indigo-100' : 'text-gray-600'}`}>
            {description}
          </p>
        </div>
        {isSelected && (
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
