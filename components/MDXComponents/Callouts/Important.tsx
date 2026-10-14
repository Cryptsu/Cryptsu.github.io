import Style from "@/components/Style";
import Callout, { CalloutHeaderStyles } from ".";
import { SparkleIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stitches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type ImportantProps = PropsWithChildren<{
  title?: string;
}>;

const Important = ({ children, title, ...otherProps }: ImportantProps) => (
  <Callout style={ImportantStyles} {...otherProps}>
    {
      title
        ? <Style style={[CalloutHeaderStyles, ImportantHeaderStyles]}>
            <SparkleIcon 
              width="1.5em"
              height="1.5em"
              style={{ 
                fill: theme.colors.important,
              }}
            />
            {title}
          </Style>
        : <></>
    }
    {children}
  </Callout>
);

const ImportantStyles: CSS = {
  backgroundColor: theme.colors.importantBackground,
  borderColor: theme.colors.important,
};

const ImportantHeaderStyles: CSS = {
  color: theme.colors.important,
};

export default Important;
