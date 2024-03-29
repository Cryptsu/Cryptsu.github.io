import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { AppConfig } from "@/lib/config";
import type { CSS } from "@stitches/react";

const BlogName = () => {
  return (
    <Style style={BlogNameStyles}>
      {AppConfig.BLOG_NAME}
    </Style>
  )
}

const BlogNameStyles: CSS = {
  color: theme.colors.primary,
  fontFamily: theme.fonts.global,
  fontSize: theme.fontSizes.h3,
  fontWeight: theme.fontWeights.h3,
  letterSpacing: theme.letterSpacings.h3,
  textDecoration: "underline",
  textAlign: "center", // WTF code that keeps TypeScript compiler's mouth shut
}

export default BlogName;