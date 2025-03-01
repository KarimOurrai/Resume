import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const { theme } = useTheme();
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' }
  ];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    // Update document direction for RTL support
    document.documentElement.dir = languageCode === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className="relative flex items-center">
      <Globe className={`h-4 w-4 absolute ${i18n.dir() === 'rtl' ? 'right-2' : 'left-2'} ${
        theme === 'light' ? 'text-gray-600' : 'text-white/70'
      }`} />
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        aria-label="Select language"
        className={`
          appearance-none
          ${i18n.dir() === 'rtl' ? 'pr-8 pl-3' : 'pl-8 pr-3'}
          py-1.5
          rounded-md
          border-2
          transition-colors
          focus:outline-none
          focus:ring-2
          focus:ring-pink-500/20
          ${
            theme === 'light'
              ? 'bg-white text-gray-600 border-gray-200 hover:border-pink-500/50'
              : 'bg-[#1e2329] text-white/70 border-gray-700 hover:border-pink-500/50'
          }
        `}
      >
        {languages.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            className={`
              ${theme === 'light' ? 'text-gray-600' : 'text-white/70'}
              ${theme === 'light' ? 'bg-white' : 'bg-[#1e2329]'}
            `}
          >
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher; 