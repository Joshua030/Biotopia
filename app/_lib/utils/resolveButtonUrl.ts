import {
  BlockButton,
  NavigationItems,
  Pages,
  Posts,
} from "@/app/_types/directusTypes";

/**
 * Resolves the URL and attributes for a button block.
 */

export function resolveButtonUrl(
  button: BlockButton | NavigationItems,
  lang: string,
) {
  let href = "#";
  let target: "_blank" | "_self" = "_self";
  let rel: string | undefined;
  let isExternal = false;
  //TODO: Extend functionality  to handle other type  of posts
  // Handle internal types
  if (button.type === "page" && (button.page as Pages)?.permalink) {
    const translationsByLang = (button.page as Pages)?.translations.find(
      (translation) => translation.languages_code === lang,
    );

    const formattedPermalink =
      translationsByLang?.permalink || (button.page as Pages)?.permalink;
    href = formattedPermalink || "#";
  } else if (button.type === "post" && (button.post as Posts)?.id) {
    href = `/posts/${(button.post as Posts).id}`;
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
