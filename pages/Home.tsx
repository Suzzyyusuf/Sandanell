
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Truck, ShoppingBag, Calendar, Globe2 } from 'lucide-react';
import { STATS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Empowering Excellence <br />
              <span className="text-amber-400">Across Industries.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Premium services in business intelligence, robust logistics, and tailored retail collections. 
              We bridge the gap between complexity and scale.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/about"
                className="bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-amber-400 transition-all hover:scale-105"
              >
                Explore Our Reach
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/bookings"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-white/20 transition-all"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Globe2 className="w-full h-full text-white" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="text-4xl font-extrabold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Service Portals</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Access specialized solutions tailored to your industry needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hub */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Sandanell Hub</h3>
              <p className="text-slate-600 mb-8">Data-driven market research, lead generation, and business intelligence.</p>
              <Link to="/academy" className="flex items-center text-blue-600 font-bold hover:underline">
                Request a Lead Audit <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Logistics */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Sandanell Logistics</h3>
              <p className="text-slate-600 mb-8">Freight trucking, route optimization, and seamless supply chain solutions.</p>
              <Link to="/logistics" className="flex items-center text-green-600 font-bold hover:underline">
                Get a Freight Quote <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Lifestyle */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShoppingBag size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Sandanell Lifestyle</h3>
              <p className="text-slate-600 mb-8">Premium hair, fashion apparel, and general curated merchandise.</p>
              <Link to="/lifestyle" className="flex items-center text-amber-600 font-bold hover:underline">
                Browse the Collection <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to scale your excellence?</h2>
              <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                Join hundreds of brands leveraging our global network for smarter operations and premium growth.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                Contact Our Team
              </Link>
             </div>
             <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-white"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-8 border-white"></div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
