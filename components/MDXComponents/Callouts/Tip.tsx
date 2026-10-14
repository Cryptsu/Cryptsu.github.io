import Style from "@/components/Style";
import Callout, { CalloutHeaderStyles } from ".";
import { LightBulbIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stitches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type TipProps = PropsWithChildren<{
  title?: string;
}>;

const Tip = ({ children, title, ...otherProps }: TipProps) => (
  <Callout style={TipStyles} {...otherProps}>
    {
      title
        ? <Style styles={[CalloutHeaderStyles, TipHeaderStyles]}>
            <LightBulbIcon 
              width="1.5em"
              height="1.5em"
              style={{ 
                fill: theme.colors.tip 
              }}
            />
            {title}
          </Style>
        : <></>
    }
    {children}
  </Callout>
);

const TipStyles: CSS = {
  backgroundColor: theme.colors.tipBackground,
  borderColor: theme.colors.tip,
};

const TipHeaderStyles: CSS = {
  color: theme.colors.tip,
};

export default Tip;
