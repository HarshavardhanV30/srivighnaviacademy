import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { WORKSHOPS } from '../Data/mockData';

// Helper to get today's date for the date picker minimum
const getTodayDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

export default function WorkshopRegisterModal({ isOpen, onClose, selectedWorkshop, onProceedPayment }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    qualification: 'B.Tech',
    workshopTitle: selectedWorkshop?.title || WORKSHOPS[0]?.title || '',
    date: getTodayDate()
  });

  // Sync selected workshop when it changes
  useEffect(() => {
    if (selectedWorkshop) {
      setFormData((prev) => ({ ...prev, workshopTitle: selectedWorkshop.title }));
    }
  }, [selectedWorkshop]);

  // Reset form date to today if modal opens on a new day
  useEffect(() => {
    if (isOpen) {
      const today = getTodayDate();
      if (formData.date < today) {
        setFormData((prev) => ({ ...prev, date: today }));
      }
    }
  }, [isOpen, formData.date]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onProceedPayment({
      feeAmount: 19,
      itemTitle: `Workshop: ${formData.workshopTitle}`,
      meta: formData
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/80 backdrop-blur-md overflow-y-auto">
      {/* Modal Container with Glassmorphism and Neon Borders */}
      <div className="bg-[#060a13]/90 backdrop-blur-2xl border-t border-l border-[#00D4FF]/30 border-b border-r border-[#005BFF]/10 rounded-[2rem] max-w-md w-full p-6 sm:p-8 space-y-6 relative shadow-[0_0_40px_rgba(0,91,255,0.15)] my-8 overflow-hidden group">
        
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#005BFF]/5 via-transparent to-[#00D4FF]/5 pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#a4b4cb] hover:text-[#00D4FF] p-1 rounded-lg transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-widest text-[#00D4FF] bg-[#005BFF]/10 border border-[#00D4FF]/20 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(0,212,255,0.2)]">
            <Sparkles className="w-3 h-3" />
            <span>Quick Registration</span>
          </div>
          <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C0C8D6]">
            Workshop Enrollment
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div>
            <label className="block text-xs font-semibold text-[#8b99b3] uppercase tracking-wider mb-1.5">Select Workshop</label>
            <select
              value={formData.workshopTitle}
              onChange={(e) => setFormData({ ...formData, workshopTitle: e.target.value })}
              className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3 text-[#EAEFF8] text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all appearance-none cursor-pointer"
            >
              {WORKSHOPS.map((w) => (
                <option key={w.id} value={w.title} className="bg-[#060a13] text-[#EAEFF8]">
                  {w.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#8b99b3] uppercase tracking-wider mb-1.5">Full Name</label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3 text-[#EAEFF8] text-sm placeholder-[#4a5b7c] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#8b99b3] uppercase tracking-wider mb-1.5">Mobile</label>
              <input
                type="tel"
                required
                placeholder="10-digit number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3 text-[#EAEFF8] text-sm placeholder-[#4a5b7c] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#8b99b3] uppercase tracking-wider mb-1.5">Email</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3 text-[#EAEFF8] text-sm placeholder-[#4a5b7c] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#8b99b3] uppercase tracking-wider mb-1.5">Qualification</label>
              <select
                value={formData.qualification}
                onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3 text-[#EAEFF8] text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all appearance-none cursor-pointer"
              >
                <option value="B.Tech" className="bg-[#060a13]">B.Tech</option>
                <option value="M.Tech" className="bg-[#060a13]">M.Tech</option>
                <option value="Degree" className="bg-[#060a13]">Degree</option>
                <option value="Diploma" className="bg-[#060a13]">Diploma</option>
                <option value="Other" className="bg-[#060a13]">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#8b99b3] uppercase tracking-wider mb-1.5">Select Date</label>
              <input
                type="date"
                required
                min={getTodayDate()}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3 text-[#EAEFF8] text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all cursor-pointer [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
              />
            </div>
          </div>

          <div className="bg-[#005BFF]/5 p-4 rounded-xl border border-[#005BFF]/20 flex items-center justify-between text-xs mt-2">
            <span className="text-[#a4b4cb] font-medium tracking-wide">Workshop Fee</span>
            <div className="flex items-center space-x-2">
              <span className="text-[#8b99b3] line-through">₹999</span>
              <span className="font-bold text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/30 px-2.5 py-1 rounded shadow-[0_0_10px_rgba(0,212,255,0.2)]">₹19</span>
            </div>
          </div>

          <button
            type="submit"
            className="group/btn relative w-full py-4 rounded-xl bg-gradient-to-r from-[#005BFF] to-[#00D4FF] hover:from-[#004bbd] hover:to-[#00bfff] text-white font-extrabold flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,91,255,0.4)] transition-all duration-300 overflow-hidden transform hover:-translate-y-0.5 mt-4"
          >
            {/* Button Shine Effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover/btn:animate-[shine_1.5s_ease-in-out_infinite]" />
            <span className="relative z-10 tracking-wide">Register & Pay ₹19</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </button>
        </form>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          100% { left: 200%; }
        }
      `}} />
    </div>
  );
}