import client from "@/app/_lib/directus";
import type {
  CustomDirectusTypes,
  Globals,
  Navigation,
} from "@/app/_types/directusTypes";
import { QueryFields, readItems, readSingleton } from "@directus/sdk";
import Link from "next/link";
import { NavigationItem } from "./NavigationItem";
import { cookies } from "next/headers";
import Image from "next/image";
import { DIRECTUS_URL } from "@/app/_lib/config/constants";
import LanguageSelector from "../languageSelector/LanguageSelector";

const NavBar = async () => {
  /* Get Locale from cookies */

  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "es";

  const headerMenu = (await client.request(
    readItems("navigation", {
      filter: { title: { _eq: "Main Navigation" } },
      fields: ["*", "items.*.*", "items.page.translations.*"] as
        | QueryFields<CustomDirectusTypes, Navigation>
        | undefined,
    }),
  )) as Navigation[];

  const globalData = await client.request(
    readSingleton("globals", {
      fields: ["*"] as QueryFields<CustomDirectusTypes, Globals> | undefined,
    }),
  );

  const logoID = globalData?.logo;

  const headerNavigation = headerMenu[0];

  if (!headerNavigation || headerNavigation?.items?.length === 0) {
    return null;
  }

  //TODO: Add mobile menu
  //TODO: Fix submenu navigation

  return (
    <header className="main-container relative z-50 bg-transparent shadow">
      <div className="inner-container mx-auto">
        <div className="flex h-30">
          <div className="flex w-full items-center justify-between">
            <div className="flex shrink-0 items-center">
              <Link
                href={`/${locale}`}
                aria-label="Your Site - Home"
                className="relative aspect-5/2 w-50"
              >
                <Image
                  src={`${DIRECTUS_URL.ASSETS}/${logoID}`}
                  fill
                  className="object-cover"
                  alt={"Logo principal biotopia"}
                />
              </Link>
            </div>

            <nav
              aria-label="Main navigation"
              className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4"
            >
              {headerNavigation.items.map((item) => (
                <NavigationItem key={item.id} item={item} />
              ))}
              <LanguageSelector
                allowedLanguages={globalData?.available_languages || undefined}
              />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
