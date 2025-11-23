import { DIRECTUS_URL } from "@/app/_lib/config/constants";
import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";
import { BlockGalleryShowcase } from "@/app/_types/directusTypes";
import Image from "next/image";

interface GallleryShowcaseProps {
  blockItem: BlockGalleryShowcase;
}

export const GalleryShowcase = async ({ blockItem }: GallleryShowcaseProps) => {
  const { lang } = await getLocaleFromCookies();
  const { images, pretitle, title_line_one, title_line_two, translations } =
    blockItem;

  const translationsByLang = translations.find(
    (translation) => translation.languages_code === lang,
  );

  const formattedTitleLineOne =
    translationsByLang?.title_line_one || title_line_one;

  const formattedTitleLineTwo =
    translationsByLang?.title_line_two || title_line_two;

  return (
    <div className="main-padding bg-amber-50">
      <div className="inner-container flex flex-wrap items-end gap-10 py-28 lg:flex-nowrap lg:gap-0">
        <div className="w-full pr-10 lg:w-1/3">
          <p>{`[ ${pretitle} ]`}</p>
          <h2 className="font-serif text-5xl leading-tight font-bold">
            <span className="text-mineral-900 block">
              {formattedTitleLineOne}
            </span>
            <span className="block text-gray-400">{formattedTitleLineTwo}</span>
          </h2>
        </div>

        <div className="gallery-showcase grid aspect-3/2 flex-1 grid-cols-3 grid-rows-2 gap-10">
          {images?.slice(0, 4).map((image) => {
            const translations = image?.translations;
            const translationsByLang = translations.find(
              (translation) => translation.languages_code === lang,
            );
            const formattedAlt = translationsByLang?.alt_text || image.alt_text;
            const imageSrc = image?.image_file;

            return (
              <div key={image.id} className="relative w-full">
                <Image
                  src={`${DIRECTUS_URL.ASSETS}/${imageSrc}`}
                  fill
                  className="object-cover"
                  alt={formattedAlt || "Imagen detallata de vegetación"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
