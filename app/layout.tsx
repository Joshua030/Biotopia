import { cookies } from "next/headers";

// app/[locale]/layout.tsx
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const appCookies = await cookies();
  const locale = appCookies.get("NEXT_LOCALE")?.value ?? "en";
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
