import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Home from './Home';
import About from './About';
import Solutions from './Solutions';
import Contact from './Contact';
import './App.css';

function PageContentWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className={isHome ? 'page-content full-bleed' : 'page-content'}>
      {children}
    </div>
  );
}

function App() {
  const location = useLocation();
  const [navScrolled, setNavScrolled] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let observer: IntersectionObserver | null = null;
    function setupObserver() {
      if (!heroRef.current) {
        setNavScrolled(true);
        return;
      }
      observer = new window.IntersectionObserver(
        ([entry]) => {
          setNavScrolled(!entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: '-48px 0px 0px 0px',
          threshold: 0.01,
        }
      );
      observer.observe(heroRef.current);
      // Immediately check if hero is in view and set navScrolled
      const rect = heroRef.current.getBoundingClientRect();
      const navHeight = 48;
      if (rect.bottom - navHeight <= 0) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    }
    setupObserver();
    return () => {
      if (observer) observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar redesigned-navbar${navScrolled ? ' nav-scrolled' : ''}`}>
        <div className="navbar-content redesigned-navbar-content">
          <Link to="/" className="logo-link redesigned-logo-link">
            <img src="/branding/logo_alchemy_industrial_usa-uai-516x51.png" alt="Alchemy Industrial Logo" className="navbar-logo redesigned-navbar-logo" />
          </Link>
          <ul className="nav-links redesigned-nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'nav-pill active' : 'nav-pill'}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'nav-pill active' : 'nav-pill'}>About Us</Link></li>
            <li><Link to="/solutions" className={location.pathname === '/solutions' ? 'nav-pill active' : 'nav-pill'}>Solutions</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'nav-pill active' : 'nav-pill'}>Contact</Link></li>
            <li><a href="https://y0vwgr-kd.myshopify.com/" className="nav-pill" target="_blank" rel="noopener noreferrer">Shop</a></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home heroRef={heroRef} />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
      <PageContentWrapper>
        {/* Routes moved to App for heroRef passing */}
      </PageContentWrapper>
      <footer>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '0.7rem' }}>
            <img src="/branding/logo_alchemy_industrial_usa-uai-516x51.png" alt="Alchemy Industrial Logo" style={{ height: 28, marginBottom: 8 }} />
          </div>
          <div style={{ marginBottom: '0.7rem', fontWeight: 700, color: '#007167' }}>
            Alchemy Industrial &mdash; Industrial Solutions for a Sustainable Future
          </div>
          <div style={{ marginBottom: '0.7rem', fontSize: '0.98rem' }}>
            <a href="#" style={{ color: '#007167', marginRight: 16 }}>Privacy Policy</a>
            <a href="#" style={{ color: '#007167', marginRight: 16 }}>Terms of Service</a>
            <a href="#" style={{ color: '#007167' }}>LinkedIn</a>
          </div>
          <div style={{ fontSize: '0.95rem', color: '#4a5a6a', opacity: 0.8, marginTop: 16 }}>
            &copy; {new Date().getFullYear()} Alchemy Industrial. All rights reserved.
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default AppWithRouter;
