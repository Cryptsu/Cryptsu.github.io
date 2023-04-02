import Style from "@/components/Style";
import Time from "@/components/Time";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post";

type PostOtherMetadataProps = PropsWithChildren<{
  post: PostFrontMatterType
}>

const PostOtherMetadata = ({children, post, ...otherProps}: PostOtherMetadataProps) => {
  return (
    <Style style={PostOtherMetadataStyles} {...otherProps}>
      {/* date | <time-read> */}
      <Style style={PostTimeReadStyles}>
        <Time dateStr={post.date}/> | {post.minsRead} {TxtConst.TXT_MIN_READ}
      </Style>

      {/* #hashtag-a #hashtag-b ... */}
      <Style style={PostHashtagsStyles}>
        {
          post.tags?.map((tag, index) => 
            <Style key={index} style={PostHashTagStyles}>
              {`#${tag}`}
            </Style>
          )
        }
      </Style>
    </Style>
  )
}

const PostOtherMetadataStyles: CSS = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  fontSize: theme.fontSizes.postMeta,
  fontWeight: theme.fontWeights.postMeta,
  letterSpacing: theme.letterSpacings.postMeta,
}

const PostTimeReadStyles: CSS = {
  display: "flex",
  justifyContent: "left",
  color: theme.colors.posts,
}

const PostHashtagsStyles: CSS = {
  display: "flex",
  justifyContent: "right",
  gap: 4,
}

const PostHashTagStyles: CSS = {
  color: theme.colors.hashtagInactive,
  '&:hover': {
    color: theme.colors.hashtagActive,
  }
}

export default PostOtherMetadata;