import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import WorkSection from '../sections/WorkSection';

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-[73px]">
        <HeroSection />
        <AboutSection />
        <WorkSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
