import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isRTL = i18n.dir() === 'rtl';
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 right-0 z-[999] w-full">
      {/* Mobile menu button */}
      <div className={`lg:hidden absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-50`}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg bg-[#1a1e23] shadow-lg border border-pink-500/20 hover:bg-pink-500/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5 text-white/70" />
          ) : (
            <Menu className="h-5 w-5 text-white/70" />
          )}
        </button>
      </div>

      {/* Navigation links */}
      <div 
        className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} bottom-0 w-[80%] sm:w-[50%] transition-transform duration-300 ease-in-out ${
          isMenuOpen 
            ? 'translate-x-0 flex flex-col pt-16 pb-4 px-0 bg-[#1a1e23] shadow-lg'
            : `${isRTL ? '-translate-x-full' : 'translate-x-full'} lg:translate-x-0 lg:w-auto lg:static lg:flex lg:justify-end lg:bg-transparent lg:shadow-none`
        } ${theme === 'light' && isMenuOpen ? 'bg-white/90 backdrop-blur-sm' : ''}`}
      >
        <div className="lg:flex lg:items-center lg:gap-6 lg:pr-4">
          <button 
            onClick={() => scrollToSection("home")}
            className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors px-8 py-4 lg:py-0 lg:px-4 ${isRTL ? 'text-right' : 'text-left'} text-2xl lg:text-base`}
          >
            {t('navigation.about')}
          </button>
          <button 
            onClick={() => scrollToSection("experience")}
            className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors px-8 py-4 lg:py-0 lg:px-4 ${isRTL ? 'text-right' : 'text-left'} text-2xl lg:text-base`}
          >
            {t('navigation.experience')}
          </button>
          <button 
            onClick={() => scrollToSection("education")}
            className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors px-8 py-4 lg:py-0 lg:px-4 ${isRTL ? 'text-right' : 'text-left'} text-2xl lg:text-base`}
          >
            {t('navigation.education')}
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors px-8 py-4 lg:py-0 lg:px-4 ${isRTL ? 'text-right' : 'text-left'} text-2xl lg:text-base`}
          >
            {t('navigation.contact')}
          </button>
          <div className={`px-8 py-4 lg:py-0 lg:px-4 ${isMenuOpen ? 'border-t border-pink-500/20 mt-auto' : ''} flex items-center gap-4`}>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
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
  );
};

export default Navigation;