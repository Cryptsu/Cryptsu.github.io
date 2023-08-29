import path from "path";
import { useRouter } from "next/router";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { AssetsConst, HtmlConst } from "@/lib/consts";
import { AppConfig } from "@/lib/config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type BlogImgProps = PropsWithChildren<{
  src: string,              // Where is the image?
  alt?: string,             // Description for the image.
  width?: string | number,  // Scale to your desire...
  height?: string | number, // Scale to your desire...
}>

const BlogImg = ({children, alt, width, height, src, ...otherProps}: BlogImgProps) => {
  // If path does not starts with
  // '/', we can change it into relative
  // import :) A bit hacky method, though...
  const router = useRouter();
  const currentURL = router.asPath.split('/')
  const possibleSlug = currentURL.pop();
  const possibleCategory = currentURL.pop();
  if (
    !src.startsWith('/') 
      && !(new RegExp("(^(http|https)://)|(^data:image/)", "i")).test(src)
      && possibleSlug 
      && possibleCategory
  ) {
    src = path.join(
      '/',
      AppConfig.IMAGE_DIR,
      possibleCategory,
      possibleSlug,
      src
    )
  }

  // What the hell... If I put a component inside a function  
  // then when Next.js compiles, it will register onError !?
  const renderImg = () => {
    return <Style 
              elementName={HtmlConst.IMG} 
              style={BlogImgStyles} 
              alt={alt} 
              src={src}
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