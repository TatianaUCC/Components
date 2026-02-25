import React from 'react';
import Input from './Input';
import Button from './Button';

interface Step1Data {
  fullName: string;
  documentNumber: string;
  phone: string;
  email: string;
}

interface Step1Props {
  data: Step1Data;
  errors: Partial<Step1Data>;
  onChange: (field: keyof Step1Data, value: string) => void;
  onNext: () => void;
}

export default function Step1BasicDetails({ data, errors, onChange, onNext }: Step1Props) {
  const isValid = 
    data.fullName && 
    data.documentNumber && 
    data.phone && 
    data.email &&
    !errors.fullName &&
    !errors.documentNumber &&
    !errors.phone &&
    !errors.email;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Detalles Básicos</h2>
        <p className="text-gray-600">Por favor completa tu información personal</p>
      </div>

      <div className="space-y-6">
        <Input
          label="Nombre Completo"
          name="fullName"
          value={data.fullName}
          onChange={(e) => onChange('fullName', e.target.value)}
          error={errors.fullName}
          placeholder="Juan Pérez García"
          required
        />

        <Input
          label="Número de Documento"
          name="documentNumber"
          value={data.documentNumber}
          onChange={(e) => onChange('documentNumber', e.target.value)}
          error={errors.documentNumber}
          placeholder="1234567890"
          maxLength={10}
          inputMode="numeric"
          required
        />

        <Input
          label="Teléfono"
          name="phone"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          error={errors.phone}
          placeholder="3001234567"
          maxLength={10}
          inputMode="tel"
          required
        />

        <Input
          label="Correo Electrónico"
          name="email"
          type="email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
          error={errors.email}
          placeholder="correo@ejemplo.com"
          inputMode="email"
          required
        />
      </div>

      <div className="mt-8 flex justify-end">
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
