import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { AssetsConst, HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type BlogImgProps = PropsWithChildren<{
  src: string,              // Where is the image?
  alt?: string,             // Description for the image.
  width?: string | number,  // Scale to your desire...
  height?: string | number, // Scale to your desire...
}>

const BlogImg = ({children, alt, width, height, ...otherProps}: BlogImgProps) => {
  // What the hell... If I put a component inside a function  
  // then when Next.js compiles, it will register onError !?
  const renderImg = () => {
    return <Style 
              elementName={HtmlConst.IMG} 
              style={BlogImgStyles} 
              alt={alt} 
              css={{width, height}} 
              onError={
                (event: Event) => {
                  (event.target as HTMLImageElement).src = AssetsConst.NO_EXISTS_IMG
                }
              }
              {...otherProps}
            >
              {children}
           </Style>
  }

  const renderAlt = () => {
    if (alt)
      return <Style style={BlogImgDescriptionStyles}>
               {alt}
             </Style>
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
  margin: 0,
  marginTop: 32,
  marginBottom: 32,
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

  borderWidth: 2,
  borderStyle: "dashed",
  borderRadius: 8,
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 8,
  paddingRight: 8,
  borderColor: "#00000000", // For zero opacity :3
  '&:hover': {
    borderColor: theme.colors.borderGeneral,
  }
};

export default BlogImg;