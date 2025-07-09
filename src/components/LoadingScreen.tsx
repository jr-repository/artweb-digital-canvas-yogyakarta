import { useEffect, useState } from 'react';
import logoImage from '@/assets/logo.png';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-hero rounded-full blur-xl opacity-60 animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-8 border border-white/20">
            <img
              src={logoImage}
              alt="Artweb Logo"
              className="w-16 h-16 mx-auto animate-bounce"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-display font-bold text-foreground">
            <span className="text-gradient-hero">Artweb</span>
          </h2>
          <p className="text-muted-foreground font-sans">Memuat pengalaman digital terbaik...</p>
          
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-hero rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;