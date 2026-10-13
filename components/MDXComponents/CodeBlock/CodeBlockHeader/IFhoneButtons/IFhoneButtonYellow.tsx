import Style from "@/components/Style";
import { ArrowBothIcon, ReplyIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stitches.config";
import { ClassConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type IFhoneButtonYellowProps = PropsWithChildren<{
  onClick?: () => void;
  wrapCode: boolean;
  title?: string;
}>;

const IFhoneButtonYellow = ({
  children,
  wrapCode,
  ...otherProps
}: IFhoneButtonYellowProps) => {
  return (
    <Style
      className={ClassConst.CLASS_CODEBLOCK_BTN}
      style={IFhoneButtonYellowStyles}
      {...otherProps}
    >
      <Style
        style={IFhoneButtonIconStyles}
        as={wrapCode ? ArrowBothIcon : ReplyIcon}
      />
    </Style>
  );
};

const IFhoneButtonYellowStyles: CSS = {
  width: "0.75em",
  height: "0.75em",
  borderRadius: "100%",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: theme.colors.yellow,
  "&:hover": {
    backgroundColor: theme.colors.brightYellow,
  },
  "&:active": {
    backgroundColor: theme.colors.darkYellow,
    // a hack used to make the button sticks
    "&::after": {
      content: "",
      position: "absolute",
      inset: -12,
    },
  },
};

const IFhoneButtonIconStyles: CSS = {
  fill: theme.colors.black,
  width: "0.625em",
  height: "0.625em",

  transform: "scaleY(-1)",
  opacity: "0%",
  "&:hover": {
    opacity: "100%",
  },
};

export default IFhoneButtonYellow;
