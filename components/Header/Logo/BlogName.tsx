import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { BLOG_NAME } from "@/lib/consts/app.const";

const BlogName = () => {
  return (
    <Style style={BlogNameStyles}>
      {BLOG_NAME}
    </Style>
  )
}

const BlogNameStyles = {
  color: theme.colors.logoText,
  fontSize: theme.fontSizes.logo,
  fontWeight: theme.fontWeights.logo,
  fontFamily: theme.fonts.logo,
  letterSpacing: theme.letterSpacings.logo,
  textDecoration: "underline",
  textAlign: "center", // WTF code that keeps TypeScript compiler's mouth shut
}

export default BlogName;