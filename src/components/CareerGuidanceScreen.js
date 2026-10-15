import React from 'react';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function CareerGuidanceScreen({ onStartBooking }) {
  const inclusions = [
    'Comprehensive Career Roadmap',
    'Customized Course & Domain Recommendation',
    'Tier-1 MNC Job Prep Guidance',
    'Skill Level & Coding Gap Assessment',
    'Targeted 6-Month Structured Learning Plan',
    '1-on-1 Direct Q&A with Senior Industry Mentor'
  ];

  return (
    <div className="min-h-screen bg-[#000000] w-full py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-[#031B4D]/80 text-[#00D2FF] border border-[#0A4499] uppercase tracking-widest shadow-[0_0_12px_rgba(0,210,255,0.2)]">
            Vighnavi Academy Mentorship
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#EAEFF8] to-[#C0C8D6] drop-shadow-sm leading-tight">
            Master Tomorrow's Tech Skills — <br className="hidden sm:block" />
            Unlock Your Infinite Capabilities.
          </h1>
          <p className="text-[#C0C8D6] text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            At <strong className="text-[#EAEFF8] font-semibold">Vighnavi Academy</strong>, we bridge the gap between foundational computer science and high-demand industry engineering. Learn full-stack development, modern frameworks, and emerging tech through hands-on, mentor-led programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          
          {/* Quick Guidance */}
          <div className="bg-[#060a13]/80 backdrop-blur-xl border border-[#1a2b4c] hover:border-[#00D4FF]/50 rounded-3xl p-8 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-[0_0_30px_rgba(0,91,255,0.1)] group">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-[#00D2FF] text-sm font-semibold">
                <Clock className="w-4 h-4" />
                <span>30 Minutes Duration</span>
              </div>
              <h3 className="text-2xl font-bold text-[#EAEFF8]">Quick Career Guidance</h3>
              <p className="text-[#8b99b3] text-sm leading-relaxed">
                Ideal for specific doubt-clearing, resume review, or picking between two career tracks.
              </p>
              <div className="pt-2">
                <span className="text-4xl font-extrabold text-[#EAEFF8]">₹49</span>
                <span className="text-[#8b99b3] text-sm ml-2">/ session</span>
              </div>
            </div>

            <button
              onClick={() => onStartBooking({ duration: '30 Minutes', price: 49 })}
              className="w-full py-4 rounded-xl bg-[#0a1122] hover:bg-[#1a2b4c] border border-[#1a2b4c] hover:border-[#00D4FF]/50 text-[#C0C8D6] hover:text-white font-bold transition-all shadow-md group-hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]"
            >
              Book 30 Min – ₹49
            </button>
          </div>

          {/* Comprehensive Guidance */}
          <div className="relative bg-[#060a13]/90 backdrop-blur-2xl border border-[#00D4FF]/40 rounded-3xl p-8 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-[0_0_40px_rgba(0,212,255,0.15)] group hover:-translate-y-1">
            <div className="absolute -top-3.5 right-6 bg-[#00D4FF] text-[#000000] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center space-x-1 shadow-[0_0_15px_rgba(0,212,255,0.5)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Most Popular</span>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-[#00D2FF] text-sm font-semibold">
                <Clock className="w-4 h-4" />
                <span>1 Hour Duration</span>
              </div>
              <h3 className="text-2xl font-bold text-[#EAEFF8]">Comprehensive Career Guidance</h3>
              <p className="text-[#8b99b3] text-sm leading-relaxed">
                Complete end-to-end audit, custom career roadmap, project guidance, and intensive 1-on-1 discussion.
              </p>
              <div className="pt-2">
                <span className="text-4xl font-extrabold text-[#EAEFF8]">₹99</span>
                <span className="text-[#8b99b3] text-sm ml-2">/ session</span>
              </div>
            </div>

            <button
              onClick={() => onStartBooking({ duration: '1 Hour', price: 99 })}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#005BFF] to-[#00D4FF] hover:from-[#004bbd] hover:to-[#00bfff] text-white font-extrabold text-center shadow-[0_0_25px_rgba(0,91,255,0.4)] transition-all duration-300"
            >
              Book 1 Hour – ₹99
            </button>
          </div>
        </div>

        {/* Features Included Section */}
        <div className="bg-[#060a13]/60 backdrop-blur-md border border-[#005BFF]/20 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto space-y-8 shadow-inner">
          <h3 className="text-2xl font-bold text-[#EAEFF8] text-center">What is Included in Every Guidance Session</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-[#0a1122] p-4 rounded-xl border border-[#1a2b4c] hover:border-[#00D4FF]/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#00D4FF] shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(0,210,255,0.5)]" />
                <span className="text-sm font-medium text-[#C0C8D6]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}