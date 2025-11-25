import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
            AmanDCZ.
          </Link>

          {/* Navigation links in the center */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/work"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Menu button on the right */}
          <button
            className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
