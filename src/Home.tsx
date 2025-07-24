import React from 'react';
import './Home.css';
import solarwindbattery from '../branding/solarwindbattery.jpg';

const whyAlchemy = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="18" fill="#007167"/><path d="M12 24l12-12M12 14h12v12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'U.S.-Centric Supply Chain',
    desc: 'Technology is made in the USA, reducing emissions and supply chain risks. Qualifies for incentives in the Inflation Reduction Act.'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="18" fill="#007167"/><path d="M18 26c-4.418 0-8-3.134-8-7 0-2.21 1.79-4 4-4 1.657 0 3 1.343 3 3 0-1.657 1.343-3 3-3 2.21 0 4 1.79 4 4 0 3.866-3.582 7-8 7z" fill="#fff"/></svg>
    ),
    title: 'Sustainable',
    desc: 'Zinc-manganese battery chemistry has a lower carbon footprint than lithium, lead, or bromine. 100% recyclable, leveraging existing supply chains.'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="18" fill="#007167"/><path d="M18 12v12M12 18h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Safe',
    desc: 'Battery chemistry is inherently thermally stable, fire safe, and fully non-toxic, exhibiting no thermal runaway – the safest battery technology option.'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="18" fill="#007167"/><path d="M18 10l6 10H12l6-10z" fill="#fff"/></svg>
    ),
    title: 'Proven Value',
    desc: 'Patented Zn-Mn battery technology, real-world case studies, and a partnership with Urban Electric Power (UEP) deliver proven results.'
  }
];

interface HomeProps {
  heroRef?: React.RefObject<HTMLElement>;
}

const Home: React.FC<HomeProps> = ({ heroRef }) => {
  return (
    <>
      {/* Hero Section: Edge-to-Edge Background Image, Flush with Navbar */}
      <section
        className="home-hero hero-fullwidth"
        ref={heroRef}
        style={{
          backgroundImage: `url(${solarwindbattery})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          width: '100vw',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          marginTop: 0,
          paddingTop: 0,
        }}
      >
        <div className="hero-accent-overlay" />
        <div className="hero-content hero-text-shadow" style={{ position: 'relative', zIndex: 2 }}>
          <h1>Powering Industry.<br />Empowering Progress.</h1>
          <h2>U.S.-Manufactured Micro-Grid & Battery Systems for Mission-Critical Operations</h2>
          <div className="summary">
            Alchemy Industrial delivers reliable, scalable, and safe energy storage and micro-grid solutions for commercial and industrial clients across the U.S.
          </div>
          <a href="/solutions" className="cta-btn">Explore Solutions</a>
        </div>
      </section>

      {/* Features Section: 2x2 Grid */}
      <section className="container" style={{ margin: '0 auto 4rem auto' }}>
        <h2 style={{ fontWeight: 800, fontSize: '2rem', marginBottom: '2.5rem', color: '#007167', textAlign: 'center' }}>Why Choose Alchemy Industrial?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', justifyContent: 'center' }}>
          {whyAlchemy.map((item, i) => (
            <div key={i} style={{ background: '#fff', border: '1.5px solid #e5eaf2', borderRadius: 16, boxShadow: '0 2px 18px rgba(0,113,103,0.07)', padding: '2.2rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 56, height: 56, background: '#007167', borderRadius: '50%', marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', color: '#007167', marginBottom: 8 }}>{item.title}</div>
              <div style={{ fontSize: '1.05rem', color: '#4a5a6a' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section: Card Row */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontWeight: 800, fontSize: '2rem', marginBottom: '2rem', color: '#007167', textAlign: 'center' }}>What Our Clients Say</h2>
        <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ background: '#fff', border: '1.5px solid #e5eaf2', borderRadius: 16, boxShadow: '0 2px 18px rgba(0,113,103,0.07)', padding: '2rem 1.5rem', minWidth: 260, maxWidth: 340, textAlign: 'left', position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontStyle: 'italic', color: '#007167', marginBottom: 12 }}>
                "Alchemy Industrial delivered exactly what we needed. Their team was professional and the solution exceeded our expectations."
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#007167', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 20 }}>A{i}</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#007167' }}>Client Name {i}</div>
                  <div style={{ fontSize: '0.98rem', color: '#4a5a6a' }}>Company {i}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home; 