import path from "path";
import { 
  TxtConst,
  AssetsConst
} from "@/lib/consts";

export const POSTS_DIR = "posts";
export const IMAGE_DIR = "images";
export const POSTIMAGE_DIR = path.join(IMAGE_DIR, "posts");
export const ASSETIMAGE_DIR = path.join(IMAGE_DIR, "assets");

export const LOCALE = "en-US";
export const TIME_ZONE = "Antarctica/Davis"; // This is the only way I could get the correct time zone :(
export const BLOG_URL = "https://cryptsu.github.io";
export const BLOG_NAME = TxtConst.TXT_BLOG_NAME;
export const AUTHOR_NAME = TxtConst.TXT_AUTHOR_NAME;
export const AUTHOR_DESC = TxtConst.TXT_AUTHOR_DESC;
export const SHORT_DESC = TxtConst.TXT_SHORT_DESC;
export const AUTHOR_LOGO = AssetsConst.ZIGGS;
export const AUTHOR_SOCIAL = {
  github: "Mistsuu",
  twitter: "Mistsu1",
}

// Hmmm... This should be moved into home.config.ts...?
export const HOME_POSTS_PER_PAGE = 5;