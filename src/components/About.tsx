import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Brain, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "Dual Bachelor's in Business Administration & Biology at W&L",
      detail: "3.8 GPA • SAT: 1580 • National Merit Scholar"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Recognition",
      description: "Multiple academic honors and leadership positions",
      detail: "President's List • O∆K Honors Society • CACI STEM Scholarship"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Expertise",
      description: "Head AI Fellow driving university-wide AI initiatives",
      detail: "Co-authored AI governance playbook • Led AI Summit"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Impact",
      description: "Delivered measurable business results across all roles",
      detail: "$18M visibility • 90% user adoption • 80% efficiency gains"
    }
  ];

  const skills = [
    "Product Management", "User Research", "A/B Testing", "Generative AI",
    "Python", "SQL", "Figma", "Data Analysis", "Go-to-Market Strategy",
    "Agile/Scrum", "PowerPoint", "Excel VBA", "Qualtrics"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Jackson
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A passionate product management student with a proven track record of driving growth through 
              data-driven solutions, user research, and cross-functional leadership. Currently pursuing dual 
              Bachelor's degrees while building impactful products and leading AI initiatives.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{highlight.description}</p>
                  <p className="text-xs text-primary font-medium">{highlight.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Technical Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Personal Touch */}
          <div className="mt-16 bg-muted/50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Beyond Work</h3>
            <p className="text-muted-foreground">
              When I'm not building products, you'll find me training for marathons, researching AI trends, 
              or competing in prediction markets (top 5% on Metaculus). I believe in continuous learning 
              and bringing that growth mindset to every product challenge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;