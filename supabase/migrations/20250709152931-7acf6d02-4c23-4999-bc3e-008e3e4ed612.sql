-- Create portfolio table
CREATE TABLE public.portfolio (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  client TEXT,
  year INTEGER,
  website_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  image_url TEXT,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  published BOOLEAN DEFAULT false,
  read_time INTEGER DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create admin profiles table
CREATE TABLE public.admin_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  username TEXT NOT NULL UNIQUE,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for portfolio (public read, admin write)
CREATE POLICY "Portfolio items are viewable by everyone" 
ON public.portfolio 
FOR SELECT 
USING (true);

CREATE POLICY "Only authenticated users can create portfolio items" 
ON public.portfolio 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Only authenticated users can update portfolio items" 
ON public.portfolio 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Only authenticated users can delete portfolio items" 
ON public.portfolio 
FOR DELETE 
TO authenticated
USING (true);

-- Create policies for blog posts (public read published posts, admin write all)
CREATE POLICY "Published blog posts are viewable by everyone" 
ON public.blog_posts 
FOR SELECT 
USING (published = true OR auth.uid() IS NOT NULL);

CREATE POLICY "Only authenticated users can create blog posts" 
ON public.blog_posts 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Only authenticated users can update blog posts" 
ON public.blog_posts 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Only authenticated users can delete blog posts" 
ON public.blog_posts 
FOR DELETE 
TO authenticated
USING (true);

-- Create policies for admin profiles
CREATE POLICY "Admin profiles are viewable by authenticated users" 
ON public.admin_profiles 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Only authenticated users can create admin profiles" 
ON public.admin_profiles 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Only authenticated users can update their own admin profile" 
ON public.admin_profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_portfolio_updated_at
  BEFORE UPDATE ON public.portfolio
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_admin_profiles_updated_at
  BEFORE UPDATE ON public.admin_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.portfolio (title, category, description, image_url, client, year, website_url, featured) VALUES
('E-Commerce Platform', 'Web Development', 'Modern e-commerce solution with advanced features', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop', 'TechCorp', 2024, 'https://example.com', true),
('Mobile Banking App', 'Mobile Development', 'Secure and user-friendly banking application', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop', 'BankTech', 2024, 'https://example.com', true),
('Corporate Website', 'Web Development', 'Professional corporate website with CMS', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', 'GlobalCorp', 2023, 'https://example.com', false);

INSERT INTO public.blog_posts (title, slug, excerpt, content, image_url, author, category, published, read_time) VALUES
('Tips Memilih Framework Frontend Terbaik', 'tips-memilih-framework-frontend-terbaik', 'Panduan lengkap memilih framework frontend yang tepat untuk project Anda', 'Framework frontend adalah fondasi penting dalam pengembangan web modern. Artikel ini akan membahas berbagai framework populer seperti React, Vue, dan Angular, serta kelebihan dan kekurangan masing-masing. Pemilihan framework yang tepat akan mempengaruhi produktivitas dan maintainability code Anda.', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop', 'Admin ArtWeb', 'Web Development', true, 8),
('Tren Desain UI/UX 2024', 'tren-desain-ui-ux-2024', 'Eksplorasi tren desain terbaru yang akan mendominasi tahun 2024', 'Desain UI/UX terus berkembang dengan tren-tren baru yang menarik. Tahun 2024 membawa berbagai inovasi dalam hal warna, tipografi, dan interaksi user. Mari kita bahas tren-tren yang akan mendominasi industri desain tahun ini.', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop', 'Admin ArtWeb', 'Design', true, 6),
('Optimasi SEO untuk Website Modern', 'optimasi-seo-website-modern', 'Strategi SEO terbaru untuk meningkatkan ranking website Anda', 'SEO modern memerlukan pendekatan yang berbeda dari masa lalu. Dengan algoritma search engine yang terus berkembang, kita perlu memahami strategi-strategi terbaru untuk memastikan website kita mendapat ranking yang baik.', 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop', 'Admin ArtWeb', 'SEO', true, 10);