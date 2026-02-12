
import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook, 
  Send as Telegram, Calendar as CalendarIcon, ExternalLink, 
  Map as MapIcon, Compass, MessageSquare, Loader2, Sparkles 
} from 'lucide-react';
import { geminiService } from '../services/geminiService';

const SOCIAL_LINKS = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sussanayusufnale/', label: 'LinkedIn' },
  { icon: Telegram, href: 'https://t.me/sandanellglobal', label: 'Telegram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const BrisbaneAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<{ text: string, links: any[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const [userCoords, setUserCoords] = useState<{ latitude: number; longitude: number } | undefined>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserCoords({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
        () => console.log("Location access denied")
      );
    }
  }, []);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const result = await geminiService.getBrisbaneLocalInsights(query, userCoords);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <Compass size={120} />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-slate-900">
            <Sparkles size={20} />
          </div>
          <h3 className="text-xl font-bold">Brisbane Operations Concierge</h3>
        </div>
        
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Visiting our Brisbane office? Ask our AI assistant about local logistics hubs, meeting spots, or directions.
        </p>

        <form onSubmit={handleAsk} className="relative mb-6">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., Best meeting spots near the office?"
            className="w-full bg-slate-800 border-none rounded-2xl pl-4 pr-12 py-4 text-sm focus:ring-2 focus:ring-amber-500 outline-none placeholder:text-slate-500"
          />
          <button 
            type="submit"
            disabled={loading}
            className="absolute right-2 top-2 w-10 h-10 bg-amber-500 text-slate-900 rounded-xl flex items-center justify-center hover:bg-amber-400 transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : <MessageSquare size={18} />}
          </button>
        </form>

        {response && (
          <div className="mt-6 p-5 bg-slate-800/50 rounded-2xl border border-slate-700 animate-in fade-in slide-in-from-top-2">
            <p className="text-sm text-slate-200 leading-relaxed mb-4">
              {response.text}
            </p>
            {response.links && response.links.length > 0 && (
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Sources & Places:</p>
                <div className="flex flex-wrap gap-2">
                  {response.links.map((chunk: any, i: number) => {
                    const place = chunk.maps || chunk.web;
                    if (!place) return null;
                    return (
                      <a 
                        key={i} 
                        href={place.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border border-slate-600"
                      >
                        <span>{place.title || "View Place"}</span>
                        <ExternalLink size={12} />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ContactBookings: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-amber-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">Reach Out & Bookings Hub</span>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-none">
              Let's Scale Your <br />
              <span className="text-amber-500">Excellence.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Global logistics coordination, strategic lead audits, or luxury lifestyle styling — 
              choose how you'd like to connect with the Sandanell team.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm">
                  <MapIcon size={24} />
                </div>
                <div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Regional Hub</div>
                   <div className="font-extrabold text-slate-900">Brisbane, Australia</div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Action */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Instant Booking Card */}
            <div className="bg-amber-500 p-10 rounded-[2.5rem] text-slate-900 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <CalendarIcon size={28} />
                </div>
                <h2 className="text-3xl font-black mb-4">Book a Strategy Session</h2>
                <p className="text-slate-900/80 font-medium mb-10 text-lg leading-relaxed">
                  Secure an immediate 30-minute slot with our regional consultants. 
                  Available for Hub, Logistics, and Lifestyle verticals.
                </p>
                <a 
                  href="https://calendly.com/sussananale/sandanell-va-hub-assistance"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-slate-800 transition-all hover:scale-105 shadow-xl"
                >
                  <span>Open Calendly</span>
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* AI Assistant for Brisbane */}
            <BrisbaneAssistant />

            {/* Quick Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-amber-500 transition-colors">
                 <Phone className="text-amber-500 mb-4" size={24} />
                 <h4 className="font-black text-slate-900 mb-1">Call Us</h4>
                 <p className="text-sm text-slate-500">+61 (Brisbane Hub)</p>
              </div>
              <div className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-amber-500 transition-colors">
                 <Mail className="text-amber-500 mb-4" size={24} />
                 <h4 className="font-black text-slate-900 mb-1">Email Us</h4>
                 <p className="text-sm text-slate-500">hello@sandanell.com</p>
              </div>
            </div>
          </div>

          {/* Right Column: Comprehensive Inquiry Form */}
          <div className="lg:col-span-7">
             <div className="bg-slate-50 p-10 lg:p-14 rounded-[3rem] border border-slate-100 sticky top-24">
                <div className="mb-10">
                   <h2 className="text-3xl font-black text-slate-900 mb-2">Send an Inquiry</h2>
                   <p className="text-slate-500 font-medium">For larger projects or custom logistics requirements.</p>
                </div>

                {formStatus === 'success' ? (
                  <div className="bg-green-500 text-white p-10 rounded-3xl text-center animate-in zoom-in-95">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles size={32} />
                    </div>
                    <h3 className="text-2xl font-black mb-2">Message Received!</h3>
                    <p className="font-medium opacity-90">Our Brisbane desk will contact you within 4 business hours.</p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-8 text-sm font-black border-b-2 border-white pb-1 hover:opacity-80 transition-opacity"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input required type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition-all shadow-sm" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                        <input required type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition-all shadow-sm" placeholder="john@company.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                        <select className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition-all shadow-sm">
                           <option>General Logistics Inquiry</option>
                           <option>Hub Lead Audit Request</option>
                           <option>Bespoke Styling Consultation</option>
                           <option>Brisbane Office Visit</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Urgency</label>
                        <div className="flex gap-2">
                          {['Normal', 'Urgent', 'Critical'].map(level => (
                            <button 
                              key={level}
                              type="button"
                              className="flex-1 py-4 px-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-slate-200 bg-white hover:border-amber-500 focus:bg-amber-500 focus:text-slate-900 focus:border-amber-500 transition-all"
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Project Details</label>
                      <textarea required className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm h-40 focus:ring-2 focus:ring-amber-500 outline-none transition-all shadow-sm" placeholder="Please describe your requirements in detail..."></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'sending'}
                      className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center space-x-3 disabled:opacity-50"
                    >
                      {formStatus === 'sending' ? (
                        <Loader2 className="animate-spin" size={24} />
                      ) : (
                        <>
                          <span>Submit Reach Out Request</span>
                          <Telegram size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}

                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Regional Social Networks</h5>
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((item, idx) => (
                      <a 
                        key={idx} 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all shadow-sm"
                        title={item.label}
                      >
                        <item.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBookings;
