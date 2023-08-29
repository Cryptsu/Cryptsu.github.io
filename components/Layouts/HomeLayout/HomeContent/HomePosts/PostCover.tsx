import path from "path";
import Style from "@/components/Style";
import CustomLink from "@/components/CustomLink";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, AssetsConst } from "@/lib/consts";
import { AppConfig } from "@/lib/config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

// yes, this might be a copy from @/components/Layouts/PostLayout/PostHeader/PostCover.tsx
type PostCoverProps = PropsWithChildren<{
  coverImageURL?: string;
  link: string;
  slug: string;
}>

const PostCover = ({children, slug, coverImageURL, link, ...otherProps}: PostCoverProps) => {
  // What the hell... If I put a component inside a function
  // then when Next.js compiles, it will register onError !?
  const renderImg = () => {
    return <Style 
              style={PostCoverStyles} 
              elementName={HtmlConst.IMG} 
              src={
                coverImageURL 
                  ? (
                      coverImageURL.startsWith('/') 
                        ? coverImageURL
                        : path.join('/', AppConfig.POSTIMAGE_DIR, slug, coverImageURL)
                    ) 
                  : AssetsConst.EMPTY_IMG
              } 
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

  return (
    <Style style={PostCoverWrapperWrapperStyles} >
      <Style as={CustomLink} style={PostCoverWrapperStyles} href={link}>
        {renderImg()}
      </Style>
    </Style>
  )
}

const PostCoverWrapperWrapperStyles: CSS = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  marginTop: "0.3em",
  marginBottom: "0.3em",
}

const PostCoverWrapperStyles: CSS = {
  display: "flex",
  width: "75%",
  padding: 4,           // Overrides CustomLink property.
  '@medium': {    
    width: "100%",
    padding: 3,         // Overrides CustomLink property.
  },

  // Custom "border" of the cover.

  '@media (hover: hover)': {
    '&:hover': {
      transition: "all 0.25s",
      boxShadow: theme.shadows.homePostCoverHover,
      transform: "translateX(-0.2em) translateY(-0.2em)",
      backgroundImage: theme.colors.gSecondary,
    },

    '&:active': {
      transform: "translateX(-0.0625em) translateY(-0.0625em)",
      boxShadow: theme.shadows.homePostCoverClick,
      backgroundImage: theme.colors.gSecondary,
    }
  },
  
  '@media (hover: none)': {
    borderColor: theme.colors.divider20,
    movUnderline: `${theme.colors.gSecondary} 100% 0px 0px`,
  },
};

const PostCoverStyles: CSS = {
  backgroundColor: theme.colors.pageBackground,
  boxShadow: theme.shadows.depthShadow,
  borderRadius: "0.75rem",

  width: "100%",
  height: "auto",
  objectFit: "cover",
};

export default PostCover;