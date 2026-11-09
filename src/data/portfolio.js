// ─────────────────────────────────────────────────────────────
//  All the portfolio content lives here.
//  Edit this file to update the site — no component changes needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Hafiz Ali Saleh",
  shortName: "Ali",
  // Rotating titles shown in the hero typewriter
  roles: [
    "Machine Learning Engineer",
    "Data Scientist",
    "Computer Vision Developer",
    "Full-Stack Developer",
  ],
  tagline:
    "I build machine-learning models for real-world environmental data and ship full-stack web apps.",
  about: [
    "I'm a developer who enjoys working where data meets the real world. Much of my recent work uses satellite data and machine learning to estimate air pollution — ground-level PM2.5 and black carbon — and turn it into something people can act on, like a smog hazard index.",
    "Alongside ML, I build full-stack web applications with React, Node.js, Express and MongoDB, and I've worked on computer-vision projects covering object tracking, motion estimation and face recognition.",
  ],
  avatar: "https://avatars.githubusercontent.com/u/156133378?v=4",
  email: "alisaleh7214@gmail.com",
  githubUsername: "hafizalisaleh",
  // Optional: link to a CV PDF placed in /public (e.g. "/Ali-Saleh-CV.pdf"). Leave empty to hide the button.
  resumeUrl: "",
};

export const socials = [
  { platform: "github", label: "GitHub", url: "https://github.com/hafizalisaleh" },
  { platform: "email", label: "Email", url: "mailto:alisaleh7214@gmail.com" },
  // Add more, e.g.:
  // { platform: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" },
];

// Quick stats shown in the About section
export const stats = [
  { value: "17", label: "Public repositories" },
  { value: "6+", label: "ML / CV projects" },
  { value: "3", label: "Full-stack apps" },
];

export const skillGroups = [
  {
    title: "Machine Learning & Data",
    icon: "brain",
    skills: ["Python", "scikit-learn", "Pandas", "NumPy", "Jupyter", "Data Visualization", "Model Drift Detection"],
  },
  {
    title: "Computer Vision",
    icon: "eye",
    skills: ["OpenCV", "Object Tracking", "Motion Estimation", "Face Recognition"],
  },
  {
    title: "Remote Sensing",
    icon: "satellite",
    skills: ["Satellite AOD", "MERRA-2 Reanalysis", "PM2.5 Estimation", "Black Carbon Retrieval"],
  },
  {
    title: "Web Development",
    icon: "code",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Other",
    icon: "wrench",
    skills: ["C++", "Git & GitHub", "Chatbots / LLM apps"],
  },
];

// Categories used by the project filter tabs
export const projectCategories = ["All", "Machine Learning", "Computer Vision", "Web", "Other"];

export const projects = [
  {
    id: "smog-hazard-index",
    title: "Smog Hazard Index",
    category: "Machine Learning",
    featured: true,
    description:
      "Machine-learning model that estimates ground-level PM2.5 from satellite AOD and meteorological data, used to build a prototype Smog Hazard Index that classifies smog severity from Low to Extreme.",
    tech: ["Python", "Jupyter", "Machine Learning", "Satellite AOD"],
    github: "https://github.com/hafizalisaleh/Smog-Hazard-Index",
  },
  {
    id: "bc-retrieval",
    title: "Satellite-based Black Carbon Retrieval",
    category: "Machine Learning",
    featured: true,
    description:
      "Model that estimates ground-level black carbon mass concentrations from satellite data, trained on aethalometer measurements and validated against MERRA-2 reanalysis.",
    tech: ["Python", "Machine Learning", "MERRA-2", "Remote Sensing"],
    github: "https://github.com/hafizalisaleh/Satellite-based-BC-Retrieval-",
  },
  {
    id: "churn",
    title: "Churn Segmentation & Drift Detection",
    category: "Machine Learning",
    featured: true,
    description:
      "Customer churn analysis that segments customers and monitors the model for data drift over time.",
    tech: ["Python", "Jupyter", "Clustering", "Drift Detection"],
    github: "https://github.com/hafizalisaleh/churn_segmentation_and_drift_detection",
  },
  {
    id: "inkwell",
    title: "InkWell.pk",
    category: "Web",
    featured: true,
    description:
      "A Pakistani publishing platform for writers and readers, with a paywall and AI-powered content moderation.",
    tech: ["JavaScript", "Full-Stack", "AI Moderation"],
    github: "https://github.com/hafizalisaleh/inkWell-pk",
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone (MERN)",
    category: "Web",
    featured: true,
    description:
      "A full-stack e-commerce clone built with MongoDB, Express, React and Node.js, with separate frontend and backend apps.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/hafizalisaleh/AmazonClone",
  },
  {
    id: "career-assistant",
    title: "Student Learning & Career Assistant",
    category: "Machine Learning",
    description: "A Python assistant to help students with learning and career guidance.",
    tech: ["Python", "AI"],
    github: "https://github.com/hafizalisaleh/Student-Learning-Career-Assistant",
  },
  {
    id: "object-tracking",
    title: "Object Tracking",
    category: "Computer Vision",
    featured: true,
    description: "Semester-end project for my Fundamentals of Computer Vision course, tracking objects across video frames.",
    tech: ["Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/hafizalisaleh/Object-Tracking",
  },
  {
    id: "motion-estimation",
    title: "Motion Estimation",
    category: "Computer Vision",
    description: "Estimating motion between video frames.",
    tech: ["Python", "Computer Vision"],
    github: "https://github.com/hafizalisaleh/motionEstimation",
  },
  {
    id: "face-recognition",
    title: "Face Recognition",
    category: "Computer Vision",
    description: "Face recognition experiments in a Jupyter notebook.",
    tech: ["Python", "Jupyter", "Computer Vision"],
    github: "https://github.com/hafizalisaleh/Face-Recognition",
  },
  {
    id: "movie-recommender",
    title: "Movie Recommender & Revenue Predictor",
    category: "Machine Learning",
    description:
      "Recommends movies based on user preferences and predicts their potential revenue, giving analytics for both viewers and film-industry stakeholders.",
    tech: ["Python", "Recommender Systems", "Regression"],
    github: "https://github.com/hafizalisaleh/movie-recommender-system",
  },
  {
    id: "grant-chatbot",
    title: "Grant ChatBot",
    category: "Machine Learning",
    description: "A chatbot that answers questions about grants.",
    tech: ["Python", "Chatbot"],
    github: "https://github.com/hafizalisaleh/Grant-ChatBot",
  },
  {
    id: "coffee-sales",
    title: "Coffee Shop Sales Analysis",
    category: "Other",
    description: "Sales data analysis and dashboarding for a coffee shop.",
    tech: ["Data Analysis"],
    github: "https://github.com/hafizalisaleh/Coffee-Shop-Sales",
  },
  {
    id: "space-invaders",
    title: "Space Invaders (C++)",
    category: "Other",
    description: "A Space Invaders game written in C++ in my first semester.",
    tech: ["C++", "Game Dev"],
    github: "https://github.com/hafizalisaleh/Semester1-Space-Invaders",
  },
];

// Contact form settings.
// With googleForm = null, the form opens the visitor's email app addressed to you.
// To collect messages in a Google Form instead, fill in the published form id
// (the "1FAIpQL..." part of the link) and the entry ids for each field.
export const contactConfig = {
  googleForm: null,
  // googleForm: {
  //   actionUrl: "https://docs.google.com/forms/d/e/1FAIpQL.../formResponse",
  //   entries: { name: "entry.000", email: "entry.000", message: "entry.000" },
  // },
};
