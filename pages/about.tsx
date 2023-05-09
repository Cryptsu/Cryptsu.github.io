import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type AboutProps = PropsWithChildren<{

}>

const About = () => {
  return (
    <Style style={AboutStyles}>
      hello
    </Style>
  )
}

const AboutStyles: CSS = {

};

export default About;