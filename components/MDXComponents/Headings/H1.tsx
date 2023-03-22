import Style from "@/components/Style"
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H1Props = PropsWithChildren<{

}>

const H1 = ({children, ...otherProps}: H1Props) => {
  return (
    <Style style={H1Styles}>
      {children}
    </Style>
  )
}

const H1Styles: CSS = {

};

export default H1;
