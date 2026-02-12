
import React from 'react';
import { Truck, ShieldCheck, MapPin, Navigation, Clock, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logistics: React.FC = () => {
  return (
    <div className="py-12 bg-white min-h-screen">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
              Sandanell Logistics
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Moving the World,<br />
              <span className="text-amber-500 underline decoration-amber-500/30 underline-offset-8">One Mile at a Time.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              From heavy freight to intricate supply chain optimization, we provide safety-certified transport solutions that power global commerce.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center">
                Get a Freight Quote
                <Truck className="ml-2" size={20} />
              </Link>
              <a href="tel:+1234567890" className="bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors flex items-center">
                <PhoneCall className="mr-2" size={20} />
                Emergency Support
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <img src="https://images.unsplash.com/photo-1519003722824-192d992a605b?auto=format&fit=crop&q=80&w=1200" alt="Logistics Truck" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4 border border-slate-100">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Safety Certified</div>
                <div className="text-xs text-slate-500">2024 Gold Standard Carrier</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Detail */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Precision Transport Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Navigation />, title: 'Route Optimization', desc: 'AI-driven pathing for fuel efficiency and speed.' },
              { icon: <Truck />, title: 'Full Truckload (FTL)', desc: 'Dedicated equipment for your largest shipments.' },
              { icon: <MapPin />, title: 'Real-time Tracking', desc: '24/7 visibility for every asset in our fleet.' },
              { icon: <Clock />, title: 'Last Mile Delivery', desc: 'Critical final-stage transport to your door.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all">
                <div className="text-amber-600 mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Logistics Strategy?</h2>
          <p className="text-slate-600 mb-10">
            Beyond just moving boxes, we build infrastructure. Book a consultation with our supply chain engineers to redesign your flow.
          </p>
          <Link to="/bookings" className="bg-amber-500 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-amber-400 shadow-xl shadow-amber-500/20 transition-all">
            Book Logistics Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
