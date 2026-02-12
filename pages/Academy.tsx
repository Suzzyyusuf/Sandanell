
import React, { useState } from 'react';
import { BarChart3, Search, Lightbulb, PieChart, Send, Loader2 } from 'lucide-react';
import { geminiService } from '../services/geminiService';

const Academy: React.FC = () => {
  const [description, setDescription] = useState('');
  const [auditResult, setAuditResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAudit = async () => {
    if (!description.trim()) return;
    setLoading(true);
    setAuditResult(null);
    try {
      const result = await geminiService.auditLeadQuality(description);
      setAuditResult(result || "Error processing audit.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            Sandanell Hub
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Intelligent Market Growth</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Transforming data into dominant market positions. We provide advanced research, lead generation, and strategic business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Services Content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Core Capabilities</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Search size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Deep Market Research</h3>
                    <p className="text-slate-600 text-sm">Identifying untapped niches and competitor vulnerabilities with precision.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">High-Conversion Lead Gen</h3>
                    <p className="text-slate-600 text-sm">Bespoke lead sourcing that focuses on intent-driven prospect acquisition.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                    <PieChart size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Predictive Data Analytics</h3>
                    <p className="text-slate-600 text-sm">Forecasting trends to keep your business ahead of market shifts.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Specialized Consultant Booking</h3>
              <p className="text-slate-400 text-sm mb-6">
                Ready for a deep dive? Schedule a 1-on-1 session with our research specialists to audit your current sales funnel.
              </p>
              <button className="bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-400 transition-colors">
                Book a specialist
              </button>
            </div>
          </div>

          {/* AI Audit Feature */}
          <div className="sticky top-24 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-amber-100 overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-50 rounded-full blur-3xl opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-amber-500">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">AI Lead Audit Tool</h3>
                    <p className="text-xs text-slate-500">Powered by Sandanell Intelligence</p>
                  </div>
                </div>
                
                <p className="text-sm text-slate-600 mb-4">
                  Paste a description of your target market or a specific lead profile for a real-time strategic audit.
                </p>
                
                <textarea 
                  className="w-full h-32 bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
                  placeholder="Example: E-commerce retailers in Western Europe focusing on sustainable footwear..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                
                <button 
                  onClick={handleAudit}
                  disabled={loading || !description}
                  className="w-full mt-4 bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-800 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <span>Generate Audit Report</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                {auditResult && (
                  <div className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-4">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                      Audit Findings
                    </h4>
                    <div className="prose prose-sm text-slate-700 whitespace-pre-wrap">
                      {auditResult}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
