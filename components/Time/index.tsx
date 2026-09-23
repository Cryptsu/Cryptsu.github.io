import      useLayout             from "@/hooks/useLayout";
import      { formatDate }        from "@/lib/helpers/format-date";
import type { PropsWithChildren } from "react";

type TimeProps = PropsWithChildren<{
  dateStr: string,
  format?: string,
}>

const Time = ({dateStr, format="D MMMM, YYYY"}: TimeProps) => {
  const { currentLocale } = useLayout();
  return (
    <>
      {formatDate(dateStr, currentLocale, format)}
    </>
  )
}

export default Time;
