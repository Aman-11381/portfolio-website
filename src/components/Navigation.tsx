import type { MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Monitor scroll position
  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    workSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleAboutClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname === '/') {
      scrollToAbout();
      return;
    }

    navigate('/');
    setTimeout(scrollToAbout, 150);
  };

  const handleWorkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname === '/') {
      scrollToWork();
      return;
    }

    navigate('/');
    setTimeout(scrollToWork, 150);
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300"
      style={{
        borderColor: isScrolled ? 'rgba(147, 51, 234, 0.2)' : 'rgba(243, 244, 246, 1)',
      }}
    >
      {/* Background layer - white */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Purple overlay with right-to-left animation */}
      <motion.div
        className="absolute inset-0 bg-purple-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        style={{
          transformOrigin: 'right',
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <Link
            to="/"
            className={`text-2xl font-bold transition-colors duration-300 z-50 ${
              isScrolled ? 'text-white hover:text-purple-200' : 'text-gray-900 hover:text-purple-600'
            }`}
          >
            Aman_
          </Link>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              onClick={handleAboutClick}
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-purple-200' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              About
            </a>
            <a
              href="#work"
              onClick={handleWorkClick}
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-purple-200' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Work
            </a>
            <Link
              to="/contact"
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-purple-200' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? 'text-white' : 'text-gray-900'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              className="w-6 h-0.5 bg-current rounded-full"
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-current rounded-full"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-current rounded-full"
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="md:hidden fixed inset-0 bg-purple-600 z-40"
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          <a
            href="#about"
            onClick={handleAboutClick}
            className="text-white text-3xl font-semibold hover:text-purple-200 transition-colors"
          >
            About
          </a>
          <a
            href="#work"
            onClick={handleWorkClick}
            className="text-white text-3xl font-semibold hover:text-purple-200 transition-colors"
          >
            Work
          </a>
          <Link
            to="/contact"
            onClick={handleContactClick}
            className="text-white text-3xl font-semibold hover:text-purple-200 transition-colors"
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navigation;
