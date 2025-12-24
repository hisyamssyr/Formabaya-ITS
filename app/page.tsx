import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import VisionMission from '@/components/VisionMission';
import Activities from '@/components/Activities';
import Events from '@/components/Events';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <VisionMission />
      <Activities />
      <Events />
      <Footer />
    </main>
  );
}
