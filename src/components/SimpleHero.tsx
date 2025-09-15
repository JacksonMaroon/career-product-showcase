import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Twitter, Newspaper, Calendar } from "lucide-react";

const portraitImageUrl = "https://avatars.githubusercontent.com/u/124005183?v=4";

const SimpleHero = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl md:left-0 md:-translate-x-1/3 md:-translate-y-1/3" />
        <div className="absolute bottom-0 right-0 h-60 w-60 translate-x-1/4 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[minmax(0,230px),1fr]">
        <div className="flex flex-col items-center gap-6 md:items-start">
          <div className="relative">
            <div className="absolute inset-0 rounded-[36px] bg-primary/30 blur-2xl" />
            <div className="relative h-40 w-40 overflow-hidden rounded-[32px] border border-border/50 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] sm:h-48 sm:w-48">
              <img
                src={portraitImageUrl}
                alt="Jackson Maroon smiling in front of a neutral background"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 backdrop-blur">
              <MapPin className="h-4 w-4" />
              Lexington, VA
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 backdrop-blur">
              <Calendar className="h-4 w-4" />
              Available May 2026
            </span>
          </div>
        </div>

        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary/80">
              Product Management & AI Strategy
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">Jackson Maroon</h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Product Manager & AI Enthusiast with experience at Kearney, NIH, and Washington &amp; Lee. I shape
              user-focused, data-driven products that deliver measurable impact.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button asChild>
              <a href="mailto:jmaroon@mail.wlu.edu">
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/jacksonmaroon" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://x.com/Jack_Maroon_" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://substack.com/@jackmaroon?utm_source=user-menu" target="_blank" rel="noopener noreferrer">
                <Newspaper className="h-4 w-4" />
                Substack
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 transition-colors hover:border-primary hover:text-primary"
              href="https://github.com/JacksonMaroon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 transition-colors hover:border-primary hover:text-primary"
              href="tel:+16125126977"
            >
              (612) 512-6977
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;
