import type { MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

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
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
            Aman_
          </Link>

          {/* Navigation links in the center */}
          <div className="flex items-center space-x-8">
            <a
              href="#about"
              onClick={handleAboutClick}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#work"
              onClick={handleWorkClick}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Work
            </a>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
