import Style from "@/components/Style";
import CustomLink from "@/components/CustomLink";
import BlogName from "./BlogName";
import Lock from "./Lock";
import { LinkConst } from "@/lib/consts";
import type { CSS } from "@stitches/react";

const Logo = () => {
  return (
    <CustomLink style={LogoStyles} href={LinkConst.LINK_HOME}>
      <Lock/>
      <BlogName/>
      <Lock/>
    </CustomLink>
  )
}

const LogoStyles: CSS = {
  display: "flex",
  alignItems: "center",
  gap: "1.5em",

  padding: 0,
  paddingLeft: "1em",
  paddingRight: "1em",
  paddingBottom: "0.25em",

  '@small': {
    display: "none",
  }
}

export default Logo;