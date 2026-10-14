import Style from "@/components/Style";
import { theme } from "@/lib/styles/stitches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CalloutProps = PropsWithChildren<{
  style?: CSS;
  title?: string;
}>;

const Callout = ({ children, style, ...otherProps }: CalloutProps) => {
  return (
    <Style styles={[CalloutStyles, style]} {...otherProps}>
      {children}
    </Style>
  );
};

const CalloutStyles: CSS = {
  margin: "0.75em -1em",
  padding: "0.75em 1.5em",

  // Box border
  borderLeft: "0.5em",
  borderRight: 0,
  borderTop: 0,
  borderBottom: 0,
  borderStyle: "groove",
  borderRadius: "1em",
  // backgroundImage: theme.colors.blockBackgroundShade,
  boxShadow: theme.shadows.depthShadow,

  // Text color
  color: theme.colors.textGeneral,
};

export const CalloutHeaderStyles: CSS = {
  gap: "1em",
  display: "flex",
  alignItems: "center",

  fontSize: theme.fontSizes.h4,
  fontWeight: theme.fontWeights.bold,
  
  "& > svg": {
    flex: "none",
  },
};

export default Callout;
