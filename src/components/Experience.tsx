import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Calendar, TrendingUp, Users, Target, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Kearney",
      role: "Summer Business Analyst",
      location: "New York, NY",
      period: "Jun. 2025 – Aug. 2025",
      type: "Internship",
      achievements: [
        "Built internal analytics tool reducing user workflow time 80%",
        "Drove $18M visibility for client procurement decisions",
        "Achieved 90% user adoption through training workshops and documentation",
        "Debugged critical data pipeline issue unlocking $500K in additional customer value",
        "Designed supplier evaluation framework with scoring rubrics and decision trees"
      ],
      skills: ["Data Analytics", "User Training", "Process Optimization", "Framework Design"]
    },
    {
      company: "University of Pennsylvania, Center for Addiction Policy",
      role: "NIH Summer Intern",
      location: "Philadelphia, PA",
      period: "May 2024 – Jul. 2024",
      type: "Research",
      achievements: [
        "Selected for NIH program (<15% acceptance rate)",
        "Conducted behavioral analysis on 40K+ patient journeys",
        "Identified 3 key intervention points improving outcomes by 25%",
        "Uncovered 11x decrease in treatment efficacy for specific patient segment",
        "Informed treatment strategy pivot through data-driven insights"
      ],
      skills: ["Data Analysis", "Healthcare Analytics", "Research", "Statistical Modeling"]
    },
    {
      company: "W&L Office of Health Promotion",
      role: "Assistant to Director",
      location: "Lexington, VA",
      period: "Sep. 2023 – Present",
      type: "Leadership",
      achievements: [
        "Launched campus-wide mental health initiative coordinating 4 organizations",
        "Generated 3000+ student engagements across programs",
        "Analyzed student feedback and wellness metrics",
        "Drove improvements projected to increase satisfaction scores 10%"
      ],
      skills: ["Program Management", "Cross-functional Leadership", "Data Analysis", "Stakeholder Management"]
    },
    {
      company: "Washington and Lee Student Consulting",
      role: "Team Lead",
      location: "Lexington, VA",
      period: "Nov. 2023 – Present",
      type: "Leadership",
      achievements: [
        "Led cross-functional team on AI health product go-to-market strategy",
        "Delivered comprehensive launch roadmap and user acquisition plan",
        "Conducted competitive analysis of 12 digital health products",
        "Identified white space opportunity in medication adherence market",
        "Managed 8 weekly client touchpoints maintaining 100% on-time delivery"
      ],
      skills: ["Strategic Planning", "Market Research", "Team Leadership", "Client Management"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship": return "bg-primary text-primary-foreground";
      case "Research": return "bg-secondary text-secondary-foreground";
      case "Leadership": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A track record of delivering measurable impact across product management, analytics, 
              and leadership roles in diverse industries and organizations.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth group">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Building className="w-5 h-5 text-primary" />
                        <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                          {exp.role}
                        </CardTitle>
                        <Badge className={getTypeColor(exp.type)}>
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <span className="font-medium text-secondary">{exp.company}</span>
                        <span className="hidden sm:block">•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="hidden sm:block">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-success" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm">
                            <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        Skills Applied
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:jmaroon@mail.wlu.edu">
                <ExternalLink className="w-4 h-4" />
                Request Full Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;