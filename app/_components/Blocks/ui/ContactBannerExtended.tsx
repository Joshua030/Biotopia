import { DIRECTUS_URL } from "@/app/_lib/config/constants";
import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";
import { BlockExtendedContact } from "@/app/_types/directusTypes";
import Image from "next/image";

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
  } = blockItem;
  console.log(blockItem, "blockItem");
  const translationsByLang = translations.find(
    (translation) => translation.languages_code === lang,
  );

  const formattedAlt =
    translationsByLang?.background_image_alt || background_image_alt;

  return (
    <section className="main-container bg-mineral-900 mt-100 aspect-6/2">
      <div className="inner-container">
        <div className="relative flex aspect-15/9 w-full -translate-y-50 transform items-end p-16">
          <Image
            src={`${DIRECTUS_URL.ASSETS}/${background_image}`}
            fill
            className="z-1 object-cover"
            alt={formattedAlt || "Imagen detallata de vegetación"}
          />
          <div className="bg-mineral-900/40 absolute inset-0 z-1"></div>
          <div className="relative z-2 w-9/12">
            <h2 className="font-serif text-7xl leading-tight font-bold">
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
