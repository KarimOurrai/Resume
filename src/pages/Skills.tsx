import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import SkillLogo from "../components/SkillLogos";
import { skillLogos } from "../data/skillLogos";

const Skills = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={`min-h-screen pt-24 px-8 ${theme === 'light' ? 'bg-gray-100' : 'bg-[#1a1e23]'}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl lg:text-6xl font-light mb-16 text-center ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          {t('skills.title')}
        </h1>

        <div className="space-y-12">
          {Object.entries(skillLogos).map(([category, skills]) => (
            <div key={category} className={`p-8 rounded-lg ${theme === 'light' ? 'bg-white shadow-md' : 'bg-[#1e2329]'}`}>
              <h3 className={`text-2xl mb-8 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {t(`skills.categories.${category.toLowerCase()}`)}
              </h3>
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