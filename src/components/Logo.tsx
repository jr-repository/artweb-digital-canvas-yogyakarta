import logo from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = "", size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10", 
    lg: "h-12 w-12"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logo} 
        alt="Artweb Logo" 
        className={`${sizeClasses[size]} mr-3`}
      />
      <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
        Artweb
      </span>
    </div>
  );
};

export default Logo;