import InlineSvgTrusted from "@/app/_components/general/InlineSvgTrusted";
import { DIRECTUS_URL } from "@/app/_lib/config/constants";
import client from "@/app/_lib/directus";
import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";
import { CustomDirectusTypes, FeatureCard } from "@/app/_types/directusTypes";
import { QueryFields, readItem } from "@directus/sdk";

export const FeaturedCard = async ({ id }: { id: string }) => {
  const card = await client.request(
    readItem("feature_card", id, {
      fields: ["*", "translations.*"] as
        | QueryFields<CustomDirectusTypes, FeatureCard>
        | undefined,
    }),
  );

  const { main_icon, translations, main_title, main_text } = card;

  const src = `${DIRECTUS_URL.ASSETS}/${main_icon}`;
  const { lang } = await getLocaleFromCookies();
  const translationsByLang = translations?.find(
    (translation) => translation.languages_code === lang,
  );

  const formattedTitle = translationsByLang?.main_title || main_title;
  const formattedText = translationsByLang?.main_text || main_text || "";
  return (
    <div className="flex flex-col items-start gap-8">
      <div className="bg-soft-green p-4 group-[.dark-section]:bg-amber-50">
        <InlineSvgTrusted
          src={src}
          width={45}
          height={45}
          alt={main_icon?.title || "Icono genérico"}
          className="fill-current"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-mineral-900 font-serif text-2xl font-semibold group-[.dark-section]:text-amber-50">
          {formattedTitle}
        </p>
        {main_text && (
          <div dangerouslySetInnerHTML={{ __html: formattedText }} />
        )}
      </div>
    </div>
  );
};
