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
      <Style style={HomePostsHeaderStyles}>
        {TxtConst.TXT_POSTS}
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

const HomePostsHeaderStyles: CSS = {
  fontFamily: theme.fonts.posts,
  fontSize: theme.fontSizes.postsHeader,
  fontWeight: theme.fontWeights.postsHeader,
  letterSpacing: theme.letterSpacings.postsHeader,
  color: theme.colors.posts,

  paddingBottom: 8,
  paddingLeft: 16,

  '&:before': {
    content: "< ",
    color: theme.colors.postsHeaderTag,
  },
  '&:after': {
    content: " />",
    color: theme.colors.postsHeaderTag,
  }
}

const HomePostStyles: CSS = {
  paddingLeft: 24,
  paddingRight: 24,
  paddingBottom: 24,
  paddingTop: 8,

  display: "flex",
  flexDirection: "column",
  gap: 4,

  fontFamily: theme.fonts.posts,
  border: 0,
  borderTop: 2,
  borderStyle: "dashed",
  borderColor: theme.colors.divider,
};

export default HomePosts;