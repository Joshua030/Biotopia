"use client";

import { getDirectusLang } from "@/app/_lib/utils/getDirectusLang";
import { resolveButtonUrl } from "@/app/_lib/utils/resolveButtonUrl";
import { NavigationItems } from "@/app/_types/directusTypes";
import Link from "next/link";
import { useParams } from "next/navigation";

interface NavigationItemProps {
  item: NavigationItems;
}

export function NavigationItem({ item }: NavigationItemProps) {
  const { locale } = useParams();
  const lang = getDirectusLang(locale as string);
  const { href, target, rel, isExternal } = resolveButtonUrl(item, lang);

  // Mega menu dropdown (for groups with children)
  if (item.type === "group" && item.children && item.children.length > 0) {
    return (
      <div className="group relative">
        <button
          type="button"
          className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
        >
          {item.title}
          <svg
            className="ml-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Mega Menu Dropdown */}
        <div className="invisible absolute left-0 z-50 mt-2 w-screen max-w-6xl -translate-x-1/4 transform rounded-lg border border-gray-200 bg-white opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
          <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-3">
            {item.children.map((child) => (
              <div key={child.id}>
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  {child.title}
                </h3>
                {child.children && child.children.length > 0 ? (
                  <ul className="space-y-3">
                    {child.children.map((subChild) => {
                      const subChildUrl = resolveButtonUrl(subChild, lang);
                      return (
                        <li key={subChild.id}>
                          {subChildUrl.isExternal ? (
                            <a
                              href={subChildUrl.href}
                              target={subChildUrl.target}
                              rel={subChildUrl.rel}
                              className="text-gray-600 hover:text-indigo-600"
                            >
                              {subChild.title}
                            </a>
                          ) : (
                            <Link
                              href={subChildUrl.href}
                              className="text-gray-600 hover:text-indigo-600"
                            >
                              {subChild.title}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-600"></p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Simple link (no dropdown)
  const linkClassNames =
    "text-amber-50 hover:bg-mineral-900 px-3 py-2 rounded-md text-md uppercase font-medium inline-flex items-center";

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
        <Link href={href} className={linkClassNames}>
          {formattedTitle}
        </Link>
      )}
    </>
  );
}
