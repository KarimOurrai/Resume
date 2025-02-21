import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2"
      >
        {isMenuOpen ? (
          <X className={`h-6 w-6 ${theme === 'light' ? 'text-gray-600' : 'text-white/70'}`} />
        ) : (
          <Menu className={`h-6 w-6 ${theme === 'light' ? 'text-gray-600' : 'text-white/70'}`} />
        )}
      </button>

      <nav className={`fixed top-0 right-0 z-40 ${!isMenuOpen ? 'lg:p-6' : ''}`}>
        {/* Navigation links */}
        <div 
          className={`fixed top-0 bottom-0 w-[50%] transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'right-0 flex flex-col pt-20 pb-4 px-0 bg-[#1a1e23] shadow-lg'
              : '-right-full lg:right-0 lg:w-auto lg:static lg:flex lg:items-center lg:gap-6 lg:bg-transparent lg:shadow-none'
          } ${theme === 'light' && isMenuOpen ? 'bg-white/90 backdrop-blur-sm' : ''}`}
        >
          <button 
            onClick={() => scrollToSection("home")}
            className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors px-8 py-4 lg:py-0 lg:px-0 text-left text-2xl lg:text-base`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("experience")}
            className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors px-8 py-4 lg:py-0 lg:px-0 text-left text-2xl lg:text-base`}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection("education")}
            className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors px-8 py-4 lg:py-0 lg:px-0 text-left text-2xl lg:text-base`}
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors px-8 py-4 lg:py-0 lg:px-0 text-left text-2xl lg:text-base`}
          >
            Contact
          </button>
          <div className={`px-8 py-4 lg:py-0 lg:px-0 ${isMenuOpen ? 'border-t border-pink-500/20 mt-auto' : ''}`}>
            <ThemeToggle />
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navigation;