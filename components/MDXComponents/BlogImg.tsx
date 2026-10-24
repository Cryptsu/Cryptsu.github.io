import { isValidElement } from "react";
import { useRouter } from "next/router";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stitches.config";
import { HtmlConst } from "@/lib/consts";
import { AssetsConfig } from "@/lib/config";
import { resolveBlogLink } from "@/lib/helpers/resolve-links";
import type { PropsWithChildren, ReactNode } from "react";
import type { CSS } from "@stitches/react";

type BlogImgProps = PropsWithChildren<{
  src: string,              // Where is the image?
  alt?: string,             // Description for the image.
  width?: string | number,  // Scale to your desire...
  height?: string | number, // Scale to your desire...
}>

const getAltText = (node: ReactNode): string => {
  if (node == null || typeof node === "boolean") 
    return "";
  if (typeof node === "string" || typeof node === "number") 
    return String(node);
  if (Array.isArray(node)) 
    return node.map(getAltText).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) 
    return getAltText(node.props.children);
  return "";
};

const BlogImg = ({children: styledAlt, alt, width, height, src, ...otherProps}: BlogImgProps) => {
  src = resolveBlogLink(src, useRouter());

  // Since <img> does not allow children,
  // we reuse as alt :)
  styledAlt = (alt ? alt : styledAlt);

  // What the hell... If I put a component inside a function  
  // then when Next.js compiles, it will register onError !?
  const renderImg = () => {
    return (
      <Style
        elementName={HtmlConst.IMG}
        style={BlogImgStyles}
        alt={getAltText(styledAlt)}
        src={src}
        css={{ width, height }}
        onError={(event: Event) => {
          (event.target as HTMLImageElement).src = AssetsConfig.NO_EXISTS_IMG;
        }}
        {...otherProps}
      />
    );
  }

  const renderAlt = () => {
    if (styledAlt)
      return (
        <Style style={BlogImgDescriptionStyles}>
          {styledAlt}
        </Style>
      );
  }

  return (
    <Style style={BlogImgWrapperStyles}>
      {renderImg()}
      {renderAlt()}
    </Style>
  )
}

const BlogImgWrapperStyles: CSS = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: "0.5em",
  margin: 0,
  marginTop: "2em",
  marginBottom: "2em",
};

const BlogImgStyles: CSS = {
  maxWidth: "90%", 
  '@medium': {
    maxWidth: "100%",
  },
  borderRadius: 16,
};

const BlogImgDescriptionStyles: CSS = {
  wordBreak: "break-word",
  textAlign: "center",
  fontSize: theme.fontSizes.h5,
  fontWeight: theme.fontWeights.bold,
  maxWidth: "90%",
  '@medium': {
    fontSize: theme.fontSizes.h6,
    maxWidth: "100%",
  },

  borderWidth: "0.125em",
  borderStyle: "dashed",
  borderRadius: 16,
  paddingTop: "0.25em",
  paddingBottom: "0.25em",
  paddingLeft: "0.75em",
  paddingRight: "0.75em",
  borderColor: "#00000000", // For zero opacity :3
  '&:hover': {
    borderColor: theme.colors.borderGeneral,
  }
};

export default BlogImg;
