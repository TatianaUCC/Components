'use client';

import React, { useState } from 'react';
import StepIndicator from '../components/StepIndicator';
import Button from '../components/Button';

export default function Example3() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ['Detalles Básicos', 'Detalles de Empresa', 'Plan', 'Pago'];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Example 3: Step Indicator</h2>
        <StepIndicator currentStep={currentStep} totalSteps={4} steps={steps} />
        <div className="mt-8 flex gap-4 justify-center">
          <Button onClick={() => setCurrentStep(Math.max(1, currentStep - 1))} variant="secondary">
            Anterior
          </Button>
          <Button onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}>
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  );
}
