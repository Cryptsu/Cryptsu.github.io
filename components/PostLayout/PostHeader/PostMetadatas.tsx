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
            width: 16,
            height: 16
          }}
        />
        <Time dateStr={frontMatter.date}/>
      </Style>
      <Style style={PostMetadataStyles}>
        <NoteIcon
          style={{
            fill: theme.colors.tertiary,
            width: 16,
            height: 16
          }}
        />
        {`${frontMatter.noWords} ${TxtConst.TXT_WORDS}`}
      </Style>
      <Style style={PostMetadataStyles}>
        <ClockIcon
          style={{
            fill: theme.colors.tertiary,
            width: 16,
            height: 16
          }}
        />
        {`${frontMatter.minsRead} ${TxtConst.TXT_MIN_READ}`}
      </Style>
    </Style>
  )
}

const PostMetadatasStyles: CSS = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 16,

  color: theme.colors.textLesser,
  fontSize: theme.fontSizes.h5,
  letterSpacing: theme.letterSpacings.h5,
}

const PostMetadataStyles: CSS = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 8,
}

export default PostMetadatas;