import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmedScreen = () => {
  const location = useLocation();
  const { course, student } = location.state || {};

  const handleJoinWhatsApp = () => {
    const whatsappLink = "https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE";
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0f1115] py-12 px-4 flex items-center justify-center font-sans">
      <div className="w-full max-w-md p-8 rounded-xl bg-[#1a1d24] border border-[#2a2d35] shadow-lg text-center">
        
        <div className="text-[#090949] bg-blue-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h2 className="text-3xl font-bold mb-3 text-gray-100">Registration Confirmed!</h2>
        
        <p className="text-gray-400 mb-8 text-lg">
          Thank you, <span className="text-gray-200 font-semibold">{student?.name || 'Student'}</span>! Your enrollment for <strong className="text-gray-200">{course?.title || 'the course'}</strong> is successful.
        </p>

        <div className="bg-[#14161b] p-6 rounded-lg mb-6 border border-[#2a2d35]">
          <p className="text-sm text-gray-400 mb-5 leading-relaxed">
            Please join our official WhatsApp group to get course updates, class schedules, and premium materials.
          </p>
          <button 
            onClick={handleJoinWhatsApp}
            className="w-full bg-[#090949] text-white py-3 rounded-lg font-semibold tracking-wide
                       transition-all duration-300 ease-in-out
                       hover:bg-[#0c0c66] hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(9,9,73,0.5)]
                       active:translate-y-0 active:shadow-none flex justify-center items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Join WhatsApp Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedScreen;