import path from "path";
import { AppConfig } from "@/lib/config";
import type { NextRouter } from "next/router";

// https://www.rfc-editor.org/info/rfc3986/#section-3.1
const URI_SCHEME_REGEX = /^[a-z][a-z0-9+.-]*:/i;

export const resolveBlogLink = (href: string, router: NextRouter): string => {
  console.log(router.query)
  if (href.startsWith("/")) 
    return href;
  if (href.startsWith("#")) 
    return href;
  if (URI_SCHEME_REGEX.test(href)) 
    return href;

  const currentURL = router.pathname.split("/");
  if (currentURL.pop() !== "[slug]" || !router.query.hasOwnProperty("slug")) {
    console.error(
      "resolveBlogLink: [slug] not found. website might have changed structure or this might not be a link from a blog.",
    );
    return href;
  }

  const possibleSlug = router.query.slug as string;
  const possibleCategory = currentURL.pop();

  if (possibleSlug && possibleCategory) {
    href = path.join(
      "/",
      AppConfig.ATTACH_DIR,
      possibleCategory,
      possibleSlug,
      href,
    );
  }

  return href;
};
