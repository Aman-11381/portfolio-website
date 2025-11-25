import type { MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Monitor scroll position
  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

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

    if (location.pathname === '/') {
      scrollToAbout();
      return;
    }

    navigate('/');
    setTimeout(scrollToAbout, 150);
  };

  const handleWorkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (location.pathname === '/') {
      scrollToWork();
      return;
    }

    navigate('/');
    setTimeout(scrollToWork, 150);
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
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-white hover:text-purple-200' : 'text-gray-900 hover:text-purple-600'
            }`}
          >
            Aman_
          </Link>

          {/* Navigation links in the center */}
          <div className="flex items-center space-x-8">
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
        </div>
      </div>
    </motion.nav>
  );
}

export default Navigation;
