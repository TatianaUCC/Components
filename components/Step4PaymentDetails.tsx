import React from 'react';
import Input from './Input';
import Button from './Button';

interface Step4Data {
  shippingAddress: string;
  city: string;
  state: string;
  postalCode: string;
}

interface Step4Props {
  data: Step4Data;
  errors: Partial<Step4Data>;
  onChange: (field: keyof Step4Data, value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  selectedPlan: string;
  planPrice: string;
}

export default function Step4PaymentDetails({ 
  data, 
  errors, 
  onChange, 
  onSubmit, 
  onBack,
  selectedPlan,
  planPrice
}: Step4Props) {
  const isValid = 
    data.shippingAddress && 
    data.city && 
    data.state && 
    data.postalCode &&
    !errors.shippingAddress &&
    !errors.city &&
    !errors.state &&
    !errors.postalCode;

  const planNames: Record<string, string> = {
    basic: 'Básico',
    professional: 'Profesional',
    enterprise: 'Empresarial'
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Detalles de Pago</h2>
        <p className="text-gray-600">Información de envío y confirmación</p>
      </div>

      <div className="space-y-6 mb-8">
        <Input
          label="Dirección de Envío"
          name="shippingAddress"
          value={data.shippingAddress}
          onChange={(e) => onChange('shippingAddress', e.target.value)}
          error={errors.shippingAddress}
          placeholder="Calle 123 #45-67, Apto 101"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Ciudad"
            name="city"
            value={data.city}
            onChange={(e) => onChange('city', e.target.value)}
            error={errors.city}
            placeholder="Bogotá"
            required
          />

          <Input
            label="Estado/Departamento"
            name="state"
            value={data.state}
            onChange={(e) => onChange('state', e.target.value)}
            error={errors.state}
            placeholder="Cundinamarca"
            required
          />
        </div>

        <Input
          label="Código Postal"
          name="postalCode"
          value={data.postalCode}
          onChange={(e) => onChange('postalCode', e.target.value)}
          error={errors.postalCode}
          placeholder="110111"
          maxLength={5}
          inputMode="numeric"
          required
        />
      </div>

      <div className="bg-gradient-to-br from-indigo-600 to-blue-500 rounded-2xl p-8 shadow-lg text-white mb-8">
        <h3 className="text-xl font-bold mb-6">Resumen del Pedido</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-white/20">
            <span className="text-indigo-100">Plan Seleccionado</span>
            <span className="font-semibold text-lg">{planNames[selectedPlan] || 'No seleccionado'}</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-white/20">
            <span className="text-indigo-100">Precio Mensual</span>
            <span className="font-semibold text-lg">${planPrice}</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-white/20">
            <span className="text-indigo-100">IVA (19%)</span>
            <span className="font-semibold text-lg">${(parseFloat(planPrice) * 0.19).toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-xl font-bold">Total</span>
            <span className="text-3xl font-bold">${(parseFloat(planPrice) * 1.19).toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <Button onClick={onBack} variant="secondary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior
        </Button>
        <Button onClick={onSubmit} disabled={!isValid}>
          Finalizar
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
