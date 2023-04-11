import useLayout from "@/hooks/useLayout";
import Style from "@/components/Style";
import { formatDate } from "@/lib/helpers/format-date";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type TimeProps = PropsWithChildren<{
  dateStr: string,
  format?: string,
}>

const Time = ({children, dateStr, format="D MMMM, YYYY", ...otherProps}: TimeProps) => {
  const { currentLocale } = useLayout();
  return (
    <>
      {formatDate(dateStr, currentLocale, format)}
    </>
  )
}

export default Time;