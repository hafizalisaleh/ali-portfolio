import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "Activity" },
  { id: "contact", label: "Contact" },
];
const ids = links.map((l) => l.id);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      )}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute left-0 top-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <nav className="container flex h-16 items-center justify-between">
        <a href="#home" className="font-mono text-lg font-bold">
          <span className="text-primary">&lt;</span>
          {profile.shortName}
          <span className="text-primary"> /&gt;</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active === l.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform duration-300 origin-left",
                    active === l.id ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            className="md:hidden rounded-full p-2 hover:bg-secondary"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-b border-border bg-background/95 backdrop-blur-lg transition-[max-height] duration-300",
          open ? "max-h-96" : "max-h-0 border-transparent"
        )}
      >
        <ul className="container flex flex-col py-2">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-3 text-sm font-medium",
                  active === l.id ? "text-primary bg-secondary" : "text-muted-foreground"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
