import { useEffect } from "react";
import { X, Github, ExternalLink } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
          aria-label="Close"
          autoFocus
        >
          <X className="h-5 w-5" />
        </button>

        <p className="section-kicker">{project.category}</p>
        <h3 id="project-modal-title" className="text-2xl font-bold pr-8">
          {project.title}
        </h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Github className="h-4 w-4" /> View code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
