import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { LockLockedIcon } from "@/components/Icons";
import type { CSS } from "@stitches/react";

type LockProps = {
  disappearWhenSmall: boolean
};

const Lock = ({ disappearWhenSmall }: LockProps) => {
  return (
    <Style
      as={LockLockedIcon}
      viewBox="1 0 6 6" 
      style={{
        fill: theme.colors.primary,
        width: 24,
        height: 28,
        '@small': {
          display: disappearWhenSmall ? "" : "none",
        }
      }}
    />
  )
}

export default Lock;