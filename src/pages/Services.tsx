import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero
        backgroundImage={servicesHero}
        badge="🎯 Layanan Kami"
        title="Layanan"
        subtitle="Profesional"
        description="Solusi lengkap untuk kebutuhan website bisnis Anda. Dari company profile hingga e-commerce, kami siap membantu."
        primaryButton="Konsultasi Gratis"
        secondaryButton="Lihat Harga"
      />

      <ServicesSection />
      <FooterSection />
    </div>
  );
};

export default Services;