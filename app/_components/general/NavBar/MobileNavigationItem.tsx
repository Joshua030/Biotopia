"use client";

import { getDirectusLang } from "@/app/_lib/utils/getDirectusLang";
import { resolveButtonUrl } from "@/app/_lib/utils/resolveButtonUrl";
import { useUiStore } from "@/app/_store/menu.store";
import { NavigationItems } from "@/app/_types/directusTypes";
import Link from "next/link";
import { useParams } from "next/navigation";

interface NavigationItemProps {
  item: NavigationItems;
}

export function MobileNavigationItem({ item }: NavigationItemProps) {
  const { locale } = useParams();
  const lang = getDirectusLang(locale as string);
  const { href, target, rel, isExternal } = resolveButtonUrl(item, lang);
  const closeMenu = useUiStore((state) => state.closeSideMenu);

  // Mega menu dropdown (for groups with children)
  if (item.type === "group" && item.children && item.children.length > 0) {
    return (
      <div className="group relative">
        <h2>module in construction...</h2>
      </div>
    );
  }

  // Simple link (no dropdown)
  const linkClassNames =
    "text-mineral-900 px-3 py-2 text-2xl uppercase font-medium hover:opacity-70";

  const translationsByLang = item.translations.find(
    (translation) => translation.languages_code === lang,
  );

  const formattedTitle = translationsByLang?.title || item.title;

  return (
    <>
      {isExternal ? (
        <a href={href} target={target} rel={rel} className={linkClassNames}>
          {formattedTitle}
        </a>
      ) : (
        <Link
          href={href}
          className={linkClassNames}
          onClick={() => closeMenu()}
        >
          {formattedTitle}
        </Link>
      )}
    </>
  );
}
