import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type BlogImgProps = PropsWithChildren<{
  src: string,              // Where is the image?
  alt?: string,             // Description for the image.
  width?: string | number,  // Scale to your desire...
  height?: string | number, // Scale to your desire...
}>

const BlogImg = ({children, alt, width, height, ...otherProps}: BlogImgProps) => {
  return (
    <Style style={BlogImgWrapperStyles}>
      <Style 
        elementName={HtmlConst.IMG}  
        style={BlogImgStyles} 
        css={{
          width,
          height
        }} 
        {...otherProps}
      >
        {children}
      </Style>
      <Style style={BlogImgDescriptionStyles}>
        {alt}
      </Style>
    </Style>
  )
}

const BlogImgWrapperStyles: CSS = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  marginTop: 32,
  marginBottom: 32,
  gap: 16,
};

const BlogImgStyles: CSS = {
  maxWidth: "90%", 
  borderRadius: 16,
};

const BlogImgDescriptionStyles: CSS = {
  color: theme.colors.contentText,
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.imgalt,
  fontWeight: theme.fontWeights.imgalt,
  letterSpacing: theme.letterSpacings.content,
};

export default BlogImg;