import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero
        backgroundImage={contactHero}
        badge="📞 Hubungi Kami"
        title="Mari"
        subtitle="Berbicara"
        description="Siap memulai project website Anda? Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik."
        primaryButton="Chat WhatsApp"
        secondaryButton="Kirim Email"
      />

      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Contact;