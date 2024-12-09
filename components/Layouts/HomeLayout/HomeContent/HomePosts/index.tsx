import Style from "@/components/Style";
import PostCover from "./PostCover";
import PostTitle from "./PostTitle";
import PostDescription from "./PostDescription";
import PostOtherMetadata from "./PostOtherMetadata";
import { theme } from "@/lib/styles/stiches.config";
import { TxtConst } from "@/lib/consts";
import { AppConfig } from "@/lib/config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post";

type HomePostsProps = PropsWithChildren<{
  posts: PostFrontMatterType[]
}>

const HomePosts = ({children, posts, ...otherProps}: HomePostsProps) => {
  return (
    <>
      <Style style={HomePostsHeaderWrapperStyles}>
        <Style style={HomePostsHeaderStyles}>
          {TxtConst.TXT_POSTS}
        </Style>
      </Style>
      {
        posts.map((post, index) => 
          <Style key={index} style={HomePostStyles} {...otherProps}>
            <PostCover coverImageURL={post.coverImage} slug={post.slug} link={`/${AppConfig.POSTS_DIR}/${post.slug}`}/>
            <PostTitle title={post.title} link={`/${AppConfig.POSTS_DIR}/${post.slug}`}/>
            <PostDescription description={post.description}/>
            <PostOtherMetadata post={post}/>
          </Style>
        )
      }
    </>
  )
}

const HomePostsHeaderWrapperStyles: CSS = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
}

const HomePostsHeaderStyles: CSS = {
  fontFamily: theme.fonts.global,
  fontSize: `min(${theme.fontSizes.h1}, 8vw)`,
  fontWeight: theme.fontWeights.normal,
  letterSpacing: theme.letterSpacings.h1,
  
  color: theme.colors.tertiary,
  backgroundColor: theme.colors.postsBackground,
  boxShadow: `${theme.shadows.depthShadow}, ${theme.shadows.homePosts}`,

  borderRadius: 24,
  marginBottom: "0.25em",
  paddingLeft: "0.5em",
  paddingRight: "0.5em",
  '&:before': {
    content: "<",
    color: theme.colors.textLeast,
    paddingRight: "0.25em",
  },
  '&:after': {
    content: "/>",
    color: theme.colors.textLeast,
    paddingLeft: "0.125em",
  },
}

const HomePostStyles: CSS = {
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  paddingBottom: "1.5rem",
  paddingTop: "0.5rem",

  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",

  fontFamily: theme.fonts.global,
  border: 0,
  borderTop: "0.125rem",
  borderStyle: "dashed",
  borderColor: theme.colors.divider20,
};

export default HomePosts;