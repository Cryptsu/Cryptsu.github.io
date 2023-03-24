import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type BlogImgProps = PropsWithChildren<{

}>

const BlogImg = ({children, ...otherProps}: BlogImgProps) => {
  return (
    <Style style={BlogImgStyles}>
      <Style elementName={HtmlConst.IMG} {...otherProps}>
        {children}
      </Style>
    </Style>
  )
}

const BlogImgStyles: CSS = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default BlogImg;