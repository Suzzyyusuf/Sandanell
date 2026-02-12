
import React from 'react';
import { Target, Users, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-tight">
            We Build The <br />
            <span className="text-amber-500">Future of Global Commerce.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Sandanell Global is a diversified enterprise operating at the intersection of business intelligence, logistics, and premium retail. 
            We are driven by a singular mission: to empower excellence in every industry we touch.
          </p>
        </div>

        {/* Mission Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="p-12 bg-slate-900 rounded-[2rem] text-white">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To provide scalable, reliable, and innovative solutions that enable businesses and individuals to reach their highest potential. 
              Whether through data-driven insights or robust transport, we are the catalyst for growth.
            </p>
          </div>
          <div className="p-12 bg-amber-500 rounded-[2rem] text-slate-900">
            <h3 className="text-3xl font-bold mb-6 text-slate-900">Our Vision</h3>
            <p className="text-slate-900/80 leading-relaxed font-medium">
              To be the world's most trusted partner in multi-sector excellence, known for our integrity, 
              innovation, and commitment to the long-term success of our global community.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Values</h2>
            <p className="text-slate-500">The foundation of every Sandanell venture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target />, title: 'Excellence', desc: 'We never settle for "good enough". We aim for the gold standard.' },
              { icon: <Shield />, title: 'Reliability', desc: 'Our word is our bond. We deliver on time, every time.' },
              { icon: <Zap />, title: 'Innovation', desc: 'Leveraging AI and modern tech to solve legacy challenges.' },
              { icon: <Users />, title: 'Global Reach', desc: 'Connecting diverse markets through a unified standard.' }
            ].map((v, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-14 h-14 bg-white text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {v.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-3 text-xl">{v.title}</h4>
                <p className="text-sm text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team / Why Choose Us */}
        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Why Choose Sandanell?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <div className="text-4xl font-black text-amber-500 mb-4">01</div>
              <h4 className="font-bold text-xl mb-4">Proven Track Record</h4>
              <p className="text-slate-600 text-sm">Over a decade of managing complex logistics and market research for Fortune 500 companies.</p>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-500 mb-4">02</div>
              <h4 className="font-bold text-xl mb-4">Scalability</h4>
              <p className="text-slate-600 text-sm">Our infrastructure is built to grow with you, from local startups to multinational giants.</p>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-500 mb-4">03</div>
              <h4 className="font-bold text-xl mb-4">Customer Satisfaction</h4>
              <p className="text-slate-600 text-sm">A client-first philosophy that ensures your needs are heard, analyzed, and met.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
