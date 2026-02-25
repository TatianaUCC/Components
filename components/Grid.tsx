'use client';

import React, { useState } from 'react';
import SidebarStep from './SidebarStep';
import StepIndicator from './StepIndicator';
import Step1BasicDetails from './Step1BasicDetails';
import Step2CompanyDetails from './Step2CompanyDetails';
import Step3SubscriptionPlan from './Step3SubscriptionPlan';
import Step4PaymentDetails from './Step4PaymentDetails';
import SuccessScreen from './SuccessScreen';
import StepCard from './StepCard';
import TimeCard from './TimeCard';

export default function Grid() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  // Step 1 Data
  const [step1Data, setStep1Data] = useState({
    fullName: '',
    documentNumber: '',
    phone: '',
    email: ''
  });
  const [step1Errors, setStep1Errors] = useState<Partial<typeof step1Data>>({});

  // Step 2 Data
  const [step2Data, setStep2Data] = useState({
    companyName: '',
    nit: '',
    companyType: '',
    employeeCount: '',
    address: ''
  });
  const [step2Errors, setStep2Errors] = useState<Partial<typeof step2Data>>({});

  // Step 3 Data
  const [step3Data, setStep3Data] = useState({
    selectedPlan: '',
    paymentMethod: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [step3Errors, setStep3Errors] = useState<Partial<typeof step3Data>>({});

  // Step 4 Data
  const [step4Data, setStep4Data] = useState({
    shippingAddress: '',
    city: '',
    state: '',
    postalCode: ''
  });
  const [step4Errors, setStep4Errors] = useState<Partial<typeof step4Data>>({});

  // Validation functions
  const validateStep1Field = (field: keyof typeof step1Data, value: string) => {
    const errors: Partial<typeof step1Data> = {};

    switch (field) {
      case 'fullName':
        if (!value) {
          errors.fullName = 'El nombre es requerido';
        } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(value)) {
          errors.fullName = 'Solo se permiten letras y espacios';
        } else if (value.length < 3) {
          errors.fullName = 'Mínimo 3 caracteres';
        }
        break;
      case 'documentNumber':
        if (!value) {
          errors.documentNumber = 'El documento es requerido';
        } else if (!/^\d+$/.test(value)) {
          errors.documentNumber = 'Solo se permiten números';
        } else if (value.length > 10) {
          errors.documentNumber = 'Máximo 10 dígitos';
        }
        break;
      case 'phone':
        if (!value) {
          errors.phone = 'El teléfono es requerido';
        } else if (!/^\d{10}$/.test(value)) {
          errors.phone = 'Debe tener exactamente 10 dígitos';
        }
        break;
      case 'email':
        if (!value) {
          errors.email = 'El email es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.email = 'Email inválido';
        }
        break;
    }

    return errors;
  };

  const validateStep2Field = (field: keyof typeof step2Data, value: string) => {
    const errors: Partial<typeof step2Data> = {};

    switch (field) {
      case 'companyName':
        if (!value) {
          errors.companyName = 'El nombre de la empresa es requerido';
        } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(value)) {
          errors.companyName = 'Solo se permiten letras y espacios';
        }
        break;
      case 'nit':
        if (!value) {
          errors.nit = 'El NIT es requerido';
        } else if (!/^\d+$/.test(value)) {
          errors.nit = 'Solo se permiten números';
        } else if (value.length > 12) {
          errors.nit = 'Máximo 12 dígitos';
        }
        break;
      case 'employeeCount':
        if (!value) {
          errors.employeeCount = 'El número de empleados es requerido';
        } else if (!/^\d+$/.test(value)) {
          errors.employeeCount = 'Solo se permiten números';
        } else if (value.length > 4) {
          errors.employeeCount = 'Máximo 4 dígitos';
        }
        break;
      case 'address':
        if (!value) {
          errors.address = 'La dirección es requerida';
        }
        break;
    }

    return errors;
  };

  const validateStep3Field = (field: keyof typeof step3Data, value: string) => {
    const errors: Partial<typeof step3Data> = {};

    switch (field) {
      case 'cardName':
        if (!value) {
          errors.cardName = 'El nombre es requerido';
        } else if (!/^[A-Za-z ]+$/.test(value)) {
          errors.cardName = 'Solo se permiten letras';
        }
        break;
      case 'cardNumber':
        const cleanNumber = value.replace(/\s/g, ''); // Remove spaces
        if (!value) {
          errors.cardNumber = 'El número de tarjeta es requerido';
        } else if (!/^\d+$/.test(cleanNumber)) {
          errors.cardNumber = 'Solo se permiten números';
        }
        break;
      case 'expiryDate':
        if (!value) {
          errors.expiryDate = 'La fecha es requerida';
        } else if (value.length !== 4) {
          errors.expiryDate = 'Formato inválido (MMAA)';
        } else if (!/^\d{4}$/.test(value)) {
          errors.expiryDate = 'Solo se permiten números';
        } else {
          const month = parseInt(value.slice(0, 2));
          if (month < 1 || month > 12) {
            errors.expiryDate = 'Mes inválido (01-12)';
          }
        }
        break;
      case 'cvv':
        if (!value) {
          errors.cvv = 'El CVV es requerido';
        } else if (!/^\d+$/.test(value)) {
          errors.cvv = 'Solo se permiten números';
        }
        break;
    }

    return errors;
  };

  const validateStep4Field = (field: keyof typeof step4Data, value: string) => {
    const errors: Partial<typeof step4Data> = {};

    switch (field) {
      case 'shippingAddress':
        if (!value) {
          errors.shippingAddress = 'La dirección es requerida';
        }
        break;
      case 'city':
        if (!value) {
          errors.city = 'La ciudad es requerida';
        } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(value)) {
          errors.city = 'Solo se permiten letras';
        }
        break;
      case 'state':
        if (!value) {
          errors.state = 'El estado es requerido';
        } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(value)) {
          errors.state = 'Solo se permiten letras';
        }
        break;
      case 'postalCode':
        if (!value) {
          errors.postalCode = 'El código postal es requerido';
        } else if (!/^\d{5}$/.test(value)) {
          errors.postalCode = 'Debe tener exactamente 5 dígitos';
        }
        break;
    }

    return errors;
  };

  // Change handlers
  const handleStep1Change = (field: keyof typeof step1Data, value: string) => {
    setStep1Data(prev => ({ ...prev, [field]: value }));
    const fieldErrors = validateStep1Field(field, value);
    setStep1Errors(prev => {
      const newErrors = { ...prev };
      if (Object.keys(fieldErrors).length === 0) {
        delete newErrors[field];
      } else {
        Object.assign(newErrors, fieldErrors);
      }
      return newErrors;
    });
  };

  const handleStep2Change = (field: keyof typeof step2Data, value: string) => {
    setStep2Data(prev => ({ ...prev, [field]: value }));
    const fieldErrors = validateStep2Field(field, value);
    setStep2Errors(prev => {
      const newErrors = { ...prev };
      if (Object.keys(fieldErrors).length === 0) {
        delete newErrors[field];
      } else {
        Object.assign(newErrors, fieldErrors);
      }
      return newErrors;
    });
  };

  const handleStep3Change = (field: keyof typeof step3Data, value: string) => {
    setStep3Data(prev => ({ ...prev, [field]: value }));
    const fieldErrors = validateStep3Field(field, value);
    setStep3Errors(prev => {
      const newErrors = { ...prev };
      if (Object.keys(fieldErrors).length === 0) {
        delete newErrors[field];
      } else {
        Object.assign(newErrors, fieldErrors);
      }
      return newErrors;
    });
  };

  const handleStep4Change = (field: keyof typeof step4Data, value: string) => {
    setStep4Data(prev => ({ ...prev, [field]: value }));
    const fieldErrors = validateStep4Field(field, value);
    setStep4Errors(prev => {
      const newErrors = { ...prev };
      if (Object.keys(fieldErrors).length === 0) {
        delete newErrors[field];
      } else {
        Object.assign(newErrors, fieldErrors);
      }
      return newErrors;
    });
  };

  const getPlanPrice = () => {
    const prices: Record<string, string> = {
      basic: '29',
      professional: '79',
      enterprise: '199'
    };
    return prices[step3Data.selectedPlan] || '0';
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIsComplete(false);
    setStep1Data({ fullName: '', documentNumber: '', phone: '', email: '' });
    setStep2Data({ companyName: '', nit: '', companyType: '', employeeCount: '', address: '' });
    setStep3Data({ selectedPlan: '', paymentMethod: '', cardName: '', cardNumber: '', expiryDate: '', cvv: '' });
    setStep4Data({ shippingAddress: '', city: '', state: '', postalCode: '' });
    setStep1Errors({});
    setStep2Errors({});
    setStep3Errors({});
    setStep4Errors({});
  };

  // Icons
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

  const CardIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );

  const DollarIcon = (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
    </svg>
  );

  const sidebarSteps = [
    { number: 1, title: 'Detalles Básicos', icon: UserIcon },
    { number: 2, title: 'Detalles de Empresa', icon: BuildingIcon },
    { number: 3, title: 'Plan de Suscripción', icon: CardIcon },
    { number: 4, title: 'Detalles de Pago', icon: DollarIcon }
  ];

  const stepNames = ['Detalles Básicos', 'Detalles de Empresa', 'Plan de Suscripción', 'Detalles de Pago'];

  if (isComplete) {
    return <SuccessScreen onReset={handleReset} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Formulario de Registro</h1>
          <p className="text-gray-600">Completa todos los pasos para finalizar tu suscripción</p>
        </div>

        <div className="mb-8 lg:hidden">
          <StepIndicator currentStep={currentStep} totalSteps={4} steps={stepNames} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block">
            <SidebarStep currentStep={currentStep} steps={sidebarSteps} />
          </div>

          <div className="lg:col-span-3 space-y-6">
            {/* Horizontal Step Indicator - Only on desktop */}
            <div className="hidden lg:block">
              <StepIndicator currentStep={currentStep} totalSteps={4} steps={stepNames} />
            </div>

            {/* Main content area with decorative cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column - Main form */}
              <div className={`${currentStep === 3 ? 'md:col-span-2' : 'md:col-span-1'} bg-white p-8 rounded-2xl shadow-lg`}>
                {currentStep === 1 && (
                  <Step1BasicDetails
                    data={step1Data}
                    errors={step1Errors}
                    onChange={handleStep1Change}
                    onNext={() => setCurrentStep(2)}
                  />
                )}

                {currentStep === 2 && (
                  <Step2CompanyDetails
                    data={step2Data}
                    errors={step2Errors}
                    onChange={handleStep2Change}
                    onNext={() => setCurrentStep(3)}
                    onBack={() => setCurrentStep(1)}
                  />
                )}

                {currentStep === 3 && (
                  <Step3SubscriptionPlan
                    data={step3Data}
                    errors={step3Errors}
                    onChange={handleStep3Change}
                    onNext={() => setCurrentStep(4)}
                    onBack={() => setCurrentStep(2)}
                  />
                )}

                {currentStep === 4 && (
                  <Step4PaymentDetails
                    data={step4Data}
                    errors={step4Errors}
                    onChange={handleStep4Change}
                    onSubmit={() => setIsComplete(true)}
                    onBack={() => setCurrentStep(3)}
                    selectedPlan={step3Data.selectedPlan}
                    planPrice={getPlanPrice()}
                  />
                )}
              </div>

              {/* Right column - Decorative cards - Hide on step 3 */}
              {currentStep !== 3 && (
                <div className="md:col-span-1 space-y-6">
                  <StepCard
                    stepNumber={currentStep}
                    title={currentStep === 1 ? 'Detalles Básicos' : currentStep === 2 ? 'Detalles de Empresa' : 'Detalles de Pago'}
                    description="Completa la información requerida para continuar con el proceso de registro."
                    status="in-progress"
                    icon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    }
                    variant="large"
                  />

                  <TimeCard
                    stepNumber={currentStep}
                    title="Revisión de Formulario"
                    description="Tu información será revisada paso a paso durante el proceso."
                    timeRemaining="48 horas"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
