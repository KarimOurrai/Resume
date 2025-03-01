import { useTheme } from "next-themes";
import { skillData } from '../lib/skill-data';

interface SkillLogoProps {
  name: string;
  url: string;
  className?: string;
}

const SkillLogo = ({ name, url, className = "" }: SkillLogoProps) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className={`group relative flex items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-pink-500/10 ${
        theme === 'light' ? 'bg-white/50' : 'bg-white/5'
      } ${className}`}
    >
      <img 
        src={url} 
        alt={name}
        className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-pink-500 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

export default SkillLogo;