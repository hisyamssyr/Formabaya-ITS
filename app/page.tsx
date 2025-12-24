import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import VisionMission from '@/components/VisionMission';
import Activities from '@/components/Activities';
import Events from '@/components/Events';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import Newsletter from '@/components/Newsletter';

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
      <Newsletter />
      <Sponsors />
      <Footer />
    </main>
  );
}

