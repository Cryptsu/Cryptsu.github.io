import Style from "@/components/Style";
import CustomLink from "@/components/CustomLink";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, AssetsConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

// yes, this might be a copy from @/components/Layouts/PostLayout/PostHeader/PostCover.tsx
type PostCoverProps = PropsWithChildren<{
  coverImageURL?: string;
  link: string;
}>

const PostCover = ({children, coverImageURL, link, ...otherProps}: PostCoverProps) => {
  // What the hell... If I put a component inside a function
  // then when Next.js compiles, it will register onError !?
  const renderImg = () => {
    return <Style 
              style={PostCoverStyles} 
              elementName={HtmlConst.IMG} 
              src={coverImageURL ? coverImageURL : AssetsConst.EMPTY_IMG} 
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

  paddingTop: 8,
  paddingBottom: 8,
}

const PostCoverWrapperStyles: CSS = {
  display: "flex",
  width: "75%",
  padding: 4,

  backgroundImage: theme.colors.gradient12,
  borderRadius: 16,

  '@media (hover: hover)': {
    '&:hover': {
      transform: "translateX(-6px) translateY(-6px)",
      boxShadow: theme.shadows.homePostCoverHover,
    },
  },
  
  '&:active': {
    transform: "translateX(-1px) translateY(-1px)",
    boxShadow: theme.shadows.homePostCoverClick,
  }
};

const PostCoverStyles: CSS = {
  backgroundColor: theme.colors.pageBackground,
  boxShadow: theme.shadows.depthShadow,
  borderRadius: 16,

  width: "100%",
  height: "12.5em",
  objectFit: "cover",
};

export default PostCover;