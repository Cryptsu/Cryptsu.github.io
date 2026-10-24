import Style from "@/components/Style";
import NextLink from "next/link";
import { theme } from "@/lib/styles/stitches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import { HtmlConst } from "@/lib/consts";

type BlogLinkProps = PropsWithChildren<{
  href: string;
}>;

const BlogLink = ({ children, href, ...otherProps }: BlogLinkProps) => {
  // prevents re-rendering of the page
  if (href.startsWith("#")) {
    return (
      <Style
        elementName={HtmlConst.A}
        href={href}
        style={BlogLinkStyles}
        {...otherProps}
      >
        {children}
      </Style>
    );
  }

  return (
    <Style as={NextLink} href={href} style={BlogLinkStyles} {...otherProps}>
      {children}
    </Style>
  );
};

const BlogLinkStyles: CSS = {
  color: theme.colors.tertiary,
  paddingBottom: 4,
  movUnderline: `${theme.colors.gTertiary} 2px 0px 0px`,
  "&:visited": {
    color: theme.colors.color23,
  },
  "&:active": {
    color: theme.colors.secondary,
    movUnderlineColor: theme.colors.gSecondary,
  },
};

export default BlogLink;
