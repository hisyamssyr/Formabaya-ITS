import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import AboutUs from '@/components/about';
import VisionMission from '@/components/vision';
import Activities from '@/components/activities';
import Events from '@/components/events';
import Sponsors from '@/components/sponsors';
import Footer from '@/components/footer';
import ScrollProgress from '@/components/scroll';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#CB6F4A] selection:text-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <AboutUs />
      <VisionMission />
      <Activities />
      <Events />
      <Sponsors />
      <Footer />
    </main>
  );
}

