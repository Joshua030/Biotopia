"use server";
import { QueryFields, readItems } from "@directus/sdk";
import client from "../_lib/directus";
import { CustomDirectusTypes, Navigation } from "../_types/directusTypes";

export const getMenuItems = async () => {
  try {
    const headerMenu = (await client.request(
      readItems("navigation", {
        filter: { title: { _eq: "Main Navigation" } },
        fields: ["*", "items.*.*", "items.page.translations.*"] as
          | QueryFields<CustomDirectusTypes, Navigation>
          | undefined,
      }),
    )) as Navigation[];

    const headerNavigation = headerMenu[0];
    return headerNavigation;
  } catch (error) {
    throw new Error("Error getting navigation menu items");
  }
};
