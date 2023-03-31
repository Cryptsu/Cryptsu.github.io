// All MDX components
import ContentProvider from "@/components/ContentProvider";
import Style from "@/components/Style";
import TableOfContent from "./TableOfContent";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";

import { theme } from "@/lib/styles/stiches.config";

import type { PropsWithChildren } from "react";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post.d";

type PostLayoutProps = PropsWithChildren<{
  frontMatter: PostFrontMatterType,
  sourceContent: MDXRemoteSerializeResult<Record<string, unknown>>,
}>

const PostLayout = ({children, frontMatter, sourceContent, ...otherProps}: PostLayoutProps) => {
  return (
    <ContentProvider>
      <PostHeader frontMatter={frontMatter}/>
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
  marginBottom: 24,
};

const PostLeftGroupStyles: CSS = {
  gridArea: 'post-left',
};

const PostContentGroupStyles: CSS = {
  gridArea: 'post-content',

  // Global rules
  color: theme.colors.content,
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.content,
  fontWeight: theme.fontWeights.content,
  lineHeight: theme.lineHeights.content,
  letterSpacing: theme.letterSpacings.content,
};

const PostRightGroupStyles: CSS = {
  gridArea: 'post-right'
};

export default PostLayout;