import Style from "@/components/Style"
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H4Props = PropsWithChildren<{

}>

const H4 = ({children, ...otherProps}: H4Props) => {
  return (
    <Style style={H4Styles}>
      {children}
    </Style>
  )
}

const H4Styles: CSS = {

};

export default H4;
