import { useTheme } from "next-themes";
import SkillLogo from "../components/SkillLogos";
import { skillLogos } from "../data/skillLogos";
import TechCube from "../components/TechCube";

const Skills = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen pt-24 px-8 ${theme === 'light' ? 'bg-gray-100' : 'bg-[#1a1e23]'}`}>
      <div className="max-w-6xl mx-auto">
        {/* 3D Rotating Tech Cube */}
        <div className="mb-8">
          <TechCube />
        </div>
        
        <h1 className={`text-6xl font-light mb-16 text-center ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Technical Skills</h1>

        <div className="space-y-12">
          {Object.entries(skillLogos).map(([category, skills]) => (
            <div key={category} className={`p-8 rounded-lg ${theme === 'light' ? 'bg-white shadow-md' : 'bg-[#1e2329]'}`}>
              <h3 className={`text-2xl mb-8 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Object.entries(skills).map(([name, url]) => (
                  <SkillLogo key={name} name={name} url={url} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 