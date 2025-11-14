import React, { useState, useEffect } from 'react';
import { Home, Calculator, User } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down (but not if at the top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Show navbar when at the top
      else if (currentScrollY <= 100) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 flex justify-center pt-4 px-4 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
    }`}>
      <nav className="bg-white shadow-lg rounded-full px-6 py-4 flex items-center justify-between w-full max-w-4xl">
        {/* Logo/Brand */}
        <div className="flex-shrink-0 font-bold text-lg text-blue-600">
          <span className="flex items-center gap-2">
            <Calculator size={24} />
            IP Calculator
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all font-medium ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`p-2 rounded-full flex items-center justify-center transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
