import { theme } from "@/lib/styles/stiches.config";
import { styled } from "@stitches/react";
import { AssetsConst } from "@/lib/consts";
import { BLOG_NAME } from "@/lib/consts/app.const";

const Logo = () => {
  return (
    <CSSWrapper>
      {BLOG_NAME}
    </CSSWrapper>
  )
}

const CSSWrapper = styled("div", 
  {
    color: theme.colors.primary,
  }
)

export default Logo;