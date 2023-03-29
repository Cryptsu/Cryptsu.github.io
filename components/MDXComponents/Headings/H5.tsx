import useContent from "@/hooks/useContent";
import useOnce from "@/hooks/useOnce";
import innerText from "react-innertext";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H5Props = PropsWithChildren<{
  id?: string,
}>

const H5 = ({children, id="", ...otherProps}: H5Props) => {
  const { addHeadingID } = useContent();
  useOnce(() => {
    addHeadingID(innerText(children), id, 5);
  }, []);

  return (
    <Style style={H5Styles} elementName={HtmlConst.H5} {...otherProps}>
      {children}
    </Style>
  )
}

const H5Styles: CSS = {
  // Font customizing
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.h5,
  fontWeight: theme.fontWeights.h5,
  letterSpacing: theme.letterSpacings.h5,
  lineHeight: theme.lineHeights.h5,
  color: theme.colors.contentText,
  textTransform: "uppercase",

  // Create margin
  marginTop: 8,
  marginBottom: 8,
};

export default H5;
