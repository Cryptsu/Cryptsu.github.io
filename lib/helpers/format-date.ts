import dayjs from "dayjs";
import dayjsUtc from "dayjs/plugin/utc";
import dayjsTimezone from "dayjs/plugin/timezone";
import dayjsRelativeTime from "dayjs/plugin/relativeTime";
import dayjsLocalizedFormat from "dayjs/plugin/localizedFormat";
import dayjsAdvancedFormat from "dayjs/plugin/advancedFormat";

// All of our languages
import "dayjs/locale/en";
import "dayjs/locale/vi";

// Config :)
import { AppConfig } from '@/lib/config';
import { LocaleConst } from "@/lib/consts";

// Copied and modified of Jarv.is :3
const IsomorphicDayJs = (locale: string, date?: dayjs.ConfigType): dayjs.Dayjs => {
  // plugins
  dayjs.extend(dayjsUtc);
  dayjs.extend(dayjsTimezone);
  dayjs.extend(dayjsRelativeTime);
  dayjs.extend(dayjsLocalizedFormat);
  dayjs.extend(dayjsAdvancedFormat);

  return (
    dayjs(date)
      .tz(AppConfig.TIME_ZONE) // Put tz before locale plz, else en will be used by default :<
      .locale(locale)
      .clone()
  );
};

// simple wrapper around dayjs.format() to normalize timezone across the site, both server and client side, to prevent
// hydration errors by returning an instance of dayjs with these defaults set.
// date defaults to now, format defaults to ISO 8601 (e.g. 2022-04-07T21:53:33-04:00)
export const formatDate = (date?: dayjs.ConfigType, formatStr?: string): string => {
  // Return this date-string format is so cool!
  // If we compare strings in this format,
  // it would be as if we're comparing in time.
  return IsomorphicDayJs(LocaleConst.LOCALE_EN, date).format(formatStr);
};

// returns the human-friendly difference between now and given date (e.g. "5 minutes", "9 months", etc.)
// set `{ suffix: true }` to include the "... ago" or "in ..." for past/future
export const formatTimeAgo = (date: dayjs.ConfigType, locale: string, options?: { suffix?: boolean }): string => {
  return IsomorphicDayJs(locale).isBefore(date)
    ? IsomorphicDayJs(locale, date).toNow(!options?.suffix)
    : IsomorphicDayJs(locale, date).fromNow(!options?.suffix);
};
