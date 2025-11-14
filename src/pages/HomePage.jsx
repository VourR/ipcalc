import React from 'react';
import { Network } from 'lucide-react';

export default function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Hero Icon */}
        <div className="inline-block p-6 bg-white rounded-full shadow-xl mb-8">
          <Network size={64} className="text-blue-600" />
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          IP Address Calculator
        </h1>

        {/* Hero Description */}
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          Calculate and analyze IP addresses and subnet masks with ease
        </p>

        {/* CTA Button */}
        <button
          onClick={() => onNavigate('calculator')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Start Calculating →
        </button>
      </div>
    </div>
  );
}