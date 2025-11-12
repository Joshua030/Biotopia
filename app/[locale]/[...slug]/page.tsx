import { BlockRenderer } from "@/app/_components/Blocks/BlockRenderer";
import client from "@/app/_lib/directus";
import { CustomDirectusTypes, Pages } from "@/app/_types/directusTypes";
import { QueryFields, readItems } from "@directus/sdk";

interface HomePageProps {
  params: { locale: string; slug: string };
}

export default async function DefaultPage({ params }: HomePageProps) {
  const { slug } = await params;
  const homepageData = await client.request(
    readItems("pages", {
      filter: {
        _or: [
          { permalink: { _eq: `/${slug}` } },
          { permalink_en: { _eq: `/${slug}` } },
        ],
      },
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
      <BlockRenderer blocks={homepageData[0]?.blocks} />
    </div>
  );
}
