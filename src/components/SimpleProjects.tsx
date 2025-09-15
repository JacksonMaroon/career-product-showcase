import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const SimpleProjects = () => {
  const projects = [
    {
      title: "Nexo",
      description: "B2C Professional Matchmaking Platform",
      details: "Led product development for a professional networking app connecting users based on career goals. Won Washington & Lee's venture competition with comprehensive go-to-market strategy.",
      achievements: [
        "Won W&L venture competition ($5K funding)",
        "Conducted 50+ user interviews pre-launch",
        "Shipped MVP in 4-week sprint with 2 engineers",
        "Reduced MVP scope by 40% based on user research"
      ],
      links: {
        website: "https://www.nexo.rocks",
        github: "https://github.com/JacksonMaroon/Nexo"
      },
      period: "Apr. 2025 – May 2025"
    },
    {
      title: "FlexContent Calendar",
      description: "AI-Powered Content Automation Tool",
      details: "Built and launched an AI content automation platform for B2B financial consultants, generating professional LinkedIn content with customizable themes and automated scheduling.",
      achievements: [
        "Served 6 B2B clients with 100% retention rate",
        "Cut content creation time by 75%",
        "A/B tested 10+ AI models for optimization",
        "Reduced operational costs by 60%"
      ],
      links: {
        github: "https://github.com/JacksonMaroon/FlexContent-Calendar"
      },
      period: "May 2024 – Jul. 2024"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-lg border p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-lg text-muted-foreground mb-3">{project.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">{project.details}</p>
                  <Badge variant="outline" className="text-xs">{project.period}</Badge>
                </div>
                
                <div className="flex gap-2">
                  {project.links.website && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Key Achievements</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleProjects;