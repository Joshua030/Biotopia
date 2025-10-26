// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LANGUAGE, SUPPORTED } from "./app/_constants/constants";
import { Supported } from "./app/_types/generalTypes";

const PUBLIC_FILE = /\.(.*)$/;

function pickSupportedLocaleFromHeader(header: string | null): string {
  if (!header) return DEFAULT_LANGUAGE;
  const langs = header
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase());
  for (const raw of langs) {
    if (!raw) continue;
    const base = raw.split("-")[0];
    if (SUPPORTED.includes(raw as Supported)) return raw;
    if (SUPPORTED.includes(base as Supported)) return base;
  }
  return DEFAULT_LANGUAGE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const localePattern = SUPPORTED.join("|");
  const match = pathname.match(new RegExp(`^\\/(${localePattern})(\\/|$)`));
  const hasLocalePrefix = !!match;
  const prefixedLocale = match?.[1];

  // If path already has a locale, ensure cookie matches and continue
  if (hasLocalePrefix) {
    const res = NextResponse.next();
    if (
      prefixedLocale &&
      req.cookies.get("NEXT_LOCALE")?.value !== prefixedLocale
    ) {
      res.cookies.set("NEXT_LOCALE", prefixedLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }
    return res;
  }

  // Pick locale (cookie > header > default)
  const cookieLocale: Supported | undefined = req.cookies.get("NEXT_LOCALE")
    ?.value as Supported;
  const headerLocale = pickSupportedLocaleFromHeader(
    req.headers.get("accept-language"),
  );
  const chosen = SUPPORTED.includes(cookieLocale ?? DEFAULT_LANGUAGE)
    ? (cookieLocale as Supported)
    : headerLocale;

  const url = req.nextUrl.clone();
  url.pathname = `/${chosen}${pathname}`;

  const res = NextResponse.redirect(url);
  res.cookies.set("NEXT_LOCALE", chosen, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}

export const config = {
  // Your original had ".*..*" (double dot). Use this safer matcher:
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
