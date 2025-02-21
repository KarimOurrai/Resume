import { Mail, Github, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-[#1a1e23]'} pt-24 px-8`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-6xl font-light mb-16 text-center ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Contact</h1>
        <div className="space-y-8">
          <a
            href="mailto:karim.ourrai@gmail.com"
            className={`flex items-center gap-4 transition-colors p-6 rounded-lg ${
              theme === 'light' 
                ? 'bg-white text-gray-700 hover:text-pink-500 shadow-md' 
                : 'bg-[#1e2329] text-white/70 hover:text-pink-500'
            }`}
          >
            <Mail className="h-8 w-8" />
            <div>
              <span className={`text-xl block ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Email</span>
              <span className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>karim.ourrai@gmail.com</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/karimourrai/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 transition-colors p-6 rounded-lg ${
              theme === 'light' 
                ? 'bg-white text-gray-700 hover:text-pink-500 shadow-md' 
                : 'bg-[#1e2329] text-white/70 hover:text-pink-500'
            }`}
          >
            <Linkedin className="h-8 w-8" />
            <div>
              <span className={`text-xl block ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>LinkedIn</span>
              <span className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>linkedin.com/in/karimourrai</span>
            </div>
          </a>
          <a
            href="https://github.com/KarimOurrai"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 transition-colors p-6 rounded-lg ${
              theme === 'light' 
                ? 'bg-white text-gray-700 hover:text-pink-500 shadow-md' 
                : 'bg-[#1e2329] text-white/70 hover:text-pink-500'
            }`}
          >
            <Github className="h-8 w-8" />
            <div>
              <span className={`text-xl block ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>GitHub</span>
              <span className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>github.com/KarimOurrai</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 