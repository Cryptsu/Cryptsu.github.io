import { theme } from "@/lib/styles/stiches.config";
import { styled } from "@stitches/react";
import { BLOG_NAME } from "@/lib/consts/app.const";

const BlogName = () => {
  return (
    <CSSWrapper>
      {BLOG_NAME}
    </CSSWrapper>
  )
}

const CSSWrapper = styled("div", 
  {
    color: theme.colors.logoText,
    fontSize: theme.fontSizes.logo,
    fontWeight: theme.fontWeights.logo,
    fontFamily: theme.fonts.logo,
    letterSpacing: theme.letterSpacings.logo,
    textDecoration: "underline",
    textAlign: "center",
  }
)

export default BlogName;