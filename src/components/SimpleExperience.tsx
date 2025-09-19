import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { companyLogos, type CompanyLogoKey } from "@/data/companyLogos";
import { Calendar, CheckCircle2, MapPin } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  companyUrl: string;
  logoKey: CompanyLogoKey;
  achievements: string[];
}

const experiences: Experience[] = [
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

const SimpleExperience = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-20 px-6">
      <div className="pointer-events-none absolute left-[10%] top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[15%] top-1/2 h-56 w-56 rounded-full bg-primary/10 blur-[110px]" />
      <div className="relative mx-auto max-w-5xl space-y-14">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="mx-auto w-fit px-4 py-1 text-xs uppercase tracking-[0.3em]">
            Experience
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl">Professional Journey</h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Highlights of the roles where I have delivered measurable impact across consulting, healthcare innovation,
            and campus wellness leadership.
          </p>
        </div>

        <div className="relative space-y-10">
          <div className="absolute inset-y-6 left-6 hidden w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:block" />
          {experiences.map((exp) => {
            const logo = companyLogos[exp.logoKey];

            return (
              <Card
                key={exp.company}
                className="relative border-border/60 bg-background/80 shadow-lg backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="grid gap-6 p-8 md:grid-cols-[auto,1fr]">
                  <div className="mx-auto flex flex-col items-center gap-4 text-center md:mx-0 md:text-left">
                    <div
                      className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-border/70 ${
                        logo.backgroundClassName ?? "bg-background"
                      }`}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        className={`h-full w-full object-contain ${logo.className ?? ""}`.trim()}
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold sm:text-xl">{exp.role}</h3>
                      <a
                        href={exp.companyUrl}
                        className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {exp.company}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-6">
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

                    <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3 rounded-lg border border-muted/40 bg-muted/30 p-3"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute -left-2 top-10 hidden h-4 w-4 rounded-full border-2 border-background bg-primary shadow-md md:block" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SimpleExperience;
