import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import PortfolioSection from "@/components/PortfolioSection";
import FooterSection from "@/components/FooterSection";
import portfolioHero from "@/assets/portfolio-hero.jpg";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero
        backgroundImage={portfolioHero}
        badge="🎨 Portofolio"
        title="Karya"
        subtitle="Terbaik"
        description="Lihat berbagai project website yang telah kami kerjakan untuk klien dari berbagai industri."
        primaryButton="Lihat Semua"
        secondaryButton="Pesan Sekarang"
      />

      <PortfolioSection />
      <FooterSection />
    </div>
  );
};

export default Portfolio;