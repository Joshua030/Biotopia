"use client";

import { useEffect, useState } from "react";
import { apply, remove } from "@directus/visual-editing";

export function VisualEditorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    let isMounted = true; // Prevent updates if the component unmounts

    const initializeVisualEditor = async () => {
      if (typeof window === "undefined" || isApplied) return;

      try {
        await apply({
          directusUrl: "http://localhost:8055",
          onSaved: async (data) => {
            console.log("Content saved successfully:", data);
            try {
              window.location.reload();
              console.log("Page data refreshed successfully");
            } catch (error) {
              console.error("Failed to refresh page data:", error);
              window.location.reload();
            }
          },
        });

        if (isMounted) setIsApplied(true);
      } catch (error) {
        console.error("Failed to initialize visual editor:", error);
      }
    };

    initializeVisualEditor();

    return () => {
      isMounted = false;
      if (typeof window !== "undefined" && isApplied) {
        remove();
        setIsApplied(false);
      }
    };
  }, [isApplied]);

  return <>{children}</>;
}
