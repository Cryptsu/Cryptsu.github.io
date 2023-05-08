import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type PostDescriptionProps = PropsWithChildren<{
  description?: string
}>

const PostDescription = ({children, description, ...otherProps}: PostDescriptionProps) => {
  return (
    <Style style={PostDescriptionStyles} {...otherProps}>
      {description ? description : TxtConst.TXT_NO_DESCRIPTION}
    </Style>
  )
}

const PostDescriptionStyles: CSS = {
  color: theme.colors.textLesser,
  fontSize: theme.fontSizes.h5,
  letterSpacing: theme.letterSpacings.h5,
}

export default PostDescription;