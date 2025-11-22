import client from "@/app/_lib/directus";
import { BlockButton, CustomDirectusTypes } from "@/app/_types/directusTypes";
import { QueryFields, readItem } from "@directus/sdk";
import { SoftButton } from "./ui/SoftButton";

export const ButtonRenderer = async ({ buttonId }: { buttonId: string }) => {
  const button = (await client.request(
    readItem("block_button", buttonId, {
      fields: [
        "*",
        "page.permalink",
        "translations.*",
        "page.translations.*",
      ] as QueryFields<CustomDirectusTypes, BlockButton> | undefined,
    }),
  )) as BlockButton;
  switch (button?.variant) {
    case "soft":
      return <SoftButton {...button} key={button.id} />;
    default:
      console.log("UNKNOWN", button?.variant);
      return null;
  }
};
