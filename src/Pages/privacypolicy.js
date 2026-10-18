import React from 'react';
import { 
  Info, 
  Database, 
  Settings, 
  Video, 
  Briefcase, 
  BookOpen, 
  MessageCircle, 
  Cookie, 
  Share2, 
  Shield, 
  Archive, 
  UserCheck, 
  ShieldAlert, 
  ExternalLink, 
  RefreshCw, 
  Mail,
  Globe,
  Phone,
  MapPin
} from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container" style={{ backgroundColor: '#000000', color: '#FFFFFF', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', borderBottom: '1px solid #333333', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#FFFFFF' }}>Privacy Policy</h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', color: '#CCCCCC' }}>Vighnavi Academy</h2>
          <p style={{ color: '#AAAAAA' }}><strong>Last Updated:</strong> 18 October 2026</p>
        </div>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Info size={24} /> 1. Introduction
        </h3>
        <p style={{ color: '#CCCCCC' }}>Welcome to Vighnavi Academy. We are committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, explore our courses, enquire about our services, or purchase educational products.</p>
        <p style={{ color: '#CCCCCC' }}>Vighnavi Academy provides online technical education, recorded video courses, study materials, B.Tech and M.Tech project guidance, career guidance, and related educational services.</p>
        <p style={{ color: '#CCCCCC' }}>By using our website or submitting your information through our enquiry forms, you acknowledge that you have read this Privacy Policy.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Database size={24} /> 2. Information We Collect
        </h3>
        <p style={{ color: '#CCCCCC' }}>You can browse our website and explore available courses without creating an account or logging in.</p>
        <p style={{ color: '#CCCCCC' }}>We may collect the following information when you voluntarily contact us, submit an enquiry, book a demo, or purchase a service:</p>
        <ul style={{ color: '#CCCCCC', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}><strong style={{ color: '#FFFFFF' }}>Contact information:</strong> Name, mobile number, email address, and preferred contact method.</li>
          <li style={{ marginBottom: '10px' }}><strong style={{ color: '#FFFFFF' }}>Educational information:</strong> Qualification, degree, branch, year of study, academic interests, and project requirements.</li>
          <li style={{ marginBottom: '10px' }}><strong style={{ color: '#FFFFFF' }}>Course information:</strong> Selected course, learning preferences, demo requests, and course enquiries.</li>
          <li style={{ marginBottom: '10px' }}><strong style={{ color: '#FFFFFF' }}>Project information:</strong> Project topic, technical requirements, academic requirements, and details you choose to share.</li>
          <li style={{ marginBottom: '10px' }}><strong style={{ color: '#FFFFFF' }}>Purchase information:</strong> Course or material selected, order details, payment status, and transaction references.</li>
          <li style={{ marginBottom: '10px' }}><strong style={{ color: '#FFFFFF' }}>Communication records:</strong> Messages and enquiries you send to us through our website, email, telephone, or WhatsApp.</li>
        </ul>
        <p style={{ color: '#CCCCCC' }}>Please do not submit passwords, bank PINs, card PINs, OTPs, or other confidential financial credentials through our enquiry forms.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Settings size={24} /> 3. How We Use Your Information
        </h3>
        <p style={{ color: '#CCCCCC' }}>We may use your information to:</p>
        <ul style={{ color: '#CCCCCC', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '5px' }}>Respond to course and service enquiries.</li>
          <li style={{ marginBottom: '5px' }}>Contact you about demo classes and course details.</li>
          <li style={{ marginBottom: '5px' }}>Explain course fees, curriculum, schedules, and available learning options.</li>
          <li style={{ marginBottom: '5px' }}>Process course, recorded-video access, and study-material purchases.</li>
          <li style={{ marginBottom: '5px' }}>Provide educational project guidance and related support.</li>
          <li style={{ marginBottom: '5px' }}>Offer career guidance, interview preparation, and learning recommendations.</li>
          <li style={{ marginBottom: '5px' }}>Share important updates about a service you have requested or purchased.</li>
          <li style={{ marginBottom: '5px' }}>Maintain payment, order, and business records.</li>
          <li style={{ marginBottom: '5px' }}>Improve our website, services, and learner experience.</li>
          <li style={{ marginBottom: '5px' }}>Meet applicable legal and regulatory requirements.</li>
        </ul>
        <p style={{ color: '#CCCCCC' }}>We will not use your information for unrelated purposes without an appropriate legal basis or required consent.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Video size={24} /> 4. Courses and Recorded Video Access
        </h3>
        <p style={{ color: '#CCCCCC' }}>Vighnavi Academy offers online courses and recorded educational videos that may be available for an extended period, as specified in the applicable course description or purchase terms.</p>
        <p style={{ color: '#CCCCCC' }}>Browsing publicly available course information does not require login or account creation.</p>
        <p style={{ color: '#CCCCCC' }}>If you purchase a course or request access to restricted learning resources, we may collect the minimum information necessary to confirm your purchase and provide the agreed access. Any access conditions, duration, and restrictions will be communicated separately where applicable.</p>
        <p style={{ color: '#CCCCCC' }}>We do not claim that every video or learning resource is publicly accessible or available indefinitely. Access depends on the course and the terms communicated at the time of purchase.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Briefcase size={24} /> 5. B.Tech and M.Tech Project Services
        </h3>
        <p style={{ color: '#CCCCCC' }}>We may collect educational details and project requirements to understand your needs and provide relevant project guidance or technical services.</p>
        <p style={{ color: '#CCCCCC' }}>You should share only information necessary for the requested service. Do not submit sensitive academic records, institutional login credentials, or personal information belonging to other individuals unless you are authorized to do so.</p>
        <p style={{ color: '#CCCCCC' }}>Project support is intended to assist learning and technical development. Students are responsible for following their institution's academic integrity rules and applicable project submission requirements.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <BookOpen size={24} /> 6. Study Materials and Purchases
        </h3>
        <p style={{ color: '#CCCCCC' }}>If you purchase study materials, courses, or other educational services, we may process your contact details, selected items, order information, delivery details where relevant, and payment confirmation information.</p>
        <p style={{ color: '#CCCCCC' }}>Where payments are handled by a third-party payment provider, that provider may process payment information under its own privacy policy and security practices.</p>
        <p style={{ color: '#CCCCCC' }}>Vighnavi Academy does not need your card PIN, UPI PIN, internet banking password, or OTP to confirm an ordinary purchase. Never share these credentials with us.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <MessageCircle size={24} /> 7. Enquiries and Communication
        </h3>
        <p style={{ color: '#CCCCCC' }}>When you submit an enquiry, request a demo, or contact us, we may use your contact details to respond to your request and provide relevant information about the service you selected.</p>
        <p style={{ color: '#CCCCCC' }}>If you separately consent to receive promotional communications, we may also send information about courses, offers, events, and educational services. You can request to stop promotional communications at any time.</p>
        <p style={{ color: '#CCCCCC' }}>Essential messages relating to an enquiry, purchase, or service you requested may still be sent when necessary.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Cookie size={24} /> 8. Cookies and Website Analytics
        </h3>
        <p style={{ color: '#CCCCCC' }}>Our website may use cookies or similar technologies to support website functionality, understand visitor activity, improve performance, and maintain security.</p>
        <p style={{ color: '#CCCCCC' }}>If analytics, advertising, or other third-party tracking tools are used, they may collect technical information such as browser type, device information, pages visited, and approximate usage patterns.</p>
        <p style={{ color: '#CCCCCC' }}>Where required by applicable law, we will provide appropriate notice and obtain consent before using non-essential cookies or tracking technologies. You can also manage cookies through your browser settings.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Share2 size={24} /> 9. Sharing of Information
        </h3>
        <p style={{ color: '#CCCCCC' }}>We do not sell your personal information to third parties.</p>
        <p style={{ color: '#CCCCCC' }}>We may share limited information when necessary with:</p>
        <ul style={{ color: '#CCCCCC', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '5px' }}>Website hosting and technical service providers.</li>
          <li style={{ marginBottom: '5px' }}>Payment providers and transaction-processing services.</li>
          <li style={{ marginBottom: '5px' }}>Communication services used to respond to enquiries.</li>
          <li style={{ marginBottom: '5px' }}>Delivery or fulfilment partners, where physical materials are offered.</li>
          <li style={{ marginBottom: '5px' }}>Professional advisers, auditors, or authorities where legally required.</li>
        </ul>
        <p style={{ color: '#CCCCCC' }}>Service providers should receive only the information reasonably necessary for their role and should handle it in accordance with applicable requirements.</p>
        <p style={{ color: '#CCCCCC' }}>We may also disclose information when necessary to protect our legal rights, prevent fraud, address security incidents, or comply with lawful requests.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Shield size={24} /> 10. Data Storage and Security
        </h3>
        <p style={{ color: '#CCCCCC' }}>We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.</p>
        <p style={{ color: '#CCCCCC' }}>Information may be stored using secure website hosting, databases, business communication tools, or third-party service providers.</p>
        <p style={{ color: '#CCCCCC' }}>No website or electronic transmission can be guaranteed to be completely secure. We work to reduce risks and address security incidents appropriately.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Archive size={24} /> 11. Data Retention
        </h3>
        <p style={{ color: '#CCCCCC' }}>We retain personal information only for as long as reasonably necessary to respond to enquiries, deliver services, maintain purchase records, resolve disputes, meet legal obligations, and protect legitimate business interests.</p>
        <p style={{ color: '#CCCCCC' }}>When information is no longer required, we will take reasonable steps to delete it or anonymize it, subject to applicable legal retention requirements.</p>
        <p style={{ color: '#CCCCCC' }}>You may request deletion of your personal information, although some records may need to be retained where required by law or necessary to resolve outstanding matters.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <UserCheck size={24} /> 12. Your Privacy Rights
        </h3>
        <p style={{ color: '#CCCCCC' }}>Subject to applicable law, you may request to:</p>
        <ul style={{ color: '#CCCCCC', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '5px' }}>Know what personal information we hold about you.</li>
          <li style={{ marginBottom: '5px' }}>Correct inaccurate or incomplete information.</li>
          <li style={{ marginBottom: '5px' }}>Request deletion of information that we no longer need to retain.</li>
          <li style={{ marginBottom: '5px' }}>Withdraw consent for processing that relies on your consent.</li>
          <li style={{ marginBottom: '5px' }}>Stop receiving promotional communications.</li>
          <li style={{ marginBottom: '5px' }}>Raise a concern about how your information is handled.</li>
        </ul>
        <p style={{ color: '#CCCCCC' }}>We may need to verify your identity before processing certain requests. We will respond in accordance with applicable legal requirements.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <ShieldAlert size={24} /> 13. Children's Privacy
        </h3>
        <p style={{ color: '#CCCCCC' }}>Our services may be used by students and other learners. If you are under 18, please provide personal information with the involvement or consent of a parent or legal guardian where required by applicable law.</p>
        <p style={{ color: '#CCCCCC' }}>We do not knowingly collect children's personal information in a manner prohibited by applicable law. If you believe a child has provided information inappropriately, please contact us so we can review the matter.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <ExternalLink size={24} /> 14. Third-Party Websites and Services
        </h3>
        <p style={{ color: '#CCCCCC' }}>Our website may contain links to external websites or services, including WhatsApp, payment providers, video platforms, and other educational resources.</p>
        <p style={{ color: '#CCCCCC' }}>These third parties operate under their own terms and privacy policies. Vighnavi Academy is not responsible for the privacy practices of external websites that we do not control.</p>
        <p style={{ color: '#CCCCCC' }}>Please review their policies before sharing personal information with them.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <RefreshCw size={24} /> 15. Changes to This Privacy Policy
        </h3>
        <p style={{ color: '#CCCCCC' }}>We may update this Privacy Policy to reflect changes in our services, website features, business practices, or legal requirements.</p>
        <p style={{ color: '#CCCCCC' }}>The updated version will be published on our website with a revised “Last Updated” date. We encourage visitors to review this page periodically.</p>

        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', color: '#FFFFFF' }}>
          <Mail size={24} /> 16. Contact Us
        </h3>
        <p style={{ color: '#CCCCCC' }}>If you have questions about this Privacy Policy, wish to request access to or correction of your information, or want to raise a privacy concern, contact us using the details below.</p>
        
        <div className="contact-details" style={{ backgroundColor: '#111111', border: '1px solid #333333', padding: '20px', borderRadius: '8px', marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF' }}>
            <strong>Organization:</strong> Vighnavi Academy
          </p>
         
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: '#CCCCCC' }}>
            <Mail size={18} color="#FFFFFF" /> <strong>Email:</strong> contact@vighnaviacademy.com
          </p>
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: '#CCCCCC' }}>
            <Phone size={18} color="#FFFFFF" /> <strong>Phone/WhatsApp:</strong> 9390642779
          </p>
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: '#CCCCCC' }}>
            <MapPin size={18} color="#FFFFFF" /> <strong>Address:</strong> Tadipatri, Anantapur 515411
          </p>
        </div>

        <div className="footer-slogan" style={{ textAlign: 'center', marginTop: '60px', fontStyle: 'italic', color: '#FFFFFF', borderTop: '1px solid #333333', paddingTop: '30px' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '5px' }}><strong>Vighnavi Academy — Wisdom. Knowledge. Success.</strong></p>
          <p style={{ color: '#AAAAAA' }}>Learn Today. Lead Tomorrow.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;