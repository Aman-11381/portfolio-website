import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="bg-white min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            {/* Greeting */}
            <p className="text-gray-600 text-xl mb-6 flex items-center gap-2">
              Hey, I'm Aman 👋
            </p>

            {/* Main heading with purple accent */}
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-purple-600">Software</span>
              <br />
              <span className="text-gray-900">Engineer</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg lg:text-xl mb-10 max-w-xl leading-relaxed">
              I'm a software engineer with 2 years of experience, I'll help you
              build amazing applications your users will love.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </Link>
              <Link
                to="/work"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-900 hover:bg-gray-50 transition-colors"
              >
                Browse Projects
              </Link>
            </div>
          </div>

          {/* Right side - Empty for now (placeholder for future content) */}
          <div className="hidden lg:flex items-center justify-center">
            {/* This space is intentionally left empty */}
            {/* You can add a photo, illustration, or 3D object here later */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
