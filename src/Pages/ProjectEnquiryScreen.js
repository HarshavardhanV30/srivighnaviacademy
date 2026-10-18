import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X, Check, Sparkles, ChevronDown, Loader2, FileCheck2 } from 'lucide-react';

export default function ProjectEnquiryScreen() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialDomain = location.state?.initialDomain || '';

  // Form state pre-filled with context
  const [formData, setFormData] = useState({
    name: '', // Personalized default
    mobile: '',
    degree: 'B.Tech',
    branch: '',
    domain: initialDomain,
    tech: '',
    requirement: '',
    expectedDate: ''
  });

  // API Interaction States
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    if (initialDomain) {
      setFormData((prev) => ({ ...prev, domain: initialDomain }));
    }
  }, [initialDomain]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://vighnavibackend-production.up.railway.app/api/project-enquiry/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setResponseData(result.data);
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Ensure your connection is stable and the server is running.');
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden font-sans flex items-center justify-center p-4 py-12 sm:py-20">

      {/* Background Glowing Effects */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#005BFF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Glassmorphism Card */}
      <div className="bg-[#060a13]/90 backdrop-blur-2xl border-t border-l border-[#00D4FF]/40 border-b border-r border-[#005BFF]/20 rounded-[2rem] max-w-2xl w-full p-6 sm:p-10 space-y-8 relative shadow-[0_0_50px_rgba(0,91,255,0.15)] z-10 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#005BFF]/5 to-transparent pointer-events-none rounded-[2rem]" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 right-6 text-[#a4b4cb] hover:text-[#00D4FF] p-2 rounded-xl bg-[#0a1122] border border-[#1a2b4c] transition-all z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' && responseData ? (
          /* SUCCESS VIEW */
          <div className="relative z-10 flex flex-col items-center text-center space-y-6 py-8">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-2 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <FileCheck2 className="w-10 h-10 text-emerald-400" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">
                Enquiry Submitted!
              </h3>
              <p className="text-[#a4b4cb] text-sm">
                Our engineering team has received your request and will contact you shortly.
              </p>
            </div>

            <div className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-2xl p-5 text-left space-y-3 mt-4">
              <div className="flex justify-between border-b border-[#1a2b4c] pb-2">
                <span className="text-[#8b99b3] text-xs uppercase tracking-wider font-bold">Enquiry ID</span>
                <span className="text-[#00D4FF] font-mono font-bold">#{responseData.id}</span>
              </div>
              <div className="flex justify-between border-b border-[#1a2b4c] pb-2">
                <span className="text-[#8b99b3] text-xs uppercase tracking-wider font-bold">Domain</span>
                <span className="text-[#EAEFF8] text-sm font-medium">{responseData.project_domain}</span>
              </div>
              <div className="flex justify-between border-b border-[#1a2b4c] pb-2">
                <span className="text-[#8b99b3] text-xs uppercase tracking-wider font-bold">Target Date</span>
                <span className="text-[#EAEFF8] text-sm font-medium">
                  {new Date(responseData.expected_completion_date).toLocaleDateString('en-GB')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8b99b3] text-xs uppercase tracking-wider font-bold">Status</span>
                <span className="text-emerald-400 text-sm font-bold">Under Review</span>
              </div>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-[#005BFF] to-[#00D4FF] hover:from-[#004bbd] hover:to-[#00bfff] text-white font-extrabold text-sm shadow-[0_0_20px_rgba(0,91,255,0.4)] transition-all"
            >
              Return to Projects
            </button>
          </div>
        ) : (
          /* FORM VIEW */
          <>
            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center space-x-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#00D4FF] bg-[#005BFF]/10 border border-[#00D4FF]/20 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(0,212,255,0.2)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Academic Project Desk</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C0C8D6] leading-tight">
                Project Enquiry
              </h3>
            </div>

            {status === 'error' && (
              <div className="relative z-10 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm font-medium">
                {errorMessage}
              </div>
            )}

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
                    maxLength="10"
                    pattern="[0-9]{10}"
                    placeholder="10-digit number"
                    value={formData.mobile}
                    onChange={(e) => {
                      // Only allow digits and limit to 10 characters
                      const onlyNumbers = e.target.value.replace(/\D/g, '');
                      if (onlyNumbers.length <= 10) {
                        setFormData({ ...formData, mobile: onlyNumbers });
                      }
                    }}
                    className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3.5 text-[#EAEFF8] text-sm placeholder-[#4a5b7c] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#8b99b3] uppercase tracking-wider mb-2">Degree</label>
                  <div className="relative">
                    <select
                      value={formData.degree}
                      onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                      className="w-full bg-[#0a1122] border border-[#1a2b4c] rounded-xl px-4 py-3.5 text-[#EAEFF8] text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all appearance-none cursor-pointer"
                    >
                      <option value="B.Tech" className="bg-[#060a13]">B.Tech</option>
                      <option value="M.Tech" className="bg-[#060a13]">M.Tech</option>
                      <option value="MCA" className="bg-[#060a13]">MCA</option>
                      <option value="BCA" className="bg-[#060a13]">BCA</option>
                      <option value="Other" className="bg-[#060a13]">Other</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#8b99b3] absolute right-4 top-4 pointer-events-none" />
                  </div>
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
                    required
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
                    required
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
                disabled={status === 'submitting'}
                className="w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-[#005BFF] to-[#00D4FF] hover:from-[#004bbd] hover:to-[#00bfff] text-white font-extrabold text-sm shadow-[0_0_20px_rgba(0,91,255,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <span>Submit Requirement</span>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}