"use server";
import { QueryFields, readItems } from "@directus/sdk";
import client from "../_lib/directus";
import { CustomDirectusTypes, Pages } from "../_types/directusTypes";
import { getDirectusLang } from "../_lib/utils/getDirectusLang";

interface ValidateUrlPathProps {
  currentPath: string;
  locale: string;
}

export const validateUrlPPath = async ({
  currentPath,
  locale,
}: ValidateUrlPathProps) => {
  const lang = getDirectusLang(locale as string);
  try {
    const pageData = (await client.request(
      readItems("pages", {
        filter: {
          _or: [
            { permalink: { _eq: `/${currentPath}` } },
            // { permalink_en: { _eq: `/${slug}` } },
            {
              translations: {
                permalink: { _eq: `/${currentPath}` },
              },
            },
          ],
        },
        fields: ["*", "translations.*"] as
          | QueryFields<CustomDirectusTypes, Pages>
          | undefined,
      }),
    )) as Pages[];

    const translatedPageData = pageData?.[0]?.translations.find(
      (translation) => translation.languages_code === lang,
    );

    console.log(translatedPageData, "TRANSLATED PAGE DATA");
    const formattedPermalink =
      translatedPageData?.permalink || pageData?.[0]?.permalink;

    return formattedPermalink;
  } catch (error) {
    throw new Error("Error validating URL path");
  }
};
