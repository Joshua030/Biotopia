import { notFound } from "next/navigation";
import { SUPPORTED } from "../_constants/constants";
import { Supported } from "../_types/generalTypes";
import { VisualEditorProvider } from "../_provideres/VisualEditorProvider";
import NavBar from "../_components/general/NavBar/NavBar";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Supported };
}) {
  const { locale } = await params;
  if (!SUPPORTED.includes(locale)) {
    notFound();
  }
  return (
    <>
      <NavBar />
      <main id="main-content">
        <VisualEditorProvider>{children}</VisualEditorProvider>
      </main>
    </>
  );
}
