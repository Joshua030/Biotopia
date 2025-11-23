import { cookies } from "next/headers";
import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";
import { DIRECTUS_URL } from "./_lib/config/constants";
import { getGlobalData } from "./_actions/global.actions";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const appCookies = await cookies();
  const locale = appCookies.get("NEXT_LOCALE")?.value ?? "es";
  const globalData = await getGlobalData();
  const faviconId = globalData?.favicon;
  const baseUrl = `${DIRECTUS_URL.ASSETS}/${faviconId}`;

  // Use Directus image transformation parameters
  const favicon16 = `${baseUrl}?width=16&height=16&fit=cover&format=png`;
  const favicon32 = `${baseUrl}?width=32&height=32&fit=cover&format=png`;
  const favicon96 = `${baseUrl}?width=96&height=96&fit=cover&format=png`;
  const faviconApple = `${baseUrl}?width=180&height=180&fit=cover&format=png`;
  const faviconSvg = `${baseUrl}?format=auto`; // Use original if SVG, or convert if needed

  return (
    <html lang={locale} className={`${manrope.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
        <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
        <link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href={faviconSvg} />
        <link rel="shortcut icon" href={favicon32} />
        <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
      </head>
      <body className="bg-amber-50">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-black focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
