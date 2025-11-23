import { notFound } from "next/navigation";
import { SUPPORTED } from "../_constants/constants";
import { Supported } from "../_types/generalTypes";
import { VisualEditorProvider } from "../_provideres/VisualEditorProvider";
import NavBar from "../_components/general/NavBar/NavBar";
import { Footer, SideBar } from "../_components";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!SUPPORTED.includes(locale as Supported)) {
    notFound();
  }
  return (
    <>
      <NavBar />
      <SideBar />
      <main id="main-content">
        <VisualEditorProvider>{children}</VisualEditorProvider>
      </main>
      <Footer />
    </>
  );
}
