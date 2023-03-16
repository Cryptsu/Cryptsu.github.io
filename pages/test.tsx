import { styled, theme } from "@/lib/styles/stiches.config"
import { LockLockedIcon } from "@/components/Icons";

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

const Icon = styled("svg", {
  width: "100px",
  height: "100px",
  verticalAlign: "-0.25em",
  margin: "0 0.075em",
  fill: "currentColor",
});

export default function Test() {
  return (
    <>
      <LockLockedIcon style={{ transform: "scale(30)" }}/>
    </>
  )
}
  