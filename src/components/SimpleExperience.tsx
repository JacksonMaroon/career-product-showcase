import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { companyLogos, type CompanyLogoKey } from "@/data/companyLogos";
import { Calendar, CheckCircle2, MapPin } from "lucide-react";

const SimpleExperience = () => {
  const experiences: Array<{
    company: string;
    role: string;
    period: string;
    location: string;
    companyUrl: string;
    logoKey: CompanyLogoKey;
    achievements: string[];
  }> = [
    {
      company: "Kearney",
      role: "Summer Business Analyst",
      period: "Jun. 2025 – Aug. 2025",
      location: "New York, NY",
      companyUrl: "https://www.kearney.com",
      logoKey: "kearney",
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
      companyUrl: "https://www.med.upenn.edu/",
      logoKey: "perelman",
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
      companyUrl: "https://my.wlu.edu/office-of-health-promotion",
      logoKey: "wlu",
      achievements: [
        "Launched campus-wide mental health initiative coordinating 4 organizations",
        "Generated 3000+ student engagements across programs",
        "Analyzed student feedback and wellness metrics for 10% satisfaction improvement"
      ]
    }
  ];

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="py-20 px-6 bg-gradient-to-b from-background via-background to-muted"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="mx-auto w-fit px-4 py-1 text-sm uppercase tracking-wide">
            Professional Journey
          </Badge>
          <h2 id="experience-title" className="text-3xl font-bold sm:text-4xl">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of the roles where I have delivered impact across consulting, healthcare innovation,
            and campus wellness.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-border/60 shadow-lg transition-shadow hover:shadow-xl hover:border-primary/30"
            >
              <div className="flex flex-col gap-6 p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-background/80 p-3 shadow-inner">
                      <img
                        src={companyLogos[exp.logoKey].src}
                        alt={companyLogos[exp.logoKey].alt}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold sm:text-2xl">{exp.role}</h3>
                      <a
                        href={exp.companyUrl}
                        className="text-lg font-medium text-primary transition-colors hover:text-primary/80"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {exp.company}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm">
                    <Badge variant="secondary" className="flex items-center gap-2 bg-primary/10 text-primary">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </Badge>
                  </div>
                </div>

                <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-lg border border-transparent bg-muted/30 p-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleExperience;