import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function StudentDetailsModal({ isOpen, onClose, onProceed }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    qualification: 'B.Tech',
    branch: '',
    currentYearOrStatus: '1st Year',
    careerGoal: ''
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.mobile.trim() || formData.mobile.length < 10) errs.mobile = 'Enter a valid 10-digit number';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.branch.trim()) errs.branch = 'Branch/Field is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onProceed(formData);
    }
  };

  const handleQualificationChange = (e) => {
    const newQual = e.target.value;
    let newStatus = '1st Year';
    
    if (newQual === 'Other') {
      newStatus = 'Job Searching';
    }

    setFormData({ 
      ...formData, 
      qualification: newQual,
      currentYearOrStatus: newStatus
    });
  };

  const isStudent = ['B.Tech', 'M.Tech', 'Degree', 'Diploma'].includes(formData.qualification);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl my-8">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 2 of 3</span>
          <h3 className="text-2xl font-bold text-white">Student Details</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-400 uppercase mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase mb-1">Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter 10-digit number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
              {errors.mobile && <p className="text-xs text-red-400 mt-1">{errors.mobile}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase mb-1">Qualification</label>
              <select
                value={formData.qualification}
                onChange={handleQualificationChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
              >
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="Degree">Degree</option>
                <option value="Diploma">Diploma</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase mb-1">Branch / Field</label>
              <input
                type="text"
                placeholder="e.g. Computer Science"
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
              {errors.branch && <p className="text-xs text-red-400 mt-1">{errors.branch}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase mb-1">
                {isStudent ? 'Current Year' : 'Current Status'}
              </label>
              <select
                value={formData.currentYearOrStatus}
                onChange={(e) => setFormData({ ...formData, currentYearOrStatus: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
              >
                {isStudent ? (
                  <>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Passed Out">Passed Out</option>
                  </>
                ) : (
                  <>
                    <option value="Job Searching">Job Searching</option>
                    <option value="Job Holder">Job Holder</option>
                    <option value="Freelancer">Freelancer</option>
                  </>
                )}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase mb-1">Career Goal</label>
              <input
                type="text"
                placeholder="e.g. Software Engineer"
                value={formData.careerGoal}
                onChange={(e) => setFormData({ ...formData, careerGoal: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold flex items-center justify-center space-x-2 shadow-lg shadow-violet-600/30 transition transform hover:-translate-y-0.5"
          >
            <span>Continue to Payment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}