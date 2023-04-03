import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type PostTagsProps = PropsWithChildren<{
  tags?: string[]
}>

const PostTags = ({children, tags, ...otherProps}: PostTagsProps) => {
  return (
    <Style style={PostTagsStyles} {...otherProps}>
      {
        tags
          ? tags.map((tag, index) => (
              <Style key={index} style={PostTagStyles}>
                {`#${tag}`}
              </Style>
            ))
          : <>
            </>
      }
    </Style>
    
  )
}

const PostTagsStyles: CSS = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 8,
};

const PostTagStyles: CSS = {
  color: theme.colors.hashtagInactive,
  '&:hover': {
    color: theme.colors.hashtagActive,
  },

  fontSize: theme.fontSizes.h5,
  fontWeight: theme.fontWeights.bold,
  letterSpacing: theme.letterSpacings.h5,
  textDecoration: "underline",
};

export default PostTags;