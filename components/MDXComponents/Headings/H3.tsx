import useContent from "@/hooks/useContent";
import useOnce from "@/hooks/useOnce";
import innerText from "react-innertext";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H3Props = PropsWithChildren<{
  id?: string,
}>

const H3 = ({children, id="", ...otherProps}: H3Props) => {
  const { addHeadingID } = useContent();
  useOnce(() => {
    addHeadingID(innerText(children), id, 3);
  }, []);

  return (
    <Style style={H3Styles} elementName={HtmlConst.H3} {...otherProps}>
      {children}
    </Style>
  )
}

const H3Styles: CSS = {
  // Font customizing
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.h3,
  fontWeight: theme.fontWeights.h3,
  letterSpacing: theme.letterSpacings.h3,
  lineHeight: theme.lineHeights.h3,
  color: theme.colors.contentText,
  textTransform: "uppercase",

  // Create margin
  marginTop: 12,
  marginBottom: 12,
};

export default H3;
