import Style from "@/components/Style"
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H5Props = PropsWithChildren<{

}>

const H5 = ({children, ...otherProps}: H5Props) => {
  return (
    <Style style={H5Styles}>
      {children}
    </Style>
  )
}

const H5Styles: CSS = {

};

export default H5;
