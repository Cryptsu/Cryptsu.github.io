import path from "path";
import { AppConfig } from "@/lib/config";
import type { NextRouter } from "next/router";

// https://www.rfc-editor.org/info/rfc3986/#section-3.1
const URI_SCHEME_REGEX = /^[a-z][a-z0-9+.-]*:/i;

export const resolveBlogLink = (href: string, router: NextRouter): string => {
  if (href.startsWith("/")) return href;
  if (href.startsWith("#")) return href;
  if (URI_SCHEME_REGEX.test(href)) return href;

  const currentURL = router.pathname.split("/");
  const possibleSlug = currentURL.pop();
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
