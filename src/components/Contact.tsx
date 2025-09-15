import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone, Calendar, Download } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      detail: "jmaroon@mail.wlu.edu",
      action: "Send Email",
      href: "mailto:jmaroon@mail.wlu.edu",
      primary: true
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      detail: "linkedin.com/in/jacksonmaroon",
      action: "View Profile",
      href: "https://linkedin.com/in/jacksonmaroon",
      primary: false
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      detail: "github.com/JacksonMaroon",
      action: "View Code",
      href: "https://github.com/JacksonMaroon",
      primary: false
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      detail: "(612) 512-6977",
      action: "Call Now",
      href: "tel:+16125126977",
      primary: false
    }
  ];

  const availability = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Graduation",
      detail: "May 2026"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      detail: "Lexington, VA (Open to relocation)"
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary-foreground">
              Let's Connect
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              I'm actively seeking product management opportunities and would love to discuss 
              how my experience in data-driven product development and user research can contribute 
              to your team's success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-foreground mb-6">Get In Touch</h3>
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-card/90 backdrop-blur-sm shadow-card hover:shadow-glow transition-smooth group">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${method.primary ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} group-hover:bg-primary group-hover:text-primary-foreground transition-smooth`}>
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{method.title}</h4>
                          <p className="text-sm text-muted-foreground">{method.detail}</p>
                        </div>
                      </div>
                      <Button 
                        variant={method.primary ? "hero" : "outline"} 
                        size="sm" 
                        asChild
                      >
                        <a href={method.href} target="_blank" rel="noopener noreferrer">
                          {method.action}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Availability & Quick Actions */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary-foreground mb-6">Availability</h3>
              
              <Card className="bg-card/90 backdrop-blur-sm shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Current Status</CardTitle>
                  <CardDescription>Open to full-time product management roles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {availability.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-primary">{item.icon}</div>
                      <div>
                        <span className="font-medium">{item.title}: </span>
                        <span className="text-muted-foreground">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                  <CardDescription>Get to know my work better</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:jmaroon@mail.wlu.edu?subject=Resume Request">
                      <Download className="w-4 h-4" />
                      Request Full Resume
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:jmaroon@mail.wlu.edu?subject=Coffee Chat Request">
                      <Calendar className="w-4 h-4" />
                      Schedule a Coffee Chat
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#projects" onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      View Projects
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I bring a unique combination of technical skills, business acumen, and user-centered thinking 
              to product management. Let's discuss how I can help drive growth for your product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:jmaroon@mail.wlu.edu?subject=PM Opportunity Discussion">
                  <Mail className="w-5 h-5" />
                  Start the Conversation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/jacksonmaroon" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;