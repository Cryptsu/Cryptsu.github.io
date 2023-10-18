import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type YoutubeEmbedProps = PropsWithChildren<{
  id: string
}>

const YoutubeEmbed = ({children, id, ...otherProps}: YoutubeEmbedProps) => {
  return (
    <Style style={YoutubeEmbedStyles} elementName={HtmlConst.DIV} {...otherProps}>
      <Style
        elementName={HtmlConst.IFRAME}
        style={YoutubeEmbedIframeStyles}
        src={`https://www.youtube.com/embed/${id}`}
        title={children as string} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen={true} 
      />
    </Style>
  )
}

const YoutubeEmbedStyles: CSS = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const YoutubeEmbedIframeStyles: CSS = {
  width: "90%",
  height: 315,
  marginBottom: "1em",

  border: `0.1875em dashed ${theme.colors.tertiaryInactive}`,
  borderBottom: 0,
  borderRadius: "1em",
  boxShadow: `0px 0.75em ${theme.colors.tertiaryShadow}`
}

export default YoutubeEmbed;