import { styled, theme } from "@/lib/styles/stiches.config"
import type { ComponentProps } from "react";

const H1 = styled("p", 
  {
    fontFamily: theme.fonts.content,
    letterSpacing: "-0.05em",
    fontWeight: theme.fontWeights.h0,
    fontSize: theme.fontSizes.h1,
    margin: 0,
    textTransform: "uppercase",
    background: theme.colors.gradient,
    color: theme.colors.contentText,
  }
)

export default function Test() {
  return (
    <>
      <H1>
        Raccacoonie
      </H1>
    </>
  )
}
  