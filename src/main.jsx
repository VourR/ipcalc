import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import PWABadge from './PWABadge'
import HomePage from './pages/HomePage'
import CalculatorPage from './pages/CalculatorPage'
import ProfilePage from './pages/ProfilePage'
import './index.css'

function AppRoot() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
    // Scroll to top
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'calculator':
        return <CalculatorPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      
      {/* Main Content */}
      <main className="min-h-screen">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="py-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm">©2025 IP Calculator PWA. All rights reserved.</p>
        </div>
      </footer>

      {/* PWA Install Badge */}
      <PWABadge />
    </div>
  );
}

// Register PWA service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(() => console.log('Service Worker registered'))
      .catch(err => console.log('Service Worker registration failed:', err));
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
)