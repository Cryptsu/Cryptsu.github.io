import Style from "@/components/Style";
import Callout, { CalloutHeaderStyles } from ".";
import { ShieldIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stitches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CautionProps = PropsWithChildren<{
  title?: string;
}>;

const Caution = ({ children, title, ...otherProps }: CautionProps) => (
  <Callout style={CautionStyles} {...otherProps}>
    {
      title
        ? <Style style={[CalloutHeaderStyles, CautionHeaderStyles]}>
            <ShieldIcon 
              width="1.5em"
              height="1.5em"
              style={{ 
                fill: theme.colors.caution 
              }}
            />
            {title}
          </Style>
        : <></>
    }
    {children}
  </Callout>
);

const CautionStyles: CSS = {
  backgroundColor: theme.colors.cautionBackground,
  borderColor: theme.colors.caution,
};

const CautionHeaderStyles: CSS = {
  color: theme.colors.caution,
};

export default Caution;
