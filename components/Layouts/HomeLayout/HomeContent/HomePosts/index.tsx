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
            <PostCover coverImageURL={post.coverImage} link={`/${AppConfig.POSTS_DIR}/${post.slug}`}/>
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
}

const HomePostsHeaderStyles: CSS = {
  fontFamily: theme.fonts.global,
  fontSize: `min(${theme.fontSizes.h1}, 8vh)`,
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
    content: "< ",
    color: theme.colors.textLeast,
  },
  '&:after': {
    content: " />",
    color: theme.colors.textLeast,
  },
}

const HomePostStyles: CSS = {
  paddingLeft: "1.5em",
  paddingRight: "1.5em",
  paddingBottom: "1.5em",
  paddingTop: "0.5em",

  display: "flex",
  flexDirection: "column",
  gap: "0.25em",

  fontFamily: theme.fonts.global,
  border: 0,
  borderTop: "0.125em",
  borderStyle: "dashed",
  borderColor: theme.colors.divider25,
};

export default HomePosts;