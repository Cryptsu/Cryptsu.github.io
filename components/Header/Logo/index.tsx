import { theme } from "@/lib/styles/stiches.config";
import BlogName from "./BlogName";
import Lock from "./Lock";

const Logo = () => {
  return (
    <div style={LogoStyles}>
      <Lock/>
      <BlogName/>
      <Lock/>
    </div>
  )
}

const LogoStyles = {
  display: "flex",
  alignItems: "center",
  gap: 24,
}

export default Logo;