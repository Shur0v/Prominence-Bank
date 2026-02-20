
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useParams, Navigate, Link } from 'react-router-dom';
import { Header, Footer } from './components/Layout.tsx';
import { ServicePage } from './components/ServicePage.tsx';
import { ALL_SERVICES } from './data/services.ts';
import { getIcon } from './constants.tsx';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero */}
      <section className="bg-brand text-white py-32 lg:py-64 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover grayscale"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl lg:text-8xl font-black mb-8 tracking-tighter uppercase">Prominence Bank</h1>
          <p className="text-2xl lg:text-3xl text-blue-100 max-w-3xl mx-auto mb-12 font-light tracking-wide">
            Elite Institutional Private Banking. <br/>Global Connectivity. Regulated Security.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://my-account.prominencebank.com/" className="bg-white text-brand px-12 py-4 rounded-sm font-bold shadow-2xl hover:bg-gray-100 transition-all text-center">
              OPEN AN ACCOUNT
            </a>
            <Link to="/compliance" className="border border-white/30 px-12 py-4 rounded-sm font-bold hover:bg-white/10 transition-all flex items-center justify-center">
              VIEW COMPLIANCE
            </Link>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-brand mb-4">Institutional Service Suite</h2>
          <div className="w-24 h-1 bg-brand mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_SERVICES.map((service) => (
            <Link 
              key={service.id} 
              to={`/service/${service.id}`}
              className="group p-10 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand/20 transition-all rounded-sm flex flex-col"
            >
              <div className="p-4 bg-gray-50 text-brand rounded-lg w-fit mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                {getIcon(service.iconName, 32)}
              </div>
              <h3 className="text-2xl font-bold text-brand mb-4 group-hover:text-brand transition-colors">{service.title}</h3>
              <p className="text-gray-500 mb-8 line-clamp-2 group-hover:text-gray-700 transition-colors">{service.shortDescription}</p>
              <div className="mt-auto flex items-center text-brand font-bold text-sm tracking-widest uppercase">
                Explore Service <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Values */}
      <section className="bg-gray-50 py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand uppercase tracking-tighter">Secure</h3>
            <p className="text-gray-600 leading-relaxed">Military-grade encryption and institutional security protocols protect every transaction and interaction.</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand uppercase tracking-tighter">Regulated</h3>
            <p className="text-gray-600 leading-relaxed">Full compliance with international banking standards, KYC, and AML regulatory frameworks across all jurisdictions.</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand uppercase tracking-tighter">Global</h3>
            <p className="text-gray-600 leading-relaxed">Connected to over 11,000 financial institutions worldwide through the primary interbank networks.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicePageRoute: React.FC = () => {
  const { id } = useParams();
  const service = ALL_SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return <Navigate to="/" replace />;

  return <ServicePage service={service} />;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service/:id" element={<ServicePageRoute />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
