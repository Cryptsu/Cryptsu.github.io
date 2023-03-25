import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type BlogImgProps = PropsWithChildren<{
  alt?: string, // Description for the image.
}>

const BlogImg = ({children, alt, ...otherProps}: BlogImgProps) => {
  return (
    <Style style={BlogImgWrapperStyles}>
      <Style elementName={HtmlConst.IMG} {...otherProps} style={BlogImgStyles}>
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
  padding: 0,
  paddingTop: 32,
  paddingBottom: 32,
  gap: 16,
};

const BlogImgStyles: CSS = {
  maxWidth: "90%", 
  borderRadius: 16
};

const BlogImgDescriptionStyles: CSS = {
  color: theme.colors.contentText,
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.imgalt,
  fontWeight: theme.fontWeights.imgalt,
  letterSpacing: theme.letterSpacings.content,
};

export default BlogImg;