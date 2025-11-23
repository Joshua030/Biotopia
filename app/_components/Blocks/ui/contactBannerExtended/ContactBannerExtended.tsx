import { DIRECTUS_URL } from "@/app/_lib/config/constants";
import client from "@/app/_lib/directus";
import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";
import type {
  BlockButton,
  BlockExtendedContact,
  CustomDirectusTypes,
} from "@/app/_types/directusTypes";
import { QueryFields, readItem } from "@directus/sdk";
import Image from "next/image";
import ContactLink from "./ContactLink";

interface ContactBannerExtendedProps {
  blockItem: BlockExtendedContact;
}

export const ContactBannerExtended = async ({
  blockItem,
}: ContactBannerExtendedProps) => {
  const { lang } = await getLocaleFromCookies();
  const {
    translations,
    background_image,
    background_image_alt,
    headline_highlight_word,
    headline_highlight_word_2,
    headline_line_1,
    headline_line_2,
    main_link,
  } = blockItem;

  //* Request to get data for link_button

  const button = (await client.request(
    readItem("block_button", (main_link as string) ?? "", {
      fields: ["*", "page.permalink", "page.translations", "translations.*"] as
        | QueryFields<CustomDirectusTypes, BlockButton>
        | undefined,
    }),
  )) as BlockButton;

  const translationsByLang = translations.find(
    (translation) => translation.languages_code === lang,
  );

  const formattedAlt =
    translationsByLang?.background_image_alt || background_image_alt;

  return (
    <section className="main-container bg-mineral-900 mt-30 aspect-6/2 lg:mt-80">
      <div className="inner-container">
        <div className="relative mx-auto flex aspect-15/9 w-full max-w-7xl -translate-y-30 transform items-end px-8 py-16 lg:-translate-y-50 lg:px-16">
          <ContactLink button={button} lang={lang} />
          <Image
            src={`${DIRECTUS_URL.ASSETS}/${background_image}`}
            fill
            className="z-1 object-cover"
            alt={formattedAlt || "Imagen detallata de vegetación"}
          />
          <div className="bg-mineral-900/40 absolute inset-0 z-1"></div>
          <div className="relative z-2 w-full lg:w-9/12">
            <h2 className="font-serif leading-tight font-bold sm:text-4xl lg:text-7xl">
              <span className="block">
                <span className="text-amber-50">{headline_line_1} </span>
                <span className="text-gray-300">{headline_highlight_word}</span>
              </span>
              <span className="block">
                <span className="text-gray-300">
                  {headline_highlight_word_2}{" "}
                </span>
                <span className="text-amber-50">{headline_line_2}</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
