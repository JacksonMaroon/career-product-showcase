import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { ChevronDown, Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-glow">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                Available for Product Management Roles
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-float">
                Jackson Maroon
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Product Manager & AI Enthusiast driving growth through 
                <span className="text-primary font-semibold"> data-driven solutions</span> and 
                <span className="text-secondary font-semibold"> user-centered design</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Experience
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com/in/jacksonmaroon" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/JacksonMaroon" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:jmaroon@mail.wlu.edu">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-glow animate-float">
                  <img 
                    src={heroImage} 
                    alt="Jackson Maroon - Product Manager"
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-success text-success-foreground px-4 py-2 rounded-xl shadow-elegant">
                  <div className="text-sm font-semibold">3.8 GPA</div>
                  <div className="text-xs opacity-90">W&L University</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;