import { cookies } from "next/headers";
import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

// app/[locale]/layout.tsx
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const appCookies = await cookies();
  const locale = appCookies.get("NEXT_LOCALE")?.value ?? "es";
  return (
    <html lang={locale} className={`${manrope.variable} ${fraunces.variable}`}>
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
