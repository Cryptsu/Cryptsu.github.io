import Style from "@/components/Style";
import { theme } from "@/lib/styles/stitches.config";
import type { PropsWithChildren } from "react";

type TextProps = PropsWithChildren<{
  color?: keyof typeof theme.colors,
}>

const Text = ({ children, color }: TextProps) => {
  const resolvedColor = (
    (color && color in theme.colors)
      ? theme.colors[color]
      : theme.colors.textGeneral
  );

  if (color && !(color in theme.colors))
    console.warn(`[Text] user requests color=${color}, but no such color is found. Fallback to default.`)

  return (
    <Style 
      elementName="text"
      css={{
        color: `${resolvedColor}`,
      }}
    >
      {children}
    </Style>
  )
}

export default Text;
