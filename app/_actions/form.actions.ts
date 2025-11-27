"use server";
import { createItem } from "@directus/sdk";
import { FormSubmissionValues } from "../_types/directusTypes";
import serverClient from "../_lib/directus-server";

export const submitForm = async (
  formId: string,
  data: FormSubmissionValues[],
) => {
  try {
    const result = await serverClient.request(
      createItem("form_submissions", {
        form: formId,
        values: data,
      }),
    );
    console.log("Form submission result:", result);
    return result;
  } catch (err) {
    console.error("Error submitting form:", err);
    throw new Error("Error submitting form");
  }
};
