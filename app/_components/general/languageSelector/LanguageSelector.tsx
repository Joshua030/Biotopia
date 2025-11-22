import { LANGUAGES } from "@/app/_constants/constants";
import { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { IoIosArrowDown, IoIosCheckmark } from "react-icons/io";

const LanguageSelector = () => {
  const languages = LANGUAGES;

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".language-dropdown")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="language-dropdown relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm transition-all duration-200 hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          aria-label="Select language"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <FaGlobe className="text-gray-500" />
          <span className="text-sm font-medium text-gray-700">
            {selectedLanguage.flag} {selectedLanguage.name}
          </span>
          <IoIosArrowDown
            className={`text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-2 max-h-60 w-56 overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg">
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
                    <IoIosCheckmark className="text-xl text-blue-500" />
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
