import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CourseStudentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;

  const [formData, setFormData] = useState({ 
    name: '', email: '', phone: '', qualification: '', employmentStatus: '', degree: '', year: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', { state: { course, student: formData } });
  };

  if (!course) return <p className="p-8 text-center text-gray-400 bg-[#0f1115] min-h-screen">No course selected. Please go back.</p>;

  // Reusable input class matching the soft dark theme
  const inputClass = "w-full bg-[#14161b] border border-[#2a2d35] text-gray-200 p-3 rounded-lg focus:border-[#090949] focus:outline-none focus:ring-1 focus:ring-[#090949] transition-all placeholder-gray-600";

  return (
    <div className="min-h-screen bg-[#0f1115] py-12 px-4 flex items-center justify-center font-sans">
      <div className="w-full max-w-lg p-8 rounded-xl bg-[#1a1d24] border border-[#2a2d35] shadow-lg relative">
        <h2 className="text-3xl font-bold mb-2 text-gray-100">Student Details</h2>
        <p className="mb-8 text-gray-400">Enrolling in: <strong className="text-gray-200">{course.title}</strong></p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1.5 font-medium text-gray-400 text-sm">Full Name</label>
            <input required type="text" name="name" onChange={handleChange} className={inputClass} placeholder="Enter your full name" />
          </div>
          
          <div>
            <label className="block mb-1.5 font-medium text-gray-400 text-sm">Email Address</label>
            <input required type="email" name="email" onChange={handleChange} className={inputClass} placeholder="Enter your email" />
          </div>
          
          <div>
            <label className="block mb-1.5 font-medium text-gray-400 text-sm">Phone Number</label>
            <input required type="tel" name="phone" onChange={handleChange} className={inputClass} placeholder="Enter your phone number" />
          </div>

          <div>
            <label className="block mb-1.5 font-medium text-gray-400 text-sm">Highest Qualification</label>
            <input required type="text" name="qualification" onChange={handleChange} className={inputClass} placeholder="e.g. Post Graduation" />
          </div>

          <div>
            <label className="block mb-1.5 font-medium text-gray-400 text-sm">Degree</label>
            <input required type="text" name="degree" onChange={handleChange} className={inputClass} placeholder="e.g. B.Tech / MCA / B.Sc" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1.5 font-medium text-gray-400 text-sm">Year</label>
              <select required name="year" onChange={handleChange} className={inputClass}>
                <option value="">Select</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="2024">2024 (Pass out)</option>
                <option value="2023">2023 (Pass out)</option>
                <option value="Earlier">Earlier</option>
              </select>
            </div>

            <div>
              <label className="block mb-1.5 font-medium text-gray-400 text-sm">Status</label>
              <select required name="employmentStatus" onChange={handleChange} className={inputClass}>
                <option value="">Select</option>
                <option value="Student">Student</option>
                <option value="Job Holder">Job Holder</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Unemployed">Looking for Job</option>
              </select>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#090949] text-white py-3.5 rounded-lg mt-8 font-semibold tracking-wide 
                       transition-all duration-300 ease-in-out
                       hover:bg-[#0c0c66] hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(9,9,73,0.5)]
                       active:translate-y-0 active:shadow-none flex justify-center items-center gap-2"
          >
            <span>Proceed to Payment</span>
            <span>→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseStudentDetails;