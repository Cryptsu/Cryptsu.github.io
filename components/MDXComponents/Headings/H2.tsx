import Style from "@/components/Style"
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H2Props = PropsWithChildren<{

}>

const H2 = ({children, ...otherProps}: H2Props) => {
  return (
    <Style style={H2Styles}>
      {children}
    </Style>
  )
}

const H2Styles: CSS = {

};

export default H2;
