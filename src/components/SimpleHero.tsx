import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const SimpleHero = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden">
            <img 
              src={heroImage} 
              alt="Jackson Maroon"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Jackson Maroon</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Product Manager & AI Enthusiast with experience at Kearney, NIH, and W&L. 
            Passionate about data-driven solutions and user research.
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Lexington, VA
            </div>
            <div>Available May 2026</div>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button asChild>
              <a href="mailto:jmaroon@mail.wlu.edu">
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/jacksonmaroon" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/JacksonMaroon" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+16125126977">
                (612) 512-6977
              </a>
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground text-sm max-w-3xl mx-auto">
            I'm a dual Bachelor's student at Washington & Lee University studying Business Administration 
            and Biology, with a passion for product management and AI. I bring data-driven thinking and 
            user-centered design to every product challenge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;