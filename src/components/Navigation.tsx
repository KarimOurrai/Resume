import { Link } from "react-router-dom";
import { Home, Briefcase, Code } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-secondary p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold flex items-center gap-2">
          <Code className="h-6 w-6" />
          <span>Karim Ourra</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-white hover:text-accent flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link to="/resume" className="text-white hover:text-accent flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span>Resume</span>
          </Link>
          <Link to="/portfolio" className="text-white hover:text-accent flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span>Portfolio</span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;