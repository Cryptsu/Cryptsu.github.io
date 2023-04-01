import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, AssetsConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type PostCoverProps = PropsWithChildren<{
  coverImageURL?: string;
}>

const PostCover = ({children, coverImageURL, ...otherProps}: PostCoverProps) => {
  // TODO: Investigate why this image fails
  return (
    <Style style={PostCoverWrapperStyles}>
      <Style 
        style={PostCoverStyles} 
        elementName={HtmlConst.IMG} 
        src={coverImageURL} 
        onError={
          (event: Event) => {
            (event.target as HTMLImageElement).src = AssetsConst.EMPTY_SVG
          }
        }
        {...otherProps}
      >
        {children}
      </Style>
    </Style>
  )
}

const PostCoverWrapperStyles: CSS = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  marginTop: 16,
  marginBottom: 16,
  gap: 8,

  backgroundImage: theme.colors.gradient,
  borderRadius: 16,
  width: "75%", 
  
  padding: 4,
};

const PostCoverStyles: CSS = {
  backgroundColor: theme.colors.pageBackground,
  borderRadius: 16,
  width: "100%", 
  maxHeight: "100%",
};

export default PostCover;