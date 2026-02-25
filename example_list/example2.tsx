'use client';

import React, { useState } from 'react';
import PlanCard from '../components/PlanCard';

export default function Example2() {
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      id: 'basic',
      title: 'Básico',
      price: '29',
      features: ['Hasta 10 usuarios', 'Soporte por email', '5 GB de almacenamiento']
    },
    {
      id: 'professional',
      title: 'Profesional',
      price: '79',
      features: ['Hasta 50 usuarios', 'Soporte 24/7', '50 GB de almacenamiento', 'API']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Example 2: Plan Selection Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              isSelected={selectedPlan === plan.id}
              onSelect={() => setSelectedPlan(plan.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
