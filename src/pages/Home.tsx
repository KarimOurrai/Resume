import { Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./Home.module.css";
import TechCube from "../components/TechCube";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();

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
      {/* Left sidebar with social links */}
      <div className={`fixed left-0 h-16 w-screen lg:h-screen lg:w-16 flex flex-row lg:flex-col items-center justify-center gap-6 border-b lg:border-r border-pink-500/20 bg-[#1a1e23]/50 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none ${theme === 'light' ? 'border-pink-500/10' : 'border-pink-500/20'} z-10`}>
        <a
          href="mailto:karim.ourrai@gmail.com"
          className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors`}
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/karimourrai/"
          className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors`}
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/KarimOurrai"
          className={`${theme === 'light' ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 transition-colors`}
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-6 w-6" />
        </a>
      </div>

      {/* Right side image - fixed at top with scroll animation */}
      <div 
        className={`fixed right-2 sm:right-4 lg:right-8 top-20 lg:top-24 transition-all duration-300 transform ${styles.imageContainer}`}
        style={{"--scroll-y": `-${scrollY * 0.5}px`, "--image-opacity": imageTransform} as React.CSSProperties}
      >
        <div className="relative">
          <div className={`w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] border-4 border-pink-500 rounded-full transform rotate-6 ${theme === 'light' ? 'shadow-xl' : 'shadow-2xl'}`}></div>
          <img
            src="/karim-profile.png"
            alt="Karim Ourrai"
            className={`absolute top-0 left-0 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full -rotate-3 transition-transform hover:rotate-0 border-2 border-pink-500/30 ${theme === 'light' ? 'shadow-lg' : 'shadow-[0_0_30px_rgba(0,0,0,0.7)]'}`}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 px-4 lg:pl-24 lg:pr-8 pt-36 sm:pt-48 lg:pt-32">
        <div className="max-w-4xl">
          <h1 className={`text-2xl lg:text-3xl mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Hello! I am</h1>
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Karim Ourrai</h2>
          <div className="flex items-center gap-2 mb-6">
            <span className={`text-lg lg:text-xl ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Tech Lead</span>
            <span className="text-pink-500">•</span>
            <span className={`text-lg lg:text-xl ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Software Engineer</span>
          </div>
          <p className={`text-base lg:text-lg max-w-2xl mb-8 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            I'm a passionate Software Engineer who loves to write software to build great products 
            and help businesses succeed with their goals. With extensive experience in web development 
            across all layers - from databases to services to user interfaces - I appreciate good design 
            and am highly adaptable in quickly changing technical environments. My strong organizational 
            and analytical skills complement my technical expertise in Java/Java EE development and 
            modern web technologies.
          </p>
          <button
            onClick={() => scrollToSection("experience")}
            className={`inline-block bg-transparent border-2 border-pink-500 text-pink-500 px-6 lg:px-8 py-2 lg:py-3 rounded-lg hover:bg-pink-500 hover:text-white transition-all ${theme === 'light' ? 'shadow-md' : ''}`}
          >
            View my experience
          </button>

          <div className="mt-4 absolute left-1/2 -translate-x-1/2 w-full max-w-4xl">
            <TechCube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;