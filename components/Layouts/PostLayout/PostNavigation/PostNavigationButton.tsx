import NextLink from "next/link";
import Style from "@/components/Style";
import Button from "@/components/Button";
import { theme } from "@/lib/styles/stitches.config";
import { TxtConst } from "@/lib/consts";
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
        <Style style={PostNavigationArrowStyles}
          css={{
            color: direction === 'next'
                    ? (postTitle ? "var(--arrow-idle-next)" : "inherit")
                    : (postTitle ? "var(--arrow-idle-prev)" : "inherit")
          }}
        >
          {
            direction === 'next'
              ? (postTitle ? "==>" : "x")
              : (postTitle ? "<==" : "x")
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
  paddingTop: "1.5em",
  paddingBottom: "1.5em",
  borderRadius: 16,
  borderWidth: 4,

  '--arrow-idle-prev': theme.colors.prev,
  '--arrow-idle-next': theme.colors.next,
  '&:hover': {
    '--arrow-idle-prev': theme.colors.prevShadow,
    '--arrow-idle-next': theme.colors.nextShadow,
  },

  fontSize: theme.fontSizes.h5,
  fontWeight: theme.fontWeights.h5,
  letterSpacing: theme.letterSpacings.h5,
  '@small': {
    fontSize: theme.fontSizes.h6,
    fontWeight: theme.fontWeights.h6,
    letterSpacing: theme.letterSpacings.h6,
  },

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const PostNavigationButtonPrevStyles: CSS = {
  borderColor: theme.colors.prev,
  borderBottomStyle: "4px solid",
  borderLeft: `4px solid ${theme.colors.prev}`,
  borderRight: `4px solid ${theme.colors.prev}`,
  borderTop: `4px solid ${theme.colors.prev}`,

  backgroundColor: theme.colors.postPrevNavBackground,
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

  borderBottomStyle: "4px solid",
  borderLeft: `4px solid ${theme.colors.next}`,
  borderRight: `4px solid ${theme.colors.next}`,
  borderTop: `4px solid ${theme.colors.next}`,

  backgroundColor: theme.colors.postNextNavBackground,
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
  fontSize: theme.fontSizes.h4,
  fontWeight: theme.fontWeights.extrabold,
}

const PostLinkStyles: CSS = {
  color: theme.colors.textGeneral,
  // '&:link': {
  // },
  // '&:visited': {
  // },
}

const PostTitleStyles: CSS = {
  paddingLeft: 32,
  paddingRight: 32,
}

export default PostNavigationButton;
