import { theme } from "@/lib/styles/stiches.config";
import { BLOG_NAME } from "@/lib/consts/app.const";

const BlogName = () => {
  return (
    <div style={BlogNameStyles}>
      {BLOG_NAME}
    </div>
  )
}

const BlogNameStyles = {
  color: theme.colors.logoText.value,
  fontSize: theme.fontSizes.logo.value,
  fontWeight: theme.fontWeights.logo.value,
  fontFamily: theme.fonts.logo.value,
  letterSpacing: theme.letterSpacings.logo.value,
  textDecoration: "underline",
  textAlign: "center" as "center", // WTF code that keeps TypeScript compiler's mouth shut
}

export default BlogName;