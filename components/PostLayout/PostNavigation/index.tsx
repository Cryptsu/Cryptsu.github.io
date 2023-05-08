import Style from "@/components/Style";
import PostNavigationButton from "./PostNavigationButton";
import { theme } from "@/lib/styles/stiches.config";
import { AppConfig } from "@/lib/config";
import { HtmlConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post";

type PostNavigationProps = PropsWithChildren<{
  prevPost: PostFrontMatterType | null,
  nextPost: PostFrontMatterType | null,
}>

const PostNavigation = ({children, prevPost, nextPost, ...otherProps}: PostNavigationProps) => {
  return (
    <Style style={PostNavigationWrapperStyles} {...otherProps}>
      
      <Style style={OtherPostGroupStyles}>
        <Style style={DividerStyles} elementName={HtmlConst.SPAN}/>
        <Style style={OtherPostsTextStyles}>
          {TxtConst.TXT_OTHER_POSTS}
        </Style>
        <Style style={DividerStyles} elementName={HtmlConst.SPAN}/>
      </Style>

      <Style style={PostNavigationButtonGroupStyles}>
        <PostNavigationButton direction={"prev"} postTitle={prevPost?.title} postLink={`/${AppConfig.POSTS_DIR}/${prevPost?.slug}`} />
        <PostNavigationButton direction={"next"} postTitle={nextPost?.title} postLink={`/${AppConfig.POSTS_DIR}/${nextPost?.slug}`} />
      </Style>

    </Style>
  )
}

const PostNavigationWrapperStyles: CSS = {
  width: "100%",
  fontFamily: theme.fonts.global,
  color: theme.colors.textGeneral,
};

const OtherPostGroupStyles: CSS = {
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  alignItems: "center",
  gap: "1.5em",

  fontSize: theme.fontSizes.h4,
  fontWeight: theme.fontWeights.h4,
  letterSpacing: theme.letterSpacings.h4,
};

const DividerStyles: CSS = {
  height: 0,
  border: 0,
  borderBottom: "0.25em",
  borderStyle: "solid",
  borderColor: theme.colors.divider25,
};

const OtherPostsTextStyles: CSS = {
  '&:before': {
    content: '< ',
    color: theme.colors.textLesser,
  },

  '&:after': {
    content: ' />',
    color: theme.colors.textLesser,
  }
}

const PostNavigationButtonGroupStyles: CSS = {
  paddingLeft: "2em",
  paddingRight: "2em",
  paddingTop: "1em",
  paddingBottom: "1em",

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "2.5em",
  '& > *': {
    width: "100%",
  },

  '@medium': {
    flexDirection: "column",
    gap: 16,
    '& > *': {
      width: "min(100%, 328px)",
    },
  },
};

export default PostNavigation;