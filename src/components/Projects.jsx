import { useCallback, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { projects, projectCategories } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q ||
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.some((t) => t.toLowerCase().includes(q)))
    );
  }, [category, query]);

  const isFiltering = category !== "All" || query.trim();
  const visible = showAll || isFiltering ? filtered : filtered.slice(0, 6);

  // Reveal newly rendered cards after filtering
  useReveal([visible.length, category, query]);

  const countFor = (c) => (c === "All" ? projects.length : projects.filter((p) => p.category === c).length);

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div className="reveal mb-10 text-center">
          <p className="section-kicker">03. Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="mt-3 text-muted-foreground">Filter, search, or click a card for details.</p>
        </div>

        {/* Controls */}
        <div className="reveal mb-10 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex flex-wrap justify-center gap-2" role="tablist">
            {projectCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                  category === c
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                )}
              >
                {c} <span className="ml-1 opacity-60">{countFor(c)}</span>
              </button>
            ))}
          </div>

          <label className="relative w-full md:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or tech…"
              aria-label="Search projects"
              className="w-full rounded-full border border-input bg-card py-2 pl-9 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
        </div>

        {visible.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <div key={p.id} className="reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <ProjectCard project={p} onOpen={setSelected} />
              </div>
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-muted-foreground">No projects match "{query}".</p>
        )}

        {!isFiltering && filtered.length > 6 && (
          <div className="mt-10 text-center">
            <button onClick={() => setShowAll((s) => !s)} className="btn-outline">
              {showAll ? "Show less" : `Show all ${filtered.length} projects`}
            </button>
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={closeModal} />
    </section>
  );
};

export default Projects;
