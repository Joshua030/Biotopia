"use server";

import { QueryFields, readSingleton } from "@directus/sdk";
import client from "../_lib/directus";
import { CustomDirectusTypes, Globals } from "../_types/directusTypes";

export const getGlobalData = async () => {
  const globalData = await client.request(
    readSingleton("globals", {
      fields: ["*"] as QueryFields<CustomDirectusTypes, Globals> | undefined,
    }),
  );
  return globalData;
};
