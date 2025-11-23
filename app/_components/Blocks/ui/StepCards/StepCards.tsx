import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";
import { BlockSteps } from "@/app/_types/directusTypes";
import { StepCard } from "./StepCard";

export const StepCards = async ({
  section_title,
  translations,
  tag_text,
  steps,
}: BlockSteps) => {
  const { lang } = await getLocaleFromCookies();

  const translationsByLang = translations.find(
    (translation) => translation.languages_code === lang,
  );

  const formattedTitle = translationsByLang?.section_title || section_title;
  const formattedTag = translationsByLang?.tag_text || tag_text;
  return (
    <section className="main-padding bg-mineral-900">
      <div className="inner-container flex min-h-dvh flex-col justify-between py-25 text-amber-50 xl:py-20 2xl:py-25">
        <div className="flex flex-col-reverse items-start justify-between xl:flex-row">
          <h2
            className="max-w-4xl text-3xl leading-normal uppercase sm:text-5xl lg:text-7xl lg:leading-tight xl:text-6xl 2xl:text-7xl"
            dangerouslySetInnerHTML={{
              __html: formattedTitle?.replace("FOR", "FOR<br />") || "",
            }}
          />
          <p>{`[ ${formattedTag} ]`}</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-x-15 gap-y-20 sm:grid-cols-2 sm:pl-15 lg:mt-0 xl:mt-14 2xl:mt-0">
          {(steps as string[])?.map((stepCard, index) => {
            const className = index % 4 < 2 ? "sm:pr-20" : "sm:pl-20";
            return (
              <StepCard key={stepCard} id={stepCard} className={className} />
            );
          })}
        </div>
      </div>
    </section>
  );
};
