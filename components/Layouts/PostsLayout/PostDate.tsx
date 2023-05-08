import Style from "@/components/Style";
import Time from "@/components/Time";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type PostDateProps = PropsWithChildren<{
  date: string,
}>

const PostDate = ({children, date, ...otherProps}: PostDateProps) => {
  return (
    <Style 
      style={PostDateStyles} 
      {...otherProps}
    >
      {"> "}
      <Time
        dateStr={date}
        format="MMM DD"
      />
    </Style>
  )
}

const PostDateStyles: CSS = {
  color: theme.colors.textLesser,
  fontSize: theme.fontSizes.date,
  paddingTop: "0.7rem",
  paddingBottom: "0.25rem",
};

export default PostDate;