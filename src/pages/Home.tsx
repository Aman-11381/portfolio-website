import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AboutSection from '../sections/AboutSection';
import WorkSection from '../sections/WorkSection';
import CodeVisualization from '../components/CodeVisualization';

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-[73px]">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <p className="text-gray-600 text-xl mb-6 flex items-center gap-2">
                Hey, I'm Aman 👋
              </p>

              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-purple-600">Software</span>
                <br />
                <span className="text-gray-900">Engineer</span>
              </h1>

              <p className="text-gray-600 text-lg lg:text-xl mb-10 max-w-xl leading-relaxed">
                I'm a full stack developer based in India, I'll help you
                build amazing applications your users will love.
              </p>

              <div>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl inline-block"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right side - 3D Code Visualization */}
            <div className="hidden lg:flex items-center justify-center">
              <CodeVisualization />
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Work Section */}
        <WorkSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
