import {
  BlockButtonGroup,
  BlockHero,
  CustomDirectusTypes,
} from "@/app/_types/directusTypes";
import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";
import client from "@/app/_lib/directus";
import { QueryFields, readItem } from "@directus/sdk";
import { ButtonRenderer } from "../../buttons/ButtonRenderer";
import { DIRECTUS_URL } from "@/app/_lib/config/constants";

export const HeroSection = async ({
  video_background,
  video_background_webp,
  headline,
  tagline,
  description,
  button_group,
  translations,
}: BlockHero) => {
  const { lang } = await getLocaleFromCookies();

  const { buttons } = await client.request(
    readItem("block_button_group", button_group ?? "", {
      fields: ["*", "translations.*"] as
        | QueryFields<CustomDirectusTypes, BlockButtonGroup>
        | undefined,
    }),
  );

  const translationsByLang = translations.find(
    (translation) => translation.languages_code === lang,
  );

  const formattedHeadline = translationsByLang?.headline || headline;
  const formattedTagline = translationsByLang?.tagline || tagline;
  const formattedDescription = translationsByLang?.description || description;

  return (
    <header className="relative flex h-screen w-full flex-col justify-end">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        autoPlay
        playsInline
      >
        <source
          src={`${DIRECTUS_URL.ASSETS}/${video_background}`}
          type="video/mp4"
        />
        <source
          src={`${DIRECTUS_URL.ASSETS}/${video_background_webp}`}
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
      <div className="bg-mineral-900/60 absolute inset-0 z-1"></div>
      <div className="main-padding">
        <div className="inner-container relative z-2 mb-20 flex flex-col gap-10 sm:mb-[20vh] sm:gap-16">
          <div className="flex flex-col gap-2 sm:gap-8">
            <h1 className="text-6xl font-normal text-amber-50 uppercase sm:text-8xl sm:leading-none xl:text-7xl 2xl:text-8xl">
              {formattedHeadline}
              {tagline && (
                <span className="block font-semibold">{formattedTagline}</span>
              )}
            </h1>
            {formattedDescription && (
              <p className="text-2xl font-light text-amber-50">
                {formattedDescription}
              </p>
            )}
          </div>
          <div className="flex gap-4">
            {buttons?.length &&
              buttons.map((button) => (
                <ButtonRenderer key={button} buttonId={button} />
              ))}
          </div>
        </div>
      </div>
    </header>
  );
};
