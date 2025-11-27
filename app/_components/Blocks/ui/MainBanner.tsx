import { DIRECTUS_URL } from "@/app/_lib/config/constants";
import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";
import { BlockMainBanner } from "@/app/_types/directusTypes";
import Image from "next/image";

export const MainBanner = async ({
  main_title,
  translations,
  background_image,
  background_image_mobile,
  image_alt,
}: BlockMainBanner) => {
  const { lang } = await getLocaleFromCookies();

  const translationsByLang = translations.find(
    (translation) => translation.languages_code === lang,
  );

  const formattedTitle = translationsByLang?.main_title || main_title;
  const formattedAlt = translationsByLang?.image_src || image_alt;

  return (
    <header className="relative flex aspect-square w-full flex-col justify-end sm:aspect-3/1">
      {/* Desktop Image */}
      <Image
        src={`${DIRECTUS_URL.ASSETS}/${background_image}`}
        fill
        className="hidden object-cover sm:block"
        alt={formattedAlt || "banner seccion acerca de nosotros"}
      />

      {/* Mobile Image */}
      {background_image_mobile && (
        <Image
          src={`${DIRECTUS_URL.ASSETS}/${background_image_mobile}`}
          fill
          className="block object-cover sm:hidden"
          alt={formattedAlt || "banner seccion acerca de nosotros"}
        />
      )}
      <div className="main-padding">
        <div className="inner-container relative z-2 mb-20 flex flex-col gap-16 xl:mb-[20vh]">
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl font-normal text-amber-50 uppercase sm:leading-none 2xl:text-8xl">
              {formattedTitle}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};
