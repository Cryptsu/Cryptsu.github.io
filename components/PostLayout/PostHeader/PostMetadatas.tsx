import Style from "@/components/Style";
import Time from "@/components/Time";
import { CalendarIcon, NoteIcon, ClockIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stiches.config";
import { TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post.d";

type PostMetadatasProps = PropsWithChildren<{
  frontMatter: PostFrontMatterType
}>

const PostMetadatas = ({children, frontMatter, ...otherProps}: PostMetadatasProps) => {
  return (
    <Style style={PostMetadatasStyles}>
      <Style style={PostMetadataStyles}>
        <CalendarIcon
          style={{
            fill: theme.colors.tertiary,
            width: "1em",
            height: "1em"
          }}
        />
        <Time dateStr={frontMatter.date}/>
      </Style>
      <Style style={PostMetadataStyles}>
        <NoteIcon
          style={{
            fill: theme.colors.tertiary,
            width: "1em",
            height: "1em"
          }}
        />
        {`${frontMatter.noWords} ${TxtConst.TXT_WORDS}`}
      </Style>
      <Style style={PostMetadataStyles}>
        <ClockIcon
          style={{
            fill: theme.colors.tertiary,
            width: "1em",
            height: "1em"
          }}
        />
        {`${frontMatter.minsRead} ${TxtConst.TXT_MIN_READ}`}
      </Style>
    </Style>
  )
}

const PostMetadatasStyles: CSS = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
  gap: "1em",
  flexDirection: "row",
  '@small': {
    gap: "0.25em",
    flexDirection: "column",
  },

  color: theme.colors.textLesser,
  fontSize: theme.fontSizes.h5,
  letterSpacing: theme.letterSpacings.h5,
  '@medium': {
    fontSize: theme.fontSizes.h6,
    letterSpacing: theme.letterSpacings.h6,
  }
}

const PostMetadataStyles: CSS = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5em",
}

export default PostMetadatas;