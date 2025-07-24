import React from 'react';

const solutionIcons = [
  // Energy bolt
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" key="bolt"><circle cx="28" cy="28" r="28" fill="#007167"/><path d="M32 12l-14 21h10l-3 11 14-21h-10l3-11z" fill="#fff"/></svg>,
  // Graph
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" key="graph"><circle cx="28" cy="28" r="28" fill="#007167"/><rect x="16" y="30" width="6" height="12" rx="3" fill="#fff"/><rect x="26" y="21" width="6" height="21" rx="3" fill="#fff"/><rect x="36" y="12" width="6" height="30" rx="3" fill="#fff"/></svg>,
  // Arrows
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" key="arrows"><circle cx="28" cy="28" r="28" fill="#007167"/><path d="M18 32h16.5l-5.2 5.2L32 40l10-10-10-10-2.7 2.7L34.5 28H18v4z" fill="#fff"/></svg>,
  // Battery
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" key="battery"><circle cx="28" cy="28" r="28" fill="#007167"/><rect x="18" y="24" width="20" height="8" rx="3" fill="#fff"/><rect x="38" y="26.5" width="3" height="3" rx="1.5" fill="#fff"/></svg>
];

const solutions = [
  {
    icon: solutionIcons[0],
    title: 'Demand Charge Reduction / Time of Use',
    desc: 'Reduce demand charges during short-term peaks and high-rate periods by using stored energy in batteries.'
  },
  {
    icon: solutionIcons[1],
    title: 'Energy Arbitrage',
    desc: 'Store energy in batteries when utility prices are low. Sell energy back when prices are higher.'
  },
  {
    icon: solutionIcons[2],
    title: 'Demand Response',
    desc: 'Participate in utility programs to reduce demand during peaks with energy stored in batteries.'
  },
  {
    icon: solutionIcons[3],
    title: 'Backup Power',
    desc: 'Provide back-up power for critical applications, ensuring business continuity and safety.'
  }
];

const processSteps = [
  {
    icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#007167"/><path d="M12 18h12M18 12v12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'Consult',
    desc: 'We assess your needs and energy profile.'
  },
  {
    icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#007167"/><path d="M12 24l6-12 6 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Design',
    desc: 'Custom solution engineered for your facility.'
  },
  {
    icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#007167"/><path d="M12 24h12v-6l-6-6-6 6v6z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg>,
    title: 'Install',
    desc: 'Professional installation and commissioning.'
  },
  {
    icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#007167"/><path d="M18 12v12M12 18h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'Support',
    desc: 'Ongoing monitoring and support.'
  }
];

const whyAlchemy = [
  {
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#007167"/><path d="M28 14l-9 12-5-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'U.S. Manufactured',
    desc: 'All solutions are designed and built in the USA for quality and reliability.'
  },
  {
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#007167"/><path d="M20 12v16M12 20h16" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>,
    title: 'Scalable & Flexible',
    desc: 'Solutions tailored for commercial and industrial needs, from small to large scale.'
  },
  {
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#007167"/><path d="M20 12a8 8 0 100 16 8 8 0 000-16zm0 0v8l5 3" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Resilient & Safe',
    desc: 'Engineered for safety, uptime, and peace of mind in mission-critical applications.'
  },
  {
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#007167"/><path d="M14 26l12-12M14 14h12v12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Sustainable',
    desc: 'Supporting a cleaner, more sustainable energy future for industry.'
  }
];

