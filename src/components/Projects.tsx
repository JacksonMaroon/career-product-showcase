import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, TrendingUp, Clock, Award, DollarSign } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Nexo",
      subtitle: "B2C Professional Matchmaking Platform",
      description: "Led product development for a professional networking app that connects users based on career goals and expertise. Won Washington & Lee's venture competition with a comprehensive go-to-market strategy.",
      period: "Apr. 2025 – May 2025",
      achievements: [
        "Won W&L venture competition with $5K funding",
        "Conducted 50+ user interviews pre-launch",
        "Reduced MVP scope by 40% based on user research",
        "Shipped MVP in 4-week sprint with 2 engineers",
        "Identified top 3 pain points shaping feature set"
      ],
      metrics: [
        { icon: <Award className="w-4 h-4" />, label: "Competition Winner", value: "$5K Funding" },
        { icon: <Users className="w-4 h-4" />, label: "User Interviews", value: "50+" },
        { icon: <Clock className="w-4 h-4" />, label: "Time to MVP", value: "4 weeks" },
        { icon: <TrendingUp className="w-4 h-4" />, label: "Scope Optimization", value: "40% reduction" }
      ],
      technologies: ["React", "Node.js", "User Research", "Go-to-Market Strategy", "Competitive Analysis"],
      links: {
        website: "https://www.nexo.rocks",
        github: "https://github.com/JacksonMaroon/Nexo"
      },
      status: "Live",
      type: "Product Leadership"
    },
    {
      title: "FlexContent Calendar",
      subtitle: "AI-Powered Content Automation Tool",
      description: "Built and launched an AI content automation platform for B2B financial consultants, generating professional LinkedIn content with customizable themes and automated scheduling.",
      period: "May 2024 – Jul. 2024",
      achievements: [
        "Served 6 B2B clients with 100% retention rate",
        "Cut content creation time by 75%",
        "A/B tested 10+ AI models for optimization",
        "Reduced operational costs by 60%",
        "Maintained output quality while scaling efficiency"
      ],
      metrics: [
        { icon: <Users className="w-4 h-4" />, label: "Client Retention", value: "100%" },
        { icon: <Clock className="w-4 h-4" />, label: "Time Savings", value: "75%" },
        { icon: <DollarSign className="w-4 h-4" />, label: "Cost Reduction", value: "60%" },
        { icon: <TrendingUp className="w-4 h-4" />, label: "AI Models Tested", value: "10+" }
      ],
      technologies: ["Python", "AI/ML", "Natural Language Processing", "CSV Export", "API Integration"],
      links: {
        github: "https://github.com/JacksonMaroon/FlexContent-Calendar"
      },
      status: "Production",
      type: "AI Development"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-success text-success-foreground";
      case "Production": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Product Leadership": return "bg-secondary text-secondary-foreground";
      case "AI Development": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Product initiatives that showcase end-to-end ownership, from user research and 
              competitive analysis to MVP development and go-to-market execution.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth group">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl group-hover:text-primary transition-smooth">
                          {project.title}
                        </CardTitle>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <Badge className={getTypeColor(project.type)}>
                          {project.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-lg font-medium text-secondary mb-2">
                        {project.subtitle}
                      </CardDescription>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <p className="text-sm text-muted-foreground">{project.period}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      {project.links.website && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Live Site
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
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Metrics */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Metrics & Results</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="flex justify-center text-primary mb-1">
                            {metric.icon}
                          </div>
                          <div className="text-lg font-bold">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 text-secondary">Key Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more projects or discuss potential collaborations?
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:jmaroon@mail.wlu.edu">
                Let's Connect
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;