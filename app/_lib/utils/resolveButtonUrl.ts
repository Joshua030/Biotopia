import { BlockButton } from "@/app/_types/directusTypes";

/**
 * Resolves the URL and attributes for a button block.
 */
export function resolveButtonUrl(button: BlockButton) {
  let href = "#";
  let target: "_blank" | "_self" = "_self";
  let rel: string | undefined;
  let isExternal = false;

  // Handle internal types
  if (button.type === "page" && button.page?.permalink) {
    href = button.page.permalink;
  } else if (button.type === "post" && button.post?.id) {
    href = `/posts/${button.post.id}`;
  } else if (button.url) {
    href = button.url;
  }

  // Detect external links
  if (href.startsWith("http")) {
    const currentOrigin =
      typeof window !== "undefined" ? window.location.origin : "";
    isExternal = !href.startsWith(currentOrigin);

    if (isExternal) {
      target = "_blank";
      rel = "noopener noreferrer nofollow";
    }
  }

  return {
    href,
    target,
    rel,
    isExternal,
  };
}
