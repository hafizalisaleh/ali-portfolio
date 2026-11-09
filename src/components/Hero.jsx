import { useRef } from "react";
import { ArrowDown, Download, Send } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { useTypewriter } from "@/hooks/useTypewriter";
import SocialIcon from "./SocialIcon";

const Hero = () => {
  const role = useTypewriter(profile.roles);
  const ref = useRef(null);

  // Spotlight that follows the mouse
  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      style={{ "--x": "50%", "--y": "40%" }}
    >
      {/* Background: grid + mouse spotlight */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] opacity-60" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(500px circle at var(--x) var(--y), hsl(var(--primary) / 0.15), transparent 70%)",
        }}
      />

      <div className="container relative grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="animate-fade-in-up">
          <p className="section-kicker">Hi, my name is</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className="mt-4 h-10 font-mono text-xl text-muted-foreground sm:text-2xl">
            {role}
            <span className="ml-0.5 inline-block w-[2px] h-6 align-middle bg-primary animate-blink" />
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn-outline">
              <Send className="h-4 w-4" /> Get in touch
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} download className="btn-outline">
                <Download className="h-4 w-4" /> Resume
              </a>
            )}
          </div>

          <div className="mt-8 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target={s.platform === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <SocialIcon platform={s.platform} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto hidden md:block">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary to-accent opacity-30 blur-2xl animate-pulse" />
          <img
            src={profile.avatar}
            alt={profile.name}
            className="relative h-72 w-72 rounded-full border-4 border-card object-cover shadow-2xl animate-float"
          />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
