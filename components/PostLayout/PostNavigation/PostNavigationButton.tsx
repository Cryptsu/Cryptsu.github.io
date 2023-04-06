import NextLink from "next/link";
import Style from "@/components/Style";
import Button from "@/components/Button";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type PostNavigationButtonProps = PropsWithChildren<{
  direction: "prev" | "next",
  postTitle: string | undefined,
  postLink: string,
}>

const PostNavigationButton = ({children, direction, postTitle, postLink, ...otherProps}: PostNavigationButtonProps) => {
  return (
    <Style as={postTitle ? NextLink : undefined} style={PostLinkStyles} href={postLink}> 
      <Style 
        style={PostNavigationButtonStyles} 
        css={
          direction === 'next'
            ? (postTitle ? PostNavigationButtonNextStyles : PostNavigationButtonNextInactiveStyles)
            : (postTitle ? PostNavigationButtonPrevStyles : PostNavigationButtonPrevInactiveStyles)
        }
        as={Button} 
        {...otherProps}
      >
        <Style style={PostNavigationArrowStyles}>
          {
            direction === 'next'
              ? (postTitle ? "->" : "x")
              : (postTitle ? "<-" : "x")
          }
        </Style>
        <Style style={PostTitleStyles}>
          {
            postTitle 
              ? postTitle
              : TxtConst.TXT_NULL
          }
        </Style>
      </Style>
    </Style>
  )
}

const PostNavigationButtonStyles: CSS = {
  paddingTop: 24,
  paddingBottom: 24,
  borderRadius: 16,
  borderWidth: 4,

  fontSize: theme.fontSizes.h5,
  fontWeight: theme.fontWeights.h5,
  letterSpacing: theme.letterSpacings.h5,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const PostNavigationButtonPrevStyles: CSS = {
  borderColor: theme.colors.prev,
  boxShadow: theme.shadows.prevBtn,
  '&:hover': {
    backgroundColor: theme.colors.prev,
    fontWeight: theme.fontWeights.bold,
  },
  '&:active': {
    boxShadow: theme.shadows.prevBtnClick,
  }
};

const PostNavigationButtonPrevInactiveStyles: CSS = {
  color: theme.colors.textLesser,
  fontWeight: theme.fontWeights.bold,
  borderColor: theme.colors.prevInactive,
  backgroundColor: theme.colors.prevInactive,
  boxShadow: theme.shadows.prevBtn,
  '&:hover': {
    backgroundColor: theme.colors.prevInactive,
  },
  '&:active': {
    boxShadow: theme.shadows.prevBtnClick,
  }
};

const PostNavigationButtonNextStyles: CSS = {
  borderColor: theme.colors.next,
  boxShadow: theme.shadows.nextBtn,
  '&:hover': {
    backgroundColor: theme.colors.next,
    fontWeight: theme.fontWeights.bold,
  },
  '&:active': {
    boxShadow: theme.shadows.nextBtnClick,
  }
};

const PostNavigationButtonNextInactiveStyles: CSS = {
  color: theme.colors.textLesser,
  fontWeight: theme.fontWeights.bold,
  borderColor: theme.colors.nextInactive,
  backgroundColor: theme.colors.nextInactive,
  boxShadow: theme.shadows.nextBtn,
  '&:hover': {
    backgroundColor: theme.colors.nextInactive,
  },
  '&:active': {
    boxShadow: theme.shadows.nextBtnClick,
  }
};

const PostNavigationArrowStyles: CSS = {
  fontWeight: theme.fontWeights.bold,
}

const PostLinkStyles: CSS = {
  '&:link': {
    color: theme.colors.textGeneral,
  },
  '&:visited': {
    color: theme.colors.textGeneral,
  },
}

const PostTitleStyles: CSS = {
  paddingLeft: 32,
  paddingRight: 32,
}

export default PostNavigationButton;