import { Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";
import TechCube from "../components/TechCube";
import AnimatedName from '../components/AnimatedName';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const imageTransform = Math.max(0, 1 - scrollY / 500);

  return (
    <div className={`min-h-screen flex flex-col lg:flex-row ${theme === 'light' ? 'bg-gray-100' : 'bg-[#1a1e23]'}`}>
      {/* Left/Right sidebar with social links */}
      <div className={`fixed ${isRTL ? 'right-0' : 'left-0'} h-16 w-screen lg:h-screen lg:w-16 flex flex-row lg:flex-col items-center justify-center gap-6 border-b lg:border-r border-pink-500/20 bg-[#1a1e23]/50 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none ${theme === 'light' ? 'border-pink-500/10' : 'border-pink-500/20'} z-10`}>
        <a
          href="mailto:karim.ourrai@gmail.com"
          className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors`}
          aria-label={t('contact.email')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/karimourrai/"
          className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors`}
          aria-label={t('contact.linkedin')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/KarimOurrai"
          className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors`}
          aria-label={t('contact.github')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-6 w-6" />
        </a>
      </div>

      {/* Image - fixed at top with scroll animation */}
      <div 
        className={`fixed ${isRTL ? 'left-8 sm:left-12 lg:left-32' : 'right-8 sm:right-12 lg:right-32'} top-24 transition-all duration-300 transform ${styles.imageContainer}`}
        style={{"--scroll-y": `-${scrollY * 0.5}px`, "--image-opacity": imageTransform} as React.CSSProperties}
      >
        <div className="relative w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px]">
          <div className={`absolute inset-0 ${styles.waveCircle}`}></div>
          <img
            src="/karim-profile.png"
            alt="Karim Ourrai"
            className={`absolute inset-0 w-full h-full object-cover rounded-full transition-transform hover:rotate-0`}
          />
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 ${isRTL ? 'lg:pr-24' : 'lg:pl-24'} pt-24 sm:pt-48 lg:pt-32 px-4 lg:px-8`}>
        <div className={`max-w-4xl ${isRTL ? 'mr-auto lg:ml-[500px]' : 'ml-0 lg:mr-[500px]'}`}>
          <h1 className={`text-2xl lg:text-3xl mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            {t('home.greeting')}
            <br />
            <AnimatedName 
              text={t('home.name')} 
              className="font-semibold"
            />
          </h1>
          <div className="flex items-center gap-2 mb-6">
            <span className={`text-lg lg:text-xl ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{t('home.roles.techLead')}</span>
            <span className="text-pink-500">•</span>
            <span className={`text-lg lg:text-xl ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{t('home.roles.softwareEngineer')}</span>
          </div>
          <p className={`text-base lg:text-lg max-w-2xl mb-8 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            {t('home.description')}
          </p>
          <button
            onClick={() => scrollToSection("experience")}
            className={`inline-block bg-transparent border-2 border-pink-500 text-pink-500 px-6 lg:px-8 py-2 lg:py-3 rounded-lg hover:bg-pink-500 hover:text-white transition-all ${theme === 'light' ? 'shadow-md' : ''}`}
          >
            {t('home.viewExperience')}
          </button>

          <div className="mt-[-50px] absolute left-1/2 -translate-x-1/2 w-full max-w-4xl">
            <TechCube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;