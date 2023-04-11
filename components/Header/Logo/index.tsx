import Style from "@/components/Style";
import CustomLink from "@/components/CustomLink";
import BlogName from "./BlogName";
import Lock from "./Lock";
import { LinkConst } from "@/lib/consts";
import type { CSS } from "@stitches/react";

const Logo = () => {
  return (
    <CustomLink style={LogoStyles} href={LinkConst.LINK_HOME}>
      <Lock disappearWhenSmall={false}/>
      <BlogName/>
      <Lock disappearWhenSmall={true}/>
    </CustomLink>
  )
}

const LogoStyles: CSS = {
  display: "flex",
  alignItems: "center",
  gap: 24,

  padding: 0,
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 4,
}

export default Logo;