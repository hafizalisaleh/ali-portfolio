import { contactConfig, profile } from "@/data/portfolio";

// Send a contact message. Uses Google Forms if configured, otherwise opens the
// visitor's email app with the message pre-filled.
export const sendContactMessage = async ({ name, email, message }) => {
  const form = contactConfig.googleForm;

  if (!form) {
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    return { success: true, via: "email" };
  }

  try {
    const data = new FormData();
    data.append(form.entries.name, name);
    data.append(form.entries.email, email);
    data.append(form.entries.message, message);
    // Google Forms doesn't send CORS headers, so the response is opaque
    await fetch(form.actionUrl, { method: "POST", mode: "no-cors", body: data });
    return { success: true, via: "form" };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "Failed to send. Please email me directly." };
  }
};

// Latest public repos from GitHub (adapted from Profile-Generator's fetchGitHubProjects)
export const fetchGitHubRepos = async (username, count = 6) => {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=${count}`
    );
    if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
    const data = await res.json();
    return {
      data: data.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        url: repo.html_url,
        updatedAt: repo.updated_at,
      })),
      error: null,
    };
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return { data: null, error: "Couldn't load GitHub activity right now." };
  }
};
