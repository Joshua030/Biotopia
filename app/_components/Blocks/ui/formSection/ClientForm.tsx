"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMemo, useState } from "react";
import type { Forms, FormSubmissionValues } from "@/app/_types/directusTypes";
import * as formApi from "@/app/_actions/form.actions";
import { useParams } from "next/navigation";
import { getDirectusLang } from "@/app/_lib/utils/getDirectusLang";
import clsx from "clsx";

interface ClientFormProps {
  form: Forms;
}

const ClientForm = ({ form }: ClientFormProps) => {
  type FormData = z.infer<typeof schema>;

  // Loading and success states
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { locale } = useParams();
  const lang = getDirectusLang(locale as string);

  //? Get translated labels

  const translationsByLang = form.translations?.find(
    (translation) => translation.languages_code === lang,
  );
  const submitLabel =
    translationsByLang?.submit_label || form.submit_label || "Submit";

  const successMessage =
    translationsByLang?.success_message ||
    form.success_message ||
    "Form submitted successfully!";

  //? Dynamically create Zod schema based on form fields

  const schema = useMemo(() => {
    const schemaShape: Record<string, z.ZodTypeAny> = {};

    form.fields.forEach((field) => {
      if (!field.name) return;

      let fieldSchema: z.ZodTypeAny;

      switch (field.type) {
        case "email":
          if (field.required) {
            fieldSchema = z
              .email("Invalid email address")
              .min(1, `${field.label} is required`);
          } else {
            fieldSchema = z
              .email("Invalid email address")
              .optional()
              .or(z.literal(""));
          }
          break;
        case "textarea":
          if (field.required) {
            fieldSchema = z.string().min(1, `${field.label} is required`);
          } else {
            fieldSchema = z.string().optional().or(z.literal(""));
          }
          break;
        case "text":
        default:
          if (field.required) {
            fieldSchema = z.string().min(1, `${field.label} is required`);
          } else {
            fieldSchema = z.string().optional().or(z.literal(""));
          }
          break;
      }

      schemaShape[field.name] = fieldSchema;
    });

    return z.object(schemaShape);
  }, [form.fields]);

  //? React Hook Form setup

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  //? Form submission handler

  const onSubmit = async (data: FormData) => {
    // Reset previous states
    setSubmitSuccess(false);
    setSubmitError(null);
    setIsLoading(true);

    // Map field names to their IDs
    const formData = Object.entries(data)
      .map(([fieldName, value]) => {
        const field = form.fields.find((f) => f.name === fieldName);

        return {
          field: field?.id,
          value,
        };
      })
      .filter((item) => item.field) as FormSubmissionValues[];

    try {
      const submitFormResult = await formApi.submitForm(form.id, formData);

      // Success: reset form and show success message
      setSubmitSuccess(true);
      reset(); // Clear all form fields

      // Optional: Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const buttonClasses = clsx(
    "px-6 py-3 text-white border-none w-full text-center", // base styles
    isSubmitting || isLoading
      ? "bg-gray-500 cursor-not-allowed" // loading/disabled state
      : "bg-mineral-900 hover:opacity-80 cursor-pointer", // active state
  );

  return (
    <div>
      {form && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Success message */}
          {submitSuccess && (
            <div
              style={{
                padding: "1rem",
                marginBottom: "1rem",
                backgroundColor: "#d4edda",
                color: "#155724",
                border: "1px solid #c3e6cb",
                borderRadius: "4px",
              }}
            >
              {successMessage}
            </div>
          )}

          {/* Error message */}
          {submitError && (
            <div
              style={{
                padding: "1rem",
                marginBottom: "1rem",
                backgroundColor: "#f8d7da",
                color: "#721c24",
                border: "1px solid #f5c6cb",
                borderRadius: "4px",
              }}
            >
              {submitError}
            </div>
          )}

          {form.fields.map((field) => {
            const fieldName = field.name;
            if (!fieldName) return null;

            const isTextarea = field.type === "textarea";

            const translationsByLang = field?.translations?.find(
              (translation) => translation.languages_code === lang,
            );

            const label = translationsByLang?.label || field.label;

            const inputClasses = clsx(
              "block mb-8  p-4 w-full rounded border", // base
              field.width === "50" ? "max-w-1/2" : "max-w-full", // width dinámica
              errors[fieldName] ? "border-red-500" : "border-mineral-900", // error border
              isLoading && "opacity-60 cursor-not-allowed", // loading state
            );

            return (
              <div
                key={field.id}
                style={{ marginBottom: "1rem" }}
                className="biotopia-form-group relative"
              >
                {field.help && (
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#666",
                      margin: "0.25rem 0",
                    }}
                  >
                    {field.help}
                  </p>
                )}
                {isTextarea ? (
                  <textarea
                    id={fieldName}
                    {...register(fieldName)}
                    rows={4}
                    disabled={isLoading}
                    className={inputClasses}
                    placeholder=" "
                  />
                ) : (
                  <input
                    id={fieldName}
                    {...register(fieldName)}
                    type="text"
                    disabled={isLoading}
                    className={inputClasses}
                    placeholder=" "
                  />
                )}
                <label htmlFor={fieldName} className="text-lg text-[#9C9898]">
                  {label}
                  {field.required && <span style={{ color: "red" }}> *</span>}
                </label>
                {errors[fieldName] && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.875rem",
                      marginTop: "0.25rem",
                      display: "block",
                    }}
                  >
                    {errors[fieldName]?.message as string}
                  </span>
                )}
              </div>
            );
          })}
          <button
            type="submit"
            disabled={isSubmitting || isLoading}
            className={buttonClasses}
          >
            {isLoading ? "Submitting..." : submitLabel}
          </button>
        </form>
      )}
    </div>
  );
};

export default ClientForm;
