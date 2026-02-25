import React from 'react';

export default function PaymentForm() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-indigo-600">
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-gray-500">STEP 4 / 5</p>
          <h3 className="text-lg font-semibold text-gray-900">Payment Details</h3>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">CARD DETAILS</label>
          <input 
            type="text" 
            placeholder="Alex Parkinson" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <div className="w-4 h-3 bg-white rounded-sm" />
            </div>
            <input 
              type="text" 
              placeholder="4858 3445" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Expiry" 
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          />
          <input 
            type="text" 
            placeholder="CVV" 
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">BILLING ADDRESS</label>
          <input 
            type="text" 
            placeholder="Street Address" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-4"
          />
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="City" 
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
            <input 
              type="text" 
              placeholder="State" 
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
            ← Previous
          </button>
          <button className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
