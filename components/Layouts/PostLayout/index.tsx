// All MDX components
import ContentProvider from "@/components/Providers/ContentProvider";
import Style from "@/components/Style";
import PostDescription from "./PostDescription";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";
import PostNavigation from "./PostNavigation";
import TableOfContentWrapper from "./TableOfContentWrapper";

import { theme } from "@/lib/styles/stiches.config";

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
      <Style style={PostLayoutStyles}>
        <Style style={PostContentGroupStyles}>
          <Style style={PostContentInnerStyles}>
            <PostDescription description={frontMatter.description}/>
            <PostContent sourceContent={sourceContent}/>
          </Style>
          <Style style={PostTOCGroupStyles}>
            <TableOfContentWrapper/>
          </Style>
          <Style style={PostNavigationGroupStyles}>
            <PostNavigation nextPost={nextPost} prevPost={prevPost} />
          </Style>
        </Style>
      </Style>
    </ContentProvider>
  )
}

const PostLayoutStyles: CSS = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "1.5em",
};

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

  // Global rules
  color: theme.colors.textGeneral,
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
  justifyContent: "center",
  alignItems: "center",

  paddingTop: 24,
  paddingBottom: 24,
}

export default PostLayout;