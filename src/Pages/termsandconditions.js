import React from 'react';
import { 
  BookOpen, 
  UserX, 
  Layers, 
  ShieldCheck, 
  CreditCard, 
  Copyright, 
  RefreshCcw, 
  MessageSquare, 
  AlertTriangle, 
  Scale, 
  Edit3, 
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="terms-container" style={{ backgroundColor: '#000000', color: '#FFFFFF', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', mb: '40px', borderBottom: '1px solid #333', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Terms and Conditions</h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', color: '#CCCCCC' }}>Vighnavi Academy</h2>
          <p style={{ color: '#AAAAAA' }}><strong>Last Updated:</strong> 18 October 2026</p>
        </div>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <BookOpen size={24} /> 1. Introduction
        </h3>
        <p style={{ color: '#CCCCCC' }}>Welcome to Vighnavi Academy. These Terms and Conditions govern your use of our website and services, including online technical education, recorded video courses, study materials, B.Tech and M.Tech project guidance, and career counseling.</p>
        <p style={{ color: '#CCCCCC' }}>By accessing our website, submitting an enquiry, or purchasing our services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our website or services.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <UserX size={24} /> 2. No User Accounts or Dashboard
        </h3>
        <p style={{ color: '#CCCCCC' }}>Vighnavi Academy operates without a traditional user login portal or student dashboard. You can browse our offerings freely. When you purchase a course, study material, or video access, the content will be delivered to you directly via secure external links (such as Google Drive or private video links) to your registered email address or WhatsApp.</p>
        <p style={{ color: '#CCCCCC' }}>You are responsible for keeping these access links secure and must not share them with unauthorized individuals.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Layers size={24} /> 3. Services Provided
        </h3>
        <ul style={{ color: '#CCCCCC', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}><strong>Recorded Courses & Study Materials:</strong> Access is granted upon successful payment confirmation. The duration of access will be specified at the time of purchase.</li>
          <li style={{ marginBottom: '10px' }}><strong>Project Guidance:</strong> We provide technical mentorship and development support for B.Tech and M.Tech academic projects.</li>
          <li style={{ marginBottom: '10px' }}><strong>Career Guidance:</strong> Advice, interview preparation, and technical skill enhancement sessions.</li>
        </ul>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <ShieldCheck size={24} /> 4. Academic Integrity for Project Services
        </h3>
        <p style={{ color: '#CCCCCC' }}>Our B.Tech and M.Tech project guidance is strictly intended for educational and learning purposes. We provide the technical knowledge, source code explanation, and documentation support to help you understand your chosen topic.</p>
        <p style={{ color: '#CCCCCC' }}>Students are entirely responsible for adhering to their specific university or college guidelines regarding plagiarism, academic integrity, and final submissions. Vighnavi Academy is not responsible for academic grading, university approvals, or institutional evaluations.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <CreditCard size={24} /> 5. Payments and Pricing
        </h3>
        <p style={{ color: '#CCCCCC' }}>All fees for courses, materials, and project guidance will be communicated directly during your enquiry or listed on the website. Payments are processed through secure third-party payment gateways (UPI, Bank Transfer, etc.).</p>
        <p style={{ color: '#CCCCCC' }}>We will never ask for your confidential banking passwords, OTPs, or card PINs. Please ensure you only make payments to our officially communicated accounts.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Copyright size={24} /> 6. Intellectual Property
        </h3>
        <p style={{ color: '#CCCCCC' }}>All course content, recorded videos, study notes, project architectures, and website designs are the intellectual property of Vighnavi Academy. You are granted a limited, non-exclusive, non-transferable license to use the materials for your personal learning.</p>
        <p style={{ color: '#CCCCCC' }}>You may not reproduce, distribute, modify, upload to public platforms, or sell any of our educational materials without our explicit written consent. Unauthorized distribution will result in immediate termination of access and potential legal action.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <RefreshCcw size={24} /> 7. Refunds and Cancellations
        </h3>
        <p style={{ color: '#CCCCCC' }}>Because our products are digital (recorded videos, PDFs, source code) and project guidance involves dedicated mentor time, fees paid are generally <strong style={{ color: '#FFFFFF' }}>non-refundable</strong> once access or service has been delivered.</p>
        <p style={{ color: '#CCCCCC' }}>In the event of a duplicate payment or failure to deliver the promised access links from our end, please contact us within 3 days for resolution or a potential refund.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <MessageSquare size={24} /> 8. Communication
        </h3>
        <p style={{ color: '#CCCCCC' }}>By submitting your phone number and email address via our website forms, you consent to Vighnavi Academy contacting you via phone calls, WhatsApp, or email regarding your enquiries, purchases, and related educational updates.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <AlertTriangle size={24} /> 9. Limitation of Liability
        </h3>
        <p style={{ color: '#CCCCCC' }}>Vighnavi Academy strives to provide high-quality education and accurate technical guidance. However, we do not guarantee specific outcomes, such as guaranteed job placements or specific university grades. Our liability is strictly limited to the amount paid by you for the specific service in question.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Scale size={24} /> 10. Governing Law and Jurisdiction
        </h3>
        <p style={{ color: '#CCCCCC' }}>These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Tadipatri, Anantapur, Andhra Pradesh.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Edit3 size={24} /> 11. Changes to Terms
        </h3>
        <p style={{ color: '#CCCCCC' }}>We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated date. Continued use of our services after any such changes constitutes your acceptance of the new Terms.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Mail size={24} /> 12. Contact Information
        </h3>
        <p style={{ color: '#CCCCCC' }}>If you have any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
        
        <div className="contact-details" style={{ backgroundColor: '#111111', border: '1px solid #333333', padding: '20px', borderRadius: '8px', marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF' }}>
            <strong>Organization:</strong> Vighnavi Academy
          </p>
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: '#CCCCCC' }}>
            <Phone size={18} color="#FFFFFF" /> <strong>Phone / WhatsApp:</strong> 9390642779
          </p>
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: '#CCCCCC' }}>
            <MapPin size={18} color="#FFFFFF" /> <strong>Address:</strong> Tadipatri, Anantapur 515411, Andhra Pradesh, India
          </p>
        </div>

        <div className="footer-slogan" style={{ textAlign: 'center', marginTop: '60px', fontStyle: 'italic', color: '#FFFFFF', borderTop: '1px solid #333', paddingTop: '30px' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '5px' }}><strong>Vighnavi Academy — Wisdom. Knowledge. Success.</strong></p>
          <p style={{ color: '#AAAAAA' }}>Learn Today. Lead Tomorrow.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;