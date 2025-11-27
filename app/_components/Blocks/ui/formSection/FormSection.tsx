import client from "@/app/_lib/directus";
import type {
  BlockForm,
  CustomDirectusTypes,
  Forms,
  Globals,
} from "@/app/_types/directusTypes";
import { QueryFields, readItem, readSingleton } from "@directus/sdk";
import ClientForm from "./ClientForm";
import { getLocaleFromCookies } from "@/app/_lib/utils/getLocaleFromCookies";

interface FormSectionProps {
  blockItem: BlockForm;
}

export const FormSection = async ({ blockItem }: FormSectionProps) => {
  const formId = typeof blockItem.form === "string" ? blockItem.form : "";
  const { lang } = await getLocaleFromCookies();

  const [form, globalData] = await Promise.all([
    client.request(
      readItem("forms", formId, {
        fields: ["*", "fields.*", "fields.translations.*", "translations.*"] as
          | QueryFields<CustomDirectusTypes, Forms>
          | undefined,
      }),
    ) as Promise<Forms>,
    client.request(
      readSingleton("globals", {
        fields: [
          "phone_label",
          "phone_value",
          "address_label",
          "address_value",
          "country",
          "city",
          "translations.*",
        ] as QueryFields<CustomDirectusTypes, Globals> | undefined,
      }),
    ),
  ]);

  const translationsByLang = globalData?.translations?.find(
    (translation) => translation.languages_code === lang,
  );

  const {
    address_label,
    phone_label,
    address_value,
    phone_value,
    city,
    country,
  } = globalData;

  const AddressLabel =
    translationsByLang?.address_label || address_label || "Address";
  const PhoneLabel = translationsByLang?.phone_label || phone_label || "Phone";

  return (
    <div className="main-padding">
      <div className="inner-container flex flex-col gap-20 py-25 sm:flex-row sm:gap-36 sm:py-35">
        <div className="flex-1">
          <ClientForm form={form} />
        </div>
        <div className="flex w-full gap-8 sm:w-1/3 sm:flex-col">
          <div className="flex flex-col gap-4">
            <p className="mb-0 text-xl font-bold">{AddressLabel}</p>
            <div className="group flex flex-col space-y-0 text-[#707070] [&>p]:text-xl [&>p:last-child]:mb-0">
              {address_value && <p>{address_value}</p>}
              {city && <p>{city}</p>}
              {country && <p>{country}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:mt-10">
            <p className="mb-0 text-xl font-bold">{PhoneLabel}</p>
            {phone_value && (
              <p className="text-xl text-[#707070]">{phone_value}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
