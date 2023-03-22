import Style from "@/components/Style"
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H3Props = PropsWithChildren<{

}>

const H3 = ({children, ...otherProps}: H3Props) => {
  return (
    <Style style={H3Styles}>
      {children}
    </Style>
  )
}

const H3Styles: CSS = {

};

export default H3;
