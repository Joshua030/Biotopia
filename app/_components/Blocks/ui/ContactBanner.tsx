import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";
import {
  BlockButtonGroup,
  BlockContact,
  CustomDirectusTypes,
} from "@/app/_types/directusTypes";
import { ButtonRenderer } from "../../buttons/ButtonRenderer";
import client from "@/app/_lib/directus";
import { QueryFields, readItem } from "@directus/sdk";
import Image from "next/image";
import { DIRECTUS_URL } from "@/app/_lib/config/constants";

export const ContactBanner = async ({
  main_title,
  button_group,
  translations,
  background_image,
  image_src,
}: BlockContact) => {
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

  const formattedTitle = translationsByLang?.main_title || main_title;
  const formattedSrc =
    translationsByLang?.image_src ||
    image_src ||
    "Imagen de banner de contacto";
  return (
    <div className="main-padding relative">
      <Image
        src={`${DIRECTUS_URL.ASSETS}/${background_image}`}
        fill
        className="object-cover"
        alt={formattedSrc}
      />
      <div className="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.23)] to-[rgba(0,0,0,0.23)]"></div>
      <div className="inner-container relative z-2 flex min-h-[522px] flex-col gap-8 py-25">
        <h2 className="max-w-[900px] text-6xl leading-[1.2] font-semibold text-amber-50 uppercase">
          {formattedTitle}
        </h2>
        <div className="flex gap-4">
          {buttons?.length &&
            buttons.map((button) => (
              <ButtonRenderer key={button} buttonId={button} />
            ))}
        </div>
      </div>
    </div>
  );
};
