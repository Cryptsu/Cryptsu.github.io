import { FolderIcon } from "@/components/Icons";
import { TxtConst, LinkConst } from "@/lib/consts";
import type { ReactNode } from 'react';

export type NavLinkConfigType = {
  icon: ReactNode,
  navItems: {
    href: string,
    name: string,
  }[]
}

const NavLinkConfig: NavLinkConfigType = {
  icon: FolderIcon,
  navItems: [
    {
      href: LinkConst.LINK_HOME,
      name: TxtConst.TXT_NAV_HOME,
    },
    {
      href: LinkConst.LINK_TEST,
      name: TxtConst.TXT_NAV_TEST,
    },
    {
      href: LinkConst.LINK_POSTS,
      name: TxtConst.TXT_NAV_POSTS,
    }
  ]
};

export default NavLinkConfig;