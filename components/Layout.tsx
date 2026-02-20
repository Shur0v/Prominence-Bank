
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_SERVICES } from '../data/services';
import { LOGO_URL } from '../constants';
import { Menu, X, ChevronDown, Phone, Mail, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={LOGO_URL} alt="Prominence Bank" className="h-10 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="text-gray-700 hover:text-brand flex items-center font-medium transition-colors h-20"
              >
                Our Services <ChevronDown size={16} className="ml-1" />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute left-0 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  {ALL_SERVICES.map((s) => (
                    <Link 
                      key={s.id} 
                      to={`/service/${s.id}`} 
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/about" className="text-gray-700 hover:text-brand font-medium">About</Link>
            <Link to="/compliance" className="text-gray-700 hover:text-brand font-medium">Compliance</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand font-medium">Contact</Link>
            
            <a 
              href="https://my-account.prominencebank.com/" 
              className="bg-brand text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-opacity-90 transition-all shadow-md"
            >
              Open an Account
            </a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top">
          {ALL_SERVICES.map((s) => (
            <Link 
              key={s.id} 
              to={`/service/${s.id}`} 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              {s.title}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <a href="https://my-account.prominencebank.com/" className="block w-full text-center bg-brand text-white px-6 py-3 rounded-sm font-bold">
              Open an Account
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => (
  <footer className="bg-brand text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="space-y-6">
        <img src={LOGO_URL} alt="Prominence Bank" className="h-10 brightness-0 invert" />
        <p className="text-gray-400 text-sm leading-relaxed">
          Prominence Bank is a premier private banking institution serving the global elite with structured financial solutions, institutional security, and multi-jurisdictional compliance.
        </p>
        <div className="flex space-x-4">
          <Phone size={18} className="text-gray-300" />
          <Mail size={18} className="text-gray-300" />
          <Globe size={18} className="text-gray-300" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-6">Core Services</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          {ALL_SERVICES.slice(0, 6).map(s => (
            <li key={s.id}><Link to={`/service/${s.id}`} className="hover:text-white transition-colors">{s.title}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-6">Global Reach</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          {ALL_SERVICES.slice(6, 12).map(s => (
            <li key={s.id}><Link to={`/service/${s.id}`} className="hover:text-white transition-colors">{s.title}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-6">Regulatory</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
          <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          <li><Link to="/compliance" className="hover:text-white">AML & KYC Policy</Link></li>
          <li><Link to="/ethics" className="hover:text-white">Conflict of Interest</Link></li>
          <li><Link to="/sanctions" className="hover:text-white">Global Sanctions</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 uppercase tracking-widest">
      &copy; {new Date().getFullYear()} Prominence Bank. All rights reserved. Secure institutional communication.
    </div>
  </footer>
);
