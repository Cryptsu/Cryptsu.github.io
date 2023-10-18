import path from "path";

// Directories
export const POSTS_DIR = "posts";
export const ATTACH_DIR = "/attachments";
export const ATTACHPOST_DIR = path.join(ATTACH_DIR, "posts");
export const ASSET_DIR = "/assets";

// Author's configs
export const BLOG_NAME = "Cryptsu";
export const AUTHOR_NAME = "Mistsu";
export const AUTHOR_LOGO = path.join(ASSET_DIR, "author-logo.webp");
export const AUTHOR_SOCIAL = {
  github: "Mistsuu",
  twitter: "Mistsu1",
}

// Display / SEO descriptions
export const DESCRIPTIONS = {
  AUTHOR: "I have no jobs so I do write-ups :-3",
  SHORT: "Mistsu's Blog",
  FOOTER: "::: Made with (❤️ && 😭) by Mistsu :::",

  HOME: "Hello. Welcome to my blog :) This is where I share my thoughts on CTF challenges.",
  POSTS: "List all of my blog posts within a single page.",
}

// Miscellaneous
export const LOCALE = "en-US";
export const TIME_ZONE = "Antarctica/Davis"; // This is the only way I could get the correct time zone :(
export const BLOG_URL = "https://cryptsu.github.io";

// Hmmm... This should be moved into home.config.ts...?
export const HOME_POSTS_PER_PAGE = 5;