import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "5 Alasan Mengapa Bisnis Anda Butuh Website di 2024",
      excerpt: "Di era digital ini, website bukan lagi pilihan tapi kebutuhan. Simak 5 alasan utama mengapa bisnis Anda harus memiliki website.",
      image: servicesHero,
      author: "Tim Artweb",
      date: "15 Desember 2024",
      category: "Bisnis Digital",
      readTime: "5 menit",
      featured: true
    },
    {
      id: 2,
      title: "Panduan Lengkap Memilih Domain dan Hosting yang Tepat",
      excerpt: "Tips memilih domain dan hosting yang sesuai untuk website bisnis Anda. Pertimbangan penting sebelum membeli domain.",
      image: servicesHero,
      author: "Tim Artweb",
      date: "12 Desember 2024",
      category: "Tutorial",
      readTime: "7 menit",
      featured: false
    },
    {
      id: 3,
      title: "Tren Desain Website 2024: Minimalis dan User-Friendly",
      excerpt: "Desain website yang modern dan menarik adalah kunci kesuksesan. Pelajari tren desain terbaru untuk website Anda.",
      image: servicesHero,
      author: "Tim Artweb",
      date: "10 Desember 2024",
      category: "Design",
      readTime: "6 menit",
      featured: false
    },
    {
      id: 4,
      title: "SEO Dasar untuk Pemula: Optimasi Website Step by Step",
      excerpt: "Panduan lengkap SEO untuk pemula. Langkah-langkah praktis mengoptimalkan website agar mudah ditemukan di Google.",
      image: servicesHero,
      author: "Tim Artweb",
      date: "8 Desember 2024",
      category: "SEO",
      readTime: "8 menit",
      featured: false
    },
    {
      id: 5,
      title: "Keamanan Website: Melindungi Bisnis dari Ancaman Cyber",
      excerpt: "Tips penting untuk menjaga keamanan website bisnis Anda. Langkah preventif yang harus dilakukan setiap pemilik website.",
      image: servicesHero,
      author: "Tim Artweb",
      date: "5 Desember 2024",
      category: "Keamanan",
      readTime: "6 menit",
      featured: false
    },
    {
      id: 6,
      title: "Mobile-First Design: Mengapa Responsive Design Penting",
      excerpt: "Lebih dari 60% pengguna internet mengakses website melalui mobile. Pelajari pentingnya responsive design.",
      image: servicesHero,
      author: "Tim Artweb",
      date: "3 Desember 2024",
      category: "Mobile",
      readTime: "5 menit",
      featured: false
    }
  ];

  const categories = ["Semua", "Bisnis Digital", "Tutorial", "Design", "SEO", "Keamanan", "Mobile"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero
        backgroundImage={servicesHero}
        badge="📝 Blog & Tutorial"
        title="Artikel"
        subtitle="Terbaru"
        description="Tips, tutorial, dan insight terbaru seputar dunia website dan digital marketing untuk mengembangkan bisnis Anda."
        primaryButton="Lihat Semua"
        secondaryButton="Kategori"
      />

      {/* Blog Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center" data-aos="fade-up">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16" data-aos="fade-up">
            <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-gradient-hero">Featured</Badge>
                    <Badge variant="outline">{blogPosts[0].category}</Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Button variant="hero" className="group">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={post.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="outline" size="sm" className="group">
                      Baca
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12" data-aos="fade-up">
            <Button variant="outline" size="lg">
              Muat Lebih Banyak
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">
            Dapatkan Update Artikel Terbaru
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Berlangganan newsletter kami untuk mendapatkan tips dan tutorial terbaru seputar website dan digital marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Masukkan email Anda" 
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button variant="secondary" size="lg">
              Berlangganan
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Blog;