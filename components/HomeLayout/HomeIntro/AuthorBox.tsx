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
      <Style src={AppConfig.AUTHOR_LOGO} as={HtmlConst.IMG} style={AuthorBoxLogoStyles}/>
      <Style style={AuthorBoxNameStyles}>
        {AppConfig.AUTHOR_NAME}
      </Style>
      <Style style={AuthorBoxDescStyles}>
        <BlinkingText text={AppConfig.AUTHOR_DESC} blinkColor={`${theme.colors.secondary}`} />
      </Style>
    </Style>
  )
}

const AuthorBoxStyles: CSS = {
  border: 2,
  borderRadius: 16,
  borderStyle: "dashed",
  borderColor: theme.colors.divider,

  paddingLeft: 80,
  paddingRight: 80,
  paddingTop: 16,
  paddingBottom: 16,

  backgroundColor: theme.colors.authorBackground,
  boxShadow: theme.shadows.homeAuthor,

  display: "grid",
  gridTemplateAreas: '"intro-author-logo intro-author-name" "intro-author-logo intro-author-desc"',
  columnGap: 32,
  rowGap: 4,

  fontFamily: theme.fonts.content,
};

const AuthorBoxLogoStyles: CSS = {
  gridArea: "intro-author-logo",
  borderRadius: "100%",
  width: 180,
  height: 180,
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
  color: theme.colors.textGeneral,
}

export default AuthorBox;