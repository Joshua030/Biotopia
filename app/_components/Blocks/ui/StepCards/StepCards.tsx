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
      <div className="inner-container flex min-h-dvh flex-col justify-between py-25 text-amber-50">
        <div className="flex items-start justify-between">
          <h2
            className="max-w-4xl text-7xl uppercase"
            dangerouslySetInnerHTML={{
              __html: formattedTitle?.replace("FOR", "FOR<br />") || "",
            }}
          />
          <p>{`[ ${formattedTag} ]`}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-15 gap-y-20 pl-15">
          {(steps as string[])?.map((stepCard, index) => {
            const className = index % 4 < 2 ? "pr-20" : "pl-20";
            return (
              <StepCard key={stepCard} id={stepCard} className={className} />
            );
          })}
        </div>
      </div>
    </section>
  );
};
