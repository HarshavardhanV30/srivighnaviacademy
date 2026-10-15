import React from 'react';
import javaLogo from '../assets/Java-Logo.png';
import pythonLogo from '../assets/python logo.jpeg';
import javaFullStack from '../assets/full stack java.jpeg';
import pythonFullStack from '../assets/python full stack.jpeg';
import mernStack from '../assets/mernstack.jpeg';
import dataAnalytics from '../assets/data analytics.jpeg';
import devops from '../assets/devops.png';
import genaiLogo from '../assets/genai logo.png';
import javaSqlLogo from '../assets/java with sql combo.png';
import pythonSqlLogo from '../assets/python with sql logo.png';

export default function Home({ setActiveScreen }) {
  const go = (screenKey) => {
    if (typeof setActiveScreen === 'function') {
      setActiveScreen(screenKey);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const courses = [
    {
      title: 'Java Development',
      image: javaLogo,
      tag: 'Bestseller',
      description: 'Master Java programming, OOP concepts and enterprise development with practical projects.',
      skills: ['Core Java', 'OOP', 'Collections', 'Spring Boot', 'SQL'],
      rating: '4.9',
      learners: '2,850+',
      color: '#0284c7'
    },
    {
      title: 'Python Development',
      image: pythonLogo,
      tag: 'Popular',
      description: 'Build strong Python fundamentals and develop real-world applications with confidence.',
      skills: ['Python', 'OOP', 'Data Structures', 'Django', 'Projects'],
      rating: '4.9',
      learners: '3,200+',
      color: '#2563eb'
    },
    {
      title: 'Java Full Stack',
      image: javaFullStack,
      tag: 'Career Track',
      description: 'Become a complete full-stack developer with Java, Spring Boot, React and databases.',
      skills: ['Java', 'Spring Boot', 'HTML/CSS', 'React', 'MySQL'],
      rating: '4.8',
      learners: '2,100+',
      color: '#0052cc'
    },
    {
      title: 'Python Full Stack',
      image: pythonFullStack,
      tag: 'Trending',
      description: 'Learn modern full-stack development using Python, Django, React and databases.',
      skills: ['Python', 'Django', 'React', 'JavaScript', 'PostgreSQL'],
      rating: '4.9',
      learners: '2,400+',
      color: '#0284c7'
    },
    {
      title: 'MERN Stack Development',
      image: mernStack,
      tag: 'Full Stack',
      description: 'Build scalable web applications using MongoDB, Express, React and Node.js.',
      skills: ['MongoDB', 'Express', 'React', 'Node.js', 'Projects'],
      rating: '4.8',
      learners: '1,900+',
      color: '#10b981'
    },
    {
      title: 'Data Analyst',
      image: dataAnalytics,
      tag: 'In Demand',
      description: 'Turn business data into insights and make data-driven decisions using modern tools.',
      skills: ['Excel', 'SQL', 'Python', 'Power BI', 'Visualization'],
      rating: '4.8',
      learners: '1,750+',
      color: '#4f46e5'
    },
    {
      title: 'Generative AI',
      image: genaiLogo,
      tag: 'New',
      description: 'Explore modern Generative AI, LLMs, prompt engineering and intelligent AI applications.',
      skills: ['AI/ML', 'Prompt Engineering', 'LLMs', 'LangChain', 'AI Projects'],
      rating: '4.9',
      learners: '1,500+',
      color: '#0ea5e9'
    },
    {
      title: 'Cloud & DevOps',
      image: devops,
      tag: 'Future Skills',
      description: 'Learn cloud technologies, deployment, DevOps practices and production workflows.',
      skills: ['AWS', 'Linux', 'Docker', 'CI/CD', 'DevOps'],
      rating: '4.8',
      learners: '1,300+',
      color: '#1d4ed8'
    },
    {
      title: 'Java with SQL',
      image: javaSqlLogo,
      tag: 'Popular',
      description: 'Learn Java programming together with SQL database concepts and practical application development.',
      skills: ['Core Java', 'OOP', 'SQL', 'MySQL', 'Projects'],
      rating: '4.9',
      learners: '1,850+',
      color: '#6366f1'
    },
    {
      title: 'Python with SQL',
      image: pythonSqlLogo,
      tag: 'Career Track',
      description: 'Build strong Python programming and SQL database skills through practical real-world projects.',
      skills: ['Python', 'SQL', 'MySQL', 'Data Handling', 'Projects'],
      rating: '4.9',
      learners: '1,950+',
      color: '#0284c7'
    }
  ];

  const categories = [
    { icon: '💻', title: 'Web Development', sub: 'Full Stack' },
    { icon: '🐍', title: 'Python', sub: 'Programming' },
    { icon: '☕', title: 'Java', sub: 'Development' },
    { icon: '📊', title: 'Data Analytics', sub: 'Business Intelligence' },
    { icon: '🤖', title: 'Generative AI', sub: 'AI & Automation' },
    { icon: '☁️', title: 'Cloud Computing', sub: 'AWS & DevOps' },
    { icon: '⚛️', title: 'React Development', sub: 'Frontend' },
    { icon: '🗄️', title: 'Database', sub: 'SQL & NoSQL' }
  ];

  const features = [
    {
      icon: '🎓',
      title: 'Industry Expert Trainers',
      desc: 'Learn directly from experienced professionals with practical industry knowledge.'
    },
    {
      icon: '🎥',
      title: 'Live & Recorded Classes',
      desc: 'Attend interactive classes and access learning resources for flexible preparation.'
    },
    {
      icon: '🛠️',
      title: 'Hands-on Projects',
      desc: 'Work on practical projects that help you develop job-ready technical skills.'
    },
    {
      icon: '🏆',
      title: 'Career-Focused Learning',
      desc: 'Follow structured learning paths designed around real-world career requirements.'
    },
    {
      icon: '📜',
      title: 'Course Certification',
      desc: 'Complete your course and showcase your skills with a professional certificate.'
    },
    {
      icon: '💬',
      title: 'Mentor Support',
      desc: 'Get guidance, doubt clarification and learning support throughout your journey.'
    }
  ];

  const whyChooseUs = [
    {
      icon: '🎯',
      title: 'Job-Oriented Curriculum',
      desc: 'Learn technologies and practical skills aligned with current industry requirements.'
    },
    {
      icon: '👨‍💻',
      title: 'Practical Training',
      desc: 'Build applications and projects while learning instead of depending only on theory.'
    },
    {
      icon: '🧑‍🏫',
      title: 'Expert Mentorship',
      desc: 'Get continuous guidance from trainers who help you understand concepts clearly.'
    },
    {
      icon: '💼',
      title: 'Career Preparation',
      desc: 'Prepare for technical interviews, projects, resumes and real-world development.'
    },
    {
      icon: '🚀',
      title: 'Real-World Projects',
      desc: 'Develop portfolio-ready projects that demonstrate your technical capabilities.'
    },
    {
      icon: '🤝',
      title: 'Personalized Support',
      desc: 'Get help with doubts, assignments, projects and your overall learning journey.'
    }
  ];

  const testimonials = [
    {
      quote: 'The practical teaching approach helped me understand programming concepts much faster. The projects were extremely useful.',
      name: 'Rahul K.',
      role: 'Software Developer'
    },
    {
      quote: 'The Python and Data Analytics training gave me confidence to work with real-world datasets and build my portfolio.',
      name: 'Divya S.',
      role: 'Data Analyst'
    },
    {
      quote: 'The trainers explain every topic clearly and provide excellent project guidance. A great place to start a tech career.',
      name: 'Suresh M.',
      role: 'Full Stack Developer'
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/919390642779', '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes floatUp {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-10px)}
        }
        @keyframes electricPulse {
          0%,100%{box-shadow:0 0 15px rgba(0,140,255,0.25)}
          50%{box-shadow:0 0 30px rgba(0,210,255,0.45)}
        }
        @keyframes whatsappPulse {
          0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.5)}
          50%{box-shadow:0 0 0 14px rgba(37,211,102,0)}
        }
        .home-card:hover{
          transform:translateY(-8px)!important;
          border-color:#00a6ff!important;
          box-shadow:0 20px 45px rgba(0,0,0,.7), 0 0 25px rgba(0,166,255,.25)!important;
        }
        .home-button:hover{
          transform:translateY(-2px);
          filter:brightness(1.15);
          box-shadow:0 12px 28px rgba(0,102,255,.45);
        }
        .outline-button:hover{
          background:linear-gradient(135deg, #0052cc 0%, #0099ff 100%)!important;
          border-color:#38bdf8!important;
          color:#ffffff!important;
          box-shadow:0 0 20px rgba(0,153,255,.35)!important;
        }
        .category-card:hover{
          transform:translateY(-7px)!important;
          border-color:#00a6ff!important;
          background:#0e1526!important;
          box-shadow:0 15px 35px rgba(0,0,0,.6), 0 0 20px rgba(0,166,255,.22)!important;
        }
        .why-card:hover{
          transform:translateY(-8px)!important;
          box-shadow:0 20px 45px rgba(0,0,0,.7), 0 0 24px rgba(0,140,255,.25)!important;
          border-color:#00a6ff!important;
        }
        .whatsapp-button:hover{
          transform:scale(1.08);
          box-shadow:0 10px 30px rgba(37,211,102,.65)!important;
        }
        @media(max-width:1100px){
          .home-course-grid{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:900px){
          .home-hero{flex-direction:column!important}
          .home-hero-content{max-width:100%!important}
          .home-hero-visual{max-width:100%!important;width:100%!important}
          .home-category-grid{grid-template-columns:repeat(2,1fr)!important}
          .home-feature-grid{grid-template-columns:repeat(2,1fr)!important}
          .home-course-grid{grid-template-columns:repeat(2,1fr)!important}
          .home-demo-section{grid-template-columns:1fr!important}
          .home-testimonial-grid{grid-template-columns:1fr!important}
          .home-why-grid{grid-template-columns:repeat(2,1fr)!important}
        }
        @media(max-width:600px){
          .home-hero{padding:50px 5%!important}
          .home-hero-title{font-size:38px!important}
          .home-section-title{font-size:32px!important}
          .home-category-grid{grid-template-columns:1fr!important}
          .home-feature-grid{grid-template-columns:1fr!important}
          .home-course-grid{grid-template-columns:1fr!important}
          .home-why-grid{grid-template-columns:1fr!important}
          .home-demo-points{grid-template-columns:1fr!important}
          .home-hero-image-card{height:340px!important}
          .home-demo-image{height:340px!important}
          .home-mini-divider{display:none!important}
        }
      `}</style>

      {/* Hero Section */}
      <section style={styles.hero} className="home-hero">
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent} className="home-hero-content">
          <div style={styles.heroBadge}>⚡ UNLOCK INFINITY CAPABILITIES</div>
          <h1 style={styles.heroTitle} className="home-hero-title">
            Build Your Future
            <br />
            With <span style={styles.royalBlueText}>Vighnavi Academy</span>
          </h1>
          <p style={styles.heroLead}>
            Industry-focused technical education designed to transform
            learners into confident, job-ready professionals.
          </p>
          <p style={styles.heroDescription}>
            Learn Java, Python, Full Stack Development, MERN Stack,
            Data Analytics and Generative AI through practical learning,
            expert mentorship and real-world projects.
          </p>
          <div style={styles.heroButtons}>
            <button className="home-button" style={styles.primaryButton} onClick={() => go('courses')}>
              Explore Courses <span>→</span>
            </button>
            <button className="home-button" style={styles.secondaryButton} onClick={() => go('contact')}>
              Book a Demo <span>↗</span>
            </button>
          </div>
          <div style={styles.heroMiniStats}>
            <div>
              <strong style={styles.statNumber}>5,000+</strong>
              <span style={styles.statLabel}>Learners</span>
            </div>
            <div style={styles.miniDivider} className="home-mini-divider"></div>
            <div>
              <strong style={styles.statNumber}>50+</strong>
              <span style={styles.statLabel}>Expert Mentors</span>
            </div>
            <div style={styles.miniDivider} className="home-mini-divider"></div>
            <div>
              <strong style={styles.statNumber}>8+</strong>
              <span style={styles.statLabel}>Career Courses</span>
            </div>
            <div style={styles.miniDivider} className="home-mini-divider"></div>
            <div>
              <strong style={styles.statNumber}>95%</strong>
              <span style={styles.statLabel}>Career Support</span>
            </div>
          </div>
        </div>

        <div style={styles.heroVisual} className="home-hero-visual">
          <div style={styles.heroImageCard} className="home-hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90"
              alt="Students learning together"
              style={styles.heroImage}
            />
            <div style={styles.imageGradient}></div>
            <div style={styles.heroImageText}>
              <span style={{ fontSize: '12px', letterSpacing: '2.5px', color: '#00d2ff', fontWeight: '800' }}>VIGHNAVI ACADEMY</span>
              <strong style={{ fontSize: '20px', color: '#ffffff' }}>Unlock Infinity Capabilities</strong>
              <small style={{ color: '#cbd5e1' }}>Your Future Starts Here</small>
            </div>
          </div>
          <div style={{ ...styles.floatingCard, top: '8%', left: '-5%' }}>
            💻 <strong>Practical Learning</strong>
          </div>
          <div style={{ ...styles.floatingCard, bottom: '13%', right: '-3%' }}>
            🚀 <strong>Career Ready</strong>
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section style={styles.trustBar}>
        <div><span style={{ color: '#00d2ff', marginRight: '6px' }}>✓</span> Live Interactive Classes</div>
        <div><span style={{ color: '#00d2ff', marginRight: '6px' }}>✓</span> Industry Experts</div>
        <div><span style={{ color: '#00d2ff', marginRight: '6px' }}>✓</span> Real-World Projects</div>
        <div><span style={{ color: '#00d2ff', marginRight: '6px' }}>✓</span> Certification</div>
        <div><span style={{ color: '#00d2ff', marginRight: '6px' }}>✓</span> Career Guidance</div>
      </section>

      {/* Top Categories */}
      <section style={styles.section}>
        <div style={styles.sectionHeading}>
          <small style={styles.eyebrow}>EXPLORE LEARNING</small>
          <h2 style={styles.sectionTitle} className="home-section-title">
            Explore Top <span style={styles.cyanGradientText}>Categories</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Choose the right technology path and start building your future.
          </p>
        </div>

        <div style={styles.categoryGrid} className="home-category-grid">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="category-card"
              style={styles.categoryCard}
              onClick={() => go('courses')}
            >
              <div style={styles.categoryIcon}>{cat.icon}</div>
              <h3 style={styles.categoryTitle}>{cat.title}</h3>
              <p style={styles.categorySub}>{cat.sub}</p>
              <span style={styles.categoryArrow}>Explore →</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={styles.whySection}>
        <div style={styles.sectionHeading}>
          <small style={styles.eyebrow}>WHY VIGHNAVI ACADEMY</small>
          <h2 style={styles.sectionTitle} className="home-section-title">
            Learn Skills That <span style={styles.goldText}>Matter</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            A practical learning experience focused on confidence, skills and career growth.
          </p>
        </div>

        <div style={styles.featureGrid} className="home-feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="home-card" style={styles.featureCard}>
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={styles.whyChooseSection}>
        <div style={styles.sectionHeading}>
          <small style={styles.eyebrow}>WHY CHOOSE US</small>
          <h2 style={styles.sectionTitle} className="home-section-title">
            Why Choose <span style={styles.cyanGradientText}>Vighnavi Academy?</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            More than just courses — we focus on practical skills, mentorship
            and career-ready learning.
          </p>
        </div>

        <div style={styles.whyChooseIntro}>
          <div style={styles.whyChooseIntroIcon}>⭐</div>
          <div>
            <h3 style={styles.whyChooseIntroTitle}>
              Your Learning. Your Skills. Your Career.
            </h3>
            <p style={styles.whyChooseIntroText}>
              We provide a structured learning environment where students can
              learn technologies, practice concepts, build projects and prepare
              themselves for real-world opportunities.
            </p>
          </div>
        </div>

        <div style={styles.whyChooseGrid} className="home-why-grid">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="why-card" style={styles.whyChooseCard}>
              <div style={styles.whyChooseIcon}>{item.icon}</div>
              <div style={styles.whyChooseContent}>
                <h3 style={styles.whyChooseTitle}>{item.title}</h3>
                <p style={styles.whyChooseDescription}>{item.desc}</p>
              </div>
              <div style={styles.whyChooseNumber}>0{index + 1}</div>
            </div>
          ))}
        </div>

        <div style={styles.whyChooseBottom}>
          <div style={styles.whyChooseBottomItem}>
            <strong>100%</strong>
            <span>Practical Approach</span>
          </div>
          <div style={styles.whyChooseBottomItem}>
            <strong>24/7</strong>
            <span>Learning Resources</span>
          </div>
          <div style={styles.whyChooseBottomItem}>
            <strong>100+</strong>
            <span>Practice Opportunities</span>
          </div>
          <div style={{ ...styles.whyChooseBottomItem, borderRight: 'none' }}>
            <strong>1:1</strong>
            <span>Mentor Guidance</span>
          </div>
        </div>
      </section>

      {/* Programs / Courses */}
      <section style={styles.courseSection}>
        <div style={styles.courseHeader}>
          <div>
            <small style={styles.eyebrow}>OUR PROGRAMS</small>
            <h2 style={styles.sectionTitle} className="home-section-title">
              Build Skills. <span style={styles.cyanGradientText}>Build Your Career.</span>
            </h2>
            <p style={styles.sectionSubtitle}>
              Explore our industry-focused technical courses.
            </p>
          </div>

          <button
            className="outline-button"
            style={styles.outlineButton}
            onClick={() => go('courses')}
          >
            View All Courses →
          </button>
        </div>

        <div style={styles.courseGrid} className="home-course-grid">
          {courses.map((course, index) => (
            <div key={index} className="home-card" style={styles.courseCard}>
              <div style={styles.courseImageWrapper}>
                <img
                  src={course.image}
                  alt={course.title}
                  style={styles.courseImage}
                />

                <div style={styles.courseImageOverlay}></div>

                <span
                  style={{
                    ...styles.courseTag,
                    background: course.color
                  }}
                >
                  {course.tag}
                </span>

                <div style={styles.courseImageLabel}>
                  <span>VIGHNAVI</span>
                  <strong>ACADEMY</strong>
                </div>
              </div>

              <div style={styles.courseBody}>
                <div style={styles.courseRating}>
                  ⭐ {course.rating} <span>({course.learners} learners)</span>
                </div>

                <h3 style={styles.courseTitle}>{course.title}</h3>

                <p style={styles.courseDescription}>{course.description}</p>

                <div style={styles.skillsBox}>
                  {course.skills.map((skill, skillIndex) => (
                    <span key={skillIndex}>✓ {skill}</span>
                  ))}
                </div>

                <div style={styles.courseFooter}>
                  <span style={styles.learningText}>🎓 Career-focused</span>

                  <button
                    className="home-button"
                    style={styles.courseButton}
                    onClick={() => go('courses')}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section style={styles.demoSection} className="home-demo-section">
        <div style={styles.demoImageBox} className="home-demo-image">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1100&q=90"
            alt="Students in a learning session"
            style={styles.demoImage}
          />
          <div style={styles.demoImageOverlay}></div>
          <div style={styles.demoQuote}>
            <span style={styles.quoteIcon}>“</span>
            <strong>
              Learn Today.
              <br />
              Lead Tomorrow.
            </strong>
          </div>
        </div>

        <div style={styles.demoContent}>
          <small style={styles.eyebrow}>START YOUR JOURNEY</small>

          <h2 style={styles.demoTitle}>
            Experience Our <span style={styles.cyanGradientText}>Learning Style</span>
          </h2>

          <p style={styles.demoDescription}>
            Join a demo class and understand our teaching approach before
            choosing your learning path. Meet the trainer, explore the
            curriculum and ask your questions.
          </p>

          <div style={styles.demoPoints} className="home-demo-points">
            <div><span style={{ color: '#00d2ff', marginRight: '6px' }}>✓</span><strong>Meet the Trainer</strong></div>
            <div><span style={{ color: '#00d2ff', marginRight: '6px' }}>✓</span><strong>Understand Course Structure</strong></div>
            <div><span style={{ color: '#00d2ff', marginRight: '6px' }}>✓</span><strong>Experience Practical Teaching</strong></div>
            <div><span style={{ color: '#00d2ff', marginRight: '6px' }}>✓</span><strong>Ask Your Questions</strong></div>
          </div>

          <div style={styles.demoNote}>
            <strong style={{ color: '#f8fafc' }}>Demo Class Confirmation</strong>
            <p style={{ margin: '6px 0 0', color: '#94a3b8' }}>
              Demo class confirmation fees, if applicable, will be discussed
              separately during the demo/class confirmation process.
            </p>
          </div>

          <button
            className="home-button"
            style={styles.primaryButtonDark}
            onClick={() => go('contact')}
          >
            Schedule Demo Class →
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.testimonialSection}>
        <div style={styles.sectionHeading}>
          <small style={styles.eyebrow}>LEARNER STORIES</small>

          <h2 style={styles.sectionTitle} className="home-section-title">
            What Our <span style={styles.cyanGradientText}>Learners Say</span>
          </h2>

          <p style={styles.sectionSubtitle}>
            Real learning experiences from our growing community.
          </p>
        </div>

        <div style={styles.testimonialGrid} className="home-testimonial-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="home-card" style={styles.testimonialCard}>
              <div style={styles.quoteIcon}>“</div>

              <div style={styles.testimonialStars}>★★★★★</div>

              <p style={styles.testimonialQuote}>{item.quote}</p>

              <div style={styles.userRow}>
                <div style={styles.avatar}>{item.name.charAt(0)}</div>

                <div>
                  <strong style={styles.userName}>{item.name}</strong>
                  <span style={styles.userRole}>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="outline-button"
          style={styles.testimonialButton}
          onClick={() => go('contact')}
        >
          Read More Success Stories →
        </button>
      </section>

      {/* Final Call to Action */}
      <section style={styles.finalBanner}>
        <div style={styles.finalBannerGlow}></div>

        <div style={styles.finalContent}>
          <small style={styles.finalEyebrow}>YOUR FUTURE STARTS HERE</small>

          <h2 style={styles.finalTitle}>
            Ready to Learn, Build & <span style={{ color: '#00d2ff' }}>Grow?</span>
          </h2>

          <p style={styles.finalDescription}>
            Take the first step toward a stronger technical career with
            Vighnavi Academy.
          </p>

          <div style={styles.finalButtons}>
            <button
              className="home-button"
              style={styles.finalPrimary}
              onClick={() => go('courses')}
            >
              Explore Courses →
            </button>

            <button
              className="home-button"
              style={styles.finalSecondary}
              onClick={() => go('contact')}
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Action Button with SVG */}
      <button
        className="whatsapp-button"
        style={styles.whatsappButton}
        onClick={openWhatsApp}
        aria-label="Connect with Vighnavi Academy on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg
          style={styles.whatsappSvg}
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </button>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Inter','Segoe UI',Arial,sans-serif",
    background: '#06080d',
    color: '#e2e8f0',
    overflowX: 'hidden'
  },
  hero: {
    minHeight: '650px',
    background: 'radial-gradient(ellipse at 80% 25%, rgba(0, 102, 255, 0.22) 0%, rgba(6, 8, 13, 0.95) 70%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '70px 6%',
    gap: '60px',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(0, 166, 255, 0.15)'
  },
  heroOverlay: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
    right: '-100px',
    top: '-120px'
  },
  heroContent: { flex: 1, maxWidth: '620px', position: 'relative', zIndex: 2 },
  heroBadge: {
    display: 'inline-block',
    padding: '9px 18px',
    borderRadius: '30px',
    background: 'rgba(0, 40, 95, 0.45)',
    border: '1px solid rgba(0, 210, 255, 0.45)',
    color: '#38bdf8',
    fontSize: '12px',
    fontWeight: '800',
    letterSpacing: '1.4px',
    marginBottom: '22px',
    boxShadow: '0 4px 20px rgba(0, 102, 255, 0.25)'
  },
  heroTitle: {
    fontFamily: "Georgia,'Times New Roman',serif",
    fontSize: '56px',
    lineHeight: '1.08',
    margin: '0 0 22px',
    color: '#f8fafc',
    fontWeight: '700'
  },
  royalBlueText: {
    background: 'linear-gradient(90deg, #00d2ff 0%, #3b82f6 50%, #93c5fd 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  },
  cyanGradientText: {
    background: 'linear-gradient(90deg, #38bdf8 0%, #60a5fa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  },
  goldText: { color: '#facc15' },
  heroLead: { fontSize: '20px', lineHeight: '1.5', fontWeight: '600', color: '#cbd5e1', margin: '0 0 12px' },
  heroDescription: { fontSize: '15px', lineHeight: '1.7', color: '#94a3b8', maxWidth: '590px', margin: '0 0 30px' },
  heroButtons: { display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '35px' },
  primaryButton: {
    border: 'none',
    background: 'linear-gradient(135deg, #0052cc 0%, #0088ff 100%)',
    color: '#ffffff',
    padding: '15px 30px',
    borderRadius: '30px',
    fontSize: '15px',
    fontWeight: '800',
    cursor: 'pointer',
    transition: 'all .3s ease',
    boxShadow: '0 4px 20px rgba(0, 102, 255, 0.45)',
    border: '1px solid rgba(255,255,255,0.2)'
  },
  secondaryButton: {
    border: '1px solid rgba(0, 210, 255, 0.6)',
    background: 'rgba(0, 30, 70, 0.4)',
    color: '#38bdf8',
    padding: '14px 28px',
    borderRadius: '30px',
    fontSize: '15px',
    fontWeight: '800',
    cursor: 'pointer',
    transition: 'all .3s ease',
    boxShadow: '0 0 15px rgba(0, 166, 255, 0.15)'
  },
  heroMiniStats: { display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' },
  statNumber: { display: 'block', color: '#38bdf8', fontSize: '20px', fontWeight: '900' },
  statLabel: { display: 'block', color: '#94a3b8', fontSize: '12px', marginTop: '3px' },
  miniDivider: { width: '1px', height: '40px', background: 'rgba(0, 166, 255, 0.2)' },
  heroVisual: { flex: 1, maxWidth: '600px', minWidth: '320px', position: 'relative' },
  heroImageCard: {
    height: '470px',
    borderRadius: '30px',
    overflow: 'hidden',
    position: 'relative',
    border: '1px solid rgba(0, 166, 255, 0.35)',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(0, 102, 255, 0.25)'
  },
  heroImage: { width: '100%', height: '100%', objectFit: 'cover' },
  imageGradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(0deg, #06080d 0%, rgba(6, 8, 13, 0.5) 50%, transparent 100%)'
  },
  heroImageText: { position: 'absolute', bottom: '30px', left: '30px', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '4px' },
  floatingCard: {
    position: 'absolute',
    zIndex: 3,
    padding: '14px 20px',
    background: 'rgba(10, 18, 36, 0.92)',
    backdropFilter: 'blur(8px)',
    color: '#e2e8f0',
    border: '1px solid rgba(0, 210, 255, 0.4)',
    borderRadius: '16px',
    fontSize: '14px',
    boxShadow: '0 15px 35px rgba(0,0,0,.7), 0 0 15px rgba(0,102,255,.25)',
    animation: 'floatUp 3s ease-in-out infinite'
  },
  trustBar: {
    padding: '22px 6%',
    background: '#09101f',
    borderBottom: '1px solid rgba(0, 166, 255, 0.15)',
    color: '#cbd5e1',
    display: 'flex',
    justifyContent: 'space-around',
    gap: '20px',
    flexWrap: 'wrap',
    fontSize: '14px',
    fontWeight: '700'
  },
  section: { padding: '80px 6%', background: '#06080d' },
  sectionHeading: { textAlign: 'center', maxWidth: '850px', margin: '0 auto 45px' },
  eyebrow: {
    display: 'block',
    color: '#38bdf8',
    letterSpacing: '3px',
    fontSize: '11px',
    fontWeight: '900',
    marginBottom: '10px'
  },
  sectionTitle: {
    fontFamily: "Georgia,'Times New Roman',serif",
    fontSize: '42px',
    color: '#f8fafc',
    margin: '0 0 10px',
    lineHeight: '1.15'
  },
  sectionSubtitle: { color: '#94a3b8', fontSize: '15px', lineHeight: '1.6', margin: 0 },
  categoryGrid: { display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: '18px' },
  categoryCard: {
    padding: '28px 20px',
    borderRadius: '18px',
    background: '#090e18',
    border: '1px solid rgba(0, 166, 255, 0.15)',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all .3s ease'
  },
  categoryIcon: {
    width: '65px',
    height: '65px',
    borderRadius: '16px',
    background: '#101a2d',
    border: '1px solid rgba(0, 210, 255, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px',
    margin: '0 auto 16px',
    boxShadow: '0 4px 15px rgba(0, 102, 255, 0.15)'
  },
  categoryTitle: { fontSize: '17px', margin: '0 0 6px', color: '#f1f5f9' },
  categorySub: { margin: '0 0 13px', color: '#64748b', fontSize: '13px' },
  categoryArrow: { fontSize: '13px', color: '#38bdf8', fontWeight: '800' },
  whySection: {
    padding: '80px 6%',
    background: '#090d16',
    borderTop: '1px solid rgba(0, 166, 255, 0.1)',
    borderBottom: '1px solid rgba(0, 166, 255, 0.1)'
  },
  featureGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '20px' },
  featureCard: {
    padding: '30px',
    background: '#0c1322',
    border: '1px solid rgba(0, 166, 255, 0.15)',
    borderRadius: '18px',
    textAlign: 'center',
    transition: 'all .3s ease'
  },
  featureIcon: {
    width: '65px',
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 18px',
    background: '#131e36',
    border: '1px solid rgba(0, 210, 255, 0.35)',
    borderRadius: '16px',
    fontSize: '28px',
    boxShadow: '0 4px 20px rgba(0, 102, 255, 0.2)'
  },
  featureTitle: { fontSize: '18px', color: '#f1f5f9', margin: '0 0 10px' },
  featureDescription: { color: '#94a3b8', fontSize: '14px', lineHeight: '1.65', margin: 0 },
  whyChooseSection: {
    padding: '85px 6%',
    background: '#06080d',
    position: 'relative',
    overflow: 'hidden'
  },
  whyChooseIntro: {
    maxWidth: '1000px',
    margin: '0 auto 35px',
    padding: '25px 30px',
    borderRadius: '20px',
    background: '#0c1322',
    border: '1px solid rgba(0, 166, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '22px',
    boxShadow: '0 8px 30px rgba(0,0,0,.6)'
  },
  whyChooseIntroIcon: {
    minWidth: '60px',
    height: '60px',
    borderRadius: '16px',
    background: '#14203a',
    border: '1px solid rgba(250, 204, 21, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px'
  },
  whyChooseIntroTitle: { color: '#f8fafc', fontFamily: "Georgia,'Times New Roman',serif", fontSize: '22px', margin: '0 0 7px' },
  whyChooseIntroText: { color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', margin: 0 },
  whyChooseGrid: { maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '20px' },
  whyChooseCard: {
    position: 'relative',
    background: '#0a101d',
    border: '1px solid rgba(0, 166, 255, 0.15)',
    borderRadius: '20px',
    padding: '27px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '17px',
    minHeight: '175px',
    transition: 'all .3s ease',
    overflow: 'hidden'
  },
  whyChooseIcon: {
    minWidth: '55px',
    width: '55px',
    height: '55px',
    borderRadius: '15px',
    background: '#131e36',
    border: '1px solid rgba(0, 210, 255, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '26px'
  },
  whyChooseContent: { position: 'relative', zIndex: 2 },
  whyChooseTitle: { margin: '2px 0 8px', color: '#f1f5f9', fontSize: '17px', fontWeight: '800' },
  whyChooseDescription: { margin: 0, color: '#94a3b8', fontSize: '13px', lineHeight: '1.65' },
  whyChooseNumber: {
    position: 'absolute',
    right: '15px',
    bottom: '-14px',
    fontSize: '62px',
    fontWeight: '900',
    color: 'rgba(0, 166, 255, 0.08)',
    lineHeight: 1
  },
  whyChooseBottom: {
    maxWidth: '1000px',
    margin: '38px auto 0',
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: '15px',
    padding: '24px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #091224 0%, #060910 100%)',
    border: '1px solid rgba(0, 166, 255, 0.35)',
    boxShadow: '0 20px 40px rgba(0,0,0,.7), 0 0 25px rgba(0, 102, 255, 0.15)'
  },
  whyChooseBottomItem: {
    textAlign: 'center',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    borderRight: '1px solid rgba(0, 166, 255, 0.2)'
  },
  courseSection: {
    padding: '80px 6%',
    background: '#090d16',
    borderTop: '1px solid rgba(0, 166, 255, 0.12)'
  },
  courseHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '25px', marginBottom: '40px', flexWrap: 'wrap' },
  outlineButton: {
    border: '1px solid #00a6ff',
    color: '#38bdf8',
    background: 'rgba(0, 30, 70, 0.3)',
    borderRadius: '28px',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '800',
    cursor: 'pointer',
    transition: 'all .3s ease'
  },
  courseGrid: { display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: '22px' },
  courseCard: {
    background: '#0a101d',
    border: '1px solid rgba(0, 166, 255, 0.15)',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'all .3s ease',
    boxShadow: '0 8px 25px rgba(0,0,0,.5)'
  },
  courseImageWrapper: { height: '190px', position: 'relative', overflow: 'hidden' },
  courseImage: { width: '100%', height: '100%', objectFit: 'cover' },
  courseImageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(0deg, #0a101d 0%, rgba(10, 16, 29, 0.55) 60%, transparent 100%)'
  },
  courseTag: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    color: '#ffffff',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: '800',
    boxShadow: '0 2px 10px rgba(0,0,0,0.5)'
  },
  courseImageLabel: {
    position: 'absolute',
    bottom: '12px',
    left: '16px',
    color: '#94a3b8',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '10px',
    letterSpacing: '2px'
  },
  courseBody: { padding: '20px' },
  courseRating: { color: '#facc15', fontSize: '13px', fontWeight: '800', marginBottom: '9px' },
  courseTitle: { color: '#f1f5f9', fontFamily: "Georgia,'Times New Roman',serif", fontSize: '20px', margin: '0 0 9px', lineHeight: '1.25' },
  courseDescription: { color: '#94a3b8', fontSize: '13px', lineHeight: '1.55', minHeight: '62px', margin: '0 0 15px' },
  skillsBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    padding: '13px',
    borderRadius: '12px',
    background: '#0f172a',
    border: '1px solid rgba(0, 166, 255, 0.12)',
    color: '#cbd5e1',
    fontSize: '12px',
    marginBottom: '17px'
  },
  courseFooter: { borderTop: '1px solid rgba(0, 166, 255, 0.12)', paddingTop: '15px', display: 'flex', flexDirection: 'column', gap: '12px' },
  learningText: { fontSize: '12px', color: '#94a3b8', fontWeight: '700' },
  courseButton: {
    width: '100%',
    border: 'none',
    background: 'linear-gradient(135deg, #0052cc 0%, #0088ff 100%)',
    color: '#ffffff',
    padding: '12px 15px',
    borderRadius: '25px',
    fontWeight: '800',
    cursor: 'pointer',
    transition: 'all .3s ease',
    boxShadow: '0 4px 15px rgba(0, 102, 255, 0.35)'
  },
  demoSection: {
    padding: '80px 6%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
    background: '#06080d'
  },
  demoImageBox: {
    height: '500px',
    borderRadius: '26px',
    overflow: 'hidden',
    position: 'relative',
    border: '1px solid rgba(0, 166, 255, 0.3)',
    boxShadow: '0 25px 55px rgba(0,0,0,.8), 0 0 30px rgba(0,102,255,.2)'
  },
  demoImage: { width: '100%', height: '100%', objectFit: 'cover' },
  demoImageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(0deg, #06080d 0%, rgba(6, 8, 13, 0.6) 60%, transparent 100%)'
  },
  demoQuote: { position: 'absolute', bottom: '30px', left: '30px', color: '#ffffff', display: 'flex', flexDirection: 'column' },
  quoteIcon: { fontFamily: 'Georgia', fontSize: '50px', color: '#38bdf8', lineHeight: '.7' },
  demoContent: { maxWidth: '600px' },
  demoTitle: { fontFamily: "Georgia,'Times New Roman',serif", color: '#f8fafc', fontSize: '42px', lineHeight: '1.15', margin: '0 0 18px' },
  demoDescription: { color: '#94a3b8', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' },
  demoPoints: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '20px',
    color: '#cbd5e1'
  },
  demoNote: {
    background: '#0c1322',
    borderLeft: '4px solid #00a6ff',
    borderTop: '1px solid rgba(0, 166, 255, 0.15)',
    borderRight: '1px solid rgba(0, 166, 255, 0.15)',
    borderBottom: '1px solid rgba(0, 166, 255, 0.15)',
    padding: '15px 18px',
    borderRadius: '8px',
    marginBottom: '24px',
    color: '#e2e8f0'
  },
  primaryButtonDark: {
    border: 'none',
    background: 'linear-gradient(135deg, #0052cc 0%, #0088ff 100%)',
    color: '#ffffff',
    padding: '15px 28px',
    borderRadius: '28px',
    fontSize: '15px',
    fontWeight: '800',
    cursor: 'pointer',
    transition: 'all .3s ease',
    boxShadow: '0 4px 20px rgba(0, 102, 255, 0.4)'
  },
  testimonialSection: {
    padding: '80px 6%',
    background: '#090d16',
    textAlign: 'center',
    borderTop: '1px solid rgba(0, 166, 255, 0.12)',
    borderBottom: '1px solid rgba(0, 166, 255, 0.12)'
  },
  testimonialGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '22px', textAlign: 'left' },
  testimonialCard: {
    background: '#0c1322',
    borderRadius: '20px',
    padding: '28px',
    border: '1px solid rgba(0, 166, 255, 0.15)',
    transition: 'all .3s ease'
  },
  testimonialStars: { color: '#facc15', letterSpacing: '3px', marginBottom: '15px' },
  testimonialQuote: { color: '#94a3b8', lineHeight: '1.7', fontSize: '14px', minHeight: '90px' },
  userRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderTop: '1px solid rgba(0, 166, 255, 0.12)',
    paddingTop: '17px'
  },
  avatar: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #0052cc 0%, #00a6ff 100%)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '17px',
    fontWeight: '800',
    border: '1px solid rgba(255,255,255,0.2)'
  },
  userName: { display: 'block', color: '#f1f5f9' },
  userRole: { display: 'block', color: '#64748b', fontSize: '12px', marginTop: '3px' },
  testimonialButton: {
    marginTop: '35px',
    padding: '12px 26px',
    borderRadius: '25px',
    background: 'transparent',
    color: '#38bdf8',
    border: '1px solid #00a6ff',
    fontWeight: '800',
    cursor: 'pointer'
  },
  finalBanner: {
    position: 'relative',
    overflow: 'hidden',
    padding: '85px 6%',
    background: 'radial-gradient(ellipse at center, #0a1733 0%, #06080d 85%)',
    color: '#ffffff',
    textAlign: 'center',
    borderTop: '1px solid rgba(0, 166, 255, 0.3)'
  },
  finalBannerGlow: {
    position: 'absolute',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0, 140, 255, 0.2) 0%, transparent 70%)',
    top: '-200px',
    right: '-80px'
  },
  finalContent: { position: 'relative', zIndex: 2, maxWidth: '850px', margin: '0 auto' },
  finalEyebrow: { color: '#38bdf8', letterSpacing: '3px', fontSize: '12px', fontWeight: '900' },
  finalTitle: { fontFamily: "Georgia,'Times New Roman',serif", fontSize: '46px', margin: '14px 0', lineHeight: '1.2' },
  finalDescription: { fontSize: '16px', color: '#94a3b8', marginBottom: '28px' },
  finalButtons: { display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' },
  finalPrimary: {
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'linear-gradient(135deg, #0052cc 0%, #0099ff 100%)',
    color: '#ffffff',
    padding: '15px 30px',
    borderRadius: '28px',
    fontSize: '15px',
    fontWeight: '900',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(0, 102, 255, 0.5)'
  },
  finalSecondary: {
    border: '1px solid rgba(0, 210, 255, 0.5)',
    background: 'rgba(0, 25, 60, 0.4)',
    color: '#38bdf8',
    padding: '14px 28px',
    borderRadius: '28px',
    fontSize: '15px',
    fontWeight: '800',
    cursor: 'pointer'
  },
  whatsappButton: {
    position: 'fixed',
    right: '25px',
    bottom: '25px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: 'none',
    background: '#25D366',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 9999,
    boxShadow: '0 8px 25px rgba(37,211,102,.4)',
    animation: 'whatsappPulse 2s infinite',
    transition: 'all .3s ease'
  },
  whatsappSvg: {
    display: 'block'
  }
};