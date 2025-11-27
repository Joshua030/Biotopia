// app/_lib/directus-server.ts
import { createDirectus, rest, staticToken } from "@directus/sdk";
import { CustomDirectusTypes } from "../_types/directusTypes";

const BACKEND_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || "";
const DIRECTUS_TOKEN = process.env.DIRECTUS_STATIC_TOKEN || "";
console.log("DIRECTUS_TOKEN:", DIRECTUS_TOKEN);
const serverClient = createDirectus<CustomDirectusTypes>(BACKEND_URL)
  .with(staticToken(DIRECTUS_TOKEN))
  .with(
    rest({
      onRequest: (options) => ({ ...options, cache: "no-store" }),
    }),
  );

export default serverClient;
