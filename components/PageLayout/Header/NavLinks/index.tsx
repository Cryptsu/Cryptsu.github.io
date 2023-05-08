import { useRouter } from "next/router";
import NavLinksDropdown from "./NavLinksDropdown";
import NavLinksNormal from "./NavLinksNormal";

const NavLinks = () => {
  const router = useRouter();
  return (
    <>
      <NavLinksDropdown router={router}/>      
      <NavLinksNormal router={router}/>
    </>
  )
}

export default NavLinks;