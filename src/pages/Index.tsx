import SimpleHero from "@/components/SimpleHero";
import SimpleExperience from "@/components/SimpleExperience";
import SimpleProjects from "@/components/SimpleProjects";
import SimpleEducation from "@/components/SimpleEducation";
import SimpleContact from "@/components/SimpleContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <SimpleHero />
        <SimpleExperience />
        <SimpleProjects />
        <SimpleEducation />
        <SimpleContact />
      </main>
      <footer className="py-8 px-6 text-center border-t">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground">
            © 2024 Jackson Maroon. Built with passion for product management.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
