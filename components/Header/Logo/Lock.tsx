import { theme } from "@/lib/styles/stiches.config";
import { LockLockedIcon } from "@/components/Icons";

const Lock = () => {
  return (
    <LockLockedIcon
      viewBox="1 0 6 6" 
      style={{
        fill: theme.colors.primary,
        width: 24,
        height: 28,
      }}
    />
  )
}

export default Lock;