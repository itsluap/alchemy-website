'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);
    };

    const detectHeroHeight = () => {
      // Find the first section element (hero section)
      const firstSection = document.querySelector('main > section:first-child');
      if (firstSection) {
        const rect = firstSection.getBoundingClientRect();
        const sectionHeight = rect.height;
        setHeroHeight(sectionHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Detect hero height on mount and resize
    detectHeroHeight();
    window.addEventListener('resize', detectHeroHeight);
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(detectHeroHeight, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', detectHeroHeight);
      clearTimeout(timer);
    };
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  // Calculate navigation states based on actual hero height
  const isOverHero = scrollY < heroHeight;
  const isDeepScrolled = scrollY > 100;

  // Dynamic text color based on scroll position
  const getTextColor = (isActive: boolean) => {
    if (isOverHero) {
      return isActive ? 'text-white' : 'text-white/90 hover:text-white';
    }
    return isActive ? 'text-[#007167]' : 'text-gray-700 hover:text-[#007167]';
  };

  // Dynamic background based on scroll position
  const getNavBackground = () => {
    if (isOverHero) {
      return 'bg-transparent';
    } else if (isDeepScrolled) {
      return 'bg-white/95 backdrop-blur-md shadow-lg';
    } else {
      return 'bg-white/80 backdrop-blur-sm';
    }
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products & Services' },
    { href: '/resources', label: 'Resources' },
  ];

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${getNavBackground()}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/alchemy_logo.png"
                alt="Alchemy"
                width={160}
                height={48}
                className={`h-8 w-auto transition-all duration-300 group-hover:scale-105 ${
                  isOverHero ? 'brightness-0 invert' : ''
                }`}
                quality={100}
                priority
                unoptimized
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 ${getTextColor(isActive(item.href))}`}
                >
                  {item.label}
                  {isActive(item.href) && !isOverHero && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#007167] animate-pulse" />
                  )}
                  {isActive(item.href) && isOverHero && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-white animate-pulse" />
                  )}
                  <div className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isOverHero ? 'bg-white' : 'bg-[#007167]'
                  }`} />
                </Link>
              ))}
              
              <Link 
                href="/contact" 
                className={`px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isOverHero 
                    ? 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30' 
                    : 'bg-[#007167] text-white hover:bg-[#005a52]'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`focus:outline-none transition-colors duration-300 ${getTextColor(false)}`}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`} />
                  <span className={`absolute top-2 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`} />
                  <span className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t ${
              isOverHero 
                ? 'bg-black/20 backdrop-blur-md border-white/20' 
                : 'bg-white/95 backdrop-blur-md border-gray-200'
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? isOverHero 
                        ? 'text-white bg-white/20' 
                        : 'text-[#007167] bg-[#007167]/10'
                      : isOverHero
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-gray-700 hover:text-[#007167] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isOverHero
                    ? 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                    : 'bg-[#007167] text-white hover:bg-[#005a52]'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
} 