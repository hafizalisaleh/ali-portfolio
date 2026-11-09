import { useRef } from "react";
import { Github, ExternalLink, Star, Brain, Eye, Globe, Box } from "lucide-react";

const categoryIcon = {
  "Machine Learning": Brain,
  "Computer Vision": Eye,
  Web: Globe,
};

// Based on Profile-Generator's ProjectCard, with a 3D tilt on hover
const ProjectCard = ({ project, onOpen }) => {
  const ref = useRef(null);
  const { title, description, tech, github, live, category, featured } = project;
  const Icon = categoryIcon[category] || Box;

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    ref.current.style.transform = "";
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onOpen(project))}
      tabIndex={0}
      role="button"
      aria-label={`Open details for ${title}`}
      className="group relative flex h-full cursor-pointer flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:shadow-xl hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 p-3 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex items-center gap-2">
          {featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
              <Star className="h-3 w-3" /> Featured
            </span>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${title} on GitHub`}
              className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${title} live demo`}
              className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{description}</p>

      <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectCard;
