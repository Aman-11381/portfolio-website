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
          <div className="flex items-center space-x-8">
            <a
              href="/#about"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              About
            </a>
            <Link
              to="/work"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Work
            </Link>
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
