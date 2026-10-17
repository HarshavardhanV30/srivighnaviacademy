import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CoursePayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course, student } = location.state || {};

  const handlePayment = () => {
    // Add gateway logic here
    navigate('/confirmation', { state: { course, student } });
  };

  if (!course) return <p className="p-8 text-center text-gray-400 bg-[#0f1115] min-h-screen">Missing payment details. Please restart enrollment.</p>;

  return (
    <div className="min-h-screen bg-[#0f1115] py-12 px-4 flex items-center justify-center font-sans">
      <div className="w-full max-w-md p-8 rounded-xl bg-[#1a1d24] border border-[#2a2d35] shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">Payment Summary</h2>
        
        <div className="text-left bg-[#14161b] p-5 rounded-lg mb-6 border border-[#2a2d35]">
          <p className="mb-2 text-gray-400">Name: <span className="text-gray-200 font-medium">{student?.name}</span></p>
          <p className="mb-2 text-gray-400">Email: <span className="text-gray-200 font-medium">{student?.email}</span></p>
          <p className="mb-2 text-gray-400">Course: <span className="text-gray-200 font-medium">{course.title}</span></p>
          <div className="mt-4 pt-4 border-t border-[#2a2d35]">
            <p className="text-2xl font-bold text-gray-100">
              Total Payable: ₹{course.price}
            </p>
          </div>
        </div>

        {/* Trust & Safety Section */}
        <div className="text-left bg-[#090949]/10 p-5 rounded-lg mb-8 border border-[#090949]/30 text-sm text-gray-300 space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">🔒</span>
            <p><strong className="text-gray-200">100% Secure Payment:</strong> Bank-grade end-to-end encryption.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">🛡️</span>
            <p><strong className="text-gray-200">Safe Online Classes:</strong> Verified, interactive learning environment.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">📹</span>
            <p><strong className="text-gray-200">2 Years Video Access:</strong> Unrestricted access to recorded sessions.</p>
          </div>
        </div>

        <button 
          onClick={handlePayment}
          className="w-full bg-[#090949] text-white py-3.5 rounded-lg font-semibold text-lg tracking-wide
                     transition-all duration-300 ease-in-out
                     hover:bg-[#0c0c66] hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(9,9,73,0.5)]
                     active:translate-y-0 active:shadow-none flex justify-center items-center gap-2"
        >
          Pay ₹{course.price} Securely
        </button>
        
        <p className="text-xs text-gray-500 mt-5">
          Guaranteed safe checkout. By proceeding, you agree to our Terms.
        </p>
      </div>
    </div>
  );
};

export default CoursePayment;