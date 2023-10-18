import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type YoutubeEmbedProps = PropsWithChildren<{

}>

const YoutubeEmbed = ({children, ...otherProps}: YoutubeEmbedProps) => {
  return (
    <Style style={YoutubeEmbedStyles} elementName={HtmlConst.DIV} {...otherProps}>
      Your hand, understand.
      You're real to me.
      So real to me.
    </Style>
  )
}

const YoutubeEmbedStyles: CSS = {

};

export default YoutubeEmbed;