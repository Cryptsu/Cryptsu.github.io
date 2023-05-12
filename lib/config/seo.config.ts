import { AssetsConst } from "@/lib/consts";
import { AppConfig } from ".";
import type { DefaultSeoProps, SocialProfileJsonLdProps, ArticleJsonLdProps } from "next-seo";

// Most of this file simply takes the data already defined in ./AppConfig.js and translates it into objects that are
// compatible with next-seo's props:
// https://github.com/garmeeh/next-seo#default-seo-configuration
export const defaultSeo: DefaultSeoProps = {
  defaultTitle: `${AppConfig.SHORT_DESC} - ${AppConfig.BLOG_NAME}`,
  titleTemplate: `%s – ${AppConfig.BLOG_NAME}`, // appends `– siteName` to title provided by each page (except home)
  description: AppConfig.AUTHOR_DESC,
  openGraph: {
    siteName: AppConfig.BLOG_NAME,
    title: `${AppConfig.BLOG_NAME} – ${AppConfig.SHORT_DESC}`,
    locale: AppConfig.LOCALE?.replace("-", "_"),
    type: "website",
    images: [
      {
        url: `${AppConfig.AUTHOR_LOGO}`,
        alt: `${AppConfig.BLOG_NAME} – ${AppConfig.SHORT_DESC}`,
      },
    ],
  },
  // twitter: {
  //   handle: `@${AppConfig.authorSocial?.twitter}`,
  //   site: `@${AppConfig.authorSocial?.twitter}`,
  //   cardType: "summary",
  // },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "author",
      content: AppConfig.AUTHOR_NAME,
    },
    // {
    //   name: "google-site-verification",
    //   content: AppConfig.verifyGoogle,
    // },
    // {
    //   name: "msvalidate.01",
    //   content: AppConfig.verifyBing,
    // },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: AssetsConst.FAVICON_ICO,
    },
    {
      rel: "icon",
      href: AssetsConst.FAVICON_ICO,
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      href: AssetsConst.FAVICON_APPLETOUCHICON_PNG,
      sizes: `${512}x${512}`,
    },
    // {
    //   rel: "manifest",
    //   href: "/site.webmanifest",
    // },
    // {
    //   rel: "alternate",
    //   href: "/feed.xml",
    //   type: "application/rss+xml",
    //   // @ts-ignore
    //   title: `${AppConfig.BLOG_NAME} (RSS)`,
    // },
    // {
    //   rel: "alternate",
    //   href: "/feed.atom",
    //   type: "application/atom+xml",
    //   // @ts-ignore
    //   title: `${AppConfig.BLOG_NAME} (Atom)`,
    // },
    // {
    //   rel: "webmention",
    //   href: `https://webmention.io/${AppConfig.webmentionId}/webmention`,
    // },
    // {
    //   rel: "pingback",
    //   href: `https://webmention.io/${AppConfig.webmentionId}/xmlrpc`,
    // },
    {
      rel: "humans",
      href: "/humans.txt",
    },
    // {
    //   rel: "pgpkey",
    //   href: "/pubkey.asc",
    //   type: "application/pgp-keys",
    // },
  ],
};

// https://github.com/garmeeh/next-seo#social-profile
export const socialProfileJsonLd: SocialProfileJsonLdProps = {
  type: "Person",
  name: AppConfig.AUTHOR_NAME,
  url: `${AppConfig.BLOG_URL}/`,
  sameAs: [
    `${AppConfig.BLOG_URL}/`,
    `https://github.com/${AppConfig.AUTHOR_SOCIAL?.github}`,
    // `https://keybase.io/${AppConfig.AUTHOR_SOCIAL?.keybase}`,
    // `https://twitter.com/${AppConfig.AUTHOR_SOCIAL?.twitter}`,
    // `https://medium.com/@${AppConfig.AUTHOR_SOCIAL?.medium}`,
    // `https://www.linkedin.com/in/${AppConfig.AUTHOR_SOCIAL?.linkedin}/`,
    // `https://www.facebook.com/${AppConfig.AUTHOR_SOCIAL?.facebook}`,
    // `https://www.instagram.com/${AppConfig.AUTHOR_SOCIAL?.instagram}/`,
    // `https://${AppConfig.AUTHOR_SOCIAL?.mastodon}`,
  ],
};

// Just the basic items applicable to all notes, extended by pages/notes/[slug].tsx
// https://github.com/garmeeh/next-seo#article-1
export const articleJsonLd: Pick<ArticleJsonLdProps, "authorName" | "publisherName" | "publisherLogo"> = {
  authorName: [AppConfig.AUTHOR_NAME],
  publisherName: AppConfig.BLOG_NAME,
  publisherLogo: `${AppConfig.BLOG_URL}${AppConfig.AUTHOR_LOGO}`,
};
