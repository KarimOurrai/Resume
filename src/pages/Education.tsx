import { GraduationCap } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { education } from "../data/education";

const Education = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div
      className={`min-h-screen pt-24 px-8 ${theme === "light" ? "bg-gray-100" : "bg-[#1a1e23]"}`}
    >
      <div className='max-w-6xl mx-auto'>
        <h1
          className={`text-6xl font-light mb-16 text-center ${theme === "light" ? "text-gray-900" : "text-white"}`}
        >
          {t("education.title")}
        </h1>
        <div className='space-y-8'>
          {education.map((edu, index) => (
            <div key={index} className='relative pl-8 border-l-2 border-pink-500'>
              <div className='absolute -left-[11px] top-0'>
                <div className='w-5 h-5 rounded-full bg-pink-500' />
              </div>
              <div
                className={`p-6 rounded-lg ${theme === "light" ? "bg-white shadow-md" : "bg-[#1e2329]"}`}
              >
                <h3
                  className={`text-2xl mb-1 ${theme === "light" ? "text-gray-900" : "text-white"}`}
                >
                  {t(`education.degrees.${edu.id}.degree`)}
                </h3>
                <div className='flex items-center gap-2 mb-4'>
                  <GraduationCap className='h-4 w-4 text-pink-500' />
                  <span className='text-pink-500'>
                    {t(`education.degrees.${edu.id}.institution`)}
                  </span>
                  <span className={theme === "light" ? "text-gray-500" : "text-gray-400"}>
                    • {t(`education.degrees.${edu.id}.period`)}
                  </span>
                </div>
                <p className={theme === "light" ? "text-gray-600" : "text-gray-400"}>
                  {t(`education.degrees.${edu.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
