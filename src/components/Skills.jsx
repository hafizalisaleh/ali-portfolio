import { useState } from "react";
import { Brain, Eye, Satellite, Code2, Wrench } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const icons = { brain: Brain, eye: Eye, satellite: Satellite, code: Code2, wrench: Wrench };

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="py-24 bg-secondary/40">
      <div className="container">
        <div className="reveal mb-12 text-center">
          <p className="section-kicker">02. Skills</p>
          <h2 className="section-title">What I work with</h2>
          <p className="mt-3 text-muted-foreground">The tools and areas I use across my projects.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] || Code2;
            return (
              <div
                key={group.title}
                className="reveal rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/40"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      onMouseEnter={() => setHovered(skill)}
                      onMouseLeave={() => setHovered(null)}
                      className={cn(
                        "chip cursor-default transition-all duration-200",
                        hovered === skill && "border-primary bg-primary text-primary-foreground scale-110",
                        hovered && hovered !== skill && "opacity-50"
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
