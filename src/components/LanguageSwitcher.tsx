import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { Globe, ChevronDown, ChevronUp } from "lucide-react";
import * as Select from "@radix-ui/react-select";
import { useEffect } from "react";
import "../styles/select.css"; // import the custom select styles

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const { theme } = useTheme();

  useEffect(() => {
    // Set initial direction based on saved language
    const savedLang = localStorage.getItem("i18nextLng") || "en";
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
  ];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    const direction = languageCode === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
    localStorage.setItem("i18nextLng", languageCode);
  };

  return (
    <Select.Root value={i18n.language} onValueChange={changeLanguage}>
      <Select.Trigger
        className={`
          flex items-center gap-2 px-3 py-2 rounded-lg border-2
          transition-colors focus:outline-none focus:ring-2
          focus:ring-pink-500/20 shadow-md
          ${
            theme === "light"
              ? "bg-white text-gray-700 border-gray-300 hover:border-pink-500/50"
              : "bg-[#1a1e23] text-white/70 border-gray-700 hover:border-pink-500/50"
          }
        `}
      >
        <Globe className='h-4 w-4' />
        <Select.Value />
        <Select.Icon>
          <ChevronDown className='h-4 w-4' />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position='popper'
          sideOffset={5}
          align='start'
          avoidCollisions={true}
          className={`
            rounded-lg border-2 shadow-lg overflow-hidden
            fixed z-[9999] top-auto left-auto
            min-w-[180px] max-h-[300px]
            ${theme === "light" ? "bg-white border-gray-300" : "bg-[#1a1e23] border-gray-700"}
          `}
        >
          <Select.ScrollUpButton className='flex items-center justify-center h-[25px] bg-inherit text-pink-500'>
            <ChevronUp className='h-4 w-4' />
          </Select.ScrollUpButton>
          <Select.Viewport className='p-1'>
            {languages.map((lang) => (
              <Select.Item
                key={lang.code}
                value={lang.code}
                className={`
                  px-3 py-2 outline-none cursor-pointer
                  ${
                    theme === "light"
                      ? "text-gray-700 hover:bg-pink-500/10 focus:bg-pink-500/10"
                      : "text-white/70 hover:bg-pink-500/20 focus:bg-pink-500/20"
                  }
                `}
              >
                <Select.ItemText>{lang.name}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className='flex items-center justify-center h-[25px] bg-inherit text-pink-500'>
            <ChevronDown className='h-4 w-4' />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default LanguageSwitcher;
