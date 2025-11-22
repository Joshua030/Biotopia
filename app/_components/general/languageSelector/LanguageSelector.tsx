"use client";
import { LANGUAGES } from "@/app/_constants/constants";
import type { Supported, supportedLanguage } from "@/app/_types/generalTypes";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { IoIosArrowDown, IoIosCheckmark } from "react-icons/io";
import * as translationApi from "@/app/_actions/translation.actions";

interface LanguageSelectorProps {
  allowedLanguages?: Supported[];
}

const LanguageSelector = ({ allowedLanguages }: LanguageSelectorProps) => {
  //* Filter languages based on allowedLanguages choose from directus
  const languages = LANGUAGES.filter(
    (lang) =>
      !allowedLanguages || allowedLanguages.includes(lang.code as Supported),
  );

  console.log(languages, "FILTERED LANGUAGES IN LANGUAGE SELECTOR");

  const { locale } = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] = useState<supportedLanguage>(
    languages.find((lang) => lang.code === locale) || languages[0],
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        !event.target.closest(".language-dropdown")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = async (language: supportedLanguage) => {
    setSelectedLanguage(language);
    setIsOpen(false);

    const slug = pathname.split("/").at(-2);
    try {
      const validatedPermalink = await translationApi.validateUrlPPath({
        currentPath: slug || "",
        locale: language.code as string,
      });

      // Split pathname into segments, replace locale and last segment
      const pathSegments = pathname.split("/").filter(Boolean);
      const localeIndex = pathSegments.findIndex((seg) => seg === locale);

      if (localeIndex !== -1) {
        pathSegments[localeIndex] = language.code; // Replace locale
      }

      // Replace the last segment with validated permalink
      pathSegments[pathSegments.length - 1] =
        (validatedPermalink && validatedPermalink.replace(/^\//, "")) ?? "";

      const newPathname = "/" + pathSegments.join("/");
      router.push(newPathname);
    } catch (error) {
      // Replace the current locale in the pathname with the new one
      const newPathname = pathname.replace(`/${locale}`, `/${language.code}`);
      router.push(newPathname);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="language-dropdown relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 border border-gray-300 bg-white px-4 py-2 shadow-sm transition-all duration-200 hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          aria-label="Select language"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <FaGlobe className="text-gray-500" />
          <span className="text-md font-medium text-gray-700">
            {selectedLanguage.flag}
          </span>
          <IoIosArrowDown
            className={`text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-2 max-h-60 w-36 overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg">
            <ul role="listbox" aria-label="Languages" className="py-1">
              {languages.map((language) => (
                <li
                  key={language.code}
                  role="option"
                  aria-selected={selectedLanguage.code === language.code}
                  onClick={() => handleLanguageChange(language)}
                  className={`flex cursor-pointer items-center justify-between px-4 py-2 text-sm transition-colors duration-150 hover:bg-blue-50 ${selectedLanguage.code === language.code ? "bg-blue-50" : ""}`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-base">{language.flag}</span>
                    <span className="text-gray-700">{language.name}</span>
                  </div>
                  {selectedLanguage.code === language.code && (
                    <IoIosCheckmark className="text-mineral-900 text-xl" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
