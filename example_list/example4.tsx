'use client';

import React, { useState } from 'react';
import SidebarStep from '../components/SidebarStep';

export default function Example4() {
  const [currentStep] = useState(2);

  const UserIcon = (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  );

  const BuildingIcon = (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
    </svg>
  );

  const steps = [
    { number: 1, title: 'Detalles Básicos', icon: UserIcon },
    { number: 2, title: 'Detalles de Empresa', icon: BuildingIcon },
    { number: 3, title: 'Plan', icon: UserIcon },
    { number: 4, title: 'Pago', icon: UserIcon }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Example 4: Sidebar Stepper</h2>
        <SidebarStep currentStep={currentStep} steps={steps} />
      </div>
    </div>
  );
}
