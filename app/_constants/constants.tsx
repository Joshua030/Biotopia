/***************************General ************************/

import { Supported, supportedLanguage } from "../_types/generalTypes";

export const SUPPORTED = ["en", "es"] as const;
export const DEFAULT_LANGUAGE: Supported = "es";
export const LANGUAGES: supportedLanguage[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  // { code: "fr", name: "French", flag: "🇫🇷" },
  // { code: "de", name: "German", flag: "🇩🇪" },
  // { code: "it", name: "Italian", flag: "🇮🇹" },
  // { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  // { code: "ru", name: "Russian", flag: "🇷🇺" },
  // { code: "zh", name: "Chinese", flag: "🇨🇳" },
];
