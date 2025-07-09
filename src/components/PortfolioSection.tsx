import { useState } from "react";
import { ExternalLink, Eye, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "Semua", count: 12 },
    { id: "company", name: "Company Profile", count: 4 },
    { id: "ecommerce", name: "E-commerce", count: 3 },
    { id: "portfolio", name: "Portfolio", count: 2 },
    { id: "landing", name: "Landing Page", count: 3 }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Toko Elektronik Jaya",
      category: "ecommerce",
      description: "Website e-commerce untuk toko elektronik dengan fitur pembayaran online dan manajemen stok.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      url: "#",
      client: "Toko Elektronik Jaya",
      year: "2024"
    },
    {
      id: 2,
      title: "Catering Sari Rasa",
      category: "company",
      description: "Website company profile untuk bisnis catering dengan galeri menu dan sistem pemesanan.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      url: "#",
      client: "Catering Sari Rasa",
      year: "2024"
    },
    {
      id: 3,
      title: "Designer Portfolio",
      category: "portfolio",
      description: "Website portfolio untuk freelance designer dengan showcase karya dan CV online.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      url: "#",
      client: "Andi Wijaya",
      year: "2024"
    },
    {
      id: 4,
      title: "Marketing Campaign",
      category: "landing",
      description: "Landing page untuk campaign marketing dengan fokus pada konversi dan lead generation.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      url: "#",
      client: "PT Maju Bersama",
      year: "2024"
    },
    {
      id: 5,
      title: "Boutique Fashion",
      category: "ecommerce",
      description: "Website e-commerce fashion dengan katalog produk dan sistem pembayaran terintegrasi.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      url: "#",
      client: "Boutique Fashion",
      year: "2024"
    },
    {
      id: 6,
      title: "Startup Company",
      category: "company",
      description: "Website company profile untuk startup teknologi dengan informasi produk dan tim.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      url: "#",
      client: "Tech Startup",
      year: "2024"
    },
    {
      id: 7,
      title: "Product Launch",
      category: "landing",
      description: "Landing page untuk peluncuran produk baru dengan countdown timer dan pre-order.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      url: "#",
      client: "Product Launch",
      year: "2024"
    },
    {
      id: 8,
      title: "Photography Studio",
      category: "portfolio",
      description: "Website portfolio untuk studio fotografi dengan galeri dan sistem booking online.",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&h=400&fit=crop",
      url: "#",
      client: "Photography Studio",
      year: "2024"
    },
    {
      id: 9,
      title: "Restaurant Chain",
      category: "company",
      description: "Website company profile untuk chain restaurant dengan menu online dan lokasi cabang.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      url: "#",
      client: "Restaurant Chain",
      year: "2024"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🎨 Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Karya{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Terbaik Kami
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah beberapa project website yang telah kami kerjakan untuk berbagai klien
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "hero" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className="min-w-0"
            >
              <Filter className="w-4 h-4 mr-2" />
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="border-none shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-hero/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="ghost" className="text-white border-white hover:bg-white hover:text-primary">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button size="sm" variant="ghost" className="text-white border-white hover:bg-white hover:text-primary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <Badge variant="outline">
                    {item.year}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Client:</span> {item.client}
                  </div>
                  <Badge variant="secondary">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-medium max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Lihat Semua Portfolio
            </h3>
            <p className="text-muted-foreground mb-6">
              Masih banyak project menarik lainnya yang bisa Anda lihat
            </p>
            <Button variant="hero" size="lg">
              Lihat Portfolio Lengkap
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;