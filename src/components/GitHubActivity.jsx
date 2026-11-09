import { useEffect, useState } from "react";
import { Github, Star, RefreshCw } from "lucide-react";
import { profile } from "@/data/portfolio";
import { fetchGitHubRepos } from "@/lib/api";

const langColor = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  "Jupyter Notebook": "#DA5B0B",
  "C++": "#f34b7d",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
};

const timeAgo = (iso) => {
  const days = Math.floor((Date.now() - new Date(iso)) / 86400000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
};

// Live list of the latest repos, pulled from the GitHub API when the page loads
const GitHubActivity = () => {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data, error } = await fetchGitHubRepos(profile.githubUsername, 6);
    setRepos(data);
    setError(error);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section id="github" className="py-24 bg-secondary/40">
      <div className="container">
        <div className="reveal mb-10 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="section-kicker">04. Live from GitHub</p>
            <h2 className="section-title">Recently updated</h2>
          </div>
          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github className="h-4 w-4" /> @{profile.githubUsername}
          </a>
        </div>

        {loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-28 animate-pulse rounded-xl border border-border bg-card" />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">{error}</p>
            <button onClick={load} className="btn-outline mt-4">
              <RefreshCw className="h-4 w-4" /> Try again
            </button>
          </div>
        )}

        {!loading && repos && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((r) => (
              <a
                key={r.id}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                <div className="flex items-center gap-2 font-mono text-sm font-medium group-hover:text-primary">
                  <Github className="h-4 w-4 shrink-0" />
                  <span className="truncate">{r.name}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {r.description || "No description yet."}
                </p>
                <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-muted-foreground">
                  {r.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: langColor[r.language] || "hsl(var(--primary))" }}
                      />
                      {r.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" /> {r.stars}
                  </span>
                  <span className="ml-auto">{timeAgo(r.updatedAt)}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubActivity;
