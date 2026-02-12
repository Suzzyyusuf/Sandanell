
import React from 'react';
import { ShoppingBag, Star, Sparkles, Shirt, Scissors, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const Lifestyle: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Luxury Hero */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-50"
            alt="Lifestyle Hero"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
            The Sandanell Collection
          </div>
          <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-tight">
            Curation of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Refined Living.</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mb-10">
            Discover a curated world of premium hair, bespoke apparel, and lifestyle essentials designed for the discerning individual.
          </p>
          <div className="flex flex-wrap gap-4">
             <button className="bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-all">
               Shop Collection
             </button>
             <Link to="/bookings" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
               Book Styling Session
             </Link>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
             <h2 className="text-3xl font-bold text-slate-900 mb-2">Shop by Category</h2>
             <p className="text-slate-500">Premium quality in every detail.</p>
          </div>
          <button className="text-amber-600 font-bold flex items-center hover:underline mt-4 md:mt-0">
            View All Collections <Star className="ml-2" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: 'https://images.unsplash.com/photo-1522337660859-02fbefad4740?auto=format&fit=crop&q=80&w=800', title: 'Hair & Beauty', icon: <Scissors />, desc: 'Elite styling products and natural hair extensions.' },
            { img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800', title: 'Apparel & Fashion', icon: <Shirt />, desc: 'Bespoke designs and high-street luxury essentials.' },
            { img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800', title: 'General Merchandise', icon: <Package />, desc: 'Curated home and lifestyle accessories.' }
          ].map((cat, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-96 rounded-3xl overflow-hidden mb-6">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <div className="text-amber-400 mb-2">{cat.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Service */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Styling" />
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Experience Personal Styling</h2>
              <p className="text-slate-600 text-lg mb-8">
                Not sure what fits your vibe? Book a complimentary styling session with our lifestyle consultants. 
                We offer virtual and in-person consultations for hair, fashion, and lifestyle curation.
              </p>
              <ul className="space-y-4 mb-10 text-slate-700">
                <li className="flex items-center"><Sparkles className="text-amber-500 mr-3" size={18}/> Personalized Color Analysis</li>
                <li className="flex items-center"><Sparkles className="text-amber-500 mr-3" size={18}/> Wardrobe Refresh Planning</li>
                <li className="flex items-center"><Sparkles className="text-amber-500 mr-3" size={18}/> Bespoke Merchandise Sourcing</li>
              </ul>
              <Link to="/bookings" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-slate-800 transition-colors">
                Book a styling session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lifestyle;
