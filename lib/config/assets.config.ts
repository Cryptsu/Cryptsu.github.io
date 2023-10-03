import path from "path";
import { 
    AppConfig 
} from '@/lib/config';

export const GRAIN_WEBP                 = path.join(AppConfig.ASSETIMAGE_DIR, "grain.webp");
export const EMPTY_IMG                  = path.join(AppConfig.ASSETIMAGE_DIR, "empty.svg");
export const NO_EXISTS_IMG              = path.join(AppConfig.ASSETIMAGE_DIR, "no-exists.svg");

export const FAVICON_ICO                = path.join(AppConfig.ASSETIMAGE_DIR, "favicons/favicon.ico");
export const FAVICON_PNG                = path.join(AppConfig.ASSETIMAGE_DIR, "favicons/favicon.png");
export const FAVICON_APPLETOUCHICON_PNG = path.join(AppConfig.ASSETIMAGE_DIR, "favicons/apple-touch-icon.png");