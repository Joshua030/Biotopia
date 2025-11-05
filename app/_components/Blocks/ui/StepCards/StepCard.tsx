import client from "@/app/_lib/directus";
import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";
import { BlockStepCard, CustomDirectusTypes } from "@/app/_types/directusTypes";
import { QueryFields, readItem } from "@directus/sdk";

export const StepCard = async ({
  id,
  className,
}: {
  id: string;
  className: string;
}) => {
  const { lang } = await getLocaleFromCookies();
  const card = await client.request(
    readItem("block_step_card", id, {
      fields: ["*", "translations.*"] as
        | QueryFields<CustomDirectusTypes, BlockStepCard>
        | undefined,
    }),
  );

  const { card_text, card_title, translations } = card;

  const translationsByLang = translations?.find(
    (translation) => translation.languages_code === lang,
  );

  const formattedTitle = translationsByLang?.card_title || card_title;
  const formattedText = translationsByLang?.card_text || card_text;
  return (
    <div className={`flex flex-col ${className}`}>
      <h3>{formattedTitle}</h3>
      {formattedText && (
        <div dangerouslySetInnerHTML={{ __html: formattedText }} />
      )}
    </div>
  );
};
