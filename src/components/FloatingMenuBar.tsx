import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { LucideIcon } from "lucide-react";
import { Linkedin, Mail, Moon, Newspaper, Sun, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

type SocialLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const socialLinks: SocialLink[] = [
  {
    href: "mailto:jmaroon@mail.wlu.edu",
    label: "Email Jackson",
    icon: Mail,
  },
  {
    href: "https://linkedin.com/in/jacksonmaroon",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://x.com/Jack_Maroon_",
    label: "Twitter",
    icon: Twitter,
  },
  {
    href: "https://substack.com/@jackmaroon?utm_source=user-menu",
    label: "Substack",
    icon: Newspaper,
  },
];

const FloatingMenuBar = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const htmlElement = document.documentElement;
    const storedTheme = window.localStorage.getItem("theme");
    const initialTheme: Theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : htmlElement.classList.contains("dark")
        ? "dark"
        : "light";

    htmlElement.classList.toggle("dark", initialTheme === "dark");
    setTheme(initialTheme);
  }, []);

  const handleToggleTheme = () => {
    if (typeof window === "undefined") {
      return;
    }

    setTheme((prevTheme) => {
      const nextTheme: Theme = prevTheme === "dark" ? "light" : "dark";
      const htmlElement = document.documentElement;

      htmlElement.classList.toggle("dark", nextTheme === "dark");
      window.localStorage.setItem("theme", nextTheme);

      return nextTheme;
    });
  };

  return (
    <nav
      aria-label="Quick access navigation"
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-border/60 bg-card/90 px-2 py-2 shadow-2xl backdrop-blur">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleTheme}
              className="relative overflow-hidden"
              aria-label={theme === "dark" ? "Activate light mode" : "Activate dark mode"}
            >
              <Sun
                className={cn(
                  "absolute inset-0 m-auto h-4 w-4 transition-all",
                  theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0",
                )}
              />
              <Moon
                className={cn(
                  "absolute inset-0 m-auto h-4 w-4 transition-all",
                  theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100",
                )}
              />
              <span className="sr-only">Toggle color theme</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">Toggle theme</TooltipContent>
        </Tooltip>

        <span aria-hidden="true" className="mx-1 h-6 w-px bg-border/60" />

        {socialLinks.map(({ href, label, icon: Icon }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{label}</span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </nav>
  );
};

export default FloatingMenuBar;
