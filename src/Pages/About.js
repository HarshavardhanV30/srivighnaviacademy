import React from 'react';

const styles = {
  page: { 
    fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
    color: "#fff", 
    background: "#000", 
    overflow: "hidden" 
  },
  hero: { 
    minHeight: "550px", 
    backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.2) 100%), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=90')", 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    display: "flex", 
    alignItems: "center", 
    padding: "80px 6%", 
    boxSizing: "border-box" 
  },
  heroContent: { maxWidth: "600px", color: "#fff" },
  eyebrow: { 
    fontSize: "14px", 
    letterSpacing: "4px", 
    fontWeight: "800", 
    marginBottom: "15px",
    color: "#00d2ff",
    textTransform: "uppercase"
  },
  heroTitle: { 
    fontFamily: "Georgia, serif", 
    fontSize: "54px", 
    lineHeight: "1.1", 
    margin: "0 0 22px", 
    fontWeight: "800" 
  },
  gold: { color: "#f5c65b" },
  heroText: { 
    fontSize: "18px", 
    lineHeight: "1.6", 
    margin: "0 0 32px", 
    maxWidth: "560px",
    color: "#cccccc"
  },
  button: { 
    display: "inline-flex", 
    alignItems: "center", 
    gap: "18px", 
    padding: "16px 28px", 
    borderRadius: "30px", 
    background: "#08083B", 
    color: "#fff", 
    fontWeight: "700", 
    border: "2px solid #08083B", 
    fontSize: "16px", 
    cursor: "pointer",
    transition: "all 0.4s ease"
  },
  arrow: { fontSize: "22px", lineHeight: "0" },
  stats: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", 
    padding: "40px 6%", 
    background: "#050505", 
    boxSizing: "border-box",
    borderTop: "1px solid #1a1a1a",
    borderBottom: "1px solid #1a1a1a"
  },
  stat: { 
    textAlign: "center", 
    padding: "20px", 
    borderRight: "1px solid #1a1a1a",
    transition: "transform 0.3s ease"
  },
  statIcon: { fontSize: "38px", display: "block", marginBottom: "12px" },
  statNumber: { fontSize: "28px", fontWeight: "800", margin: "0", color: "#fff" },
  statLabel: { fontSize: "15px", color: "#999", marginTop: "8px", fontWeight: "500" },
  story: { 
    display: "grid", 
    gridTemplateColumns: "1fr 1fr", 
    gap: "60px", 
    alignItems: "center", 
    padding: "80px 6%", 
    background: "#000" 
  },
  imageWrap: { position: "relative" },
  storyImage: { 
    width: "100%", 
    height: "500px", 
    objectFit: "cover", 
    borderRadius: "16px", 
    display: "block",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
  },
  quote: { 
    position: "absolute", 
    bottom: "-25px", 
    left: "20px", 
    maxWidth: "290px", 
    background: "#08083B", 
    color: "#fff", 
    padding: "25px", 
    borderRadius: "12px", 
    fontFamily: "Georgia, serif", 
    fontSize: "19px", 
    lineHeight: "1.5", 
    boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
    transition: "transform 0.4s ease"
  },
  storyContent: { padding: "10px" },
  sectionTitle: { 
    fontFamily: "Georgia, serif", 
    fontSize: "42px", 
    lineHeight: "1.15", 
    margin: "10px 0 24px", 
    color: "#fff" 
  },
  storyText: { 
    fontSize: "16px", 
    lineHeight: "1.7", 
    color: "#b3b3b3", 
    marginBottom: "18px" 
  },
  features: { 
    margin: "0 6% 60px", 
    padding: "0", 
    background: "transparent", 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
    gap: "25px", 
    boxSizing: "border-box" 
  },
  feature: { 
    padding: "35px 25px", 
    background: "#0a0a0a",
    borderRadius: "16px",
    border: "1px solid #1a1a1a",
    transition: "all 0.4s ease"
  },
  featureIcon: { fontSize: "40px", display: "block", marginBottom: "16px" },
  featureTitle: { fontFamily: "Georgia, serif", fontSize: "24px", margin: "0 0 12px", color: "#fff" },
  featureText: { fontSize: "15px", lineHeight: "1.6", color: "#999", margin: 0 },
  cta: { 
    minHeight: "400px", 
    backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.95), rgba(8,8,59,0.7)), url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=90')", 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    display: "flex", 
    alignItems: "center", 
    padding: "60px 6%", 
    boxSizing: "border-box", 
    color: "#fff",
    marginTop: "20px"
  },
  ctaContent: { maxWidth: "600px" },
  ctaTitle: { fontFamily: "Georgia, serif", fontSize: "44px", lineHeight: "1.1", margin: "0 0 20px" },
  ctaText: { fontSize: "18px", lineHeight: "1.6", margin: "0 0 32px", color: "#cccccc" },
};

