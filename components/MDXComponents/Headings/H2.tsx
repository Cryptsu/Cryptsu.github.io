import useContent from "@/hooks/useContent";
import useOnce from "@/hooks/useOnce";
import innerText from "react-innertext";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H2Props = PropsWithChildren<{
  id?: string,
}>

const H2 = ({children, id="", ...otherProps}: H2Props) => {
  const { addHeadingID } = useContent();
  useOnce(() => {
    addHeadingID(innerText(children), id, 2);
  }, []);

  return (
    <Style style={H2Styles} elementName={HtmlConst.H2} {...otherProps}>
      {children}
    </Style>
  )
}

const H2Styles: CSS = {
  // Font customizing
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.h2,
  fontWeight: theme.fontWeights.h2,
  letterSpacing: theme.letterSpacings.h2,
  lineHeight: theme.lineHeights.h2,
  color: theme.colors.contentText,
  textTransform: "uppercase",

  // Create margin
  marginTop: 16,
  marginBottom: 16,
};

export default H2;
