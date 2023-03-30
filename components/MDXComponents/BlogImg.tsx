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
        alt={alt}
        {...otherProps}
      >
        {children}
      </Style>

      {
        alt 
          ? <Style style={BlogImgDescriptionStyles}>
              {alt}
            </Style>
          : <>
            </>
      }
      
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
  gap: 8,
};

const BlogImgStyles: CSS = {
  maxWidth: "90%", 
  borderRadius: 16,
};

const BlogImgDescriptionStyles: CSS = {
  fontSize: theme.fontSizes.imgalt,
  fontWeight: theme.fontWeights.imgalt,

  borderWidth: 2,
  borderStyle: "dashed",
  borderRadius: 8,
  padding: 8,
  borderColor: "#00000000",
  '&:hover': {
    borderColor: theme.colors.grey,
  }
};

export default BlogImg;