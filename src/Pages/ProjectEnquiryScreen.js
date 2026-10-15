import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X, Check, Sparkles } from 'lucide-react';

export default function ProjectEnquiryScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Retrieve the project title passed from the ProjectsScreen
  const initialDomain = location.state?.initialDomain || '';

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Harshvardhan',
    mobile: '',
    degree: 'M.Tech',
    branch: 'Computer Science',
    domain: initialDomain,
    tech: '',
    requirement: '',
    expectedDate: ''
  });

  useEffect(() => {
    if (initialDomain) {
      setFormData((prev) => ({ ...prev, domain: initialDomain }));
    }
  }, [initialDomain]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      alert('Requirement submitted! Our engineering team will contact you shortly.');
      navigate(-1);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden font-sans flex items-center justify-center p-4 py-12 sm:py-20">
      
      {/* Background Glowing Effects */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#005BFF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Glassmorphism Form Card */}
      <div className="bg-[#060a13]/90 backdrop-blur-2xl border-t border-l border-[#00D4FF]/40 border-b border-r border-[#005BFF]/20 rounded-[2rem] max-w-2xl w-full p-6 sm:p-10 space-y-8 relative shadow-[0_0_50px_rgba(0,91,255,0.15)] z-10">
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#005BFF]/5 to-transparent pointer-events-none rounded-[2rem]" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 right-6 text-[#a4b4cb] hover:text-[#00D4FF] p-2 rounded-xl bg-[#0a1122] border border-[#1a2b4c] transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-3 relative z-10">
          <div className="inline-flex items-center space-x-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#00D4FF] bg-[#005BFF]/10 border border-[#00D4FF]/20 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(0,212,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Project Desk</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C0C8D6] leading-tight">
            Project Enquiry
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-[#8b99b3] uppercase tracking-wider mb-2">Student Name</label>
              <input
                type="text"
                required
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3.5 text-[#EAEFF8] text-sm placeholder-[#4a5b7c] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#8b99b3] uppercase tracking-wider mb-2">Mobile Number</label>
              <input
                type="tel"
                required
                placeholder="10-digit number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3.5 text-[#EAEFF8] text-sm placeholder-[#4a5b7c] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-[#8b99b3] uppercase tracking-wider mb-2">Degree</label>
              <select
                value={formData.degree}
                onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3.5 text-[#EAEFF8] text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all appearance-none cursor-pointer"
              >
                <option value="B.Tech" className="bg-[#060a13]">B.Tech</option>
                <option value="M.Tech" className="bg-[#060a13]">M.Tech</option>
                <option value="Other" className="bg-[#060a13]">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#8b99b3] uppercase tracking-wider mb-2">Branch / Specialization</label>
              <input
                type="text"
                required
                placeholder="e.g. Computer Science"
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3.5 text-[#EAEFF8] text-sm placeholder-[#4a5b7c] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-[#8b99b3] uppercase tracking-wider mb-2">Project Domain</label>
              <input
                type="text"
                placeholder="e.g. AI / Machine Learning"
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3.5 text-[#EAEFF8] text-sm placeholder-[#4a5b7c] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#8b99b3] uppercase tracking-wider mb-2">Preferred Technology</label>
              <input
                type="text"
                placeholder="e.g. Python, React"
                value={formData.tech}
                onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
                className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3.5 text-[#EAEFF8] text-sm placeholder-[#4a5b7c] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#8b99b3] uppercase tracking-wider mb-2">Project Requirement Description</label>
            <textarea
              rows="3"
              required
              placeholder="Briefly describe deliverables needed (Source code, PPT, Base Paper, etc.)"
              value={formData.requirement}
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
              className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3.5 text-[#EAEFF8] text-sm placeholder-[#4a5b7c] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#8b99b3] uppercase tracking-wider mb-2">Expected Completion Date</label>
            <input
              type="date"
              required
              value={formData.expectedDate}
              onChange={(e) => setFormData({ ...formData, expectedDate: e.target.value })}
              className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3.5 text-[#EAEFF8] text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all cursor-pointer [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-[#005BFF] to-[#00D4FF] hover:from-[#004bbd] hover:to-[#00bfff] text-white font-extrabold text-sm shadow-[0_0_20px_rgba(0,91,255,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
          >
            {submitted ? (
              <>
                <Check className="w-5 h-5 text-white" />
                <span>Request Sent Successfully</span>
              </>
            ) : (
              <span>Submit Requirement</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}