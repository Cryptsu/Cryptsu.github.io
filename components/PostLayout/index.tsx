// All MDX components
import ContentProvider from "@/components/ContentProvider";
import Style from "@/components/Style";
import TableOfContent from "./TableOfContent";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";
import PostNavigation from "./PostNavigation";

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
        <Style style={PostLeftGroupStyles}>
        </Style>
        <Style style={PostContentGroupStyles}>
          <PostContent sourceContent={sourceContent}/>
          <Style style={PostNavigationGroupStyles}>
            <PostNavigation nextPost={nextPost} prevPost={prevPost} />
          </Style>
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
  color: theme.colors.textGeneral,
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.h5,
  fontWeight: theme.fontWeights.h5,
  lineHeight: theme.lineHeights.h5,
  letterSpacing: theme.letterSpacings.h5,
};

const PostRightGroupStyles: CSS = {
  gridArea: 'post-right'
};

const PostNavigationGroupStyles: CSS = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  paddingTop: 24,
  paddingBottom: 24,
}

export default PostLayout;