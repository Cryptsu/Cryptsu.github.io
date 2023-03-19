import { theme } from "@/lib/styles/stiches.config";
import Link from "next/link";
import Style from "@/components/Style";
import { PropsWithChildren } from "react";

type CustomLinkProps = PropsWithChildren <{
  // Need to aquire link
  href: string,

  // So that when we hover over it will have
  // moving underline
  hasMovingUnderline?: boolean,

  // Style overriding
  style?: any,

  // Other props
  [x: string]: any,
}>

const CustomLink = ({
  children, 
  hasMovingUnderline=true, 
  style={}, 
  ...otherProps
}: CustomLinkProps) => {
  return (
    <Style 
      as={Link} 
      style={
        hasMovingUnderline 
          ? { ...CustomLinkStylesUnderlined, ...style }
          : { ...CustomLinkStylesDefault, ...style }
        } {
      ...otherProps}
    >
      {children}
    </Style>
  )
}

const CustomLinkStylesDefault = {
  color: theme.colors.customLinkDefault,
  fontSize: theme.fontSizes.customLinkDefault,
  fontFamily: theme.fonts.customLinkDefault,
  letterSpacing: theme.letterSpacings.customLinkDefault,

  // When hover, we should expect some background
  // color with a radius
  padding: 8,
  borderRadius: 16,
  '&:hover': {
    backgroundColor: theme.colors.customLinkDefaultBackgroundHover,
  }
};

const CustomLinkStylesUnderlined = {
  ...CustomLinkStylesDefault,

  // To create this nice link line drawing animation 
  // when we hover on the link.
  // Idea of jarv.is!! Not mine.
  backgroundImage: theme.colors.customLinkDefaultLineHover,
  backgroundSize: "0% 2px",
  backgroundPosition: "calc(0% + 8px) calc(100% - 4px)",
  backgroundRepeat: "no-repeat",
  transition: "background-size 0.2s ease-in-out",
  '&:hover': {
    ...CustomLinkStylesDefault['&:hover'],
    backgroundSize: "calc(100% - 16px) 2px",
  }
};

export default CustomLink;