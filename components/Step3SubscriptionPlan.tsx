import React from 'react';
import PlanCard from './PlanCard';
import PaymentCard from './PaymentCard';
import Input from './Input';
import Button from './Button';

interface Step3Data {
  selectedPlan: string;
  paymentMethod: string;
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface Step3Props {
  data: Step3Data;
  errors: Partial<Step3Data>;
  onChange: (field: keyof Step3Data, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step3SubscriptionPlan({ data, errors, onChange, onNext, onBack }: Step3Props) {
  const plans = [
    {
      id: 'basic',
      title: 'Básico',
      price: '29',
      features: [
        'Hasta 10 usuarios',
        'Soporte por email',
        '5 GB de almacenamiento',
        'Reportes básicos'
      ]
    },
    {
      id: 'professional',
      title: 'Profesional',
      price: '79',
      features: [
        'Hasta 50 usuarios',
        'Soporte prioritario 24/7',
        '50 GB de almacenamiento',
        'Reportes avanzados',
        'Integraciones API'
      ]
    },
    {
      id: 'enterprise',
      title: 'Empresarial',
      price: '199',
      features: [
        'Usuarios ilimitados',
        'Soporte dedicado',
        'Almacenamiento ilimitado',
        'Reportes personalizados',
        'Integraciones avanzadas',
        'Seguridad empresarial'
      ]
    }
  ];

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const groups = numbers.match(/.{1,4}/g);
    return groups ? groups.join(' ') : numbers;
  };

  const handleCardNumberChange = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    onChange('cardNumber', numbers);
  };

  const formatExpiryDate = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length >= 2) {
      return numbers.slice(0, 2) + '/' + numbers.slice(2, 4);
    }
    return numbers;
  };

  const handleExpiryChange = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    onChange('expiryDate', numbers);
  };

  const isCardValid = data.paymentMethod === 'transfer' || (
    data.cardName &&
    data.cardNumber &&
    data.expiryDate &&
    data.cvv &&
    !errors.cardName &&
    !errors.cardNumber &&
    !errors.expiryDate &&
    !errors.cvv
  );

  const isValid = data.selectedPlan && data.paymentMethod && isCardValid;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Plan de Suscripción</h2>
        <p className="text-gray-600">Selecciona el plan que mejor se adapte a tus necesidades</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            isSelected={data.selectedPlan === plan.id}
            onSelect={() => onChange('selectedPlan', plan.id)}
          />
        ))}
      </div>

      <div className="border-t border-gray-200 pt-8 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Método de Pago</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PaymentCard
            type="card"
            isSelected={data.paymentMethod === 'card'}
            onSelect={() => onChange('paymentMethod', 'card')}
          />
          <PaymentCard
            type="transfer"
            isSelected={data.paymentMethod === 'transfer'}
            onSelect={() => onChange('paymentMethod', 'transfer')}
          />
        </div>
      </div>

      {data.paymentMethod === 'card' && (
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Información de la Tarjeta</h3>
          <div className="space-y-6">
            <Input
              label="Nombre en la Tarjeta"
              name="cardName"
              value={data.cardName}
              onChange={(e) => onChange('cardName', e.target.value)}
              error={errors.cardName}
              placeholder="JUAN PEREZ"
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número de Tarjeta <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formatCardNumber(data.cardNumber)}
                  onChange={(e) => handleCardNumberChange(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  inputMode="numeric"
                  className={`w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ${
                    errors.cardNumber 
                      ? 'border-red-500 bg-red-50' 
                      : ''
                  }`}
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
              </div>
              {errors.cardNumber && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.cardNumber}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de Expiración <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formatExpiryDate(data.expiryDate)}
                  onChange={(e) => handleExpiryChange(e.target.value)}
                  placeholder="MM/AA"
                  maxLength={5}
                  inputMode="numeric"
                  className={`w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ${
                    errors.expiryDate 
                      ? 'border-red-500 bg-red-50' 
                      : ''
                  }`}
                />
                {errors.expiryDate && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.expiryDate}
                  </p>
                )}
              </div>

              <Input
                label="CVV"
                name="cvv"
                value={data.cvv}
                onChange={(e) => onChange('cvv', e.target.value)}
                error={errors.cvv}
                placeholder="123"
                inputMode="numeric"
                required
              />
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between gap-4">
        <Button onClick={onBack} variant="secondary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior
        </Button>
        <Button onClick={onNext} disabled={!isValid}>
          Siguiente
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
