import { theme } from "@/lib/styles/stiches.config";
import { styled } from "@stitches/react";
import BlogName from "./BlogName";
import Lock from "./Lock";

const Logo = () => {
  return (
    <CSSWrapper>
      <Lock/>
      <BlogName/>
      <Lock/>
    </CSSWrapper>
  )
}

const CSSWrapper = styled("div", 
  {
    display: "flex",
    alignItems: "center",
    gap: 24,
  }
)

export default Logo;