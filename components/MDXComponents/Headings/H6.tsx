import useContent from "@/hooks/useContent";
import useOnce from "@/hooks/useOnce";
import innerText from "react-innertext";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H6Props = PropsWithChildren<{
  id?: string,
}>

const H6 = ({children, id="", ...otherProps}: H6Props) => {
  const { addHeadingID } = useContent();
  useOnce(() => {
    addHeadingID(innerText(children), id, 6);
  }, []);

  return (
    <Style style={H6Styles} elementName={HtmlConst.H6} {...otherProps}>
      {children}
    </Style>
  )
}

const H6Styles: CSS = {
  // Font customizing
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.h6,
  fontWeight: theme.fontWeights.h6,
  letterSpacing: theme.letterSpacings.h6,
  lineHeight: theme.lineHeights.h6,
  color: theme.colors.contentText,
  textTransform: "uppercase",

  // Create margin
  marginTop: 8,
  marginBottom: 8,
};

export default H6;
