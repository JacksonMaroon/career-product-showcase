import { Button } from "@/components/ui/button";
import { Mail, MapPin, Calendar, Twitter, Newspaper } from "lucide-react";

const SimpleContact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 px-6 bg-muted/30"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="contact-title" className="text-3xl font-bold mb-8">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          I'm actively seeking product management opportunities and would love to discuss how my experience can
          contribute to your team's success. Feel free to reach out directly or connect via social platforms.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <div className="text-left">
                <div className="font-medium">Email</div>
                <a className="text-sm text-primary hover:underline" href="mailto:jmaroon@mail.wlu.edu">
                  jmaroon@mail.wlu.edu
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <div className="text-left">
                <div className="font-medium">Location</div>
                <div className="text-sm text-muted-foreground">Lexington, VA (Open to relocation)</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
              <Twitter className="w-5 h-5 text-muted-foreground" />
              <div className="text-left">
                <div className="font-medium">Twitter</div>
                <a
                  className="text-sm text-primary hover:underline"
                  href="https://x.com/Jack_Maroon_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Jack_Maroon_
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
              <Newspaper className="w-5 h-5 text-muted-foreground" />
              <div className="text-left">
                <div className="font-medium">Substack</div>
                <a
                  className="text-sm text-primary hover:underline"
                  href="https://substack.com/@jackmaroon?utm_source=user-menu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  substack.com/@jackmaroon
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Availability</h3>

            <div className="p-6 bg-card rounded-lg border text-left">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Graduation: May 2026</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Available for full-time product management roles starting May 2026. Open to internships and part-time
                opportunities before graduation.
              </p>

              <div className="space-y-3">
                <Button className="w-full" asChild>
                  <a href="https://cal.com/jackson-maroon">Schedule a Conversation</a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:jmaroon@mail.wlu.edu?subject=Resume Request">Request Full Resume</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleContact;
