import Style from "@/components/Style"
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H6Props = PropsWithChildren<{

}>

const H6 = ({children, ...otherProps}: H6Props) => {
  return (
    <Style style={H6Styles}>
      {children}
    </Style>
  )
}

const H6Styles: CSS = {

};

export default H6;
