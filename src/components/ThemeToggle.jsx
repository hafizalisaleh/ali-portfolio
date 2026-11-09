import { useState } from "react";
import { Moon, Sun } from "lucide-react";

// Adapted from Profile-Generator's ThemeToggle. The initial theme is applied
// by a small script in index.html so there's no flash on load.
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const next = !darkMode;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable — theme still switches for this visit */
    }
    setDarkMode(next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 transition-all duration-300 hover:bg-secondary flex items-center justify-center"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-yellow-300 transition-transform duration-500 rotate-0 hover:rotate-90" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-500 hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