export default function About() {
  return (
    <div style={styles.page}>
      {/* Injecting CSS for 2-color cursor hover effects and transform animations */}
      <style>{`
        /* 2-Color cursor hover effect for buttons */
        .interactive-btn:hover {
          transform: scale(1.08) translateY(-3px);
          background: #000;
          border-color: #00d2ff;
          box-shadow: 0 0 20px rgba(0, 210, 255, 0.6), inset 0 0 10px rgba(8, 8, 59, 0.8);
        }

        /* Quote box hover */
        .quote-box:hover {
          transform: translateY(-5px);
        }

        /* Feature Cards Hover */
        .hover-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0, 210, 255, 0.1);
          border-color: #08083B;
          background: #0d0d0d;
        }

        /* Stats Hover */
        .hover-stat:hover {
          transform: scale(1.1);
        }
      `}</style>

      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.eyebrow}>ABOUT US</div>
          <h1 style={styles.heroTitle}>Building<br />Brighter Futures<br /><span style={styles.gold}>Together</span></h1>
          <p style={styles.heroText}>At Vighnavi Academy, we believe education is more than learning — it’s a journey towards confidence, opportunities and a better tomorrow.</p>
          <button style={styles.button} className="interactive-btn">Our Story <span style={styles.arrow}>→</span></button>
        </div>
      </section>

      <section style={styles.stats}>
        <div style={styles.stat} className="hover-stat">
          <span style={styles.statIcon}>🎓</span>
          <p style={styles.statNumber}>5,000+</p>
          <div style={styles.statLabel}>Happy Learners</div>
        </div>
        <div style={styles.stat} className="hover-stat">
          <span style={styles.statIcon}>👥</span>
          <p style={styles.statNumber}>50+</p>
          <div style={styles.statLabel}>Expert Mentors</div>
        </div>
        <div style={styles.stat} className="hover-stat">
          <span style={styles.statIcon}>📖</span>
          <p style={styles.statNumber}>100+</p>
          <div style={styles.statLabel}>Courses</div>
        </div>
        <div style={{ ...styles.stat, borderRight: "none" }} className="hover-stat">
          <span style={styles.statIcon}>🏆</span>
          <p style={styles.statNumber}>95%</p>
          <div style={styles.statLabel}>Success Rate</div>
        </div>
      </section>

      <section style={styles.story}>
        <div style={styles.imageWrap}>
          <img style={styles.storyImage} src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=90" alt="Vighnavi Academy" />
          <div style={styles.quote} className="quote-box">“Education is the foundation for a brighter tomorrow.”</div>
        </div>
        <div style={styles.storyContent}>
          <div style={{ ...styles.eyebrow, color: "#00d2ff" }}>OUR STORY</div>
          <h2 style={styles.sectionTitle}>Empowering Learners.<br /><span style={styles.gold}>Enriching Lives.</span></h2>
          <p style={styles.storyText}>Vighnavi Academy was founded with a simple yet powerful vision — to make quality education accessible to everyone. We started as a small initiative with a big dream: to create a learning platform that nurtures talent, builds skills, and unlocks opportunities.</p>
          <p style={styles.storyText}>Today, we are proud to be a trusted name in education, helping thousands of learners achieve their goals through industry-relevant courses, expert guidance, and a learner-first approach.</p>
          <button style={styles.button} className="interactive-btn">Our Mission & Vision <span style={styles.arrow}>→</span></button>
        </div>
      </section>

      <section style={styles.features}>
        <div style={styles.feature} className="hover-card">
          <span style={styles.featureIcon}>🎯</span>
          <h3 style={styles.featureTitle}>Our Mission</h3>
          <p style={styles.featureText}>To provide high-quality, practical and accessible education that empowers individuals to achieve their personal and professional goals.</p>
        </div>
        <div style={styles.feature} className="hover-card">
          <span style={styles.featureIcon}>👁️</span>
          <h3 style={styles.featureTitle}>Our Vision</h3>
          <p style={styles.featureText}>To be a leading learning platform recognized for transforming lives through education and innovation.</p>
        </div>
        <div style={styles.feature} className="hover-card">
          <span style={styles.featureIcon}>💎</span>
          <h3 style={styles.featureTitle}>Our Values</h3>
          <p style={styles.featureText}>We stand for integrity, excellence, inclusivity and a strong commitment to our learners’ success.</p>
        </div>
      </section>

      <section style={styles.cta}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Let’s Shape<br /><span style={styles.gold}>a Brighter Tomorrow</span></h2>
          <p style={styles.ctaText}>Join Vighnavi Academy and take the next step towards your goals in an environment built for your success.</p>
          <button style={styles.button} className="interactive-btn">Explore Our Courses <span style={styles.arrow}>→</span></button>
        </div>
      </section>
    </div>
  );
}