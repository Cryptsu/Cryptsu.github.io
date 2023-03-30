// All MDX components
import ContentProvider from "@/components/ContentProvider";
import Style from "@/components/Style";
import TableOfContent from "./TableOfContent";
import PostContent from "./PostContent";

import { PropsWithChildren, useEffect } from "react";
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
        </Style>
        <Style style={PostContentGroupStyles}>
          <PostContent sourceContent={sourceContent}/>
        </Style>
        <Style style={PostRightGroupStyles}>
          <TableOfContent/>
        </Style>
      </Style>
    </ContentProvider>
  )
}

const PostLayoutStyles: CSS = {
  display: "grid",
  gridTemplateAreas: "'post-left post-content post-right'",
  gridTemplateColumns: "1fr 792px 2.5fr",
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