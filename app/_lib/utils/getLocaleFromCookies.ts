import { cookies } from "next/headers";
import { getDirectusLang } from "./getDirectusLang";

export async function getLocaleFromCookies() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "en";
  const lang = getDirectusLang(locale);
  return { locale, lang };
}
