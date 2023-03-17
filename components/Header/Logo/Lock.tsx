import { theme } from "@/lib/styles/stiches.config";
import { LockLockedIcon } from "@/components/Icons";

const Lock = () => {
  return (
    <>
      <LockLockedIcon 
        style={{
          fill: theme.colors.logoText,
          width: 24,
          height: 28
        }}
        viewBox="1 0 6 6" 
      />
    </>
  )
}

export default Lock;