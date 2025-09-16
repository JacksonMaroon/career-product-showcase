import SimpleHero from "@/components/SimpleHero";
import SimpleExperience from "@/components/SimpleExperience";
import SimpleProjects from "@/components/SimpleProjects";
import SimpleEducation from "@/components/SimpleEducation";
import SimpleContact from "@/components/SimpleContact";
import FloatingMenuBar from "@/components/FloatingMenuBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
            © 2025 Jackson Maroon
          </p>
        </div>
      </footer>
      <FloatingMenuBar />
    </div>
  );
};

export default Index;
