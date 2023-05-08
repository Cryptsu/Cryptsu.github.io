import Style from "@/components/Style";
import PostTitle from "./PostTitle";
import PostMetadatas from "./PostMetadatas";
import { theme } from "@/lib/styles/stiches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post.d";

type PostHeaderProps = PropsWithChildren<{
  frontMatter: PostFrontMatterType,
}>

const PostHeader = ({children, frontMatter, ...otherProps}: PostHeaderProps) => {
  return (
    <Style style={PostHeaderStyles} {...otherProps}>
      <PostTitle>
        {frontMatter.title}
      </PostTitle>
      <PostMetadatas frontMatter={frontMatter}/>
    </Style>
  )
}

const PostHeaderStyles: CSS = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5em",

  // Padding
  marginTop: "1.5em",
  marginBottom: "2.5em",

  // Font customization
  fontFamily: theme.fonts.global,
};

export default PostHeader;