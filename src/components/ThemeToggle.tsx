import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => {
        console.log("Current theme:", theme);
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="relative p-2 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 ease-in-out"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <div
          className={`absolute inset-0 transform transition-transform duration-300 ${
            theme === "dark" ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <Sun className="h-5 w-5 text-yellow-500" />
        </div>
        <div
          className={`absolute inset-0 transform transition-transform duration-300 ${
            theme === "dark" ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <Moon className="h-5 w-5 text-blue-500" />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;