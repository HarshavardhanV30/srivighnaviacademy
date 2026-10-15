import React from 'react';
import { WORKSHOPS } from '../Data/mockData';
import { Flame, Clock, Sparkles, ChevronRight } from 'lucide-react';

export default function WorkshopsScreen({ onOpenWorkshopRegister }) {
  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden font-sans text-[#EAEFF8]">
      {/* Background Glowing Effects (Blue and Silver Particles/Glows) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#005BFF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-[#C0C8D6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 relative z-10">
        
        {/* Header / Offer Banner (Glassmorphism & Metallic Finish) */}
        <div className="relative bg-[#060a13]/60 backdrop-blur-2xl border-t border-l border-[#00D4FF]/30 border-b border-r border-[#005BFF]/10 rounded-[2rem] p-10 text-center space-y-6 shadow-[0_0_40px_rgba(0,91,255,0.15)] overflow-hidden group">
          {/* Inner banner glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#005BFF]/10 via-transparent to-[#00D4FF]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-[#005BFF]/20 text-[#00D4FF] border border-[#00D4FF]/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,212,255,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span>Vighnavi Academy Exclusive</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#EAEFF8] to-[#8b99b3] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
              Master Future Tech Skills. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#005BFF]">2-Hour Live Workshops.</span>
            </h1>
            
            <p className="text-[#a4b4cb] max-w-2xl mx-auto text-base sm:text-lg font-medium">
              Join interactive, futuristic masterclasses led by industry engineers. Code along in real-time, solve complex problems, and elevate your developer profile for just <strong className="text-[#00D4FF]">₹19</strong>.
            </p>
          </div>
        </div>

        {/* Categorized Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKSHOPS.map((ws) => (
            <div
              key={ws.id}
              className="group relative bg-[#060a13]/80 backdrop-blur-xl border border-[#1a2b4c] hover:border-[#00D4FF]/50 rounded-3xl p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,212,255,0.3)] overflow-hidden"
            >
              {/* Card top gradient line indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#005BFF] to-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-md bg-[#005BFF]/10 text-[#00D4FF] border border-[#005BFF]/30 shadow-[0_0_10px_rgba(0,91,255,0.2)]">
                    {ws.tag}
                  </span>
                  <span className="text-xs text-[#a4b4cb] flex items-center space-x-1.5 font-medium bg-[#1a2b4c]/30 px-2 py-1 rounded-md border border-white/5">
                    <Clock className="w-3.5 h-3.5 text-[#00D4FF]" />
                    <span>{ws.duration}</span>
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#EAEFF8] group-hover:text-[#00D4FF] transition-colors duration-300 leading-snug">
                  {ws.title}
                </h3>
                
                <p className="text-sm text-[#8b99b3] leading-relaxed">
                  Includes live instructor code-along, lifetime project repository access, and interactive futuristic Q&A sessions.
                </p>
              </div>

              <div className="pt-6 border-t border-[#1a2b4c] flex items-end justify-between relative z-10">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#00D4FF] font-bold uppercase tracking-widest mb-1 block">
                    Registration Fee
                  </span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                      ₹{ws.fee}
                    </span>
                    <span className="text-sm text-gray-500 line-through font-medium">₹999</span>
                  </div>
                </div>
                
                <button
                  onClick={() => onOpenWorkshopRegister(ws)}
                  className="group/btn relative px-5 py-3 rounded-xl bg-gradient-to-r from-[#005BFF] to-[#00D4FF] hover:from-[#004bbd] hover:to-[#00bfff] text-white font-bold text-sm shadow-[0_0_20px_rgba(0,91,255,0.4)] transition-all duration-300 overflow-hidden"
                >
                  {/* Button shine effect */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover/btn:animate-shine" />
                  <div className="flex items-center space-x-1.5">
                    <span>Register</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS for Button Shine Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          100% { left: 200%; }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}