import { BlockFeatures } from "@/app/_types/directusTypes";
import Image from "next/image";
import { FeaturedCard } from "./FeaturedCard";
import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";
import { DIRECTUS_URL } from "@/app/_lib/config/constants";
import clsx from "clsx";

interface FeaturedCardsProps {
  blockItems: BlockFeatures;
  background?: string | null;
}
export const FeaturedCards = async ({
  blockItems,
  background,
}: FeaturedCardsProps) => {
  const { feature_image, featured_card_id, featured_image_src, translations } =
    blockItems ?? {};
  const { lang } = await getLocaleFromCookies();

  const translationsByLang = translations.find(
    (translation) => translation.languages_code === lang,
  );

  const formattedSrc =
    translationsByLang?.featured_image_src || featured_image_src;

  return (
    <section
      className={clsx(
        "main-padding group",
        background === "dark"
          ? "dark-section bg-mineral-900 text-amber-50"
          : "text-mineral-900 bg-amber-50",
      )}
    >
      <div className="inner-container flex flex-col items-end py-25 sm:flex-row lg:py-50">
        <div className="relative hidden aspect-2/3 w-1/3 xl:block">
          <Image
            src={`${DIRECTUS_URL.ASSETS}/${feature_image}`}
            fill
            objectFit="cover"
            alt={formattedSrc || "Imagen detallata de un paisaje"}
          />
        </div>
        <div className="grid w-full grid-cols-1 gap-x-15 gap-y-20 sm:grid-cols-2 xl:w-2/3 xl:pl-15">
          {(featured_card_id as string[])?.map((featuredCard) => (
            <FeaturedCard id={featuredCard} key={featuredCard} />
          ))}
        </div>
      </div>
    </section>
  );
};
