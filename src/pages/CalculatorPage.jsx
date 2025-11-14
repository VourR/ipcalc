import React, { useState } from 'react';
import { Copy, AlertCircle, CheckCircle } from 'lucide-react';
import { calculateSubnet, isValidIPAddress, isValidPrefix } from '../utils/ipCalculator';

export default function CalculatorPage() {
  const [ip, setIp] = useState('192.168.1.1');
  const [prefix, setPrefix] = useState('24');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    
    // Clear previous state
    setError('');
    setResult(null);
    setCopiedField(null);

    // Validate inputs
    if (!ip.trim()) {
      setError('IP address is required');
      return;
    }

    if (!prefix.trim()) {
      setError('CIDR prefix is required');
      return;
    }

    // Validate IP
    if (!isValidIPAddress(ip)) {
      setError('Invalid IP address format. Please use format: xxx.xxx.xxx.xxx (0-255 for each octet)');
      return;
    }

    // Validate prefix
    if (!isValidPrefix(prefix)) {
      setError('Invalid CIDR prefix. Prefix must be a number between 0 and 32');
      return;
    }

    // Calculate
    const calcResult = calculateSubnet(ip, parseInt(prefix, 10));
    
    if (calcResult.error) {
      setError(calcResult.error);
    } else {
      setResult(calcResult);
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const ResultRow = ({ label, value, copyable = true }) => (
    <div className="border-b border-gray-200 py-4 last:border-b-0 flex items-center justify-between">
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-600 mb-1">{label}</p>
        <p className="text-lg font-mono text-gray-900 break-all">{value}</p>
      </div>
      {copyable && (
        <button
          onClick={() => copyToClipboard(value, label)}
          className="ml-4 p-2 text-gray-500 hover:text-blue-600 transition-colors"
          title="Copy to clipboard"
        >
          {copiedField === label ? (
            <CheckCircle size={20} className="text-green-500" />
          ) : (
            <Copy size={20} />
          )}
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">IP Calculator</h1>
          <p className="text-lg text-gray-700">
            Enter an IP address and CIDR prefix to calculate subnet information
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Input</h2>
            
            <form onSubmit={handleCalculate} className="space-y-6">
              {/* IP Address Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  IP Address
                </label>
                <input
                  type="text"
                  value={ip}
                  onChange={(e) => setIp(e.target.value)}
                  placeholder="e.g., 192.168.1.1"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 font-mono"
                />
                <p className="text-xs text-gray-500 mt-1">
                  IPv4 format: xxx.xxx.xxx.xxx (0-255 for each octet)
                </p>
              </div>

              {/* CIDR Prefix Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  CIDR Prefix Length
                </label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    min="0"
                    max="32"
                    placeholder="24"
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 font-mono"
                  />
                  <input
                    type="range"
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    min="0"
                    max="32"
                    className="flex-1 cursor-pointer"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  CIDR prefix: 0-32 (range slider can be used too)
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded flex gap-3">
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-800">Validation Error</h3>
                    <p className="text-red-700 text-sm mt-1">{error}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Calculate Subnet
              </button>

              {/* Common Examples */}
              <div className="border-t pt-6">
                <p className="text-sm font-semibold text-gray-700 mb-3">Quick Examples:</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIp('10.0.0.0');
                      setPrefix('8');
                    }}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm font-mono transition-all"
                  >
                    10.0.0.0/8
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIp('172.16.0.0');
                      setPrefix('12');
                    }}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm font-mono transition-all"
                  >
                    172.16.0.0/12
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIp('192.168.0.0');
                      setPrefix('16');
                    }}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm font-mono transition-all"
                  >
                    192.168.0.0/16
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIp('8.8.8.8');
                      setPrefix('32');
                    }}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm font-mono transition-all"
                  >
                    8.8.8.8/32
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
            
            {result ? (
              <div>
                {/* Success Badge */}
                <div className="mb-6 bg-green-50 border-l-4 border-green-600 p-4 rounded flex gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-green-800">Calculation Complete</h3>
                    <p className="text-green-700 text-sm mt-1">
                      Subnet information calculated successfully
                    </p>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="space-y-0">
                  <ResultRow label="IP Address" value={result.ipAddress} />
                  <ResultRow label="Netmask" value={result.netmask} />
                  <ResultRow label="CIDR Notation" value={`${result.ipAddress}/${result.prefix}`} />
                  <ResultRow label="Wildcard" value={result.wildcard} />
                  <ResultRow label="Network Address" value={result.network} />
                  <ResultRow label="Broadcast Address" value={result.broadcast} />
                  <ResultRow label="First Host (Min)" value={result.hostMin} />
                  <ResultRow label="Last Host (Max)" value={result.hostMax} />
                  <ResultRow label="Usable Hosts" value={result.usableHosts} copyable={false} />
                  <ResultRow label="Total Addresses" value={result.totalAddresses} copyable={false} />
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-xs text-gray-600 mb-1">IP Class</p>
                      <p className="text-lg font-bold text-blue-600">{result.classType}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-xs text-gray-600 mb-1">Prefix Length</p>
                      <p className="text-lg font-bold text-blue-600">/{result.prefix}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-center">
                <div>
                  <p className="text-gray-500 text-lg mb-2">No calculation yet</p>
                  <p className="text-gray-400 text-sm">
                    Fill in the IP address and CIDR prefix, then click "Calculate Subnet" to see results
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding the Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Network Address</h3>
              <p className="text-gray-700 mb-4">
                The first IP address in a subnet. Used to identify the network itself. All host bits are set to 0.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Broadcast Address</h3>
              <p className="text-gray-700 mb-4">
                The last IP address in a subnet. Used to send packets to all hosts in the network. All host bits are set to 1.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Host Range</h3>
              <p className="text-gray-700 mb-4">
                The usable IP addresses between the network and broadcast addresses. These can be assigned to devices.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Wildcard Mask</h3>
              <p className="text-gray-700 mb-4">
                The inverse of the subnet mask. Shows where bits can vary (for access control lists).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
