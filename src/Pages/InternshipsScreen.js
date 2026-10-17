import React from 'react';
import { Briefcase, CheckCircle2, Sparkles, ChevronRight, Clock, Code2 } from 'lucide-react';

// Replaced mockData import with the actual data requested
const INTERNSHIPS = [
  {
    id: 1,
    duration: '1 Month Internship',
    title: 'Python Developer Internship',
    techStack: 'Python, Django, SQLite',
    price: 999,
  },
  {
    id: 2,
    duration: '2 Months Internship',
    title: 'Python + AI Engineer Internship',
    techStack: 'Python, OpenAI APIs, Vector DBs',
    price: 1499,
  },
  {
    id: 3,
    duration: '2 Months Internship',
    title: 'Data Analytics Track',
    techStack: 'SQL, Python, Power BI, Excel',
    price: 1499,
  },
  {
    id: 4,
    duration: '3 Months Internship',
    title: 'Full Stack Web Dev Track',
    techStack: 'React, Node.js, MongoDB, Tailwind',
    price: 1999,
  },
  {
    id: 5,
    duration: '2 Months Internship',
    title: 'QA Automation Engineer',
    techStack: 'Selenium, Python, Cypress',
    price: 1499,
  }
];

export default function InternshipsScreen({ onApplyInternship }) {
  const highlights = [
    'Real-time Industry Project',
    'Dedicated Mentor Support',
    'Verified Internship Certificate'
  ];

  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden font-sans text-[#EAEFF8] py-16">
      {/* Background Glowing Effects (Blue and Silver Particles/Glows) */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-[#005BFF]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-[#C0C8D6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#005BFF]/10 text-[#00D4FF] border border-[#00D4FF]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,212,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Training Programs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#EAEFF8] to-[#8b99b3] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
            Paid Internship Programs <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#005BFF]">with Real Projects</span>
          </h1>
          <p className="text-[#a4b4cb] max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Gain real company experience, build industry-grade projects, and receive verified completion credentials.
          </p>
        </div>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INTERNSHIPS.map((prog) => (
            <div
              key={prog.id}
              className="group relative bg-[#060a13]/80 backdrop-blur-xl border border-[#1a2b4c] hover:border-[#00D4FF]/50 rounded-3xl p-8 flex flex-col justify-between space-y-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,212,255,0.3)] overflow-hidden"
            >
              {/* Card top gradient line indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#005BFF] to-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4FF]/20 to-[#005BFF]/20 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-[#00D4FF] bg-[#005BFF]/10 px-3 py-1.5 rounded-full border border-[#005BFF]/20">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{prog.duration}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#EAEFF8] leading-snug group-hover:text-[#00D4FF] transition-colors duration-300 mb-2">
                    {prog.title}
                  </h3>
                  <div className="flex items-start space-x-2 text-sm text-[#8b99b3]">
                    <Code2 className="w-4 h-4 shrink-0 mt-0.5 text-[#005BFF]" />
                    <p><span className="font-semibold text-[#a4b4cb]">Tech Stack:</span> {prog.techStack}</p>
                  </div>
                </div>
                
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#C0C8D6]">
                    ₹{prog.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[#8b99b3] font-medium uppercase tracking-wider">
                    One-time fee
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#1a2b4c]">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(0,212,255,0.5)]" />
                      <span className="text-sm font-medium text-[#a4b4cb] group-hover:text-[#C0C8D6] transition-colors duration-300">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onApplyInternship(prog)}
                className="group/btn relative w-full py-4 rounded-xl bg-gradient-to-r from-[#005BFF] to-[#00D4FF] hover:from-[#004bbd] hover:to-[#00bfff] text-white font-extrabold flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,91,255,0.4)] transition-all duration-300 overflow-hidden transform hover:-translate-y-0.5"
              >
                {/* Button Shine Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover/btn:animate-[shine_1.5s_ease-in-out_infinite]" />
                <span className="relative z-10 tracking-wide">Apply & Register</span>
                <ChevronRight className="w-4 h-4 relative z-10" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          100% { left: 200%; }
        }
      `}} />
    </div>
  );
}