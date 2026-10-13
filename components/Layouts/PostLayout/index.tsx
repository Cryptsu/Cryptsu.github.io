// All MDX components
import ContentProvider from "@/components/Providers/ContentProvider";
import Style from "@/components/Style";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";
import PostNavigation from "./PostNavigation";
import TableOfContentWrapper from "./TableOfContentWrapper";

import { theme } from "@/lib/styles/stitches.config";

import type { PropsWithChildren } from "react";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post.d";

type PostLayoutProps = PropsWithChildren<{
  frontMatter: PostFrontMatterType,
  sourceContent: MDXRemoteSerializeResult<Record<string, unknown>>,
  prevPost: PostFrontMatterType | null,
  nextPost: PostFrontMatterType | null,
}>

const PostLayout = ({children, frontMatter, sourceContent, prevPost, nextPost, ...otherProps}: PostLayoutProps) => {
  return (
    <ContentProvider>
      <PostHeader frontMatter={frontMatter}/>
      <Style style={PostContentGroupStyles}>
        <Style style={PostContentInnerStyles}>
          <PostContent sourceContent={sourceContent}/>
        </Style>
        <TableOfContentWrapper style={PostTOCGroupStyles}/>
        <PostNavigation
          style={PostNavigationGroupStyles}
          nextPost={nextPost}
          prevPost={prevPost}
        />
      </Style>
    </ContentProvider>
  )
}

const PostContentGroupStyles: CSS = {
  display: "grid",
  gridTemplateAreas: "'content-inner content-toc' 'content-nav content-toc'",
  gridTemplateColumns: "768px 280px",
  '@larger': {
    gridTemplateAreas: "'content-inner' 'content-nav'",
    gridTemplateColumns: "768px",
  },
  '@medium': {
    gridTemplateColumns: "calc(100vw - 32px)",
  },

  justifyContent: "center",
  marginBottom: "1.5em",

  // Global rules
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.h5,
  fontWeight: theme.fontWeights.h5,
  lineHeight: theme.lineHeights.h5,
  letterSpacing: theme.letterSpacings.h5,
};

const PostContentInnerStyles: CSS = {
  gridArea: "content-inner",
}

const PostTOCGroupStyles: CSS = {
  gridArea: "content-toc",
};

const PostNavigationGroupStyles: CSS = {
  gridArea: "content-nav",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  paddingTop: 24,
  paddingBottom: 24,
}

export default PostLayout;
