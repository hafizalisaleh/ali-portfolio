import { profile, stats } from "@/data/portfolio";

const About = () => (
  <section id="about" className="py-24">
    <div className="container grid gap-12 md:grid-cols-[1.3fr_1fr] items-center">
      <div className="reveal">
        <p className="section-kicker">01. About me</p>
        <h2 className="section-title mb-6">Turning data into useful things</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="reveal group rounded-xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg md:text-left"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="text-3xl font-extrabold gradient-text">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
