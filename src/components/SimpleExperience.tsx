import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const SimpleExperience = () => {
  const experiences = [
    {
      company: "Kearney",
      role: "Summer Business Analyst",
      period: "Jun. 2025 – Aug. 2025",
      location: "New York, NY",
      achievements: [
        "Built internal analytics tool reducing user workflow time 80%",
        "Drove $18M visibility for client procurement decisions",
        "Achieved 90% user adoption through training workshops and documentation",
        "Debugged critical data pipeline issue unlocking $500K in additional customer value"
      ]
    },
    {
      company: "University of Pennsylvania, Center for Addiction Policy",
      role: "NIH Summer Intern",
      period: "May 2024 – Jul. 2024",
      location: "Philadelphia, PA",
      achievements: [
        "Selected for NIH program (<15% acceptance rate)",
        "Conducted behavioral analysis on 40K+ patient journeys",
        "Identified 3 key intervention points improving outcomes by 25%",
        "Uncovered 11x decrease in treatment efficacy for specific patient segment"
      ]
    },
    {
      company: "W&L Office of Health Promotion",
      role: "Assistant to Director",
      period: "Sep. 2023 – Present",
      location: "Lexington, VA",
      achievements: [
        "Launched campus-wide mental health initiative coordinating 4 organizations",
        "Generated 3000+ student engagements across programs",
        "Analyzed student feedback and wellness metrics for 10% satisfaction improvement"
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-border pl-8 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-background border-2 border-primary rounded-full"></div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <div className="text-lg text-muted-foreground font-medium mb-2">{exp.company}</div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleExperience;