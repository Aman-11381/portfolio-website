import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Work() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 py-20 flex-grow">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">My Work</h1>
        <p className="text-xl text-gray-600">
          This is the Work page. Your projects will be displayed here.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Work;
