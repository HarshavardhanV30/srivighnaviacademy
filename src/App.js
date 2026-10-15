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
import WorkshopsScreen from './Pages/WorkshopsScreen';
import InternshipsScreen from './Pages/InternshipsScreen';
import ProjectsScreen from './Pages/ProjectsScreen';
import ProjectEnquiryScreen from './Pages/ProjectEnquiryScreen';

// Modals
import BookSlotModal from './Pages/BookSlotModal';
import ConfirmationModal from './Pages/ConfirmationModal';
import PaymentModal from './Pages/PaymentModal';
import StudentDetailsModal from './Pages/StudentDetailsModal';
import WorkshopRegisterModal from './Pages/WorkshopRegisterModal';

// Components
import CareerGuidanceScreen from './components/CareerGuidanceScreen';

export default function App() {
  // ----------------------------------------------------
  // GLOBAL MODAL STATES
  // ----------------------------------------------------
  const [slotModalOpen, setSlotModalOpen] = useState(false);
  const [studentModalOpen, setStudentModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [workshopModalOpen, setWorkshopModalOpen] = useState(false);

  // ----------------------------------------------------
  // CONFIGURATION STATES
  // ----------------------------------------------------
  const [guidanceConfig, setGuidanceConfig] = useState({ duration: '30 Minutes', price: 49 });
  const [bookingMeta, setBookingMeta] = useState({});
  const [paymentConfig, setPaymentConfig] = useState({ fee: 29, title: '' });
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  // ----------------------------------------------------
  // CAREER GUIDANCE FLOW
  // ----------------------------------------------------
  const startGuidanceBooking = (config) => {
    setGuidanceConfig(config);
    setSlotModalOpen(true);
  };

  const handleSlotSelected = (slotData) => {
    setBookingMeta((prev) => ({ ...prev, ...slotData }));
    setSlotModalOpen(false);
    setStudentModalOpen(true);
  };

  const handleStudentDetailsSubmitted = (studentData) => {
    setBookingMeta((prev) => ({ ...prev, ...studentData }));
    setStudentModalOpen(false);
    setPaymentConfig({ fee: guidanceConfig.price, title: `Career Guidance: ${guidanceConfig.duration}` });
    setPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    setPaymentModalOpen(false);
    setConfirmModalOpen(true);
  };

  // ----------------------------------------------------
  // WORKSHOP FLOW
  // ----------------------------------------------------
  const openWorkshopRegister = (workshop) => {
    setSelectedWorkshop(workshop);
    setWorkshopModalOpen(true);
  };

  const handleWorkshopProceedToPay = ({ feeAmount, itemTitle, meta }) => {
    setBookingMeta((prev) => ({ ...prev, ...meta }));
    setWorkshopModalOpen(false);
    setPaymentConfig({ fee: feeAmount, title: itemTitle });
    setPaymentModalOpen(true);
  };

  // ----------------------------------------------------
  // INTERNSHIP FLOW
  // ----------------------------------------------------
  const handleApplyInternship = (internship) => {
    setBookingMeta({ type: 'Internship', title: internship.title });
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
            
            {/* Pages passed with specific triggers for the modals */}
            <Route path="/guidance" element={<CareerGuidanceScreen onStartBooking={startGuidanceBooking} />} />
            <Route path="/workshops" element={<WorkshopsScreen onOpenWorkshopRegister={openWorkshopRegister} />} />
            <Route path="/internships" element={<InternshipsScreen onApplyInternship={handleApplyInternship} />} />
            
            <Route path="/courses" element={<Courses />} />
            
            {/* Project Routes */}
            <Route path="/btech-projects" element={<ProjectsScreen type="B.Tech" />} />
            <Route path="/mtech-projects" element={<ProjectsScreen type="M.Tech" />} />
            <Route path="/project-enquiry" element={<ProjectEnquiryScreen />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* ---------------------------------------------------- */}
        {/* GLOBAL MODALS (Hidden until triggered by a page) */}
        {/* ---------------------------------------------------- */}
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
          onPaySuccess={handlePaymentSuccess} 
        />
        <ConfirmationModal 
          isOpen={confirmModalOpen} 
          onClose={() => setConfirmModalOpen(false)} 
          bookingData={bookingMeta} 
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