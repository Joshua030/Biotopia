import { createDirectus, rest, authentication } from "@directus/sdk";
import { CustomDirectusTypes } from "../_types/directusTypes";
const BACKEND_URL = "http://localhost:8055/";
const client = createDirectus<CustomDirectusTypes>(BACKEND_URL)
  .with(authentication("json"))
  .with(
    rest({
      onRequest: (options) => ({ ...options, cache: "no-store" }),
    }),
  );
export default client;
