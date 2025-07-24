export default function About() {
  return (
    <div className="container about-page" style={{ maxWidth: 900, margin: '0 auto', padding: '3.5rem 0', color: '#1a2233' }}>
      <h1 style={{ color: '#007167', fontWeight: 900, fontSize: '2.3rem', marginBottom: 32, textAlign: 'center' }}>About Alchemy Industrial</h1>

      {/* Mission Section */}
      <section style={{ background: '#fff', border: '1.5px solid #e5eaf2', borderRadius: 16, boxShadow: '0 2px 18px rgba(0,113,103,0.07)', padding: '2.2rem 1.5rem', marginBottom: 40, textAlign: 'center' }}>
        <div style={{ color: '#007167', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>Empowering industry with safe, sustainable, and reliable energy solutions.</div>
        <div style={{ color: '#4a5a6a', fontSize: '1.13rem', maxWidth: 700, margin: '0 auto' }}>
          Alchemy Industrial is dedicated to delivering innovative, U.S.-manufactured micro-grid and battery solutions for commercial and industrial power needs. Our mission is to provide safe, sustainable, and reliable energy storage, supporting a cleaner and more resilient future.
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{ background: '#fff', border: '1.5px solid #e5eaf2', borderRadius: 16, boxShadow: '0 2px 18px rgba(0,113,103,0.07)', padding: '2.2rem 1.5rem', marginBottom: 40, textAlign: 'center' }}>
        <h2 style={{ color: '#007167', fontWeight: 800, fontSize: '1.4rem', marginBottom: 12 }}>Our Story</h2>
        <div style={{ color: '#4a5a6a', fontSize: '1.13rem', maxWidth: 700, margin: '0 auto' }}>
          Founded by industry veterans, Alchemy Industrial partners with leading technology providers to bring advanced battery solutions to the U.S. market. Our commitment to quality, safety, and sustainability drives everything we do.
        </div>
      </section>

      {/* Leadership Team Section */}
      <section>
        <h2 style={{ color: '#007167', fontWeight: 800, fontSize: '1.4rem', marginBottom: 28, textAlign: 'center' }}>Leadership Team</h2>
        <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Team Member 1 */}
          <div className="leadership-card" style={{ padding: '2rem 1.5rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 220, maxWidth: 260 }}>
            <div style={{ width: 84, height: 84, borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: 18, border: '3px solid #007167', boxShadow: '0 2px 8px #00716733', backgroundImage: 'url(https://randomuser.me/api/portraits/men/32.jpg)' }}></div>
            <div style={{ fontWeight: 700, fontSize: '1.13rem', color: '#007167', marginBottom: 4 }}>Mush Khan</div>
            <div style={{ fontSize: '1rem', color: '#4a5a6a', marginBottom: 10 }}>CEO & Co-founder</div>
            <a href="#" style={{ color: '#007167', fontWeight: 600, textDecoration: 'none', fontSize: '1.05rem', letterSpacing: '0.01em' }}>LinkedIn</a>
          </div>
          {/* Team Member 2 */}
          <div className="leadership-card" style={{ padding: '2rem 1.5rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 220, maxWidth: 260 }}>
            <div style={{ width: 84, height: 84, borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: 18, border: '3px solid #007167', boxShadow: '0 2px 8px #00716733', backgroundImage: 'url(https://randomuser.me/api/portraits/men/33.jpg)' }}></div>
            <div style={{ fontWeight: 700, fontSize: '1.13rem', color: '#007167', marginBottom: 4 }}>John Weinzierl, P.E.</div>
            <div style={{ fontSize: '1rem', color: '#4a5a6a', marginBottom: 10 }}>Chairman & Co-founder</div>
          </div>
          {/* Team Member 3 */}
          <div className="leadership-card" style={{ padding: '2rem 1.5rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 220, maxWidth: 260 }}>
            <div style={{ width: 84, height: 84, borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: 18, border: '3px solid #007167', boxShadow: '0 2px 8px #00716733', backgroundImage: 'url(https://randomuser.me/api/portraits/men/34.jpg)' }}></div>
            <div style={{ fontWeight: 700, fontSize: '1.13rem', color: '#007167', marginBottom: 4 }}>Andrew Malek</div>
            <div style={{ fontSize: '1rem', color: '#4a5a6a', marginBottom: 10 }}>VP of Engineering</div>
            <a href="#" style={{ color: '#007167', fontWeight: 600, textDecoration: 'none', fontSize: '1.05rem', letterSpacing: '0.01em' }}>LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
} 