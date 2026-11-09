# Hafiz Ali Saleh — Portfolio

An interactive personal portfolio built with React, Vite and Tailwind CSS.

## Run it

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Edit the content

All text, projects, skills and links live in **`src/data/portfolio.js`**. Change that file. You don't need to touch any components.

- **Add a CV button:** put your PDF in `public/` and set `profile.resumeUrl` (e.g. `"/Ali-Saleh-CV.pdf"`).
- **Add LinkedIn etc.:** add entries to `socials`.
- **Add a live demo link to a project:** add `live: "https://..."` to it.
- **Contact form:** by default it opens the visitor's email app addressed to you. To collect messages in a Google Form instead, fill in `contactConfig.googleForm`.

## Interactive features

- Typewriter role animation and mouse-following spotlight in the hero
- Dark / light theme toggle (remembered per visitor)
- Scroll progress bar, active-section highlighting in the navbar, back-to-top button
- Scroll-reveal animations
- Project filter tabs, live search, 3D tilt cards and a details modal
- Skill highlighting on hover
- Live "recently updated" repos pulled from the GitHub API
- Validated contact form with copy-email button

## Structure

```
src/
  data/portfolio.js      ← all content
  components/            ← Navbar, Hero, About, Skills, Projects, ProjectCard,
                           ProjectModal, GitHubActivity, Contact, Footer, ...
  hooks/                 ← useReveal, useTypewriter, useActiveSection
  lib/                   ← api.js (GitHub + contact), utils.js (cn helper)
```
