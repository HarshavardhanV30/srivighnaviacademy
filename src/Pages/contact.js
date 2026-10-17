import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', choice: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    ['How do I join the online classes?', 'Choose your course, complete the enrolment process, and our team will share your class schedule and joining details.'],
    ['Are the classes live or recorded?', 'Our courses include live interactive classes along with learning resources and recordings where applicable.'],
    ['Will I get a certificate after the course?', 'Students who successfully complete the required course work can receive a course completion certificate.'],
    ['Do you provide placement support?', 'We provide placement guidance, interview preparation, resume support and career assistance.'],
    ['What if I miss a live class?', 'You can contact our support team for the available recording or alternate learning arrangement.'],
    ['How can I make the payment?', 'Our team will provide the available payment options and instructions during enrolment.']
  ];

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    const body = new FormData();
    body.append('access_key', 'a70b7dfc9b3b49499bcfb8c178f936ae');
    body.append('name', form.name);
    body.append('phone', form.phone);
    body.append('email', form.email);
    body.append('choice', form.choice);
    body.append('message', form.message);
    try {
      const response = await fetch('https://splitforms.com/api/submit', { method: 'POST', headers: { Accept: 'application/json' }, body });
      if (!response.ok) throw new Error('Submission failed');
      setForm({ name: '', phone: '', email: '', choice: '', message: '' });
      setStatus('success');
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #000000; }
        .contact-page { width: 100%; font-family: Inter, Arial, sans-serif; color: #ffffff; background: #000000; overflow: hidden; }
        .contact-page button, .contact-page input, .contact-page select, .contact-page textarea { font-family: inherit; }
        
        .contact-hero { position: relative; min-height: 470px; background: url("https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=90") center/cover no-repeat; }
        .contact-hero:after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(10,10,10,0.85) 45%, rgba(0,0,0,0.7) 100%); }
        
        .hero-container { position: relative; z-index: 2; width: min(1180px, calc(100% - 48px)); min-height: 470px; margin: auto; display: flex; align-items: center; }
        .hero-content { width: 60%; padding: 45px 0; }
        .hero-label { font-size: 12px; letter-spacing: 3px; font-weight: 900; color: #4da6ff; margin-bottom: 13px; text-transform: uppercase; }
        .hero-title { font-family: Georgia, "Times New Roman", serif; font-size: 57px; line-height: .98; letter-spacing: -1.8px; color: #ffffff; margin: 0; }
        .hero-title span { color: #f0c355; }
        .hero-description { max-width: 570px; color: #cccccc; font-size: 15px; line-height: 1.6; margin: 19px 0 25px; }
        
        .hero-features { display: grid; grid-template-columns: repeat(3, 1fr); max-width: 540px; }
        .hero-feature { display: flex; align-items: center; gap: 10px; border-right: 1px solid #333333; padding: 5px 17px 5px 0; margin-right: 17px; }
        .hero-feature:last-child { border: 0; }
        .hero-feature-icon { font-size: 26px; color: #4da6ff; }
        .hero-feature-text { font-size: 12px; line-height: 1.35; color: #eeeeee; font-weight: 700; }
        
        .hero-question { position: absolute; z-index: 3; left: 47%; top: 63px; color: #ffffff; font-family: "Comic Sans MS", cursive; font-size: 21px; line-height: 1.05; font-style: italic; transform: rotate(-7deg); text-align: center; }
        .hero-question:after { content: ""; display: block; width: 78px; height: 3px; background: #f0c355; margin: 8px auto; transform: rotate(-8deg); }
        .hero-smile { color: #f0c355; font-size: 27px; }
        
        .hero-contact-list { position: absolute; z-index: 3; right: 0; top: 25px; width: 195px; }
        .hero-contact-item { height: 48px; margin-bottom: 7px; border-radius: 10px; background: #111111; border: 1px solid #222222; display: flex; align-items: center; gap: 11px; padding: 0 12px; color: #ffffff; font-size: 11px; font-weight: 700; box-shadow: 0 5px 16px rgba(0,0,0,0.5); transition: .25s; }
        .hero-contact-item:hover { transform: translateX(-6px); border-color: #4da6ff; box-shadow: 0 8px 22px rgba(77,166,255,0.15); }
        .hero-contact-icon { width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; background: #08083B; border: 1px solid #1a1a66; color: #fff; font-size: 16px; flex-shrink: 0; }
        
        .hero-note { position: absolute; z-index: 4; right: 0; bottom: 25px; color: #ffffff; font-family: "Comic Sans MS", cursive; font-size: 18px; line-height: 1.05; text-align: center; font-style: italic; transform: rotate(-5deg); }
        .hero-note span { color: #f0c355; font-size: 27px; }
        
        .contact-main { padding: 40px 0 0; }
        .container { width: min(1180px, calc(100% - 48px)); margin: auto; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 25px; align-items: start; }
        .left-column { display: flex; flex-direction: column; gap: 20px; }
        
        .contact-card { border: 1px solid #222222; border-radius: 17px; background: #0a0a0a; padding: 25px; box-shadow: 0 10px 32px rgba(0,0,0,0.8); position: relative; overflow: hidden; }
        .contact-card:before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 5px; background: #08083B; }
        .card-heading { display: flex; align-items: center; gap: 13px; margin-bottom: 22px; }
        .card-heading-icon { width: 52px; height: 52px; border-radius: 15px; background: #111111; border: 1px solid #222222; color: #4da6ff; display: flex; align-items: center; justify-content: center; font-size: 24px; }
        .card-title { font-family: Georgia, "Times New Roman", serif; font-size: 24px; color: #ffffff; margin: 0; }
        .card-subtitle { color: #aaaaaa; font-size: 13px; margin: 5px 0 0; line-height: 1.45; }
        
        .form-group { margin-bottom: 14px; position: relative; }
        .input-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-size: 15px; color: #4da6ff; z-index: 1; }
        .contact-input, .contact-select, .contact-textarea { width: 100%; border: 1.5px solid #222222; border-radius: 11px; background: #141414; color: #ffffff; font-size: 13px; outline: none; transition: .25s; }
        .contact-input::placeholder, .contact-textarea::placeholder { color: #777777; }
        .contact-input, .contact-select { height: 50px; padding: 0 14px 0 42px; }
        .contact-textarea { height: 120px; padding: 15px 14px 15px 42px; resize: vertical; min-height: 100px; }
        .contact-input:focus, .contact-select:focus, .contact-textarea:focus { border-color: #4da6ff; background: #000000; box-shadow: 0 0 0 4px rgba(77,166,255,0.1); transform: translateY(-1px); }
        
        .send-button { width: 100%; height: 52px; border: 1px solid #1a1a66; border-radius: 25px; background: #08083B; color: #ffffff; font-size: 14px; font-weight: 900; cursor: pointer; margin-top: 10px; transition: .25s; box-shadow: 0 8px 18px rgba(8,8,59,0.5); }
        .send-button:hover { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(8,8,59,0.8); border-color: #4da6ff; }
        .send-button:disabled { opacity: .65; cursor: not-allowed; transform: none; }
        
        .success-message, .error-message { margin-top: 14px; padding: 13px; border-radius: 9px; font-size: 12px; text-align: center; font-weight: 700; }
        .success-message { background: #0d2a1f; color: #4ade80; border: 1px solid #164a36; }
        .error-message { background: #2e1111; color: #f87171; border: 1px solid #521c1c; }
        .form-trust { display: flex; justify-content: center; gap: 16px; margin-top: 16px; color: #888888; font-size: 11px; }
        .form-trust span { display: flex; align-items: center; gap: 5px; }
        
        .info-card { background: linear-gradient(135deg, #111111, #080808); border-radius: 17px; padding: 25px; min-height: 280px; border: 1px solid #222222; }
        .info-heading { display: flex; align-items: center; gap: 13px; margin-bottom: 10px; }
        .info-heading-icon { width: 50px; height: 50px; border-radius: 14px; background: #111111; border: 1px solid #222222; color: #4da6ff; display: flex; align-items: center; justify-content: center; font-size: 23px; }
        
        .info-row { display: flex; align-items: center; gap: 15px; margin: 15px 0; padding: 12px; border-radius: 12px; transition: .25s; border: 1px solid transparent; }
        .info-row:hover { background: #141414; border-color: #222222; transform: translateX(4px); }
        .info-icon { width: 45px; height: 45px; border-radius: 12px; background: #08083B; border: 1px solid #1a1a66; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
        .info-main { color: #ffffff; font-size: 14px; font-weight: 900; }
        .info-main a { color: #ffffff; text-decoration: none; transition: 0.2s; }
        .info-main a:hover { color: #4da6ff; }
        .info-detail { color: #aaaaaa; font-size: 11px; line-height: 1.45; margin-top: 4px; }
        
        .quick-card { border: 1px solid #222222; border-radius: 17px; padding: 25px; background: #0a0a0a; }
        .quick-heading { display: flex; align-items: center; gap: 13px; margin-bottom: 18px; }
        .quick-icon { width: 49px; height: 49px; border-radius: 14px; background: #111111; border: 1px solid #222222; color: #4da6ff; display: flex; align-items: center; justify-content: center; font-size: 22px; }
        .quick-title { font-family: Georgia, "Times New Roman", serif; color: #ffffff; font-size: 22px; margin: 0; }
        .quick-subtitle { font-size: 12px; color: #aaaaaa; margin-top: 4px; }
        
        .quick-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .quick-item { border: 1px solid #222222; border-radius: 11px; padding: 13px; background: #111111; display: flex; gap: 10px; align-items: center; transition: .25s; }
        .quick-item:hover { border-color: #4da6ff; transform: translateY(-3px); background: #141414; }
        .quick-item-icon { font-size: 22px; color: #4da6ff; }
        .quick-item-title { font-size: 12px; font-weight: 900; color: #ffffff; }
        .quick-item-text { font-size: 10px; color: #999999; margin-top: 3px; }
        
        .support-banner { position: relative; min-height: 155px; border-radius: 15px; overflow: hidden; margin-top: 30px; background: #111111 url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85") center/cover no-repeat; border: 1px solid #222222; }
        .support-banner:after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,0.98), rgba(10,10,10,0.9), rgba(0,0,0,0.7)); }
        .support-content { position: relative; z-index: 2; display: flex; align-items: center; min-height: 155px; padding: 25px; color: #ffffff; }
        .support-icon { width: 57px; height: 57px; border-radius: 16px; background: #08083B; border: 1px solid #1a1a66; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 27px; margin-right: 18px; flex-shrink: 0; }
        .support-title { font-family: Georgia, "Times New Roman", serif; font-size: 24px; line-height: 1.1; margin: 0; color: #ffffff; }
        .support-text { font-size: 12px; margin-top: 8px; max-width: 380px; line-height: 1.5; color: #bbbbbb; }
        
        .support-stats { margin-left: auto; display: grid; grid-template-columns: repeat(3, 1fr); background: rgba(17,17,17,0.8); border: 1px solid #222222; border-radius: 11px; min-width: 385px; }
        .support-stat { text-align: center; padding: 14px; border-right: 1px solid #222222; }
        .support-stat:last-child { border: 0; }
        .support-stat-icon { font-size: 20px; color: #f0c355; }
        .support-stat-number { font-size: 18px; font-weight: 900; margin-top: 4px; color: #ffffff; }
        .support-stat-text { font-size: 10px; color: #aaaaaa; margin-top: 3px; }
        
        .support-note { position: absolute; z-index: 3; right: 16px; top: 14px; color: #ffffff; font-family: "Comic Sans MS", cursive; font-size: 16px; line-height: 1.02; font-style: italic; transform: rotate(-5deg); }
        .support-note span { color: #f0c355; font-size: 22px; }
        
        .faq-section { padding: 40px 0 50px; }
        .faq-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 20px; }
        .faq-label { font-size: 12px; font-weight: 900; letter-spacing: 2.5px; color: #4da6ff; }
        .faq-title { font-family: Georgia, "Times New Roman", serif; font-size: 32px; color: #ffffff; margin: 5px 0 0; }
        .faq-title:after { content: ""; display: inline-block; width: 47px; height: 3px; background: #08083B; margin: 0 0 8px 12px; border-radius: 3px; }
        .faq-right { font-size: 12px; color: #888888; }
        
        .faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px 20px; }
        .faq-item { border: 1px solid #222222; border-radius: 10px; background: #0a0a0a; overflow: hidden; transition: .25s; }
        .faq-item:hover { border-color: #4da6ff; background: #111111; }
        .faq-question { width: 100%; min-height: 50px; border: 0; background: transparent; display: flex; justify-content: space-between; align-items: center; text-align: left; padding: 0 16px; color: #ffffff; font-size: 15px; font-weight: 700; cursor: pointer; }
        .faq-plus { font-size: 20px; color: #4da6ff; font-weight: 500; }
        .faq-answer { padding: 0 16px 16px; color: #aaaaaa; font-size: 14px; line-height: 1.6; }
        
        @media(max-width: 1000px) {
          .hero-content { width: 63%; }
          .hero-question { left: 49%; }
          .contact-grid { grid-template-columns: 1fr; }
          .support-stats { min-width: 350px; }
        }
        @media(max-width: 700px) {
          .contact-hero { min-height: 620px; }
          .hero-container { width: calc(100% - 30px); min-height: 620px; align-items: flex-start; }
          .hero-content { width: 100%; padding-top: 48px; }
          .hero-title { font-size: 43px; }
          .hero-description { font-size: 14px; }
          .hero-question, .hero-contact-list, .hero-note { display: none; }
          .hero-features { max-width: 100%; grid-template-columns: repeat(3, 1fr); }
          .hero-feature { padding-right: 8px; margin-right: 8px; }
          .container { width: calc(100% - 30px); }
          .support-banner { min-height: 310px; }
          .support-content { min-height: 310px; display: block; padding: 25px; }
          .support-icon { margin-bottom: 15px; }
          .support-stats { min-width: 0; width: 100%; margin: 20px 0 0; }
          .support-note { display: none; }
          .faq-header { display: block; }
          .faq-right { margin-top: 10px; }
          .faq-grid { grid-template-columns: 1fr; }
        }
        @media(max-width: 430px) {
          .hero-title { font-size: 38px; }
          .hero-features { grid-template-columns: 1fr; }
          .hero-feature { border-right: 0; border-bottom: 1px solid #333333; padding: 10px 0; margin: 0; }
          .hero-feature:last-child { border-bottom: 0; }
          .quick-grid { grid-template-columns: 1fr; }
          .support-stats { grid-template-columns: 1fr; }
          .support-stat { border-right: 0; border-bottom: 1px solid #222222; }
          .support-stat:last-child { border-bottom: 0; }
        }
      `}</style>

      <main className="contact-page">
        <section className="contact-hero">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-label">CONTACT US</div>
              <h1 className="hero-title">We’re Here<br />to <span>Help You!</span></h1>
              <p className="hero-description">Have questions about our online courses, batches, payments, or certifications? Our team is ready to assist you. Get in touch and take the next step towards your brighter future with Vighnavi Academy.</p>
              <div className="hero-features">
                <div className="hero-feature"><div className="hero-feature-icon">♧</div><div className="hero-feature-text">Quick<br />Response</div></div>
                <div className="hero-feature"><div className="hero-feature-icon">♟</div><div className="hero-feature-text">Friendly<br />Support</div></div>
                <div className="hero-feature"><div className="hero-feature-icon">◷</div><div className="hero-feature-text">Guidance<br />at Every Step</div></div>
              </div>
            </div>
            <div className="hero-question">Your<br />Questions<br />Our Priority<div className="hero-smile">☺</div></div>
            <div className="hero-contact-list">
              {[['🎓', 'Course Guidance'], ['▣', 'Batch Details'], ['◆', 'Fee & Offers'], ['⚙', 'Technical Support'], ['▤', 'Certifications'], ['●', 'General Queries']].map((x, i) => <div className="hero-contact-item" key={i}><div className="hero-contact-icon">{x[0]}</div>{x[1]}</div>)}
            </div>
            <div className="hero-note">We’re<br />Just a Message<br />Away! <span>♡</span></div>
          </div>
        </section>

        <section className="contact-main">
          <div className="container contact-grid">

            <div className="left-column">
              <div className="info-card">
                <div className="info-heading"><div className="info-heading-icon">⌖</div><div><h2 className="card-title">Get in Touch</h2><p className="card-subtitle">Reach out to us through any of the following channels.</p></div></div>
                <div className="info-row"><div className="info-icon">☎</div><div><div className="info-main"><a href="tel:+919390642779">+91 9390642779 / 8688110258</a></div><div className="info-detail">Mon - Sat, 9:00 AM - 7:00 PM<br />Online Support Only</div></div></div>
                <div className="info-row"><div className="info-icon">✉</div><div><div className="info-main"><a href="mailto:vighnaviacademy@gmail.com">vighnaviacademy@gmail.com</a></div><div className="info-detail">We reply within 24 hours</div></div></div>
                <div className="info-row"><div className="info-icon">●</div><div><div className="info-main">Online Classes Only</div><div className="info-detail">Live interactive online training<br />Learn from anywhere, anytime.</div></div></div>
              </div>

              <div className="quick-card">
                <div className="quick-heading"><div className="quick-icon">💡</div><div><h2 className="quick-title">Quick Help Topics</h2><div className="quick-subtitle">Find quick answers or reach the right team faster.</div></div></div>
                <div className="quick-grid">
                  {[['📖', 'Course Information', 'Know about our courses'], ['▣', 'Batch Schedule', 'Upcoming batches'], ['◆', 'Fees & Payment', 'Fee details & offers'], ['▤', 'Certifications', 'Get certified']].map((x, i) => <div className="quick-item" key={i}><div className="quick-item-icon">{x[0]}</div><div><div className="quick-item-title">{x[1]}</div><div className="quick-item-text">{x[2]}</div></div></div>)}
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="contact-card">
                <div className="card-heading"><div className="card-heading-icon">✉</div><div><h2 className="card-title">Send Us a Message</h2><p className="card-subtitle">Tell us what you are looking for and our team will contact you shortly.</p></div></div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group"><span className="input-icon">♟</span><input className="contact-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" required /></div>
                  <div className="form-group"><span className="input-icon">☎</span><input className="contact-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number *" pattern="[0-9]{10}" title="Please enter a valid 10 digit phone number" required /></div>
                  <div className="form-group"><span className="input-icon">✉</span><input className="contact-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address *" required /></div>
                  <div className="form-group"><span className="input-icon">▤</span><select className="contact-select" name="choice" value={form.choice} onChange={handleChange} required><option value="">What are you interested in? *</option><option>1 : 1 mentorship</option><option>Python With Sql</option><option>Java With Sql</option><option>Java Development</option><option>Python Development</option><option>Java Full Stack Development</option><option>Python Full Stack Development</option><option>MERN Stack Development</option><option>Data Analyst</option><option>Generative AI</option><option>Course Information</option><option>Batch Schedule</option><option>Fees & Payment</option><option>Certification</option><option>Technical Support</option><option>General Query</option></select></div>
                  <div className="form-group"><span className="input-icon" style={{ top: '25px' }}>▰</span><textarea className="contact-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell us what you want to learn or ask us your question *" required /></div>
                  <button className="send-button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending Your Message...' : 'Send Message   →'}</button>
                  {status === 'success' && <div className="success-message">✓ Thank you! Your message has been sent successfully. Our team will contact you shortly.</div>}
                  {status === 'error' && <div className="error-message">⚠ Something went wrong. Please try again or contact us directly.</div>}
                  <div className="form-trust"><span>🔒 Secure Enquiry</span><span>⚡ Quick Response</span><span>✓ Student Support</span></div>
                </form>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="support-banner">
              <div className="support-content">
                <div className="support-icon">♧</div>
                <div><h2 className="support-title">Live Support for<br />Your Learning Journey</h2><p className="support-text">Our support team is always ready to help you with course selection, technical issues, or any other queries.</p></div>
                <div className="support-stats">
                  <div className="support-stat"><div className="support-stat-icon">♟</div><div className="support-stat-number">100%</div><div className="support-stat-text">Student Support</div></div>
                  <div className="support-stat"><div className="support-stat-icon">◷</div><div className="support-stat-number">Quick</div><div className="support-stat-text">Response</div></div>
                  <div className="support-stat"><div className="support-stat-icon">♥</div><div className="support-stat-number">Dedicated</div><div className="support-stat-text">Guidance</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <div className="faq-header">
              <div><div className="faq-label">FAQ</div><h2 className="faq-title">Common Questions</h2></div>
              <div className="faq-right">Still have a question? Send us a message! →</div>
            </div>
            <div className="faq-grid">
              {faqs.map((faq, i) => <div className="faq-item" key={i}><button type="button" className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{faq[0]}</span><span className="faq-plus">{openFaq === i ? '−' : '+'}</span></button>{openFaq === i && <div className="faq-answer">{faq[1]}</div>}</div>)}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Contact;