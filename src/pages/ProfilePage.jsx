// src/pages/ProfilePage.jsx
import React from 'react';
import { User, Mail, BookOpen } from 'lucide-react';

export default function ProfilePage() {
  const profile = {
    nama: 'RAJWA VOURZA TSAQIFA',
    nim: '21120123130091',
    email: 'rajwavour@students.undip.ac.id',
    kelas: '38'
  };

  const projectInfo = {
    name: 'My IP Calculator PWA',
    description: 'A Progressive Web App for calculating and analyzing IP addresses with subnet masks',
    technologies: [
      'React 19',
      'Vite',
      'TailwindCSS',
      'Lucide React Icons',
      'PWA (Workbox)',
      'Service Workers'
    ],
    features: [
      'Subnet Calculation',
      'CIDR Notation Support',
      'Works Offline',
      'Installable as App',
      'Input Validation',
      'Copy to Clipboard'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32"></div>
          <div className="px-8 pb-8">
            {/* Avatar */}
            <div className="flex items-end gap-6 -mt-16 mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center">
                <User size={64} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{profile.nama}</h1>
                <p className="text-gray-600 text-lg">{profile.nim}</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={20} className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <BookOpen size={20} className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Kelompok</p>
                  <p className="font-semibold">{profile.kelas}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{projectInfo.name}</h2>
          <p className="text-gray-700 mb-6">{projectInfo.description}</p>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {projectInfo.technologies.map((tech, idx) => (
                <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-center">
                  <p className="font-semibold text-blue-900">{tech}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projectInfo.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PWA Information */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Progressive Web App (PWA)</h2>
          <p className="text-gray-700 mb-4">
            This application is built as a Progressive Web App, which means:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Installable</p>
                <p className="text-gray-700 text-sm">Can be installed as a standalone app on your device</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Offline Support</p>
                <p className="text-gray-700 text-sm">Works even when you don't have internet connection</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Fast & Reliable</p>
                <p className="text-gray-700 text-sm">Service workers ensure fast loading and reliability</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Secure</p>
                <p className="text-gray-700 text-sm">Served over HTTPS with secure computation</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Installation Instructions */}
        <div className="mt-8 bg-blue-50 rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Install</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">On Desktop (Chrome, Edge, Brave)</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Look for the "Install" button in the address bar</li>
                <li>Click it to install the app on your computer</li>
                <li>The app will open in its own window</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">On Mobile (iOS/Android)</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Open the app in your browser (Chrome, Firefox, Safari)</li>
                <li>Tap the Share or Menu button</li>
                <li>Select "Add to Home Screen" or "Install App"</li>
                <li>The app will appear on your home screen</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}