import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import Services from '@/components/Services';
import StatsSection from '@/components/StatsSection';
import ClientsSection from '@/components/ClientsSection';
import ProblemSolversSection from '@/components/ProblemSolversSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import CEOSection from '@/components/CEOSection';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <Services />
        <ProjectsGallery />
        <CEOSection />
        <StatsSection />
        <ClientsSection />
        <ProblemSolversSection />
        <ContactForm />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
