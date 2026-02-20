
import React from 'react';
import { ServiceData, ProcessStyle } from '../types';
import { getIcon } from '../constants';
import { ChevronRight, Shield, CheckCircle2, HelpCircle, Globe, ArrowRight } from 'lucide-react';

interface Props {
  service: ServiceData;
}

const UnifiedHero: React.FC<Props> = ({ service }) => {
  return (
    <section className="px-4 pt-12 pb-24 lg:pt-20 lg:pb-32 bg-white">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-[#071114] min-h-[500px] lg:min-h-[600px] flex items-center shadow-2xl">
        
        {/* Fixed Image Element - Right Side Masked */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] pointer-events-none select-none overflow-hidden">
          <div className="relative w-full h-full">
            {/* The Image itself - Increased opacity and adjusted blend for better visibility */}
            <img 
              src={service.heroImageUrl || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"} 
              alt={service.title} 
              className="w-full h-full object-cover opacity-50 transition-opacity duration-1000"
            />
            {/* Side Fade Mask - Ensure it blends perfectly with the solid background color */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071114] via-[#071114]/70 to-transparent lg:block hidden"></div>
            {/* Bottom/Mobile fade for centered alignment on small screens */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071114] via-transparent to-transparent lg:hidden"></div>
            {/* Subtle radial glow to pull image forward */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(70,185,232,0.1)_0%,transparent_50%)]"></div>
          </div>
        </div>

        {/* Content Layer - Left Aligned inside the container */}
        <div className="relative z-10 w-full px-8 lg:px-20 py-20">
          <div className="max-w-2xl text-left">
            <div className="mb-6 inline-flex items-center space-x-2 text-gray-400">
               <span className="text-xs font-medium tracking-widest uppercase opacity-50">Institutional</span>
               <ChevronRight size={12} className="opacity-30" />
               <span className="text-xs font-medium tracking-widest uppercase opacity-50">Services</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
              {service.title}
            </h1>
            
            <p className="text-base lg:text-lg text-gray-400 mb-12 leading-relaxed max-w-lg">
              {service.shortDescription}
            </p>
            
            <div className="flex flex-wrap items-center gap-8">
              <a 
                href="https://my-account.prominencebank.com/" 
                className="group bg-[#46b9e8] text-[#071114] px-10 py-4 rounded-full font-bold flex items-center transition-all hover:scale-105 hover:bg-white shadow-[0_0_30px_rgba(70,185,232,0.2)]"
              >
                Open an Account <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </a>
              <button className="text-white font-semibold flex items-center hover:text-[#46b9e8] transition-colors group">
                Contact Us <ChevronRight size={16} className="ml-1 opacity-50 group-hover:opacity-100 group-hover:text-[#46b9e8] transition-all" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Details from reference */}
        <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-end space-y-6 opacity-20">
           <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white">
              <Globe size={18} />
           </div>
           <div className="w-6 h-[1px] bg-white/30"></div>
           <div className="w-3 h-3 rounded-full bg-[#46b9e8]"></div>
        </div>
      </div>
    </section>
  );
};

const Process: React.FC<Props> = ({ service }) => {
  const steps = service.steps;
  switch (service.processStyle) {
    case ProcessStyle.Timeline:
      return (
        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-100">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start relative pl-20 group">
              <div className="absolute left-0 w-16 h-16 bg-white text-brand rounded-full flex items-center justify-center font-bold text-xl border-4 border-gray-50 shadow-lg group-hover:bg-brand group-hover:text-white transition-all duration-300">
                {i + 1}
              </div>
              <div className="pt-4 bg-white p-8 rounded-xl shadow-sm border border-gray-50 w-full group-hover:shadow-md transition-all">
                <h4 className="text-xs font-black text-brand mb-2 uppercase tracking-[0.3em]">Phase 0{i + 1}</h4>
                <p className="text-gray-700 text-lg font-medium leading-relaxed">{step}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case ProcessStyle.StepCards:
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-10 rounded-sm border-t-4 border-brand shadow-xl hover:-translate-y-2 transition-all group">
              <span className="text-4xl font-black text-brand/10 mb-6 block leading-none group-hover:text-brand/30 transition-colors">0{i + 1}</span>
              <p className="text-brand font-bold text-lg leading-snug">{step}</p>
            </div>
          ))}
        </div>
      );
    case ProcessStyle.HorizontalBlocks:
      return (
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex-1 bg-brand text-white p-10 rounded-sm relative group overflow-hidden flex flex-col justify-end min-h-[240px] hover:bg-opacity-95 transition-all">
                <div className="absolute top-0 right-0 p-6 opacity-5 transform scale-150 rotate-12">
                  {getIcon(service.iconName, 120)}
                </div>
                <h5 className="text-blue-300 font-bold mb-4 uppercase tracking-[0.2em] text-[10px]">Operation Step 0{i+1}</h5>
                <p className="font-semibold text-xl leading-snug relative z-10">{step}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center text-gray-200">
                  <div className="w-12 h-0.5 bg-gray-100"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      );
    case ProcessStyle.VerticalNumbered:
      return (
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-10 items-center p-10 bg-white shadow-sm border-l-8 border-brand hover:bg-gray-50 transition-colors">
              <span className="text-5xl font-black text-brand opacity-20 leading-none">0{i+1}</span>
              <p className="text-brand text-xl font-bold tracking-tight">{step}</p>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

export const ServicePage: React.FC<Props> = ({ service }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <UnifiedHero service={service} />

      {/* Overview */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
               <h2 className="text-4xl font-black text-brand uppercase tracking-tighter">Service Overview</h2>
               <div className="w-20 h-2 bg-brand"></div>
            </div>
            <p className="text-2xl text-gray-500 leading-relaxed font-light">
              {service.tagline}
            </p>
            <div className="grid md:grid-cols-2 gap-8 pt-6">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                  <CheckCircle2 className="text-brand shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 font-bold leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 bg-brand p-12 rounded-sm text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Shield size={120} />
            </div>
            <h3 className="text-2xl font-black mb-10 uppercase tracking-widest border-b border-white/10 pb-6">Institutional Assurance</h3>
            <ul className="space-y-8">
              <li className="flex gap-6">
                <Shield className="text-blue-300 shrink-0" size={32} />
                <div>
                  <p className="font-black text-xl mb-1">Elite Security</p>
                  <p className="text-sm text-blue-100/70 leading-relaxed font-medium">Military-grade protection across all capital movement layers.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <Globe className="text-blue-300 shrink-0" size={32} />
                <div>
                  <p className="font-black text-xl mb-1">Direct Connectivity</p>
                  <p className="text-sm text-blue-100/70 leading-relaxed font-medium">Primary gateway access to 190+ sovereign financial zones.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-black text-brand uppercase tracking-tighter">How It Works</h2>
            <p className="text-gray-400 text-lg uppercase tracking-[0.4em] font-bold">Standardized Banking Protocol</p>
          </div>
          <Process service={service} />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="space-y-4">
              <h2 className="text-4xl font-black text-brand uppercase tracking-tighter">Typical Use Cases</h2>
              <p className="text-gray-400 font-bold tracking-widest uppercase text-sm">Real-World Institutional Scenarios</p>
           </div>
           <div className="text-brand font-black text-sm uppercase tracking-widest border-b-2 border-brand pb-2 cursor-pointer hover:text-opacity-80 transition-all">View full case studies</div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.useCases.map((uc, i) => (
            <div key={i} className="p-10 border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:border-brand/20 transition-all rounded-sm group flex flex-col min-h-[300px]">
              <div className="mb-8 p-3 bg-gray-50 w-fit rounded group-hover:bg-brand group-hover:text-white transition-all duration-300">
                 {getIcon(service.iconName, 24)}
              </div>
              <h4 className="font-black text-brand text-xl mb-6 group-hover:text-brand tracking-tight transition-colors">{uc.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm font-medium mt-auto group-hover:text-gray-700 transition-colors">{uc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Block */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto bg-white p-16 rounded-sm text-brand shadow-xl border border-gray-100 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
          <div className="shrink-0 p-8 bg-brand text-white rounded-full shadow-2xl relative z-10">
            <Shield size={80} />
          </div>
          <div className="relative z-10 flex-grow">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Eligibility & Compliance Standard</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-sm font-bold text-gray-600">
              <div className="flex gap-3"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5"></div> Available to Prominence Bank account holders only</div>
              <div className="flex gap-3"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5"></div> Subject to rigorous KYC/AML review</div>
              <div className="flex gap-3"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5"></div> Mandatory international sanctions screening</div>
              <div className="flex gap-3"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5"></div> Risk-based internal approval process</div>
              <div className="flex gap-3"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5"></div> Subject to final board/bank approval</div>
              <div className="flex gap-3"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5"></div> Informational only — not an investment offer</div>
            </div>
            <p className="mt-10 pt-10 border-t border-gray-100 text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black">
              Regulatory framework: FATF / AMLD / OFAC compliant
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 max-w-5xl mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
           <h2 className="text-4xl font-black text-brand uppercase tracking-tighter">Operational FAQ</h2>
           <p className="text-gray-400 font-bold tracking-widest uppercase text-sm italic">Technical guidance for account holders</p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {service.faqs.map((f, i) => (
            <div key={i} className="group border-l-2 border-gray-100 pl-8 hover:border-brand transition-all">
              <h4 className="text-lg font-black text-brand mb-4 flex items-start gap-3">
                <HelpCircle className="text-gray-300 group-hover:text-brand transition-colors shrink-0 mt-1" size={18} />
                {f.question}
              </h4>
              <p className="text-gray-500 leading-relaxed mb-6 font-medium text-sm">{f.answer}</p>
              <div className="flex flex-wrap gap-2">
                {f.tags.map((tag, j) => (
                  <span key={j} className="text-[9px] uppercase tracking-widest text-gray-400 font-black bg-gray-50 px-3 py-1 border border-gray-100 rounded">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-brand text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover opacity-10 grayscale"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center mb-12 opacity-30">
             <Shield size={64} />
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-10 uppercase tracking-tighter leading-none">Become an account holder to access this service</h2>
          <p className="text-xl lg:text-2xl text-blue-200 mb-16 leading-relaxed max-w-3xl mx-auto font-light">
            Our premium banking services are curated exclusively for clients who pass our multi-tier institutional onboarding protocols.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href="https://my-account.prominencebank.com/" className="bg-white text-brand px-16 py-6 rounded-sm font-black text-lg shadow-2xl hover:bg-gray-100 transition-all uppercase tracking-widest text-center">
              Open an Account
            </a>
            <button className="border border-white/40 px-16 py-6 rounded-sm font-black text-lg hover:bg-white/10 transition-all uppercase tracking-widest">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
