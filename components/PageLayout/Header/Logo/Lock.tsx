import { theme } from "@/lib/styles/stiches.config";
import { LockLockedIcon } from "@/components/Icons";

const Lock = () => {
  return (
    <LockLockedIcon
      viewBox="1 0 6 6" 
      style={{
        fill: theme.colors.primary,
        width: "1.5em",
        height: "1.75em",
      }}
    />
  )
}

export default Lock;