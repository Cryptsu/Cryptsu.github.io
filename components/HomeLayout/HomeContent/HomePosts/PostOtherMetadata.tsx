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
        <Time dateStr={post.date}/>&nbsp;|&nbsp;{post.minsRead} {TxtConst.TXT_MIN_READ}
      </Style>

      {/* #hashtag-a #hashtag-b ... */}
      <Style>
        {
          post.tags?.map((tag, index) => 
            <>
              <Style key={index} style={PostHashTagStyles} elementName={HtmlConst.SPAN}>
                {`#${tag}`}
              </Style>
              &nbsp;
            </>
          )
        }
      </Style>
    </Style>
  )
}

const PostOtherMetadataStyles: CSS = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: theme.fontSizes.h6,
  fontWeight: theme.fontWeights.bold,
  letterSpacing: theme.letterSpacings.h6,
}

const PostTimeReadStyles: CSS = {
  color: theme.colors.textLess,
}

const PostHashTagStyles: CSS = {
  color: theme.colors.primaryShadow,
  '&:hover': {
    color: theme.colors.primary,
    textDecoration: "underline",
  }
}

export default PostOtherMetadata;