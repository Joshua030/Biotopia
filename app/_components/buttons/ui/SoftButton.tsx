import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";
import { resolveButtonUrl } from "@/app/_lib/utils/resolveButtonUrl";
import { BlockButton } from "@/app/_types/directusTypes";
import Link from "next/link";

export const SoftButton = async (button: BlockButton) => {
  const { lang } = await getLocaleFromCookies();
  const { href, target, rel, isExternal } = resolveButtonUrl(button, lang);
  const translationsByLang = button.translations.find(
    (translation) => translation.languages_code === lang,
  );

  const formattedLabel = translationsByLang?.label || button.label;
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className="button-shadow hover:bg-mineral-900 text-mineral-900 inline-block bg-amber-50 px-10 py-4 text-lg font-semibold transition duration-300 hover:text-amber-50 hover:opacity-90 hover:inset-shadow-sm 2xl:px-10 2xl:py-3 2xl:text-2xl 2xl:font-light"
    >
      {formattedLabel ?? "Learn more"}
      {isExternal && (
        <span aria-hidden="true" className="ml-1 inline-block">
          ↗
        </span>
      )}
    </Link>
  );
};
