'use client';

import React, { useState } from 'react';
import PaymentCard from '../components/PaymentCard';

export default function Example5() {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Example 5: Payment Method Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PaymentCard
            type="card"
            isSelected={paymentMethod === 'card'}
            onSelect={() => setPaymentMethod('card')}
          />
          <PaymentCard
            type="transfer"
            isSelected={paymentMethod === 'transfer'}
            onSelect={() => setPaymentMethod('transfer')}
          />
        </div>
      </div>
    </div>
  );
}
