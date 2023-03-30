// All MDX components
import ContentProvider from "@/components/ContentProvider";
import Style from "@/components/Style";
import TableOfContent from "@/components/TableOfContent";
import PostContent from "./PostContent";

import type { PropsWithChildren } from "react";
import type { MDXRemoteProps, MDXRemoteSerializeResult } from "next-mdx-remote";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post.d";

type PostLayoutProps = PropsWithChildren<{
  frontMatter: PostFrontMatterType,
  sourceContent: MDXRemoteSerializeResult<Record<string, unknown>>,
}>

const PostLayout = ({children, frontMatter, sourceContent, ...otherProps}: PostLayoutProps) => {
  return (
    <ContentProvider>
      <Style style={PostLayoutStyles}>
        <Style style={PostLeftGroupStyles}>
          <TableOfContent/>
        </Style>
        <Style style={PostContentGroupStyles}>
          <PostContent sourceContent={sourceContent}/>
        </Style>
        <Style style={PostRightGroupStyles}></Style>
      </Style>
    </ContentProvider>
  )
}

const PostLayoutStyles: CSS = {
  display: "grid",
  gridTemplateAreas: "'post-left post-content post-right'",
  gridTemplateColumns: "calc(50% - 336px) 672px calc(50% - 336px)",
};

const PostLeftGroupStyles: CSS = {
  gridArea: 'post-left',
};

const PostContentGroupStyles: CSS = {
  gridArea: 'post-content',
};

const PostRightGroupStyles: CSS = {
  gridArea: 'post-right'
};

export default PostLayout;