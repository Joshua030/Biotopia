import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";
import { BlockHeroStory } from "@/app/_types/directusTypes";
import { DIRECTUS_URL } from "@/app/_lib/config/constants";
import Image from "next/image";

interface HeroStoryProps {
  blockItem: BlockHeroStory;
}
const HeroStory = async ({ blockItem }: HeroStoryProps) => {
  const { lang } = await getLocaleFromCookies();
  const {
    title_line_1,
    title_line_2,
    title_line_3,
    description,
    translations,
    featured_video_mp4,
    featured_video_webm,
    featured_image,
    image_alt,
  } = blockItem;

  const translationsByLang = translations.find(
    (translation) => translation.languages_code === lang,
  );

  const formattedTitleLineOne =
    translationsByLang?.title_line_1 || title_line_1;
  const formattedTitleLineTwo =
    translationsByLang?.title_line_2 || title_line_2;
  const formattedTitleLineThree =
    translationsByLang?.title_line_3 || title_line_3;
  const formattedDescription =
    translationsByLang?.description || description || "";
  const formattedAlt = translationsByLang?.image_alt || image_alt;

  return (
    <section className="main-padding bg-amber-50">
      <div className="inner-container grid grid-cols-[1fr_2fr] gap-x-5 gap-y-20 py-20">
        <h2 className="font-serif text-5xl leading-tight font-bold">
          <span className="text-mineral-900 block">
            {formattedTitleLineOne}
          </span>
          <span className="block text-gray-400">{formattedTitleLineTwo}</span>
          <span className="text-mineral-900 block">
            {formattedTitleLineThree}
          </span>
        </h2>
        <div className="flex items-center">
          {formattedDescription && (
            <div dangerouslySetInnerHTML={{ __html: formattedDescription }} />
          )}
        </div>
        <video
          className="h-full w-full object-cover"
          muted
          loop
          autoPlay
          playsInline
        >
          <source
            src={`${DIRECTUS_URL.ASSETS}/${featured_video_mp4}`}
            type="video/mp4"
          />
          <source
            src={`${DIRECTUS_URL.ASSETS}/${featured_video_webm}`}
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative w-full">
          <Image
            src={`${DIRECTUS_URL.ASSETS}/${featured_image}`}
            fill
            objectFit="cover"
            alt={formattedAlt || "Imagen detallata de un paisaje"}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroStory;
