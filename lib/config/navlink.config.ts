import { FillFolderIcon, FillFolderOpenIcon } from "@/components/Icons";
import { TxtConst, LinkConst } from "@/lib/consts";
import type { ReactNode } from 'react';
import type { IconType } from "react-icons/lib";

export type NavLinkConfigType = {
  icon: ReactNode | IconType,
  openedIcon: ReactNode | IconType,
  navItems: {
    href: string,
    name: string,
  }[]
}

const NavLinkConfig: NavLinkConfigType = {
  icon: FillFolderIcon,
  openedIcon: FillFolderOpenIcon,
  navItems: [
    {
      href: LinkConst.LINK_HOME,
      name: TxtConst.TXT_NAV_HOME,
    },
    {
      href: LinkConst.LINK_POSTS,
      name: TxtConst.TXT_NAV_POSTS,
    },
    {
      href: LinkConst.LINK_ABOUT,
      name: TxtConst.TXT_NAV_ABOUT,
    },
  ]
};

export default NavLinkConfig;