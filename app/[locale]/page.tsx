import { readItems } from "@directus/sdk";
import client from "../_lib/directus";

export default async function HomePage() {
  const homepageData = await client.request(
    readItems("pages", {
      filter: { permalink: { _eq: "/" } },
      fields: [
        "*",
        {
          blocks: ["*", "collection"],
        },
      ],
    }),
  );

  console.log(homepageData[0].blocks[0].collection);
  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}
