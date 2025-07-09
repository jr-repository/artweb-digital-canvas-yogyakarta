import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import servicesHero from "@/assets/services-hero.jpg";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image_url: string;
  author: string;
  created_at: string;
  category: string;
  read_time: number;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
      } else {
        setBlogPosts(data || []);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["All", "Web Development", "Design", "SEO", "Mobile", "Security", "E-Commerce"];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts[0];

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
                variant={activeCategory === category ? "default" : "secondary"}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          {!loading && featuredPost && (
            <div className="mb-16" data-aos="fade-up">
              <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image_url} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge className="bg-gradient-hero">Featured</Badge>
                      <Badge variant="outline">{featuredPost.category}</Badge>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{format(new Date(featuredPost.created_at), 'dd MMMM yyyy', { locale: id })}</span>
                      </div>
                      <span>•</span>
                      <span>{featuredPost.read_time} menit</span>
                    </div>
                    <Button 
                      variant="hero" 
                      className="group"
                      onClick={() => navigate(`/blog/${featuredPost.slug}`)}
                    >
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Blog Posts Grid */}
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden shadow-soft animate-pulse">
                  <div className="h-48 bg-muted"></div>
                  <CardHeader>
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                      <div className="h-6 bg-muted rounded"></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-muted rounded w-5/6"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <Card key={post.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="relative">
                    <img 
                      src={post.image_url} 
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
                        <span>{format(new Date(post.created_at), 'dd MMM yyyy', { locale: id })}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{post.read_time} menit</span>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="group"
                        onClick={() => navigate(`/blog/${post.slug}`)}
                      >
                        Baca
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

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