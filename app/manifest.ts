import type { MetadataRoute } from "next";
import { getGlobalData } from "./_actions/global.actions";
import { DIRECTUS_URL } from "./_lib/config/constants";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const globalData = await getGlobalData();

  const faviconId = globalData?.favicon;
  const baseUrl = faviconId
    ? `${DIRECTUS_URL.ASSETS}/${faviconId}`
    : "/favicon.ico";

  return {
    name: globalData?.title || "Next.js App",
    short_name: globalData?.tagline || "App",
    description: globalData?.description || "Next.js App",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: `${baseUrl}?width=192&height=192&fit=cover&format=png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${baseUrl}?width=512&height=512&fit=cover&format=png`,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: baseUrl,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
