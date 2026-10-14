import Style from "@/components/Style";
import Callout, { CalloutHeaderStyles } from ".";
import { AlertIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stitches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type WarningProps = PropsWithChildren<{
  title?: string;
}>;

const Warning = ({ children, title, ...otherProps }: WarningProps) => (
  <Callout style={WarningStyles} {...otherProps}>
    {
      title
        ? <Style styles={[CalloutHeaderStyles, WarningHeaderStyles]}>
            <AlertIcon 
              width="1.5em"
              height="1.5em"
              style={{ 
                fill: theme.colors.warning 
              }}
            />
            {title}
          </Style>
        : <></>
    }
    {children}
  </Callout>
);

const WarningStyles: CSS = {
  backgroundColor: theme.colors.warningBackground,
  borderColor: theme.colors.warning,
};

const WarningHeaderStyles: CSS = {
  color: theme.colors.warning,
};

export default Warning;
