import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, AssetsConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type PostCoverProps = PropsWithChildren<{
  coverImageURL?: string;
}>

// yes, this might be a copy from @/components/HomeLayout/HomePost/PostCover.tsx
const PostCover = ({children, coverImageURL, ...otherProps}: PostCoverProps) => {
  // What the hell... If I put a component inside a function
  // then when Next.js compiles, it will register onError !?
  const renderImg = () => {
    return <Style 
              style={PostCoverStyles} 
              elementName={HtmlConst.IMG} 
              src={coverImageURL ? coverImageURL : AssetsConst.EMPTY_SVG} 
              onError={
                (event: Event) => {
                  (event.target as HTMLImageElement).src = AssetsConst.NO_EXISTS_SVG
                }
              }
              {...otherProps}
            >
              {children}
            </Style>
  }

  return (
    <Style style={PostCoverWrapperStyles}>
      {renderImg()}
    </Style>
  )
}

const PostCoverWrapperStyles: CSS = {
  margin: 0,
  marginTop: 16,
  gap: 8,
  
  backgroundImage: theme.colors.gradient,
  borderRadius: 16,
  
  display: "flex",
  width: "75%", 
  padding: 4,
};

const PostCoverStyles: CSS = {
  backgroundColor: theme.colors.pageBackground,
  borderRadius: 16,
  width: "100%", 
};

export default PostCover;