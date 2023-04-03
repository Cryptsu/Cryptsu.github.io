import Style from "@/components/Style";
import PostTitle from "./PostTitle";
import PostMetadatas from "./PostMetadatas";
import PostTags from "./PostTags";
import PostCover from "./PostCover";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post.d";

type PostHeaderProps = PropsWithChildren<{
  frontMatter: PostFrontMatterType,
}>

const PostHeader = ({children, frontMatter, ...otherProps}: PostHeaderProps) => {
  return (
    <Style style={PostHeaderStyles} {...otherProps}>
      <PostCover coverImageURL={frontMatter.coverImage}/>
      <PostTitle>
        {frontMatter.title}
      </PostTitle>
      <PostMetadatas frontMatter={frontMatter}/>
      {/* <PostTags tags={frontMatter.tags}/> */}
    </Style>
  )
}

const PostHeaderStyles: CSS = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 8,

  // Padding
  marginTop: 24,
  marginBottom: 40,

  // Font customization
  fontFamily: theme.fonts.global,
};

export default PostHeader;