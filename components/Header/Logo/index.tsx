import Style from "@/components/Style";
import BlogName from "./BlogName";
import Lock from "./Lock";

const Logo = () => {
  return (
    <Style style={LogoStyles}>
      <Lock/>
      <BlogName/>
      <Lock/>
    </Style>
  )
}

const LogoStyles = {
  display: "flex",
  alignItems: "center",
  gap: 24,
}

export default Logo;