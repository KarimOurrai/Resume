import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`fixed bottom-0 left-0 right-0 py-4 text-center text-sm ${theme === 'light' ? 'text-gray-600 bg-white/50' : 'text-gray-400 bg-[#1a1e23]/50'} backdrop-blur-sm border-t ${theme === 'light' ? 'border-pink-500/10' : 'border-pink-500/20'}`}>
      <div className="container mx-auto">
        © {currentYear} Karim Ourrai. {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer; 