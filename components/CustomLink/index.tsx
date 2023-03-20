import { theme } from "@/lib/styles/stiches.config";
import Link from "next/link";
import Style from "@/components/Style";
import type { CSS } from "@stitches/react";
import type { PropsWithChildren } from "react";

type CustomLinkProps = PropsWithChildren <{
  // Need to aquire link
  href: string,

  // Style overriding
  style?: CSS,

  // Other props
  [x: string]: any,
}>

const CustomLink = ({
  children, 
  style={}, 
  ...otherProps
}: CustomLinkProps) => {
  return (
    <Style 
      css={style}
      as={Link} 
      style={CustomLinkStyles} 
      {...otherProps}
    >
      {children}
    </Style>
  )
}

const CustomLinkStyles: CSS = {
  // When hover, we should expect some background
  // color with a radius
  padding: 8,
  borderRadius: 16,
  '&:hover': {
    backgroundColor: theme.colors.customLinkBackground,
  }
};


export default CustomLink;