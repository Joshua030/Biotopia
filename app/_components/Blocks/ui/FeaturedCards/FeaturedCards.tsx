import { BlockFeatures } from "@/app/_types/directusTypes";
import Image from "next/image";
import { FeaturedCard } from "./FeaturedCard";
import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";
import { DIRECTUS_URL } from "@/app/_lib/config/constants";

export const FeaturedCards = async (featured_id: BlockFeatures) => {
  const { feature_image, featured_card_id, featured_image_src, translations } =
    featured_id ?? {};
  const { lang } = await getLocaleFromCookies();

  const translationsByLang = translations.find(
    (translation) => translation.languages_code === lang,
  );

  const formattedSrc =
    translationsByLang?.featured_image_src || featured_image_src;

  return (
    <section className="main-padding bg-amber-50">
      <div className="inner-container flex items-end py-50">
        <div className="relative aspect-2/3 w-1/3">
          <Image
            src={`${DIRECTUS_URL.ASSETS}/${feature_image}`}
            fill
            objectFit="cover"
            alt={formattedSrc || "Imagen detallata de un paisaje"}
          />
        </div>
        <div className="grid w-2/3 grid-cols-2 gap-x-15 gap-y-20 pl-15">
          {(featured_card_id as string[])?.map((featuredCard) => (
            <FeaturedCard id={featuredCard} key={featuredCard} />
          ))}
        </div>
      </div>
    </section>
  );
};
