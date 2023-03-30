import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post.d";

type PostHeaderProps = PropsWithChildren<{
  frontMatter: PostFrontMatterType,
}>

const PostHeader = ({children, frontMatter, ...otherProps}: PostHeaderProps) => {
  return (
    <Style style={PostHeaderStyles} {...otherProps}>
      {frontMatter.title}
    </Style>
  )
}

const PostHeaderStyles: CSS = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default PostHeader;