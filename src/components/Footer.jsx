import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import SocialIcon from "./SocialIcon";
import { cn } from "@/lib/utils";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target={s.platform === "email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <SocialIcon platform={s.platform} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "fixed bottom-6 right-6 z-40 rounded-full bg-primary p-3 text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-1",
          showTop ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
