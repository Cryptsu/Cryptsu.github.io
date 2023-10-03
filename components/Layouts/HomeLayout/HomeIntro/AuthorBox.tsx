import Style from "@/components/Style";
import BlinkingText from "@/components/BlinkingText";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import { AppConfig } from "@/lib/config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type AuthorBoxProps = PropsWithChildren<{

}>

const AuthorBox = ({children, ...otherProps}: AuthorBoxProps) => {
  return (
    <Style style={AuthorBoxStyles} {...otherProps}>
      <Style style={AuthorBoxLogoStyles}>
        <Style style={AuthorBoxLogoImgStyles} src={AppConfig.AUTHOR_LOGO} as={HtmlConst.IMG}/>
      </Style>
      <Style style={AuthorBoxNameStyles}>
        {AppConfig.AUTHOR_NAME}
      </Style>
      <Style style={AuthorBoxDescStyles}>
        <BlinkingText text={AppConfig.DESCRIPTIONS.AUTHOR} blinkColor={`${theme.colors.secondary}`} />
      </Style>
    </Style>
  )
}

const AuthorBoxStyles: CSS = {
  border: "0.125em",
  borderRadius: 16,
  borderStyle: "dashed",
  borderColor: theme.colors.divider25,

  paddingLeft: 80,
  paddingRight: 80,
  paddingTop: 16,
  paddingBottom: 16,
  '@medium': {
    paddingLeft: "24px",
    paddingRight: "24px",
  },

  backgroundColor: theme.colors.authorBackground,
  boxShadow: theme.shadows.depthShadow,

  display: "grid",
  gridTemplateAreas: '"intro-author-logo intro-author-name" "intro-author-logo intro-author-desc"',
  '@large': {
    gridTemplateAreas: '"intro-author-logo" "intro-author-name" "intro-author-desc"'
  },
  columnGap: 32,
  rowGap: 4,

  fontFamily: theme.fonts.content,
};

const AuthorBoxLogoImgStyles: CSS = {
  borderRadius: "100%",
  width: 180,
  height: 180,
  '@tiny': {
    width: "80%",
    height: "auto",
  }, 
}

const AuthorBoxLogoStyles: CSS = {
  gridArea: "intro-author-logo",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const AuthorBoxNameStyles: CSS = {
  gridArea: "intro-author-name",

  display: "flex",
  justifyContent: "center",
  alignItems: "end",

  fontSize: theme.fontSizes.h4,
  fontWeight: theme.fontWeights.h4,
  letterSpacing: theme.letterSpacings.h4,
  textDecoration: "underline",
  color: theme.colors.tertiary,
}

const AuthorBoxDescStyles: CSS = {
  gridArea: "intro-author-desc",

  display: "flex",
  justifyContent: "center",
  alignItems: "top",
  textAlign: "center",

  fontSize: theme.fontSizes.h5,
  letterSpacing: theme.letterSpacings.h5,
  lineHeight: theme.lineHeights.h5,
  '@tiny': {
    fontSize: theme.fontSizes.h6,
    letterSpacing: theme.letterSpacings.h6,
    lineHeight: theme.lineHeights.h6,
  },
  color: theme.colors.textGeneral,
}

export default AuthorBox;