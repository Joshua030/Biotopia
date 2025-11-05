// app/_lib/getDirectusLang.ts
export function getDirectusLang(locale: string): string {
  switch (locale) {
    case "en":
      return "en-US";
    case "fr":
      return "fr-FR";
    default:
      return "es-ES"; // fallback
  }
}
