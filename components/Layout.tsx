
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Globe, LogIn, Instagram, Linkedin, Twitter, Facebook, Send as Telegram } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const SOCIAL_LINKS = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sussanayusufnale/', label: 'LinkedIn' },
  { icon: Telegram, href: 'https://t.me/sandanellglobal', label: 'Telegram' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 glass-morphism w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
               <img src="logo.png" alt="Sandanell Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900 uppercase">
              SANDANELL<span className="text-amber-500">GLOBAL</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-colors hover:text-amber-600 px-1 py-1 ${
                  location.pathname === link.path ? 'text-amber-600 border-b-2 border-amber-600' : 'text-slate-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Utility */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors" aria-label="Search">
              <Search size={18} className="text-slate-600" />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors" aria-label="Language selection">
              <Globe size={18} className="text-slate-600" />
            </button>
            <button className="flex items-center space-x-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors shadow-sm">
              <LogIn size={16} />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-xl text-base font-bold text-slate-600 hover:text-amber-600 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 relative overflow-hidden">
      <div className="absolute right-[-5%] bottom-[-5%] w-64 h-64 opacity-5 pointer-events-none">
        <img src="logo.png" className="w-full h-full object-contain grayscale invert" alt="" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="logo.png" alt="Logo" className="w-10 h-10 object-contain brightness-0 invert" />
              <span className="text-2xl font-black tracking-tight text-white block">
                SANDANELL<span className="text-amber-500">GLOBAL</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Empowering excellence across industries through premium business intelligence, 
              robust logistics, and tailored lifestyle retail.
            </p>
            <div className="flex space-x-4 mt-8">
              {SOCIAL_LINKS.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                  title={item.label}
                  aria-label={item.label}
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/academy" className="hover:text-amber-400 transition-colors">Hub</Link></li>
              <li><Link to="/logistics" className="hover:text-amber-400 transition-colors">Logistics</Link></li>
              <li><Link to="/lifestyle" className="hover:text-amber-400 transition-colors">Lifestyle</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Newsletter</h3>
            {submitted ? (
              <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-xl p-4 text-xs font-bold animate-pulse">
                THANK YOU FOR SUBSCRIBING!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex group">
                <label htmlFor="newsletter-email" className="sr-only">Newsletter Email</label>
                <input 
                  id="newsletter-email"
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email" 
                  className="bg-slate-800 border-none rounded-l-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 w-full text-white transition-all outline-none"
                />
                <button 
                  type="submit"
                  className="bg-amber-500 text-slate-900 px-6 py-3 rounded-r-2xl text-sm font-black hover:bg-amber-400 transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  JOIN
                </button>
              </form>
            )}
            <p className="mt-3 text-[10px] text-slate-500 font-bold uppercase tracking-widest">Stay updated with global trends.</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold">
          <p>© 2024 Sandanell Global. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
