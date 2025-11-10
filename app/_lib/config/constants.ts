const BACKEND_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || "";

export const DIRECTUS_URL = {
  BASE: BACKEND_URL,
  ASSETS: `${BACKEND_URL}/assets`,
};
