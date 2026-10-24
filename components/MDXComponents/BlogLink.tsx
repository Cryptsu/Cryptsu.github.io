import { useRouter } from "next/router";
import Style from "@/components/Style";
import NextLink from "next/link";
import { theme } from "@/lib/styles/stitches.config";
import { resolveBlogLink } from "@/lib/helpers/resolve-links";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type BlogLinkProps = PropsWithChildren<{
  href: string;
}>;


const BlogLink = ({ children, href, ...otherProps }: BlogLinkProps) => {
  href = resolveBlogLink(href, useRouter());

  // If the tag exists within the page, scroll to it :)
  // Using NextLink causes re-rendering of the page
  if (href.startsWith("#")) {
    return (
      <Style
        elementName={HtmlConst.A}
        style={BlogLinkStyles}
        // Copied from Headings.tsx
        onClick={
          () => {
            let element = document.getElementById(href.substring(1));
            let headingRect = element?.getBoundingClientRect();
            if (headingRect)
              window.scrollTo({ 
                top: window.scrollY + headingRect.y, 
                behavior: "smooth" 
              })
          }
        }
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
    userSelect: "none",
  },
  cursor: "pointer",
};

export default BlogLink;
