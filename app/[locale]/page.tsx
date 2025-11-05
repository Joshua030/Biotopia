import { QueryFields, readItems } from "@directus/sdk";
import client from "../_lib/directus";
import { BlockRenderer } from "../_components/Blocks/BlockRenderer";
import { CustomDirectusTypes, Pages } from "../_types/directusTypes";

interface HomePageProps {
  params: { locale: string };
}

export default async function HomePage({ params }: HomePageProps) {
  const homepageData = await client.request(
    readItems("pages", {
      filter: { permalink: { _eq: "/" } },
      fields: [
        "*",
        "blocks.*",
        "blocks.item.*",
        "blocks.item.translations.*",
      ] as QueryFields<CustomDirectusTypes, Pages> | undefined,
    }),
  );

  return (
    <div>
      <BlockRenderer blocks={homepageData[0].blocks} />
    </div>
  );
}
