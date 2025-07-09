import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import PricingSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";
import servicesHero from "@/assets/services-hero.jpg";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero
        backgroundImage={servicesHero}
        badge="💰 Harga Terjangkau"
        title="Paket"
        subtitle="Terbaik"
        description="Pilih paket yang sesuai dengan kebutuhan dan budget Anda. Semua paket sudah termasuk hosting dan domain."
        primaryButton="Pilih Paket"
        secondaryButton="Konsultasi"
      />

      <PricingSection />
      <FooterSection />
    </div>
  );
};

export default Pricing;