export default function Solutions() {
  return (
    <section className="solutions-outer-bg" style={{ color: '#1a2233', background: '#fff', padding: '3.5rem 0' }}>
      {/* Hero Section */}
      <div className="solutions-hero" style={{ background: '#fff', borderBottom: '1.5px solid #e5eaf2', padding: '2.5rem 0 1.5rem 0', borderRadius: 18, boxShadow: '0 2px 18px rgba(0,113,103,0.07)', maxWidth: 1200, margin: '0 auto' }}>
        <div className="container solutions-hero-content" style={{ textAlign: 'center' }}>
          <h1 className="solutions-hero-title" style={{ color: '#007167', fontWeight: 900, fontSize: '2.3rem', marginBottom: 12 }}>Powering Industry. Empowering Progress.</h1>
          <p className="solutions-hero-sub" style={{ color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 0 }}>Advanced U.S.-manufactured micro-grid and battery solutions for commercial and industrial clients.</p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: '100%', height: 2, background: 'linear-gradient(90deg, transparent, #00716733 50%, transparent)', margin: '3rem 0 2.5rem 0', borderRadius: 2 }} />

      {/* Solutions Showcase */}
      <div className="container solutions-card" style={{ background: '#fff', border: '1.5px solid #e5eaf2', borderRadius: 18, boxShadow: '0 4px 24px rgba(0,113,103,0.10)', maxWidth: 1200, margin: '0 auto 3rem auto', padding: '2.5rem 2rem' }}>
        <h2 className="solutions-section-title" style={{ color: '#007167', fontWeight: 800, fontSize: '1.4rem', marginBottom: 28, textAlign: 'center' }}>Our Core Solutions</h2>
        <div className="solutions-vertical-list" style={{ gap: '2rem' }}>
          {solutions.map((s, i) => (
            <div className="solutions-vertical-card" key={i} style={{ background: '#fff', border: '1.5px solid #e5eaf2', borderRadius: 16, boxShadow: '0 2px 18px rgba(0,113,103,0.07)', display: 'flex', alignItems: 'center', padding: '1.5rem 1.2rem', marginBottom: 18 }}>
              <div className="solutions-vertical-icon" style={{ marginRight: 24 }}>{s.icon}</div>
              <div className="solutions-vertical-content">
                <div className="solutions-vertical-title" style={{ color: '#007167', fontWeight: 700, fontSize: '1.13rem', marginBottom: 6 }}>{s.title}</div>
                <div className="solutions-vertical-desc" style={{ color: '#4a5a6a', fontSize: '1.05rem' }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: '100%', height: 2, background: 'linear-gradient(90deg, transparent, #00716733 50%, transparent)', margin: '3rem 0 2.5rem 0', borderRadius: 2 }} />

      {/* Process Section */}
      <div className="container solutions-card" style={{ background: '#fff', border: '1.5px solid #e5eaf2', borderRadius: 18, boxShadow: '0 4px 24px rgba(0,113,103,0.10)', maxWidth: 1200, margin: '0 auto 3rem auto', padding: '2.5rem 2rem' }}>
        <h2 className="solutions-section-title" style={{ color: '#007167', fontWeight: 800, fontSize: '1.4rem', marginBottom: 28, textAlign: 'center' }}>How It Works</h2>
        <div className="solutions-process-steps" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {processSteps.map((step, i) => (
            <div className="solutions-process-step" key={i} style={{ background: '#fff', border: '1.5px solid #e5eaf2', borderRadius: 16, boxShadow: '0 2px 18px rgba(0,113,103,0.07)', padding: '1.2rem 1.2rem', minWidth: 180, maxWidth: 220, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 12 }}>
              <div className="solutions-process-icon" style={{ marginBottom: 10 }}>{step.icon}</div>
              <div className="solutions-process-title" style={{ color: '#007167', fontWeight: 700, fontSize: '1.08rem', marginBottom: 4 }}>{step.title}</div>
              <div className="solutions-process-desc" style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>{step.desc}</div>
              {i < processSteps.length - 1 && <div className="solutions-process-arrow" style={{ color: '#007167', fontWeight: 700, fontSize: 24, marginTop: 8 }}>→</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: '100%', height: 2, background: 'linear-gradient(90deg, transparent, #00716733 50%, transparent)', margin: '3rem 0 2.5rem 0', borderRadius: 2 }} />

      {/* Why Choose Alchemy */}
      <div className="container solutions-card" style={{ background: '#fff', border: '1.5px solid #e5eaf2', borderRadius: 18, boxShadow: '0 4px 24px rgba(0,113,103,0.10)', maxWidth: 1200, margin: '0 auto 3rem auto', padding: '2.5rem 2rem' }}>
        <h2 className="solutions-section-title" style={{ color: '#007167', fontWeight: 800, fontSize: '1.4rem', marginBottom: 28, textAlign: 'center' }}>Why Choose Alchemy?</h2>
        <div className="why-alchemy-row" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {whyAlchemy.map((item, i) => (
            <div className="why-alchemy-card" key={i} style={{ background: '#fff', border: '1.5px solid #e5eaf2', borderRadius: 16, boxShadow: '0 2px 18px rgba(0,113,103,0.07)', padding: '1.5rem 1.2rem', minWidth: 180, maxWidth: 220, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 12 }}>
              <div className="why-alchemy-icon" style={{ marginBottom: 10 }}>{item.icon}</div>
              <div className="why-alchemy-title" style={{ color: '#007167', fontWeight: 700, fontSize: '1.08rem', marginBottom: 4 }}>{item.title}</div>
              <div className="why-alchemy-desc" style={{ color: '#4a5a6a', fontSize: '0.98rem' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: '100%', height: 2, background: 'linear-gradient(90deg, transparent, #00716733 50%, transparent)', margin: '3rem 0 2.5rem 0', borderRadius: 2 }} />

      {/* Call to Action */}
      <div className="container solutions-card" style={{ background: '#fff', border: '1.5px solid #e5eaf2', borderRadius: 18, boxShadow: '0 4px 24px rgba(0,113,103,0.10)', maxWidth: 1200, margin: '0 auto 40px auto', padding: '2.5rem 2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.6rem', color: '#007167', marginBottom: '1.2rem' }}>Ready to future-proof your energy?</h2>
          <a href="/contact" className="cta-btn" style={{ background: '#007167', color: '#fff', fontWeight: 700, borderRadius: 8, fontSize: '1.13rem', padding: '0.85rem 2.2rem', border: 'none', boxShadow: '0 2px 8px rgba(0,113,103,0.13)' }}>Request a Consultation</a>
        </div>
      </div>
    </section>
  );
} 