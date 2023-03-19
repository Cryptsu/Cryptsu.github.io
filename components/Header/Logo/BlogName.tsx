import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { TxtConst } from "@/lib/consts";

const BlogName = () => {
  return (
    <Style style={BlogNameStyles}>
      {TxtConst.TXT_BLOG_NAME}
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