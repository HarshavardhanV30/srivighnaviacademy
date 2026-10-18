import React, { useState } from 'react';
import { X, ArrowRight, ChevronDown } from 'lucide-react';

export default function StudentDetailsModal({ isOpen, onClose, onProceed }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    qualification: '', // Now a dropdown
    branch: '',
    currentYear: '', // Reused for 'Current Status' (Freelancer, Job Holder, etc.)
    careerGoal: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onProceed(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 2 of 3</span>
          <h3 className="text-2xl font-bold text-white">Student & Professional Details</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              required 
              type="text" 
              name="fullName" 
              placeholder="Full Name" 
              value={formData.fullName} 
              onChange={handleChange} 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:border-violet-500 focus:outline-none placeholder-slate-400 transition-colors" 
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <input 
              required 
              type="tel" 
              name="mobileNumber" 
              placeholder="Mobile Number" 
              value={formData.mobileNumber} 
              onChange={handleChange} 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:border-violet-500 focus:outline-none placeholder-slate-400 transition-colors" 
            />
            <input 
              required 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:border-violet-500 focus:outline-none placeholder-slate-400 transition-colors" 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Degree/Qualification Dropdown */}
            <div className="relative">
              <select 
                required 
                name="qualification" 
                value={formData.qualification} 
                onChange={handleChange} 
                className={`w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:border-violet-500 focus:outline-none appearance-none cursor-pointer transition-colors ${formData.qualification ? 'text-white' : 'text-slate-400'}`}
              >
                <option value="" disabled>Select Degree</option>
                <option value="B.Tech" className="text-white">B.Tech</option>
                <option value="M.Tech" className="text-white">M.Tech</option>
                <option value="BSc" className="text-white">BSc</option>
                <option value="BCom" className="text-white">BCom</option>
                <option value="BBA" className="text-white">BBA</option>
                <option value="BCA" className="text-white">BCA</option>
                <option value="Diploma" className="text-white">Diploma</option>
                <option value="Other" className="text-white">Other</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-3.5 pointer-events-none" />
            </div>
            
            <input 
              required 
              type="text" 
              name="branch" 
              placeholder="Branch / Spec." 
              value={formData.branch} 
              onChange={handleChange} 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:border-violet-500 focus:outline-none placeholder-slate-400 transition-colors" 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Status / Current Year Dropdown */}
            <div className="relative">
              <select 
                required 
                name="currentYear" 
                value={formData.currentYear} 
                onChange={handleChange} 
                className={`w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:border-violet-500 focus:outline-none appearance-none cursor-pointer transition-colors ${formData.currentYear ? 'text-white' : 'text-slate-400'}`}
              >
                <option value="" disabled>Current Status</option>
                <optgroup label="Students" className="text-slate-400">
                  <option value="1st Year" className="text-white">1st Year</option>
                  <option value="2nd Year" className="text-white">2nd Year</option>
                  <option value="3rd Year" className="text-white">3rd Year</option>
                  <option value="4th Year" className="text-white">4th Year</option>
                </optgroup>
                <optgroup label="Professionals" className="text-slate-400">
                  <option value="Job Searching" className="text-white">Job Searching</option>
                  <option value="Freelancer" className="text-white">Freelancer</option>
                  <option value="Job Holder" className="text-white">Job Holder</option>
                </optgroup>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-3.5 pointer-events-none" />
            </div>

            <input 
              required 
              type="text" 
              name="careerGoal" 
              placeholder="Career Goal" 
              value={formData.careerGoal} 
              onChange={handleChange} 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:border-violet-500 focus:outline-none placeholder-slate-400 transition-colors" 
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold flex items-center justify-center space-x-2 transition transform hover:-translate-y-0.5 shadow-lg shadow-violet-600/20"
          >
            <span>Continue to Payment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}