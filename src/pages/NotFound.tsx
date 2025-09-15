import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary-foreground mb-4">404</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <h2 className="text-2xl font-semibold text-primary-foreground mb-2">Page Not Found</h2>
          <p className="text-primary-foreground/80 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="/">
              <Home className="w-5 h-5" />
              Back to Portfolio
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/#contact">
              <Search className="w-5 h-5" />
              Get In Touch
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
