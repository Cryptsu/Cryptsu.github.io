import { styled, defaultTheme } from "@/lib/styles/stiches.config"

const H1 = styled("p", 
  {
    fontFamily: defaultTheme.fonts.content,
    letterSpacing: "-0.05em",
    fontWeight: defaultTheme.fontWeights.h0,
    fontSize: defaultTheme.fontSizes.h1,
    margin: 0,
    textTransform: "uppercase",
    background: defaultTheme.colors.gradient,
    color: defaultTheme.colors.codeBoxMinimize,
  }
)

export default function Test() {
  return (
    <H1>
      {typeof defaultTheme}
    </H1>
  )
}
  