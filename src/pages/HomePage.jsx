import React from 'react';
import { Network, Wifi, ShieldCheck, Zap } from 'lucide-react';

export default function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
            <Network size={48} className="text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            IP Address Calculator
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Calculate, analyze, and understand IP addresses and subnet masks with ease.
            A powerful PWA tool for network professionals and students.
          </p>
          <button
            onClick={() => onNavigate('calculator')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Start Calculating →
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <Network size={24} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Subnet Calculation</h3>
            <p className="text-gray-600 text-sm">
              Calculate network, broadcast, and host ranges instantly
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
              <Wifi size={24} className="text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Works Offline</h3>
            <p className="text-gray-600 text-sm">
              PWA technology means it works without internet connection
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
              <ShieldCheck size={24} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Secure & Private</h3>
            <p className="text-gray-600 text-sm">
              All calculations are done locally in your browser
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4">
              <Zap size={24} className="text-yellow-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Fast & Easy</h3>
            <p className="text-gray-600 text-sm">
              Simple interface for quick IP calculations
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex w-12 h-12 bg-blue-600 text-white rounded-full items-center justify-center font-bold text-xl leading-none mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enter IP Address</h3>
              <p className="text-gray-600">
                Input your IPv4 address in the calculator form
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex w-12 h-12 bg-blue-600 text-white rounded-full items-center justify-center font-bold text-xl leading-none mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Set CIDR Prefix</h3>
              <p className="text-gray-600">
                Specify the subnet mask using CIDR notation (0-32)
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex w-12 h-12 bg-blue-600 text-white rounded-full items-center justify-center font-bold text-xl leading-none mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get Results</h3>
              <p className="text-gray-600">
                View detailed subnet information instantly
              </p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What is CIDR?</h3>
            <p className="text-gray-700 mb-4">
              Classless Inter-Domain Routing (CIDR) is a method for allocating IP addresses and routing IP packets. 
              The CIDR notation represents the network prefix length as a number from 0 to 32.
            </p>
            <p className="text-gray-700">
              For example: <code className="bg-white px-2 py-1 rounded text-sm font-mono">192.168.1.0/24</code> means 
              the first 24 bits represent the network address.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-8 border-l-4 border-green-600">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Subnets</h3>
            <ul className="text-gray-700 space-y-2">
              <li><code className="bg-white px-2 py-1 rounded text-sm font-mono">/24</code> - 256 addresses (255 usable)</li>
              <li><code className="bg-white px-2 py-1 rounded text-sm font-mono">/25</code> - 128 addresses (127 usable)</li>
              <li><code className="bg-white px-2 py-1 rounded text-sm font-mono">/26</code> - 64 addresses (63 usable)</li>
              <li><code className="bg-white px-2 py-1 rounded text-sm font-mono">/27</code> - 32 addresses (31 usable)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}