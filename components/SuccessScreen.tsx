import React from 'react';
import Button from './Button';

interface SuccessScreenProps {
  onReset: () => void;
}

export default function SuccessScreen({ onReset }: SuccessScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-12 shadow-2xl max-w-md w-full text-center animate-fadeIn">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-scaleIn">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Registro Exitoso!</h2>
        <p className="text-gray-600 mb-8">
          Tu suscripción ha sido procesada correctamente. Recibirás un correo de confirmación en breve.
        </p>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">Número de Orden</p>
            <p className="text-xl font-bold text-indigo-600">#ORD-{Math.floor(Math.random() * 100000)}</p>
          </div>

          <Button onClick={onReset} fullWidth>
            Realizar Otro Registro
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}
