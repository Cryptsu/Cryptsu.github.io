import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { TxtConst } from "@/lib/consts";
import type { CSS } from "@stitches/react";

const BlogName = () => {
  return (
    <Style style={BlogNameStyles}>
      {TxtConst.TXT_BLOG_NAME}
    </Style>
  )
}

const BlogNameStyles: CSS = {
  color: theme.colors.logoText,
  fontSize: theme.fontSizes.logo,
  fontWeight: theme.fontWeights.logo,
  fontFamily: theme.fonts.logo,
  letterSpacing: theme.letterSpacings.logo,
  textDecoration: "underline",
  textAlign: "center", // WTF code that keeps TypeScript compiler's mouth shut
}

export default BlogName;