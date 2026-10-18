import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/contact';
import Courses from './Pages/Courses';
import CourseStudentDetails from './Pages/CourseStudentDetails';
import CoursePayment from './Pages/CoursePayment';
import ConfirmedScreen from './Pages/ConfirmedScreen';
import WorkshopsScreen from './Pages/WorkshopsScreen';
import InternshipsScreen from './Pages/InternshipsScreen';
import ProjectsScreen from './Pages/ProjectsScreen';
import ProjectEnquiryScreen from './Pages/ProjectEnquiryScreen';
import TermsAndConditions from './Pages/termsandconditions';
import PrivacyPolicy from './Pages/privacypolicy';
// Modals
import BookSlotModal from './Pages/carrerBookSlotModal';
import ConfirmationModal from './Pages/carrerConfirmationModal';
import PaymentModal from './Pages/carrerPaymentModal';
import StudentDetailsModal from './Pages/StudentDetailsModal';
import WorkshopRegisterModal from './Pages/WorkshopRegisterModal';

// Components
import CareerGuidanceScreen from './components/CareerGuidanceScreen';

export default function App() {
  // Global Modal States
  const [slotModalOpen, setSlotModalOpen] = useState(false);
  const [studentModalOpen, setStudentModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [workshopModalOpen, setWorkshopModalOpen] = useState(false);

  // Career Guidance Data Accumulator
  const [guidanceConfig, setGuidanceConfig] = useState({ duration: '30 Minutes', price: 49 });
  const [careerPayload, setCareerPayload] = useState({
    bookingDetails: {},
    studentDetails: {}
  });
  
  // API Response Data for Confirmation
  const [finalBookingData, setFinalBookingData] = useState(null);
  
  const [paymentConfig, setPaymentConfig] = useState({ fee: 29, title: '' });
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  // --- CAREER GUIDANCE FLOW ---
  const startGuidanceBooking = (config) => {
    setGuidanceConfig(config);
    setSlotModalOpen(true);
  };

  const handleSlotSelected = (slotData) => {
    setCareerPayload((prev) => ({
      ...prev,
      bookingDetails: {
        duration: slotData.duration,
        totalSessionPrice: slotData.totalSessionPrice,
        date: slotData.date,
        startTime: slotData.startTime,
        endTime: slotData.endTime
      }
    }));
    setSlotModalOpen(false);
    setStudentModalOpen(true);
  };

  const handleStudentDetailsSubmitted = (studentData) => {
    setCareerPayload((prev) => ({
      ...prev,
      studentDetails: studentData
    }));
    setStudentModalOpen(false);
    setPaymentConfig({ fee: careerPayload.bookingDetails.totalSessionPrice || guidanceConfig.price, title: `Career Guidance: ${careerPayload.bookingDetails.duration || guidanceConfig.duration}` });
    setPaymentModalOpen(true);
  };

  const handlePaymentSuccess = (apiResponseData) => {
    setFinalBookingData(apiResponseData);
    setPaymentModalOpen(false);
    setConfirmModalOpen(true);
  };

  // --- WORKSHOP & INTERNSHIP FLOWS (Unchanged) ---
  const openWorkshopRegister = (workshop) => {
    setSelectedWorkshop(workshop);
    setWorkshopModalOpen(true);
  };

  const handleWorkshopProceedToPay = ({ feeAmount, itemTitle, meta }) => {
    setWorkshopModalOpen(false);
    setPaymentConfig({ fee: feeAmount, title: itemTitle });
    setPaymentModalOpen(true);
  };

  const handleApplyInternship = (internship) => {
    setPaymentConfig({ fee: internship.price, title: `Internship Registration: ${internship.title}` });
    setPaymentModalOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#000000] text-[#EAEFF8] flex flex-col font-sans selection:bg-[#00D4FF] selection:text-[#000000]">
        <Header />
        <Navbar />

        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Home onOpenGuidanceBooking={() => startGuidanceBooking({ duration: '30 Minutes', price: 49 })} />} />
            
            <Route path="/guidance" element={<CareerGuidanceScreen onStartBooking={startGuidanceBooking} />} />
            <Route path="/workshops" element={<WorkshopsScreen onOpenWorkshopRegister={openWorkshopRegister} />} />
            <Route path="/internships" element={<InternshipsScreen onApplyInternship={handleApplyInternship} />} />
            
            <Route path="/courses" element={<Courses />} />
            <Route path="/student-details" element={<CourseStudentDetails />} />
            <Route path="/payment" element={<CoursePayment />} />
            <Route path="/confirmation" element={<ConfirmedScreen />} />
            
            <Route path="/btech-projects" element={<ProjectsScreen type="B.Tech" />} />
            <Route path="/mtech-projects" element={<ProjectsScreen type="M.Tech" />} />
            <Route path="/project-enquiry" element={<ProjectEnquiryScreen />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
            <Route path="/termsconditions" element={<TermsAndConditions/>}/>
          </Routes>
        </main>

        <Footer />

        <BookSlotModal 
          isOpen={slotModalOpen} 
          onClose={() => setSlotModalOpen(false)} 
          initialData={guidanceConfig} 
          onProceed={handleSlotSelected} 
        />
        <StudentDetailsModal 
          isOpen={studentModalOpen} 
          onClose={() => setStudentModalOpen(false)} 
          onProceed={handleStudentDetailsSubmitted} 
        />
        <PaymentModal 
          isOpen={paymentModalOpen} 
          onClose={() => setPaymentModalOpen(false)} 
          feeAmount={paymentConfig.fee} 
          itemTitle={paymentConfig.title} 
          careerPayload={careerPayload}
          onPaySuccess={handlePaymentSuccess} 
        />
        <ConfirmationModal 
          isOpen={confirmModalOpen} 
          onClose={() => setConfirmModalOpen(false)} 
          bookingData={finalBookingData} 
        />
        <WorkshopRegisterModal 
          isOpen={workshopModalOpen} 
          onClose={() => setWorkshopModalOpen(false)} 
          selectedWorkshop={selectedWorkshop} 
          onProceedPayment={handleWorkshopProceedToPay} 
        />
      </div>
    </Router>
  );
}