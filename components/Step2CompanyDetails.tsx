import React from 'react';
import Input from './Input';
import Select from './Select';
import Button from './Button';

interface Step2Data {
  companyName: string;
  nit: string;
  companyType: string;
  employeeCount: string;
  address: string;
}

interface Step2Props {
  data: Step2Data;
  errors: Partial<Step2Data>;
  onChange: (field: keyof Step2Data, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2CompanyDetails({ data, errors, onChange, onNext, onBack }: Step2Props) {
  const isValid = 
    data.companyName && 
    data.nit && 
    data.companyType && 
    data.employeeCount && 
    data.address &&
    !errors.companyName &&
    !errors.nit &&
    !errors.employeeCount &&
    !errors.address;

  const companyTypes = [
    { value: 'SAS', label: 'SAS - Sociedad por Acciones Simplificada' },
    { value: 'LTDA', label: 'LTDA - Sociedad Limitada' },
    { value: 'SA', label: 'SA - Sociedad Anónima' },
    { value: 'NATURAL', label: 'Persona Natural' }
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Detalles de la Empresa</h2>
        <p className="text-gray-600">Información sobre tu empresa u organización</p>
      </div>

      <div className="space-y-6">
        <Input
          label="Nombre de la Empresa"
          name="companyName"
          value={data.companyName}
          onChange={(e) => onChange('companyName', e.target.value)}
          error={errors.companyName}
          placeholder="Mi Empresa S.A.S"
          required
        />

        <Input
          label="NIT"
          name="nit"
          value={data.nit}
          onChange={(e) => onChange('nit', e.target.value)}
          error={errors.nit}
          placeholder="900123456"
          maxLength={12}
          inputMode="numeric"
          required
        />

        <Select
          label="Tipo de Empresa"
          name="companyType"
          value={data.companyType}
          onChange={(e) => onChange('companyType', e.target.value)}
          options={companyTypes}
          error={errors.companyType}
          required
        />

        <Input
          label="Número de Empleados"
          name="employeeCount"
          value={data.employeeCount}
          onChange={(e) => onChange('employeeCount', e.target.value)}
          error={errors.employeeCount}
          placeholder="50"
          maxLength={4}
          inputMode="numeric"
          required
        />

        <Input
          label="Dirección"
          name="address"
          value={data.address}
          onChange={(e) => onChange('address', e.target.value)}
          error={errors.address}
          placeholder="Calle 123 #45-67"
          required
        />
      </div>

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
