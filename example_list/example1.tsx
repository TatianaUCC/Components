'use client';

import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Example1() {
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFullName(value);

    if (!value) {
      setError('El nombre es requerido');
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(value)) {
      setError('Solo se permiten letras y espacios');
    } else if (value.length < 3) {
      setError('Mínimo 3 caracteres');
    } else {
      setError('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Example 1: Input Component with Validation</h2>
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <Input
            label="Nombre Completo"
            name="fullName"
            value={fullName}
            onChange={handleChange}
            error={error}
            placeholder="Juan Pérez García"
            required
          />
          <div className="mt-4">
            <Button disabled={!fullName || !!error} fullWidth>
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
